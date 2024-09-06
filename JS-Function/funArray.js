/**
 * 
 * Write an array and a function to sum up the array[] 
 * Declare a function
 * call function
 * enter a parameter
 * Pass a parameter(s)
 * return result
 */

function sumOfNumbers(numbers) {
    console.log(numbers);
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum+number;
    }        
    return sum;

}
const num = [10,20,30];
const sum = sumOfNumbers(num);
console.log("Sum of All the Numbers are: ", sum);