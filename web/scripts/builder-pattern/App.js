import { Car } from './Car.js';
import { TableUpdater } from './TableUpdater.js';

export class App {
  #tableUpdater = new TableUpdater();
  #car = new Car.Builder();

  constructor() {}

  init() {
    this.#watchCarNameInput();
    this.#watchColorInput();
    this.#watchMaxSpeedInput();
    this.#watchBuildButton();
  }

  #buildCar() {
    const builtCar = this.#car.build();
    const { name, color, maxSpeed } = builtCar.getInfo();
    this.#tableUpdater.updateNameField(name || '- - -');
    this.#tableUpdater.updateColorField(color || '- - -');
    this.#tableUpdater.updateMaxSpeedField(maxSpeed);
  }

  #watchCarNameInput() {
    const nameButton = document.getElementById('set-name');
    nameButton.addEventListener('click', () => {
      const nameInput = document.querySelector('input#name');
      if (nameInput.value.trim() === '') return;
      this.#car.setName(nameInput.value);
      nameInput.value = 'Ok!';
    });
  }

  #watchColorInput() {
    const colorButton = document.getElementById('set-color');
    colorButton.addEventListener('click', () => {
      const colorInput = document.querySelector('input#color');
      if (colorInput.value.trim() === '') return;
      this.#car.setColor(colorInput.value);
      colorInput.value = 'Ok!';
    });
  }

  #watchMaxSpeedInput() {
    const maxSpeedButton = document.getElementById('set-max-speed');
    maxSpeedButton.addEventListener('click', () => {
      const maxSpeedInput = document.querySelector('input#max-speed');
      if (maxSpeedInput.value.trim() === '') return;
      this.#car.setMaxSpeed(maxSpeedInput.value);
      alert('Ok!');
    });
  }

  #watchBuildButton() {
    const buildButton = document.getElementById('build-btn');
    buildButton.addEventListener('click', () => {
      this.#buildCar();
    });
  }
}
