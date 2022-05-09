import {Build, Component, h, State} from '@stencil/core';

import {AccelerometerService} from './services/accelerometer/accelerometer.service';
import {ThemeService} from './services/theme/theme.service';

@Component({
  tag: 'app-root-control',
  styleUrl: 'app-root.scss'
})
export class AppRootControl {
  private accelerometerService: AccelerometerService;

  private themeService: ThemeService;

  @State()
  private loading: boolean = true;

  constructor() {
    this.accelerometerService = AccelerometerService.getInstance();
    this.themeService = ThemeService.getInstance();
  }

  async componentWillLoad() {
    await this.themeService.initDarkModePreference();
  }

  async componentDidLoad() {
    this.loading = false;


    if (Build.isBrowser) {
      await this.accelerometerService.init();
    }
  }

  render() {
    return (
      <ion-app class={this.loading ? 'loading' : undefined}>
        <ion-router useHash={false}>
          <ion-route url=":any" component="app-remote"></ion-route>
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
