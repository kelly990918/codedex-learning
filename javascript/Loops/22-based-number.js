let myNumber = 20;
let binary = "";

// for loop
for (let i = myNumber; i >= 1; i = Math.floor(i/2)) {
    if (i % 2 === 0) {
        binary = binary + "0";
    } else {
    binary = binary + "1";
}}
console.log("With for loop: " + binary);

// while loop
let i = myNumber;
binary = "";
while (i >= 1) {
    if (i % 2 == 0) {
        binary = binary + "0";
    } else {
        binary = binary + "1";
    }
    i = Math.floor(i/2);
}
console.log("With while loop: " + binary);
