import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton() {
  // Erstellen eines Zustands für isFavorite
  const [isFavorite, setIsFavorite] = useState(false);

  // Funktion zum Umschalten des Favoritenstatus
  function handleToggleFavorite() {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={handleToggleFavorite} // Umschaltfunktion wird beim Klick aufgerufen
      aria-label="favorite"
    >
      {/* Das Sternsymbol ändert sich je nach isFavorite-Status */}
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
