import {StorageFile, StorageFilesList, throwError} from '@deckdeckgo/editor';
import {keys, set, del} from 'idb-keyval';
import {encodeFilename} from '../utils/storage.utils';
export interface SlideProxy {
  uploadFile(data: File, folder: string): Promise<StorageFile>
  getFiles(folder: string): Promise<StorageFile[]>
}

export const uploadOfflineFile = async (data: File, folder: string, maxSize: number): Promise<StorageFile | undefined> => {
  return new Promise<StorageFile>(async (resolve) => {
    try {
      if (!data || !data.name) {
        throwError('File not valid.');
        resolve(undefined);
        return;
      }

      if (data.size > maxSize) {
        throwError(`File is too big (max. ${maxSize / 1048576} Mb)`);
        resolve(undefined);
        return;
      }

      // @ts-ignore
      if (window.slideProxy) {
        // @ts-ignore
        const proxy = window.slideProxy as SlideProxy;
        resolve(proxy.uploadFile(data, folder));
        return;
      }

      const key: string = `/assets/local/${folder}/${encodeFilename(data)}`;

      await set(key, data);

      resolve({
        downloadUrl: key,
        fullPath: key,
        name: data.name
      });
    } catch (err) {
      throwError('File could not be saved.');
      resolve(undefined);
    }
  });
};

export const getOfflineFiles = (folder: string): Promise<StorageFilesList | null> => {
  return new Promise<StorageFilesList | null>(async (resolve) => {

    // @ts-ignore
    if (window.slideProxy) {
      // @ts-ignore
      const proxy = window.slideProxy as SlideProxy;
      resolve({
        items: await proxy.getFiles(folder),
        nextPageToken: undefined
      });
      return;
    }

    const storageKeys: IDBValidKey[] = await keys();

    if (!storageKeys || storageKeys.length <= 0) {
      resolve(null);
      return;
    }

    const filteredKeys: IDBValidKey[] = storageKeys.filter((key: IDBValidKey) => {
      return (key as string).indexOf(`/assets/local/${folder}/`) > -1;
    });

    if (!filteredKeys || filteredKeys.length <= 0) {
      resolve(null);
      return;
    }

    const items: StorageFile[] = filteredKeys.map((key: IDBValidKey) => {
      return {
        downloadUrl: key,
        fullPath: key,
        name: key
      } as StorageFile;
    });

    resolve({
      items,
      nextPageToken: undefined
    });
  });
};
