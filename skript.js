function factorial(num) {
    if (num < 1) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
}

function addHeaders(elementID){
    let target = document.getElementById(elementID);
    for (let i = 0; i < 5; i++) {
        let h = document.createElement('h3');
        h.innerText = "Nadpis č." + (i +1);
        target.appendChild(h);
    }
}

window.onload = function () {
    //document.getElementById('result').innerHTML = factorial(7);
    addHeaders('headers')
}