function isEven(x) {
    // if(x%2==0)
    // {
    //     return true;
    // }
    // else
    // {
    //     return false;
    // }

    if(x%2==0)
    {
        return true;
    }
    return false;
}
function isOdd(x) {
    return x % 2 === 0 ? false : true;
}
const number = isOdd(5);
console.log(number);