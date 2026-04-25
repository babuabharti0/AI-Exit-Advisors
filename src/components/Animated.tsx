import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useIsMobile } from "../hooks/useIsMobile";

type AnimationVariant = "fadeUp" | "fadeIn";

interface AnimatedProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  id?: string;
}

export default function Animated({ children, variant = "fadeUp", delay = 0, className = "", id }: AnimatedProps) {
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

  return (
    <motion.div
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ duration: isMobile ? 0.3 : 0.6, ease: [0.22, 1, 0.36, 1], delay: isMobile ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
