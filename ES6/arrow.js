// function add(a, b) {
//     const result = a + b;
//     return result;
// }
// function add(a, b) {
//     return  a + b;
// }
// Arrow without function declaration || function expression
const add = (a,b) => a+b;
const add2 = (a,b,c,d) => (a+b) * (c+d);
const sum = add2(3,7,4,6);
console.log(sum);