import "./Entry.css";
import star from "../../assets/star.svg";
import starFilled from "../../assets/star-filled.svg";

export default function Entry({ date, title, text, favorite }) {
  return (
    <div className="entry">
      <div className="entry__header">
        <h2 className="entry__title">{title}</h2>
        <img
          className="entry__favorite"
          src={favorite ? starFilled : star}
          alt="Favorite"
        />
      </div>
      <div className="entry__date">{date}</div>
      <p className="entry__text">{text}</p>
    </div>
  );
}
