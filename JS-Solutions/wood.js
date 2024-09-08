/**
 * chair --> 3cft
 * table --> 10cft
 * bed --> 50cft
 */

function woodCal(chair,table,bed) {
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    const allChair = chairWood*chair;
    const allTable = tableWood*table;
    const allBed = bedWood*bed;

    const total=allChair+allTable+allBed;
    return total;
}

const cost = woodCal(6,2,3);
console.log(cost);