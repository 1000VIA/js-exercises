const btnBlue = document.querySelector("#blueBtn");

let boxBlue = document.querySelector(".jumbotron");

btnBlue.addEventListener("click", changeThemeBlue);

function changeThemeBlue() {
  box.style.backgroundColor = "#588fbd";
}

const btnOrange = document.querySelector("#orangeBtn");

const boxOrange = document.querySelector(".jumbotron");

btnOrange.addEventListener("click", changeThemeOrange);

function changeThemeOrange() {
  boxOrange.style.backgroundColor = "#f0ad4e";
}
