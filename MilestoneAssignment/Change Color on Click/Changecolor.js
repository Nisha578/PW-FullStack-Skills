const button = document.getElementById("btn");
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", () => {
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    hexcolor += arr[Math.floor(Math.random() * arr.length)];
    console.log(hexcolor);
  }
  document.body.style.backgroundColor = hexcolor;
});
