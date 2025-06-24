// myArray.unshift(newValue); 加值到最前
// myArray.push(newValue); 加值到最後

const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
];

const shiftedElement = musicPlaylist.shift(); // 抽走第一個
const poppedElement = musicPlaylist.pop(); // 抽走最後一個
musicPlaylist.push("Ice");
musicPlaylist.unshift("Fur Elise", "Hero");

console.log(musicPlaylist);