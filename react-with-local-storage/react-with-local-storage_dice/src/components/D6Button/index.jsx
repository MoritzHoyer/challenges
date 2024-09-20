import D6 from "../D6";
import "./D6Button.css";

// D6Button-Komponente erhält nur den aktuellen Wert und die Roll-Funktion als Props
export function D6Button({ value, onRoll }) {
  return (
    <button className="d6-button" type="button" onClick={onRoll}>
      <D6 value={value} />
    </button>
  );
}
