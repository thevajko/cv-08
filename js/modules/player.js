/**
 * Class that represents a player, so game do not lost track of player score
 * plays game
 */
class Player {
    #number;
    #score = 0;
    constructor(number) {
        this.#number = number;
    }

    get number() {
        return this.#number;
    }

    set number(value) {
        this.#number = value;
    }

    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
    }
}
export {Player}