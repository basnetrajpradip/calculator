let num1, operator, num2, result;
const inputDisplay = document.querySelector(".input-display");
const operationDisplay = document.querySelector(".operation-display");
const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const calculate = document.querySelector(".calculate");
let boolToggle = true;

function toggle() {
  boolToggle = !boolToggle;
  return boolToggle;
}

function add(a, b = 0) {
  return a + b;
}
function substract(a, b = 0) {
  return a - b;
}
function multiply(a, b = 1) {
  return a * b;
}
function divide(a, b = 1) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return substract(a, b);
      break;
    case "x":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}

function populateInputDisplay(event) {
  inputDisplay.textContent += this.value;
}

function populateOperationDisplay(event) {
  num1 = Number(inputDisplay.textContent);
  operationDisplay.textContent = `${num1} ${this.value}`;
  inputDisplay.textContent = "";
  operator = this.value;
}

function calculateResult(event) {
  num2 = Number(inputDisplay.textContent);
  inputDisplay.textContent = `${operate(num1, num2, operator)}`;
  operationDisplay.textContent = "";
}

numButtons.forEach((button) => {
  button.addEventListener("click", populateInputDisplay);
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", populateOperationDisplay);
});

calculate.addEventListener("click", calculateResult);
