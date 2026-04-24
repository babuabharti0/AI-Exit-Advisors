import { motion, useScroll, useTransform } from "motion/react";
import { LineChart, FileText, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ValuationEngine from "../components/ValuationEngine";
import Animated from "../components/Animated";
import AnimatedCapitalFlow from "../components/AnimatedCapitalFlow";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yBgTexture = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yBgGrid = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div ref={containerRef} className="w-full flex-col flex bg-background">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-32 pb-24">
        {/* Base Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2560&q=80" 
            alt="Corporate Acquisition Meeting" 
            className="w-full h-full object-cover opacity-20 filter contrast-125 brightness-50 mix-blend-luminosity blur-[2px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        {/* LAYER 1 & 2 & 3: Structural Texture, Data Overlay & Glowing Ambience */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Layer 3: Soft Gradient Glow (Anchors Text) */}
          <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] mix-blend-screen" />
          
          {/* Layer 1: Structural Mesh Texture (Parallax Down) */}
          <motion.div 
            style={{ y: yBgTexture }}
            className="absolute inset-0 w-full lg:w-[60%] opacity-[0.06] mix-blend-luminosity blur-[1px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[150%] object-cover scale-110 grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Layer 2: Financial Data Visual Grid (Parallax Up) */}
          <motion.div 
            style={{ y: yBgGrid }}
            className="absolute top-[-10%] left-[-5%] w-full lg:w-[60%] h-[120%] opacity-[0.05]"
          >
            <svg viewBox="0 0 1000 1000" className="w-full h-full stroke-white fill-none" preserveAspectRatio="none">
              <path d="M0,800 L200,600 C300,500 400,700 600,400 C700,250 800,300 1000,100" className="stroke-[1.5]" />
              <path d="M0,850 L200,650 C300,550 400,750 600,450 C700,300 800,350 1000,150" className="stroke-white/20" />
              {Array.from({ length: 15 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 80} x2="1000" y2={i * 80} className="stroke-white/20 stroke-[0.5]" />
              ))}
              {Array.from({ length: 15 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2="1000" className="stroke-white/20 stroke-[0.5]" />
              ))}
            </svg>
          </motion.div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            className="w-full text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest text-muted">
                Premium Brokerage
              </span>
            </motion.div>
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1] tracking-tighter font-display font-medium text-foreground mb-6"
            >
              Know What Your <br className="hidden md:block" />
              <span className="text-white/60">Business Is Worth.</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-2xl text-muted font-light tracking-wide mb-12 max-w-xl leading-relaxed"
            >
              Data-driven valuation based on real market multiples. Expert-led exits.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-start gap-4">
              <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-foreground text-background text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center shadow-[0_8px_30px_-4px_rgba(255,255,255,0.08)] hover:shadow-[0_12px_40px_-4px_rgba(255,255,255,0.12)]">
                Get Free Valuation
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex relative h-[600px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80" 
              alt="Data and Strategy" 
              className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.6] mix-blend-luminosity scale-105"
            />
            {/* Visual Panel Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90" />
            
            {/* Animated Valuation UI in the panel */}
            <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/[0.04] backdrop-blur-[20px] rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <div className="flex justify-between items-end mb-4">
                 <div>
                   <div className="text-xs font-mono uppercase tracking-widest text-muted mb-1">Target Multiple</div>
                   <div className="text-white text-lg font-mono">4.5x — 6.8x</div>
                 </div>
                 <div className="text-right">
                   <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">Data Depth</div>
                   <div className="text-white font-mono text-sm">High</div>
                 </div>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: "0%" }}
                   animate={{ width: "75%" }}
                   transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                   className="h-full bg-white opacity-80" 
                 />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ValuationEngine />

      {/* 3. Trust Section */}
      <section className="py-24 md:py-32 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <Animated variant="fadeUp" className="mb-16 border-b border-white/10 pb-8">
            <h2 className="text-3xl md:text-5xl font-display tracking-tighter">
              Built for Serious Sellers.
            </h2>
          </Animated>
          <div className="grid md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { title: "Confidential process", desc: "Your identity and sensitive data are strictly protected throughout the entire timeline." },
              { title: "Pre-qualified buyer network", desc: "Deal only with rigorous, vetted capital. We bypass the window shoppers." },
              { title: "End-to-end deal execution", desc: "From packaging the asset to final contract structuring, we manage the close." }
            ].map((stat, i) => (
              <Animated key={i} delay={i * 0.15} variant="fadeUp" className="pt-8 md:pt-0 md:px-8 first:md:pl-0 last:md:pr-0">
                <h4 className="text-2xl md:text-3xl font-display tracking-tight mb-4">{stat.title}.</h4>
                <p className="text-muted tracking-wide leading-relaxed font-light">{stat.desc}</p>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <Animated variant="fadeUp" className="mb-24 text-center">
            <h2 className="text-3xl md:text-5xl font-display tracking-tighter">
              Our Process.
            </h2>
            <p className="text-lg text-muted font-light mt-4">Three deliberate steps to a successful exit.</p>
          </Animated>
          
          <div className="grid md:grid-cols-3 gap-16 md:gap-8 relative">
            {/* Connecting Line backend (desktop only) */}
            <div className="hidden md:block absolute top-[40px] left-[16.66%] right-[16.66%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
            
            {[
              { num: "01", title: "Valuation", text: "Get your business valued using live market multiples.", Icon: LineChart, hoverClass: "group-hover:scale-[1.15]" },
              { num: "02", title: "Packaging", text: "We package your business for sale as a premium asset.", Icon: FileText, hoverClass: "group-hover:rotate-[-6deg] group-hover:scale-[1.1]" },
              { num: "03", title: "Sale", text: "We match you with serious buyers and close the deal.", Icon: Handshake, hoverClass: "group-hover:-translate-y-1 group-hover:scale-[1.1]" }
            ].map((step, i) => (
              <Animated 
                key={i}
                delay={i * 0.15}
                variant="fadeUp"
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center mb-8 relative group-hover:border-white/30 transition-all duration-200 shadow-2xl">
                  <step.Icon className={`w-8 h-8 text-white/50 group-hover:text-white transition-all duration-200 ${step.hoverClass}`} strokeWidth={1} />
                  <div className="absolute -top-3 -right-3 text-[10px] font-mono border border-white/10 bg-zinc-900 px-2 py-0.5 rounded-full text-muted group-hover:text-white transition-colors duration-200">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-2xl font-display tracking-tight text-foreground mb-4">{step.title}</h3>
                <p className="text-muted tracking-wide leading-relaxed font-light text-sm md:text-base max-w-[250px]">{step.text}</p>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 Business Packaging */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 bg-zinc-950/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2560&auto=format&fit=crop" 
            alt="Corporate Desk" 
            className="w-full h-full object-cover filter contrast-125 brightness-50 grayscale mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          <Animated variant="fadeUp" className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-display tracking-tighter mb-6">
              We Prepare Your <br className="hidden md:block"/> Business for Sale.
            </h2>
            <p className="text-lg md:text-xl text-muted font-light tracking-wide max-w-md">
              We turn your business into a buyer-ready asset.
            </p>
          </Animated>

          <div className="flex flex-col gap-8">
            {[
              "Clean financial presentation",
              "Clear growth story",
              "Structured deal positioning"
            ].map((point, i) => (
              <Animated 
                key={i} 
                delay={i * 0.1}
                variant="fadeUp" 
                className="border-b border-white/10 pb-6 flex items-start gap-6 group hover:border-white/30 transition-colors"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-muted mt-2">0{i + 1}</span>
                <span className="text-2xl md:text-3xl font-display tracking-tight text-foreground">{point}</span>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-32 md:py-48 px-6 text-center border-t border-white/5 relative overflow-hidden">
         <AnimatedCapitalFlow />
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05)_0%,var(--color-background)_60%)] pointer-events-none" />
         
         <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <Animated variant="fadeUp">
              <h2 className="text-4xl md:text-7xl font-display tracking-tighter mb-6 text-foreground drop-shadow-sm">
                Ready to Find Out <br className="hidden md:block"/> What It’s Worth?
              </h2>
            </Animated>
            <Animated variant="fadeUp" delay={0.1}>
              <p className="text-lg md:text-2xl text-muted font-light tracking-wide mb-12">
                Start with a valuation. We'll handle the rest.
              </p>
            </Animated>
            <Animated variant="fadeUp" delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => document.getElementById('valuation-engine')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-10 py-5 bg-white text-black text-sm tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 flex items-center justify-center shadow-lg"
                >
                  Get Free Valuation
                </button>
              </div>
            </Animated>
          </div>
      </section>
    </div>
  );
}
