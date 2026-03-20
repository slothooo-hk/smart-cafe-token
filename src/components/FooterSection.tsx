import { Coffee } from "lucide-react";

const links = [
  { label: "Whitepaper", href: "#" },
  { label: "Token Info", href: "#" },
  { label: "Wallet Support", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Terms", href: "#" },
];

const FooterSection = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-heading font-bold text-foreground">
          <Coffee className="w-5 h-5 text-primary" />
          Campus Cafe Coupon
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
        © 2026 Campus Cafe Coupon — A Web3 Proof-of-Concept for Campus Smart Finance
      </p>
    </div>
  </footer>
);

export default FooterSection;
