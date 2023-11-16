/**
 * Represents one card used in game pexeso
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
        this.#element.setAttribute('style', 'text-align:center;')
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
        // turn up card (show its symbol)
        this.#element.innerHTML = `<i class="fas fa-${this.#symbol} fa-3x" style="margin-top: 15px"></i>`;
    }

    hide() {
        this.#element.innerHTML = "";
    }
}

export {Card};