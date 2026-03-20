import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What is Coffee Coin (SCC)?", a: "SCC is a digital token representing prepaid cafe credit. You buy SCC with SSU tokens and use them to redeem coffee, tea, cake, and combos at Campus Cafe." },
  { q: "How do I buy a cafe coupon?", a: "Connect your campus wallet, choose a coupon bundle (50, 100, or 200 SCC), and pay with SSU tokens. Your SCC will appear in your wallet instantly." },
  { q: "Can I redeem tokens later?", a: "Yes! SCC tokens stay in your wallet until you're ready to redeem. Some bonus items may have a one-month expiry window." },
  { q: "Is this a real cryptocurrency?", a: "This is a proof-of-concept Web3 demo for a university campus ecosystem. SCC operates within the campus platform and is not traded on public exchanges." },
  { q: "What is SSU?", a: "SSU is the campus utility token used across the Web3 ecosystem. You use SSU to buy SCC and access other campus services." },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Frequently Asked <span className="text-gradient-warm">Questions</span>
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
              <AccordionTrigger className="text-sm font-heading font-semibold hover:no-underline text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
