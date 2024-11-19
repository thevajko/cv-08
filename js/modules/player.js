class Player {


    show(){
        // turn up card (show its symbol)
        this.#element.innerHTML = `<i class="fas fa-${this.#symbol} fa-3x" style="margin-top: 15px"></i>`;
        this.#element.style.opacity = 0.3;
    }

    hide() {
        this.#element.innerHTML = "";
        this.#element.style.opacity = 1;
    }
}