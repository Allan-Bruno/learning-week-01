import { Ripple } from './Ripple.js';

export class App {
  constructor() {}

  static init() {
    const muiButton = document.getElementById('mui-button');
    muiButton.addEventListener('click', (e) => {
      const ripple = new Ripple(e);
      ripple.renderRipple();
    });
  }
}
