import "./App.css";

export default function App() {
  return <Sum valueA={2} valueB={7} />;
}

function Sum({ valueA, valueB }) {
  // Calculate the sum of its two props
  const sum = valueA + valueB;

  // Return the result
  return (
    <h1>
      {valueA} + {valueB} = {sum}
    </h1>
  );
}
