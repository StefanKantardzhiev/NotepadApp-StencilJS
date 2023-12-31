import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true,
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route-redirect from="/" to="/tab/home"></ion-route-redirect>

          <ion-route url="/tab" component="app-tabs">
            <ion-route url="/home" component="tab-home">
              <ion-route component="page-home"></ion-route>
            </ion-route>

            <ion-route url="/notes" component="tab-notes">
              <ion-route component="page-notes"></ion-route>
            </ion-route>

            <ion-route url="/discover" component="tab-discover">
              <ion-route component="discover-component"></ion-route>
            </ion-route>

            <ion-route url="/messages" component="tab-messages">
              <ion-route component="messages-component"></ion-route>
            </ion-route>
          </ion-route>

          <ion-route url="/profile" component="tab-profile">
            <ion-route component="profile-page"></ion-route>
          </ion-route>

          <ion-route url="/profile/:name" component="page-profile"></ion-route>
        </ion-router>

        <ion-nav></ion-nav>
      </ion-app>
    );
  }
}
