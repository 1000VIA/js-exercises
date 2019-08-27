/*ChangeColourBlue */

const btnBlue = document.querySelector("#blueBtn");

let boxBlue = document.querySelector(".jumbotron");

btnBlue.addEventListener("click", changeThemeBlue);

function changeThemeBlue() {
  boxBlue.style.backgroundColor = "#588fbd";
}

/*ChangeColourOrange */

const btnOrange = document.querySelector("#orangeBtn");

const boxOrange = document.querySelector(".jumbotron");

btnOrange.addEventListener("click", changeThemeOrange);

function changeThemeOrange() {
  boxOrange.style.backgroundColor = "#f0ad4e";
}

/*ChangeColourGreen */

const btnGreen = document.querySelector("#greenBtn");

const boxGreen = document.querySelector(".jumbotron");

btnGreen.addEventListener("click", changeThemeGreen);

function changeThemeGreen() {
  boxGreen.style.backgroundColor = "#87ca8a";
}

/*Validation form*/

const btnSubmit = document.querySelector("form > .btn.btn-primary");
const input = document.querySelectorAll(".form-control");
const form = document.querySelector("form");
const email = document.querySelector("#exampleInputEmail1");

const inputArray = [...document.querySelectorAll(".form-control")];

btnSubmit.addEventListener("click", validateInput);

function validateInput(e) {
  e.preventDefault();
  let isFormValid = true;
  inputArray.forEach(function(input, index, array) {
    if (input.value === "") {
      isFormValid = false;
      input.style.backgroundColor = "red";
    } else if (!email.value.includes("@")) {
      isFormValid = false;
      email.style.backgroundColor = "red";
    } else {
      input.style.backgroundColor = "";
    }
  });
  if (isFormValid) {
    alert("Gracias por llenar nuestro formulario");
    form.reset();
  } else {
    alert("Hay errores en el formulario!");
  }
}
/**
 * Actividad con FOR:
 */
// function validateInput(e) {
//   e.preventDefault();
//   let isFormValid = true;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].value === "") {
//       isFormValid = false;
//       input[i].style.backgroundColor = "red";
//     } else {
//       input[i].style.backgroundColor = "";
//     }
//   }
//   if (isFormValid) {
//     alert("Gracias por llenar nuestro formulario");
//     form.reset();
//   } else {
//     alert("Hay errores en el formulario!");
//   }
// }
//spread Operator
