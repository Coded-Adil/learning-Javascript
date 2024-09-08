/**
 * SUM of objects
 */
const phone = [
    { name: "Realme", price: 20000 },
    { name: "Apple", price: 100000 },
    { name: "Sumsung", price: 42000 },
    { name: "Redme", price: 29000 }
];

function getMin(array) {
    let num = 0;
    for (const item of array) {
        num = num + item.price;
    }
    return num;
}

const price = getMin(phone);
console.log(price);