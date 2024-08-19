import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

const EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "hhttps://swapi.py4e.com/api/planets/1/",
  films: [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/apifilms/2/",
    "https://swapi.py4e.com/api/films/3/",
    "https://swapi.py4e.com/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.py4e.com/api/vehicles/14/",
    "https://swapi.py4e.com/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.py4e.com/api/starships/12/",
    "https://swapi.py4e.com/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.py4e.com/api/people/1/",
};

const url = "https://swapi.py4e.com/api/people";

// Create dom element for a card and append it to the root
const firstCard = Card(EXAMPLE_DATA);
renderElement(firstCard);

fetchDataAndRender();

// --v-- your code below this line --v--

// Function to fetch data from Star Wars API and render cards
async function fetchDataAndRender() {
  try {
    // fetch data from Star Wars API
    const response = await fetch(url); // ?

    // Check if response is successful
    if (response.ok) {
      // parse response as JSON
      const data = await response.json();

      console.log(data);

      // loop through each character in results array
      data.results.forEach((character) => {
        // Ensure that there is only one Luke Skywalker.
        if (character.name === "Luke Skywalker") {
          console.log("I feel a disturbance in the force.");
        } else {
          // create and render card element to DOM for each character
          const card = Card(character);
          renderElement(card);
        }
      });
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred", error);
  }
}
