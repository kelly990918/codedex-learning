// Rock = 0
// Paper = 1
// Sicssors = 2

const player = 2;
const computer = Math.floor(Math.random() * 3);

if (player === 0) {
    play = "Rock";
} else if (player === 1) {
    play = "Paper";
} else {
    play = "Scissors";
}

if (computer === 0) {
    comp = "Rock";
} else if (player === 1) {
    comp = "Paper";
} else {
    comp = "Scissors";
}

console.log("Player picked:   " + play);
console.log("Computer picked: " + comp);

if (player === 0) {
    if (computer === 0) {
        console.log("Draw.");
    } else if (computer === 1) {
        console.log("The player lose!");
    } else if (computer === 2) {
        console.log("The player won!");
    } else {
        console.log("Error.");
    }
} else if (player === 1) {
    if (computer === 0) {
        console.log("The player won!");
    } else if (computer === 1) {
        console.log("Draw.");
    } else if (computer === 2) {
        console.log("The player lose!");
    } else {
        console.log("Error.");
    }
} else if (player === 2) {
    if (computer === 0) {
        console.log("The player lose!");
    } else if (computer === 1) {
        console.log("The player won!");
    } else if (computer === 2) {
        console.log("Draw.");
    } else {
        console.log("Error.");
    }
}