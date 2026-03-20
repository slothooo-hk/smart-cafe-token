import { Coffee } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "CoffeePass", href: "#coffeepass" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#" },
];

const FooterSection = () => (
  <footer className="py-12 border-t border-border bg-card">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-heading font-bold text-foreground">
          <Coffee className="w-5 h-5 text-primary" />
          BrewCoffee
        </div>

        <div className="flex flex-wrap items-center gap-4 justify-center">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8">
        © 2026 BrewCoffee — Part of the BrewBank Ecosystem · Designed for repeat orders, subscriptions, and future agent-assisted convenience.
      </p>
    </div>
  </footer>
);

export default FooterSection;
