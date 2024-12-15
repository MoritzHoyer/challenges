import useLocalStorageState from "use-local-storage-state";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./App.css";

export default function App() {
  // Save note in localStorage with key "note"
  const [note, setNote] = useLocalStorageState("note", { defaultValue: "" });

  // Save font in localStorage with key "font"
  const [font, setFont] = useLocalStorageState("font", {
    defaultValue: "system-ui",
  });
  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}
