"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useSiteReducedMotion } from "./motion-settings";

type ScrollProps = { children: React.ReactNode; className?: string; id?: string };

/** Each section's rule fills as that section travels through the viewport. */
export function ScrollSection({ children, className = "", id }: ScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useSiteReducedMotion();
  const inView = useInView(ref, { amount: 0.05 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return (
    <section ref={ref} id={id} data-in-view={inView} className={`${className} scroll-section`}>
      <motion.span className="section-scroll-line" aria-hidden="true" style={{ scaleX: reduced ? 1 : scrollYProgress }} />
      {children}
    </section>
  );
}

/** Direct scroll mapping keeps the visual tied to the reader's movement. */
export function ScrollVisual({ children, className = "", travel = 24, label }: ScrollProps & { travel?: number; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.12 });
  const reduced = useSiteReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.9, 1, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -2]);
  return (
    <motion.div
      ref={ref}
      className={`${className} scroll-visual`}
      data-in-view={inView}
      aria-label={label}
      style={{ y: reduced ? 0 : y, scale: reduced ? 1 : scale, rotateX: reduced ? 0 : rotateX, transformPerspective: 1200 }}
      initial={false}
      whileInView={reduced ? { opacity: 1 } : { opacity: [0.35, 1] }}
      viewport={{ amount: 0.1, once: false }}
      transition={{ duration: reduced ? 0 : 0.8 }}
    >
      {children}
    </motion.div>
  );
}
