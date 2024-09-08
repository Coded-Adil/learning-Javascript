const jim = 56;
const tim = 89;
const vim = 39;

if (jim>tim && jim>vim) {
    console.log("Max of three is",jim);
}if (tim>jim && tim>vim) {
    console.log("Max of three is",tim);
} else {
    console.log("Max of three is",vim);
}


/**
 * Max out of #3
 */

function getMax(num1,num2,num3) {
    if (num1>num2 && num1>num3) {
        console.log("Max of three is",num1);
    }if (num2>num1 && num2>num3) {
        console.log("Max of three is",num2);
    } else {
        console.log("Max of three is",num3);
    }
}

const max = getMax(32,43,154);
console.log(max);