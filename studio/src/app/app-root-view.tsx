import {Component, h, State} from '@stencil/core';

@Component({
  tag: 'app-root-view',
  styleUrl: 'app-root.scss'
})
export class AppRoot {

  @State()
  private loading: boolean = true;

  async componentDidLoad() {
    this.loading = false;
  }

  render() {
    return (
      <ion-app class={this.loading ? 'loading' : undefined}>
        <ion-router useHash={false}>
          <ion-route url=":any" component="app-remote-viewer"></ion-route>
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
