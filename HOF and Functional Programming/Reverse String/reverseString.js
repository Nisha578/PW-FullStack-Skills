

setTimeout(function reverseString() {
    const input = document.getElementById("input").value;
    const container = document.getElementById("container");
   
    let newString = "";
    for (let i = input.length-1; i>=0; i--) {
        newString += input[i];
    }
   
   container.innerText = newString;
   container.style.color = "#ff5659";
   container.style.textAlign = "center";
   container.style.fontSize = "27px";
   container.style.fontWeight = "500";
},2000);
