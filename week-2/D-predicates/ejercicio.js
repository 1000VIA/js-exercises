/*
  Predicates
  ---------------------------------
  Write a predicate to predicates
  The variables should have values that match the expected results.
*/

// Finish the predicate function to test if the passed number is negative (less than zero)
function esNegativo(numero) {
    return esNegativo < 0
}

// Finish the predicate function to test if the passed number is between 0 and 10
function entreCeroyDiez(numero) {
    return numero > 0 && numero < 10;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let numero = 5;
let NumeroNegativo = esNegativo(numero);

let numeroEntreCeroyDiez = entreCeroyDiez(numero);
console.log("El número en prueba es: " + numero);
console.log("¿El número es negativo? " + NumeroNegativo);
console.log("¿El número está entre cero o 10? " + numeroEntreCeroyDiez);

/* 
  EXPECTED RESULT
  ---------------
  The number in test is 5
  Is the number negative? false
  Is the number between 0 and 10? true
*/