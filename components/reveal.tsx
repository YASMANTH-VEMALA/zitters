"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useSiteReducedMotion } from "./motion-settings";

export function Reveal({ children, className = "", delay = 0, direction = "up" }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useSiteReducedMotion();
  const inView = useInView(ref, { amount: 0.12 });
  return (
    <motion.div
      ref={ref}
      className={`${className} motion-reveal`}
      data-in-view={inView}
      initial={false}
      whileInView={reduceMotion ? { opacity: 1, x: 0, y: 0 } : {
        opacity: [0.12, 1],
        y: direction === "up" ? [64, 0] : 0,
        x: direction === "left" ? [-48, 0] : direction === "right" ? [48, 0] : 0,
      }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 1.05, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
