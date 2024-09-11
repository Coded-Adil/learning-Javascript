function calculateTax(income, expenses) {
    const taxRate = 20/100;
    if (income >= 0 && expenses >= 0 && income >= expenses) {
        const netIncome = income - expenses;
        return netIncome*taxRate;
    } else {
        return "Invalid Input";
    }
}