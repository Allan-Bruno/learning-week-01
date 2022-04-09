import { IdeaCard } from './IdeaCard.js';

export class App {
  #data = [];
  #cards = [];
  #ideasContainer = document.querySelector('#ideas ul');

  constructor() {}

  async init() {
    await this.#fetchIdeas();
    this.#buildCards();
    this.#appendCards();
  }

  async #fetchIdeas() {
    const ideas = await fetch('/data/home/ideas.json');
    const data = await ideas.json();
    this.#data = data;
  }

  #buildCards() {
    this.#data.forEach(({ title, description }) => {
      const listElement = document.createElement('li');
      const ideaCard = new IdeaCard(title, description);
      const card = ideaCard.createCard();
      listElement.appendChild(card);
      this.#cards.push(listElement);
    });
  }

  #appendCards() {
    this.#cards.forEach((card) => this.#ideasContainer.appendChild(card));
  }
}
