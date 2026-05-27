import { ProductCard, type Product } from "./ProductCard";

export function ProductSection({
  title,
  subtitle,
  products,
  carousel = false,
}: {
  title: string;
  subtitle?: string;
  products: Product[];
  carousel?: boolean;
}) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        <a href="#" className="text-sm font-medium text-primary hover:underline">View all →</a>
      </div>
      {carousel ? (
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 snap-x">
          {products.map((p) => (
            <div key={p.id} className="shrink-0 w-44 md:w-56 snap-start">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}