// 12 inch === 1 ft

/*
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
*/
function inchToFeet(inch) {
    const feet = inch / 12;
    const feetNum = parseInt(feet);
    const feetPoint = parseInt(inch % 12);
    const result = feetNum + " Feet " + feetPoint + " inch";
    return result;
}
const myHight = inchToFeet(68.5)
console.log(myHight);