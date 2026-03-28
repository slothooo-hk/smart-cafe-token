import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpFromLine, CreditCard, Building, Coins, Wallet } from "lucide-react";

const OnOffRampSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Fund & <span className="text-gradient-green">Cash Out</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Simple on-ramp and off-ramp to move between everyday money and BrewCoin.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {/* On-Ramp */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-2xl bg-card border border-border"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <ArrowDownToLine className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-heading font-bold text-lg mb-2">Fund Your Wallet</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Pay using FPS, credit/debit card, bank transfer, or stablecoin. BrewBank converts your payment into BREW instantly via onRampToBrewCoin.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { icon: CreditCard, label: "Card" },
              { icon: Building, label: "Bank / FPS" },
              { icon: Coins, label: "Stablecoin" },
            ].map((m) => (
              <span key={m.label} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted text-xs text-muted-foreground">
                <m.icon className="w-3.5 h-3.5" /> {m.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Off-Ramp */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-2xl bg-card border border-border"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
            <ArrowUpFromLine className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-heading font-bold text-lg mb-2">Cash Out Anytime</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Convert BREW back to USD via BrewBank's offRampFromBrewCoin. Subject to BrewBank terms and applicable regulations.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted text-xs text-muted-foreground">
              <Wallet className="w-3.5 h-3.5" /> Wallet → Cash
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default OnOffRampSection;
