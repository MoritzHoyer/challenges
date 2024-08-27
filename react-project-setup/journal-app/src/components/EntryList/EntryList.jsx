import "./EntryList.css";
import Entry from "../Entry/Entry";

export default function EntryList() {
  const entries = [
    {
      date: "FEB 27, 2028",
      title: "That's life in the city",
      text: "Si sine causa?...",
      favorite: true,
    },
    {
      date: "FEB 26, 2028",
      title: "That's life in the city",
      text: "Si sine causa?...",
      favorite: false,
    },
    {
      date: "FEB 25, 2028",
      title: "That's life in the city",
      text: "Si sine causa?...",
      favorite: false,
    },
  ];

  return (
    <div className="entry-list">
      {entries.map((entry, index) => (
        <Entry key={index} {...entry} />
      ))}
    </div>
  );
}
