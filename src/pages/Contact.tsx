import Animated from "../components/Animated";
import ValuationEngine from "../components/ValuationEngine";

export default function Contact() {
  return (
    <div className="w-full flex-1 pt-32 pb-24 px-6 md:pt-40">
      <div className="max-w-4xl mx-auto flex flex-col gap-24">
        
        {/* 1. HERO SECTION */}
        <Animated variant="fadeUp">
          <div className="text-center border-b border-white/10 pb-16">
            <h1 className="text-5xl md:text-7xl font-display tracking-tighter mb-6 text-foreground">
              Start Your Exit Process
            </h1>
            <p className="text-xl text-muted font-light tracking-wide max-w-2xl mx-auto mb-10">
              Request a confidential business valuation and speak with an advisor.
            </p>
            <button 
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-5 bg-foreground text-background text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] inline-block shadow-[0_8px_30px_-4px_rgba(255,255,255,0.08)] hover:shadow-[0_12px_40px_-4px_rgba(255,255,255,0.12)]"
            >
              Get Free Valuation
            </button>
          </div>
        </Animated>

        {/* 2. CONTACT GRID (TRUST BLOCK) */}
        <Animated variant="fadeUp" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="flex flex-col items-center p-10 bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out hover:-translate-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-muted mb-4 opacity-70">Location</div>
              <div className="text-lg text-foreground font-light">Las Vegas, Nevada, US</div>
            </div>
            <div className="flex flex-col items-center p-10 bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out hover:-translate-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-muted mb-4 opacity-70">Phone</div>
              <div className="text-lg text-foreground font-light">+1 (725) 304-6728</div>
            </div>
            <div className="flex flex-col items-center p-10 bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out hover:-translate-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-muted mb-4 opacity-70">Email</div>
              <a href="mailto:info@aiexitadvisors.com?subject=Business%20Valuation%20Inquiry" className="text-lg text-foreground font-light hover:opacity-70 transition-opacity">info@aiexitadvisors.com</a>
            </div>
          </div>
        </Animated>

        {/* 3. CONTACT FORM (MAIN CONVERSION) */}
        <Animated variant="fadeUp" delay={0.2} id="contact-form" className="scroll-mt-32">
          <div className="max-w-2xl mx-auto w-full p-8 md:p-12 bg-white/[0.02] backdrop-blur-[20px] rounded-[2rem] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted pl-1">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted pl-1">Email</label>
                  <input required type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors text-foreground" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2 relative">
                  <label className="text-xs uppercase tracking-widest text-muted pl-1">Business Type</label>
                  <select required defaultValue="" className="w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors text-foreground appearance-none cursor-pointer rounded-none">
                    <option value="" disabled className="bg-zinc-900">Select Type</option>
                    <option value="SaaS" className="bg-zinc-900">SaaS</option>
                    <option value="DTC" className="bg-zinc-900">DTC</option>
                    <option value="Agency" className="bg-zinc-900">Agency</option>
                    <option value="Other" className="bg-zinc-900">Other</option>
                  </select>
                  <div className="absolute right-2 top-11 pointer-events-none text-muted">
                    ▼
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted pl-1">Estimated Revenue</label>
                  <input required type="text" placeholder="e.g. $2.5M" className="w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors text-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted pl-1">Message</label>
                <textarea required placeholder="Tell us about your business and goals..." className="w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors min-h-[120px] resize-y text-foreground" />
              </div>
              
              <div className="pt-8 text-center flex flex-col items-center">
                <button type="submit" className="px-10 py-5 bg-foreground text-background text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] w-full shadow-[0_8px_30px_-4px_rgba(255,255,255,0.08)] hover:shadow-[0_12px_40px_-4px_rgba(255,255,255,0.12)]">
                  Request Confidential Valuation
                </button>
                
                {/* 4. TRUST MICROCOPY */}
                <p className="mt-6 text-sm text-muted font-light tracking-wide opacity-80">
                  We review every inquiry personally. All conversations are strictly confidential.
                </p>
              </div>
            </form>
          </div>
        </Animated>

        {/* 5. OPTIONAL VALUATION EMBED */}
        <Animated variant="fadeUp" delay={0.3} className="pt-24 border-t border-white/10">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-display tracking-tighter mb-4 text-foreground">Interactive Valuation</h2>
            <p className="text-muted font-light tracking-wide">
              Prefer an algorithmic baseline right now? Run your numbers through our engine.
            </p>
          </div>
          <div className="px-4">
            <ValuationEngine />
          </div>
        </Animated>

      </div>
    </div>
  );
}
