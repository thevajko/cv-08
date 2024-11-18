import {Player} from "./player";

class Pexeso {

    /**
     * Array consists of icon to be used in the game. If you want mode cards in the game, add them here as values
     */
    static cardSymbols = ['fa-truck-fast', 'tractor', 'truck-monster', 'truck', 'walking', 'ambulance', 'bicycle',
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

        //document.getElementById('start').onclick = this.newGame

        document.getElementById('start').addEventListener('click', (e) => {
            this.newGame()
        })
    }

    newGame() {

    }

    switchPlayers() {
        // change colors and switch players
        if (this.#currentPlayer == this.#players[0]) {
            document.getElementById("player1").style.color = "black";
            document.getElementById("player2").style.color = "green";
            this.#currentPlayer = this.#players[1];
        } else {
            document.getElementById("player1").style.color = "green";
            document.getElementById("player2").style.color = "black";
            this.#currentPlayer = this.#players[0];
        }
        // update score
        document.getElementById("player1_guessed").innerText = this.#players[0].score;
        document.getElementById("player2_guessed").innerText = this.#players[1].score;
    }


}