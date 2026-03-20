import { motion } from "framer-motion";
import { FileCode, ArrowRight } from "lucide-react";

const steps = [
  "Students purchase prepaid SCC tokens upfront",
  "Tokens are held in the student's wallet",
  "On redemption, smart contract verifies & burns token",
  "Merchant receives settlement automatically",
  "Platform fee is handled on-chain",
];

const SmartContractSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <FileCode className="w-7 h-7 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Smart Contract & <span className="text-gradient-neon">Settlement</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Behind the scenes, smart contracts automate the entire payment flow — from token purchase to merchant settlement.
          </p>
        </motion.div>

        <div className="space-y-3">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
            >
              <div className="w-8 h-8 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-accent" />
              </div>
              <p className="text-sm text-foreground">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SmartContractSection;
