import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";

export default function TheFellowshipOfTheRing() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <button>
        {" "}
        <Link href="/volumes">← All Volumes</Link>
      </button>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={230}
        width={140}
        alt="Bookcover of The Lord of the Rings 1 – The Fellowship of the Ring"
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
          <Link href="/volumes/the-two-towers">Next Volume →</Link>
        </button>
      </nav>
    </>
  );
}
