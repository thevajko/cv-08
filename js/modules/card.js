/**
 * Represents one card used in game
 */
class Card {

    #symbol;
    #element;
    #guessed = false;

    /**
     * Card needs to know its symbol
     * @param symbol
     */
    constructor(symbol) {
        this.#symbol = symbol;
        this.#element = document.createElement("div");
    }

    get element() {
        return this.#element;
    }

    get guessed() {
        return this.#guessed;
    }

    set guessed(value) {
        this.#guessed = value;
    }

    get symbol(){
        return this.#symbol;
    }
    show(){
        // turn up card (show its symbol)
        this.#element.innerHTML = `<i class="fas fa-${this.#symbol} fa-3x" style="margin-top: 15px"></i>`;
        this.#element.style.opacity = 0.3;
    }

    hide() {
        this.#element.innerHTML = "";
        this.#element.style.opacity = 1;
    }
}

export {Card};