import Animated from "../components/Animated";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Shield, Target, Building2, BarChart3, Fingerprint, Lock, CheckCircle2, Award } from "lucide-react";
const ownerImg = "/images/john.webp";
const certImg = "/images/certificate.webp";

export default function About() {
  return (
    <div className="w-full flex-1">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-900/50 to-transparent" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_60%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
          <Animated variant="fadeUp">
            <h1 className="text-5xl md:text-8xl font-display tracking-tighter mb-8 text-foreground drop-shadow-sm">
              Sell Your <br /> Business.
            </h1>
          </Animated>
          <Animated variant="fadeUp" delay={0.1}>
            <p className="text-xl md:text-2xl text-muted font-light tracking-wide mb-12 max-w-2xl mx-auto">
              AI Exit Advisors helps business owners sell their companies by connecting them with qualified buyers and managing the deal process from start to finish.
            </p>
          </Animated>
        </div>
      </section>

      {/* 5. OUR PHILOSOPHY (Placed high to set tone) */}
      <section className="py-24 px-6 border-y border-white/5 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Animated variant="fadeUp">
            <h2 className="text-3xl md:text-5xl font-display tracking-tighter mb-6">
              "We don’t just list businesses. We sell them."
            </h2>
            <div className="text-xs uppercase tracking-widest text-muted font-mono">
              — The AI Exit Advisors Philosophy
            </div>
          </Animated>
        </div>
      </section>

      {/* 2. WHO WE WORK WITH */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <Animated variant="fadeUp">
              <div className="text-xs font-mono uppercase tracking-widest text-muted mb-4 border-l border-foreground pl-4">Target Mandates</div>
              <h2 className="text-4xl md:text-5xl font-display tracking-tighter">
                Who We Represent
              </h2>
            </Animated>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "SaaS & Tech", 
                desc: "B2B / B2C platforms, recurring revenue models, and AI-enabled infrastructure.",
                icon: Target
              },
              { 
                title: "DTC & Digital Retail", 
                desc: "Scalable e-commerce brands with strong unit economics and market positioning.",
                icon: BarChart3
              },
              { 
                title: "Creative Agencies", 
                desc: "High-margin marketing, design, and development firms with robust client rosters.",
                icon: Building2
              }
            ].map((item, i) => (
              <Animated 
                key={i} 
                delay={i * 0.1}
                variant="fadeUp"
                className="p-8 md:p-12 border border-white/10 rounded-3xl bg-zinc-950 flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-display tracking-tighter mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed font-light">{item.desc}</p>
                </div>
              </Animated>
            ))}
          </div>

          <div className="mt-12 text-center text-sm font-mono tracking-widest uppercase text-muted">
            <span className="text-foreground">Typical Scale:</span> $2M — $50M+ Valuation Target
          </div>
        </div>
      </section>

      {/* 3. OUR EDGE (DIFFERENTIATION) & 6. TRUST ELEMENTS */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <Animated variant="fadeUp">
                <div className="text-xs font-mono uppercase tracking-widest text-muted mb-4 border-l border-foreground pl-4">The AI Exit Edge</div>
                <h2 className="text-4xl md:text-5xl font-display tracking-tighter mb-8">
                  Why founders choose us over traditional brokers.
                </h2>
                <p className="text-lg text-muted font-light leading-relaxed mb-8">
                  The difference between listing a business and selling it is execution. We source qualified buyers, manage the narrative, and close the deal.
                </p>
              </Animated>

              <div className="flex flex-col gap-8">
                {[
                  { title: "Pre-Sale Preparation", text: "We identify and correct issues months before going to market." },
                  { title: "Direct Access to Serious Buyers", text: "Direct lines to Private Equity, family offices, and strategic acquirers globally." },
                  { title: "Discrete & Confidential", text: "Zero public listings. Strict NDAs and targeted outreach to protect your brand." }
                ].map((edge, i) => (
                  <Animated key={i} delay={0.2 + (i * 0.1)} variant="fadeUp" className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium tracking-tight mb-2">{edge.title}</h4>
                      <p className="text-muted font-light">{edge.text}</p>
                    </div>
                  </Animated>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 relative">
               {/* Trust Badges */}
               <Animated variant="fadeUp" delay={0.1} className="p-8 border border-white/10 rounded-3xl bg-zinc-950 shadow-sm flex flex-col gap-4">
                 <Shield className="w-6 h-6 text-emerald-400" />
                 <h4 className="font-medium">Founder-First Defense</h4>
                 <p className="text-sm text-muted">We rigorously defend your terms, securing cash-at-close and preventing predatory earn-outs.</p>
               </Animated>
               <Animated variant="fadeUp" delay={0.2} className="p-8 border border-white/10 rounded-3xl bg-zinc-950 shadow-sm flex flex-col gap-4 translate-y-0 sm:translate-y-12">
                 <TrendingUp className="w-6 h-6 text-blue-400" />
                 <h4 className="font-medium">Data-Driven Pricing</h4>
                 <p className="text-sm text-muted">We use real market data to justify and defend your company's value.</p>
               </Animated>
               <Animated variant="fadeUp" delay={0.3} className="p-8 border border-white/10 rounded-3xl bg-zinc-950 shadow-sm flex flex-col gap-4">
                 <Users className="w-6 h-6 text-amber-400" />
                 <h4 className="font-medium">Long-Term Partnerships</h4>
                 <p className="text-sm text-muted">We advise you from day one, through diligence, and well past the closing wire.</p>
               </Animated>
               <Animated variant="fadeUp" delay={0.4} className="p-8 border border-white/10 rounded-3xl bg-zinc-950 shadow-sm flex flex-col gap-4 translate-y-0 sm:translate-y-12">
                 <Lock className="w-6 h-6 text-purple-400" />
                 <h4 className="font-medium">Total Discretion</h4>
                 <p className="text-sm text-muted">Your competitors, employees, and customers will never know until the deal is finalized.</p>
               </Animated>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LEAD ADVISOR */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* LEFT: Owner Image */}
            <Animated variant="fadeUp" className="w-full lg:w-5/12 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px]">
                <div className="aspect-[4/5] relative z-10 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.03)] text-transparent rounded-xl">
                  <img 
                    src={ownerImg} 
                    alt="Principal Advisor" 
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                    loading="lazy"
                    width={400}
                    height={500}
                  />
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-6 -left-6 w-full h-full border border-white/10 rounded-xl -z-10" />
              </div>
            </Animated>

            {/* RIGHT: Profile Content */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <Animated variant="fadeUp">
                <h3 className="text-3xl md:text-5xl font-display tracking-tighter mb-2">John Bela</h3>
                <div className="text-sm font-mono uppercase tracking-widest text-muted mb-8">
                  Principal Advisor, AI Exit Advisors
                </div>
                
                <div className="space-y-5 text-lg text-muted font-light leading-relaxed mb-8 max-w-2xl">
                  <p>
                    Advises on selling businesses, buyer sourcing, and deal execution across SaaS, DTC, and service-based businesses. Founded AI Exit Advisors in 2026 to apply AI-driven systems to the business brokerage process. The firm focuses on increasing buyer flow, improving deal quality, and reducing time to close through structured, data-backed execution.
                  </p>
                  <p>
                    Background spans sales, operations, and business ownership across healthcare, SaaS, energy, and service industries. Includes experience in building and operating businesses, along with high-touch sales across outbound, paid acquisition, and enterprise deal cycles.
                  </p>
                  <p>
                    Previously founded The Chief AI Office, where proprietary systems were built to automate business development and pipeline generation. These systems generated over <span className="font-medium text-foreground">$5M</span> in qualified opportunities within two months and supported high-value contract closures, including deals exceeding <span className="font-medium text-foreground">$250K</span>.
                  </p>
                  <p>
                    Leads a team of 12 applying these systems to business brokerage, supporting transactions ranging from <span className="font-medium text-foreground">$10K to $10M+</span>. Approach is direct and performance-focused — combining sales discipline with automation to create consistent buyer demand, stronger positioning, and higher exit multiples.
                  </p>
                </div>
              </Animated>

              <Animated variant="fadeUp" delay={0.1} className="mb-10">
                <ul className="flex flex-col gap-4">
                  {[
                    "Targeted Deal Focus: $2M — $50M+ range",
                    "Specialization: SaaS, DTC, and Tech-Enabled Agencies",
                    "Data-driven, real-time market multiple modeling",
                    "Direct access to vetted global buyer networks"
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-foreground/50 shrink-0" />
                      <span className="text-foreground tracking-wide font-light">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Animated>
              
              {/* Divider */}
              <div className="w-full h-px bg-white/10 mb-8" />

              {/* CERTIFICATION BLOCK */}
              <Animated variant="fadeUp" delay={0.2}>
                <div className="flex items-center gap-6 p-5 border border-white/10 rounded-2xl bg-zinc-900 inline-flex shadow-sm">
                  <img 
                    src={certImg}
                    alt="Business Broker Certification"
                    className="w-28 h-28 object-contain rounded-lg bg-white p-1.5 shrink-0 border border-black/5"
                    loading="lazy"
                    width={112}
                    height={112}
                  />
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted mb-1">Certification</div>
                    <div className="font-medium tracking-tight text-foreground">Business Broker Training Certification</div>
                    <div className="text-sm text-foreground/70 font-light">FastStart Program &bull; Completed April 2026</div>
                  </div>
                </div>
              </Animated>

            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Animated variant="fadeUp">
              <h2 className="text-4xl md:text-5xl font-display tracking-tighter mb-4">
                The Exit Protocol
              </h2>
              <p className="text-lg text-muted font-light max-w-2xl mx-auto">
                A rigid, structured process designed to create buyer competition.
              </p>
            </Animated>
          </div>

          <div className="space-y-6">
            {[
              { num: "01", title: "Valuation & Audit", text: "Deep financial analysis to establish a defensible baseline and identify immediate value levers." },
              { num: "02", title: "Asset Preparation", text: "Crafting the Confidential Information Memorandum (CIM) and building the data room." },
              { num: "03", title: "Targeted Outreach", text: "Quietly approaching our vetted network of acquirers to gauge interest and secure NDAs." },
              { num: "04", title: "Bidding & Negotiation", text: "Creating an auction environment to drive up multiples and improve deal structure." },
              { num: "05", title: "Diligence & Closing", text: "Managing the legal, technical, and financial diligence process through to the wire transfer." }
            ].map((step, i) => (
              <Animated 
                key={i} 
                delay={i * 0.1}
                variant="fadeUp"
                className="flex items-start gap-6 p-6 md:p-8 border border-white/5 rounded-2xl bg-zinc-950/50 hover:border-white/20 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-display text-muted/50 w-12 shrink-0">{step.num}</div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight mb-2">{step.title}</h3>
                  <p className="text-muted font-light">{step.text}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>


      {/* 7. FINAL CTA */}
      <section className="py-32 md:py-48 px-6 text-center border-t border-white/5 relative overflow-hidden bg-zinc-950">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />
         
         <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <Animated variant="fadeUp">
              <h2 className="text-4xl md:text-6xl font-display tracking-tighter mb-6 text-foreground drop-shadow-sm">
                Understand Your Value Today.
              </h2>
            </Animated>
            <Animated variant="fadeUp" delay={0.1}>
              <p className="text-lg md:text-xl text-muted font-light tracking-wide mb-12">
                Get a confidential, no-obligation valuation from our advisory team.
              </p>
            </Animated>
            <Animated variant="fadeUp" delay={0.2}>
              <Link 
                to="/contact"
                className="px-10 py-5 bg-white text-black text-sm tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-lg inline-block"
              >
                Get Free Valuation
              </Link>
            </Animated>
          </div>
      </section>
    </div>
  );
}
