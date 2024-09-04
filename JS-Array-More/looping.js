/**
 * Loop's
 * 
 * for loop
 * while loop
 * do while loop
 * for in loop --->Object
 * for of loop --->Array
 */

const friends = ["Elon", "Bill", "Mark", "Waren"];

for(const friend of friends)
{
    // console.log(friend);
}

for(let i = 0; i<friends.length; i++)
{
    // console.log(friends[i]);
}

let i = 0;
while(i<friends.length)
{
    console.log(friends[i]);
    i++;
}