import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      {/* Use Link tag not to rerender repetetive stuff (Client side Navigation) */}
      {/* using anchor tage <a></a> will render everything again */}
      {/* <Link href="/user">Users</Link> */}
      <Suspense fallback="loading.....">
        <ProductCard/>
      </Suspense>

    </main>
  );
}
