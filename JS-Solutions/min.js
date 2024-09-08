const phone = [20000, 100000, 12000, 35000, 50000];

function getMin(array) {
    let num = array[0];
    for (const item of array) {
        if(item<num){
            num = item;
        }
    }
    return num;
}

const price = getMin(phone);
console.log(price);