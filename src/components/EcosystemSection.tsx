import { motion } from "framer-motion";
import { Landmark, Coffee, Bot } from "lucide-react";

const services = [
  {
    icon: Landmark,
    name: "BrewBank",
    desc: "Wallet, payments, staking, and smart spending controls. The financial backbone of the ecosystem.",
    highlight: false,
  },
  {
    icon: Coffee,
    name: "BrewCoffee",
    desc: "Drinks, subscriptions, merchant orders, and rewards. Your daily cafe experience — you are here.",
    highlight: true,
  },
  {
    icon: Bot,
    name: "OpenBrew",
    desc: "Approved automated ordering and delivery coordination. Let smart agents handle your routine orders.",
    highlight: false,
  },
];

const EcosystemSection = () => (
  <section id="ecosystem" className="py-24 bg-secondary/40">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Part of a Connected <span className="text-gradient-green">Ecosystem</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          BrewCoffee works seamlessly with BrewBank and OpenBrew for a complete commerce experience.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`p-6 rounded-2xl border text-center ${
              s.highlight ? "bg-primary/5 border-primary/30 shadow-sm" : "bg-card border-border"
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
              s.highlight ? "bg-primary/15" : "bg-muted"
            }`}>
              <s.icon className={`w-6 h-6 ${s.highlight ? "text-primary" : "text-muted-foreground"}`} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{s.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemSection;
