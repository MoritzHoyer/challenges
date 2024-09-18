import mongoose from "mongoose";

// Destrukturiert das Schema-Objekt aus dem Mongoose-Modul, um es später für die Erstellung eines Schemas zu verwenden.
const { Schema } = mongoose;

// Definiert das Schema für die 'products' Collection in der MongoDB-Datenbank.
// Das Schema beschreibt die Struktur der Dokumente in der Collection.
// Jedes Produkt hat die folgenden Felder:
// - name: Ein String, der erforderlich ist.
// - description: Ein String, der erforderlich ist.
// - price: Eine Zahl, die erforderlich ist.
// - currency: Ein String, der erforderlich ist.
const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  // Füge eine Referenz zu den Reviews hinzu (Array von ObjectIds, die auf Reviews verweisen)
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

// Überprüft, ob bereits ein Modell mit dem Namen "Product" existiert.
// Wenn nicht, erstellt es ein neues Modell mit dem Namen "Product" und dem zuvor definierten Schema.
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

// Exportiert das 'Product'-Modell, damit es in anderen Teilen der Anwendung verwendet werden kann.
export default Product;
