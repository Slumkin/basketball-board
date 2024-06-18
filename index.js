let numberHome = document.getElementById("number-home");
let numberGuest = document.getElementById("number-guest");
let countHome = 0;
let countGuest = 0;

function plusOneHome() {
  countHome += 1;
  numberHome.textContent = countHome;
}

function plusTwoHome() {
  countHome += 2;
  numberHome.textContent = countHome;
}

function plusThreeHome() {
  countHome += 3;
  numberHome.textContent = countHome;
}

function plusOneGuest() {
  countGuest += 1;
  numberGuest.textContent = countGuest;
}

function plusTwoGuest() {
  countGuest += 2;
  numberGuest.textContent = countGuest;
}

function plusThreeGuest() {
  countGuest += 3;
  numberGuest.textContent = countGuest;
}
