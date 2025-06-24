const pig = {
    name: "Peppa",
    type: "pig",
    age: 10,
    makeSound () {
        console.log(pig.name + " is a " + pig.age + " year old " + pig.type + " that goes oink~!");
    }
}

const sheep = {
    name: "Shaun",
    type: "sheep",
    age: 6,
    makeSound () {
        console.log(sheep.name + " is a " + sheep.age + " year old " + sheep.type + " that goes meeeeeeh!");
    }
}

const dog = {
    name: "Snoopy",
    type: "dog",
    age: 8,
    makeSound () {
        console.log(dog.name + " is a " + dog.age + " year old " + dog.type + " that goes woof!");
    }
}

pig.makeSound()
sheep.makeSound()
dog.makeSound()