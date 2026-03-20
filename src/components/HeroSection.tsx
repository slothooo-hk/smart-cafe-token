import { motion } from "framer-motion";
import { ArrowRight, Ticket } from "lucide-react";
import heroImg from "@/assets/hero-brew.png";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16 bg-secondary/40">
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
    <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />

    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6 border border-primary/15">
          ☕ Part of the BrewBank Ecosystem
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.1] mb-5 text-foreground" style={{ textWrap: "balance" }}>
          BrewCoffee
        </h1>
        <p className="text-xl sm:text-2xl font-heading font-medium text-muted-foreground mb-4" style={{ textWrap: "balance" }}>
          A smarter Web3 cafe experience for daily drinks, subscriptions, and seamless ordering.
        </p>
        <p className="text-base text-muted-foreground max-w-lg mb-8">
          Buy coffee passes, pay with your wallet, and connect to the BrewBank ecosystem for a more flexible cafe experience.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#menu" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity active:scale-[0.97]">
            View Menu <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#coffeepass" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors active:scale-[0.97]">
            <Ticket className="w-4 h-4" /> Explore CoffeePass
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center"
      >
        <img src={heroImg} alt="BrewCoffee" className="w-72 lg:w-[380px] animate-float drop-shadow-lg" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
