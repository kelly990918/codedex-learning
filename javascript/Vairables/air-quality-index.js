let aqi = 22;
let answer = "";

if (aqi >= 0 && aqi <= 50) {
    answer = "good";
} else if (aqi >= 51 && aqi <= 100) {
    answer = "moderate";
} else if (aqi >= 101 && aqi <= 150) {
    answer = "unhealthy (sensitive groups)";
} else if (aqi >= 151 && aqi <= 200) {
    answer = "unhealthy";
} else if (aqi >= 201 && aqi <= 300) {
    answer = "very unhealthy";
} else {
    answer = "hasardous";
}

console.log("The air quality is " + answer +" today.");