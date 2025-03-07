import {AuthUser, StorageFile, StorageFilesList, throwError} from '@deckdeckgo/editor';
import {Component, ComponentInterface, Event, EventEmitter, h, Host, Method, Prop, State, Watch} from '@stencil/core';
import {Constants} from '../../../../config/constants';
import authStore from '../../../../stores/auth.store';
import i18n from '../../../../stores/i18n.store';
import {getOfflineFiles} from "@deckdeckgo/offline";

@Component({
  tag: 'app-storage-files',
  styleUrl: 'app-storage-files.scss'
})
export class AppStorageFiles implements ComponentInterface {
  private paginationNext: string | null;

  @Prop()
  folder!: 'data' | 'images';

  @Prop()
  admin: boolean = false;

  @State()
  private loading: boolean = true;

  @State()
  private disableInfiniteScroll = false;

  @State()
  private files: StorageFile[] = [];

  @Event()
  selectAsset: EventEmitter<StorageFile>;

  private destroyListener;

  async componentDidLoad() {
    this.destroyListener = authStore.onChange('authUser', async (_authUser: AuthUser | null) => {
      await this.search();
    });

    await this.search();
  }

  disconnectedCallback() {
    this.destroyListener?.();
  }

  @Watch('folder')
  async onFolderChange() {
    await this.resetAndSearch();
  }

  @Method()
  async resetAndSearch() {
    this.disableInfiniteScroll = false;
    this.files = [];
    this.loading = true;

    await this.search();
  }

  private async search() {
    const {items, nextPageToken}: StorageFilesList = await this.loadFiles();

    this.files = [...this.files, ...items];
    this.paginationNext = nextPageToken;

    this.disableInfiniteScroll = items.length < Constants.STORAGE.MAX_QUERY_RESULTS - 1 || !this.paginationNext;

    this.loading = false;
  }

  private async loadFiles(): Promise<StorageFilesList> {
    try {
      const list: StorageFilesList = await getOfflineFiles(this.folder);

      if (!list || !list.items || list.items.length <= 0) {
        return {
          items: [],
          nextPageToken: null
        };
      }

      return list;
    } catch (err) {
      throwError('Storage files cannot be loaded.');

      return {
        items: [],
        nextPageToken: null
      };
    }
  }

  private async searchNext($event: CustomEvent<void>) {
    await this.search();

    await ($event.target as HTMLIonInfiniteScrollElement).complete();
  }

  private async removeStorageFile({detail}: CustomEvent<string>) {
    this.files = [...this.files.filter(({fullPath}: StorageFile) => fullPath !== detail)];

    await this.resetAndSearch();
  }

  render() {
    return (
      <Host>
        {this.renderContent()}

        <ion-infinite-scroll
          threshold="100px"
          disabled={this.disableInfiniteScroll}
          onIonInfinite={async ($event: CustomEvent<void>) => await this.searchNext($event)}>
          <ion-infinite-scroll-content loadingText={i18n.state.core.loading}></ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </Host>
    );
  }

  private renderContent() {
    if (!this.files || this.files.length <= 0) {
      return this.renderPlaceHolder();
    }

    return this.renderFiles();
  }

  private renderPlaceHolder() {
    if (this.loading) {
      return undefined;
    }

    return <ion-label class="empty">{i18n.state.editor.your_collection_empty}</ion-label>;
  }

  private renderFiles() {
    return this.files.map((storageFile: StorageFile, index: number) => {
      return this.renderFile(storageFile, index);
    });
  }

  private renderFile(storageFile: StorageFile, index: number) {
    if (this.folder === 'images') {
      return (
        <article custom-tappable onClick={() => this.selectAsset.emit(storageFile)} key={`file-${index}`}>
          <app-asset-image image={storageFile}></app-asset-image>

          {this.admin && (
            <app-storage-admin
              storageFile={storageFile}
              onFileDeleted={async ($event: CustomEvent<string>) => await this.removeStorageFile($event)}></app-storage-admin>
          )}
        </article>
      );
    }

    return (
      <article custom-tappable class="data" onClick={() => this.selectAsset.emit(storageFile)} key={`file-${index}`}>
        <app-asset-data data={storageFile}></app-asset-data>

        {this.admin && (
          <app-storage-admin
            storageFile={storageFile}
            onFileDeleted={async ($event: CustomEvent<string>) => await this.removeStorageFile($event)}></app-storage-admin>
        )}
      </article>
    );
  }
}
