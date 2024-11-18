class Player {
    #number
    #score = 0


    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
    }

    get number() {
        return this.#number;
    }

    set number(value) {
        this.#number = value;
    }
}

export { Player };