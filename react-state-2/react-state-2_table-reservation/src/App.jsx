import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  // Step 1 Move people to App.jsx
  const [people, setPeople] = useState(0);

  // Step 2 Create handle functions
  const handleIncrement = () => setPeople(people + 1);
  const handleDecrement = () => setPeople(people > 0 ? people - 1 : 0);

  // Step 3 Pass handle functions as props. Display dynamic count of people.
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
