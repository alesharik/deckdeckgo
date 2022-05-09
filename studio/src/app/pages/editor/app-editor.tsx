import {SyncEvent} from '@deckdeckgo/editor';
import {initSyncState, sync} from '@deckdeckgo/sync';
import {Component, ComponentInterface, h, Listen, Prop} from '@stencil/core';
import {startSyncTimer, stopSyncTimer} from '../../workers/sync.worker';
import {worker} from '../../workers/sync.worker.ts?worker';

@Component({
  tag: 'app-editor',
  styleUrl: 'app-editor.scss'
})
export class AppDeckEditor implements ComponentInterface {
  private deckEditorRef: HTMLAppDeckEditorElement;

  @Prop() autoConnect: boolean = false;

  async componentDidLoad() {
    await this.syncData();
  }

  async disconnectedCallback() {
    await stopSyncTimer();
  }

  private async syncData() {
    await startSyncTimer();

    worker.onmessage = async ({data}: MessageEvent<SyncEvent>) => {
      if (!data || data.msg !== 'deckdeckgo_sync') {
        return;
      }
      // @ts-ignore
      if (window.slideProxy) {
        // @ts-ignore
        window.slideProxy.onSync();
      }
      await sync(data.data);
    };

    await initSyncState();
  }

  @Listen('reloadEditor', {target: 'document'})
  async onReloadEditor() {
    await this.deckEditorRef?.initNewDeck();
  }

  render() {
    return (
      <app-deck-editor ref={(el) => (this.deckEditorRef = el as HTMLAppDeckEditorElement)} autoConnect={this.autoConnect}></app-deck-editor>
    );
  }
}
