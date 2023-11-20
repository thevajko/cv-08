class Card {
    #symbol
    #element
    #guessed = false


    constructor(symbol) {
        this.#symbol = symbol;
        this.#element = document.createElement("div")
        this.#element.setAttribute('style', 'text-align:center')
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

    show() {
        this.#element.innerHTML = `<i class="fas fa-${this.#symbol}" style="margin-top: 15px"></i>`
    }

    hide() {
        this.#element.innerHTML = ""
    }
}

export {Card}