import {selectDeckSlide} from '@deckdeckgo/editor';
import {DeckdeckgoEventDeckRequest} from '@deckdeckgo/types';
import {isMobile} from '@deckdeckgo/utils';
import type {OverlayEventDetail} from '@ionic/core';
import {popoverController} from '@ionic/core';
import {Component, Element, Event, EventEmitter, h, JSX, Prop} from '@stencil/core';
import i18n from '../../../../../../stores/i18n.store';
import remoteStore from '../../../../../../stores/remote.store';
import {AppIcon} from '../../../../../core/app-icon/app-icon';

@Component({
  tag: 'app-actions-deck',
  shadow: false
})
export class AppActionsDeck {
  @Element() el: HTMLElement;

  @Prop()
  fullscreen: boolean = false;

  @Prop()
  slides: JSX.IntrinsicElements[] = [];

  @Prop()
  animatePrevNextSlide: EventEmitter;

  @Prop()
  toggleFullScreen: EventEmitter;

  @Prop()
  deckDidChange: EventEmitter;

  @Event()
  private selectDeck: EventEmitter<void>;

  @Event()
  private stepTo: EventEmitter<HTMLElement | undefined>;

  private destroyListener;

  // Drag and drop is not supported on iOS and Firefox on Android
  private mobile: boolean = isMobile();

  async componentWillLoad() {
    this.destroyListener = remoteStore.onChange('pendingRequests', async (requests: DeckdeckgoEventDeckRequest[] | undefined) => {
      if (requests && requests.length > 0) {
        await this.openRemoteControlRequest();
      }

      this.destroyListener();
    });
  }

  disconnectedCallback() {
    if (this.destroyListener) {
      this.destroyListener();
    }
  }

  private async openSlideNavigate() {
    const popover: HTMLIonPopoverElement = await popoverController.create({
      component: 'app-slide-navigate',
      mode: 'ios',
      showBackdrop: false,
      cssClass: 'popover-menu popover-menu-wide'
    });

    popover.onDidDismiss().then(async ({data}: OverlayEventDetail) => {
      if (data !== undefined) {
        const slide: HTMLElement | null = selectDeckSlide(data);

        this.stepTo.emit(slide);
      }
    });

    await popover.present();
  }

  private async openRemoteControlRequest() {
    const popover: HTMLIonPopoverElement = await popoverController.create({
      component: 'app-remote-request',
      mode: 'ios',
      cssClass: 'info'
    });

    await popover.present();
  }

  async openDeckStyle() {
    this.selectDeck.emit();

    const popover: HTMLIonPopoverElement = await popoverController.create({
      component: 'app-deck-style',
      componentProps: {
        deckDidChange: this.deckDidChange
      },
      mode: 'ios',
      showBackdrop: false,
      cssClass: 'popover-menu popover-menu-wide'
    });

    await popover.present();
  }

  render() {
    return (
      <aside>
        <ion-buttons slot="start">
          <app-action-add-slide slidesLength={this.slides?.length}></app-action-add-slide>

          <button
            onMouseDown={($event) => $event.stopPropagation()}
            onTouchStart={($event) => $event.stopPropagation()}
            aria-label={i18n.state.editor.previous}
            onClick={() => this.animatePrevNextSlide.emit(false)}
            class="ion-activatable">
            <ion-ripple-effect></ion-ripple-effect>
            <AppIcon name="arrow-back" ariaLabel="" ariaHidden={true}></AppIcon>
            <ion-label aria-hidden="true">{i18n.state.editor.previous}</ion-label>
          </button>

          <button
            onMouseDown={($event) => $event.stopPropagation()}
            onTouchStart={($event) => $event.stopPropagation()}
            aria-label={i18n.state.editor.next}
            onClick={() => this.animatePrevNextSlide.emit(true)}
            class="ion-activatable">
            <ion-ripple-effect></ion-ripple-effect>
            <AppIcon name="arrow-forward" ariaLabel="" ariaHidden={true}></AppIcon>
            <ion-label aria-hidden="true">{i18n.state.editor.next}</ion-label>
          </button>

          <button
            onMouseDown={($event) => $event.stopPropagation()}
            onTouchStart={($event) => $event.stopPropagation()}
            aria-label={i18n.state.editor.slides}
            onClick={() => this.openSlideNavigate()}
            color="primary"
            class={`ion-activatable wider-devices ${!this.mobile ? 'hide-slide-navigate' : ''}`}>
            <ion-ripple-effect></ion-ripple-effect>
            <AppIcon name="md-list" ariaLabel="" ariaHidden={true}></AppIcon>
            <ion-label aria-hidden="true">{i18n.state.editor.slides}</ion-label>
          </button>

          <app-action-busy aria-label="Style" iconName="brush" onActionReady={() => this.openDeckStyle()}>
            <ion-label aria-hidden="true">{i18n.state.editor.style}</ion-label>
          </app-action-busy>
        </ion-buttons>
      </aside>
    );
  }
}
