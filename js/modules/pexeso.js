class Pexeso {

    /**
     * Array consists of icon to be used in the game. If you want mode cards in the game, add them here as values
     */
    static cardSymbols = ['rocket', 'tractor', 'truck-monster', 'truck', 'walking', 'ambulance', 'bicycle',
        'bus', 'car', 'caravan', 'motorcycle', 'shuttle-van', 'tram', 'plane', 'subway'];

    /**
     * Switch players, redraw score and change color of active player
     */
    switchPlayers() {
        // change colors and switch players
        if (this.#currentPlayer === this.#players[0]) {
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
        console.log(this.#cardOne, this.#cardTwo)

        if (this.#cardOne == null) {
            // it is just the first card
            this.#cardOne = card;
            // if the player clicked not on the same card
        } else if (this.#cardOne !== card) {
            // if is the second one, check if cards match
            if (this.#cardOne.symbol === card.symbol) {
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