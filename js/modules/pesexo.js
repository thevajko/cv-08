class Pexeso {

    /**
     * Array consists of icon to be used in the game. If you want mode cards in the game, add them here as values
     */
    static cardSymbols = ['yin-yang', 'tractor', 'truck-monster', 'truck', 'walking', 'ambulance', 'bicycle',
        'bus', 'car', 'caravan', 'motorcycle', 'shuttle-van', 'tram', 'plane', 'subway'];

    #cardOne = null
    #cardTwo = null
    #cards = []
    #players = []
    #currentPlayer = null

    constructor() {
        this.#players = [
            new Player(1),
            new Player(2)
        ]
        document.getElementById('start').addEventListener('click', this.newGame())
    }

    newGame() {
        this.#players[0].score = 0
        this.#players[1].score = 0

        this.#currentPlayer = 1

        let board = document.getElementById('board')

        board.innerHTML = ""

        Pexeso.cardSymbols.forEach(symbol => {
            for (let i = 0; i < 2; i++) {
                let newCard = new Card(symbol)
                this.#cards.push(newCard)
                board.appendChild(newCard.element)
                newCard.element.addEventListener('click', () => {
                    this.turnCard()
                })
            }
        })

        for (let i = 0; i < this.cards.length ; i++) {
            let number = Math.floor(Math.random()) * this.cards.length
            board.prepend(board.children.item(number))
        }

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