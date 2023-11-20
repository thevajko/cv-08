import {Player} from "./player.js";

export class Pexeso {

    /**
     * Array consists of icon to be used in the game. If you want mode cards in the game, add them here as values
     */
    static cardSymbols = ['yin-yang', 'tractor', 'truck-monster', 'truck', 'walking', 'ambulance', 'bicycle',
        'bus', 'car', 'caravan', 'motorcycle', 'shuttle-van', 'tram', 'plane', 'subway'];

    #player1;
    #player2;

    constructor() {
        this.#player1 = new Player();
        this.#player2 = new Player();

        this.#player1.score = 100;
        this.#player2.score = 1;
    }

    refreshScore(){
        document.getElementById("player1_guessed").innerText = this.#player1.score;
        document.getElementById("player2_guessed").innerText = this.#player2.score;
    }


}