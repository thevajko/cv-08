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
        document.getElementById('start').onclick = () => {
            this.newGame()
        }
    }

}