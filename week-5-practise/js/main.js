const btnBlue = document.querySelector("#blueBtn");

let boxBlue = document.querySelector(".jumbotron");

btnBlue.addEventListener("click", changeThemeBlue);

function changeThemeBlue() {
  boxBlue.style.backgroundColor = "#588fbd";
}

const btnOrange = document.querySelector("#orangeBtn");

const boxOrange = document.querySelector(".jumbotron");

btnOrange.addEventListener("click", changeThemeOrange);

function changeThemeOrange() {
  boxOrange.style.backgroundColor = "#f0ad4e";
}

const btnGreen = document.querySelector("#greenBtn");

const boxGreen = document.querySelector(".jumbotron");

btnGreen.addEventListener("click", changeThemeGreen);

function changeThemeGreen() {
  boxGreen.style.backgroundColor = "#87ca8a";
}
