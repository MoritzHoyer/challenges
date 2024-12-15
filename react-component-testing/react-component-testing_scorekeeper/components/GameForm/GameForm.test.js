import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm onCreateGame={jest.fn()} />);

  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const playerNamesInput = screen.getByLabelText(/player names/i);
  expect(nameOfGameInput).toBeInTheDocument();
  expect(playerNamesInput).toBeInTheDocument();

  const button = screen.getByRole("button", { name: /create game/i });
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm onCreateGame={jest.fn()} />);

  const form = screen.getByRole("form", { name: /create a new game/i });
  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const mockOnCreateGame = jest.fn();

  render(<GameForm onCreateGame={mockOnCreateGame} />);

  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const playerNamesInput = screen.getByLabelText(/player names/i);
  const submitButton = screen.getByRole("button", { name: /create game/i });

  await userEvent.type(nameOfGameInput, "Pokemon");
  await userEvent.type(playerNamesInput, "Pikachu, Bisasam");

  await userEvent.click(submitButton);

  expect(mockOnCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Pokemon",
    playerNames: ["Pikachu", "Bisasam"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const mockOnCreateGame = jest.fn();

  render(<GameForm onCreateGame={mockOnCreateGame} />);

  const nameOfGameInput = screen.getByLabelText(/name of game/i);
  const submitButton = screen.getByRole("button", { name: /create game/i });

  await userEvent.type(nameOfGameInput, "Pokemon");

  await userEvent.click(submitButton);

  expect(mockOnCreateGame).not.toHaveBeenCalled();
});
