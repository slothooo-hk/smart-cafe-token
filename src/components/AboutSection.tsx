import { motion } from "framer-motion";
import { Shield, Coins, Smartphone } from "lucide-react";

const features = [
  { icon: Coins, title: "Tokenized Coupons", desc: "Prepaid cafe coupons are minted as digital tokens on the blockchain." },
  { icon: Smartphone, title: "Wallet-Based", desc: "Store tokens in your campus wallet and redeem anytime at the cafe." },
  { icon: Shield, title: "Transparent & Secure", desc: "Every transaction is recorded on-chain for full transparency." },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          What is <span className="text-gradient-warm">Campus Cafe Coupon</span>?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A Web3 campus cafe platform where prepaid coupons are tokenized as digital assets. Students buy tokens in advance, hold them in wallets, and redeem them later for coffee, tea, cake, and more at the cafe.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-warm transition-shadow">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
