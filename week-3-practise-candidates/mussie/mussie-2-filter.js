/*
Mix and ranking each team using .filter() function.
*/

var championsOrder = [[0, 4], [1, 2], [2, 3], [3, 1], [4, 0]];

var premierLeagueTeams; //Complete this statement

//DO NOT EDIT BELOW THIS LINE
var champions = [
 ["Manchester-City"],
 ["Arsenal"],
 ["Liverpool"],
 ["Chealsea"],
 ["Manchester-United"]
];
var ranking = [1, 2, 3, 4, 5];

var mix = premierLeagueTeams.map(function(index) {
 var rank = ranking[index[0]];
 var team = champions[index[1]];
 return [rank, team];
});

console.log(mix);

/* EXPECTED OUTPUT */
[
 [1, ["Manchester-United"]],
 [2, ["Liverpool"]],
 [3, ["Chealsea"]],
 [4, ["Arsenal"]],
 [5, ["Manchester-City"]]
];