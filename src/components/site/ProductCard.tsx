import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Product = {
  id: string;
  name: string;
  emoji: string;
  bg: string;
  price: number;
  mrp?: number;
  rating?: number;
  outOfStock?: boolean;
};

export function ProductCard({ product }: { product: Product }) {
  const discount = product.mrp ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;
  return (
    <div className="group border border-border rounded-lg bg-card overflow-hidden hover:shadow-md hover:border-primary/40 transition-all flex flex-col">
      <div className={`relative aspect-square grid place-items-center text-6xl ${product.bg}`}>
        <span className="group-hover:scale-110 transition-transform">{product.emoji}</span>
        {discount > 0 && !product.outOfStock && (
          <span className="absolute top-2 left-2 bg-sale text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
        {product.outOfStock && (
          <span className="absolute inset-0 bg-background/70 grid place-items-center">
            <span className="bg-foreground text-background text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
              Out of Stock
            </span>
          </span>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2 flex-1">
        <h3 className="text-sm font-medium text-foreground line-clamp-2 min-h-10">{product.name}</h3>
        {product.rating && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="size-3 fill-accent text-accent" />
            <span>{product.rating}</span>
          </div>
        )}
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="font-bold text-foreground">₹{product.price}</span>
          {product.mrp && (
            <span className="text-xs text-muted-foreground line-through">₹{product.mrp}</span>
          )}
        </div>
        {product.outOfStock ? (
          <Button disabled variant="secondary" size="sm" className="w-full">
            Out of Stock
          </Button>
        ) : (
          <Button size="sm" className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
            <ShoppingCart className="size-4" /> Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}