class Card {
    #guessed = false;
    #symbol
    #element

    constructor(symbol) {
        this.#symbol = symbol;
    }

    get symbol() {
        return this.#symbol;
    }

    set symbol(value) {
        this.#symbol = value;
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
}

export { Card };