// Continue ---> skips the rest of the actions and moves to the next integer or element
// Break ------> Stopes the task.   


for(let i = 1; i <= 10; i++)
{
    if(i%2===0)
    {
        continue;
    }
    console.log("ODD", i);
}