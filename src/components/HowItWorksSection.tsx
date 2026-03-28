import { motion } from "framer-motion";
import { Coins, CreditCard, ShoppingCart, Truck, SplitSquareHorizontal, Undo2 } from "lucide-react";

const steps = [
  { icon: Coins, label: "Get BrewCoin", desc: "Top up using FPS, credit/debit card, bank transfer, or stablecoin. BrewBank converts your payment into BREW instantly." },
  { icon: CreditCard, label: "Choose How to Pay", desc: "Pay directly with BrewCoin from your wallet, or buy a CoffeePass to lock in prepaid drink credits." },
  { icon: ShoppingCart, label: "Place Your Order", desc: "Order manually in the app, or let OpenClaw place routine orders for you within your approved daily budget and constraints." },
  { icon: Truck, label: "Fulfillment & Proof", desc: "BrewCoffee prepares your drink. If you chose delivery, Brew Ride picks up and delivers. The POS and courier app submit a fulfillment proof on-chain." },
  { icon: SplitSquareHorizontal, label: "Automatic Settlement", desc: "Once confirmed, BrewCoin is split automatically: 82% to BrewCoffee, 13% to Brew Ride courier, 5% to BrewBank as platform fee." },
  { icon: Undo2, label: "If Undelivered", desc: "If the order fails or is cancelled, BrewCoin is automatically refunded to your wallet, CoffeePassVault, or AgentVault." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 bg-secondary/40">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          How It <span className="text-gradient-green">Works</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">The complete BrewCoffee ordering lifecycle — from funding to settlement.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-5 rounded-2xl bg-card border border-border text-center"
          >
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-sm font-bold">
              {i + 1}
            </div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-sm mb-1">{s.label}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
