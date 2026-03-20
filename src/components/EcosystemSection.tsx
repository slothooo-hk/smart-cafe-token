import { motion } from "framer-motion";
import { Wallet, ArrowRightLeft, CalendarDays, Coffee } from "lucide-react";

const services = [
  { icon: Wallet, name: "CampusPay / Campus Wallet", desc: "Unified Web3 wallet for all campus payments." },
  { icon: ArrowRightLeft, name: "SSU Swap / DeFi Demo", desc: "Swap SCC ↔ SSU in a demo decentralized exchange." },
  { icon: CalendarDays, name: "Campus Events & Booking", desc: "Use tokens for event tickets and room bookings." },
  { icon: Coffee, name: "Campus Cafe Coupon", desc: "You are here! Prepaid cafe tokens." },
];

const EcosystemSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Part of the <span className="text-gradient-neon">Campus Ecosystem</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Campus Cafe Coupon connects seamlessly with other campus Web3 services.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`flex gap-4 p-5 rounded-xl border ${
              s.name.includes("Cafe") ? "bg-primary/5 border-primary/30" : "bg-card border-border"
            }`}
          >
            <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
              <s.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm mb-1">{s.name}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemSection;
