const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// forEach with function keyword to create colored boxes
colors.forEach(function (color) {
  // Create div element
  const colorBox = document.createElement("div");

  // add class 'color-box' to div
  colorBox.classList.add("color-box");

  // set background color of div to current color
  colorBox.style.backgroundColor = color;

  // append div to body of document
  document.body.append(colorBox);
});

// create new function (using function keyword) to create/render color box
function renderColorBox(color) {
  // create new div
  const colorBox = document.createElement("div");

  // add class to div
  colorBox.classList.add("color-box");

  // set background color of div to current color
  colorBox.style.backgroundColor = color;

  // append div to body
  document.body.append(colorBox);
}

// use forEach with rendeColorbox function
colors.forEach(renderColorBox);
