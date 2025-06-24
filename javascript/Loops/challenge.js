// 28/3/2025 Blast off
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("To infinity and beyond! 🚀");

// 28/3/2025 Swag Raffle
let count = 0;
let targetNumber = Math.floor(Math.random() * 100);

while (count < 10){
    let drawNumber = Math.floor(Math.random() * 100);
    if (drawNumber === targetNumber) {
        count++;
        console.log("Match");
    } else {
        console.log("No Match");
    }
}
console.log("Loop finished!")
console.log("The number " + targetNumber + " was found 10 times.")

// 28/3/2025 Odd Cubes
let limit = 5;
let total = 0;

for (let i = 1; i <= limit; i++) {
    if (i % 2 === 1) {
      cubed = i ** 3;
    }
  total = total + cubed;
} 
console.log(total);
