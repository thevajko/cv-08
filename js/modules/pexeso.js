class Pexeso {

    /**
     * Array consists of icon to be used in the game. If you want mode cards in the game, add them here as values
     */
    static _cardSymbols = ['yin-yang', 'tractor', 'truck-monster', 'truck', 'walking', 'ambulance', 'bicycle',
        'bus', 'car', 'caravan', 'motorcycle', 'shuttle-van', 'tram', 'plane', 'subway'];

    #cardOne
    #cardTwo
    #cards
    #players
    #currentPlayer


    constructor() {
        this.#players = [
            new Player(1),
            new Player(2)
        ];
        // handle game restart button
        document.getElementById("start").onclick = () => {
            this.newGame();
        }
    }

    newGame() {

    }

    static get cardSymbols() {
        return this._cardSymbols;
    }

    static set cardSymbols(value) {
        this._cardSymbols = value;
    }

    get cardOne() {
        return this.#cardOne;
    }

    set cardOne(value) {
        this.#cardOne = value;
    }

    get cardTwo() {
        return this.#cardTwo;
    }

    set cardTwo(value) {
        this.#cardTwo = value;
    }

    get cards() {
        return this.#cards;
    }

    set cards(value) {
        this.#cards = value;
    }

    get players() {
        return this.#players;
    }

    set players(value) {
        this.#players = value;
    }

    get currentPlayer() {
        return this.#currentPlayer;
    }

    set currentPlayer(value) {
        this.#currentPlayer = value;
    }
}