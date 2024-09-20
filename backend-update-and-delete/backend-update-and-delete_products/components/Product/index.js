import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  const [isEditMode, setIsEditMode] = useState(false); // Zustand für Bearbeitungsmodus

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate(); // Daten nach dem Bearbeiten aktualisieren
      setIsEditMode(false); // Bearbeitungsmodus deaktivieren
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/"); // Nach dem Löschen zurück zur Übersicht
    } else {
      console.error("Error deleting product");
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>No Product Found</h1>;
  }

  return (
    <ProductCard>
      {!isEditMode && (
        <>
          <h2>{data.name}</h2>
          <p>Description: {data.description}</p>
          <p>
            Price: {data.price} {data.currency}
          </p>
          <button onClick={() => setIsEditMode(true)}>Edit Product</button>
          <button onClick={handleDeleteProduct}>Delete Product</button>
        </>
      )}

      {/* Das Formular wird nur angezeigt, wenn isEditMode true ist */}
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          heading="Edit Product"
          product={data}
        />
      )}

      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
