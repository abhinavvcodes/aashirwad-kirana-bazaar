import hero from "@/assets/hero-banner.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-6">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={hero}
          alt="Fresh groceries"
          width={1920}
          height={768}
          className="w-full h-[260px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-12 max-w-xl">
            <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
              MONSOON SPECIALS
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Fresh kirana, <span className="text-primary">delivered daily.</span>
            </h1>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-md">
              From dals to detergents — shop 5,000+ everyday essentials at neighbourhood prices.
            </p>
            <div className="mt-5 flex gap-3">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                View Offers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}