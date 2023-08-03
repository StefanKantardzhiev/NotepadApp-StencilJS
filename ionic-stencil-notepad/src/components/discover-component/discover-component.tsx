import { Component, h } from '@stencil/core';

@Component({
  tag: 'discover-component',
  styleUrl: 'discover-component.css',
})
export class DiscoverComponent {
  girls = [
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
        <ion-grid>
          <ion-row>
            {this.girls.map(user => (
              <ion-col>
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
              </ion-col>
            ))}
          </ion-row>
        </ion-grid>
      </ion-content>
    );
  }
}
