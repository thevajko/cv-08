window.onload = () => {
    obsah = document.getElementById('obsah')
    // for (let i = 0; i < 5; i++) {
    //     let header = document.createElement('h1')
    //     header.innerText = "Nadpis " + (i + 1)
    //     obsah.appendChild(header)
    // }
    document.getElementById('pocitaj').addEventListener('click', function () {
        obsah.innerText = faktorial(document.getElementById('cislo').value)
    })

}

function faktorial(n) {
    f = 1
    for (let i = 1; i <= n; i++) {
        f *= i
    }
    return f
}
