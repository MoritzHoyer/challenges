import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";
// Importiere den useSWR Hook, um Daten zu validieren und zu mutieren (d.h. neu zu laden, wenn sich die Daten ändern).
import useSWR from "swr";

// Definiere die ProductForm-Komponente, die das Formular zur Eingabe eines neuen Produkts enthält.
export default function ProductForm() {
  // Verwende den SWR-Hook, um die mutate-Methode zu erhalten. Diese Methode wird verwendet, um die Produktliste nach dem Hinzufügen eines neuen Produkts neu zu laden.
  const { mutate } = useSWR("/api/products");

  // Definiere die handleSubmit-Funktion, die aufgerufen wird, wenn das Formular abgesendet wird.
  async function handleSubmit(event) {
    // Verhindere, dass die Seite neu geladen wird, wenn das Formular abgesendet wird.
    event.preventDefault();

    // Extrahiere die Formulardaten aus dem Event-Objekt, das durch das Absenden des Formulars erzeugt wurde.
    const formData = new FormData(event.target);
    // Konvertiere die Formulardaten in ein JavaScript-Objekt, sodass sie als JSON gesendet werden können.
    const productData = Object.fromEntries(formData);

    // Sende eine HTTP-POST-Anfrage an die API, um das neue Produkt hinzuzufügen.
    const response = await fetch("/api/products", {
      // Verwende die POST-Methode, um ein neues Produkt hinzuzufügen.
      method: "POST",
      // Setze die HTTP-Header auf JSON, damit der Server weiß, dass JSON-Daten gesendet werden.
      headers: { "Content-Type": "application/json" },
      // Konvertiere das JavaScript-Objekt (productData) in einen JSON-String, um es an die API zu senden.
      body: JSON.stringify(productData),
    });

    // Überprüfe, ob die Antwort erfolgreich war.
    if (response.ok) {
      // Wenn die POST-Anfrage erfolgreich war, rufe mutate auf, um die Produktliste neu zu laden und die neue Produktanzeige sofort anzuzeigen.
      mutate();
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a new Fish</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
