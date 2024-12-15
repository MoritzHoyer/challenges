import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HistoryEntry from "./index";

test("renders name of game and 'show score' button only", () => {
  const gameData = { name: "Pokemon", players: [] };

  render(<HistoryEntry game={gameData} />);

  // Überprüfen, ob der Spielname gerendert wird
  expect(screen.getByText("Pokemon")).toBeInTheDocument();

  // Überprüfen, ob der Button gerendert wird
  expect(
    screen.getByRole("button", { name: /show scores/i })
  ).toBeInTheDocument();

  // Überprüfen, dass die Punktestände noch nicht sichtbar sind
  const scores = screen.queryByRole("list");
  expect(scores).not.toBeInTheDocument();
});

test("renders player names and scores after button click", async () => {
  const gameData = {
    name: "Pokemon",
    players: [
      { name: "Pikachu", score: 5 },
      { name: "Bisasam", score: 7 },
    ],
  };

  render(<HistoryEntry game={gameData} />);

  const button = screen.getByRole("button", { name: /show scores/i });

  // Button klicken
  await userEvent.click(button);

  // Überprüfen, dass die Spielernamen und Punktestände nach dem Klick sichtbar sind
  expect(screen.getByText("Pikachu: 5")).toBeInTheDocument();
  expect(screen.getByText("Bisasam: 7")).toBeInTheDocument();
});
