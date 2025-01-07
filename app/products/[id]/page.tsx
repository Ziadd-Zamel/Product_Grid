import { Product } from "@/lib/types";
import ProductDetails from "@/components/Product-details";

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetails params={params} />;
}
export async function generateStaticParams() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return products.map((product: Product) => ({
    id: String(product.id),
  }));
}
