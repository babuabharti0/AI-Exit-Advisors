import { motion } from "motion/react";
import { useIsMobile } from "../hooks/useIsMobile";

export default function AnimatedDataFlow() {
  const isMobile = useIsMobile();
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Base colors bridging light and dark mode */}
      <div className="absolute inset-0 transition-colors duration-1000 bg-zinc-950" />

      {/* Abstract Glowing Orbs (Slightly more visible) */}
      <motion.div
        animate={isMobile ? { scale: 1, opacity: 0.4, x: "0%", y: "0%" } : {
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
          x: ["0%", "2%", "0%"],
          y: ["0%", "3%", "0%"]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] mix-blend-screen bg-amber-600/15"
      />
      <motion.div
        animate={isMobile ? { scale: 1, opacity: 0.3, x: "0%", y: "0%" } : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: ["0%", "-3%", "0%"],
          y: ["0%", "-2%", "0%"]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] mix-blend-screen bg-amber-800/20"
      />

      {/* Repeating Data Lines Container */}
      <div className="absolute inset-0 w-full h-full opacity-25 blur-xl pointer-events-none">
        <motion.div
          animate={isMobile ? { x: "0%" } : { x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-[200%] h-full flex"
        >
          <svg fill="none" className="w-[50%] h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
             <path d="M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400" className="stroke-amber-400" strokeWidth="4" vectorEffect="non-scaling-stroke" />
             <path d="M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600" className="stroke-amber-300" strokeWidth="6" vectorEffect="non-scaling-stroke" />
             <path d="M0,800 C300,700 400,900 600,800 C800,700 900,850 1000,800" className="stroke-amber-500" strokeWidth="4" vectorEffect="non-scaling-stroke" />
             <path d="M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200" className="stroke-amber-200" strokeWidth="8" vectorEffect="non-scaling-stroke" />
             <path d="M0,500 C150,450 250,550 500,500 C750,450 850,550 1000,500" className="stroke-amber-400" strokeWidth="12" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg fill="none" className="w-[50%] h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
             <path d="M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400" className="stroke-amber-400" strokeWidth="4" vectorEffect="non-scaling-stroke" />
             <path d="M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600" className="stroke-amber-300" strokeWidth="6" vectorEffect="non-scaling-stroke" />
             <path d="M0,800 C300,700 400,900 600,800 C800,700 900,850 1000,800" className="stroke-amber-500" strokeWidth="4" vectorEffect="non-scaling-stroke" />
             <path d="M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200" className="stroke-amber-200" strokeWidth="8" vectorEffect="non-scaling-stroke" />
             <path d="M0,500 C150,450 250,550 500,500 C750,450 850,550 1000,500" className="stroke-amber-400" strokeWidth="12" vectorEffect="non-scaling-stroke" />
          </svg>
        </motion.div>
      </div>

      <motion.div
        animate={isMobile ? { x: "0%" } : { x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-[200%] h-full flex opacity-60"
      >
        <svg fill="none" className="w-[50%] h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
           {/* Static Base Lines */}
           <path d="M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400" className="stroke-amber-400/40" strokeWidth="1" vectorEffect="non-scaling-stroke" />
           <path d="M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600" className="stroke-yellow-400/30" strokeWidth="1" vectorEffect="non-scaling-stroke" />
           <path d="M0,800 C300,700 400,900 600,800 C800,700 900,850 1000,800" className="stroke-amber-500/30" strokeWidth="1" vectorEffect="non-scaling-stroke" />
           <path d="M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200" className="stroke-amber-300/20" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
           <path d="M0,500 C150,450 250,550 500,500 C750,450 850,550 1000,500" className="stroke-amber-300/25" strokeWidth="2" vectorEffect="non-scaling-stroke" />
           
           {/* Moving Highlight Pulses */}
           {isMobile ? null : (
             <>
               <motion.path 
                 d="M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400" 
                 className="stroke-amber-200" 
                 strokeWidth="2" 
                 vectorEffect="non-scaling-stroke"
                 strokeDasharray="100 900"
                 animate={{ strokeDashoffset: [1000, 0] }}
                 transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
               />
               <motion.path 
                 d="M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600" 
                 className="stroke-amber-100" 
                 strokeWidth="1.5" 
                 vectorEffect="non-scaling-stroke"
                 strokeDasharray="50 950"
                 animate={{ strokeDashoffset: [1000, 0] }}
                 transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 1 }}
               />
               <motion.path 
                 d="M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200" 
                 className="stroke-amber-300" 
                 strokeWidth="3" 
                 vectorEffect="non-scaling-stroke"
                 strokeDasharray="150 850"
                 animate={{ strokeDashoffset: [1000, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
               />
             </>
           )}
        </svg>
        <svg fill="none" className="w-[50%] h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
           {/* Static Base Lines Duplicate */}
           <path d="M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400" className="stroke-amber-400/40" strokeWidth="1" vectorEffect="non-scaling-stroke" />
           <path d="M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600" className="stroke-yellow-400/30" strokeWidth="1" vectorEffect="non-scaling-stroke" />
           <path d="M0,800 C300,700 400,900 600,800 C800,700 900,850 1000,800" className="stroke-amber-500/30" strokeWidth="1" vectorEffect="non-scaling-stroke" />
           <path d="M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200" className="stroke-amber-300/20" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
           <path d="M0,500 C150,450 250,550 500,500 C750,450 850,550 1000,500" className="stroke-amber-300/25" strokeWidth="2" vectorEffect="non-scaling-stroke" />
           
           {/* Moving Highlight Pulses Duplicate */}
           {isMobile ? null : (
             <>
               <motion.path 
                 d="M0,400 C200,300 300,500 500,450 C700,400 800,600 1000,400" 
                 className="stroke-amber-200" 
                 strokeWidth="2" 
                 vectorEffect="non-scaling-stroke"
                 strokeDasharray="100 900"
                 animate={{ strokeDashoffset: [1000, 0] }}
                 transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
               />
               <motion.path 
                 d="M0,600 C250,700 350,450 550,550 C750,650 850,400 1000,600" 
                 className="stroke-amber-100" 
                 strokeWidth="1.5" 
                 vectorEffect="non-scaling-stroke"
                 strokeDasharray="50 950"
                 animate={{ strokeDashoffset: [1000, 0] }}
                 transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 1 }}
               />
               <motion.path 
                 d="M0,200 C300,100 400,300 600,200 C800,100 900,250 1000,200" 
                 className="stroke-amber-300" 
                 strokeWidth="3" 
                 vectorEffect="non-scaling-stroke"
                 strokeDasharray="150 850"
                 animate={{ strokeDashoffset: [1000, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
               />
             </>
           )}
        </svg>
      </motion.div>

      {/* Vignette fade out on the edges to blend into content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(24,24,27,0.95)_80%)]" />
    </div>
  );
}
