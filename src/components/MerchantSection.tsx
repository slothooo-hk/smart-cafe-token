import { motion } from "framer-motion";
import { Users, CreditCard, BarChart3, Truck } from "lucide-react";

const benefits = [
  { icon: Users, title: "Repeat Customer Engagement", desc: "CoffeePass drives daily visits and builds lasting loyalty with BrewCoin rewards." },
  { icon: CreditCard, title: "Prepaid Subscription Revenue", desc: "Receive upfront working capital from tokenized coffee plans backed by locked BrewCoin." },
  { icon: BarChart3, title: "Easier Settlement", desc: "Smart contracts handle payments automatically — 82% of each order settled instantly." },
  { icon: Truck, title: "Delivery & Automation Ready", desc: "Integrate with Brew Ride for delivery and OpenClaw for automated ordering and fulfillment." },
];

const MerchantSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          BrewCafe for <span className="text-gradient-warm">Merchants</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A modern merchant model — prepaid revenue, automated settlement, and digital customer relationships.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-accent/25 transition-colors"
          >
            <div className="w-10 h-10 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center">
              <b.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm mb-1">{b.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MerchantSection;
