import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Lord of the Rings</h1>
      <Link href="/volumes">Go to Volumes</Link>
    </div>
  );
}
