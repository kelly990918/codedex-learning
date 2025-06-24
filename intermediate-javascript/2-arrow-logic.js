/* Before */
function forceEquation(mass, acceleration) {
    return mass * acceleration;
}
  
console.log(forceEquation(3, 4));

/* After */
const forceEquation = (mass, acceleration) => (mass * acceleration);
console.log(forceEquation(3, 4));