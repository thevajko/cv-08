import {Card} from "./card.js";
import {Player} from "./player.js";

class Pexeso {

    /**
     * Array consists of icons in the game. If you want mode cards in the game, add them here
     */
    static cardSymbols = ['yin-yang', 'tractor', 'truck-monster', 'truck', 'walking', 'ambulance', 'bicycle', 'bus', 'car', 'caravan', 'motorcycle', 'shuttle-van', 'tram', 'plane', 'subway'];

    // the card that picked as the first
    #cardOne = null;
    // we do not want user to be able in this time to turn up another card
    #cardTwo = null;

    // all cards in game
    #cards = [];

    // array of players playing the game
    #players = [];

    #currentPlayer = null;

    constructor() {
        // create array of players
        this.#players = [
            new Player(1),
            new Player(2)
        ];
        // handle game restart button
        document.getElementById("start").onclick = () => {
            this.newGame();
        }
    }

    /**
     * Starts new game: resets scores and shuffle cards
     */
    newGame() {

        // score reset
        this.#players[0].score = 0;
        this.#players[1].score = 0;

        // pick the second player
        this.#currentPlayer = this.#players[1];
        // switch to the first player and redraw score
        this.switchPlayers();

        // get container element for cards
        let board = document.getElementById("board")
        // clear board from existing card
        board.innerHTML = "";

        // for each symbol in array do this:
        Pexeso.cardSymbols.forEach(symbol => {
            // there are two cards for each symbol
            for (let i = 0; i < 2; i++) {
                // create card
                let newCard = new Card(symbol);
                // add card to all cards array
                this.#cards.push(newCard);
                // add card HTML element to DOM
                board.appendChild(newCard.element);
                newCard.element.onclick = () => {
                    // do card turning on click
                    this.turnCard(newCard);
                }
            }
        });
        // randomize order of cards
        for (let i = 0; i < board.children.length * 5; i++) {
            // pick random index
            let number = Math.floor(Math.random() * board.children.length);
            // pick card by index and put it as first child of the board
            board.prepend(board.children.item(number));
        }
    }

    /**
     * Switch players, redraw score and change color of active player
     */
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

    /**
     * Turn a card
     * @param card
     */
    turnCard(card) {

        // picked card is already guessed, so stop
        if (card.guessed) return;
        // if both card are turned up, player cannot pick another card
        if (this.#cardTwo != null) return;

        // turn up picked card
        card.show();

        if (this.#cardOne == null) {
            // it is just the first card
            this.#cardOne = card;
            return;
        } else {
            // if is the second one, check if cards match
            if (this.#cardOne.symbol == card.symbol) {
                // if matched, then set cards as guessed
                this.#cardOne.guessed = true;
                card.guessed = true;
                // release picked cards
                this.#cardOne = null;
                this.#cardTwo = null;
                // increase player score
                this.#currentPlayer.score += 1;
            } else {
                // if the cards don't match, then set the second card
                // player must not be able to select another card
                // while the cards are shown for one second
                this.#cardTwo = card;

                setTimeout(() => {
                    // set timeout for hiding the cards
                    this.#cardOne.hide();
                    card.hide();

                    this.#cardOne = null;
                    this.#cardTwo = null;
                }, 1000);
            }
            // switch players after two cards were turned up
            this.switchPlayers();
        }
    }

}

export {Pexeso};