// Importiert die Funktion 'dbConnect' aus der Datei 'connect.js', um eine Verbindung zur MongoDB-Datenbank herzustellen.
import dbConnect from "../../../db/connect";
// Importiert das 'Product'-Modell aus der Datei 'Product.js', um auf die 'products'-Collection in der MongoDB-Datenbank zuzugreifen.
import Product from "../../../db/models/Product";

// Exportiert eine asynchrone API-Routenfunktion namens 'handler', die eingehende Anfragen verarbeitet.
export default async function handler(request, response) {
  // Stellt eine Verbindung zur MongoDB-Datenbank her.
  await dbConnect();

  // Überprüft, ob die HTTP-Methode der Anfrage 'GET' ist.
  if (request.method === "GET") {
    // Sucht alle Produkte in der MongoDB-Collection 'products'.
    const products = await Product.find();

    // Gibt die gefundenen Produkte als JSON zurück und setzt den HTTP-Statuscode auf 200 (OK).
    return response.status(200).json(products);

    // Überprüft, ob die HTTP-Methode der Anfrage 'POST' ist.
  } else if (request.method === "POST") {
    try {
      // Extrahiert die Produktdaten aus dem Anfrage-Body (den Daten, die vom Frontend gesendet wurden).
      const productData = request.body;

      // Erstellt ein neues Produkt in der 'products'-Collection mit den gesendeten Daten.
      await Product.create(productData);

      // Sendet eine Antwort zurück mit dem HTTP-Statuscode 201 (Created) und einer Bestätigungsnachricht.
      return response.status(201).json({ status: "Product created." });

      // Fängt Fehler ab, die während der Produkterstellung auftreten könnten.
    } catch (error) {
      console.error(error);

      // Gibt eine Fehlermeldung mit dem HTTP-Statuscode 400 (Bad Request) zurück, falls ein Fehler auftritt.
      return response.status(400).json({ error: error.message });
    }

    // Falls die HTTP-Methode weder GET noch POST ist, gibt die API eine Fehlermeldung mit Statuscode 405 (Method Not Allowed) zurück.
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
