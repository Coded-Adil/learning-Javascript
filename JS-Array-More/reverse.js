const numbers = [1 , 2, 4, 3, 6, 9]
console.log(numbers)
// numbers.reverse();
// const reversed = numbers.reverse();
// console.log(reversed)
const rev_num = [];
for(const num of numbers)
{
    // console.log(num);
    // rev_num.push(num);
    rev_num.unshift(num);
}
// console.log(rev_num)

const reversed_numbers = [];
for(let i = 0; i<numbers.length; i++)
{
    const num = numbers[i];
    reversed_numbers.unshift(num);
}
// console.log(reversed_numbers)


// Reversed sided loop
const rev_rev_num = [];
for(let i = numbers.length - 1; i>=0 ;i--)
{
    const num = numbers[i];
    console.log(num);
    rev_rev_num.push(num)
}
console.log(rev_rev_num)
