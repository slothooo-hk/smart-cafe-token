import { motion } from "framer-motion";
import { Sun, CalendarDays, Coffee, Wallet, Lock, ArrowRight, CheckCircle } from "lucide-react";

const passes = [
  {
    icon: Sun,
    name: "Morning Pass",
    drinks: 10,
    price: 90,
    highlight: "~9 BREW per drink",
    audience: "Weekday commuters and regulars",
    cta: "Buy Morning Pass",
    popular: false,
  },
  {
    icon: CalendarDays,
    name: "Monthly Pass",
    drinks: 30,
    price: 250,
    highlight: "~8.3 BREW per drink — best value",
    audience: "Serious coffee lovers",
    cta: "Buy Monthly Pass",
    popular: true,
  },
  {
    icon: Coffee,
    name: "Weekend Pass",
    drinks: 5,
    price: 60,
    highlight: "~12 BREW per drink",
    audience: "Casual weekend visitors",
    cta: "Buy Weekend Pass",
    popular: false,
  },
];

const redemptionSteps = [
  { step: "1", text: "Buy Pass → BrewCoin locked in CoffeePassVault" },
  { step: "2", text: "Order a drink → redeemCoffeePass() releases BrewCoin into escrow" },
  { step: "3", text: "Drink confirmed → settlement sent to BrewCoffee automatically" },
];

const CoffeePassSection = () => (
  <section id="coffeepass" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          <span className="text-gradient-green">CoffeePass</span> Subscriptions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          CoffeePass is a prepaid coffee plan backed by locked BrewCoin. When you buy a CoffeePass, BrewCoin is locked in the CoffeePassVault smart contract and released automatically each time you redeem a drink. There is only one token in the ecosystem: BrewCoin.
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
                Best Value
              </span>
            )}
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-bold mb-2">{p.name}</h3>
            <p className="text-3xl font-heading font-bold text-foreground mb-1">{p.price} <span className="text-sm font-normal text-muted-foreground">BREW</span></p>
            <div className="flex justify-center gap-3 text-xs text-muted-foreground mb-2">
              <span>{p.drinks} drinks</span>
            </div>
            <p className="text-xs font-medium text-primary mb-2">{p.highlight}</p>
            <p className="text-xs text-muted-foreground mb-5 italic">{p.audience}</p>
            <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.97] ${
              p.popular
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
            }`}>
              {p.cta}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="max-w-3xl mx-auto mt-10">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/15">
          <Lock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            CoffeePass locks your BrewCoin in the CoffeePassVault smart contract. Each redemption releases BrewCoin automatically. Daily redemption limits apply. Unused passes expire after the validity period.
          </p>
        </div>
      </motion.div>

      {/* 3-step redemption flow */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="max-w-3xl mx-auto mt-6">
        <div className="flex flex-col sm:flex-row gap-3">
          {redemptionSteps.map((s, i) => (
            <div key={i} className="flex-1 flex items-start gap-2 p-3 rounded-xl bg-card border border-border">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">{s.step}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }} className="flex justify-center mt-10">
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity active:scale-[0.97]">
          <Wallet className="w-5 h-5" /> Connect BrewBank Wallet
        </button>
      </motion.div>
    </div>
  </section>
);

export default CoffeePassSection;
