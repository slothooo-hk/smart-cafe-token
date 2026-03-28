import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What is BrewCoin (BewDCoin)?", a: "BrewCoin is the single settlement token of the BrewBank ecosystem. Used for all coffee payments, delivery fees, platform fees, staking, and rewards. Obtain BrewCoin by topping up with FPS, card, bank transfer, or stablecoin." },
  { q: "Is CoffeePass a separate token?", a: "No. CoffeePass is a prepaid coffee plan backed by locked BrewCoin. When you buy a CoffeePass, BrewCoin is locked in CoffeePassVault and released automatically on each redemption. One token only: BrewCoin." },
  { q: "How are CoffeePass prices set?", a: "Fixed by the CoffeePassVault contract: Morning Pass (90 BREW / 10 drinks), Monthly Pass (250 BREW / 30 drinks), Weekend Pass (60 BREW / 5 drinks)." },
  { q: "Are there daily redemption limits on CoffeePass?", a: "Yes. The CoffeePassVault contract enforces daily redemption limits per pass to ensure fair use across the validity period." },
  { q: "What is Brew Ride?", a: "Brew Ride is the delivery and courier network in the BrewBank ecosystem. Couriers receive 13% of each order value in BrewCoin after confirmed delivery." },
  { q: "What is OpenClaw?", a: "OpenClaw is an agentic AI that places coffee orders on your behalf. You set daily spend limits, approved merchants, and time windows on-chain. OpenClaw operates strictly within those rules and cannot access funds beyond your AgentVault allowance." },
  { q: "What happens if my order is not delivered?", a: "Payment is held in OrderEscrow. If delivery proof is not confirmed, BrewCoin is automatically refunded to your wallet, CoffeePassVault, or AgentVault depending on your payment method." },
  { q: "Can I cash out my BrewCoin?", a: "Yes. BrewBank supports BREW → USD conversion via offRampFromBrewCoin, subject to BrewBank terms and applicable regulations." },
  { q: "Do I need crypto experience to use BrewCoffee?", a: "No. You can fund your wallet using everyday payment methods like FPS or card. BrewBank handles the conversion to BrewCoin automatically." },
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
