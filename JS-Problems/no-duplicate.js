/**
 * Array with no duplicate items
 */
const biriyanikhor = ['sakib','akib','rakib','akib','mahin','sakib','halim'];
const numbers = [23,33,64,43,86,77,23,56];

function noDuplicate(array) {
    const unique = [];
    for (const items of array) {
        if (unique.includes(items) === false) {
            unique.push(items);
        }
    }
    return unique;
}

const ache1 = noDuplicate(biriyanikhor);
const ache2 = noDuplicate(numbers);
console.log(ache1);
console.log(ache2);