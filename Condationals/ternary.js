// const mac = 300;

// if (mac > 100) {
//     console.log("Better");
// }
// else
// {
//     console.log("Are u ok?");
// }

/**
 *  TERNARY --> THREE PARTS
 * 
 *    ?    :
 * 
 * condition ? do if true : do if false
 * 
 */

// mac > 100 ? console.log("Better") : console.log("Do something");

let money = 500;
const isLeader = true;

// money = isLeader==true?0: money+100;
// console.log(money);

// if (isLeader === true) {
//     if (money > 100) {
//         money /= 2;
//     }
//     else
//     {
//         money = 0;
//     }
// }
// else
// {
//     money+=100;
// }
// console.log(money);

money = isLeader === true ? money > 100 ? money/2 : 0 : money+100;
console.log(money);