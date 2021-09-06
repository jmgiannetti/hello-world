import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }
  
  //Adding decrement button in order to lower the counter.
  
__decrement() {
    if(this.counter >= 0){
      this.counter --;
    }
  }
  
  //Line 45- Additional code that disables the decrement button whenever the value is equal to 0
  
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <button @click=${this.__decrement} ?disabled=${this.counter == 0}>decrement</button>
    `;
  }
}
