import mongoose from "mongoose";

// Destrukturiert das Schema-Objekt aus dem Mongoose-Modul, um es später für die Erstellung eines Schemas zu verwenden.
const { Schema } = mongoose;

// Definiert das Schema für die 'reviews' Collection in der MongoDB-Datenbank.
// Das Schema beschreibt die Struktur der Dokumente in der Collection.
// Jede Review hat die folgenden Felder:
// - title: Ein String, der erforderlich ist.
// - text: Ein String, der erforderlich ist.
// - rating: Eine Zahl, die erforderlich ist.
const reviewSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
});

// Überprüft, ob bereits ein Modell mit dem Namen "Review" existiert.
// Wenn nicht, erstellt es ein neues Modell mit dem Namen "Review" und dem zuvor definierten Schema.
const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

// Exportiert das 'Review'-Modell, damit es in anderen Teilen der Anwendung verwendet werden kann.
export default Review;
