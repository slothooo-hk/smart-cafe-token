import { motion } from "framer-motion";
import { User, Store, Globe } from "lucide-react";

const groups = [
  {
    icon: User,
    title: "For Students",
    items: ["Easy token redemption", "Loyalty rewards on purchases", "Transparent usage history on-chain"],
  },
  {
    icon: Store,
    title: "For Cafe Merchants",
    items: ["Upfront working capital from token sales", "Built-in customer loyalty", "Digital promotion & analytics"],
  },
  {
    icon: Globe,
    title: "For the Campus Ecosystem",
    items: ["Supports Web3 payment infrastructure", "Tokenized campus services", "Real-world DeFi demonstration"],
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Everyone <span className="text-gradient-warm">Benefits</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <g.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-4">{g.title}</h3>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
