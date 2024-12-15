import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";

export default function TheReturnOfTheKing() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
  );

  return (
    <>
      <button>
        {" "}
        <Link href="/volumes">← All Volumes</Link>
      </button>
      <Image
        src="/images/the-return-of-the-king.png"
        height={230}
        width={140}
        alt="Bookcover of The Lord of the Rings 3 – The Return of the King"
      />
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <h2>Books in this volume</h2>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal}. {book.title}
          </li>
        ))}
      </ul>
      <nav>
        <button>
          {" "}
          <Link href="/volumes/the-two-towers">← Previous Volume</Link>
        </button>
      </nav>
    </>
  );
}
