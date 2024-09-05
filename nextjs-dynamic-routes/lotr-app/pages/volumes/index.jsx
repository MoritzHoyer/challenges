import Link from "next/link"; // Importiere das Link-Komponente von Next.js
import { introduction, volumes } from "../../lib/data"; // Importiere Einführung und Bände-Daten
import { useRouter } from "next/router"; // Importiere den useRouter-Hook

// Funktion zur Auswahl eines zufälligen Elements aus einem Array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Komponente für die Übersicht der Bände
export default function VolumesPage() {
  const router = useRouter(); // Initialisiere den useRouter-Hook

  // Event-Handler zum Navigieren zu einem zufälligen Band
  function handleRandomVolume() {
    const randomVolume = getRandomElement(volumes); // Wähle ein zufälliges Band aus dem volumes-Array
    router.push(`/volumes/${randomVolume.slug}`); // Navigiere zur Detailseite des zufälligen Bandes
  }

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p> {/* Einführungstext */}
      <h2>All Volumes</h2>
      <ul>
        {/* Erzeuge dynamisch die Liste der Links zu den Bänden */}
        {volumes.map((volume) => (
          <li key={volume.slug}>
            {/* Verwende den `slug` als eindeutigen Schlüssel */}
            <Link href={`/volumes/${volume.slug}`}>
              {/* Erzeuge den Link dynamisch */}
              {volume.title} {/* Verwende den Titel des Bandes als Link-Text */}
            </Link>
          </li>
        ))}
      </ul>
      {/* Button zum Navigieren zu einem zufälligen Band */}
      <button onClick={handleRandomVolume}>Go to a Random Volume</button>
    </div>
  );
}
