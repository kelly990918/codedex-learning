const characters = [
    "The Wally Watchers",
    "Wilma",
    "Fritz",
    "Wizard Whitebeard",
    "Odlaw",
    "Waldo",
    "Woof"
];

let waldoIndex = characters.indexOf("Waldo");
if (waldoIndex >= 0) {
    console.log("Found Waldo at index " + waldoIndex + " !");
} else { 
    console.log("Not Found");
}