// 24/3/2025 Nite Owl 
let wakeUp = 12;

if (wakeUp < 8) {
    console.log("Early bird gets the worm! 🌅");
} else {
    console.log("But who wants the worm? 🌃");
}

// 24/3/2025 Michelin Stars
let rating = 4;

if (rating === 1) {
    console.log("🌟 is worth walking to.");
} else if (rating === 2) {
    console.log("🌟🌟 is worth driving to.");
} else if (rating === 3) {
    console.log("🌟🌟🌟 is worth flying to.");
} else {
    console.log("Invalid.");
}

// 24/3/2025 TGIF
let day = 1;
if (day >= 1 && day <= 4) {
    console.log("Not Friday, yet!");
} else if (day === 5) {
    console.log("TGIF 🕺");
} else if (day === 6 || day === 7) {
    console.log("Yay, weekends! 🙌");
} else {
    console.log("Wait, what day is it?");
}

// 24/3/2025 Decades
let year = 1940;
if (year >= 1920 && year <= 1929) {
    console.log("Roaring Twenties");
} else if (year >= 1930 && year <= 1939) {
    console.log("Dirty Thirties");
} else if (year >= 1940 && year <= 1949) {
    console.log("Fighting Forties");
} else if (year >= 1950 && year <= 1959) {
    console.log("Fabulous Fifties");
} else if (year >= 1960 && year <= 1969) {
    console.log("Swinging Sixties");
} else {
    console.log("Year out of range");
}

// 24/3/2025 Fitness Routine
const randomNumber = Math.floor(Math.random() * 4);
if (randomNumber === 0) {
    console.log("10 Push-ups");
} else if (randomNumber === 1) {
    console.log("10 Sit-ups");
} else if (randomNumber === 2) {
    console.log("10 Squats");
} else if (randomNumber === 3) {
    console.log("10 Jumping Jacks");
}  