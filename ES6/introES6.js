/**  var-let-const ---->>
* var -> No reason to Use it anymore
* let -> Can reassign value
* can NOT reassign value
*/

const money = 200;
// money = 500;
// console.log(money);
const rich = money + 500;
// console.log(rich);

// const count = 0;
let count = 0;
count = count + 10;
// console.log(count);

// const number = [20, 40, 10, 30];
let number = [20, 40, 10, 30];
// number = [303, 232, 434, 565];
number[1] = 232;
console.log(number);

// objects in js
const student = {
    name: 'Adil',
    id: 222010276
}
// student = {name: 'Prince'};
student.name = 'Prince';
console.log(student);
// Loop
let sum = 0;
for (let i = 0; i < 10; i++) {
    const num = i;
    sum = sum + num; 
}
console.log(sum);