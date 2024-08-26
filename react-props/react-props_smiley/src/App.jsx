import "./App.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  //rendering based on isHappy pro
  return <h1>{isHappy ? "😊" : "😞"}</h1>;
}
