import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css',
  // shadow: true,
})
export class AppTabs {
  render() {
    return (
      <ion-tabs>
        <ion-tab tab="tab-home">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab tab="tab-notes">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab-bar slot="bottom" color="dark">
          <ion-tab-button tab="tab-home">
            <ion-icon name="home" color='primary'></ion-icon>
            <ion-label>Home</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-notes">
            <ion-icon name="notifications"></ion-icon>
            <ion-badge color="danger"></ion-badge>
            <ion-label>Notifications</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    );
  }
}
