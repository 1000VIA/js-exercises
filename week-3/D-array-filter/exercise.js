/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

var pairsByIndexRaw = [
    [0, 3],
    [1, 2],
    [2, 1], null, [1], false, "whoops"
];

var pairsByIndex = pairsByIndexRaw.filter(filtrar); // Complete this statement

function filtrar(element) {
    if (Array.isArray(element)) {
        if (element.length > 1) {
            return true;
        }
    }

}

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

var pairs = pairsByIndex.map(function(indexes) {
    var student = students[indexes[0]];
    var mentor = mentors[indexes[1]];
    return [student, mentor];
});

console.log(pairs);