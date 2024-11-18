function factorial(num) {
    if (num < 1) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
}

window.onload = function () {
    let result = document.getElementById('result')
    result.innerText = factorial(7)
}

