class Card {

    constructor(symbol) {
        this.symbol = symbol;
        this.guessed = false;
        this.element = document.createElement("div");

        this.turned = false;

        // this.element.onclick = () => {
        //     this.turned = !this.turned;
        //     if (this.turned) {
        //         this.show();
        //     } else {
        //         this.hide();
        //     }
        // }

    }

    show()  {
        this.element.innerHTML = this.symbol;
        this.guessed = true;
    }

    hide() {
        this.element.innerHTML = '';
        this.guessed = false;
    }
}

export  default Card;