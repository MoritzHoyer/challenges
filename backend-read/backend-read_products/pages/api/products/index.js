// Importiert die Funktion 'dbConnect' aus der Datei 'connect.js', um eine Verbindung zur MongoDB-Datenbank herzustellen.
import dbConnect from "@/db/connect";

// Importiert das 'Product'-Modell aus der Datei 'Products.js', um mit der 'products'-Collection in der MongoDB-Datenbank zu arbeiten.
import Product from "@/db/models/Products";

// Exportiert die Funktion 'handler', die eine asynchrone API-Routenfunktion ist.
// Diese Funktion verarbeitet eingehende HTTP-Anfragen an die API.
export default async function handler(request, response) {
  // Stellt sicher, dass die Verbindung zur MongoDB-Datenbank hergestellt wird, bevor weitere Aktionen ausgeführt werden.
  // Die dbConnect-Funktion sorgt dafür, dass nur eine Verbindung zur Datenbank hergestellt wird, wenn keine existiert.
  await dbConnect();

  // Überprüft, ob die HTTP-Methode der Anfrage 'GET' ist, was darauf hinweist, dass Daten abgerufen werden sollen.
  if (request.method === "GET") {
    // Verwendet das 'Product'-Modell, um alle Dokumente in der 'products'-Collection aus der Datenbank zu finden.
    // 'Product.find()' führt eine Abfrage an die Datenbank aus und gibt alle Produkte zurück.
    const products = await Product.find();

    // Sendet eine HTTP-Antwort mit Status 200 (OK) und übergibt die gefundenen Produkte als JSON.
    return response.status(200).json(products);
  } else {
    // Wenn die HTTP-Methode nicht 'GET' ist, wird eine HTTP-Antwort mit Status 405 (Method Not Allowed) zurückgegeben.
    // Das bedeutet, dass andere Methoden wie 'POST', 'PUT' usw. in dieser Route nicht erlaubt sind.
    return response.status(405).json({ message: "Method not allowed" });
  }
}
