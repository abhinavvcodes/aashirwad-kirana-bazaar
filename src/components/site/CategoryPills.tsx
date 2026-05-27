const cats = [
  "Grocery & Gourmet",
  "Coffee Tea & Beverages",
  "Beauty",
  "Chocolates Sweets & Snacks",
  "Health & Personal Care",
  "Household Care",
  "Baking & Culinary",
  "Ready to Cook & Eat",
];

export function CategoryPills() {
  return (
    <div className="border-b border-border bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
          {cats.map((c, i) => (
            <a
              key={c}
              href="#"
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                i === 0
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}