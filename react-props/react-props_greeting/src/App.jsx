import "./App.css";

export default function App() {
  return <Greeting name="Jens" />;
}

function Greeting({ name }) {
  // Rendering based on the name props
  if (name === "Frank" || name === "Volker") {
    return <h1>Na Meister, wie isset?</h1>;
  }
  // Default rendering
  return <h1>Tach, {name}!</h1>;
}
