const input = document.getElementById('input');
const h1 = document.getElementById('h1');

input.addEventListener('keypress', function(e) {
    h1.style.color = "purple";
  h1.innerText = "you have pressed " + e.key
});
