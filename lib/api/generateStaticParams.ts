import { Product } from "@/lib/types";

export async function generateStaticParams() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return products.map((product: Product) => ({
    id: String(product.id),
  }));
}
