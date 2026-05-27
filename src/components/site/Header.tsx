import { useState } from "react";
import { Search, ShoppingCart, User, Menu, ChevronDown, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  "Grocery & Gourmet",
  "Coffee Tea & Beverages",
  "Beauty",
  "Chocolates Sweets & Snacks",
  "Health & Personal Care",
  "Household Care",
  "Baking & Culinary",
  "Ready to Cook & Eat",
];

export function Header({ cartCount = 3 }: { cartCount?: number }) {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto px-4 py-1.5 flex justify-between">
          <span>Free delivery on orders above ₹499</span>
          <span className="hidden sm:inline">Call us: +91 98765 43210</span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="size-10 rounded-full bg-primary grid place-items-center text-primary-foreground">
            <Leaf className="size-5" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-lg text-foreground">Aashirwad</div>
            <div className="text-[10px] tracking-widest text-muted-foreground -mt-1">KIRANA</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-4">
          <a href="/" className="hover:text-primary">Home</a>
          <div
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary">
              Categories <ChevronDown className="size-4" />
            </button>
            {dropdown && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="bg-popover border border-border rounded-md shadow-lg py-2">
                  {categories.map((c) => (
                    <a key={c} href="#" className="block px-4 py-2 text-sm hover:bg-secondary">
                      {c}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-primary">Shop</a>
          <a href="#" className="hover:text-primary">Offers</a>
        </nav>

        <div className="flex-1 max-w-xl hidden sm:flex relative">
          <Input placeholder="Search for rice, dal, oil…" className="pl-10 h-10 rounded-full bg-secondary border-transparent" />
          <Search className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <User className="size-4" /> <span className="ml-1">Sign In</span>
          </Button>
          <button className="relative p-2" aria-label="Cart">
            <ShoppingCart className="size-6" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-sale text-white text-[10px] font-bold rounded-full size-5 grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="sm:hidden px-4 pb-3 relative">
        <Input placeholder="Search products…" className="pl-10 h-10 rounded-full bg-secondary border-transparent" />
        <Search className="size-4 absolute left-7 top-1/2 -translate-y-1/2 text-muted-foreground" />
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1 text-sm">
            <a href="/" className="py-2">Home</a>
            <div className="py-2 font-semibold text-muted-foreground text-xs uppercase">Categories</div>
            {categories.map((c) => (
              <a key={c} href="#" className="py-2 pl-2">{c}</a>
            ))}
            <a href="#" className="py-2 border-t border-border mt-2">Sign In / Register</a>
          </nav>
        </div>
      )}
    </header>
  );
}