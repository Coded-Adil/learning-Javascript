const heights = [62.64,66,72,68,74,71,78];

function maxHeight(array) {
    let max = array[0];
    for (const item of array) {
        if (item>max) {
            max = item;
        }
    }
    return max;
}
const max = maxHeight(heights);
console.log(max);