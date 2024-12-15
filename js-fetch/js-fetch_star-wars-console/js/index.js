console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data.results);
      console.log(
        "Dart Vader: ",
        data.results.find((character) => character.name === "Darth Vader")
      );
      const eyeColorR2D2 = data.results.find((item) => item.name === "R2-D2");
      console.log("eyeColorR2D2: ", eyeColorR2D2.eye_color);
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An error occured: ", error);
  }
}

fetchData();
