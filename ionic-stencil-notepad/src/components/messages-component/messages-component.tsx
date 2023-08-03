import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'messages-component',
  styleUrl: 'messages-component.css',
  shadow: true,
})
export class MessagesComponent {

  render() {
    return (
      <Host>
        <slot>Messages works!</slot>
      </Host>
    );
  }

}
