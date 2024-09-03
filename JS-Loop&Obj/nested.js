const college = {
    name: "REBMSC",
    class: ['9','10','11','12'],
    events: ['Bijoy dibosh','Jonmastomi','Eid','Durga Puja','Eid'],
    unique: {
        color: "Blue",
        semresult: {
            gpa: "4",
            merit: "top"
        }
    }
}

// console.log(college.unique);
college.events[1] = 'Science Fair';
// console.log(college.events[1]);
console.log(college);
delete college.class;
console.log(college);
// console.log(college.unique.color);
// console.log(college.unique.semresult.merit);