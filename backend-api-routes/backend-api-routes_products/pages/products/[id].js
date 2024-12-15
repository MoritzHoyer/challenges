import { useRouter } from "next/router";
import useSWR from "swr";

// Fetcher-Funktion mit async/await, die die URL verwendet, um die API-Daten abzurufen
const fetcher = async (url) => {
  const response = await fetch(url); // Die URL wird von useSWR an den Fetcher übergeben
  const data = await response.json(); // Die Antwort wird in JSON umgewandelt
  return data;
};

export default function ProductDetails() {
  // Verwende den useRouter-Hook, um den Query-Parameter 'id' aus der URL zu extrahieren
  const router = useRouter();
  const { id } = router.query;

  // useSWR verwendet die ID, um die Produktdaten von der API abzurufen
  // Wenn die ID vorhanden ist, wird die URL '/api/products/[id]' generiert
  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  // Fehlerbehandlung
  if (error) return <div>Fehler beim Laden des Produkts.</div>;

  // Ladeindikator anzeigen, wenn die Daten noch nicht verfügbar sind
  if (!data) return <div>Lade Produktdetails...</div>;

  // Produktdetails rendern
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        Preis: {data.price} {data.currency}
      </p>
      <p>Kategorie: {data.category}</p>
    </div>
  );
}
