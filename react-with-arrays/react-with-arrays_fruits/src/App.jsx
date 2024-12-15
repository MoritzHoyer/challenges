import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌 Banana", color: "yellow" },
    { id: 2, name: "🍎 Apple", color: "red" },
    { id: 3, name: "🍇 Grape", color: "purple" },
    { id: 4, name: "🍊 Orange", color: "orange" },
    { id: 5, name: "🍉 Watermelon", color: "green" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
