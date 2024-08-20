export function getAnimal(animals) {
  if (animals === "cats") {
    return "i totally love cats";
  }

  if (animals) {
    return `I like ${animals}!`;
  }

  return "i do not like animals at all";
}
