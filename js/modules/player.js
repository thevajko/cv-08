class Player {

    #number;
    #score;
    #element;


    constructor(cislo) {
        this.#score = 0;
        this.#number = cislo;
        this.#element = document.getElementById("player"+cislo+"_guessed");
    }


    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
        this.#element.innerText = this.#score;
    }
}

export default Player;