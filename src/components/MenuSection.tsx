import { motion } from "framer-motion";
import { Coffee, CupSoda, Cake, UtensilsCrossed } from "lucide-react";

const items = [
  { icon: Coffee, name: "Black Coffee", price: 10, emoji: "☕" },
  { icon: CupSoda, name: "White Coffee", price: 15, emoji: "🥛" },
  { icon: Cake, name: "Cake Slice", price: 20, emoji: "🍰" },
  { icon: UtensilsCrossed, name: "Coffee + Cake Combo", price: 30, emoji: "☕🍰" },
];

const MenuSection = () => (
  <section id="menu" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Cafe <span className="text-gradient-warm">Menu</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Redeem your SCC tokens for these delicious items.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center group"
          >
            <div className="text-4xl mb-4">{item.emoji}</div>
            <h3 className="font-heading font-semibold mb-1">{item.name}</h3>
            <p className="text-2xl font-heading font-bold text-primary mb-4">{item.price} <span className="text-sm text-muted-foreground">SCC</span></p>
            <button className="w-full py-2.5 rounded-lg border border-accent text-accent font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
              Use SCC →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuSection;
