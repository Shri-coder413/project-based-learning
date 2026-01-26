const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

let currentValue = "0";
let previousValue = null;
let operator = null;
let waitingForSecondValue = false;

function updateDisplay(value) {
  display.value = value;
}

function inputNumber(num) {
  if (waitingForSecondValue) {
    currentValue = num;
    waitingForSecondValue = false;
    updateDisplay(`${previousValue} ${operator} ${currentValue}`);
    return;
  }

  currentValue = currentValue === "0" ? num : currentValue + num;
  updateDisplay(currentValue);
}

function inputDecimal() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
    updateDisplay(currentValue);
  }
}

function chooseOperator(op) {
  if (operator && !waitingForSecondValue) {
    calculate();
  }

  previousValue = currentValue;
  operator = op;
  waitingForSecondValue = true;

  updateDisplay(`${previousValue} ${operator}`);
}

function calculate() {
  if (!operator || waitingForSecondValue) return;

  const a = parseFloat(previousValue);
  const b = parseFloat(currentValue);

  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b === 0 ? "Error" : a / b;
      break;
  }

  updateDisplay(result);
  currentValue = result.toString();
  operator = null;
  previousValue = null;
}

function resetCalculator() {
  currentValue = "0";
  previousValue = null;
  operator = null;
  waitingForSecondValue = false;
  updateDisplay("0");
}

buttons.addEventListener("click", (e) => {
  const value = e.target.dataset.value;
  if (!value) return;

  if (!isNaN(value)) inputNumber(value);
  else if (value === ".") inputDecimal();
  else if (value === "C") resetCalculator();
  else if (value === "=") calculate();
  else chooseOperator(value);
});
