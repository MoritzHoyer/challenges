/*

Switch the input values of the two input fields when clicking the button

- [ ] Add a second input element to the index.html
- [ ] Assign the second input element to a variable
- [ ] Add a third button (a switch button) to the index.html
- [ ] Assign the third button to a variable
- [ ] Make sure that when the switch button is clicked, the values of the two input fields are being switched
- [ ] Make sure that all three buttons work on both input fields

Hint: the HTML entity for the switch button is: &updownarrow

*/

const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

// create a second input element to the index.html + assign to a variable
const secondInput = document.createElement("input");
secondInput.type = "text";
secondInput.setAttribute("data-js", "second-input");
document.querySelector("form").appendChild(secondInput);

// add a switch button to the index.html + assign to a variable
const switchButton = document.createElement("button");
switchButton.type = "button";
switchButton.innerHTML = "&updownarrow;";
switchButton.setAttribute("data-js", "button-switch");
document.querySelector("form").appendChild(switchButton);

// eventListener for upperCase
uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.toUpperCase();
});

// eventListener for lowerCase
lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
  secondInput.value = secondInput.value.toLowerCase();
});

// eventListener for switch button
switchButton.addEventListener("click", () => {
  let temp = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = temp;
});
