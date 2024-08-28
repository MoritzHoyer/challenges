import ColoredNumber from "./ColoredNumber";
import "./Counter.css";
import { useState } from "react";

export default function Counter() {
  // Step 1 Defining state variable
  const [count, setCount] = useState(0);

  //Step 2 Creating two functions to increase/decrease the count
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  // Step 3 Passing current count to ColoredNumber as 'value' prop. Attach the increment/decrement function to the '+'/'-' button
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          onClick={handleIncrement}
          aria-label="increment count"
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          onClick={handleDecrement}
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
