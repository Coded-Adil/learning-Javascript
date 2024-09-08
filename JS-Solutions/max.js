const riya = 78;
const disha = 87;

if (riya > disha) {
    console.log("Riya will get the free treat from sir");
}else{
    console.log("Disha will get the free treat from sir");
}


/**
 * 
 * Same thing in function
 * 
 */
function getMax(num1,num2) {
    if (num1>num2) {
        return num1;
    }
    else {
        return num2;
    }
}
const highest = getMax(67,98);
console.log(highest);
const max = getMax(99,29);
console.log(max);