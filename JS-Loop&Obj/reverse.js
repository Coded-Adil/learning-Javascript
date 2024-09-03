const name= "I am Adil Rahman";
let reverse = " ";
for(const letter of name)
{
    // console.log(letter);
    // reverse = letter + reverse;
}
// console.log(reverse);
for(let i=0; i<name.length; i++)
{
    // console.log(i);
    // console.log(name[i]);
    const letter = name[i];
    reverse = letter + reverse;
}
// console.log(reverse);

/**ShortCut */
// const reversed = name;
const reversed = name.split("").reverse().join("");
console.log(reversed);