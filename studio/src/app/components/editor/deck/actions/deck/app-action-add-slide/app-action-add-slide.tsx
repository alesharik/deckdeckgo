import {Component, Element, Event, EventEmitter, h, JSX, Prop} from '@stencil/core';
import i18n from '../../../../../../stores/i18n.store';

@Component({
  tag: 'app-action-add-slide',
  shadow: false
})
export class AppActionAddSlide {
  @Element() el: HTMLElement;

  @Prop()
  slidesLength: number | undefined;

  @Prop()
  popoverCssClass: string;

  @Event({bubbles: true})
  private addSlide: EventEmitter<JSX.IntrinsicElements>;

  async onActionOpenSlideAdd($event: CustomEvent) {
    if (!$event || !$event.detail) {
      return;
    }
    this.addSlide.emit();
  }

  render() {
    return (
      <app-action-busy
        aria-label={i18n.state.editor.add_slide}
        iconName="add"
        onActionReady={($event: CustomEvent) => this.onActionOpenSlideAdd($event)}>
        <ion-label aria-hidden="true">{i18n.state.editor.add_slide}</ion-label>
      </app-action-busy>
    );
  }
}
