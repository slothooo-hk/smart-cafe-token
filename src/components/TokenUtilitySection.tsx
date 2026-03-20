import { motion } from "framer-motion";
import { Coffee, Gift, Globe, Link, ArrowRightLeft } from "lucide-react";

const utilities = [
  { icon: Coffee, title: "Coffee & Snack Redemption", desc: "Use SCC to pay for any item on the cafe menu." },
  { icon: Gift, title: "Prepaid Coupons & Loyalty", desc: "Hold tokens as prepaid coupons and earn loyalty rewards over time." },
  { icon: Globe, title: "Campus Web3 Ecosystem", desc: "SCC is part of a broader campus token ecosystem for payments and services." },
  { icon: Link, title: "On-Chain Transactions", desc: "All token transactions are transparently recorded on the blockchain." },
  { icon: ArrowRightLeft, title: "DeFi Demo (SCC ↔ SSU)", desc: "SCC may be swapped with SSU in a demo decentralized finance scenario." },
];

const TokenUtilitySection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Token <span className="text-gradient-warm">Utility</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">What can you do with Coffee Coin (SCC)?</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {utilities.map((u, i) => (
          <motion.div
            key={u.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors"
          >
            <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
              <u.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm mb-1">{u.title}</h3>
              <p className="text-xs text-muted-foreground">{u.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TokenUtilitySection;
