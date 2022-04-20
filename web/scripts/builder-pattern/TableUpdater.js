export class TableUpdater {
  #name = document.getElementById('car-name');
  #color = document.getElementById('car-color');
  #maxSpeed = document.getElementById('car-max-speed');

  constructor() {}

  updateNameField(name) {
    this.#name.innerText = name;
  }

  updateColorField(color) {
    this.#color.innerText = color;
  }

  updateMaxSpeedField(maxSpeed) {
    this.#maxSpeed.innerText = maxSpeed;
  }
}
