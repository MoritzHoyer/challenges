import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Player name" // Korrekt: kleines "n"
      placeholder="Enter player name"
      name="playerName"
      value=""
      onChange={() => {}}
      required={true}
    />
  );

  // Überprüfen, ob das Label gerendert wird
  const label = screen.getByText("Player name"); // Korrekt: kleines "n"
  expect(label).toBeInTheDocument();

  // Überprüfen, ob das Input-Feld die richtigen Attribute hat
  const input = screen.getByPlaceholderText("Enter player name");
  expect(input).toHaveAttribute("placeholder", "Enter player name");
  expect(input).toHaveAttribute("name", "playerName");
  expect(input).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {
  // Mock-Funktion für das onChange-Callback
  const handleChange = jest.fn();

  render(
    <Input
      labelText="Player name"
      name="playerName"
      placeholder="Enter player name"
      value=""
      onChange={handleChange}
    />
  );

  const input = screen.getByPlaceholderText("Enter player name");

  // Simuliere Benutzereingaben
  await userEvent.type(input, "Pikachu");

  // Überprüfen, ob die Callback-Funktion für jede Eingabe aufgerufen wurde
  expect(handleChange).toHaveBeenCalledTimes(7); // "Pikachu" besteht aus 7 Zeichen
});
