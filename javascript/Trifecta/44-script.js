const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png",
    "https://media.tenor.com/Ym6VeAcZoTcAAAAi/aaaah-cat.gif"
];

const captionsArray = ["Cat yells during Zoom", "Cereal counts as dinner", "Work update? Still loading", "Roasted my ex, now they're ash", "Lit up the chat, no survivors"];

let randomMeme = document.getElementById("random-meme");
let randomCaption = document.getElementById("random-caption");
let generatorButton = document.getElementById("generator-button");

generatorButton.addEventListener("click", function() {
    const randomMemeIndex = Math.floor(Math.random() * memeArray.length);
    const randomCaptionIndex = Math.floor(Math.random() * captionsArray.length);

    randomMeme.src = memeArray[randomMemeIndex];
    randomCaption.innerText = captionsArray[randomCaptionIndex];
});