const items = [
  { label: "Dry Fruits", emoji: "🥜" },
  { label: "Rice", emoji: "🍚" },
  { label: "Flours", emoji: "🌾" },
  { label: "Dals & Pulses", emoji: "🫘" },
  { label: "Edible Oils", emoji: "🫙" },
  { label: "Spices & Masalas", emoji: "🌶️" },
  { label: "Cleaning Needs", emoji: "🧴" },
  { label: "Coffee & Tea", emoji: "☕" },
];

export function QuickCategories() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {items.map((it) => (
          <a
            key={it.label}
            href="#"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="size-16 md:size-20 rounded-full bg-secondary grid place-items-center text-3xl md:text-4xl group-hover:bg-primary/10 group-hover:scale-105 transition-all border border-border">
              {it.emoji}
            </div>
            <span className="text-xs md:text-sm text-center text-foreground group-hover:text-primary">
              {it.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}