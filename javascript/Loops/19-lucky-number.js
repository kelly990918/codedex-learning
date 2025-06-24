const luckyNumber = 9;
let guess = Math.floor(Math.random() * 10) + 1;

while (guess != 9) {
    console.log("Nope, it isn't " + guess);
    guess = Math.floor(Math.random() * 10) + 1; //要佢再gen數
}

console.log("The lucky number is " + luckyNumber + "!");