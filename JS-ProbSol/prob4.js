function calculateFinalScore(obj) {
    if(typeof obj === 'object'){
        const nameHere = typeof obj.name === 'string';
        const testScoreHere = typeof obj.testScore === 'number' && obj.testScore <= 50;
        const schoolGradeHere = typeof obj.schoolGrade  === 'number' && obj.schoolGrade <= 30;
        const isFFamilyHere = typeof obj.isFFamily  === 'boolean';
        const result = obj.schoolGrade+ obj.testScore+20;
        if (nameHere && testScoreHere && schoolGradeHere && isFFamilyHere) {
            if (obj.isFFamily === true && result >= 80) {
                return true;
            }
            else
            {
                return false;
            }
        }
        else{
            return false;
        }
    } else {
        return "Invalid Input";
    }
}