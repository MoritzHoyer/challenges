import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("calls callbacks when increasing or decreasing score", async () => {
  // Mock-Funktionen für die Callback-Tests
  const mockDecreaseScore = jest.fn();
  const mockIncreaseScore = jest.fn();

  // Rendering der Player-Komponente mit Mock-Funktionen
  render(
    <Player
      name="Pikachu"
      score={10}
      onDecreasePlayerScore={mockDecreaseScore}
      onIncreasePlayerScore={mockIncreaseScore}
    />
  );

  // Buttons zum Erhöhen und Verringern des Scores abrufen
  const decreaseButton = screen.getByRole("button", {
    name: /decrease score/i,
  });
  const increaseButton = screen.getByRole("button", {
    name: /increase score/i,
  });

  // Simuliere Klicks auf die Buttons
  await userEvent.click(decreaseButton);
  await userEvent.click(increaseButton);

  // Überprüfen, ob die Mock-Funktionen jeweils einmal aufgerufen wurden
  expect(mockDecreaseScore).toHaveBeenCalledTimes(1);
  expect(mockIncreaseScore).toHaveBeenCalledTimes(1);
});
