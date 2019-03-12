// Turn getFlightDetails() into an async function and use the .then(..) method to implement the following functions in order
// - getFlightDetails()
// - selectFlight(..)
// - bookFlight(..)
//
// Hint: use the `async` keyword to create an async function

async function getFlightDetails() {
  setTimeout(() => { }, 300)

  return 'LDN -> JPN'
.catch(flight => {
  return `Flight ${flight} selected`
})

.then(flight=> {
  return `Flight ${flight} booked`
})
/*async function getFlightDetails() {
  setTimeout(() => {}, 300)

  return 'LDN -> JPN'
}

function selectFlight(flight) {
  return `Flight ${flight} selected`
}

function bookFlight(flight) {
  return `Flight ${flight} booked`
}
*/

