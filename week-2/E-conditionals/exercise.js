/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let name = "Daniel";
let role = "mentor";

let name1 = "Milvia";
let role1 = "student";


if (role === 'mentor') {
    console.log("Hi, I'm " + name + " I'm a mentor");

} else {
    console.log("Hi, I'm " + name + ", I'm a student.");
}

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/