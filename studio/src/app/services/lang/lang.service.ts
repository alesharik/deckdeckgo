import {get} from 'idb-keyval';
import i18n from '../../stores/i18n.store';

export class LangService {
  private static instance: LangService;

  private constructor() {
    // Private constructor, singleton
  }

  static getInstance() {
    if (!LangService.instance) {
      LangService.instance = new LangService();
    }
    return LangService.instance;
  }

  async init() {
    try {
      const lang: Languages | null = await get<Languages>('deckdeckgo_lang');

      if (lang) {
        i18n.state.lang = lang;
        return;
      }

      this.initDefaultLang();
    } catch (err) {
      console.warn(`Couldn't find lang. Proceeding with default`);
    }
  }

  private initDefaultLang() {
    i18n.state.lang = 'ru';
  }
}
