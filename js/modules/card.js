class Card {
    #symbol;
    #element;
    #guessed;

    constructor(symbol) {
        this.#symbol = symbol;
        this.#guessed = false;
        this.#element = document.createElement("div");

    }


    show() {
        this.#element.innerText = this.#symbol;
    }

    hide() {
        this.#element.innerText = "";
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