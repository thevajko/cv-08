class Card {
    #symbol;
    #element;
    #guessed;

    constructor(symbol) {
        this.#symbol = symbol;
        this.#guessed = false;
    }


    get element() {
        return this.#element;
    }

    set element(value) {
        this.#element = value;
    }

    get symbol() {
        return this.#symbol;
    }

    set symbol(value) {
        this.#symbol = value;
    }

    get guessed() {
        return this.#guessed;
    }

    set guessed(value) {
        this.#guessed = value;
    }
}

export default Card;