import { useRouter } from "next/router"; // Importiere den useRouter-Hook
import Image from "next/image"; // Importiere das Image-Komponente für Bild-Darstellung
import Link from "next/link"; // Importiere das Link-Komponente für die Navigation
import { volumes } from "../../lib/data"; // Importiere die Bände-Daten

export default function VolumeDetail() {
  // Verwende den useRouter-Hook, um den `slug`-Parameter aus der URL abzurufen
  const router = useRouter();
  const { slug } = router.query;

  // Finde den entsprechenden Band basierend auf dem `slug`
  const volume = volumes.find((volume) => volume.slug === slug);

  // Überprüfe, ob der Band existiert
  if (!volume) {
    return <p>Volume not found</p>; // Fallback, falls kein passender Band gefunden wird
  }

  // Finde den Index des aktuellen Bands im volumes-Array
  const currentIndex = volumes.findIndex((volume) => volume.slug === slug);

  // Berechne den vorherigen und nächsten Band
  const previousVolume = currentIndex > 0 ? volumes[currentIndex - 1] : null;
  const nextVolume =
    currentIndex < volumes.length - 1 ? volumes[currentIndex + 1] : null;

  return (
    <div>
      <button>
        <Link href="/volumes">← All Volumes</Link>{" "}
        {/* Link zur Übersichtseite */}
      </button>
      <h1>{volume.title}</h1> {/* Titel des Bands */}
      <p>{volume.description}</p> {/* Beschreibung des Bands */}
      <Image
        src={`/images/${slug}.png`} // Dynamische Bildquelle basierend auf `slug`
        height={230}
        width={140}
        alt={`Bookcover of ${volume.title}`}
      />
      <h2>Books in this volume</h2>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal}. {book.title}
          </li>
        ))}
      </ul>
      <nav>
        {/* Bedingter Link zum vorherigen Band */}
        {previousVolume && (
          <button>
            <Link href={`/volumes/${previousVolume.slug}`}>
              ← Previous Volume: {previousVolume.title}
            </Link>
          </button>
        )}
        {/* Bedingter Link zum nächsten Band */}
        {nextVolume && (
          <button>
            <Link href={`/volumes/${nextVolume.slug}`}>
              Next Volume: {nextVolume.title} →
            </Link>
          </button>
        )}
      </nav>
    </div>
  );
}
