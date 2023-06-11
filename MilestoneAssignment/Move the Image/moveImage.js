let moveX = 0,
  moveY = 0;
const speed = 10;
// clientWidth and clientHeight property returns the viewable width of an element
// in pixels, including padding, but not the border, scrollbar or margin.
let w = document.body.clientWidth;
let h = document.body.clientHeight;

let view_w = w - 110;
let view_h = h - 100;
window.addEventListener("keydown", Control);
function Control() {
  let key = event.key;
  let bee = document.getElementById("bee");
  let pos = document.getElementById("pos");

  if (key == "ArrowUp" && moveY < view_h) {
    moveY = moveY + speed;
    bee.style.bottom = moveY + "px";
    bee.style.left = moveX + "px";
    pos.innerHTML = "X:" + moveX + "Y: " + moveY;
  } else if (key == "ArrowDown" && moveY > 0) {
    moveY = moveY - speed;
    bee.style.bottom = moveY + "px";
    pos.innerHTML = "X:" + moveX + "Y: " + moveY;
  } else if (key == "ArrowLeft" && moveX > 0) {
    moveX = moveX - speed;
    bee.style.left = moveX + "px";
    pos.innerHTML = "X:" + moveX + "Y: " + moveY;
  } else if (key == "ArrowRight" && moveX < view_w) {
    moveX = moveX + speed;
    bee.style.left = moveX + "px";
    pos.innerHTML = "X:" + moveX + "Y: " + moveY;
  } else {
    bee.style.left = moveX + "px";
    bee.style.bottom = moveY + "px";
  }
}
