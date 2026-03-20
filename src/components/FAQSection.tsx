import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What is BrewCoffee?", a: "BrewCoffee is a Web3 cafe storefront where you can browse drinks, buy subscriptions, and pay digitally with your BrewBank wallet. It's part of a connected ecosystem designed for convenient, modern cafe experiences." },
  { q: "Do I need a crypto wallet to use this demo?", a: "For the full experience, you'd connect a BrewBank wallet. This is a proof-of-concept demo for a university Web3 smart banking project, so no real crypto is required." },
  { q: "What is CoffeePass?", a: "CoffeePass is a tokenized prepaid coffee membership. You pay upfront for a set number of drinks over a period (weekly, workday, or monthly) and redeem them at any BrewCoffee location." },
  { q: "How does BrewCoffee connect with BrewBank?", a: "BrewBank provides the wallet and payment infrastructure. When you order on BrewCoffee, payment is processed through your BrewBank wallet with smart contract settlement." },
  { q: "What is OpenBrew?", a: "OpenBrew is a future automation layer. With your approval, OpenBrew agents can place routine orders, coordinate delivery, and manage your coffee schedule — all within rules you set." },
  { q: "Can I choose pickup or delivery?", a: "Yes! BrewCoffee supports both in-store pickup and delivery options. Choose what's most convenient when you place your order." },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-secondary/40">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 16, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Frequently Asked <span className="text-gradient-warm">Questions</span>
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-2xl px-5">
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
