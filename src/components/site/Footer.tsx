import { Leaf, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary mt-12 border-t border-border">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="size-10 rounded-full bg-primary grid place-items-center text-primary-foreground">
              <Leaf className="size-5" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-foreground">Aashirwad</div>
              <div className="text-[10px] tracking-widest text-muted-foreground -mt-1">KIRANA</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Your neighbourhood kirana store, delivered fresh to your doorstep across India.
          </p>
          <div className="flex gap-3 mt-4 text-muted-foreground">
            <a href="#" aria-label="Facebook"><Facebook className="size-5 hover:text-primary" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="size-5 hover:text-primary" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="size-5 hover:text-primary" /></a>
          </div>
        </div>
        <FooterCol title="Customer Services" links={["Help", "Orders History", "Login"]} />
        <FooterCol title="About Us" links={["About", "Terms & Conditions", "Privacy Policy"]} />
        <FooterCol title="More Information" links={["Shipping Policy", "Refund Policy", "Contact Us"]} />
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Aashirwad Kirana. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-foreground mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}><a href="#" className="hover:text-primary">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}