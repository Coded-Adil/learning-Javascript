/**
 * MULTILEVEL CONDITION
 */

const price = 2500;

if (price >= 5000) {
    // 10% discount
    const discount = price*10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (price >=2500) {
    const discountAmount = price*5 / 100;
    const payment = price - discountAmount;
    console.log(payment);
}
else
{
    console.log("Sorry there is no discount");
}