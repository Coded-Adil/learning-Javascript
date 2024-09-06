// Function will return only the even numbers

function evenOnly(numbers){
    // const evens = [];
    let sum = 0;
    for (const number of numbers) {
        if (number%2===0) {
            // console.log(number);
            // evens.push(number);
            sum = sum+number;
        }
    }
    return sum;
    // return evens;
}

const num = [10,20,30,21,11,31];
evenOnly(num);