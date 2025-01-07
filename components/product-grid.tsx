"use client";
import { ProductCard } from "./product-card";
import { useSearchParams } from "next/navigation";
import { Skeleton } from "./ui/skeleton";
import { useProductsQuery } from "@/lib/react-query/queries";

export function ProductGrid() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase();
  const { data: products, isLoading } = useProductsQuery();

  const filteredProducts = products?.filter((product) =>
    search
      ? product.title.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
      : true
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-[200px] w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
