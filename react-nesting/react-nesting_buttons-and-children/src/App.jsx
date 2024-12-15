import "./App.css";

export default function App() {
  return (
    <main>
      <Button>First Button</Button>
      <Button>Second Button</Button>
      <Button>Third Button</Button>
      <Button>Fourth Button</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
