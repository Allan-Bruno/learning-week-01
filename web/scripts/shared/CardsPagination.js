import { IdeaCard } from './IdeaCard.js';

export class CardsPagination {
  #nextPageButton = document.getElementById('next-page');
  #previousPageButton = document.getElementById('previous-page');
  #dayHeading = document.querySelector('#ideas h2');
  #currentPage = 1;
  #locale = 'en-us';
  #pages = [];
  #cards = [];

  constructor(locale = 'en-us') {
    this.#locale = locale;
  }

  async handle() {
    await this.#fetchPages();
    this.#changePage();
    this.#watchNextPageButton();
    this.#watchPreviousPageButton();
  }

  async #fetchPages() {
    const response = await fetch('/data/home/pages.json');
    const pages = await response.json();
    this.#pages = pages;
  }

  #watchNextPageButton() {
    this.#nextPageButton.addEventListener('click', () => this.#goToNextPage());
  }

  #watchPreviousPageButton() {
    this.#previousPageButton.addEventListener('click', () =>
      this.#goToPreviousPage()
    );
  }

  #goToPreviousPage() {
    if (this.#currentPage - 1 < 1) return;
    this.#currentPage -= 1;
    this.#changePage();
  }

  #goToNextPage() {
    if (this.#currentPage + 1 > this.#pages.length) return;
    this.#currentPage += 1;
    this.#changePage();
  }

  #changePage() {
    this.#buildCurrentPageCards();
    this.#showCurrentPageCardsOnScreen();
    this.#dayHeading.innerText = `${this.#locale === 'en-us' ? 'Day' : 'Dia'} ${
      this.#currentPage
    }`;
    this.#disableNextPageIfMaxPageReached();
    this.#disablePreviousPageIfMinPageReached();
  }

  #disablePreviousPageIfMinPageReached() {
    if (this.#currentPage === 1) {
      this.#previousPageButton.setAttribute('disabled', 'true');
      return;
    }

    this.#previousPageButton.removeAttribute('disabled');
  }

  #disableNextPageIfMaxPageReached() {
    if (this.#currentPage === this.#pages.length) {
      this.#nextPageButton.setAttribute('disabled', 'true');
      return;
    }

    this.#nextPageButton.removeAttribute('disabled');
  }

  #showCurrentPageCardsOnScreen() {
    const container = document.querySelector('#ideas ul');
    container.innerHTML = '';
    this.#cards.forEach((card) => container.appendChild(card));
  }

  #buildCurrentPageCards() {
    const data = this.#pages[this.#currentPage - 1].cards;
    this.#cards = data.map((c) => {
      const li = document.createElement('li');
      const card = this.#buildCard(c);
      li.appendChild(card);
      return li;
    });
  }

  #buildCard(c) {
    const a = document.createElement('a');
    const title = c.title[this.#locale];
    const description = c.description[this.#locale];
    const href = this.#locale === 'pt-br' ? `/pt-BR${c.link}` : c.link;
    const card = new IdeaCard(title, description);
    a.setAttribute('href', href);
    a.appendChild(card.createCard());
    return a;
  }
}
