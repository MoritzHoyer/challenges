import useLocalStorageState from "use-local-storage-state";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./App.css";
import { getD6Roll } from "./utils";

// App-Komponente verwaltet den Zustand der Würfe und speichert ihn im localStorage
export default function App() {
  // Verwende useLocalStorageState, um die Würfe im localStorage zu speichern
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

  // Funktion zum Verarbeiten des Würfels
  const handleRoll = () => {
    const newRoll = { value: getD6Roll(), time: Date.now() };
    setRolls([newRoll, ...rolls]);
  };

  // Leite den aktuellen Wurfwert ab
  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
