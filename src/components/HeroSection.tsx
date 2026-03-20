import { motion } from "framer-motion";
import { Wallet, ShoppingCart, UtensilsCrossed } from "lucide-react";
import heroImg from "@/assets/hero-coffee.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-16">
    {/* Ambient glow */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent mb-6 border border-accent/20">
          ☕ Web3 Campus Cafe — Proof of Concept
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
          Buy Coffee Smarter{" "}
          <span className="text-gradient-neon">with Web3</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mb-8">
          Campus Cafe Coupon turns prepaid drinks and snacks into redeemable digital tokens. Buy, hold, and redeem — all from your wallet.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#buy-scc" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-warm">
            <Wallet className="w-4 h-4" /> Connect Wallet
          </a>
          <a href="#buy-scc" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity glow-neon">
            <ShoppingCart className="w-4 h-4" /> Buy SCC
          </a>
          <a href="#menu" className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
            <UtensilsCrossed className="w-4 h-4" /> View Menu
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <img src={heroImg} alt="Web3 Coffee" className="w-80 lg:w-[420px] animate-float drop-shadow-2xl" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
