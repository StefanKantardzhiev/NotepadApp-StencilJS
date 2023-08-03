import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'register-component',
  styleUrl: 'register-component.css',
  // shadow: true,
})
export class RegisterComponent {
  @State() email: string = '';
  @State() password: string = '';
  @State() rePass: string = '';
  @State() match: string = '';

  handleEmailChange(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  handlePasswordChange(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  handleRepassChange(event: Event) {
    this.rePass = (event.target as HTMLInputElement).value;
  }

  handleLoginClick() {
    // You can perform your login logic here
    console.log(`Email: ${this.email}, Password: ${this.password},RePass:${this.rePass}`);
    if (this.password != this.rePass) {
    } else if (this.password === this.rePass) {
      return true;
    }
  }

  render() {
    return (
      

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <h3 class="register-title">Register Page</h3>
          </ion-card-title>
        </ion-card-header>

        <ion-list>
          <ion-item>
            <ion-input label="Email" required type="email" placeholder="Email" value={this.email} onInput={event => this.handleEmailChange(event)} />
          </ion-item>
          <ion-item>
            <ion-input label="Password" type="password" placeholder="Password" value={this.password} onInput={event => this.handlePasswordChange(event)} />
          </ion-item>
          <ion-item>
            <ion-input label="Repass" type="password" placeholder="Repass" value={this.rePass} onInput={event => this.handleRepassChange(event)} />
          </ion-item>
          {this.password === this.rePass ? (
            <button class="button" onClick={() => this.handleLoginClick()}>
              Register
            </button>
          ) : (
            <div class="error">
              <h2>Passwords don't match!</h2>
            </div>
          )}
        </ion-list>
      </ion-card>
    );
  }
}
