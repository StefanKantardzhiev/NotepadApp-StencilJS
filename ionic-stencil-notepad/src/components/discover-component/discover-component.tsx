import { Component, h } from '@stencil/core';

@Component({
  tag: 'discover-component',
  styleUrl: 'discover-component.css',
})
export class DiscoverComponent {
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
    this.girls.filter(girl => girl.name != girl.name);
  };

  render() {
    return (
      <ion-content class="discover" color="dark">
        <ion-header>
          <ion-toolbar color="dark">
            <ion-title>5Based</ion-title>
          </ion-toolbar>
        </ion-header>
        {this.girls.map(user => (
          <ion-card class="discover-card" href={'/profile/' + user.name.toLowerCase()} key={user.name}>
            <ion-avatar>
              <img alt="Silhouette of mountains" src={user.img} />
            </ion-avatar>

            <ion-card-header>
              <ion-card-title>
                {user.name} ({user.age})
              </ion-card-title>
              <ion-card-subtitle>Top Influencer</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>Here's a small text description for the card content. Nothing more, nothing less.</ion-card-content>
            <ion-buttons class="home-btns">
              <ion-button class="home-btn">
                <ion-icon name="checkmark-outline"></ion-icon>
              </ion-button>
              <ion-button class="reject-btn">
                <ion-icon name="close-outline"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-card>
        ))}
      </ion-content>
    );
  }
}
