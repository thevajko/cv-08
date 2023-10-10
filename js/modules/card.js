/**
 * Represents one card used in game pexeso
 */
class Card {

    #symbol;
    #element;
    #guessed = false;

    /**
     * Card needs to know its symbol
     * @param cardSymbol
     */
    constructor(cardSymbol) {
        this.#symbol = cardSymbol;
        this.#element =  document.createElement("div");
    }

    get element() {
        return this.#element;
    }

    get guessed() {
        return this.#guessed;
    }

    /**
     * If setting true, opacity of card element will be changed to 30%
     * @param value
     */
    set guessed(value) {
        this.#guessed = value;
        if (this.#guessed) {
            this.#element.style.opacity = 0.3;
        }
    }

    get symbol(){
        return this.#symbol;
    }
    show(){
        // turned up card, the showed one, is showing it symbol
        this.#element.innerHTML = `<i class="fas fa-${this.#symbol} fa-3x"></i>`;
    }

    hide() {
        this.#element.innerHTML = "";
    }
}

export {Card};