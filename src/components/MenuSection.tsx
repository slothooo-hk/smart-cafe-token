import { motion } from "framer-motion";
import { Wallet } from "lucide-react";

const items = [
  { name: "Black Coffee", price: 10, desc: "Classic espresso-based black coffee", emoji: "☕" },
  { name: "White Coffee", price: 15, desc: "Creamy latte with steamed milk", emoji: "🥛" },
  { name: "Pastry", price: 20, desc: "Freshly baked pastry of the day", emoji: "🥐" },
  { name: "Coffee + Pastry Combo", price: 30, desc: "Your choice of coffee with a pastry", emoji: "☕🥐" },
];

const MenuSection = () => (
  <section id="menu" className="py-24 bg-secondary/40">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Featured <span className="text-gradient-warm">Menu</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Order your favorites and pay with BREW tokens from your wallet.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/25 transition-all hover:shadow-md text-center group"
          >
            <div className="text-4xl mb-4">{item.emoji}</div>
            <h3 className="font-heading font-semibold mb-1">{item.name}</h3>
            <p className="text-xs text-muted-foreground mb-3">{item.desc}</p>
            <p className="text-2xl font-heading font-bold text-accent mb-4">{item.price} <span className="text-sm font-normal text-muted-foreground">BREW</span></p>
            <button className="w-full py-2.5 rounded-xl bg-primary/10 text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors active:scale-[0.97]">
              Select
            </button>
          </motion.div>
        ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="flex justify-center mt-10">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity active:scale-[0.97]">
            <Wallet className="w-5 h-5" /> Connect BrewBank Wallet
          </button>
        </motion.div>
    </div>
  </section>
);

export default MenuSection;
