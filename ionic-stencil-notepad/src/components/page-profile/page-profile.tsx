import { Component, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'page-profile',
  styleUrl: 'page-profile.css',
  // shadow: true,
})
export class PageProfile {
  @Prop()
  name: string;
  @Prop()
  age:string;

  normalize(name: string): string {
    name = name || '';
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  render() {
    return (
      <Fragment >
        <ion-header>
          <ion-toolbar color="dark">
            <ion-buttons slot="start" color="dark">
              <ion-back-button defaultHref="/tab/notes"></ion-back-button>
            </ion-buttons>
            <ion-title>Profile: {this.name}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content fullscreen class="ion-padding" color="dark">
          <ion-card>
            <ion-card-header>
              <h1>{this.normalize(this.name)}</h1>
            </ion-card-header>
            <ion-card-content>
              <p>City:{this.age}</p>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </Fragment>
    );
  }
}
