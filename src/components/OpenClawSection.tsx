import { motion } from "framer-motion";
import { Bot, DollarSign, Store, Clock, Truck, ShieldCheck } from "lucide-react";

const rules = [
  { icon: DollarSign, text: "Daily spend cap (in BREW)" },
  { icon: Store, text: "Approved merchant list (e.g., BrewCoffee only)" },
  { icon: Clock, text: "Allowed time windows (e.g., 7:30am–9:30am on weekdays)" },
  { icon: Truck, text: "Maximum delivery fee per order" },
];

const OpenClawSection = () => (
  <section id="openclaw" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Meet <span className="text-gradient-green">OpenClaw</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          OpenClaw is the agentic AI ordering layer of the BrewBank ecosystem. Deposit BrewCoin into your AgentVault and set your rules — OpenClaw handles the rest.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-2xl bg-card border border-border"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg">Your Rules, Your Agent</h3>
              <p className="text-xs text-muted-foreground">OpenClaw never touches funds outside your AgentVault allowance.</p>
            </div>
          </div>

          <div className="space-y-3 mb-5">
            {rules.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
              >
                <r.icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{r.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5 border border-primary/15">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              OpenClaw places orders only when all your constraints are satisfied. If any rule is breached, the order is blocked automatically.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default OpenClawSection;
