/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
  Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

To be safe, they need to land on the first unamed planet that has Oxygen levels between 19.5 % and 23.5 %.

Find the oxygen level of the first safe planet - Oxygen between 19.5 and 23.5
    */

var oxygenLevels = [24.2, 11.3, 19.9, 23.1, 29.3, 20.2];

function planetaO(element) {
    if (element >= 19.5 && element <= 23.5) {
        return true;
    }
}

var safePlanetOL = oxygenLevels.find(planetaO); //Complete this statement

console.log(safePlanetOL + "%");

/*
EXPECTED OUTPUT
19.95%
*/