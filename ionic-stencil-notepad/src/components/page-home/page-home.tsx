import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  // shadow: true,
})
export class PageHome {
  @State() mode: string;

  constructor() {
    this.mode = localStorage.getItem('mode') || 'auto';
  }

  setMode(mode: string) {
    if (mode == this.mode) {
      return;
    }
    this.mode = mode;
    switch (mode) {
      case 'md':
      case 'ios':
        localStorage.setItem('mode', mode);
        break;
      default:
        localStorage.removeItem('mode');
        break;
    }
    location.reload();
  }

  names = [{ name: 'Alice', age: '30', city: 'Burgas' }];

  render() {
    return (
      <ion-content color={'dark'}>
        <ion-header>
          <ion-toolbar color="dark">
            <ion-title>5Based</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-menu contentId="main-content">
          <ion-header>
            <ion-toolbar>
              <ion-title>5based</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-nav-link router-direction="forward" component="login-component">
              <ion-button color={'dark'}>
                {' '}
                <ion-route url="/login" component="login-component"></ion-route>Login
              </ion-button>
            </ion-nav-link>

            <ion-nav-link router-direction="forward" component="register">
              <ion-button color={'primary'}>Register</ion-button>
            </ion-nav-link>
          </ion-content>
        </ion-menu>

        <ion-router-outlet id="main-content"></ion-router-outlet>
        {/* <ion-content class="ion-padding">
            <ion-list>
              {/* {this.names.map(user => ( */}
        {/* <ion-item href={'/profile/' + user.name.toLowerCase()} key={user.name}>
                  <ion-label>{user.name} is following you!</ion-label>
                </ion-item>
              ))} */}
        {/* </ion-list>
          </ion-content> */}
      </ion-content>
    );
  }
}
