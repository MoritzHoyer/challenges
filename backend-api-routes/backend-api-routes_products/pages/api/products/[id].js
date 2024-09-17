import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  // ID aus der Anfrage extrahieren und in eine Zahl umwandeln
  const id = request.query.id;

  // Produkt anhand der ID finden
  const product = getProductById(id);

  // Falls kein Produkt gefunden wurde, 404-Fehler zurückgeben
  if (!product) {
    response.status(404).json({ status: "Produkt nicht gefunden." });
    return;
  }

  // Wenn das Produkt gefunden wurde, es mit Status 200 zurückgeben
  response.status(200).json(product);
}
