const btnBlue = document.querySelector("#blueBtn");

let box = document.querySelector(".jumbotron");

btnBlue.addEventListener("click", changeThemeBlue);

function changeThemeBlue() {
  box.style.backgroundColor = "#588fbd";
}
