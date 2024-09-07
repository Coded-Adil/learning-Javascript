/**
 * Average of Odd numbers in an array
 */

function oddAvg(numbers) {
    let sum = 0;
    const odd = [];
    for (const number of numbers) {
        if (number % 2 !== 0) {
            odd.push(number);
            sum = sum + number;
        }
    }
    const len = odd.length;
    return sum/len ;
}

const numbers = [10,23,43,45,50,52,39,48,37,100];
const avg = oddAvg(numbers);
console.log(avg);