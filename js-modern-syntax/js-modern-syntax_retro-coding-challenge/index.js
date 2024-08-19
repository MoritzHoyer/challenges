// Provided Code

// let getNameAndCountry = ({ name, country }) => [name, country];

// let getRelocatedCity = (
//   city1,
//   city2 = { name: "Berlin", country: "Germany" }
// ) => {
//   let [, country] = getNameAndCountry(city2);
//   return {
//     ...city1,
//     country,
//   };
// };

// New Code

// 1. Convert arrow function to classic function
function getNameAndCountry(city) {
  // 2. Manual property access instead of destructuring
  return [city.name, city.country];
}

// 3. Convert function with default parameter
function getRelocatedCity(city1, city2) {
  if (!city2) {
    city2 === { name: "Berlin", country: "Germany" }; // Default parameters
  }

  // 2. Manual property access instead of destructuring
  var country = getNameAndCountry(city2)[1];

  // 4. Replace spread operator with manual object copying
  var relocatedCity = {};
  for (var key in city1) {
    if (city1.hasOwnProperty(key)) {
      relocatedCity[key] = city1[key];
    }
  }
  relocatedCity.country = country;

  return relocatedCityCity;
}
