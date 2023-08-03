import { Component, h, Prop, State } from '@stencil/core';

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

  girls = [
    {
      name: 'Jeanie',
      age: '30',
      city: 'Burgas',
      img: `https://media.glamour.com/photos/60ec8c044b69168174d4d344/master/w_2560%2Cc_limit/118199090_660701904827587_4866693903082711670_n.jpg`,
    },
    {
      name: 'Sonya',
      age: '30',
      city: 'Burgas',
      img: `https://img6.arthub.ai/64cb5ee7-f58b.webp`,
    },
    {
      name: 'Ginka',
      age: '30',
      city: 'Burgas',
      img: `https://img6.arthub.ai/64cb7ffc-33ab.webp`,
    },
  ];
  removeGirl = () => {
    this.girls.filter(user => user.name === user.name);
  };

  render() {
    return (
      <ion-content color={'dark'}>
        <ion-header>
          <ion-toolbar color="dark">
            <ion-title>5Based</ion-title>
          </ion-toolbar>
        </ion-header>

        {this.girls.map(user => (
          <ion-card class="discover-card" href={'/profile/' + user.name.toLowerCase()} key={(user.name)}>
            <ion-avatar>
              <img
                alt="girl-pic"
                src={user.img}
              />
            </ion-avatar>
            <ion-card-header>
              <ion-card-title>{user.name}</ion-card-title>
              <ion-card-subtitle>{user.age}</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>Here's a small text description for the card content. Nothing more, nothing less.</ion-card-content>
          </ion-card>
        ))}
      </ion-content>
    );
  }
}
