import { motion } from "framer-motion";
import { Wallet, ShoppingCart, Download, Coffee } from "lucide-react";

const steps = [
  { icon: Wallet, label: "Connect Wallet", desc: "Link your campus crypto wallet to the platform." },
  { icon: ShoppingCart, label: "Buy Coffee Coin (SCC)", desc: "Purchase SCC tokens or prepaid coupon bundles." },
  { icon: Download, label: "Receive Token", desc: "SCC tokens appear instantly in your wallet." },
  { icon: Coffee, label: "Redeem at Cafe", desc: "Use tokens for coffee, tea, cake, or combo sets." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          How It <span className="text-gradient-neon">Works</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Four simple steps to your next coffee.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-6 rounded-xl bg-card border border-border text-center"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
              {i + 1}
            </div>
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading font-semibold mb-2">{s.label}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
