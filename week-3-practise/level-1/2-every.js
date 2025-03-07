/*
 Following on from exercise level-1/1-find.js
  The travellers have safely landed and are foraging for food in the natural wildlife.
  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!
  Determine if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.
  Hint included at end of file.
*/

var bush1BerryColours = ["pink", "pink", "pink", "neon", "pink", "transparent"];
var bush2BerryColours = ["pink", "pink", "pink", "pink"];

// function colorRosa(element) {
//     return element === "pink";
// }
// var bush1SafeToEat = bush1BerryColours.every(colorRosa); //Complete this statement


// function colorRosa1(element) {
//     return element === "pink";
// }
// var bush2SafeToEat = bush2BerryColours.every(colorRosa1);

var bush1SafeToEat = bush1BerryColours.every((element) => {
    return element === "pink";
});

var bush2SafeToEat = bush2BerryColours.every((element) => {
    return element === "pink";
}); //Complete this statement

if (bush1SafeToEat) {
    console.log("Bush 1 is safe to eat from");
} else {
    console.log("Toxic! Leave bush 1 alone");
}

if (bush2SafeToEat) {
    console.log("Bush 2 is safe to eat");
} else {
    console.log("Toxic! Leave bush 2 alone");
}

/*
 EXPECTED OUTPUT
 Toxic! Leave bush 1 alone"
 Bush 2 is safe to eat from"
*/

/* Hint:
"Hfr gur rirel shapgvba"
(decode this at https://rot13.com)
*/