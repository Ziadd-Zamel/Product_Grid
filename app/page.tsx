import { ProductGrid } from '@/components/product-grid';
import { SearchBar } from '@/components/search-bar';
import { ShoppingBag } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Products Gallery</h1>
          </div>
          <SearchBar />
        </div>
      </header>
      <div className="container mx-auto px-4 py-8">
        <ProductGrid />
      </div>
    </main>
  );
}