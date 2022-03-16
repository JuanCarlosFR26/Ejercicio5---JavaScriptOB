function  getRandom(min, max) {

    return Math.floor(Math.random() * (max-min)) + min;
}


let contador = 0;
while (contador < 11) {
    contador++
    let randomNumber = getRandom(0, 20);
    console.log(randomNumber);
}