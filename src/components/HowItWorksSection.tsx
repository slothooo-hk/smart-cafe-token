import { motion } from "framer-motion";
import { Wallet, Coffee, CheckCircle, MapPin, Star } from "lucide-react";

const steps = [
  { icon: Wallet, label: "Connect Wallet", desc: "Link your BrewBank wallet to get started." },
  { icon: Coffee, label: "Choose Drink or CoffeePass", desc: "Pick from the menu or subscribe to a plan." },
  { icon: CheckCircle, label: "Confirm Order", desc: "Review and confirm your order or subscription." },
  { icon: MapPin, label: "Pick Up or Deliver", desc: "Collect in store or choose delivery." },
  { icon: Star, label: "Earn Rewards", desc: "Build loyalty points and manage future orders." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 bg-secondary/40">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          How It <span className="text-gradient-green">Works</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Five simple steps to your smarter coffee experience.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative p-5 rounded-2xl bg-card border border-border text-center"
          >
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-sm font-bold">
              {i + 1}
            </div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-sm mb-1">{s.label}</h3>
            <p className="text-xs text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
