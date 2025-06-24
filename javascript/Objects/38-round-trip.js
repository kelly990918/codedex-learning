const departTripTicket = {
    name: "Rabbit",
    from: "JFK",
    to: "TPE",
    leaveTime: 1,
    arriveTime: 17,
    flightTime () {
        let departDuration = departTripTicket.arriveTime - departTripTicket.leaveTime;
        console.log(departDuration + " hours.");
    },
    businessClass: true,
    upgrade () {
        let departUpgrade = "";
        if (this.businessClass == false) {
            this.businessClass = true;
            departUpgrade = "You have been upgraded to business class!";
        } else {
            departUpgrade = "Business class passenger";
        }
        console.log(departUpgrade);
    }
} 

const returnTripTicket= {
    name: "Rabbit",
    from: "TPE",
    to: "JFK",
    leaveTime: 5,
    arriveTime: 22,
    flightTime () {
        let returnDuration = returnTripTicket.arriveTime - returnTripTicket.leaveTime;
        console.log("Flight duration: " + returnDuration + " hours");
    },
    businessClass: false,
    upgrade () {
        let returnUpgrade = "";
        if (this.businessClass == false) {
            this.businessClass = true;
            returnUpgrade = "You have been upgraded to business class!";
        } else {
            returnUpgrade = "Business class passenger";
        }
        console.log(returnUpgrade);
    }
}

console.log("🛫 Departure 🛫");
console.log("Name: " + departTripTicket.name);
console.log("From: " + departTripTicket.from);
console.log("To: " + departTripTicket.to);
returnTripTicket.flightTime();
returnTripTicket.upgrade();
console.log("------")
console.log("🛬 Return 🛬");
console.log("Name: " + returnTripTicket.name);
console.log("From: " + returnTripTicket.from);
console.log("To: " + returnTripTicket.to);
returnTripTicket.flightTime();
returnTripTicket.upgrade();