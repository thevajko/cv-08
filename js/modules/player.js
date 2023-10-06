/**
 * Simple class that represents player, so game do not lost track of player score and what players
 * plays game
 */
class Player {
    #number;
    #score = 0;
    constructor(playerNumber) {
        this.#number = playerNumber;
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