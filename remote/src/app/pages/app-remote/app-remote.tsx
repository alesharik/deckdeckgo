import {Component, Element, Prop, State, h, JSX} from '@stencil/core';

import {isMobile} from '@deckdeckgo/utils';

import notesStores from '../../stores/notes.store';
import remoteStore from '../../stores/remote.store';
import accStore from '../../stores/accelerometer.store';

// Types
import {
  DeckdeckgoEvent,
  DeckdeckgoEventEmitter,
  DeckdeckgoEventType,
  DeckdeckgoEventDeck,
  DeckdeckgoEventSlideTo,
  DeckdeckgoSlideAction,
  DeckdeckgoEventSlideAction,
  DeckdeckgoEventSlide,
  DeckdeckgoEventNextPrevSlide,
  DeckdeckgoEventDeckReveal,
  ConnectionState
} from '@deckdeckgo/types';

// Utils
import {ParseSlidesUtils} from '../../utils/parse-slides.utils';
import {ParseAttributesUtils} from '../../utils/parse-attributes.utils';

// Services
import {CommunicationService} from '../../services/communication/communication.service';
import {AccelerometerService} from '../../services/accelerometer/accelerometer.service';

@Component({
  tag: 'app-remote',
  styleUrl: 'app-remote.scss'
})
export class AppRemote {
  @Element() el: HTMLElement;

  @Prop()
  room: string;

  private stateDestroyListener;
  private eventDestroyListener;

  @State() private connectionState: ConnectionState = ConnectionState.DISCONNECTED;

  @State() private slides: JSX.IntrinsicElements[] = [];
  @State() private slideIndex: number = 0;

  @State() private deckAttributes: any;

  @State() private deckReveal: boolean = true;
  @State() private deckRevealOnMobile: boolean = false;

  @State() action: DeckdeckgoSlideAction;

  @State() extraPlayAction: boolean = false;

  private destroyAcceleratorListener;
  private destroyAcceleratorInitListener;
  private deckLoaded: boolean = false;
  private currentSlide: number = 0;

  private communicationService: CommunicationService;
  private accelerometerService: AccelerometerService;

  constructor() {
    this.communicationService = CommunicationService.getInstance();
    this.accelerometerService = AccelerometerService.getInstance();
  }

  async componentDidLoad() {
    this.stateDestroyListener = remoteStore.onChange('state', async (state: ConnectionState) => {
      this.connectionState = state;

      if (state === ConnectionState.CONNECTED) {
        this.communicationService.emit({
          type: DeckdeckgoEventType.SLIDES_REQUEST,
          emitter: DeckdeckgoEventEmitter.APP
        });
      }
    });

    this.eventDestroyListener = remoteStore.onChange('$event', async ($event: DeckdeckgoEvent) => {
      if ($event.emitter === DeckdeckgoEventEmitter.DECK) {
        if ($event.type === DeckdeckgoEventType.SLIDES_ANSWER) {
          if (this.deckLoaded) {
            await this.slidePickerTo(this.currentSlide);
            return;
          }
          this.deckLoaded = true;
          await this.initDeckAndSlides($event as DeckdeckgoEventDeck);
          await this.slidePickerTo(0);
        } else if ($event.type === DeckdeckgoEventType.DECK_UPDATE) {
          await this.initDeckAndSlides($event as DeckdeckgoEventDeck);
          await this.setNotes();
        } else if ($event.type === DeckdeckgoEventType.SLIDE_UPDATE) {
          await this.lazyLoadPollContent($event as DeckdeckgoEventSlide);
          await this.updateSlide($event as DeckdeckgoEventSlide);
          await this.setNotes();
        } else if ($event.type === DeckdeckgoEventType.NEXT_SLIDE) {
          await this.animateNextSlide(($event as DeckdeckgoEventNextPrevSlide).slideAnimation);
        } else if ($event.type === DeckdeckgoEventType.PREV_SLIDE) {
          await this.animatePrevSlide(($event as DeckdeckgoEventNextPrevSlide).slideAnimation);
        } else if ($event.type === DeckdeckgoEventType.SLIDE_TO) {
          const index: number = ($event as DeckdeckgoEventSlideTo).index;
          const speed: number = ($event as DeckdeckgoEventSlideTo).speed;

          await this.slideTo(index, speed);
        } else if ($event.type === DeckdeckgoEventType.DELETE_SLIDE) {
          await this.deleteSlide();
        } else if ($event.type === DeckdeckgoEventType.SLIDE_ACTION) {
          this.action = ($event as DeckdeckgoEventSlideAction).action;
        } else if ($event.type === DeckdeckgoEventType.DECK_REVEAL_UPDATE) {
          this.deckReveal = ($event as DeckdeckgoEventDeckReveal).reveal;
        }
      }
    });

    this.destroyAcceleratorListener = accStore.onChange('trigger', async (prev: boolean) => {
      await this.prevNextSlide(prev, false);

      setTimeout(async () => {
        await this.startAccelerometer();
      }, this.accelerometerService.delay);
    });

    this.destroyAcceleratorInitListener = accStore.onChange('initialized', async (initialized: boolean) => {
      if (initialized) {
        const deck: HTMLElement = this.el.querySelector('deckgo-deck');

        if (deck) {
          await this.startAccelerometer();
        }
      }
    });

    if (window) {
      window.addEventListener('resize', async () => {
        await this.deckSize();
      });
    }

    await this.connect();
  }

  componentDidRender() {
    document.querySelectorAll("*[contenteditable]").forEach(value => value.removeAttribute('contenteditable'));
    document.querySelectorAll("*[resize]").forEach(value => value.removeAttribute('resize'));
    document.querySelectorAll("*[rotation]").forEach(value => value.removeAttribute('rotation'));
    document.querySelectorAll("*[drag]").forEach(value => value.setAttribute('drag', 'none'));
  }

  private initDeckAndSlides($event: DeckdeckgoEventDeck): Promise<void> {
    return new Promise<void>(async (resolve) => {
      if ($event && $event.deck) {
        const slidesElements: JSX.IntrinsicElements[] = await ParseSlidesUtils.parseSlides($event.deck);
        this.slides = [...slidesElements];

        const attributes = await ParseAttributesUtils.parseAttributes($event.deck.attributes);

        this.deckAttributes = {
          ...attributes,
          direction: attributes.direction !== 'papyrus' ? attributes.direction : 'horizontal',
          'direction-mobile': attributes.direction !== 'papyrus' ? attributes.direction : 'horizontal'
        };

        this.deckRevealOnMobile = !$event.mobile && isMobile() ? $event.deck.reveal : $event.deck.revealOnMobile;
        this.deckReveal = $event.deck.reveal;
      } else {
        this.slides = undefined;
      }

      resolve();
    });
  }

  private updateSlide($event: DeckdeckgoEventSlide): Promise<void> {
    return new Promise<void>(async (resolve) => {
      if ($event && $event.slide && this.slides && this.slides.length >= $event.index) {
        const slideElement: JSX.IntrinsicElements = await ParseSlidesUtils.parseSlide($event.slide, $event.index);
        this.slides[$event.index] = slideElement;

        this.slides = [...this.slides];
      }

      resolve();
    });
  }

  async disconnectedCallback() {
    await this.disconnect();

    if (this.stateDestroyListener) {
      this.stateDestroyListener();
    }

    if (this.eventDestroyListener) {
      this.eventDestroyListener();
    }

    if (this.destroyAcceleratorListener) {
      this.destroyAcceleratorListener();
    }

    if (this.destroyAcceleratorInitListener) {
      this.destroyAcceleratorInitListener();
    }
  }

  private deckSize(): Promise<void> {
    return new Promise<void>((resolve) => {
      const container: HTMLElement = this.el.querySelector('div.deck');

      if (!container) {
        return;
      }


      resolve();
    });
  }

  private async prevNextSlide(prev: boolean, slideAnimation: boolean) {
    if (prev) {
      await this.emitPrevSlide(slideAnimation);
      await this.animatePrevSlide(slideAnimation);
    } else {
      await this.emitNextSlide(slideAnimation);
      await this.animateNextSlide(slideAnimation);
    }
  }

  private async slideDidChange(prev: boolean) {
    if (prev) {
      await this.emitPrevSlide(false);
    } else {
      await this.emitNextSlide(false);
    }

    await this.afterSwipe();
  }

  private async emitNextSlide(slideAnimation: boolean): Promise<void> {
    await this.emitPrevNextSlide(DeckdeckgoEventType.NEXT_SLIDE, slideAnimation);
    this.currentSlide++;
  }

  private async emitPrevSlide(slideAnimation: boolean) {
    await this.emitPrevNextSlide(DeckdeckgoEventType.PREV_SLIDE, slideAnimation);
    this.currentSlide--;
  }

  private async emitPrevNextSlide(type: DeckdeckgoEventType, slideAnimation: boolean) {
    this.emitSlidePrevNext(type, slideAnimation);
  }

  private async afterSwipe() {
    await this.setActiveIndex();
    await this.setNotes();

    this.action = null;
  }

  private setActiveIndex(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const deck: HTMLElement = this.el.querySelector('deckgo-deck');

      if (!deck) {
        resolve();
        return;
      }

      this.slideIndex = await (deck as any).getActiveIndex();

      this.setExtraPlayAction();

      resolve();
    });
  }

  private setExtraPlayAction() {
    const element: HTMLElement = this.el.querySelector('.deckgo-slide-container:nth-child(' + (this.slideIndex + 1) + ')');

    this.extraPlayAction =
      element &&
      element.nodeName &&
      (element.nodeName.toLowerCase() === 'deckgo-slide-youtube' || element.nodeName.toLowerCase() === 'deckgo-slide-video');
  }

  private async setNotes() {
    let next: HTMLElement = null;

    if (this.slides && this.slides.length > this.slideIndex) {
      next = this.el.querySelector('.deckgo-slide-container:nth-child(' + (this.slideIndex + 1) + ')');
    }

    notesStores.state.currentSlide = next;
  }

  private async lazyLoadPollContent($slideEvent: DeckdeckgoEventSlide) {
    if (!$slideEvent || !$slideEvent.slide || !document) {
      return;
    }

    if ($slideEvent.slide.template !== 'deckgo-slide-poll') {
      return;
    }

    if (this.slides.length < $slideEvent.index) {
      return;
    }

    document.addEventListener(
      'slideDidLoad',
      async ($event: CustomEvent) => {
        if ($event && $event.target && typeof ($event.target as any).lazyLoadContent === 'function') {
          await ($event.target as any).lazyLoadContent();
        }
      },
      {once: true}
    );
  }

  private emitSlidePrevNext(type: DeckdeckgoEventType, slideAnimation: boolean) {
    this.communicationService.emit({
      type: type,
      emitter: DeckdeckgoEventEmitter.APP,
      slideAnimation: slideAnimation
    });
  }

  private async animateNextSlide(slideAnimation: boolean) {
    await this.animatePrevNextSlide(true, slideAnimation);

    await this.afterSwipe();
  }

  private async animatePrevSlide(slideAnimation: boolean) {
    await this.animatePrevNextSlide(false, slideAnimation);

    await this.afterSwipe();
  }

  private async animatePrevNextSlide(next: boolean, slideAnimation: boolean) {
    const deck: HTMLElement = this.el.querySelector('deckgo-deck');

    if (!deck) {
      return;
    }

    if (next) {
      await (deck as any).slideNext(slideAnimation, false);
    } else {
      await (deck as any).slidePrev(slideAnimation, false);
    }
  }

  private async slideTo(index: number, speed?: number | undefined) {
    const deck: HTMLElement = this.el.querySelector('deckgo-deck');

    if (!deck) {
      return;
    }

    const deckLength: number = await (deck as any).getLength();

    if (index >= deckLength) {
      return;
    }

    await (deck as any).slideTo(index, speed);

    await this.afterSwipe();
  }

  private async deleteSlide() {
    const deck: HTMLElement = this.el.querySelector('deckgo-deck');

    if (!deck) {
      return;
    }

    await (deck as any).deleteActiveSlide();

    if (this.slides && this.slides.length > this.slideIndex && this.slideIndex >= 0) {
      this.slides.splice(this.slideIndex, 1);
      this.slideIndex = this.slideIndex > 0 ? this.slideIndex - 1 : 0;

      this.setExtraPlayAction();
    }
  }

  private moveDraw(event: CustomEvent<number>): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const draw: HTMLAppDrawElement = this.el.querySelector('app-draw');

      if (!draw) {
        resolve();
        return;
      }

      await draw.moveDraw(event.detail, '300ms');

      resolve();
    });
  }

  private scrollDraw(event: CustomEvent<number>): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const draw: HTMLAppDrawElement = this.el.querySelector('app-draw');

      if (!draw) {
        resolve();
        return;
      }

      await draw.moveDraw(event.detail, '0ms');

      resolve();
    });
  }

  private async emitAction($event: UIEvent) {
    $event.stopPropagation();

    this.action = this.action === DeckdeckgoSlideAction.PLAY ? DeckdeckgoSlideAction.PAUSE : DeckdeckgoSlideAction.PLAY;

    this.communicationService.emit({
      type: DeckdeckgoEventType.SLIDE_ACTION,
      emitter: DeckdeckgoEventEmitter.APP,
      action: this.action
    });

    await this.actionPlayPause();
  }

  private actionPlayPause(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const deck = this.el.querySelector('deckgo-deck');

      if (!deck) {
        resolve();
        return;
      }

      const index = await (deck as any).getActiveIndex();

      const slideElement: any = this.el.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

      if (!slideElement) {
        resolve();
        return;
      }

      if (this.action === DeckdeckgoSlideAction.PAUSE) {
        await slideElement.pause();
      } else {
        await slideElement.play();
      }

      resolve();
    });
  }

  async slidePickerTo(newSlideIndex: number) {
    await this.slideTo(newSlideIndex);

    this.communicationService.emit({
      type: DeckdeckgoEventType.SLIDE_TO,
      emitter: DeckdeckgoEventEmitter.APP,
      index: newSlideIndex
    });
  }

  private async connect() {
    await this.disconnect();
    await this.communicationService.connect();
  }

  private async disconnect() {
    this.communicationService.disconnect();
    await this.accelerometerService.stop();
  }

  private async initDeck() {
    await this.deckSize();
    await this.startAccelerometer();
    await this.setNotes();
  }

  private async startAccelerometer() {
    try {
      await this.accelerometerService.start();
    } catch (err) {
      // Well then no accelerometer support
    }
  }

  render() {
    return [<ion-content>{this.renderContent()}</ion-content>];
  }

  private renderContent() {
    if (this.connectionState === ConnectionState.CONNECTED) {
      return [
        <main class="connected">
          <div class="deck-container">
            {this.renderDeck()}

            <div class="deck-navigation-container">
              <div class="deck-navigation-button deck-navigation-button-prev"
                   onClick={() => this.prevNextSlide(true, true)}>
                <span>&lt;</span>
              </div>
              <div class="deck-navigation-button deck-navigation-button-next"
                   onClick={() => this.prevNextSlide(false, true)}>
                <span>&gt;</span>
              </div>
            </div>

            {this.renderExtraActions()}
          </div>
        </main>
      ];
    } else if (this.connectionState !== ConnectionState.DISCONNECTED) {
      let text: string = 'Not connected';

      if (this.connectionState === ConnectionState.CONNECTING) {
        text = 'Connecting.';
      } else if (this.connectionState === ConnectionState.CONNECTED_WITH_SIGNALING_SERVER) {
        text = 'Connected with the signaling server, waiting for the presentation.';
      } else if (this.connectionState === ConnectionState.NOT_CONNECTED) {
        text = "Can' connect, shit happens 😉 Try to reload your presentation.";
      }

      return (
        <main>
          <h1 class="ion-padding">{text}</h1>
          <ion-spinner name="dots" color="primary"></ion-spinner>
        </main>
      );
    } else {
      return (
        <main>
          <h1 class="ion-padding-start ion-padding-end ion-padding-top">The DeckDeckGo remote control</h1>
          <div class="deck-action-button deck-action-button-screen-center">
          </div>
        </main>
      );
    }
  }

  private renderDeck() {
    return (
      <div class="deck">
        <deckgo-deck
          embedded={true}
          {...this.deckAttributes}
          keyboard={false}
          revealOnMobile={this.deckRevealOnMobile}
          reveal={this.deckReveal}
          onSlidesDidLoad={() => this.initDeck()}
          onSlideNextDidChange={() => this.slideDidChange(false)}
          onSlidePrevDidChange={() => this.slideDidChange(true)}
          onSlideWillChange={(event: CustomEvent<number>) => this.moveDraw(event)}
          contentEditable={false}
          onSlideDrag={(event: CustomEvent<number>) => this.scrollDraw(event)}>
          {this.slides}
        </deckgo-deck>
        {/*<app-draw*/}
        {/*  width={this.deckWidth}*/}
        {/*  height={this.deckHeight}*/}
        {/*  slides={this.slides.length}*/}
        {/*  heightOffset={this.drawHeightOffset}*/}
        {/*  widthOffset={this.drawWidthOffset}></app-draw>*/}
      </div>
    );
  }

  private renderExtraActions() {
    if (this.extraPlayAction) {
      const icon: string = this.action === DeckdeckgoSlideAction.PLAY ? 'pause' : 'play';

      return (
        <div class="deck-action-button">
          <button
            onClick={(e: UIEvent) => this.emitAction(e)}
            aria-label={icon}
            style={{'--action-button-background': 'var(--ion-color-tertiary'}}>
            <ion-icon name={icon} class={`deck-action-button-icon-${icon}`}></ion-icon>
          </button>
        </div>
      );
    } else {
      return undefined;
    }
  }
}
