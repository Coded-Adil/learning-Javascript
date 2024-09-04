const friends = ["Akib","Fida","Pranto","Shanto","Adil","Shoccho","Shuvro","Munif","Siddiq"]
const SortedPersons = friends.sort();
// console.log(SortedPersons);

/**Sorting --->
 * Ascending Sort
 * Descending Sort
 */
// const numbers = [8,2,5,3,6,4,2,0,3,9,1]
const numbers = [8,12,45,3,86,4,2,0,3,9,1]
// const numbers_asc = numbers.sort(); Not Working Properly
const numbers_asc = numbers.sort(function(a , b){ return a-b });
const numbers_dsc = numbers.sort(function(a , b){ return b-a });
console.log(numbers_asc);
console.log(numbers_dsc);