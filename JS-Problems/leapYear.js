/** LeapYear
 * year%4===0
 * year%100!==0
 * year===0
 */

function leapYear(year) {
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

const isLeapYear = leapYear(2000);
console.log(isLeapYear);