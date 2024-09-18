// Importiert das 'Product'-Modell, um auf die 'products'-Collection in der MongoDB-Datenbank zuzugreifen.
import Product from "@/db/models/Products";

// Importiert die 'dbConnect'-Funktion, um eine Verbindung zur MongoDB-Datenbank herzustellen.
import dbConnect from "@/db/connect";

// Exportiert eine asynchrone API-Routenfunktion namens 'handler'.
// Diese Funktion wird aufgerufen, wenn eine Anfrage an diese API-Route gesendet wird.
export default async function handler(request, response) {
  // Stellt eine Verbindung zur MongoDB-Datenbank her.
  // Die Funktion 'dbConnect' stellt sicher, dass nur eine Verbindung hergestellt wird, wenn noch keine existiert.
  await dbConnect();

  // Destrukturiert die 'id' aus der Anfrage-Query-Parameter.
  // Dies extrahiert die ID des Produkts, das in der URL angefordert wird.
  const { id } = request.query;

  // Überprüft, ob die HTTP-Methode der Anfrage 'GET' ist.
  // Dies bedeutet, dass die API nach Daten sucht, anstatt sie zu erstellen oder zu aktualisieren.
  if (request.method === "GET") {
    // Sucht in der 'products'-Collection nach einem Produkt mit der angegebenen ID und füllt die verknüpften Reviews auf.
    // 'Product.findById(id)' gibt das Produkt-Dokument zurück, wenn es gefunden wird und füllt die Reviews mit .populate("reviews") auf.
    const product = await Product.findById(id).populate("reviews");

    // Überprüft, ob das Produkt nicht gefunden wurde.
    // Wenn kein Produkt mit der angegebenen ID existiert, wird eine Antwort mit Statuscode 404 (Not Found) gesendet.
    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    // Wenn das Produkt gefunden wurde, wird eine Antwort mit Statuscode 200 (OK) und das Produkt inklusive der Reviews als JSON gesendet.
    response.status(200).json(product);
  } else {
    // Wenn die Anfrage nicht vom Typ 'GET' ist, wird eine Fehlermeldung mit Status 405 (Method not allowed) gesendet.
    response.status(405).json({ message: "Method not allowed" });
  }
}
