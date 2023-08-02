import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'login-component',
  styleUrl: 'login-component.css',
  // shadow: true,
})
export class LoginComponent {
  @State() email: string = '';
  @State() password: string = '';

  handleEmailChange(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  handlePasswordChange(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  handleLoginClick() {
    // You can perform your login logic here
    console.log(`Email: ${this.email}, Password: ${this.password}`);
  }

  render() {
    return (
      <ion-card>
        <ion-card-header class="ion-text-center">
          <ion-card-title>
            <h3 class="login-title">Login Page</h3>
          </ion-card-title>
        </ion-card-header>
        <ion-list>
          <ion-item>
            <ion-input label="Email" type="email" placeholder="Email" value={this.email} onInput={event => this.handleEmailChange(event)} />
          </ion-item>
          <ion-item>
            <ion-input label="Password" type="password" placeholder="Password" value={this.password} onInput={event => this.handlePasswordChange(event)} />
          </ion-item>
        </ion-list>
        <ion-button>Custom Button</ion-button>
        <button class="button" onClick={() => this.handleLoginClick()}>
          Login
        </button>
      </ion-card>
    );
  }
}
