import { motion } from "framer-motion";
import { Zap, Briefcase, CalendarDays, Wallet } from "lucide-react";

const passes = [
  {
    icon: Zap,
    name: "Weekly CoffeePass",
    drinks: 7,
    days: 7,
    price: 70,
    audience: "Casual drinkers & weekend regulars",
    popular: false,
  },
  {
    icon: Briefcase,
    name: "Workday Morning Pass",
    drinks: 20,
    days: 20,
    price: 190,
    audience: "Office workers & daily commuters",
    popular: true,
  },
  {
    icon: CalendarDays,
    name: "Monthly Brew Pass",
    drinks: 30,
    days: 30,
    price: 270,
    audience: "Power users & subscription lovers",
    popular: false,
  },
];

const CoffeePassSection = () => (
  <section id="coffeepass" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          <span className="text-gradient-green">CoffeePass</span> Subscriptions
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Tokenized prepaid coffee memberships — subscribe once, enjoy drinks every day. Supports rewards, loyalty, and easier repeat purchases.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {passes.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`relative p-6 rounded-2xl border text-center ${
              p.popular ? "bg-primary/5 border-primary/30 shadow-sm" : "bg-card border-border"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                Most Popular
              </span>
            )}
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-bold mb-2">{p.name}</h3>
            <p className="text-3xl font-heading font-bold text-foreground mb-1">{p.price} <span className="text-sm font-normal text-muted-foreground">SCC</span></p>
            <div className="flex justify-center gap-3 text-xs text-muted-foreground mb-3">
              <span>{p.drinks} drinks</span>
              <span>•</span>
              <span>{p.days} days</span>
            </div>
            <p className="text-xs text-muted-foreground mb-5 italic">{p.audience}</p>
            <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.97] ${
              p.popular
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
            }`}>
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoffeePassSection;
