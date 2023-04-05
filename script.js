let dotCount = 0;
let num1, operator, num2, result;
const inputDisplay = document.querySelector(".input-display");
const operationDisplay = document.querySelector(".operation-display");
const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const calculate = document.querySelector(".calculate");
const reset = document.querySelector(".RESET");
const del = document.querySelector(".DEL");
let isFirstInput = true;
let inputCount = 0;

function toggle() {
  isFirstInput = !isFirstInput;
  return isFirstInput;
}

function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
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
  if (inputCount < 1) {
    num1 = Number(inputDisplay.textContent);
  } else {
    num2 = Number(inputDisplay.textContent);
  }
}

function populateOperationDisplay(event) {
  inputCount++;
  if (inputCount > 1) {
    num1 = operate(num1, num2, operator);
    num2 = null;
  }
  operator = this.value;
  operationDisplay.textContent = `${num1} ${this.value}`;
  inputDisplay.textContent = "";
}

function calculateResult(event) {
  if (num2 !== null) {
    operationDisplay.textContent += ` ${num2} =`;
    num1 = operate(num1, num2, operator);
    num2 = null;
    inputCount = 0;
  }

  inputDisplay.textContent = num1;
}

function resetEverything(event) {
  num1 = num2 = null;
  isFirstInput = true;
  inputCount = 0;
  inputDisplay.textContent = "";
  operationDisplay.textContent = "";
}

function delLastInput(event) {
  inputDisplay.textContent = inputDisplay.textContent.slice(0, inputDisplay.textContent.length - 1);
  if (inputCount < 1) {
    num1 = Number(inputDisplay.textContent);
  } else {
    num2 = Number(inputDisplay.textContent);
  }
}

del.addEventListener("click", delLastInput);

reset.addEventListener("click", resetEverything);

numButtons.forEach((numButton) => {
  numButton.addEventListener("click", populateInputDisplay);
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", populateOperationDisplay);
});

calculate.addEventListener("click", calculateResult);
