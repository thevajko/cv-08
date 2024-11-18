class Card {
    #symbol = ''
    #element = null
    #guessed = false

    constructor(symbol) {
        this.#symbol = symbol
        this.#element = document.createElement("div");
    }

    get element() {
        return this.#element;
    }

    set element(value) {
        this.#element = value;
    }

    get guessed() {
        return this.#guessed;
    }

    set guessed(value) {
        this.#guessed = value;
    }

    get symbol() {
        return this.#symbol;
    }

    set symbol(value) {
        this.#symbol = value;
    }

    show() {
        this.#element.innerHTML = `<i class="fas fa-${this.#symbol} fa-3x" style="margin-top: 15px"></i>`;
    }

    hide() {
        this.#element.innerHTML = '';
    }
}

export { Card };