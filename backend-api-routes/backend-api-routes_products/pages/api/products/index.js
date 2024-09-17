import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  // Holt alle Produkte über die getAllProducts Funktion
  const products = getAllProducts();

  // Sendet eine Antwort mit Status 200 und den Produkten als JSON
  response.status(200).json(products);
}
