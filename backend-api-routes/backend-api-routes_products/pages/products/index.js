import useSWR from "swr";

// Fetcher-Funktion mit async/await
const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function ProductList() {
  // Verwende den useSWR-Hook, um Daten von der API zu holen
  const { data, error } = useSWR("/api/products", fetcher);

  // Wenn es einen Fehler gibt, zeige eine Fehlermeldung an
  if (error) return <div>Fehler beim Laden der Produkte.</div>;

  // Wenn die Daten noch geladen werden, zeige einen Ladeindikator an
  if (!data) return <div>Lade Produkte...</div>;

  // Erstelle eine Liste aller Produkte
  return (
    <div>
      <h1>Produktübersicht</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              Preis: {product.price} {product.currency}
            </p>
            <p>Kategorie: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
