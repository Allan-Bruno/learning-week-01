export class Car {
  #name = '';
  #color = '';
  #maxSpeed = 0;

  constructor(name, color, maxSpeed) {
    this.#name = name;
    this.#color = color;
    this.#maxSpeed = maxSpeed;
  }

  static Builder = class {
    #name = '';
    #color = '';
    #maxSpeed = '';

    constructor() {}

    setName(name) {
      this.#name = name;
    }

    setColor(color) {
      this.#color = color;
    }

    setMaxSpeed(maxSpeed) {
      this.#maxSpeed = maxSpeed;
    }

    build() {
      return new Car(this.#name, this.#color, this.#maxSpeed);
    }
  };

  getInfo() {
    return { name: this.#name, color: this.#color, maxSpeed: this.#maxSpeed };
  }
}
