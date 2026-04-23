import { motion } from "motion/react";

export default function AnimatedCapitalFlow() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Base Solid Background */}
      <div className="absolute inset-0 transition-colors duration-1000 bg-zinc-950" />

      {/* Primary container setting strict base opacity (0.15 in light mode, 0.20 in dark mode) */}
      <div className="absolute inset-0 w-full h-full opacity-[0.22] pointer-events-none flex flex-col justify-end">
        
        {/* Glow Layer (Blurry) */}
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="absolute inset-x-0 bottom-0 top-[20%] w-[200%] flex blur-[10px]"
        >
          <svg fill="none" className="w-[50%] h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
             <path d="M0,300 C250,500 350,150 500,200 C650,250 750,450 1000,300" className="stroke-amber-400" strokeWidth="18" vectorEffect="non-scaling-stroke" />
             <path d="M0,200 C300,100 400,300 600,250 C800,200 900,50 1000,200" className="stroke-amber-600" strokeWidth="22" vectorEffect="non-scaling-stroke" />
             <path d="M0,450 C200,550 400,350 550,400 C700,450 850,550 1000,450" className="stroke-yellow-600" strokeWidth="16" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg fill="none" className="w-[50%] h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
             <path d="M0,300 C250,500 350,150 500,200 C650,250 750,450 1000,300" className="stroke-amber-400" strokeWidth="18" vectorEffect="non-scaling-stroke" />
             <path d="M0,200 C300,100 400,300 600,250 C800,200 900,50 1000,200" className="stroke-amber-600" strokeWidth="22" vectorEffect="non-scaling-stroke" />
             <path d="M0,450 C200,550 400,350 550,400 C700,450 850,550 1000,450" className="stroke-yellow-600" strokeWidth="16" vectorEffect="non-scaling-stroke" />
          </svg>
        </motion.div>

        {/* Sharp Focus Lines Layer */}
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="absolute inset-x-0 bottom-0 top-[20%] w-[200%] flex opacity-[0.85]"
        >
          <svg fill="none" className="w-[50%] h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
             <path d="M0,300 C250,500 350,150 500,200 C650,250 750,450 1000,300" className="stroke-amber-200" strokeWidth="3" vectorEffect="non-scaling-stroke" />
             <path d="M0,200 C300,100 400,300 600,250 C800,200 900,50 1000,200" className="stroke-amber-500" strokeWidth="3.5" vectorEffect="non-scaling-stroke" />
             <path d="M0,450 C200,550 400,350 550,400 C700,450 850,550 1000,450" className="stroke-yellow-400" strokeWidth="2" vectorEffect="non-scaling-stroke" />
             
             {/* Secondary accent waves */}
             <path d="M0,520 C300,580 450,400 600,460 C750,520 850,580 1000,520" className="stroke-amber-300" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
             <path d="M0,100 C200,50 350,250 550,200 C750,150 850,100 1000,100" className="stroke-amber-400" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          </svg>
          <svg fill="none" className="w-[50%] h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
             <path d="M0,300 C250,500 350,150 500,200 C650,250 750,450 1000,300" className="stroke-amber-200" strokeWidth="3" vectorEffect="non-scaling-stroke" />
             <path d="M0,200 C300,100 400,300 600,250 C800,200 900,50 1000,200" className="stroke-amber-500" strokeWidth="3.5" vectorEffect="non-scaling-stroke" />
             <path d="M0,450 C200,550 400,350 550,400 C700,450 850,550 1000,450" className="stroke-yellow-400" strokeWidth="2" vectorEffect="non-scaling-stroke" />
             
             {/* Secondary accent waves */}
             <path d="M0,520 C300,580 450,400 600,460 C750,520 850,580 1000,520" className="stroke-amber-300" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
             <path d="M0,100 C200,50 350,250 550,200 C750,150 850,100 1000,100" className="stroke-amber-400" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          </svg>
        </motion.div>
      </div>

      {/* Gentle top gradient so it doesn't abruptly cut off */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-transparent opacity-90" />
    </div>
  );
}
