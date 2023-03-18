const input = document.getElementById("input");
const h1 = document.getElementById("h1");

document.addEventListener("keydown", function (e) {
  h1.style.color = "red";
  h1.innerText = e.key + " is keyDown";
});

document.addEventListener("keyup", function (e) {
  h1.style.color = "green";
  h1.innerText = e.key + " is keyUp";
});
