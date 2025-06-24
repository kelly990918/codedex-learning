const car = {
    model: "Tesla",
    year: 2024,
    color: "white",
    used: false
};

let usedCar = "";
if (car.used == false) {
    usedCar = "new";
} else {
    usedCar = "used";
}

console.log("I'm looking for a " + car.year + " " + car.model + " that is " + usedCar + ".");