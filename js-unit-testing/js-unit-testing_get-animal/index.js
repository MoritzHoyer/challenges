export function getAnimal(animals) {
  if (animals === "cats") {
    return "I totally love cats!";
  }

  if (animals) {
    return `I like ${animals}!`;
  }

  return "I do not like animals at all!";
}
