import Link from "next/link"; // Importiere das Link-Komponente von Next.js
import { introduction, volumes } from "../../lib/data"; // Importiere Einführung und Bände-Daten
import { useRouter } from "next/router"; // Importiere den useRouter-Hook

// Komponente für die Übersicht der Bände
export default function VolumesPage() {
  const router = useRouter(); // Initialisiere den useRouter-Hook

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
    </div>
  );
}
