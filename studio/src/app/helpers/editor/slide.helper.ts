import {Deck, Slide, throwError} from '@deckdeckgo/editor';
import {getOfflineSlide} from '@deckdeckgo/offline';
import {loadDeck} from '@deckdeckgo/sync';
import {JSX} from '@stencil/core';
import busyStore from '../../stores/busy.store';
import editorStore from '../../stores/editor.store';
import {ParseSlidesUtils} from '../../utils/editor/parse-slides.utils';
import {TemplateUtils} from '../../utils/editor/template.utils';

export class SlideHelper {
  loadDeckAndRetrieveSlides(deckId: string): Promise<JSX.IntrinsicElements[]> {
    return new Promise<JSX.IntrinsicElements[]>(async (resolve) => {
      busyStore.state.busy = true;

      try {
        const deck: Deck = await loadDeck(deckId);

        if (!deck.data.slides || deck.data.slides.length <= 0) {
          resolve([]);
          return;
        }

        const promises: Promise<JSX.IntrinsicElements>[] = [];
        deck.data.slides.forEach((slideId: string) => {
          promises.push(this.fetchSlide(deck, slideId));
        });

        let parsedSlides: any[] = [];
        if (promises.length > 0) {
          parsedSlides = await Promise.all(promises);
        }

        if (!parsedSlides || parsedSlides.length <= 0) {
          resolve([]);
          return;
        }

        busyStore.state.busy = false;

        resolve(parsedSlides);
      } catch (err) {
        throwError(err);
        busyStore.state.busy = false;
        resolve(null);
      }
    });
  }

  private fetchSlide(deck: Deck, slideId: string): Promise<JSX.IntrinsicElements> {
    return new Promise<JSX.IntrinsicElements>(async (resolve) => {
      try {
        const slide: Slide = await getOfflineSlide(deck.id, slideId);

        await TemplateUtils.loadSlideTemplate(slide);

        const element: JSX.IntrinsicElements = await ParseSlidesUtils.parseSlide(slide, true);

        resolve(element);
      } catch (err) {
        throwError('Something went wrong while loading and parsing a slide');
        resolve(null);
      }
    });
  }

  copySlide(slide: HTMLElement): Promise<JSX.IntrinsicElements> {
    return new Promise<JSX.IntrinsicElements>(async (resolve) => {
      try {
        if (!slide) {
          resolve(null);
          return;
        }

        if (!slide.getAttribute('slide_id')) {
          throwError('Slide is not defined');
          resolve(null);
          return;
        }

        const slideId: string = slide.getAttribute('slide_id');

        let element: JSX.IntrinsicElements = null;

        if (editorStore.state.deck?.data) {
          const slide: Slide = await getOfflineSlide(editorStore.state.deck.id, slideId);
          element = await ParseSlidesUtils.parseSlide(slide, true, true);
        }

        busyStore.state.busy = false;

        resolve(element);
      } catch (err) {
        throwError(err);
        busyStore.state.busy = false;
        resolve(null);
      }
    });
  }
}
