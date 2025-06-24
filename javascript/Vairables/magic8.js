// just an exercise that i think worth saving lol
// Math.floor(): round to the nearest integer
// Math.random(): random number

let question = "Is the water boiling now?";
const randomNumber = Math.floor(Math.random() * 9) + 1;

let answer = ""; //原來可以咁用！

if (randomNumber == 1) {
    answer = "Yes - definitely.";
} else if (randomNumber == 2) {
    answer = "It is decidedly so.";
} else if (randomNumber == 3) {
    answer = "Without a doubt.";
} else if (randomNumber == 4) {
    answer = "Reply hazy, try again.";
} else if (randomNumber == 5) {
    answer = "Better not tell you now.";
} else if (randomNumber == 6) {
    answer = "My sources say no.";
} else if (randomNumber == 7) {
    answer = "Outlook not so good.";
} else if (randomNumber == 8) {
    answer = "Very doubtful.";
} else {
    answer = "Ask again later.";
}

console.log("Question:     " + question);
console.log("Magic 8 Ball: " + answer);