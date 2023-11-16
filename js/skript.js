"use strict";
window.onload = function () {
    document.getElementById('pocitaj').addEventListener('click', () => {
        let n = document.getElementById('cislo').value;
        document.getElementById('vysledok').innerText = faktorial(n);
    })
    // for (let i = 0; i < 5; i++) {
    //     let el = document.getElementById('obsah');
    //     let h = document.createElement('h1');
    //     h.innerText = "Nadpis " + (i+1);
    //     el.appendChild(h);
    // }
}

function faktorial(n) {
    let f = 1;
    for (let i = 1; i <=n ; i++) {
        f *= i;
    }
    return f;
}