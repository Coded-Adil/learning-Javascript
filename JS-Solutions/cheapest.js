const phone = [
    { name: "Realme", price: 20000, camera: '12mp', color: 'Black'},
    { name: "Apple", price: 100000, camera: '12mp', color: 'Black'},
    { name: "Sumsung", price: 42000, camera: '12mp', color: 'Black'},
    { name: "Redme", price: 29000, camera: '12mp', color: 'Black'}
];

function getMin(array) {
    let num = array[0];
    for (const item of array) {
        if(item.price<num.price){
            num = item;
        }
    }
    return num;
}

const price = getMin(phone);
console.log(price);