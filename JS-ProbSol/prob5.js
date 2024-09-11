function  waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTimes) && typeof serialNumber === 'number'){
        let sum = 0;
        for (const time of waitingTimes) {
            sum+=time;
        }
        const len = waitingTimes.length;
        const avg = Math.round(sum/len);
        const sub = (serialNumber-1)-len;
        return avg*sub;
    } else {
        return "Invalid Input";
    }
}