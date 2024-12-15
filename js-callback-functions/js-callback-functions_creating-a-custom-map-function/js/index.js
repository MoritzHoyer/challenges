const numbers = [1, 2, 3, 4, 5];

// Define double function
function double(number) {
  return number * 2;
}

// Define myMap function
function myMap(numbers, double) {
  let result = [];

  for (let i = 0; i < numbers.length; i += 1) {
    result.push(double(numbers[i]));
  }

  return result;
}

// Use myMap function and store result
const doubledNumbers = myMap(numbers, double);

// Print the resulting array
console.log(doubledNumbers);
