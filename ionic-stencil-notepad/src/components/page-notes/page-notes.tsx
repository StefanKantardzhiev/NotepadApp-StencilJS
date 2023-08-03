import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'page-notes',
  styleUrl: 'page-notes.css',
  // shadow: true,
})
export class PageNotes {
  @Prop()
  name: string;
  normalize(name: string): string {
    name = name || '';
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }
  names = [
    { name: 'Alice', age: '30', city: 'Burgas', img: 'https://img6.arthub.ai/64a935f0-92be.webp' },
    { name: 'Stefan', age: '32', city: 'Varna' },
    { name: 'Peter', age: '22', city: 'Essen' },
  ];

  render() {
    return (
      <ion-content class="ion-content" color="dark">
        <ion-header>
          <ion-toolbar color="dark">
            <ion-title>Notifications</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-list>
          {this.names.map(user => (
            <ion-item color="dark" href={'/profile/' + user.name.toLowerCase()} key={user.name}>
              <ion-label>
                {user.name}({user.age}) is following you!
              </ion-label>
            </ion-item>
          ))}
        </ion-list>
      </ion-content>
    );
  }
}
