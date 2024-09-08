function mul(num1,num2) {
    if(typeof num1!== 'number' || typeof num2 !== 'number'){
        return 'use number';
    }
    const mult = num1*num2;
    return mult;
}
const result = mul('2',7);
console.log(result);