import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";

export default function TheTwoTowers() {
  const volume = volumes.find((volume) => volume.slug === "the-two-towers");

  return (
    <>
      <button>
        {" "}
        <Link href="/volumes">← All Volumes</Link>
      </button>
      <Image
        src="/images/the-two-towers.png"
        height={230}
        width={140}
        alt="Bookcover of The Lord of the Rings 2 – The two Towers"
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
          <Link href="/volumes/the-fellowship-of-the-ring">
            ← Previous Volume
          </Link>
        </button>
        <button>
          {" "}
          <Link href="/volumes/the-return-of-the-king">Next Volume →</Link>
        </button>
      </nav>
    </>
  );
}
