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
      city: 'Varna',
      img: `https://media.glamour.com/photos/60ec8c044b69168174d4d344/master/w_2560%2Cc_limit/118199090_660701904827587_4866693903082711670_n.jpg`,
    },
    {
      name: 'Ginka',
      age: '30',
      city: 'Burgas',
      img: `https://img5.arthub.ai/user-uploads/93f82f9c7fd99dc50d9ab56e58fa1a4822f454b0/b9b0dafa-d9d7-4c33-86ec-b0103b56221c/ah3-f6b363ab02d1.jpeg`,
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
        {/* 
        <ion-side-pane>
          <ion-menu contentId="main-content" auto-hide="true">
            <ion-header>
              <ion-toolbar>
                <ion-title>5based</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
              <ion-nav-link router-direction="forward" component="login-component">
                <ion-button color={'dark'}>Login</ion-button>
              </ion-nav-link>

              <ion-nav-link router-direction="forward" component="register-component">
                <ion-button color={'primary'}>Register</ion-button>
              </ion-nav-link>
            </ion-content>
          </ion-menu>
        </ion-side-pane> */}
        =
        {this.girls.map(user => (
          <ion-card class="home-girls">
            <ion-avatar>
              <img
                alt="Silhouette of mountains"
                src="https://www.ubuy.co.de/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFrdmpuVWh4TVMuX0FDX1NMMTUwMF8uanBn.jpg"
              />
            </ion-avatar>
            <ion-card-header>
              <ion-card-title>{user.name}</ion-card-title>
              <ion-card-subtitle>{user.age}</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>Here's a small text description for the card content. Nothing more, nothing less.</ion-card-content>
          </ion-card>
        ))}
        {/* <ion-router-outlet id="main-content">
          <ion-content></ion-content>
        </ion-router-outlet> */}
      </ion-content>
    );
  }
}
