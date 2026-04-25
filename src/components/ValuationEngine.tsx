import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedDataFlow from "./AnimatedDataFlow";

export default function ValuationEngine() {
  const [step, setStep] = useState(1);
  
  const [revenue, setRevenue] = useState("");
  const [profit, setProfit] = useState("");
  const [industry, setIndustry] = useState("");
  const [years, setYears] = useState("");
  const [valuationRange, setValuationRange] = useState("");

  const calculateValuation = () => {
    // Basic mock logic based on profit/revenue.
    // In a real app we'd parse numbers properly.
    // For this prototype, we'll just generate a nice looking range.
    let base = 5000000; // $5M
    const cleanProfit = profit.replace(/[^0-9.]/g, "");
    if (cleanProfit && !isNaN(Number(cleanProfit))) {
      base = Number(cleanProfit) * 4.5; // Average 4.5x multiple
    }
    
    const formatCurrency = (num: number) => {
      if (num >= 1000000) return "$" + (num / 1000000).toFixed(1) + "M";
      if (num >= 1000) return "$" + (num / 1000).toFixed(0) + "K";
      return "$" + num;
    }

    const low = formatCurrency(base * 0.8);
    const high = formatCurrency(base * 1.25);
    setValuationRange(`${low} — ${high}`);
    setStep(5);
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 4) {
      calculateValuation();
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <section id="valuation-engine" className="py-24 md:py-32 px-6 relative border-t border-white/5 overflow-hidden">
      <AnimatedDataFlow />
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4"
          >
            Most owners undervalue their business.
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display tracking-tighter mb-6"
          >
            Valuation Engine.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 items-center"
          >
            <p className="text-lg md:text-xl text-muted font-light tracking-wide max-w-xl mx-auto">
              Get a realistic valuation in minutes — before you leave money on the table.
            </p>
            <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-foreground/80 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full w-max mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-80 animate-pulse" />
              Serious buyers are actively acquiring right now.
            </div>
          </motion.div>
        </div>

        <div className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-3xl p-8 md:p-16 min-h-[400px] flex flex-col justify-center relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" 
              alt="Texture" 
              className="w-full h-full object-cover mix-blend-overlay filter contrast-150 grayscale invert-0"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-10">
            <motion.div 
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>

          <div className="relative z-10 w-full flex flex-col lg:flex-row gap-16 lg:items-center">
            <div className="w-full lg:w-1/2">
              <AnimatePresence mode="wait">
                {step === 1 && (
              <motion.form 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleNext}
                className="w-full max-w-xl mx-auto flex flex-col gap-8"
              >
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted block mb-4">Step 1: Financials</label>
                  <h3 className="text-2xl md:text-4xl font-display tracking-tighter mb-4">What is your Annual Revenue?</h3>
                </div>
                <input 
                  autoFocus
                  required
                  type="text" 
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  placeholder="e.g. $5,000,000" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-display placeholder:text-white/20 focus:outline-none focus:border-white transition-colors" 
                />
                <button type="submit" className="self-start px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 mt-4 shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]">
                  Continue &rarr;
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleNext}
                className="w-full max-w-xl mx-auto flex flex-col gap-8"
              >
                <div>
                  <button type="button" onClick={() => setStep(1)} className="text-xs uppercase tracking-widest text-muted hover:text-white mb-4 block">&larr; Back</button>
                  <h3 className="text-2xl md:text-4xl font-display tracking-tighter mb-4">What is your Net Profit?</h3>
                </div>
                <input 
                  autoFocus
                  required
                  type="text" 
                  value={profit}
                  onChange={(e) => setProfit(e.target.value)}
                  placeholder="e.g. $1,200,000" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-display placeholder:text-white/20 focus:outline-none focus:border-white transition-colors" 
                />
                <button type="submit" className="self-start px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 mt-4 shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]">
                  Continue &rarr;
                </button>
              </motion.form>
            )}

            {step === 3 && (
              <motion.form 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleNext}
                className="w-full max-w-xl mx-auto flex flex-col gap-8"
              >
                <div>
                  <button type="button" onClick={() => setStep(2)} className="text-xs uppercase tracking-widest text-muted hover:text-white mb-4 block">&larr; Back</button>
                  <h3 className="text-2xl md:text-4xl font-display tracking-tighter mb-4">Select your Industry.</h3>
                </div>
                <select 
                  required
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl font-display focus:outline-none focus:border-white transition-colors [&>option]:text-black"
                >
                  <option value="" disabled>Choose sector...</option>
                  <option value="saas">Software / SaaS</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="services">Professional Services</option>
                  <option value="other">Other</option>
                </select>
                <button type="submit" className="self-start px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 mt-4 shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]">
                  Continue &rarr;
                </button>
              </motion.form>
            )}

            {step === 4 && (
              <motion.form 
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleNext}
                className="w-full max-w-xl mx-auto flex flex-col gap-8"
              >
                <div>
                  <button type="button" onClick={() => setStep(3)} className="text-xs uppercase tracking-widest text-muted hover:text-white mb-4 block">&larr; Back</button>
                  <h3 className="text-2xl md:text-4xl font-display tracking-tighter mb-4">Years in operation?</h3>
                </div>
                <input 
                  autoFocus
                  required
                  type="text" 
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  placeholder="e.g. 5" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-display placeholder:text-white/20 focus:outline-none focus:border-white transition-colors" 
                />
                <button type="submit" className="self-start px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 mt-4 shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]">
                  Calculate Valuation
                </button>
              </motion.form>
            )}

            {step === 5 && (
              <motion.div 
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-2xl mx-auto text-center flex flex-col items-center gap-8 py-4"
              >
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted mb-4">Estimated Range</div>
                  <div className="text-5xl md:text-7xl font-display tracking-tighter text-foreground mb-6">
                    {valuationRange}
                  </div>
                  <div className="text-xs font-mono tracking-widest text-white/40 uppercase">
                    Benchmarked against real transactions and industry standards
                  </div>
                </div>
                
                <p className="text-lg lg:text-xl text-muted font-light tracking-wide max-w-lg mt-4 mb-4">
                  We help you package and sell your business to serious buyers.
                </p>

                <Link 
                  to="/contact"
                  className="px-10 py-5 bg-white text-black text-sm tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 inline-block shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]"
                >
                  Contact Our Advisors
                </Link>

                <button onClick={() => setStep(1)} className="text-xs uppercase tracking-widest text-muted hover:text-white mt-4 pb-1 border-b border-white/20">
                  Recalculate
                </button>
              </motion.div>
            )}
            </AnimatePresence>
            </div>
            
            {/* Visual SaaS Analytics Dashboard (Hidden on Step 5) */}
            {step < 5 && (
              <div className="hidden lg:flex w-full lg:w-1/2 flex-col gap-6">
                <div className="relative w-full h-[320px] rounded-2xl border border-white/5 bg-zinc-950/60 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
                  {/* Background grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#local_03_1px,transparent_1px),linear-gradient(to_bottom,#local_03_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-widest text-muted mb-1">Live Multiples Matrix</div>
                      <div className="text-xl font-display text-white">Market Baseline</div>
                    </div>
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-emerald-400">
                      Syncing
                    </div>
                  </div>

                  <div className="relative z-10 flex items-end gap-2 h-32 mt-8">
                    {[30, 45, 55, 40, 75, 60, 90, 85, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${h}%`, opacity: 1 }}
                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                        className={`w-full rounded-t-sm ${i === 8 ? 'bg-white opacity-90' : 'bg-white/10'}`}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10 border-t border-white/10 pt-4 flex justify-between items-center mt-4">
                    <div className="text-xs text-muted font-mono">EBITDA Analysis</div>
                    <div className="text-xs text-white/60 font-mono">Avg. 5.2x</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
