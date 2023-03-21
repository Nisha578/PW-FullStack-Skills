// Calculator
const operator = prompt("Enter operator (either +, -, * or /): ");
const number1 = parseFloat(prompt("Enter first number:"));
const number2 = parseFloat(prompt("Enter second number:"));
let result;

switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(result);
    break;
  case "-":
    result = number1 - number2;
    console.log(result);
    break;
  case "*":
    result = number1 * number2;
    console.log(result);
    break;
  case "/":
    result = number1 / number2;
    console.log(result);
    break;
  default:
    console.log("Invalid operator");
    break;
}
