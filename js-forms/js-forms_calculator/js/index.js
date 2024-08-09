console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // collect all form data
  const formData = new FormData(event.target);

  // convert form data into objects
  const data = Object.fromEntries(formData);

  const numberA = parseFloat(data.numberA);
  const numberB = parseFloat(data.numberB);

  // --v-- write your code here --v--

  // switch (data.operator) {
  //   case "addition":
  //     result = add(numberA, numberB);
  //     break;
  //   case "subtraction":
  //     result = subtract(numberA, numberB);
  //     break;
  //   case "multiplication":
  //     result = multiply(numberA, numberB);
  //     break;
  //   case "division":
  //     result = divide(numberA, numberB);
  // }

  if (data.operator === "addition") {
    result = add(numberA, numberB);
  } else if (data.operator === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (data.operator === "multiplication") {
    result = multiply(numberA, numberB);
  } else if (data.operator === "division") {
    result = divide(numberA, numberB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
