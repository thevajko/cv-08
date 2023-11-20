export class Player {
    #score = 0;

    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
    }
}