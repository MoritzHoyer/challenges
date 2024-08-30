import "./Tag.css";

export default function Tag({ tag }) {
  const className = tag === "admin" ? "tag Tag--highlight" : "tag";
  return <li className={className}>{tag}</li>;
}
