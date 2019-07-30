/*
Only students who have attended enough classes are eligible to sit an exam.
You have an array named "attendanceCounts"  which contains all the students' names and their attendance counts.
Produce a new array named "eligibleStudentNames" containing only the NAMES 
of the students who have attended AT LEAST 8 classes.
*/

var attendances = [
    ["Ahmed", 8],
    ["Clement", 10],
    ["Elamin", 6],
    ["Adam", 7],
    ["Tayoa", 11],
    ["Nina", 10]
];

var eligibleStudentNames = attendances.map(function eligibleStudentNames(attendance) {;
    if (attendance[1] >= 8) {
        return attendance[0];
    }
});

eligibleStudentNames = eligibleStudentNames.filter(attendance => attendance !== undefined) // TODO: Complete this line.

// function a(element) {
//     if (element !== undefined) {
//         return element;
//     }
// }



console.log(eligibleStudentNames);

/* expected output
[ 'Ahmed', 'Clement', 'Tayoa', 'Nina' ]
Note: student attendance counts should NOT be included in your console output.
*/