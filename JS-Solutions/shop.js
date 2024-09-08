/**
 * SUM of objects
 */
const phone = [
    { name: "Realme", price: 20000, quantity: 2 },
    { name: "Apple", price: 100000, quantity: 4 },
    { name: "Sumsung", price: 42000, quantity: 22 },
    { name: "Redme", price: 29000, quantity: 29 }
];

function getTotal(array) {
    let num = 0;
    let sum = 0;
    for (const item of array) {        
        num = item.quantity*item.price;
        sum = num + sum;
    }
    return sum;
}

const price = getTotal(phone);
console.log(price);