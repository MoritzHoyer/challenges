import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  // Handler for "Next Page" button click. Move to the next page
  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + 20);
  };

  // Handler for "Previous Page" button click. Move to the previous page, not below 0
  const handlePreviousPage = () => {
    setOffset((prevOffset) => Math.max(prevOffset - 20, 0));
  };

  return (
    <main>
      <button
        type="button"
        className="button"
        onClick={handlePreviousPage}
        disabled={offset === 0}
      >
        Previous Page
      </button>
      <button type="button" className="button" onClick={handleNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
