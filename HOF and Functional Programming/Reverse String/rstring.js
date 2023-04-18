// program to reverse a string

function reverseStringg() {
let str = "computer science";
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
   console.log(newString);
}

setTimeout(reverseStringg,2000);