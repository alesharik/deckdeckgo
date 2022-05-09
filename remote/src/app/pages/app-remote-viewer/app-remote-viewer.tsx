import {Component, Element, State, h, JSX, Listen} from '@stencil/core';

import {isMobile} from '@deckdeckgo/utils';

import remoteStore from '../../stores/remote.store';

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
  tag: 'app-remote-viewer',
  styleUrl: 'app-remote-viewer.scss'
})
export class AppRemoteViewer {
  @Element() el: HTMLElement;

  private stateDestroyListener;
  private eventDestroyListener;

  @State() private connectionState: ConnectionState = ConnectionState.DISCONNECTED;

  // @State() private deckWidth: number;
  // @State() private deckHeight: number;

  @State() private slides: JSX.IntrinsicElements[] = [];
  @State() private slideIndex: number = 0;

  @State() private deckAttributes: any;

  @State() private deckReveal: boolean = true;
  @State() private deckRevealOnMobile: boolean = false;

  @State() action: DeckdeckgoSlideAction;

  @State() extraPlayAction: boolean = false;

  private communicationService: CommunicationService;
  private accelerometerService: AccelerometerService;
  private deckLoaded: boolean = false;

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
      if ($event.type === DeckdeckgoEventType.SLIDES_ANSWER) {
        // @ts-ignore
        if (!$event.deck) {
          return;
        }
        if (this.deckLoaded) {
          return;
        }
        this.deckLoaded = true
        await this.initDeckAndSlides($event as DeckdeckgoEventDeck);
      } else if ($event.type === DeckdeckgoEventType.DECK_UPDATE) {
        await this.initDeckAndSlides($event as DeckdeckgoEventDeck);
      } else if ($event.type === DeckdeckgoEventType.SLIDE_UPDATE) {
        await this.lazyLoadPollContent($event as DeckdeckgoEventSlide);
        await this.updateSlide($event as DeckdeckgoEventSlide);
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


  @Listen('mousedown', {capture: true})
  mousedown($event: MouseEvent) {
    $event.stopPropagation();
  }

  @Listen('touchstart', {capture: true})
  touchstart($event: TouchEvent) {
    $event.stopPropagation();
  }

  @Listen('mouseup', {capture: true})
  async mouseup($event: MouseEvent) {
    $event.stopPropagation();
  }

  @Listen('touchend', {capture: true})
  async touchend($event: TouchEvent) {
    $event.stopPropagation();
  }

  @Listen('mousemove', {capture: true})
  async mousemove($event: MouseEvent) {
    $event.stopPropagation();
  }

  @Listen('touchmove', {capture: true})
  async touchmove($event: TouchEvent) {
    $event.stopPropagation();
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
  }

  private deckSize(): Promise<void> {
    return new Promise<void>((resolve) => {
      const container: HTMLElement = this.el.querySelector('div.deck');

      if (!container) {
        return;
      }

      // this.deckWidth = container.offsetWidth;
      // this.deckHeight = container.offsetHeight;

      const header: HTMLElement = this.el.querySelector('ion-header');

      if (!header) {
        return;
      }
      //
      // this.drawHeightOffset = header.offsetHeight + parseInt(window.getComputedStyle(container).marginTop);
      // this.drawWidthOffset = parseInt(window.getComputedStyle(container).marginLeft);

      resolve();
    });
  }

  private async afterSwipe() {
    await this.setActiveIndex();

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
          contentEditable={false}>
          {this.slides}
        </deckgo-deck>
        {/*<deckgo-remote width={this.deckWidth} height={this.deckHeight} autoConnect={true} />*/}
      </div>
    );
  }
}
