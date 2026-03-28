import { motion } from "framer-motion";
import { Store, Wallet, CreditCard, Car } from "lucide-react";

const points = [
  { icon: Store, title: "Web3 Cafe Storefront", desc: "Browse drinks, order food, and manage your cafe experience — all digitally." },
  { icon: CreditCard, title: "Buy Subscriptions", desc: "Purchase CoffeePass plans for regular drinks backed by locked BrewCoin." },
  { icon: Wallet, title: "BrewBank Wallet", desc: "Pay seamlessly with BrewCoin (BewDCoin) from your BrewBank wallet — no cash, no friction." },
  { icon: Car, title: "Brew Ride Delivery", desc: "Brew Ride couriers deliver to your door with on-chain proof — like Uber for coffee." },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          About <span className="text-gradient-green">BrewCafe</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base">
          BrewCafe is a Web3 cafe storefront where you can browse drinks, subscribe to coffee passes, and redeem benefits digitally — all powered by BrewCoin and the BrewBank ecosystem.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <p.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold mb-1.5">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
