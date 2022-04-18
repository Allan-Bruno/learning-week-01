export class Ripple {
  #event;
  #button;
  #ripple = document.createElement('span');

  constructor(event) {
    this.#event = event;
    this.#button = event.currentTarget;
  }

  renderRipple() {
    this.#purgeExistingRipples();
    this.#buildRipple();
    this.#button.appendChild(this.#ripple);
  }

  #purgeExistingRipples() {
    const ripple = document.getElementsByClassName('ripple')[0];
    ripple && ripple.remove();
  }

  #buildRipple() {
    const diameter = Math.max(
      this.#button.clientWidth,
      this.#button.clientHeight
    );
    const radius = diameter / 2;
    this.#ripple.style.width = this.#ripple.style.height = `${diameter}px`;
    this.#ripple.style.left = `${
      this.#event.clientX - (this.#button.offsetLeft + radius)
    }px`;
    this.#ripple.style.top = `${
      this.#event.clientY - (this.#button.offsetTop + radius)
    }px`;
    this.#ripple.classList.add('ripple');
  }
}
