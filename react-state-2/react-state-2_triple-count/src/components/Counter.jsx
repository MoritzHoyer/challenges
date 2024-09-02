import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1); // Erhöht um 1 basierend auf dem vorherigen Zustand
    setCount((prevCount) => prevCount + 1); // Erhöht um 1 basierend auf dem aktualisierten Zustand
    setCount((prevCount) => prevCount + 1); // Erhöht um 1 basierend auf dem erneut aktualisierten Zustand
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
