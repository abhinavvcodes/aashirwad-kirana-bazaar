import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { CategoryPills } from "@/components/site/CategoryPills";
import { Hero } from "@/components/site/Hero";
import { QuickCategories } from "@/components/site/QuickCategories";
import { ProductSection } from "@/components/site/ProductSection";
import { Footer } from "@/components/site/Footer";
import { bestSellers, millets, morningEssentials, stealDeals } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aashirwad Kirana — Online Grocery & Daily Essentials" },
      { name: "description", content: "Shop groceries, dals, rice, spices, snacks & household essentials online at Aashirwad Kirana. Free delivery on orders above ₹499." },
      { property: "og:title", content: "Aashirwad Kirana — Online Grocery Store" },
      { property: "og:description", content: "Fresh kirana delivered daily. 5,000+ everyday essentials at neighbourhood prices." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryPills />
      <Hero />
      <QuickCategories />
      <ProductSection title="Morning Essentials ☕" subtitle="Start your day right" products={morningEssentials} carousel />
      <ProductSection title="Steal Deals – Under ₹99" subtitle="Limited-time prices on daily favourites" products={stealDeals} />
      <ProductSection title="Our Best Sellers" subtitle="What everyone's buying this week" products={bestSellers} />
      <ProductSection title="Healthy Millets" subtitle="Wholesome grains for a better tomorrow" products={millets} />
      <Footer />
    </div>
  );
}
