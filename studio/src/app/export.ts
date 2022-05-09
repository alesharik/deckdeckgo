import {Deck, Slide} from "@deckdeckgo/editor";

import {getMany, set, setMany, clear} from "idb-keyval";
import editorStore from "./stores/editor.store";
import {ImportData, syncUpdateDeck, syncUpdateSlide} from "@deckdeckgo/sync";
import {setEditDocId} from "@deckdeckgo/offline";

const getSlides = async (): Promise<Slide[] | undefined> => {
  const deck: Deck | undefined = editorStore.state.deck;

  if (!deck.data.slides || deck.data.slides.length <= 0) {
    return [];
  }

  try {
    const keys: string[] = deck.data.slides.map((slideId: string) => `/decks/${deck.id}/slides/${slideId}`);
    return getMany<Slide>(keys);
  } catch (err) {
    throw new Error('Error while fetching slides');
  }
};

export function exportSlides(): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const deck: Deck | undefined = editorStore.state.deck;
      const slides: Slide[] | undefined = await getSlides();

      resolve(JSON.stringify({
        data: {
          id: deck?.id,
          ...(deck && {deck}),
          ...(slides && {slides}),
        }
      }));
    } catch (e: unknown) {
      reject(e)
    }
  })
}

const importEditorSync = async ({deck, slides}: ImportData) => {
  await syncUpdateDeck(deck.id);

  for (let {id: slideId} of slides) {
    await syncUpdateSlide({deckId: deck.id, slideId});
  }
};

// @ts-ignore
export const importEditorData = async ({id, deck, slides}: unknown) => {
  await setMany(slides?.map((slide: Slide) => [`/decks/${id}/slides/${slide.id}`, slide]));
  await set(`/decks/${id}`, deck);
  await importEditorSync({deck: deck, slides: slides} as ImportData);
  await setEditDocId(id);

  // @ts-ignore
  document.dispatchEvent(new CustomEvent<{deckId: string}>('reloadEditor', {
    bubbles: true,
    detail: {
      deckId: id
    }
  }))
};


export const importData = async (dat: string) => {
  const data = JSON.parse(dat);
  await importEditorData(data.data);
};

export async function deleteAllLocal() {
  await clear();
}
