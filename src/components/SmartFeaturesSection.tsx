import { motion } from "framer-motion";
import { Wallet, Ticket, Zap, MapPin, Bot } from "lucide-react";

const features = [
  { icon: Wallet, title: "Wallet-Connected Checkout", desc: "Pay directly from your BrewBank wallet — fast, secure, and cashless." },
  { icon: Ticket, title: "Tokenized Subscriptions", desc: "CoffeePass plans are digital prepaid memberships on-chain." },
  { icon: Zap, title: "Fast Merchant Settlement", desc: "Smart contracts handle merchant payments automatically." },
  { icon: MapPin, title: "Pickup & Delivery", desc: "Choose in-store pickup or delivery — flexibility built in." },
  { icon: Bot, title: "Future Agent Ordering", desc: "OpenBrew agents can automate routine orders with your approval." },
];

const SmartFeaturesSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Why BrewCoffee Is <span className="text-gradient-warm">Smarter</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Smart coffee starts here. Flexible drinks, digital rewards, and seamless checkout.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/25 transition-colors"
          >
            <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SmartFeaturesSection;
