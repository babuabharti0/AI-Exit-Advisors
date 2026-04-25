var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/hooks/useIsMobile.ts
import { useState as useState2, useEffect as useEffect3 } from "react";
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState2(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect3(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}
var init_useIsMobile = __esm({
  "src/hooks/useIsMobile.ts"() {
  }
});

// src/components/AnimatedDataFlow.tsx
import { motion as motion2 } from "motion/react";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function AnimatedDataFlow() {
  const isMobile = useIsMobile();
  return /* @__PURE__ */ jsxs2("div", { className: "absolute inset-0 z-0 overflow-hidden pointer-events-none select-none", children: [
    /* @__PURE__ */ jsx2("div", { className: "absolute inset-0 transition-colors duration-1000 bg-zinc-950" }),
    /* @__PURE__ */ jsx2(
      motion2.div,
      {
        animate: isMobile ? { scale: 1, opacity: 0.4, x: "0%", y: "0%" } : {
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
          x: ["0%", "2%", "0%"],
          y: ["0%", "3%", "0%"]
        },
        transition: { duration: 18, repeat: Infinity, ease: "easeInOut" },
        className: "absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] mix-blend-screen bg-amber-600/15"
      }
    ),
    /* @__PURE__ */ jsx2(
      motion2.div,
      {
        animate: isMobile ? { scale: 1, opacity: 0.3, x: "0%", y: "0%" } : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: ["0%", "-3%", "0%"],
          y: ["0%", "-2%", "0%"]
        },
        transition: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 },
        className: "absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] mix-blend-screen bg-amber-800/20"
      }
    ),
    /* @__PURE__ */ jsx2("div", { className: "absolute inset-0 w-full h-full opacity-25 blur-xl pointer-events-none", children: /* @__PURE__ */ jsxs2(
      motion2.div,
      {
        animate: isMobile ? { x: "0%" } : { x: ["0%", "-50%"] },
        transition: { duration: 40, repeat: Infinity, ease: "linear" },
        className: "absolute inset-0 w-[200%] h-full flex",
        children: [
          /* @__PURE__ */ jsxs2("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 1000", children: [
            /* @__PURE__ */ jsx2("path", { d: "M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400", className: "stroke-amber-400", strokeWidth: "4", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600", className: "stroke-amber-300", strokeWidth: "6", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,800 C300,700 400,900 600,800 C800,700 900,850 1000,800", className: "stroke-amber-500", strokeWidth: "4", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200", className: "stroke-amber-200", strokeWidth: "8", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,500 C150,450 250,550 500,500 C750,450 850,550 1000,500", className: "stroke-amber-400", strokeWidth: "12", vectorEffect: "non-scaling-stroke" })
          ] }),
          /* @__PURE__ */ jsxs2("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 1000", children: [
            /* @__PURE__ */ jsx2("path", { d: "M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400", className: "stroke-amber-400", strokeWidth: "4", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600", className: "stroke-amber-300", strokeWidth: "6", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,800 C300,700 400,900 600,800 C800,700 900,850 1000,800", className: "stroke-amber-500", strokeWidth: "4", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200", className: "stroke-amber-200", strokeWidth: "8", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,500 C150,450 250,550 500,500 C750,450 850,550 1000,500", className: "stroke-amber-400", strokeWidth: "12", vectorEffect: "non-scaling-stroke" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs2(
      motion2.div,
      {
        animate: isMobile ? { x: "0%" } : { x: ["0%", "-50%"] },
        transition: { duration: 40, repeat: Infinity, ease: "linear" },
        className: "absolute inset-0 w-[200%] h-full flex opacity-60",
        children: [
          /* @__PURE__ */ jsxs2("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 1000", children: [
            /* @__PURE__ */ jsx2("path", { d: "M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400", className: "stroke-amber-400/40", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600", className: "stroke-yellow-400/30", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,800 C300,700 400,900 600,800 C800,700 900,850 1000,800", className: "stroke-amber-500/30", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200", className: "stroke-amber-300/20", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,500 C150,450 250,550 500,500 C750,450 850,550 1000,500", className: "stroke-amber-300/25", strokeWidth: "2", vectorEffect: "non-scaling-stroke" }),
            isMobile ? null : /* @__PURE__ */ jsxs2(Fragment, { children: [
              /* @__PURE__ */ jsx2(
                motion2.path,
                {
                  d: "M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400",
                  className: "stroke-amber-200",
                  strokeWidth: "2",
                  vectorEffect: "non-scaling-stroke",
                  strokeDasharray: "100 900",
                  animate: { strokeDashoffset: [1e3, 0] },
                  transition: { duration: 7, repeat: Infinity, ease: "linear" }
                }
              ),
              /* @__PURE__ */ jsx2(
                motion2.path,
                {
                  d: "M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600",
                  className: "stroke-amber-100",
                  strokeWidth: "1.5",
                  vectorEffect: "non-scaling-stroke",
                  strokeDasharray: "50 950",
                  animate: { strokeDashoffset: [1e3, 0] },
                  transition: { duration: 9, repeat: Infinity, ease: "linear", delay: 1 }
                }
              ),
              /* @__PURE__ */ jsx2(
                motion2.path,
                {
                  d: "M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200",
                  className: "stroke-amber-300",
                  strokeWidth: "3",
                  vectorEffect: "non-scaling-stroke",
                  strokeDasharray: "150 850",
                  animate: { strokeDashoffset: [1e3, 0] },
                  transition: { duration: 6, repeat: Infinity, ease: "linear", delay: 2 }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs2("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 1000", children: [
            /* @__PURE__ */ jsx2("path", { d: "M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400", className: "stroke-amber-400/40", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600", className: "stroke-yellow-400/30", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,800 C300,700 400,900 600,800 C800,700 900,850 1000,800", className: "stroke-amber-500/30", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200", className: "stroke-amber-300/20", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" }),
            /* @__PURE__ */ jsx2("path", { d: "M0,500 C150,450 250,550 500,500 C750,450 850,550 1000,500", className: "stroke-amber-300/25", strokeWidth: "2", vectorEffect: "non-scaling-stroke" }),
            isMobile ? null : /* @__PURE__ */ jsxs2(Fragment, { children: [
              /* @__PURE__ */ jsx2(
                motion2.path,
                {
                  d: "M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400",
                  className: "stroke-amber-200",
                  strokeWidth: "2",
                  vectorEffect: "non-scaling-stroke",
                  strokeDasharray: "100 900",
                  animate: { strokeDashoffset: [1e3, 0] },
                  transition: { duration: 7, repeat: Infinity, ease: "linear" }
                }
              ),
              /* @__PURE__ */ jsx2(
                motion2.path,
                {
                  d: "M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600",
                  className: "stroke-amber-100",
                  strokeWidth: "1.5",
                  vectorEffect: "non-scaling-stroke",
                  strokeDasharray: "50 950",
                  animate: { strokeDashoffset: [1e3, 0] },
                  transition: { duration: 9, repeat: Infinity, ease: "linear", delay: 1 }
                }
              ),
              /* @__PURE__ */ jsx2(
                motion2.path,
                {
                  d: "M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200",
                  className: "stroke-amber-300",
                  strokeWidth: "3",
                  vectorEffect: "non-scaling-stroke",
                  strokeDasharray: "150 850",
                  animate: { strokeDashoffset: [1e3, 0] },
                  transition: { duration: 6, repeat: Infinity, ease: "linear", delay: 2 }
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx2("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(24,24,27,0.95)_80%)]" })
  ] });
}
var init_AnimatedDataFlow = __esm({
  "src/components/AnimatedDataFlow.tsx"() {
    init_useIsMobile();
  }
});

// src/components/ValuationEngine.tsx
import { motion as motion3, AnimatePresence as AnimatePresence2 } from "motion/react";
import { useState as useState3 } from "react";
import { Link as Link2 } from "react-router-dom";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function ValuationEngine() {
  const isMobile = useIsMobile();
  const [step, setStep] = useState3(1);
  const [revenue, setRevenue] = useState3("");
  const [profit, setProfit] = useState3("");
  const [industry, setIndustry] = useState3("");
  const [years, setYears] = useState3("");
  const [valuationRange, setValuationRange] = useState3("");
  const calculateValuation = () => {
    let base = 5e6;
    const cleanProfit = profit.replace(/[^0-9.]/g, "");
    if (cleanProfit && !isNaN(Number(cleanProfit))) {
      base = Number(cleanProfit) * 4.5;
    }
    const formatCurrency = (num) => {
      if (num >= 1e6) return "$" + (num / 1e6).toFixed(1) + "M";
      if (num >= 1e3) return "$" + (num / 1e3).toFixed(0) + "K";
      return "$" + num;
    };
    const low = formatCurrency(base * 0.8);
    const high = formatCurrency(base * 1.25);
    setValuationRange(`${low} \u2014 ${high}`);
    setStep(5);
  };
  const handleNext = (e) => {
    e.preventDefault();
    if (step === 4) {
      calculateValuation();
    } else {
      setStep((s) => s + 1);
    }
  };
  return /* @__PURE__ */ jsxs3("section", { id: "valuation-engine", className: "py-24 md:py-32 px-6 relative border-t border-white/5 overflow-hidden", children: [
    /* @__PURE__ */ jsx3(AnimatedDataFlow, {}),
    /* @__PURE__ */ jsxs3("div", { className: "max-w-4xl mx-auto w-full relative z-10", children: [
      /* @__PURE__ */ jsxs3("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx3(
          motion3.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "text-xs font-mono uppercase tracking-widest text-white/50 mb-4",
            children: "Most owners undervalue their business."
          }
        ),
        /* @__PURE__ */ jsx3(
          motion3.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6, delay: 0.1 },
            className: "text-3xl md:text-5xl font-display tracking-tighter mb-6",
            children: "Valuation Engine."
          }
        ),
        /* @__PURE__ */ jsxs3(
          motion3.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6, delay: 0.2 },
            className: "flex flex-col gap-8 items-center",
            children: [
              /* @__PURE__ */ jsx3("p", { className: "text-lg md:text-xl text-muted font-light tracking-wide max-w-xl mx-auto", children: "Get a realistic valuation in minutes \u2014 before you leave money on the table." }),
              /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-foreground/80 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full w-max mx-auto", children: [
                /* @__PURE__ */ jsx3("span", { className: `w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-80 ${isMobile ? "" : "animate-pulse"}` }),
                "Serious buyers are actively acquiring right now."
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-3xl p-8 md:p-16 min-h-[400px] flex flex-col justify-center relative overflow-hidden backdrop-blur-xl shadow-2xl", children: [
        /* @__PURE__ */ jsx3("div", { className: "absolute inset-0 z-0 opacity-20 pointer-events-none", children: /* @__PURE__ */ jsx3(
          "img",
          {
            src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
            alt: "Texture",
            className: "w-full h-full object-cover mix-blend-overlay filter contrast-150 grayscale invert-0",
            referrerPolicy: "no-referrer",
            width: 1200,
            height: 800,
            loading: "lazy"
          }
        ) }),
        /* @__PURE__ */ jsx3("div", { className: "absolute top-0 left-0 w-full h-1 bg-white/5 z-10", children: /* @__PURE__ */ jsx3(
          motion3.div,
          {
            className: "h-full bg-white transition-all duration-500",
            style: { width: `${step / 5 * 100}%` }
          }
        ) }),
        /* @__PURE__ */ jsxs3("div", { className: "relative z-10 w-full flex flex-col lg:flex-row gap-16 lg:items-center", children: [
          /* @__PURE__ */ jsx3("div", { className: "w-full lg:w-1/2", children: /* @__PURE__ */ jsxs3(AnimatePresence2, { mode: "wait", children: [
            step === 1 && /* @__PURE__ */ jsxs3(
              motion3.form,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.4 },
                onSubmit: handleNext,
                className: "w-full max-w-xl mx-auto flex flex-col gap-8",
                children: [
                  /* @__PURE__ */ jsxs3("div", { children: [
                    /* @__PURE__ */ jsx3("label", { className: "text-xs uppercase tracking-widest text-muted block mb-4", children: "Step 1: Financials" }),
                    /* @__PURE__ */ jsx3("h3", { className: "text-2xl md:text-4xl font-display tracking-tighter mb-4", children: "What is your Annual Revenue?" })
                  ] }),
                  /* @__PURE__ */ jsx3(
                    "input",
                    {
                      autoFocus: true,
                      required: true,
                      type: "text",
                      value: revenue,
                      onChange: (e) => setRevenue(e.target.value),
                      placeholder: "e.g. $5,000,000",
                      className: "w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-display placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                    }
                  ),
                  /* @__PURE__ */ jsx3("button", { type: "submit", className: "self-start px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 mt-4 shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]", children: "Continue \u2192" })
                ]
              },
              "step1"
            ),
            step === 2 && /* @__PURE__ */ jsxs3(
              motion3.form,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.4 },
                onSubmit: handleNext,
                className: "w-full max-w-xl mx-auto flex flex-col gap-8",
                children: [
                  /* @__PURE__ */ jsxs3("div", { children: [
                    /* @__PURE__ */ jsx3("button", { type: "button", onClick: () => setStep(1), className: "text-xs uppercase tracking-widest text-muted hover:text-white mb-4 block", children: "\u2190 Back" }),
                    /* @__PURE__ */ jsx3("h3", { className: "text-2xl md:text-4xl font-display tracking-tighter mb-4", children: "What is your Net Profit?" })
                  ] }),
                  /* @__PURE__ */ jsx3(
                    "input",
                    {
                      autoFocus: true,
                      required: true,
                      type: "text",
                      value: profit,
                      onChange: (e) => setProfit(e.target.value),
                      placeholder: "e.g. $1,200,000",
                      className: "w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-display placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                    }
                  ),
                  /* @__PURE__ */ jsx3("button", { type: "submit", className: "self-start px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 mt-4 shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]", children: "Continue \u2192" })
                ]
              },
              "step2"
            ),
            step === 3 && /* @__PURE__ */ jsxs3(
              motion3.form,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.4 },
                onSubmit: handleNext,
                className: "w-full max-w-xl mx-auto flex flex-col gap-8",
                children: [
                  /* @__PURE__ */ jsxs3("div", { children: [
                    /* @__PURE__ */ jsx3("button", { type: "button", onClick: () => setStep(2), className: "text-xs uppercase tracking-widest text-muted hover:text-white mb-4 block", children: "\u2190 Back" }),
                    /* @__PURE__ */ jsx3("h3", { className: "text-2xl md:text-4xl font-display tracking-tighter mb-4", children: "Select your Industry." })
                  ] }),
                  /* @__PURE__ */ jsxs3(
                    "select",
                    {
                      required: true,
                      value: industry,
                      onChange: (e) => setIndustry(e.target.value),
                      className: "w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl font-display focus:outline-none focus:border-white transition-colors [&>option]:text-black",
                      children: [
                        /* @__PURE__ */ jsx3("option", { value: "", disabled: true, children: "Choose sector..." }),
                        /* @__PURE__ */ jsx3("option", { value: "saas", children: "Software / SaaS" }),
                        /* @__PURE__ */ jsx3("option", { value: "manufacturing", children: "Manufacturing" }),
                        /* @__PURE__ */ jsx3("option", { value: "ecommerce", children: "E-commerce" }),
                        /* @__PURE__ */ jsx3("option", { value: "healthcare", children: "Healthcare" }),
                        /* @__PURE__ */ jsx3("option", { value: "services", children: "Professional Services" }),
                        /* @__PURE__ */ jsx3("option", { value: "other", children: "Other" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx3("button", { type: "submit", className: "self-start px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 mt-4 shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]", children: "Continue \u2192" })
                ]
              },
              "step3"
            ),
            step === 4 && /* @__PURE__ */ jsxs3(
              motion3.form,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.4 },
                onSubmit: handleNext,
                className: "w-full max-w-xl mx-auto flex flex-col gap-8",
                children: [
                  /* @__PURE__ */ jsxs3("div", { children: [
                    /* @__PURE__ */ jsx3("button", { type: "button", onClick: () => setStep(3), className: "text-xs uppercase tracking-widest text-muted hover:text-white mb-4 block", children: "\u2190 Back" }),
                    /* @__PURE__ */ jsx3("h3", { className: "text-2xl md:text-4xl font-display tracking-tighter mb-4", children: "Years in operation?" })
                  ] }),
                  /* @__PURE__ */ jsx3(
                    "input",
                    {
                      autoFocus: true,
                      required: true,
                      type: "text",
                      value: years,
                      onChange: (e) => setYears(e.target.value),
                      placeholder: "e.g. 5",
                      className: "w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-display placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                    }
                  ),
                  /* @__PURE__ */ jsx3("button", { type: "submit", className: "self-start px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 mt-4 shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]", children: "Calculate Valuation" })
                ]
              },
              "step4"
            ),
            step === 5 && /* @__PURE__ */ jsxs3(
              motion3.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.6 },
                className: "w-full max-w-2xl mx-auto text-center flex flex-col items-center gap-8 py-4",
                children: [
                  /* @__PURE__ */ jsxs3("div", { children: [
                    /* @__PURE__ */ jsx3("div", { className: "text-xs uppercase tracking-widest text-muted mb-4", children: "Estimated Range" }),
                    /* @__PURE__ */ jsx3("div", { className: "text-5xl md:text-7xl font-display tracking-tighter text-foreground mb-6", children: valuationRange }),
                    /* @__PURE__ */ jsx3("div", { className: "text-xs font-mono tracking-widest text-white/40 uppercase", children: "Benchmarked against real transactions and industry standards" })
                  ] }),
                  /* @__PURE__ */ jsx3("p", { className: "text-lg lg:text-xl text-muted font-light tracking-wide max-w-lg mt-4 mb-4", children: "We help you package and sell your business to serious buyers." }),
                  /* @__PURE__ */ jsx3(
                    Link2,
                    {
                      to: "/contact",
                      className: "px-10 py-5 bg-white text-black text-sm tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 inline-block shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]",
                      children: "Contact Our Advisors"
                    }
                  ),
                  /* @__PURE__ */ jsx3("button", { onClick: () => setStep(1), className: "text-xs uppercase tracking-widest text-muted hover:text-white mt-4 pb-1 border-b border-white/20", children: "Recalculate" })
                ]
              },
              "step5"
            )
          ] }) }),
          step < 5 && /* @__PURE__ */ jsx3("div", { className: "hidden lg:flex w-full lg:w-1/2 flex-col gap-6", children: /* @__PURE__ */ jsxs3("div", { className: "relative w-full h-[320px] rounded-2xl border border-white/5 bg-zinc-950/60 p-6 flex flex-col justify-between overflow-hidden shadow-2xl", children: [
            /* @__PURE__ */ jsx3("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#local_03_1px,transparent_1px),linear-gradient(to_bottom,#local_03_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" }),
            /* @__PURE__ */ jsxs3("div", { className: "relative z-10 flex justify-between items-start", children: [
              /* @__PURE__ */ jsxs3("div", { children: [
                /* @__PURE__ */ jsx3("div", { className: "text-[10px] uppercase font-mono tracking-widest text-muted mb-1", children: "Live Multiples Matrix" }),
                /* @__PURE__ */ jsx3("div", { className: "text-xl font-display text-white", children: "Market Baseline" })
              ] }),
              /* @__PURE__ */ jsx3("div", { className: "px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-emerald-400", children: "Syncing" })
            ] }),
            /* @__PURE__ */ jsx3("div", { className: "relative z-10 flex items-end gap-2 h-32 mt-8", children: [30, 45, 55, 40, 75, 60, 90, 85, 100].map((h, i) => /* @__PURE__ */ jsx3(
              motion3.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: `${h}%`, opacity: 1 },
                transition: { duration: 1, delay: i * 0.1, ease: "easeOut" },
                className: `w-full rounded-t-sm ${i === 8 ? "bg-white opacity-90" : "bg-white/10"}`
              },
              i
            )) }),
            /* @__PURE__ */ jsxs3("div", { className: "relative z-10 border-t border-white/10 pt-4 flex justify-between items-center mt-4", children: [
              /* @__PURE__ */ jsx3("div", { className: "text-xs text-muted font-mono", children: "EBITDA Analysis" }),
              /* @__PURE__ */ jsx3("div", { className: "text-xs text-white/60 font-mono", children: "Avg. 5.2x" })
            ] })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
var init_ValuationEngine = __esm({
  "src/components/ValuationEngine.tsx"() {
    init_AnimatedDataFlow();
    init_useIsMobile();
  }
});

// src/components/Animated.tsx
import { motion as motion4 } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { jsx as jsx4 } from "react/jsx-runtime";
function Animated({ children, variant = "fadeUp", delay = 0, className = "", id }) {
  const isMobile = useIsMobile();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: isMobile ? 0 : 20 },
      visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  };
  return /* @__PURE__ */ jsx4(
    motion4.div,
    {
      ref,
      id,
      initial: "hidden",
      animate: inView ? "visible" : "hidden",
      variants: variants[variant],
      transition: { duration: isMobile ? 0.3 : 0.6, ease: [0.22, 1, 0.36, 1], delay: isMobile ? 0 : delay },
      className,
      children
    }
  );
}
var init_Animated = __esm({
  "src/components/Animated.tsx"() {
    init_useIsMobile();
  }
});

// src/pages/About.tsx
var About_exports = {};
__export(About_exports, {
  default: () => About
});
import { Link as Link4 } from "react-router-dom";
import { TrendingUp, Users, Shield, Target, Building2, BarChart3, Lock, CheckCircle2 } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function About() {
  return /* @__PURE__ */ jsxs6("div", { className: "w-full flex-1", children: [
    /* @__PURE__ */ jsxs6("section", { className: "relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsx7("div", { className: "absolute inset-0 z-0 bg-gradient-to-b from-zinc-900/50 to-transparent" }),
      /* @__PURE__ */ jsx7("div", { className: "absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_60%)]" }),
      /* @__PURE__ */ jsxs6("div", { className: "max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx7(Animated, { variant: "fadeUp", children: /* @__PURE__ */ jsxs6("h1", { className: "text-5xl md:text-8xl font-display tracking-tighter mb-8 text-foreground drop-shadow-sm", children: [
          "Sell Your ",
          /* @__PURE__ */ jsx7("br", {}),
          " Business."
        ] }) }),
        /* @__PURE__ */ jsx7(Animated, { variant: "fadeUp", delay: 0.1, children: /* @__PURE__ */ jsx7("p", { className: "text-xl md:text-2xl text-muted font-light tracking-wide mb-12 max-w-2xl mx-auto", children: "AI Exit Advisors helps business owners sell their companies by connecting them with qualified buyers and managing the deal process from start to finish." }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx7("section", { className: "py-24 px-6 border-y border-white/5 bg-white/5", children: /* @__PURE__ */ jsx7("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsxs6(Animated, { variant: "fadeUp", children: [
      /* @__PURE__ */ jsx7("h2", { className: "text-3xl md:text-5xl font-display tracking-tighter mb-6", children: '"We don\u2019t just list businesses. We sell them."' }),
      /* @__PURE__ */ jsx7("div", { className: "text-xs uppercase tracking-widest text-muted font-mono", children: "\u2014 The AI Exit Advisors Philosophy" })
    ] }) }) }),
    /* @__PURE__ */ jsx7("section", { className: "py-24 md:py-32 px-6", children: /* @__PURE__ */ jsxs6("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx7("div", { className: "mb-16", children: /* @__PURE__ */ jsxs6(Animated, { variant: "fadeUp", children: [
        /* @__PURE__ */ jsx7("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-4 border-l border-foreground pl-4", children: "Target Mandates" }),
        /* @__PURE__ */ jsx7("h2", { className: "text-4xl md:text-5xl font-display tracking-tighter", children: "Who We Represent" })
      ] }) }),
      /* @__PURE__ */ jsx7("div", { className: "grid md:grid-cols-3 gap-6", children: [
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
      ].map((item, i) => /* @__PURE__ */ jsxs6(
        Animated,
        {
          delay: i * 0.1,
          variant: "fadeUp",
          className: "p-8 md:p-12 border border-white/10 rounded-3xl bg-zinc-950 flex flex-col gap-6",
          children: [
            /* @__PURE__ */ jsx7("div", { className: "w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center", children: /* @__PURE__ */ jsx7(item.icon, { className: "w-5 h-5 text-foreground" }) }),
            /* @__PURE__ */ jsxs6("div", { children: [
              /* @__PURE__ */ jsx7("h3", { className: "text-2xl font-display tracking-tighter mb-3", children: item.title }),
              /* @__PURE__ */ jsx7("p", { className: "text-muted leading-relaxed font-light", children: item.desc })
            ] })
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsxs6("div", { className: "mt-12 text-center text-sm font-mono tracking-widest uppercase text-muted", children: [
        /* @__PURE__ */ jsx7("span", { className: "text-foreground", children: "Typical Scale:" }),
        " $2M \u2014 $50M+ Valuation Target"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx7("section", { className: "py-24 md:py-32 px-6 border-t border-white/5 bg-zinc-950/50", children: /* @__PURE__ */ jsx7("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs6("div", { className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center", children: [
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsxs6(Animated, { variant: "fadeUp", children: [
          /* @__PURE__ */ jsx7("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-4 border-l border-foreground pl-4", children: "The AI Exit Edge" }),
          /* @__PURE__ */ jsx7("h2", { className: "text-4xl md:text-5xl font-display tracking-tighter mb-8", children: "Why founders choose us over traditional brokers." }),
          /* @__PURE__ */ jsx7("p", { className: "text-lg text-muted font-light leading-relaxed mb-8", children: "The difference between listing a business and selling it is execution. We source qualified buyers, manage the narrative, and close the deal." })
        ] }),
        /* @__PURE__ */ jsx7("div", { className: "flex flex-col gap-8", children: [
          { title: "Pre-Sale Preparation", text: "We identify and correct issues months before going to market." },
          { title: "Direct Access to Serious Buyers", text: "Direct lines to Private Equity, family offices, and strategic acquirers globally." },
          { title: "Discrete & Confidential", text: "Zero public listings. Strict NDAs and targeted outreach to protect your brand." }
        ].map((edge, i) => /* @__PURE__ */ jsxs6(Animated, { delay: 0.2 + i * 0.1, variant: "fadeUp", className: "flex gap-4", children: [
          /* @__PURE__ */ jsx7("div", { className: "mt-1", children: /* @__PURE__ */ jsx7("div", { className: "w-1.5 h-1.5 rounded-full bg-foreground" }) }),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx7("h4", { className: "text-lg font-medium tracking-tight mb-2", children: edge.title }),
            /* @__PURE__ */ jsx7("p", { className: "text-muted font-light", children: edge.text })
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "grid sm:grid-cols-2 gap-6 relative", children: [
        /* @__PURE__ */ jsxs6(Animated, { variant: "fadeUp", delay: 0.1, className: "p-8 border border-white/10 rounded-3xl bg-zinc-950 shadow-sm flex flex-col gap-4", children: [
          /* @__PURE__ */ jsx7(Shield, { className: "w-6 h-6 text-emerald-400" }),
          /* @__PURE__ */ jsx7("h4", { className: "font-medium", children: "Founder-First Defense" }),
          /* @__PURE__ */ jsx7("p", { className: "text-sm text-muted", children: "We rigorously defend your terms, securing cash-at-close and preventing predatory earn-outs." })
        ] }),
        /* @__PURE__ */ jsxs6(Animated, { variant: "fadeUp", delay: 0.2, className: "p-8 border border-white/10 rounded-3xl bg-zinc-950 shadow-sm flex flex-col gap-4 translate-y-0 sm:translate-y-12", children: [
          /* @__PURE__ */ jsx7(TrendingUp, { className: "w-6 h-6 text-blue-400" }),
          /* @__PURE__ */ jsx7("h4", { className: "font-medium", children: "Data-Driven Pricing" }),
          /* @__PURE__ */ jsx7("p", { className: "text-sm text-muted", children: "We use real market data to justify and defend your company's value." })
        ] }),
        /* @__PURE__ */ jsxs6(Animated, { variant: "fadeUp", delay: 0.3, className: "p-8 border border-white/10 rounded-3xl bg-zinc-950 shadow-sm flex flex-col gap-4", children: [
          /* @__PURE__ */ jsx7(Users, { className: "w-6 h-6 text-amber-400" }),
          /* @__PURE__ */ jsx7("h4", { className: "font-medium", children: "Long-Term Partnerships" }),
          /* @__PURE__ */ jsx7("p", { className: "text-sm text-muted", children: "We advise you from day one, through diligence, and well past the closing wire." })
        ] }),
        /* @__PURE__ */ jsxs6(Animated, { variant: "fadeUp", delay: 0.4, className: "p-8 border border-white/10 rounded-3xl bg-zinc-950 shadow-sm flex flex-col gap-4 translate-y-0 sm:translate-y-12", children: [
          /* @__PURE__ */ jsx7(Lock, { className: "w-6 h-6 text-purple-400" }),
          /* @__PURE__ */ jsx7("h4", { className: "font-medium", children: "Total Discretion" }),
          /* @__PURE__ */ jsx7("p", { className: "text-sm text-muted", children: "Your competitors, employees, and customers will never know until the deal is finalized." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx7("section", { className: "py-24 md:py-32 px-6 border-t border-white/5", children: /* @__PURE__ */ jsx7("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs6("div", { className: "flex flex-col lg:flex-row gap-16 lg:gap-24 items-center", children: [
      /* @__PURE__ */ jsx7(Animated, { variant: "fadeUp", className: "w-full lg:w-5/12 flex justify-center lg:justify-end", children: /* @__PURE__ */ jsxs6("div", { className: "relative w-full max-w-[400px]", children: [
        /* @__PURE__ */ jsx7("div", { className: "aspect-[4/5] relative z-10 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.03)] text-transparent rounded-xl", children: /* @__PURE__ */ jsx7(
          "img",
          {
            src: "/images/john.webp",
            alt: "Principal Advisor",
            className: "w-full h-full object-cover rounded-xl shadow-lg",
            loading: "lazy",
            width: 400,
            height: 500
          }
        ) }),
        /* @__PURE__ */ jsx7("div", { className: "absolute -bottom-6 -left-6 w-full h-full border border-white/10 rounded-xl -z-10" })
      ] }) }),
      /* @__PURE__ */ jsxs6("div", { className: "w-full lg:w-7/12 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxs6(Animated, { variant: "fadeUp", children: [
          /* @__PURE__ */ jsx7("h3", { className: "text-3xl md:text-5xl font-display tracking-tighter mb-2", children: "John Bela" }),
          /* @__PURE__ */ jsx7("div", { className: "text-sm font-mono uppercase tracking-widest text-muted mb-8", children: "Principal Advisor, AI Exit Advisors" }),
          /* @__PURE__ */ jsxs6("div", { className: "space-y-5 text-lg text-muted font-light leading-relaxed mb-8 max-w-2xl", children: [
            /* @__PURE__ */ jsx7("p", { children: "Advises on selling businesses, buyer sourcing, and deal execution across SaaS, DTC, and service-based businesses. Founded AI Exit Advisors in 2026 to apply AI-driven systems to the business brokerage process. The firm focuses on increasing buyer flow, improving deal quality, and reducing time to close through structured, data-backed execution." }),
            /* @__PURE__ */ jsx7("p", { children: "Background spans sales, operations, and business ownership across healthcare, SaaS, energy, and service industries. Includes experience in building and operating businesses, along with high-touch sales across outbound, paid acquisition, and enterprise deal cycles." }),
            /* @__PURE__ */ jsxs6("p", { children: [
              "Previously founded The Chief AI Office, where proprietary systems were built to automate business development and pipeline generation. These systems generated over ",
              /* @__PURE__ */ jsx7("span", { className: "font-medium text-foreground", children: "$5M" }),
              " in qualified opportunities within two months and supported high-value contract closures, including deals exceeding ",
              /* @__PURE__ */ jsx7("span", { className: "font-medium text-foreground", children: "$250K" }),
              "."
            ] }),
            /* @__PURE__ */ jsxs6("p", { children: [
              "Leads a team of 12 applying these systems to business brokerage, supporting transactions ranging from ",
              /* @__PURE__ */ jsx7("span", { className: "font-medium text-foreground", children: "$10K to $10M+" }),
              ". Approach is direct and performance-focused \u2014 combining sales discipline with automation to create consistent buyer demand, stronger positioning, and higher exit multiples."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx7(Animated, { variant: "fadeUp", delay: 0.1, className: "mb-10", children: /* @__PURE__ */ jsx7("ul", { className: "flex flex-col gap-4", children: [
          "Targeted Deal Focus: $2M \u2014 $50M+ range",
          "Specialization: SaaS, DTC, and Tech-Enabled Agencies",
          "Data-driven, real-time market multiple modeling",
          "Direct access to vetted global buyer networks"
        ].map((bullet, i) => /* @__PURE__ */ jsxs6("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx7(CheckCircle2, { className: "w-5 h-5 text-foreground/50 shrink-0" }),
          /* @__PURE__ */ jsx7("span", { className: "text-foreground tracking-wide font-light", children: bullet })
        ] }, i)) }) }),
        /* @__PURE__ */ jsx7("div", { className: "w-full h-px bg-white/10 mb-8" }),
        /* @__PURE__ */ jsx7(Animated, { variant: "fadeUp", delay: 0.2, children: /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-6 p-5 border border-white/10 rounded-2xl bg-zinc-900 inline-flex shadow-sm", children: [
          /* @__PURE__ */ jsx7(
            "img",
            {
              src: "/images/certificate.webp",
              alt: "Business Broker Certification",
              className: "w-28 h-28 object-contain rounded-lg bg-white p-1.5 shrink-0 border border-black/5",
              loading: "lazy",
              width: 112,
              height: 112
            }
          ),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx7("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-1", children: "Certification" }),
            /* @__PURE__ */ jsx7("div", { className: "font-medium tracking-tight text-foreground", children: "Business Broker Training Certification" }),
            /* @__PURE__ */ jsx7("div", { className: "text-sm text-foreground/70 font-light", children: "FastStart Program \u2022 Completed April 2026" })
          ] })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx7("section", { className: "py-24 md:py-32 px-6", children: /* @__PURE__ */ jsxs6("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx7("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxs6(Animated, { variant: "fadeUp", children: [
        /* @__PURE__ */ jsx7("h2", { className: "text-4xl md:text-5xl font-display tracking-tighter mb-4", children: "The Exit Protocol" }),
        /* @__PURE__ */ jsx7("p", { className: "text-lg text-muted font-light max-w-2xl mx-auto", children: "A rigid, structured process designed to create buyer competition." })
      ] }) }),
      /* @__PURE__ */ jsx7("div", { className: "space-y-6", children: [
        { num: "01", title: "Valuation & Audit", text: "Deep financial analysis to establish a defensible baseline and identify immediate value levers." },
        { num: "02", title: "Asset Preparation", text: "Crafting the Confidential Information Memorandum (CIM) and building the data room." },
        { num: "03", title: "Targeted Outreach", text: "Quietly approaching our vetted network of acquirers to gauge interest and secure NDAs." },
        { num: "04", title: "Bidding & Negotiation", text: "Creating an auction environment to drive up multiples and improve deal structure." },
        { num: "05", title: "Diligence & Closing", text: "Managing the legal, technical, and financial diligence process through to the wire transfer." }
      ].map((step, i) => /* @__PURE__ */ jsxs6(
        Animated,
        {
          delay: i * 0.1,
          variant: "fadeUp",
          className: "flex items-start gap-6 p-6 md:p-8 border border-white/5 rounded-2xl bg-zinc-950/50 hover:border-white/20 transition-colors",
          children: [
            /* @__PURE__ */ jsx7("div", { className: "text-2xl md:text-3xl font-display text-muted/50 w-12 shrink-0", children: step.num }),
            /* @__PURE__ */ jsxs6("div", { children: [
              /* @__PURE__ */ jsx7("h3", { className: "text-xl font-medium tracking-tight mb-2", children: step.title }),
              /* @__PURE__ */ jsx7("p", { className: "text-muted font-light", children: step.text })
            ] })
          ]
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs6("section", { className: "py-32 md:py-48 px-6 text-center border-t border-white/5 relative overflow-hidden bg-zinc-950", children: [
      /* @__PURE__ */ jsx7("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" }),
      /* @__PURE__ */ jsxs6("div", { className: "max-w-4xl mx-auto relative z-10 flex flex-col items-center", children: [
        /* @__PURE__ */ jsx7(Animated, { variant: "fadeUp", children: /* @__PURE__ */ jsx7("h2", { className: "text-4xl md:text-6xl font-display tracking-tighter mb-6 text-foreground drop-shadow-sm", children: "Understand Your Value Today." }) }),
        /* @__PURE__ */ jsx7(Animated, { variant: "fadeUp", delay: 0.1, children: /* @__PURE__ */ jsx7("p", { className: "text-lg md:text-xl text-muted font-light tracking-wide mb-12", children: "Get a confidential, no-obligation valuation from our advisory team." }) }),
        /* @__PURE__ */ jsx7(Animated, { variant: "fadeUp", delay: 0.2, children: /* @__PURE__ */ jsx7(
          Link4,
          {
            to: "/contact",
            className: "px-10 py-5 bg-white text-black text-sm tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-lg inline-block",
            children: "Get Free Valuation"
          }
        ) })
      ] })
    ] })
  ] });
}
var init_About = __esm({
  "src/pages/About.tsx"() {
    init_Animated();
  }
});

// src/pages/Contact.tsx
var Contact_exports = {};
__export(Contact_exports, {
  default: () => Contact
});
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function Contact() {
  return /* @__PURE__ */ jsx8("div", { className: "w-full flex-1 pt-32 pb-24 px-6 md:pt-40", children: /* @__PURE__ */ jsxs7("div", { className: "max-w-4xl mx-auto flex flex-col gap-24", children: [
    /* @__PURE__ */ jsx8(Animated, { variant: "fadeUp", children: /* @__PURE__ */ jsxs7("div", { className: "text-center border-b border-white/10 pb-16", children: [
      /* @__PURE__ */ jsx8("h1", { className: "text-5xl md:text-7xl font-display tracking-tighter mb-6 text-foreground", children: "Start Your Exit Process" }),
      /* @__PURE__ */ jsx8("p", { className: "text-xl text-muted font-light tracking-wide max-w-2xl mx-auto mb-10", children: "Request a confidential business valuation and speak with an advisor." }),
      /* @__PURE__ */ jsx8(
        "button",
        {
          onClick: () => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" }),
          className: "px-10 py-5 bg-foreground text-background text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] inline-block shadow-[0_8px_30px_-4px_rgba(255,255,255,0.08)] hover:shadow-[0_12px_40px_-4px_rgba(255,255,255,0.12)]",
          children: "Get Free Valuation"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx8(Animated, { variant: "fadeUp", delay: 0.1, children: /* @__PURE__ */ jsxs7("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center", children: [
      /* @__PURE__ */ jsxs7("div", { className: "flex flex-col items-center p-10 bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out hover:-translate-y-1", children: [
        /* @__PURE__ */ jsx8("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-4 opacity-70", children: "Location" }),
        /* @__PURE__ */ jsx8("div", { className: "text-lg text-foreground font-light", children: "Las Vegas, Nevada, US" })
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "flex flex-col items-center p-10 bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out hover:-translate-y-1", children: [
        /* @__PURE__ */ jsx8("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-4 opacity-70", children: "Phone" }),
        /* @__PURE__ */ jsx8("div", { className: "text-lg text-foreground font-light", children: "+1 (725) 304-6728" })
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "flex flex-col items-center p-10 bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out hover:-translate-y-1", children: [
        /* @__PURE__ */ jsx8("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-4 opacity-70", children: "Email" }),
        /* @__PURE__ */ jsx8("a", { href: "mailto:info@aiexitadvisors.com?subject=Business%20Valuation%20Inquiry", className: "text-lg text-foreground font-light hover:opacity-70 transition-opacity", children: "info@aiexitadvisors.com" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx8(Animated, { variant: "fadeUp", delay: 0.2, id: "contact-form", className: "scroll-mt-32", children: /* @__PURE__ */ jsx8("div", { className: "max-w-2xl mx-auto w-full p-8 md:p-12 bg-white/[0.02] backdrop-blur-[20px] rounded-[2rem] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]", children: /* @__PURE__ */ jsxs7("form", { className: "space-y-8", onSubmit: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsxs7("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs7("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx8("label", { className: "text-xs uppercase tracking-widest text-muted pl-1", children: "Full Name" }),
          /* @__PURE__ */ jsx8("input", { required: true, type: "text", placeholder: "John Doe", className: "w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors text-foreground" })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx8("label", { className: "text-xs uppercase tracking-widest text-muted pl-1", children: "Email" }),
          /* @__PURE__ */ jsx8("input", { required: true, type: "email", placeholder: "john@example.com", className: "w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors text-foreground" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs7("div", { className: "space-y-2 relative", children: [
          /* @__PURE__ */ jsx8("label", { className: "text-xs uppercase tracking-widest text-muted pl-1", children: "Business Type" }),
          /* @__PURE__ */ jsxs7("select", { required: true, defaultValue: "", className: "w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors text-foreground appearance-none cursor-pointer rounded-none", children: [
            /* @__PURE__ */ jsx8("option", { value: "", disabled: true, className: "bg-zinc-900", children: "Select Type" }),
            /* @__PURE__ */ jsx8("option", { value: "SaaS", className: "bg-zinc-900", children: "SaaS" }),
            /* @__PURE__ */ jsx8("option", { value: "DTC", className: "bg-zinc-900", children: "DTC" }),
            /* @__PURE__ */ jsx8("option", { value: "Agency", className: "bg-zinc-900", children: "Agency" }),
            /* @__PURE__ */ jsx8("option", { value: "Other", className: "bg-zinc-900", children: "Other" })
          ] }),
          /* @__PURE__ */ jsx8("div", { className: "absolute right-2 top-11 pointer-events-none text-muted", children: "\u25BC" })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx8("label", { className: "text-xs uppercase tracking-widest text-muted pl-1", children: "Estimated Revenue" }),
          /* @__PURE__ */ jsx8("input", { required: true, type: "text", placeholder: "e.g. $2.5M", className: "w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors text-foreground" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx8("label", { className: "text-xs uppercase tracking-widest text-muted pl-1", children: "Message" }),
        /* @__PURE__ */ jsx8("textarea", { required: true, placeholder: "Tell us about your business and goals...", className: "w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors min-h-[120px] resize-y text-foreground" })
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "pt-8 text-center flex flex-col items-center", children: [
        /* @__PURE__ */ jsx8("button", { type: "submit", className: "px-10 py-5 bg-foreground text-background text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] w-full shadow-[0_8px_30px_-4px_rgba(255,255,255,0.08)] hover:shadow-[0_12px_40px_-4px_rgba(255,255,255,0.12)]", children: "Request Confidential Valuation" }),
        /* @__PURE__ */ jsx8("p", { className: "mt-6 text-sm text-muted font-light tracking-wide opacity-80", children: "We review every inquiry personally. All conversations are strictly confidential." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs7(Animated, { variant: "fadeUp", delay: 0.3, className: "pt-24 border-t border-white/10", children: [
      /* @__PURE__ */ jsxs7("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx8("h2", { className: "text-3xl font-display tracking-tighter mb-4 text-foreground", children: "Interactive Valuation" }),
        /* @__PURE__ */ jsx8("p", { className: "text-muted font-light tracking-wide", children: "Prefer an algorithmic baseline right now? Run your numbers through our engine." })
      ] }),
      /* @__PURE__ */ jsx8("div", { className: "px-4", children: /* @__PURE__ */ jsx8(ValuationEngine, {}) })
    ] })
  ] }) });
}
var init_Contact = __esm({
  "src/pages/Contact.tsx"() {
    init_Animated();
    init_ValuationEngine();
  }
});

// scripts/prerender.ts
import fs from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";

// src/App.tsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router";

// src/components/Layout.tsx
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect as useEffect2, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// src/components/SmoothScroll.tsx
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      // low lerp for smooth but responsive feel
      smoothWheel: true,
      wheelMultiplier: 1
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return null;
}

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Layout.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect2(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] sm:top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[100px] md:blur-[150px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[100px] md:blur-[150px]" })
    ] }),
    /* @__PURE__ */ jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsx("header", { className: "fixed top-0 left-0 right-0 z-50 px-6 py-7 md:py-8 transition-all duration-300 bg-white/[0.04] backdrop-blur-[20px] border-b border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between gap-8 relative z-10", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "relative z-50 hover:opacity-80 transition-opacity flex items-center shrink-0", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/logo.webp",
          alt: "AI Exit Advisors",
          className: "h-14 md:h-16 w-auto object-contain bg-white/95 p-1.5 rounded-md",
          width: 250,
          height: 64,
          loading: "lazy"
        }
      ) }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-6 lg:gap-8 text-[11px] lg:text-xs uppercase tracking-widest font-medium", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: cn("transition-colors", location.pathname === "/" ? "text-foreground" : "text-muted hover:text-foreground"), children: "Home" }),
        /* @__PURE__ */ jsx(Link, { to: "/about", className: cn("transition-colors", location.pathname === "/about" ? "text-foreground" : "text-muted hover:text-foreground"), children: "About" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: cn("transition-colors", location.pathname === "/contact" ? "text-foreground" : "text-muted hover:text-foreground"), children: "Contact" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "ml-2 px-8 py-3.5 bg-foreground text-background rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out shadow-[0_4px_20px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(255,255,255,0.1)]", children: "Get Valuation" })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
          className: "w-10 h-10 flex flex-col justify-center items-end gap-[5px] md:hidden relative z-50 p-2",
          "aria-label": "Toggle Navigation",
          children: [
            /* @__PURE__ */ jsx("span", { className: cn("w-full h-[1px] bg-foreground block origin-center transition-all duration-300", isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : "") }),
            /* @__PURE__ */ jsx("span", { className: cn("w-full h-[1px] bg-foreground block transition-all duration-300", isMobileMenuOpen ? "opacity-0 translate-x-2" : "") }),
            /* @__PURE__ */ jsx("span", { className: cn("w-full h-[1px] bg-foreground block origin-center transition-all duration-300", isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : "") })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.2 },
        className: "fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden",
        children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col items-center justify-center gap-8 text-sm uppercase tracking-widest font-medium w-full px-6", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), className: cn("transition-colors", location.pathname === "/" ? "text-foreground" : "text-muted hover:text-foreground"), children: "Home" }),
          /* @__PURE__ */ jsx(Link, { to: "/about", onClick: () => setIsMobileMenuOpen(false), className: cn("transition-colors", location.pathname === "/about" ? "text-foreground" : "text-muted hover:text-foreground"), children: "About" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", onClick: () => setIsMobileMenuOpen(false), className: cn("transition-colors", location.pathname === "/contact" ? "text-foreground" : "text-muted hover:text-foreground"), children: "Contact" }),
          /* @__PURE__ */ jsx("div", { className: "w-8 h-px bg-white/10 my-2" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", onClick: () => setIsMobileMenuOpen(false), className: "px-10 py-4 bg-foreground text-background text-center rounded-full hover:opacity-90 active:scale-95 transition-all w-full max-w-[280px]", children: "Get Valuation" })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 flex flex-col pt-24", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx("footer", { className: "border-t border-white/5 bg-zinc-950 px-6 pt-20 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start text-left", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "mb-6 hover:opacity-80 transition-opacity inline-block", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/logo.webp",
              alt: "AI Exit Advisors",
              className: "h-10 w-auto object-contain bg-white/95 p-1.5 rounded-md",
              width: 150,
              height: 40,
              loading: "lazy"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted font-light max-w-xs leading-relaxed", children: "Main Street Business Broker | $100K\u2013$10M Transactions" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start md:items-center text-sm font-medium tracking-widest uppercase gap-4 text-muted", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }),
          /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-foreground transition-colors", children: "About" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-foreground transition-colors", children: "Contact" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start md:items-end text-sm text-muted font-light gap-4 md:text-right", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "block text-xs uppercase tracking-widest text-foreground/50 mb-1", children: "Email" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@aiexitadvisors.com?subject=Business%20Valuation%20Inquiry", className: "text-foreground hover:opacity-80 transition-opacity", children: "info@aiexitadvisors.com" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "block text-xs uppercase tracking-widest text-foreground/50 mb-1", children: "Phone" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "+1 (725) 304-6728" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "block text-xs uppercase tracking-widest text-foreground/50 mb-1", children: "Location" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Las Vegas, Nevada, US" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-muted/70 tracking-widest uppercase gap-4 text-center sm:text-left", children: [
        /* @__PURE__ */ jsx("div", { children: "\xA9 2026 AI Exit Advisors." }),
        /* @__PURE__ */ jsx("div", { children: "All rights reserved." })
      ] })
    ] }) })
  ] });
}

// src/pages/Home.tsx
init_ValuationEngine();
init_Animated();
import { motion as motion6, useScroll, useTransform } from "motion/react";
import { LineChart, FileText, Handshake } from "lucide-react";
import { Link as Link3 } from "react-router-dom";
import { useRef } from "react";

// src/components/AnimatedCapitalFlow.tsx
init_useIsMobile();
import { motion as motion5 } from "motion/react";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function AnimatedCapitalFlow() {
  const isMobile = useIsMobile();
  return /* @__PURE__ */ jsxs4("div", { className: "absolute inset-0 z-0 overflow-hidden pointer-events-none select-none", children: [
    /* @__PURE__ */ jsx5("div", { className: "absolute inset-0 transition-colors duration-1000 bg-zinc-950" }),
    /* @__PURE__ */ jsxs4("div", { className: "absolute inset-0 w-full h-full opacity-[0.22] pointer-events-none flex flex-col justify-end", children: [
      /* @__PURE__ */ jsxs4(
        motion5.div,
        {
          animate: { x: isMobile ? "0%" : ["0%", "-50%"] },
          transition: { duration: 30, repeat: Infinity, ease: "linear" },
          className: "absolute inset-x-0 bottom-0 top-[20%] w-[200%] flex blur-[10px]",
          children: [
            /* @__PURE__ */ jsxs4("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 600", children: [
              /* @__PURE__ */ jsx5("path", { d: "M0,300 C250,500 350,150 500,200 C650,250 750,450 1000,300", className: "stroke-amber-400", strokeWidth: "18", vectorEffect: "non-scaling-stroke" }),
              /* @__PURE__ */ jsx5("path", { d: "M0,200 C300,100 400,300 600,250 C800,200 900,50 1000,200", className: "stroke-amber-600", strokeWidth: "22", vectorEffect: "non-scaling-stroke" }),
              /* @__PURE__ */ jsx5("path", { d: "M0,450 C200,550 400,350 550,400 C700,450 850,550 1000,450", className: "stroke-yellow-600", strokeWidth: "16", vectorEffect: "non-scaling-stroke" })
            ] }),
            /* @__PURE__ */ jsxs4("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 600", children: [
              /* @__PURE__ */ jsx5("path", { d: "M0,300 C250,500 350,150 500,200 C650,250 750,450 1000,300", className: "stroke-amber-400", strokeWidth: "18", vectorEffect: "non-scaling-stroke" }),
              /* @__PURE__ */ jsx5("path", { d: "M0,200 C300,100 400,300 600,250 C800,200 900,50 1000,200", className: "stroke-amber-600", strokeWidth: "22", vectorEffect: "non-scaling-stroke" }),
              /* @__PURE__ */ jsx5("path", { d: "M0,450 C200,550 400,350 550,400 C700,450 850,550 1000,450", className: "stroke-yellow-600", strokeWidth: "16", vectorEffect: "non-scaling-stroke" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs4(
        motion5.div,
        {
          animate: { x: isMobile ? "0%" : ["0%", "-50%"] },
          transition: { duration: 30, repeat: Infinity, ease: "linear" },
          className: "absolute inset-x-0 bottom-0 top-[20%] w-[200%] flex opacity-[0.85]",
          children: [
            /* @__PURE__ */ jsxs4("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 600", children: [
              /* @__PURE__ */ jsx5("path", { d: "M0,300 C250,500 350,150 500,200 C650,250 750,450 1000,300", className: "stroke-amber-200", strokeWidth: "3", vectorEffect: "non-scaling-stroke" }),
              /* @__PURE__ */ jsx5("path", { d: "M0,200 C300,100 400,300 600,250 C800,200 900,50 1000,200", className: "stroke-amber-500", strokeWidth: "3.5", vectorEffect: "non-scaling-stroke" }),
              /* @__PURE__ */ jsx5("path", { d: "M0,450 C200,550 400,350 550,400 C700,450 850,550 1000,450", className: "stroke-yellow-400", strokeWidth: "2", vectorEffect: "non-scaling-stroke" }),
              /* @__PURE__ */ jsx5("path", { d: "M0,520 C300,580 450,400 600,460 C750,520 850,580 1000,520", className: "stroke-amber-300", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" }),
              /* @__PURE__ */ jsx5("path", { d: "M0,100 C200,50 350,250 550,200 C750,150 850,100 1000,100", className: "stroke-amber-400", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" })
            ] }),
            /* @__PURE__ */ jsxs4("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 600", children: [
              /* @__PURE__ */ jsx5("path", { d: "M0,300 C250,500 350,150 500,200 C650,250 750,450 1000,300", className: "stroke-amber-200", strokeWidth: "3", vectorEffect: "non-scaling-stroke" }),
              /* @__PURE__ */ jsx5("path", { d: "M0,200 C300,100 400,300 600,250 C800,200 900,50 1000,200", className: "stroke-amber-500", strokeWidth: "3.5", vectorEffect: "non-scaling-stroke" }),
              /* @__PURE__ */ jsx5("path", { d: "M0,450 C200,550 400,350 550,400 C700,450 850,550 1000,450", className: "stroke-yellow-400", strokeWidth: "2", vectorEffect: "non-scaling-stroke" }),
              /* @__PURE__ */ jsx5("path", { d: "M0,520 C300,580 450,400 600,460 C750,520 850,580 1000,520", className: "stroke-amber-300", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" }),
              /* @__PURE__ */ jsx5("path", { d: "M0,100 C200,50 350,250 550,200 C750,150 850,100 1000,100", className: "stroke-amber-400", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx5("div", { className: "absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-transparent opacity-90" })
  ] });
}

// src/pages/Home.tsx
init_useIsMobile();
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
function Home() {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const yHero = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 1 : 0]);
  const yBgTexture = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 100]);
  const yBgGrid = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -80]);
  const fadeUp = {
    hidden: { opacity: 0, y: isMobile ? 0 : 40 },
    visible: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.4 : 0.8, ease: [0.16, 1, 0.3, 1] } }
  };
  return /* @__PURE__ */ jsxs5("div", { ref: containerRef, className: "w-full flex-col flex bg-background", children: [
    /* @__PURE__ */ jsxs5("section", { className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-32 pb-24", children: [
      /* @__PURE__ */ jsxs5("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsx6(
          "img",
          {
            src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2560&q=80",
            alt: "Corporate Acquisition Meeting",
            className: "w-full h-full object-cover opacity-20 filter contrast-125 brightness-50 mix-blend-luminosity blur-[2px]",
            referrerPolicy: "no-referrer",
            width: 2560,
            height: 1440,
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx6("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" }),
        /* @__PURE__ */ jsx6("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "absolute inset-0 z-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsx6("div", { className: "absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] mix-blend-screen" }),
        /* @__PURE__ */ jsx6(
          motion6.div,
          {
            style: { y: yBgTexture },
            className: "absolute inset-0 w-full lg:w-[60%] opacity-[0.06] mix-blend-luminosity blur-[1px]",
            children: /* @__PURE__ */ jsx6(
              "img",
              {
                src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
                alt: "",
                className: "w-full h-[150%] object-cover scale-110 grayscale",
                referrerPolicy: "no-referrer",
                width: 1200,
                height: 800,
                loading: "lazy"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx6(
          motion6.div,
          {
            style: { y: yBgGrid },
            className: "absolute top-[-10%] left-[-5%] w-full lg:w-[60%] h-[120%] opacity-[0.05]",
            children: /* @__PURE__ */ jsxs5("svg", { viewBox: "0 0 1000 1000", className: "w-full h-full stroke-white fill-none", preserveAspectRatio: "none", children: [
              /* @__PURE__ */ jsx6("path", { d: "M0,800 L200,600 C300,500 400,700 600,400 C700,250 800,300 1000,100", className: "stroke-[1.5]" }),
              /* @__PURE__ */ jsx6("path", { d: "M0,850 L200,650 C300,550 400,750 600,450 C700,300 800,350 1000,150", className: "stroke-white/20" }),
              Array.from({ length: 15 }).map((_, i) => /* @__PURE__ */ jsx6("line", { x1: "0", y1: i * 80, x2: "1000", y2: i * 80, className: "stroke-white/20 stroke-[0.5]" }, `h${i}`)),
              Array.from({ length: 15 }).map((_, i) => /* @__PURE__ */ jsx6("line", { x1: i * 80, y1: "0", x2: i * 80, y2: "1000", className: "stroke-white/20 stroke-[0.5]" }, `v${i}`))
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs5(
          motion6.div,
          {
            style: { y: yHero, opacity: opacityHero },
            className: "w-full text-left",
            initial: "hidden",
            animate: "visible",
            variants: staggerContainer,
            children: [
              /* @__PURE__ */ jsx6(motion6.div, { variants: fadeUp, className: "mb-4 inline-block", children: /* @__PURE__ */ jsx6("span", { className: "px-3 py-1 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest text-muted", children: "Main Street Brokerage" }) }),
              /* @__PURE__ */ jsxs5(
                motion6.h1,
                {
                  variants: fadeUp,
                  className: "text-5xl md:text-7xl lg:text-[5.5rem] leading-[1] tracking-tighter font-display font-medium text-foreground mb-6",
                  children: [
                    "Sell Your Business ",
                    /* @__PURE__ */ jsx6("br", { className: "hidden md:block" }),
                    /* @__PURE__ */ jsx6("span", { className: "text-white/60", children: "the Right Way." })
                  ]
                }
              ),
              /* @__PURE__ */ jsx6(
                motion6.p,
                {
                  variants: fadeUp,
                  className: "text-lg md:text-2xl text-muted font-light tracking-wide mb-12 max-w-xl leading-relaxed",
                  children: "Main Street business brokerage for owners selling between $100K and $10M."
                }
              ),
              /* @__PURE__ */ jsx6(motion6.div, { variants: fadeUp, className: "flex flex-col sm:flex-row items-center justify-start gap-4", children: /* @__PURE__ */ jsx6(Link3, { to: "/contact", className: "w-full sm:w-auto px-10 py-5 bg-foreground text-background text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center shadow-[0_8px_30px_-4px_rgba(255,255,255,0.08)] hover:shadow-[0_12px_40px_-4px_rgba(255,255,255,0.12)]", children: "Get Free Valuation" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs5(
          motion6.div,
          {
            initial: isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 },
            animate: { opacity: 1, x: 0 },
            transition: isMobile ? { duration: 0 } : { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
            className: "hidden lg:flex relative h-[600px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]",
            children: [
              /* @__PURE__ */ jsx6(
                "img",
                {
                  src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
                  alt: "Data and Strategy",
                  className: "w-full h-full object-cover filter contrast-[1.1] brightness-[0.6] mix-blend-luminosity scale-105",
                  width: 1200,
                  height: 800,
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsx6("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90" }),
              /* @__PURE__ */ jsxs5("div", { className: "absolute bottom-10 left-10 right-10 p-8 bg-white/[0.04] backdrop-blur-[20px] rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]", children: [
                /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-end mb-4", children: [
                  /* @__PURE__ */ jsxs5("div", { children: [
                    /* @__PURE__ */ jsx6("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-1", children: "Target Multiple" }),
                    /* @__PURE__ */ jsx6("div", { className: "text-white text-lg font-mono", children: "4.5x \u2014 6.8x" })
                  ] }),
                  /* @__PURE__ */ jsxs5("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsx6("div", { className: "text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1", children: "Data Depth" }),
                    /* @__PURE__ */ jsx6("div", { className: "text-white font-mono text-sm", children: "High" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx6("div", { className: "w-full h-1 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx6(
                  motion6.div,
                  {
                    initial: { width: isMobile ? "75%" : "0%" },
                    animate: { width: "75%" },
                    transition: { duration: 1.5, delay: 0.8, ease: "easeOut" },
                    className: "h-full bg-white opacity-80"
                  }
                ) })
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx6("section", { className: "py-24 md:py-32 px-6 border-t border-white/5 bg-background", children: /* @__PURE__ */ jsxs5("div", { className: "max-w-4xl mx-auto w-full text-center", children: [
      /* @__PURE__ */ jsx6(Animated, { variant: "fadeUp", children: /* @__PURE__ */ jsx6("h2", { className: "text-3xl md:text-5xl font-display tracking-tighter mb-8 text-foreground drop-shadow-sm", children: "Business Brokerage Services" }) }),
      /* @__PURE__ */ jsx6(Animated, { variant: "fadeUp", delay: 0.1, children: /* @__PURE__ */ jsxs5("div", { className: "space-y-6 text-lg md:text-xl text-muted font-light leading-relaxed", children: [
        /* @__PURE__ */ jsxs5("p", { children: [
          "When it\u2019s time to ",
          /* @__PURE__ */ jsx6("strong", { children: "sell your business" }),
          ", you need a process that protects your time and your confidentiality. As your ",
          /* @__PURE__ */ jsx6("strong", { children: "business broker" }),
          ", we handle the complex sourcing and negotiations, leaving you free to run your company."
        ] }),
        /* @__PURE__ */ jsxs5("p", { children: [
          "Every successful ",
          /* @__PURE__ */ jsx6("strong", { children: "small business sale" }),
          " starts with an accurate pricing strategy. We perform a detailed ",
          /* @__PURE__ */ jsx6("strong", { children: "business valuation" }),
          " to ensure your business is positioned to attract the right buyers at the right price point."
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx6(ValuationEngine, {}),
    /* @__PURE__ */ jsx6("section", { className: "py-24 md:py-32 border-t border-white/5 px-6", children: /* @__PURE__ */ jsxs5("div", { className: "max-w-7xl mx-auto w-full", children: [
      /* @__PURE__ */ jsx6(Animated, { variant: "fadeUp", className: "mb-16 border-b border-white/10 pb-8", children: /* @__PURE__ */ jsx6("h2", { className: "text-3xl md:text-5xl font-display tracking-tighter", children: "Built for Serious Sellers." }) }),
      /* @__PURE__ */ jsx6("div", { className: "grid md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10", children: [
        { title: "Confidential process", desc: "Your identity and sensitive data are strictly protected throughout the entire timeline." },
        { title: "Pre-qualified buyer network", desc: "Deal only with rigorous, vetted capital. We bypass the window shoppers." },
        { title: "End-to-end deal execution", desc: "From packaging the asset to final contract structuring, we manage the close." }
      ].map((stat, i) => /* @__PURE__ */ jsxs5(Animated, { delay: i * 0.15, variant: "fadeUp", className: "pt-8 md:pt-0 md:px-8 first:md:pl-0 last:md:pr-0", children: [
        /* @__PURE__ */ jsxs5("h4", { className: "text-2xl md:text-3xl font-display tracking-tight mb-4", children: [
          stat.title,
          "."
        ] }),
        /* @__PURE__ */ jsx6("p", { className: "text-muted tracking-wide leading-relaxed font-light", children: stat.desc })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxs5("section", { className: "py-24 md:py-32 px-6 border-t border-white/5 relative overflow-hidden bg-background", children: [
      /* @__PURE__ */ jsx6("div", { className: "absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none" }),
      /* @__PURE__ */ jsxs5("div", { className: "max-w-6xl mx-auto w-full relative z-10", children: [
        /* @__PURE__ */ jsxs5(Animated, { variant: "fadeUp", className: "mb-24 text-center", children: [
          /* @__PURE__ */ jsx6("h2", { className: "text-3xl md:text-5xl font-display tracking-tighter", children: "Our Process." }),
          /* @__PURE__ */ jsx6("p", { className: "text-lg text-muted font-light mt-4", children: "Three deliberate steps to a successful exit." })
        ] }),
        /* @__PURE__ */ jsxs5("div", { className: "grid md:grid-cols-3 gap-16 md:gap-8 relative", children: [
          /* @__PURE__ */ jsx6("div", { className: "hidden md:block absolute top-[40px] left-[16.66%] right-[16.66%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" }),
          [
            { num: "01", title: "Valuation", text: "Get your business valued using live market multiples.", Icon: LineChart, hoverClass: "group-hover:scale-[1.15]" },
            { num: "02", title: "Packaging", text: "We package your business for sale as a premium asset.", Icon: FileText, hoverClass: "group-hover:rotate-[-6deg] group-hover:scale-[1.1]" },
            { num: "03", title: "Sale", text: "We match you with serious buyers and close the deal.", Icon: Handshake, hoverClass: "group-hover:-translate-y-1 group-hover:scale-[1.1]" }
          ].map((step, i) => /* @__PURE__ */ jsxs5(
            Animated,
            {
              delay: i * 0.15,
              variant: "fadeUp",
              className: "relative z-10 flex flex-col items-center text-center group",
              children: [
                /* @__PURE__ */ jsxs5("div", { className: "w-20 h-20 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center mb-8 relative group-hover:border-white/30 transition-all duration-200 shadow-2xl", children: [
                  /* @__PURE__ */ jsx6(step.Icon, { className: `w-8 h-8 text-white/50 group-hover:text-white transition-all duration-200 ${step.hoverClass}`, strokeWidth: 1 }),
                  /* @__PURE__ */ jsx6("div", { className: "absolute -top-3 -right-3 text-[10px] font-mono border border-white/10 bg-zinc-900 px-2 py-0.5 rounded-full text-muted group-hover:text-white transition-colors duration-200", children: step.num })
                ] }),
                /* @__PURE__ */ jsx6("h3", { className: "text-2xl font-display tracking-tight text-foreground mb-4", children: step.title }),
                /* @__PURE__ */ jsx6("p", { className: "text-muted tracking-wide leading-relaxed font-light text-sm md:text-base max-w-[250px]", children: step.text })
              ]
            },
            i
          ))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs5("section", { className: "py-24 md:py-32 px-6 border-t border-white/5 bg-zinc-950/20 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs5("div", { className: "absolute inset-0 z-0 opacity-10 pointer-events-none", children: [
        /* @__PURE__ */ jsx6(
          "img",
          {
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2560&auto=format&fit=crop",
            alt: "Corporate Desk",
            className: "w-full h-full object-cover filter contrast-125 brightness-50 grayscale mix-blend-luminosity",
            referrerPolicy: "no-referrer",
            width: 2560,
            height: 1440,
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx6("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10", children: [
        /* @__PURE__ */ jsxs5(Animated, { variant: "fadeUp", className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs5("h2", { className: "text-3xl md:text-5xl font-display tracking-tighter mb-6", children: [
            "We Prepare Your ",
            /* @__PURE__ */ jsx6("br", { className: "hidden md:block" }),
            " Business for Sale."
          ] }),
          /* @__PURE__ */ jsx6("p", { className: "text-lg md:text-xl text-muted font-light tracking-wide max-w-md", children: "We turn your business into a buyer-ready asset." })
        ] }),
        /* @__PURE__ */ jsx6("div", { className: "flex flex-col gap-8", children: [
          "Clean financial presentation",
          "Clear growth story",
          "Structured deal positioning"
        ].map((point, i) => /* @__PURE__ */ jsxs5(
          Animated,
          {
            delay: i * 0.1,
            variant: "fadeUp",
            className: "border-b border-white/10 pb-6 flex items-start gap-6 group hover:border-white/30 transition-colors",
            children: [
              /* @__PURE__ */ jsxs5("span", { className: "text-xs font-mono uppercase tracking-widest text-muted mt-2", children: [
                "0",
                i + 1
              ] }),
              /* @__PURE__ */ jsx6("span", { className: "text-2xl md:text-3xl font-display tracking-tight text-foreground", children: point })
            ]
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs5("section", { className: "py-32 md:py-48 px-6 text-center border-t border-white/5 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx6(AnimatedCapitalFlow, {}),
      /* @__PURE__ */ jsx6("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05)_0%,var(--color-background)_60%)] pointer-events-none" }),
      /* @__PURE__ */ jsxs5("div", { className: "max-w-4xl mx-auto relative z-10 flex flex-col items-center", children: [
        /* @__PURE__ */ jsx6(Animated, { variant: "fadeUp", children: /* @__PURE__ */ jsxs5("h2", { className: "text-4xl md:text-7xl font-display tracking-tighter mb-6 text-foreground drop-shadow-sm", children: [
          "Ready to Find Out ",
          /* @__PURE__ */ jsx6("br", { className: "hidden md:block" }),
          " What It\u2019s Worth?"
        ] }) }),
        /* @__PURE__ */ jsx6(Animated, { variant: "fadeUp", delay: 0.1, children: /* @__PURE__ */ jsx6("p", { className: "text-lg md:text-2xl text-muted font-light tracking-wide mb-12", children: "Start with a valuation. We'll handle the rest." }) }),
        /* @__PURE__ */ jsx6(Animated, { variant: "fadeUp", delay: 0.2, children: /* @__PURE__ */ jsx6("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: /* @__PURE__ */ jsx6(
          "button",
          {
            onClick: () => document.getElementById("valuation-engine")?.scrollIntoView({ behavior: "smooth" }),
            className: "w-full sm:w-auto px-10 py-5 bg-white text-black text-sm tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 flex items-center justify-center shadow-lg",
            children: "Get Free Valuation"
          }
        ) }) })
      ] })
    ] })
  ] });
}

// src/App.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var About2 = lazy(() => Promise.resolve().then(() => (init_About(), About_exports)));
var Contact2 = lazy(() => Promise.resolve().then(() => (init_Contact(), Contact_exports)));
function App({ url }) {
  const isServer = typeof window === "undefined";
  const content = /* @__PURE__ */ jsx9(Suspense, { fallback: /* @__PURE__ */ jsx9("div", { className: "min-h-screen bg-background flex justify-center items-center", children: "Loading..." }), children: /* @__PURE__ */ jsx9(Routes, { children: /* @__PURE__ */ jsxs8(Route, { path: "/", element: /* @__PURE__ */ jsx9(Layout, {}), children: [
    /* @__PURE__ */ jsx9(Route, { index: true, element: /* @__PURE__ */ jsx9(Home, {}) }),
    /* @__PURE__ */ jsx9(Route, { path: "about", element: /* @__PURE__ */ jsx9(About2, {}) }),
    /* @__PURE__ */ jsx9(Route, { path: "contact", element: /* @__PURE__ */ jsx9(Contact2, {}) })
  ] }) }) });
  if (isServer && url) {
    return /* @__PURE__ */ jsx9(StaticRouter, { location: url, children: content });
  }
  return /* @__PURE__ */ jsx9(BrowserRouter, { children: content });
}

// scripts/prerender.ts
var routes = ["/", "/about", "/contact"];
var distPath = path.resolve("dist");
async function build() {
  try {
    const templatePath = path.join(distPath, "index.html");
    const template = await fs.readFile(templatePath, "utf8");
    for (const route of routes) {
      const appHtml = renderToString(React.createElement(App, { url: route }));
      const html = template.replace(
        `<!-- SSR_APP_HTML -->`,
        appHtml
      ).replace(
        `<div id="root"></div>`,
        `<div id="root">${appHtml}</div>`
      );
      const filePath = path.join(
        distPath,
        route === "/" ? "index.html" : `${route.substring(1)}.html`
      );
      await fs.writeFile(filePath, html);
      console.log(`Pre-rendered ${route} to ${filePath}`);
    }
  } catch (error) {
    console.error("Error during pre-rendering:", error);
    process.exit(1);
  }
}
build();
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
