export class IdeaCard {
  #title = '';
  #description = '';
  #card = document.createElement('div');

  constructor(title, description) {
    this.#title = title;
    this.#description = description;
  }

  getData() {
    return { title: this.#title, description: this.#description };
  }

  createCard() {
    this.#populateCard();
    return this.#card;
  }

  #populateCard() {
    const h3 = this.#createHeading3();
    const p = this.#createParagraph();
    this.#appendToCard(h3);
    this.#appendToCard(p);
    this.#card.classList.add('card');
  }

  #appendToCard(element) {
    this.#card.appendChild(element);
  }

  #createHeading3() {
    const h3 = document.createElement('h3');
    h3.innerText = this.#title;
    return h3;
  }

  #createParagraph() {
    const p = document.createElement('p');
    p.innerText = this.#description;
    return p;
  }
}
