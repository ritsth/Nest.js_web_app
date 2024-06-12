import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      {/* Use Link tag not to rerender repetetive stuff (Client side Navigation) */}
      {/* using anchor tage <a></a> will render everything again */}
      <Link href="/user">Users</Link>
      <ProductCard/>
    </main>
  );
}
