import {StorageFile} from '@deckdeckgo/editor';

export interface SlideProxy {
  uploadFile(data: File, folder: string): Promise<StorageFile>
  getFiles(): Promise<StorageFile[]>
}

