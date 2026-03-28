import { motion } from "framer-motion";
import { ShieldCheck, Coffee, Car, Landmark } from "lucide-react";

const splits = [
  { icon: Coffee, label: "BrewCoffee", pct: "82%", color: "text-primary" },
  { icon: Car, label: "Brew Ride", pct: "13%", color: "text-accent" },
  { icon: Landmark, label: "BrewBank", pct: "5%", color: "text-muted-foreground" },
];

const SmartSettlementSection = () => (
  <section className="py-24 bg-secondary/40">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Transparent, Automatic <span className="text-gradient-warm">Settlement</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every BrewCoffee order is protected by smart contract escrow. Payment is only released when fulfillment is confirmed by both BrewCoffee and the Brew Ride courier through on-chain delivery proof. No manual reconciliation. No disputes over missing payments.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
        {splits.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 p-5 rounded-2xl bg-card border border-border text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mx-auto mb-3">
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <p className="text-2xl font-heading font-bold text-foreground">{s.pct}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SmartSettlementSection;
