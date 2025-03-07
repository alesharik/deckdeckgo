import {get} from 'idb-keyval';
import settingsStore from '../../stores/settings.store';
import {SettingsPanels} from '../../types/core/settings';

export class SettingsService {
  private static instance: SettingsService;

  private constructor() {
    // Private constructor, singleton
  }

  static getInstance() {
    if (!SettingsService.instance) {
      SettingsService.instance = new SettingsService();
    }
    return SettingsService.instance;
  }

  async init() {
    try {
      const settingsPanels: SettingsPanels | null = await get<SettingsPanels>('deckdeckgo_settings_panels');

      if (settingsPanels) {
        settingsStore.state.panels = settingsPanels;
      }

      const contrastWarning: boolean | null = await get<boolean>('deckdeckgo_settings_contrast_warning');

      settingsStore.state.editMode = 'properties';
      settingsStore.state.contrastWarning = contrastWarning ?? true;
    } catch (err) {
      console.warn(`Couldn't find settings for panels. Proceeding with default`);
    }
  }
}
