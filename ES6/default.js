// function add(num1, num2) {
// function add(num1, num2=10) {
function add(num1=20, num2=10) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
// const sum = add(5, 7);
// const sum = add(5);
// const sum = add(, 7);
// const sum = add();
const sum = add(10, 10);