const user = {name: 'Adil', job: 'Student', id: 276};
// console.log(user);

// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(stringified);
/**
 * { name: 'Adil', job: 'Student', id: 276 }
 * {"name":"Adil","job":"Student","id":276}
 */

const shop = {
    owner: 'Adil',
    address: {
        road: 19,
        house: 12,
        area: 'Nikunja',
        city: 'Dhaka'
    },
    products: ['Phone', 'PC', 'Laptop'],
    revenue: 34000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJosn = JSON.stringify(shop);
console.log(shopJosn);
const shopObj = JSON.parse(shopJosn);
console.log(shopObj);