import { Component, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'page-profile',
  styleUrl: 'page-profile.css',
  // shadow: true,
})
export class PageProfile {
  @Prop()
  name: string;

  users = [
    { name: 'Alice', age: '30', city: 'Burgas', img: 'https://img6.arthub.ai/64a935f0-92be.webp' },
    { name: 'Stefan', age: '32', city: 'Varna', img: 'https://img6.arthub.ai/64a935f0-92be.webp' },
    { name: 'Peter', age: '22', city: 'Essen', img: 'https://img6.arthub.ai/64a935f0-92be.webp' },
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
    {
      name: 'Jane',
      age: '30',
      city: 'Tokyo',
      img: `https://img6.arthub.ai/64c92ca7-a482.webp`,
    },
    {
      name: 'Elene',
      age: '30',
      city: 'Berlin',
      img: `https://img6.arthub.ai/64ca4ecb-94c7.webp`,
    },
    {
      name: 'Heidi',
      age: '20',
      city: 'Dortmund',
      img: `https://img6.arthub.ai/64cb4b8e-3007.webp`,
    },
  ];

  currentUser = this.users.find(user => user.name === this.normalize(this.name));

  normalize(name: string): string {
    name = name || '';
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="dark">
            <ion-buttons slot="start" color="dark">
              <ion-back-button defaultHref="/tab/notes"></ion-back-button>
            </ion-buttons>

            <ion-title>Profile: {this.name}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content fullscreen class="ion-padding" color={'medium'}>
          <ion-card class="profile-card" color={'dark'}>
            <ion-avatar>
              <img src={this.currentUser.img} alt="girl-pic" />
            </ion-avatar>
            <ion-card-header>
              <h1>Name: {this.currentUser.name}</h1>
            </ion-card-header>
            <ion-card-content>
              <p>Age: {this.currentUser.age}</p>
              <p>City: {this.currentUser.city}</p>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </Fragment>
    );
  }
}
