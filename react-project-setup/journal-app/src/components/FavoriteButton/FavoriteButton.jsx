import "./FavoriteButton.css";
import StarFilled from "../assets/star-filled.svg";
import Star from "../assets/star.svg";

export default function FavoriteButton() {
  // this should be a state variable
  const isFavorite = false;

  return (
    <button
      className="favorite-button"
      onClick={() => {
        console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
