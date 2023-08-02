import { Component, Fragment, h, State } from '@stencil/core';

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
      <ion-content>
        <Fragment>
          <ion-header>
            <ion-toolbar color="primary">
              <ion-title>Notes</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content class="ion-padding">
            <ion-list>
              {this.names.map(user => (
                <ion-item href={'/profile/' + user.name.toLowerCase()} key={(user.name)}>
                  <ion-label>{user.name} is following you!</ion-label>
                </ion-item>
              ))}
            </ion-list>
          </ion-content>
        </Fragment>
      </ion-content>
    );
  }
}
