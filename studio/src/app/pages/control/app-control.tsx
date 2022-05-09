import {Component, ComponentInterface, h, Listen} from '@stencil/core';

@Component({
  tag: 'app-control',
  styleUrl: 'app-control.scss'
})
export class AppControl implements ComponentInterface {
  private deckEditorRef: HTMLAppDeckEditorElement;

  @Listen('reloadEditor', {target: 'document'})
  async onReloadEditor() {
    await this.deckEditorRef?.initNewDeck();
  }

  render() {
    return (
      <div>
        {/*<app-deck-editor ref={(el) => (this.deckEditorRef = el as HTMLAppDeckEditorElement)}/>*/}
        <app-remote />
      </div>
    );
  }
}
