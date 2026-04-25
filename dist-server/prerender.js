import { jsxDEV } from "react/jsx-dev-runtime";
import { renderToString } from "react-dom/server";
import { useLocation, Link, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Lenis from "@studio-freight/lenis";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { LineChart, FileText, Handshake, Target, BarChart3, Building2, Shield, TrendingUp, Users, Lock, CheckCircle2 } from "lucide-react";
import { motion as motion$1 } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const logo = "/assets/logo-BiwY-xB7.png";
function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-[-10%] sm:top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[100px] md:blur-[150px]" }, void 0, false, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[100px] md:blur-[150px]" }, void 0, false, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(SmoothScroll, {}, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "fixed top-0 left-0 right-0 z-50 px-6 py-7 md:py-8 transition-all duration-300 bg-white/[0.04] backdrop-blur-[20px] border-b border-white/10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto flex items-center justify-between gap-8 relative z-10", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "relative z-50 hover:opacity-80 transition-opacity flex items-center shrink-0", children: /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: logo,
          alt: "AI Exit Advisors",
          className: "h-14 md:h-16 w-auto object-contain bg-white/95 p-1.5 rounded-md"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 29,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { className: "hidden md:flex items-center gap-6 lg:gap-8 text-[11px] lg:text-xs uppercase tracking-widest font-medium", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: cn("transition-colors", location.pathname === "/" ? "text-foreground" : "text-muted hover:text-foreground"), children: "Home" }, void 0, false, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/about", className: cn("transition-colors", location.pathname === "/about" ? "text-foreground" : "text-muted hover:text-foreground"), children: "About" }, void 0, false, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: cn("transition-colors", location.pathname === "/contact" ? "text-foreground" : "text-muted hover:text-foreground"), children: "Contact" }, void 0, false, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: "ml-2 px-8 py-3.5 bg-foreground text-background rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out shadow-[0_4px_20px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(255,255,255,0.1)]", children: "Get Valuation" }, void 0, false, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
          className: "w-10 h-10 flex flex-col justify-center items-end gap-[5px] md:hidden relative z-50 p-2",
          "aria-label": "Toggle Navigation",
          children: [
            /* @__PURE__ */ jsxDEV("span", { className: cn("w-full h-[1px] bg-foreground block origin-center transition-all duration-300", isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : "") }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: cn("w-full h-[1px] bg-foreground block transition-all duration-300", isMobileMenuOpen ? "opacity-0 translate-x-2" : "") }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 59,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: cn("w-full h-[1px] bg-foreground block origin-center transition-all duration-300", isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : "") }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 60,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 53,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.2 },
        className: "fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden",
        children: /* @__PURE__ */ jsxDEV("nav", { className: "flex flex-col items-center justify-center gap-8 text-sm uppercase tracking-widest font-medium w-full px-6", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/", onClick: () => setIsMobileMenuOpen(false), className: cn("transition-colors", location.pathname === "/" ? "text-foreground" : "text-muted hover:text-foreground"), children: "Home" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/about", onClick: () => setIsMobileMenuOpen(false), className: cn("transition-colors", location.pathname === "/about" ? "text-foreground" : "text-muted hover:text-foreground"), children: "About" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/contact", onClick: () => setIsMobileMenuOpen(false), className: cn("transition-colors", location.pathname === "/contact" ? "text-foreground" : "text-muted hover:text-foreground"), children: "Contact" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-px bg-white/10 my-2" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/contact", onClick: () => setIsMobileMenuOpen(false), className: "px-10 py-4 bg-foreground text-background text-center rounded-full hover:opacity-90 active:scale-95 transition-all w-full max-w-[280px]", children: "Get Valuation" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 68,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-1 flex flex-col pt-24", children: /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "border-t border-white/5 bg-zinc-950 px-6 pt-20 pb-12", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-start text-left", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "mb-6 hover:opacity-80 transition-opacity inline-block", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: logo,
              alt: "AI Exit Advisors",
              className: "h-10 w-auto object-contain bg-white/95 p-1.5 rounded-md"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 107,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted font-light max-w-xs leading-relaxed", children: "Main Street Business Broker | $100K–$10M Transactions" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 105,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-start md:items-center text-sm font-medium tracking-widest uppercase gap-4 text-muted", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 120,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/about", className: "hover:text-foreground transition-colors", children: "About" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: "hover:text-foreground transition-colors", children: "Contact" }, void 0, false, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-start md:items-end text-sm text-muted font-light gap-4 md:text-right", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("span", { className: "block text-xs uppercase tracking-widest text-foreground/50 mb-1", children: "Email" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 128,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "mailto:info@aiexitadvisors.com?subject=Business%20Valuation%20Inquiry", className: "text-foreground hover:opacity-80 transition-opacity", children: "info@aiexitadvisors.com" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("span", { className: "block text-xs uppercase tracking-widest text-foreground/50 mb-1", children: "Phone" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 132,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: "+1 (725) 304-6728" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("span", { className: "block text-xs uppercase tracking-widest text-foreground/50 mb-1", children: "Location" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 136,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: "Las Vegas, Nevada, US" }, void 0, false, {
              fileName: "/app/applet/src/components/Layout.tsx",
              lineNumber: 137,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/Layout.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-muted/70 tracking-widest uppercase gap-4 text-center sm:text-left", children: [
        /* @__PURE__ */ jsxDEV("div", { children: "© 2026 AI Exit Advisors." }, void 0, false, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: "All rights reserved." }, void 0, false, {
          fileName: "/app/applet/src/components/Layout.tsx",
          lineNumber: 146,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/Layout.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/Layout.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/Layout.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function AnimatedDataFlow() {
  return /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0 overflow-hidden pointer-events-none select-none", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 transition-colors duration-1000 bg-zinc-950" }, void 0, false, {
      fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        animate: {
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
          x: ["0%", "2%", "0%"],
          y: ["0%", "3%", "0%"]
        },
        transition: { duration: 18, repeat: Infinity, ease: "easeInOut" },
        className: "absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] mix-blend-screen bg-amber-600/15"
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
        lineNumber: 10,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        animate: {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: ["0%", "-3%", "0%"],
          y: ["0%", "-2%", "0%"]
        },
        transition: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 },
        className: "absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] mix-blend-screen bg-amber-800/20"
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 w-full h-full opacity-25 blur-xl pointer-events-none", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        animate: { x: ["0%", "-50%"] },
        transition: { duration: 40, repeat: Infinity, ease: "linear" },
        className: "absolute inset-0 w-[200%] h-full flex",
        children: [
          /* @__PURE__ */ jsxDEV("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 1000", children: [
            /* @__PURE__ */ jsxDEV("path", { d: "M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400", className: "stroke-amber-400", strokeWidth: "4", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 39,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600", className: "stroke-amber-300", strokeWidth: "6", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 40,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,800 C300,700 400,900 600,800 C800,700 900,850 1000,800", className: "stroke-amber-500", strokeWidth: "4", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 41,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200", className: "stroke-amber-200", strokeWidth: "8", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 42,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,500 C150,450 250,550 500,500 C750,450 850,550 1000,500", className: "stroke-amber-400", strokeWidth: "12", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 43,
              columnNumber: 14
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 1000", children: [
            /* @__PURE__ */ jsxDEV("path", { d: "M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400", className: "stroke-amber-400", strokeWidth: "4", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 46,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600", className: "stroke-amber-300", strokeWidth: "6", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 47,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,800 C300,700 400,900 600,800 C800,700 900,850 1000,800", className: "stroke-amber-500", strokeWidth: "4", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 48,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200", className: "stroke-amber-200", strokeWidth: "8", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 49,
              columnNumber: 14
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,500 C150,450 250,550 500,500 C750,450 850,550 1000,500", className: "stroke-amber-400", strokeWidth: "12", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 50,
              columnNumber: 14
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
        lineNumber: 33,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        animate: { x: ["0%", "-50%"] },
        transition: { duration: 40, repeat: Infinity, ease: "linear" },
        className: "absolute inset-0 w-[200%] h-full flex opacity-60",
        children: [
          /* @__PURE__ */ jsxDEV("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 1000", children: [
            /* @__PURE__ */ jsxDEV("path", { d: "M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400", className: "stroke-amber-400/40", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 62,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600", className: "stroke-yellow-400/30", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 63,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,800 C300,700 400,900 600,800 C800,700 900,850 1000,800", className: "stroke-amber-500/30", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 64,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200", className: "stroke-amber-300/20", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 65,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,500 C150,450 250,550 500,500 C750,450 850,550 1000,500", className: "stroke-amber-300/25", strokeWidth: "2", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 66,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ jsxDEV(
              motion.path,
              {
                d: "M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400",
                className: "stroke-amber-200",
                strokeWidth: "2",
                vectorEffect: "non-scaling-stroke",
                strokeDasharray: "100 900",
                animate: { strokeDashoffset: [1e3, 0] },
                transition: { duration: 7, repeat: Infinity, ease: "linear" }
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
                lineNumber: 69,
                columnNumber: 12
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              motion.path,
              {
                d: "M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600",
                className: "stroke-amber-100",
                strokeWidth: "1.5",
                vectorEffect: "non-scaling-stroke",
                strokeDasharray: "50 950",
                animate: { strokeDashoffset: [1e3, 0] },
                transition: { duration: 9, repeat: Infinity, ease: "linear", delay: 1 }
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
                lineNumber: 78,
                columnNumber: 12
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              motion.path,
              {
                d: "M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200",
                className: "stroke-amber-300",
                strokeWidth: "3",
                vectorEffect: "non-scaling-stroke",
                strokeDasharray: "150 850",
                animate: { strokeDashoffset: [1e3, 0] },
                transition: { duration: 6, repeat: Infinity, ease: "linear", delay: 2 }
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
                lineNumber: 87,
                columnNumber: 12
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 1000", children: [
            /* @__PURE__ */ jsxDEV("path", { d: "M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400", className: "stroke-amber-400/40", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 99,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600", className: "stroke-yellow-400/30", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 100,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,800 C300,700 400,900 600,800 C800,700 900,850 1000,800", className: "stroke-amber-500/30", strokeWidth: "1", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 101,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200", className: "stroke-amber-300/20", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 102,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ jsxDEV("path", { d: "M0,500 C150,450 250,550 500,500 C750,450 850,550 1000,500", className: "stroke-amber-300/25", strokeWidth: "2", vectorEffect: "non-scaling-stroke" }, void 0, false, {
              fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
              lineNumber: 103,
              columnNumber: 12
            }, this),
            /* @__PURE__ */ jsxDEV(
              motion.path,
              {
                d: "M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400",
                className: "stroke-amber-200",
                strokeWidth: "2",
                vectorEffect: "non-scaling-stroke",
                strokeDasharray: "100 900",
                animate: { strokeDashoffset: [1e3, 0] },
                transition: { duration: 7, repeat: Infinity, ease: "linear" }
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
                lineNumber: 106,
                columnNumber: 12
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              motion.path,
              {
                d: "M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600",
                className: "stroke-amber-100",
                strokeWidth: "1.5",
                vectorEffect: "non-scaling-stroke",
                strokeDasharray: "50 950",
                animate: { strokeDashoffset: [1e3, 0] },
                transition: { duration: 9, repeat: Infinity, ease: "linear", delay: 1 }
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
                lineNumber: 115,
                columnNumber: 12
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              motion.path,
              {
                d: "M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200",
                className: "stroke-amber-300",
                strokeWidth: "3",
                vectorEffect: "non-scaling-stroke",
                strokeDasharray: "150 850",
                animate: { strokeDashoffset: [1e3, 0] },
                transition: { duration: 6, repeat: Infinity, ease: "linear", delay: 2 }
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
                lineNumber: 124,
                columnNumber: 12
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(24,24,27,0.95)_80%)]" }, void 0, false, {
      fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/AnimatedDataFlow.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
function ValuationEngine() {
  const [step, setStep] = useState(1);
  const [revenue, setRevenue] = useState("");
  const [profit, setProfit] = useState("");
  const [industry, setIndustry] = useState("");
  const [years, setYears] = useState("");
  const [valuationRange, setValuationRange] = useState("");
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
    setValuationRange(`${low} — ${high}`);
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
  return /* @__PURE__ */ jsxDEV("section", { id: "valuation-engine", className: "py-24 md:py-32 px-6 relative border-t border-white/5 overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV(AnimatedDataFlow, {}, void 0, false, {
      fileName: "/app/applet/src/components/ValuationEngine.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto w-full relative z-10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "text-xs font-mono uppercase tracking-widest text-white/50 mb-4",
            children: "Most owners undervalue their business."
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/ValuationEngine.tsx",
            lineNumber: 51,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6, delay: 0.1 },
            className: "text-3xl md:text-5xl font-display tracking-tighter mb-6",
            children: "Valuation Engine."
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/ValuationEngine.tsx",
            lineNumber: 60,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6, delay: 0.2 },
            className: "flex flex-col gap-8 items-center",
            children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-muted font-light tracking-wide max-w-xl mx-auto", children: "Get a realistic valuation in minutes — before you leave money on the table." }, void 0, false, {
                fileName: "/app/applet/src/components/ValuationEngine.tsx",
                lineNumber: 76,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-foreground/80 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full w-max mx-auto", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-80 animate-pulse" }, void 0, false, {
                  fileName: "/app/applet/src/components/ValuationEngine.tsx",
                  lineNumber: 80,
                  columnNumber: 15
                }, this),
                "Serious buyers are actively acquiring right now."
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/ValuationEngine.tsx",
                lineNumber: 79,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/ValuationEngine.tsx",
            lineNumber: 69,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ValuationEngine.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-3xl p-8 md:p-16 min-h-[400px] flex flex-col justify-center relative overflow-hidden backdrop-blur-xl shadow-2xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0 opacity-20 pointer-events-none", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
            alt: "Texture",
            className: "w-full h-full object-cover mix-blend-overlay filter contrast-150 grayscale invert-0",
            referrerPolicy: "no-referrer"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/ValuationEngine.tsx",
            lineNumber: 88,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "/app/applet/src/components/ValuationEngine.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-full h-1 bg-white/5 z-10", children: /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            className: "h-full bg-white transition-all duration-500",
            style: { width: `${step / 5 * 100}%` }
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/ValuationEngine.tsx",
            lineNumber: 96,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "/app/applet/src/components/ValuationEngine.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 w-full flex flex-col lg:flex-row gap-16 lg:items-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-full lg:w-1/2", children: /* @__PURE__ */ jsxDEV(AnimatePresence, { mode: "wait", children: [
            step === 1 && /* @__PURE__ */ jsxDEV(
              motion.form,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.4 },
                onSubmit: handleNext,
                className: "w-full max-w-xl mx-auto flex flex-col gap-8",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("label", { className: "text-xs uppercase tracking-widest text-muted block mb-4", children: "Step 1: Financials" }, void 0, false, {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 116,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-4xl font-display tracking-tighter mb-4", children: "What is your Annual Revenue?" }, void 0, false, {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 117,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/ValuationEngine.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      autoFocus: true,
                      required: true,
                      type: "text",
                      value: revenue,
                      onChange: (e) => setRevenue(e.target.value),
                      placeholder: "e.g. $5,000,000",
                      className: "w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-display placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 119,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "self-start px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 mt-4 shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]", children: "Continue →" }, void 0, false, {
                    fileName: "/app/applet/src/components/ValuationEngine.tsx",
                    lineNumber: 128,
                    columnNumber: 17
                  }, this)
                ]
              },
              "step1",
              true,
              {
                fileName: "/app/applet/src/components/ValuationEngine.tsx",
                lineNumber: 106,
                columnNumber: 15
              },
              this
            ),
            step === 2 && /* @__PURE__ */ jsxDEV(
              motion.form,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.4 },
                onSubmit: handleNext,
                className: "w-full max-w-xl mx-auto flex flex-col gap-8",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("button", { type: "button", onClick: () => setStep(1), className: "text-xs uppercase tracking-widest text-muted hover:text-white mb-4 block", children: "← Back" }, void 0, false, {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 145,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-4xl font-display tracking-tighter mb-4", children: "What is your Net Profit?" }, void 0, false, {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 146,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/ValuationEngine.tsx",
                    lineNumber: 144,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      autoFocus: true,
                      required: true,
                      type: "text",
                      value: profit,
                      onChange: (e) => setProfit(e.target.value),
                      placeholder: "e.g. $1,200,000",
                      className: "w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-display placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 148,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "self-start px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 mt-4 shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]", children: "Continue →" }, void 0, false, {
                    fileName: "/app/applet/src/components/ValuationEngine.tsx",
                    lineNumber: 157,
                    columnNumber: 17
                  }, this)
                ]
              },
              "step2",
              true,
              {
                fileName: "/app/applet/src/components/ValuationEngine.tsx",
                lineNumber: 135,
                columnNumber: 15
              },
              this
            ),
            step === 3 && /* @__PURE__ */ jsxDEV(
              motion.form,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.4 },
                onSubmit: handleNext,
                className: "w-full max-w-xl mx-auto flex flex-col gap-8",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("button", { type: "button", onClick: () => setStep(2), className: "text-xs uppercase tracking-widest text-muted hover:text-white mb-4 block", children: "← Back" }, void 0, false, {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 174,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-4xl font-display tracking-tighter mb-4", children: "Select your Industry." }, void 0, false, {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 175,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/ValuationEngine.tsx",
                    lineNumber: 173,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "select",
                    {
                      required: true,
                      value: industry,
                      onChange: (e) => setIndustry(e.target.value),
                      className: "w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl font-display focus:outline-none focus:border-white transition-colors [&>option]:text-black",
                      children: [
                        /* @__PURE__ */ jsxDEV("option", { value: "", disabled: true, children: "Choose sector..." }, void 0, false, {
                          fileName: "/app/applet/src/components/ValuationEngine.tsx",
                          lineNumber: 183,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV("option", { value: "saas", children: "Software / SaaS" }, void 0, false, {
                          fileName: "/app/applet/src/components/ValuationEngine.tsx",
                          lineNumber: 184,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV("option", { value: "manufacturing", children: "Manufacturing" }, void 0, false, {
                          fileName: "/app/applet/src/components/ValuationEngine.tsx",
                          lineNumber: 185,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV("option", { value: "ecommerce", children: "E-commerce" }, void 0, false, {
                          fileName: "/app/applet/src/components/ValuationEngine.tsx",
                          lineNumber: 186,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV("option", { value: "healthcare", children: "Healthcare" }, void 0, false, {
                          fileName: "/app/applet/src/components/ValuationEngine.tsx",
                          lineNumber: 187,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV("option", { value: "services", children: "Professional Services" }, void 0, false, {
                          fileName: "/app/applet/src/components/ValuationEngine.tsx",
                          lineNumber: 188,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ jsxDEV("option", { value: "other", children: "Other" }, void 0, false, {
                          fileName: "/app/applet/src/components/ValuationEngine.tsx",
                          lineNumber: 189,
                          columnNumber: 19
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 177,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "self-start px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 mt-4 shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]", children: "Continue →" }, void 0, false, {
                    fileName: "/app/applet/src/components/ValuationEngine.tsx",
                    lineNumber: 191,
                    columnNumber: 17
                  }, this)
                ]
              },
              "step3",
              true,
              {
                fileName: "/app/applet/src/components/ValuationEngine.tsx",
                lineNumber: 164,
                columnNumber: 15
              },
              this
            ),
            step === 4 && /* @__PURE__ */ jsxDEV(
              motion.form,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.4 },
                onSubmit: handleNext,
                className: "w-full max-w-xl mx-auto flex flex-col gap-8",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("button", { type: "button", onClick: () => setStep(3), className: "text-xs uppercase tracking-widest text-muted hover:text-white mb-4 block", children: "← Back" }, void 0, false, {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 208,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-4xl font-display tracking-tighter mb-4", children: "Years in operation?" }, void 0, false, {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 209,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/ValuationEngine.tsx",
                    lineNumber: 207,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      autoFocus: true,
                      required: true,
                      type: "text",
                      value: years,
                      onChange: (e) => setYears(e.target.value),
                      placeholder: "e.g. 5",
                      className: "w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-display placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 211,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "self-start px-8 py-4 bg-white text-black text-xs tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 mt-4 shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]", children: "Calculate Valuation" }, void 0, false, {
                    fileName: "/app/applet/src/components/ValuationEngine.tsx",
                    lineNumber: 220,
                    columnNumber: 17
                  }, this)
                ]
              },
              "step4",
              true,
              {
                fileName: "/app/applet/src/components/ValuationEngine.tsx",
                lineNumber: 198,
                columnNumber: 15
              },
              this
            ),
            step === 5 && /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.6 },
                className: "w-full max-w-2xl mx-auto text-center flex flex-col items-center gap-8 py-4",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "text-xs uppercase tracking-widest text-muted mb-4", children: "Estimated Range" }, void 0, false, {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 235,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "text-5xl md:text-7xl font-display tracking-tighter text-foreground mb-6", children: valuationRange }, void 0, false, {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 236,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-mono tracking-widest text-white/40 uppercase", children: "Benchmarked against real transactions and industry standards" }, void 0, false, {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 239,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/ValuationEngine.tsx",
                    lineNumber: 234,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-lg lg:text-xl text-muted font-light tracking-wide max-w-lg mt-4 mb-4", children: "We help you package and sell your business to serious buyers." }, void 0, false, {
                    fileName: "/app/applet/src/components/ValuationEngine.tsx",
                    lineNumber: 244,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    Link,
                    {
                      to: "/contact",
                      className: "px-10 py-5 bg-white text-black text-sm tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 inline-block shadow-[0_4px_15px_-4px_rgba(255,255,255,0.08)]",
                      children: "Contact Our Advisors"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/ValuationEngine.tsx",
                      lineNumber: 248,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("button", { onClick: () => setStep(1), className: "text-xs uppercase tracking-widest text-muted hover:text-white mt-4 pb-1 border-b border-white/20", children: "Recalculate" }, void 0, false, {
                    fileName: "/app/applet/src/components/ValuationEngine.tsx",
                    lineNumber: 255,
                    columnNumber: 17
                  }, this)
                ]
              },
              "step5",
              true,
              {
                fileName: "/app/applet/src/components/ValuationEngine.tsx",
                lineNumber: 227,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/ValuationEngine.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/ValuationEngine.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          step < 5 && /* @__PURE__ */ jsxDEV("div", { className: "hidden lg:flex w-full lg:w-1/2 flex-col gap-6", children: /* @__PURE__ */ jsxDEV("div", { className: "relative w-full h-[320px] rounded-2xl border border-white/5 bg-zinc-950/60 p-6 flex flex-col justify-between overflow-hidden shadow-2xl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#local_03_1px,transparent_1px),linear-gradient(to_bottom,#local_03_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" }, void 0, false, {
              fileName: "/app/applet/src/components/ValuationEngine.tsx",
              lineNumber: 268,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 flex justify-between items-start", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] uppercase font-mono tracking-widest text-muted mb-1", children: "Live Multiples Matrix" }, void 0, false, {
                  fileName: "/app/applet/src/components/ValuationEngine.tsx",
                  lineNumber: 272,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-xl font-display text-white", children: "Market Baseline" }, void 0, false, {
                  fileName: "/app/applet/src/components/ValuationEngine.tsx",
                  lineNumber: 273,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/ValuationEngine.tsx",
                lineNumber: 271,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-emerald-400", children: "Syncing" }, void 0, false, {
                fileName: "/app/applet/src/components/ValuationEngine.tsx",
                lineNumber: 275,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/ValuationEngine.tsx",
              lineNumber: 270,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 flex items-end gap-2 h-32 mt-8", children: [30, 45, 55, 40, 75, 60, 90, 85, 100].map((h, i) => /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: `${h}%`, opacity: 1 },
                transition: { duration: 1, delay: i * 0.1, ease: "easeOut" },
                className: `w-full rounded-t-sm ${i === 8 ? "bg-white opacity-90" : "bg-white/10"}`
              },
              i,
              false,
              {
                fileName: "/app/applet/src/components/ValuationEngine.tsx",
                lineNumber: 282,
                columnNumber: 23
              },
              this
            )) }, void 0, false, {
              fileName: "/app/applet/src/components/ValuationEngine.tsx",
              lineNumber: 280,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 border-t border-white/10 pt-4 flex justify-between items-center mt-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-muted font-mono", children: "EBITDA Analysis" }, void 0, false, {
                fileName: "/app/applet/src/components/ValuationEngine.tsx",
                lineNumber: 293,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-white/60 font-mono", children: "Avg. 5.2x" }, void 0, false, {
                fileName: "/app/applet/src/components/ValuationEngine.tsx",
                lineNumber: 294,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/ValuationEngine.tsx",
              lineNumber: 292,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/ValuationEngine.tsx",
            lineNumber: 266,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/ValuationEngine.tsx",
            lineNumber: 265,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ValuationEngine.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/ValuationEngine.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/ValuationEngine.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/ValuationEngine.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};
function Animated({ children, variant = "fadeUp", delay = 0, className = "", id }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  return /* @__PURE__ */ jsxDEV(
    motion$1.div,
    {
      ref,
      id,
      initial: "hidden",
      animate: inView ? "visible" : "hidden",
      variants: variants[variant],
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
      className,
      children
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/Animated.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
}
function AnimatedCapitalFlow() {
  return /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0 overflow-hidden pointer-events-none select-none", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 transition-colors duration-1000 bg-zinc-950" }, void 0, false, {
      fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 w-full h-full opacity-[0.22] pointer-events-none flex flex-col justify-end", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          animate: { x: ["0%", "-50%"] },
          transition: { duration: 30, repeat: Infinity, ease: "linear" },
          className: "absolute inset-x-0 bottom-0 top-[20%] w-[200%] flex blur-[10px]",
          children: [
            /* @__PURE__ */ jsxDEV("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 600", children: [
              /* @__PURE__ */ jsxDEV("path", { d: "M0,300 C250,500 350,150 500,200 C650,250 750,450 1000,300", className: "stroke-amber-400", strokeWidth: "18", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 19,
                columnNumber: 14
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,200 C300,100 400,300 600,250 C800,200 900,50 1000,200", className: "stroke-amber-600", strokeWidth: "22", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 20,
                columnNumber: 14
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,450 C200,550 400,350 550,400 C700,450 850,550 1000,450", className: "stroke-yellow-600", strokeWidth: "16", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 21,
                columnNumber: 14
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
              lineNumber: 18,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 600", children: [
              /* @__PURE__ */ jsxDEV("path", { d: "M0,300 C250,500 350,150 500,200 C650,250 750,450 1000,300", className: "stroke-amber-400", strokeWidth: "18", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 24,
                columnNumber: 14
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,200 C300,100 400,300 600,250 C800,200 900,50 1000,200", className: "stroke-amber-600", strokeWidth: "22", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 25,
                columnNumber: 14
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,450 C200,550 400,350 550,400 C700,450 850,550 1000,450", className: "stroke-yellow-600", strokeWidth: "16", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 26,
                columnNumber: 14
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
              lineNumber: 23,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
          lineNumber: 13,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          animate: { x: ["0%", "-50%"] },
          transition: { duration: 30, repeat: Infinity, ease: "linear" },
          className: "absolute inset-x-0 bottom-0 top-[20%] w-[200%] flex opacity-[0.85]",
          children: [
            /* @__PURE__ */ jsxDEV("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 600", children: [
              /* @__PURE__ */ jsxDEV("path", { d: "M0,300 C250,500 350,150 500,200 C650,250 750,450 1000,300", className: "stroke-amber-200", strokeWidth: "3", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 37,
                columnNumber: 14
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,200 C300,100 400,300 600,250 C800,200 900,50 1000,200", className: "stroke-amber-500", strokeWidth: "3.5", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 38,
                columnNumber: 14
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,450 C200,550 400,350 550,400 C700,450 850,550 1000,450", className: "stroke-yellow-400", strokeWidth: "2", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 39,
                columnNumber: 14
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,520 C300,580 450,400 600,460 C750,520 850,580 1000,520", className: "stroke-amber-300", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 42,
                columnNumber: 14
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,100 C200,50 350,250 550,200 C750,150 850,100 1000,100", className: "stroke-amber-400", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 43,
                columnNumber: 14
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
              lineNumber: 36,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("svg", { fill: "none", className: "w-[50%] h-full", preserveAspectRatio: "none", viewBox: "0 0 1000 600", children: [
              /* @__PURE__ */ jsxDEV("path", { d: "M0,300 C250,500 350,150 500,200 C650,250 750,450 1000,300", className: "stroke-amber-200", strokeWidth: "3", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 46,
                columnNumber: 14
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,200 C300,100 400,300 600,250 C800,200 900,50 1000,200", className: "stroke-amber-500", strokeWidth: "3.5", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 47,
                columnNumber: 14
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,450 C200,550 400,350 550,400 C700,450 850,550 1000,450", className: "stroke-yellow-400", strokeWidth: "2", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 48,
                columnNumber: 14
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,520 C300,580 450,400 600,460 C750,520 850,580 1000,520", className: "stroke-amber-300", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 51,
                columnNumber: 14
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,100 C200,50 350,250 550,200 C750,150 850,100 1000,100", className: "stroke-amber-400", strokeWidth: "1.5", vectorEffect: "non-scaling-stroke" }, void 0, false, {
                fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
                lineNumber: 52,
                columnNumber: 14
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-transparent opacity-90" }, void 0, false, {
      fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/AnimatedCapitalFlow.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
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
function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yBgTexture = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yBgGrid = useTransform(scrollYProgress, [0, 1], [0, -80]);
  return /* @__PURE__ */ jsxDEV("div", { ref: containerRef, className: "w-full flex-col flex bg-background", children: [
    /* @__PURE__ */ jsxDEV("section", { className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-32 pb-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2560&q=80",
            alt: "Corporate Acquisition Meeting",
            className: "w-full h-full object-cover opacity-20 filter contrast-125 brightness-50 mix-blend-luminosity blur-[2px]",
            referrerPolicy: "no-referrer"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 42,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] mix-blend-screen" }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            style: { y: yBgTexture },
            className: "absolute inset-0 w-full lg:w-[60%] opacity-[0.06] mix-blend-luminosity blur-[1px]",
            children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
                alt: "",
                className: "w-full h-[150%] object-cover scale-110 grayscale",
                referrerPolicy: "no-referrer"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 62,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 58,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            style: { y: yBgGrid },
            className: "absolute top-[-10%] left-[-5%] w-full lg:w-[60%] h-[120%] opacity-[0.05]",
            children: /* @__PURE__ */ jsxDEV("svg", { viewBox: "0 0 1000 1000", className: "w-full h-full stroke-white fill-none", preserveAspectRatio: "none", children: [
              /* @__PURE__ */ jsxDEV("path", { d: "M0,800 L200,600 C300,500 400,700 600,400 C700,250 800,300 1000,100", className: "stroke-[1.5]" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 76,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M0,850 L200,650 C300,550 400,750 600,450 C700,300 800,350 1000,150", className: "stroke-white/20" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 77,
                columnNumber: 15
              }, this),
              Array.from({ length: 15 }).map((_, i) => /* @__PURE__ */ jsxDEV("line", { x1: "0", y1: i * 80, x2: "1000", y2: i * 80, className: "stroke-white/20 stroke-[0.5]" }, `h${i}`, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 79,
                columnNumber: 17
              }, this)),
              Array.from({ length: 15 }).map((_, i) => /* @__PURE__ */ jsxDEV("line", { x1: i * 80, y1: "0", x2: i * 80, y2: "1000", className: "stroke-white/20 stroke-[0.5]" }, `v${i}`, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 82,
                columnNumber: 17
              }, this))
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 71,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            style: { y: yHero, opacity: opacityHero },
            className: "w-full text-left",
            initial: "hidden",
            animate: "visible",
            variants: staggerContainer,
            children: [
              /* @__PURE__ */ jsxDEV(motion.div, { variants: fadeUp, className: "mb-4 inline-block", children: /* @__PURE__ */ jsxDEV("span", { className: "px-3 py-1 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest text-muted", children: "Main Street Brokerage" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 97,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 96,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV(
                motion.h1,
                {
                  variants: fadeUp,
                  className: "text-5xl md:text-7xl lg:text-[5.5rem] leading-[1] tracking-tighter font-display font-medium text-foreground mb-6",
                  children: [
                    "Sell Your Business ",
                    /* @__PURE__ */ jsxDEV("br", { className: "hidden md:block" }, void 0, false, {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 105,
                      columnNumber: 34
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-white/60", children: "the Right Way." }, void 0, false, {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 106,
                      columnNumber: 15
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 101,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                motion.p,
                {
                  variants: fadeUp,
                  className: "text-lg md:text-2xl text-muted font-light tracking-wide mb-12 max-w-xl leading-relaxed",
                  children: "Main Street business brokerage for owners selling between $100K and $10M."
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 108,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(motion.div, { variants: fadeUp, className: "flex flex-col sm:flex-row items-center justify-start gap-4", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: "w-full sm:w-auto px-10 py-5 bg-foreground text-background text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center shadow-[0_8px_30px_-4px_rgba(255,255,255,0.08)] hover:shadow-[0_12px_40px_-4px_rgba(255,255,255,0.12)]", children: "Get Free Valuation" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 115,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 114,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 89,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, x: 40 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
            className: "hidden lg:flex relative h-[600px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]",
            children: [
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
                  alt: "Data and Strategy",
                  className: "w-full h-full object-cover filter contrast-[1.1] brightness-[0.6] mix-blend-luminosity scale-105"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 128,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90" }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 134,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-10 left-10 right-10 p-8 bg-white/[0.04] backdrop-blur-[20px] rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-end mb-4", children: [
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-1", children: "Target Multiple" }, void 0, false, {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 140,
                      columnNumber: 20
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "text-white text-lg font-mono", children: "4.5x — 6.8x" }, void 0, false, {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 141,
                      columnNumber: 20
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 139,
                    columnNumber: 18
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1", children: "Data Depth" }, void 0, false, {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 144,
                      columnNumber: 20
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "text-white font-mono text-sm", children: "High" }, void 0, false, {
                      fileName: "/app/applet/src/pages/Home.tsx",
                      lineNumber: 145,
                      columnNumber: 20
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 143,
                    columnNumber: 18
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 138,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "w-full h-1 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxDEV(
                  motion.div,
                  {
                    initial: { width: "0%" },
                    animate: { width: "75%" },
                    transition: { duration: 1.5, delay: 0.8, ease: "easeOut" },
                    className: "h-full bg-white opacity-80"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 149,
                    columnNumber: 18
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 148,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 137,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 122,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32 px-6 border-t border-white/5 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto w-full text-center", children: [
      /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-display tracking-tighter mb-8 text-foreground drop-shadow-sm", children: "Business Brokerage Services" }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 164,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.1, children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-lg md:text-xl text-muted font-light leading-relaxed", children: [
        /* @__PURE__ */ jsxDEV("p", { children: [
          "When it’s time to ",
          /* @__PURE__ */ jsxDEV("strong", { children: "sell your business" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 172,
            columnNumber: 35
          }, this),
          ", you need a process that protects your time and your confidentiality. As your ",
          /* @__PURE__ */ jsxDEV("strong", { children: "business broker" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 172,
            columnNumber: 149
          }, this),
          ", we handle the complex sourcing and negotiations, leaving you free to run your company."
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 171,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: [
          "Every successful ",
          /* @__PURE__ */ jsxDEV("strong", { children: "small business sale" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 175,
            columnNumber: 34
          }, this),
          " starts with an accurate pricing strategy. We perform a detailed ",
          /* @__PURE__ */ jsxDEV("strong", { children: "business valuation" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 175,
            columnNumber: 135
          }, this),
          " to ensure your business is positioned to attract the right buyers at the right price point."
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 170,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 163,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 162,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(ValuationEngine, {}, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 182,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32 border-t border-white/5 px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto w-full", children: [
      /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", className: "mb-16 border-b border-white/10 pb-8", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-display tracking-tighter", children: "Built for Serious Sellers." }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 188,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10", children: [
        { title: "Confidential process", desc: "Your identity and sensitive data are strictly protected throughout the entire timeline." },
        { title: "Pre-qualified buyer network", desc: "Deal only with rigorous, vetted capital. We bypass the window shoppers." },
        { title: "End-to-end deal execution", desc: "From packaging the asset to final contract structuring, we manage the close." }
      ].map((stat, i) => /* @__PURE__ */ jsxDEV(Animated, { delay: i * 0.15, variant: "fadeUp", className: "pt-8 md:pt-0 md:px-8 first:md:pl-0 last:md:pr-0", children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-2xl md:text-3xl font-display tracking-tight mb-4", children: [
          stat.title,
          "."
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 199,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted tracking-wide leading-relaxed font-light", children: stat.desc }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 200,
          columnNumber: 17
        }, this)
      ] }, i, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 198,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 192,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 186,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32 px-6 border-t border-white/5 relative overflow-hidden bg-background", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none" }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto w-full relative z-10", children: [
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", className: "mb-24 text-center", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-display tracking-tighter", children: "Our Process." }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 212,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted font-light mt-4", children: "Three deliberate steps to a successful exit." }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 215,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 211,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-16 md:gap-8 relative", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block absolute top-[40px] left-[16.66%] right-[16.66%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 220,
            columnNumber: 13
          }, this),
          [
            { num: "01", title: "Valuation", text: "Get your business valued using live market multiples.", Icon: LineChart, hoverClass: "group-hover:scale-[1.15]" },
            { num: "02", title: "Packaging", text: "We package your business for sale as a premium asset.", Icon: FileText, hoverClass: "group-hover:rotate-[-6deg] group-hover:scale-[1.1]" },
            { num: "03", title: "Sale", text: "We match you with serious buyers and close the deal.", Icon: Handshake, hoverClass: "group-hover:-translate-y-1 group-hover:scale-[1.1]" }
          ].map((step, i) => /* @__PURE__ */ jsxDEV(
            Animated,
            {
              delay: i * 0.15,
              variant: "fadeUp",
              className: "relative z-10 flex flex-col items-center text-center group",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-20 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center mb-8 relative group-hover:border-white/30 transition-all duration-200 shadow-2xl", children: [
                  /* @__PURE__ */ jsxDEV(step.Icon, { className: `w-8 h-8 text-white/50 group-hover:text-white transition-all duration-200 ${step.hoverClass}`, strokeWidth: 1 }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 234,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-3 -right-3 text-[10px] font-mono border border-white/10 bg-zinc-900 px-2 py-0.5 rounded-full text-muted group-hover:text-white transition-colors duration-200", children: step.num }, void 0, false, {
                    fileName: "/app/applet/src/pages/Home.tsx",
                    lineNumber: 235,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 233,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-display tracking-tight text-foreground mb-4", children: step.title }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 239,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-muted tracking-wide leading-relaxed font-light text-sm md:text-base max-w-[250px]", children: step.text }, void 0, false, {
                  fileName: "/app/applet/src/pages/Home.tsx",
                  lineNumber: 240,
                  columnNumber: 17
                }, this)
              ]
            },
            i,
            true,
            {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 227,
              columnNumber: 15
            },
            this
          ))
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 208,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32 px-6 border-t border-white/5 bg-zinc-950/20 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0 opacity-10 pointer-events-none", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2560&auto=format&fit=crop",
            alt: "Corporate Desk",
            className: "w-full h-full object-cover filter contrast-125 brightness-50 grayscale mix-blend-luminosity",
            referrerPolicy: "no-referrer"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 250,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 256,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10", children: [
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", className: "flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-display tracking-tighter mb-6", children: [
            "We Prepare Your ",
            /* @__PURE__ */ jsxDEV("br", { className: "hidden md:block" }, void 0, false, {
              fileName: "/app/applet/src/pages/Home.tsx",
              lineNumber: 261,
              columnNumber: 31
            }, this),
            " Business for Sale."
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 260,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-muted font-light tracking-wide max-w-md", children: "We turn your business into a buyer-ready asset." }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 263,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 259,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-8", children: [
          "Clean financial presentation",
          "Clear growth story",
          "Structured deal positioning"
        ].map((point, i) => /* @__PURE__ */ jsxDEV(
          Animated,
          {
            delay: i * 0.1,
            variant: "fadeUp",
            className: "border-b border-white/10 pb-6 flex items-start gap-6 group hover:border-white/30 transition-colors",
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-mono uppercase tracking-widest text-muted mt-2", children: [
                "0",
                i + 1
              ] }, void 0, true, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 280,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-2xl md:text-3xl font-display tracking-tight text-foreground", children: point }, void 0, false, {
                fileName: "/app/applet/src/pages/Home.tsx",
                lineNumber: 281,
                columnNumber: 17
              }, this)
            ]
          },
          i,
          true,
          {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 274,
            columnNumber: 15
          },
          this
        )) }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 268,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 258,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 248,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 md:py-48 px-6 text-center border-t border-white/5 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV(AnimatedCapitalFlow, {}, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 290,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05)_0%,var(--color-background)_60%)] pointer-events-none" }, void 0, false, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 291,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto relative z-10 flex flex-col items-center", children: [
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-7xl font-display tracking-tighter mb-6 text-foreground drop-shadow-sm", children: [
          "Ready to Find Out ",
          /* @__PURE__ */ jsxDEV("br", { className: "hidden md:block" }, void 0, false, {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 296,
            columnNumber: 35
          }, this),
          " What It’s Worth?"
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 295,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 294,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.1, children: /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-2xl text-muted font-light tracking-wide mb-12", children: "Start with a valuation. We'll handle the rest." }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 300,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 299,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.2, children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => {
              var _a;
              return (_a = document.getElementById("valuation-engine")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            },
            className: "w-full sm:w-auto px-10 py-5 bg-white text-black text-sm tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 flex items-center justify-center shadow-lg",
            children: "Get Free Valuation"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/pages/Home.tsx",
            lineNumber: 306,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 305,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/Home.tsx",
          lineNumber: 304,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Home.tsx",
        lineNumber: 293,
        columnNumber: 10
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Home.tsx",
      lineNumber: 289,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/Home.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
const ownerImg = "/assets/john-BFX5Jvt-.png";
const certImg = "/assets/certificate-BIevdoe1.png";
function About() {
  return /* @__PURE__ */ jsxDEV("div", { className: "w-full flex-1", children: [
    /* @__PURE__ */ jsxDEV("section", { className: "relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0 bg-gradient-to-b from-zinc-900/50 to-transparent" }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_60%)]" }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", children: /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl md:text-8xl font-display tracking-tighter mb-8 text-foreground drop-shadow-sm", children: [
          "Sell Your ",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 18,
            columnNumber: 25
          }, this),
          " Business."
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.1, children: /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl text-muted font-light tracking-wide mb-12 max-w-2xl mx-auto", children: "AI Exit Advisors helps business owners sell their companies by connecting them with qualified buyers and managing the deal process from start to finish." }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 px-6 border-y border-white/5 bg-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-display tracking-tighter mb-6", children: '"We don’t just list businesses. We sell them."' }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-xs uppercase tracking-widest text-muted font-mono", children: "— The AI Exit Advisors Philosophy" }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32 px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mb-16", children: /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-4 border-l border-foreground pl-4", children: "Target Mandates" }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display tracking-tighter", children: "Who We Represent" }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6", children: [
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
      ].map((item, i) => /* @__PURE__ */ jsxDEV(
        Animated,
        {
          delay: i * 0.1,
          variant: "fadeUp",
          className: "p-8 md:p-12 border border-white/10 rounded-3xl bg-zinc-950 flex flex-col gap-6",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-5 h-5 text-foreground" }, void 0, false, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 79,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-display tracking-tighter mb-3", children: item.title }, void 0, false, {
                fileName: "/app/applet/src/pages/About.tsx",
                lineNumber: 83,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted leading-relaxed font-light", children: item.desc }, void 0, false, {
                fileName: "/app/applet/src/pages/About.tsx",
                lineNumber: 84,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 82,
              columnNumber: 17
            }, this)
          ]
        },
        i,
        true,
        {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 73,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-12 text-center text-sm font-mono tracking-widest uppercase text-muted", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: "Typical Scale:" }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        " $2M — $50M+ Valuation Target"
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32 px-6 border-t border-white/5 bg-zinc-950/50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-4 border-l border-foreground pl-4", children: "The AI Exit Edge" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display tracking-tighter mb-8", children: "Why founders choose us over traditional brokers." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted font-light leading-relaxed mb-8", children: "The difference between listing a business and selling it is execution. We source qualified buyers, manage the narrative, and close the deal." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 101,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-8", children: [
          { title: "Pre-Sale Preparation", text: "We identify and correct issues months before going to market." },
          { title: "Direct Access to Serious Buyers", text: "Direct lines to Private Equity, family offices, and strategic acquirers globally." },
          { title: "Discrete & Confidential", text: "Zero public listings. Strict NDAs and targeted outreach to protect your brand." }
        ].map((edge, i) => /* @__PURE__ */ jsxDEV(Animated, { delay: 0.2 + i * 0.1, variant: "fadeUp", className: "flex gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-foreground" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 119,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 118,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-medium tracking-tight mb-2", children: edge.title }, void 0, false, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 122,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted font-light", children: edge.text }, void 0, false, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 123,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 121,
            columnNumber: 21
          }, this)
        ] }, i, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 117,
          columnNumber: 19
        }, this)) }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 111,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-6 relative", children: [
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.1, className: "p-8 border border-white/10 rounded-3xl bg-zinc-950 shadow-sm flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxDEV(Shield, { className: "w-6 h-6 text-emerald-400" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 133,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "font-medium", children: "Founder-First Defense" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 134,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted", children: "We rigorously defend your terms, securing cash-at-close and preventing predatory earn-outs." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 135,
            columnNumber: 18
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 132,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.2, className: "p-8 border border-white/10 rounded-3xl bg-zinc-950 shadow-sm flex flex-col gap-4 translate-y-0 sm:translate-y-12", children: [
          /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-6 h-6 text-blue-400" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 138,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "font-medium", children: "Data-Driven Pricing" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 139,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted", children: "We use real market data to justify and defend your company's value." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 140,
            columnNumber: 18
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 137,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.3, className: "p-8 border border-white/10 rounded-3xl bg-zinc-950 shadow-sm flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxDEV(Users, { className: "w-6 h-6 text-amber-400" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 143,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "font-medium", children: "Long-Term Partnerships" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 144,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted", children: "We advise you from day one, through diligence, and well past the closing wire." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 145,
            columnNumber: 18
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 142,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.4, className: "p-8 border border-white/10 rounded-3xl bg-zinc-950 shadow-sm flex flex-col gap-4 translate-y-0 sm:translate-y-12", children: [
          /* @__PURE__ */ jsxDEV(Lock, { className: "w-6 h-6 text-purple-400" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 148,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "font-medium", children: "Total Discretion" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 149,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted", children: "Your competitors, employees, and customers will never know until the deal is finalized." }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 150,
            columnNumber: 18
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 147,
          columnNumber: 16
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 99,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32 px-6 border-t border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col lg:flex-row gap-16 lg:gap-24 items-center", children: [
      /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", className: "w-full lg:w-5/12 flex justify-center lg:justify-end", children: /* @__PURE__ */ jsxDEV("div", { className: "relative w-full max-w-[400px]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "aspect-[4/5] relative z-10 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.03)] text-transparent rounded-xl", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: ownerImg,
            alt: "Principal Advisor",
            className: "w-full h-full object-cover rounded-xl shadow-lg"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 166,
            columnNumber: 19
          },
          this
        ) }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 165,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-6 -left-6 w-full h-full border border-white/10 rounded-xl -z-10" }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 173,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 164,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "w-full lg:w-7/12 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-5xl font-display tracking-tighter mb-2", children: "John Bela" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 180,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-mono uppercase tracking-widest text-muted mb-8", children: "Principal Advisor, AI Exit Advisors" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-5 text-lg text-muted font-light leading-relaxed mb-8 max-w-2xl", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Advises on selling businesses, buyer sourcing, and deal execution across SaaS, DTC, and service-based businesses. Founded AI Exit Advisors in 2026 to apply AI-driven systems to the business brokerage process. The firm focuses on increasing buyer flow, improving deal quality, and reducing time to close through structured, data-backed execution." }, void 0, false, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 186,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "Background spans sales, operations, and business ownership across healthcare, SaaS, energy, and service industries. Includes experience in building and operating businesses, along with high-touch sales across outbound, paid acquisition, and enterprise deal cycles." }, void 0, false, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 189,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Previously founded The Chief AI Office, where proprietary systems were built to automate business development and pipeline generation. These systems generated over ",
              /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-foreground", children: "$5M" }, void 0, false, {
                fileName: "/app/applet/src/pages/About.tsx",
                lineNumber: 193,
                columnNumber: 185
              }, this),
              " in qualified opportunities within two months and supported high-value contract closures, including deals exceeding ",
              /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-foreground", children: "$250K" }, void 0, false, {
                fileName: "/app/applet/src/pages/About.tsx",
                lineNumber: 193,
                columnNumber: 357
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 192,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Leads a team of 12 applying these systems to business brokerage, supporting transactions ranging from ",
              /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-foreground", children: "$10K to $10M+" }, void 0, false, {
                fileName: "/app/applet/src/pages/About.tsx",
                lineNumber: 196,
                columnNumber: 123
              }, this),
              ". Approach is direct and performance-focused — combining sales discipline with automation to create consistent buyer demand, stronger positioning, and higher exit multiples."
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 195,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 185,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.1, className: "mb-10", children: /* @__PURE__ */ jsxDEV("ul", { className: "flex flex-col gap-4", children: [
          "Targeted Deal Focus: $2M — $50M+ range",
          "Specialization: SaaS, DTC, and Tech-Enabled Agencies",
          "Data-driven, real-time market multiple modeling",
          "Direct access to vetted global buyer networks"
        ].map((bullet, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-foreground/50 shrink-0" }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 210,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-foreground tracking-wide font-light", children: bullet }, void 0, false, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 211,
            columnNumber: 23
          }, this)
        ] }, i, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 209,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 202,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 201,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-full h-px bg-white/10 mb-8" }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 218,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.2, children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-6 p-5 border border-white/10 rounded-2xl bg-zinc-900 inline-flex shadow-sm", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: certImg,
              alt: "Business Broker Certification",
              className: "w-28 h-28 object-contain rounded-lg bg-white p-1.5 shrink-0 border border-black/5"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 223,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-1", children: "Certification" }, void 0, false, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 229,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "font-medium tracking-tight text-foreground", children: "Business Broker Training Certification" }, void 0, false, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 230,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-foreground/70 font-light", children: "FastStart Program • Completed April 2026" }, void 0, false, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 231,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 228,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 222,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 221,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 160,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 159,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 md:py-32 px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-5xl font-display tracking-tighter mb-4", children: "The Exit Protocol" }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 246,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted font-light max-w-2xl mx-auto", children: "A rigid, structured process designed to create buyer competition." }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 249,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 245,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 244,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
        { num: "01", title: "Valuation & Audit", text: "Deep financial analysis to establish a defensible baseline and identify immediate value levers." },
        { num: "02", title: "Asset Preparation", text: "Crafting the Confidential Information Memorandum (CIM) and building the data room." },
        { num: "03", title: "Targeted Outreach", text: "Quietly approaching our vetted network of acquirers to gauge interest and secure NDAs." },
        { num: "04", title: "Bidding & Negotiation", text: "Creating an auction environment to drive up multiples and improve deal structure." },
        { num: "05", title: "Diligence & Closing", text: "Managing the legal, technical, and financial diligence process through to the wire transfer." }
      ].map((step, i) => /* @__PURE__ */ jsxDEV(
        Animated,
        {
          delay: i * 0.1,
          variant: "fadeUp",
          className: "flex items-start gap-6 p-6 md:p-8 border border-white/5 rounded-2xl bg-zinc-950/50 hover:border-white/20 transition-colors",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-2xl md:text-3xl font-display text-muted/50 w-12 shrink-0", children: step.num }, void 0, false, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 269,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-medium tracking-tight mb-2", children: step.title }, void 0, false, {
                fileName: "/app/applet/src/pages/About.tsx",
                lineNumber: 271,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted font-light", children: step.text }, void 0, false, {
                fileName: "/app/applet/src/pages/About.tsx",
                lineNumber: 272,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/pages/About.tsx",
              lineNumber: 270,
              columnNumber: 17
            }, this)
          ]
        },
        i,
        true,
        {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 263,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 255,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 243,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 242,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 md:py-48 px-6 text-center border-t border-white/5 relative overflow-hidden bg-zinc-950", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" }, void 0, false, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 283,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto relative z-10 flex flex-col items-center", children: [
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl md:text-6xl font-display tracking-tighter mb-6 text-foreground drop-shadow-sm", children: "Understand Your Value Today." }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 287,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 286,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.1, children: /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-muted font-light tracking-wide mb-12", children: "Get a confidential, no-obligation valuation from our advisory team." }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 292,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 291,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.2, children: /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/contact",
            className: "px-10 py-5 bg-white text-black text-sm tracking-widest uppercase font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-lg inline-block",
            children: "Get Free Valuation"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/pages/About.tsx",
            lineNumber: 297,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/app/applet/src/pages/About.tsx",
          lineNumber: 296,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/About.tsx",
        lineNumber: 285,
        columnNumber: 10
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/About.tsx",
      lineNumber: 282,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/About.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function Contact() {
  return /* @__PURE__ */ jsxDEV("div", { className: "w-full flex-1 pt-32 pb-24 px-6 md:pt-40", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto flex flex-col gap-24", children: [
    /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center border-b border-white/10 pb-16", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl md:text-7xl font-display tracking-tighter mb-6 text-foreground", children: "Start Your Exit Process" }, void 0, false, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-muted font-light tracking-wide max-w-2xl mx-auto mb-10", children: "Request a confidential business valuation and speak with an advisor." }, void 0, false, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => {
            var _a;
            return (_a = document.getElementById("contact-form")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
          },
          className: "px-10 py-5 bg-foreground text-background text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] inline-block shadow-[0_8px_30px_-4px_rgba(255,255,255,0.08)] hover:shadow-[0_12px_40px_-4px_rgba(255,255,255,0.12)]",
          children: "Get Free Valuation"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 18,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Contact.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Contact.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.1, children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center p-10 bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-4 opacity-70", children: "Location" }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-lg text-foreground font-light", children: "Las Vegas, Nevada, US" }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center p-10 bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-4 opacity-70", children: "Phone" }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-lg text-foreground font-light", children: "+1 (725) 304-6728" }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center p-10 bg-white/[0.03] backdrop-blur-[20px] rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-mono uppercase tracking-widest text-muted mb-4 opacity-70", children: "Email" }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 39,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "mailto:info@aiexitadvisors.com?subject=Business%20Valuation%20Inquiry", className: "text-lg text-foreground font-light hover:opacity-70 transition-opacity", children: "info@aiexitadvisors.com" }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Contact.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Contact.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.2, id: "contact-form", className: "scroll-mt-32", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mx-auto w-full p-8 md:p-12 bg-white/[0.02] backdrop-blur-[20px] rounded-[2rem] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]", children: /* @__PURE__ */ jsxDEV("form", { className: "space-y-8", onSubmit: (e) => e.preventDefault(), children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "text-xs uppercase tracking-widest text-muted pl-1", children: "Full Name" }, void 0, false, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 51,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("input", { required: true, type: "text", placeholder: "John Doe", className: "w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors text-foreground" }, void 0, false, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 52,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "text-xs uppercase tracking-widest text-muted pl-1", children: "Email" }, void 0, false, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 55,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("input", { required: true, type: "email", placeholder: "john@example.com", className: "w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors text-foreground" }, void 0, false, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 56,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 relative", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "text-xs uppercase tracking-widest text-muted pl-1", children: "Business Type" }, void 0, false, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 62,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("select", { required: true, defaultValue: "", className: "w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors text-foreground appearance-none cursor-pointer rounded-none", children: [
            /* @__PURE__ */ jsxDEV("option", { value: "", disabled: true, className: "bg-zinc-900", children: "Select Type" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 64,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "SaaS", className: "bg-zinc-900", children: "SaaS" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 65,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "DTC", className: "bg-zinc-900", children: "DTC" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 66,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "Agency", className: "bg-zinc-900", children: "Agency" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 67,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("option", { value: "Other", className: "bg-zinc-900", children: "Other" }, void 0, false, {
              fileName: "/app/applet/src/pages/Contact.tsx",
              lineNumber: 68,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 63,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute right-2 top-11 pointer-events-none text-muted", children: "▼" }, void 0, false, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "text-xs uppercase tracking-widest text-muted pl-1", children: "Estimated Revenue" }, void 0, false, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 75,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("input", { required: true, type: "text", placeholder: "e.g. $2.5M", className: "w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors text-foreground" }, void 0, false, {
            fileName: "/app/applet/src/pages/Contact.tsx",
            lineNumber: 76,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 60,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxDEV("label", { className: "text-xs uppercase tracking-widest text-muted pl-1", children: "Message" }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("textarea", { required: true, placeholder: "Tell us about your business and goals...", className: "w-full bg-transparent border-b border-white/10 py-4 px-2 focus:outline-none focus:border-white transition-colors min-h-[120px] resize-y text-foreground" }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 80,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "pt-8 text-center flex flex-col items-center", children: [
        /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "px-10 py-5 bg-foreground text-background text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] w-full shadow-[0_8px_30px_-4px_rgba(255,255,255,0.08)] hover:shadow-[0_12px_40px_-4px_rgba(255,255,255,0.12)]", children: "Request Confidential Valuation" }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-6 text-sm text-muted font-light tracking-wide opacity-80", children: "We review every inquiry personally. All conversations are strictly confidential." }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 91,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 85,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Contact.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Contact.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/pages/Contact.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Animated, { variant: "fadeUp", delay: 0.3, className: "pt-24 border-t border-white/10", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-display tracking-tighter mb-4 text-foreground", children: "Interactive Valuation" }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted font-light tracking-wide", children: "Prefer an algorithmic baseline right now? Run your numbers through our engine." }, void 0, false, {
          fileName: "/app/applet/src/pages/Contact.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 101,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "px-4", children: /* @__PURE__ */ jsxDEV(ValuationEngine, {}, void 0, false, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/pages/Contact.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/pages/Contact.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/pages/Contact.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/pages/Contact.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function App({ url }) {
  const isServer = typeof window === "undefined";
  const content = /* @__PURE__ */ jsxDEV(Routes, { children: /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Layout, {}, void 0, false, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 18,
    columnNumber: 32
  }, this), children: [
    /* @__PURE__ */ jsxDEV(Route, { index: true, element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 19,
      columnNumber: 31
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "about", element: /* @__PURE__ */ jsxDEV(About, {}, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 20,
      columnNumber: 38
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "contact", element: /* @__PURE__ */ jsxDEV(Contact, {}, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 21,
      columnNumber: 40
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
  if (isServer && url) {
    return /* @__PURE__ */ jsxDEV(StaticRouter, { location: url, children: content }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 27,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(BrowserRouter, { children: content }, void 0, false, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
async function prerender(data) {
  const html = renderToString(/* @__PURE__ */ jsxDEV(App, { url: data.url }, void 0, false, {
    fileName: "/app/applet/src/prerender.tsx",
    lineNumber: 5,
    columnNumber: 31
  }, this));
  return { html };
}
export {
  prerender
};
