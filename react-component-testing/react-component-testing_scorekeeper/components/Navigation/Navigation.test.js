import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

it("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const PlayLink = screen.getByRole("link", { name: "Play" });
  const Historylink = screen.getByRole("link", { name: "History" });
  expect(PlayLink).toBeInTheDocument();
  expect(Historylink).toBeInTheDocument();
});
