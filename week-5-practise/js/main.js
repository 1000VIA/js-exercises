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
const textarea = document.querySelector("textarea");

btnSubmit.addEventListener("click", validateInput);

function validateInput(e) {
  e.preventDefault();
  for (let i = 0; i < input.length; i++) {
    if (
      input[i].value.length === 0 ||
      (input[0].value.includes("@") && textarea.value === "")
    ) {
      input[i].style.backgroundColor = "red";
      console.log(input.value);
    } else {
      alert("thank you for filling out the form");
      console.log(input.value);
    }
    // input.value.reset();
  }
  return input.value;
}
