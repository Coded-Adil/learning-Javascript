const mobile = {
    brand: "Realme",
    color: "Blue",
    ram: 4
}

// for of -> array
// for in -> object
for(const item in mobile)
{
    // console.log(item);
    // console.log(mobile[item]);
}

const keys = Object.keys(mobile);
console.log(keys);
for(const item of keys)
{
    console.log(item);
    console.log(item, mobile[item]);
}