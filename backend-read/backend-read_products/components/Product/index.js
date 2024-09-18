import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>

      {/* Prüfen, ob das Produkt Bewertungen hat, und diese anzeigen */}
      {data.reviews?.length > 0 && (
        <div>
          <h3>Reviews:</h3>
          <ul>
            {data.reviews.map((review) => (
              <li key={review._id}>
                <h4>{review.title}</h4>
                <p>{review.text}</p>
                <p>Rating: {review.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Link zurück zu allen Produkten */}

      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
