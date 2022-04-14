import { CardsPagination } from './CardsPagination.js';

export class App {
  #cardsPagination;

  constructor(locale = 'en-us') {
    this.#cardsPagination = new CardsPagination(locale);
  }

  async init() {
    await this.#cardsPagination.handle();
  }
}
