console.log(1);
console.log(2);
// setTimeout(() => {
//     console.log(3);
// }, 4000)
// setInterval(() => {
//     console.log(3);
// }, 2000)
console.log(4);
console.log(5);
console.log(6);

let num = 0;
const intervalId = setInterval(() => {
    num++;
    if (num > 7) {
        clearInterval(intervalId);
    }
    console.log(intervalId, num);
}, 2000);