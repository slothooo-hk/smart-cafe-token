import { motion } from "framer-motion";
import { Sparkles, Coffee, Cake } from "lucide-react";

const plans = [
  {
    scc: 50,
    ssu: 50,
    bonus: null,
    icon: Sparkles,
    popular: false,
  },
  {
    scc: 100,
    ssu: 95,
    bonus: "1 Free Black Coffee (redeem within 1 month)",
    icon: Coffee,
    popular: true,
  },
  {
    scc: 200,
    ssu: 180,
    bonus: "1 Free Cake Slice (redeem within 1 month)",
    icon: Cake,
    popular: false,
  },
];

const BuySCCSection = () => (
  <section id="buy-scc" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Buy <span className="text-gradient-neon">SCC Coupons</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Choose a coupon bundle and start sipping. Pay with SSU tokens.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.scc}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-6 rounded-xl border text-center ${
              p.popular ? "bg-card border-primary glow-warm" : "bg-card border-border"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                Most Popular
              </span>
            )}
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <p.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-1">{p.scc} SCC</h3>
            <p className="text-muted-foreground text-sm mb-4">for {p.ssu} SSU</p>
            {p.bonus && (
              <p className="text-xs text-accent font-medium bg-accent/10 rounded-lg px-3 py-2 mb-4">
                🎁 {p.bonus}
              </p>
            )}
            <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BuySCCSection;
