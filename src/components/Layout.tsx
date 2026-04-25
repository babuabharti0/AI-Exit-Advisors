import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SmoothScroll from "./SmoothScroll";
import { cn } from "../lib/utils";
const logo = "/images/logo.png";

export default function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Ambient Global Lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] sm:top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[100px] md:blur-[150px]" />
      </div>

      <SmoothScroll />
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-7 md:py-8 transition-all duration-300 bg-white/[0.04] backdrop-blur-[20px] border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 relative z-10">
          <Link to="/" className="relative z-50 hover:opacity-80 transition-opacity flex items-center shrink-0">
            <img 
              src={logo} 
              alt="AI Exit Advisors" 
              className="h-14 md:h-16 w-auto object-contain bg-white/95 p-1.5 rounded-md"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] lg:text-xs uppercase tracking-widest font-medium">
            <Link to="/" className={cn("transition-colors", location.pathname === "/" ? "text-foreground" : "text-muted hover:text-foreground")}>
              Home
            </Link>
            <Link to="/about" className={cn("transition-colors", location.pathname === "/about" ? "text-foreground" : "text-muted hover:text-foreground")}>
              About
            </Link>
            <Link to="/contact" className={cn("transition-colors", location.pathname === "/contact" ? "text-foreground" : "text-muted hover:text-foreground")}>
              Contact
            </Link>
            <Link to="/contact" className="ml-2 px-8 py-3.5 bg-foreground text-background rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out shadow-[0_4px_20px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(255,255,255,0.1)]">
              Get Valuation
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex flex-col justify-center items-end gap-[5px] md:hidden relative z-50 p-2"
            aria-label="Toggle Navigation"
          >
            <span className={cn("w-full h-[1px] bg-foreground block origin-center transition-all duration-300", isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : "")}></span>
            <span className={cn("w-full h-[1px] bg-foreground block transition-all duration-300", isMobileMenuOpen ? "opacity-0 translate-x-2" : "")}></span>
            <span className={cn("w-full h-[1px] bg-foreground block origin-center transition-all duration-300", isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : "")}></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center justify-center gap-8 text-sm uppercase tracking-widest font-medium w-full px-6">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={cn("transition-colors", location.pathname === "/" ? "text-foreground" : "text-muted hover:text-foreground")}>
                Home
              </Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={cn("transition-colors", location.pathname === "/about" ? "text-foreground" : "text-muted hover:text-foreground")}>
                About
              </Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={cn("transition-colors", location.pathname === "/contact" ? "text-foreground" : "text-muted hover:text-foreground")}>
                Contact
              </Link>
              
              <div className="w-8 h-px bg-white/10 my-2" />
              
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-10 py-4 bg-foreground text-background text-center rounded-full hover:opacity-90 active:scale-95 transition-all w-full max-w-[280px]">
                Get Valuation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col pt-24">
        <Outlet />
      </main>

      <footer className="border-t border-white/5 bg-zinc-950 px-6 pt-20 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
            
            {/* Left Section */}
            <div className="flex flex-col items-start text-left">
              <Link to="/" className="mb-6 hover:opacity-80 transition-opacity inline-block">
                <img 
                  src={logo} 
                  alt="AI Exit Advisors" 
                  className="h-10 w-auto object-contain bg-white/95 p-1.5 rounded-md"
                />
              </Link>
              <p className="text-sm text-muted font-light max-w-xs leading-relaxed">
                Main Street Business Broker | $100K–$10M Transactions
              </p>
            </div>

            {/* Middle Section (Nav Links) */}
            <div className="flex flex-col items-start md:items-center text-sm font-medium tracking-widest uppercase gap-4 text-muted">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>

            {/* Right Section (Contact Placeholder) */}
            <div className="flex flex-col items-start md:items-end text-sm text-muted font-light gap-4 md:text-right">
              <div>
                <span className="block text-xs uppercase tracking-widest text-foreground/50 mb-1">Email</span>
                <a href="mailto:info@aiexitadvisors.com?subject=Business%20Valuation%20Inquiry" className="text-foreground hover:opacity-80 transition-opacity">info@aiexitadvisors.com</a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-foreground/50 mb-1">Phone</span>
                <span className="text-foreground">+1 (725) 304-6728</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-foreground/50 mb-1">Location</span>
                <span className="text-foreground">Las Vegas, Nevada, US</span>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-muted/70 tracking-widest uppercase gap-4 text-center sm:text-left">
            <div>&copy; 2026 AI Exit Advisors.</div>
            <div>All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
