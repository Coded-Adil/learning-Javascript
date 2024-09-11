function checkDigitsInName(name) {
    if(typeof name === 'string'){
        for (let i = 0; i < name.length; i++) {
            if (name[i] >= 0 && name[i] <= 9) {
                return true;
            }
        }
        return false;
    } else {
        return "Invalid Input";
    }
}
