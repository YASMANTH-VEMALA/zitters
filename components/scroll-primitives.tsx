"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useSiteReducedMotion } from "./motion-settings";

/* ── Reveal: fires once on entry (scroll-craft: re-hiding on scroll-up is a defect) ─ */

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useSiteReducedMotion();
  const inView = useInView(ref, { amount: 0.12, once: true });
  const offsets =
    direction === "left"
      ? { x: -40, y: 0 }
      : direction === "right"
        ? { x: 40, y: 0 }
        : direction === "none"
          ? { x: 0, y: 0 }
          : { x: 0, y: 36 };
  return (
    <motion.div
      ref={ref}
      className={`${className} motion-reveal`}
      data-in-view={inView}
      initial={false}
      animate={
        inView || reduceMotion
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
          : { opacity: 0, ...offsets, filter: "blur(6px)" }
      }
      transition={{
        duration: reduceMotion ? 0 : 0.9,
        delay: reduceMotion ? 0 : Math.min(delay, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── MaskedHeadline (MengTo masked-reveal): words rise through an overflow mask ─ */

export function MaskedHeadline({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useSiteReducedMotion();
  const inView = useInView(ref, { amount: 0.4, once: true });
  const words = useMemo(() => children.split(/(\s+)/), [children]);
  return (
    <Tag className={`${className} masked-headline`} aria-label={children}>
      <span ref={ref} className="masked-headline-inner" aria-hidden="true">
        {words.map((part, i) =>
          part.trim() === "" ? (
            <span key={i}>{part}</span>
          ) : (
            <span key={i} className="word-mask">
              <motion.span
                className="word"
                initial={false}
                animate={inView || reduceMotion ? { y: "0%" } : { y: "115%" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : Math.min(i * 0.012, 0.4),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {part}
              </motion.span>
            </span>
          ),
        )}
      </span>
    </Tag>
  );
}

/* ── StaggeredWords (MengTo staggered-word-reveal): editorial fade-and-rise ─ */

export function StaggeredWords({
  children,
  className = "",
  stagger = 0.06,
}: {
  children: string;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useSiteReducedMotion();
  const inView = useInView(ref, { amount: 0.35, once: true });
  const words = useMemo(() => children.split(/(\s+)/), [children]);
  let wordIndex = 0;
  return (
    <p ref={ref} className={`${className} word-reveal`} aria-label={children}>
      {words.map((part, i) => {
        if (part.trim() === "") return <span key={i}>{part}</span>;
        const idx = wordIndex++;
        return (
          <motion.span
            key={i}
            className="word-reveal__word"
            aria-hidden="true"
            initial={false}
            animate={
              inView || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : Math.min(idx * stagger, 0.9),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {part}
          </motion.span>
        );
      })}
    </p>
  );
}

/* ── ScrubbedWords (MengTo scroll-scrubbed-word-reveal): scroll paces comprehension ─
   Walks real child nodes so <mark>/<strong>/<a> emphasis survives the split. */

function splitNode(node: ReactNode, keyPrefix: string): ReactNode[] {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, i) =>
      part.trim() === "" ? (
        <span key={`${keyPrefix}-${i}`}>{part}</span>
      ) : (
        <ScrubWord key={`${keyPrefix}-${i}`} text={part} />
      ),
    );
  }
  if (Array.isArray(node)) return node.flatMap((n, i) => splitNode(n, `${keyPrefix}-${i}`));
  if (isValidElement<{ children?: ReactNode }>(node)) {
    const kids = Children.toArray(node.props.children).flatMap((c, i) =>
      splitNode(c, `${keyPrefix}-${i}`),
    );
    return [cloneElement(node, { key: keyPrefix } as Record<string, unknown>, ...kids)];
  }
  return [node];
}

function ScrubWord({ text }: { text: string }) {
  return (
    <span className="scrub-word" data-scrub-word aria-hidden="true">
      {text}
    </span>
  );
}

export function ScrubbedWords({
  children,
  className = "",
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useSiteReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  useEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const words = Array.from(el.querySelectorAll<HTMLElement>("[data-scrub-word]"));
    if (words.length === 0) return;
    const update = (p: number) => {
      const reveal = Math.min(1, Math.max(0, p));
      for (let i = 0; i < words.length; i++) {
        const local = Math.min(1, Math.max(0, reveal * words.length - i));
        words[i].style.setProperty("--word-progress", local.toFixed(3));
      }
    };
    update(scrollYProgress.get());
    el.dataset.enhanced = "true";
    const unsub = scrollYProgress.on("change", update);
    return () => {
      unsub();
      delete el.dataset.enhanced;
    };
  }, [scrollYProgress, reduceMotion]);

  return (
    <div
      ref={ref}
      className={`${className} scrubbed-words`}
      data-reduced={reduceMotion ? "true" : "false"}
      role="text"
      aria-label={label}
    >
      <span className="scrubbed-accessible">{children}</span>
      <span className="scrubbed-visual" aria-hidden="true">
        {splitNode(children, "w")}
      </span>
    </div>
  );
}

/* ── CountUp (scroll-craft data-sc-count): number bloom across the cue window ─ */

export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className = "",
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.6, once: true });
  const reduceMotion = useSiteReducedMotion();
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    if (reduceMotion) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* ── Parallax plane (scroll-craft data-sc-parallax) ─ */

export function Parallax({
  children,
  rate = -0.12,
  className = "",
}: {
  children: ReactNode;
  rate?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useSiteReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${rate * -100}vh`, `${rate * 100}vh`]);
  return (
    <motion.div ref={ref} className={className} style={{ y: reduceMotion ? 0 : y }}>
      {children}
    </motion.div>
  );
}

/* ── ScrollAct: section rule fills as the section travels (scroll-craft act progress) ─ */

export function ScrollAct({
  children,
  className = "",
  id,
  drift,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  drift?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useSiteReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const style = drift
    ? ({ "--act-drift": drift } as CSSProperties)
    : undefined;
  return (
    <section ref={ref} id={id} className={`${className} scroll-act`} style={style}>
      <motion.span
        className="act-progress-line"
        aria-hidden="true"
        style={{ scaleX: reduceMotion ? 1 : scrollYProgress }}
      />
      {children}
    </section>
  );
}

/* ── Pointer devices (scroll-craft): tilt / magnet / spotlight, fine pointers only ─ */

export function Tilt({
  children,
  className = "",
  degrees = 6,
}: {
  children: ReactNode;
  className?: string;
  degrees?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useSiteReducedMotion();
  const [fine, setFine] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!fine || reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };
    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.transform = `perspective(1100px) rotateX(${(-cy * degrees).toFixed(2)}deg) rotateY(${(cx * degrees).toFixed(2)}deg)`;
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.style.transform = "";
    };
  }, [fine, reduceMotion, degrees]);

  return (
    <div ref={ref} className={`${className} tilt-surface`}>
      {children}
    </div>
  );
}

export function Magnet({
  children,
  className = "",
  strength = 0.25,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useSiteReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.translate = `${(dx * strength).toFixed(1)}px ${(dy * strength).toFixed(1)}px`;
    };
    const onLeave = () => {
      el.style.translate = "0px 0px";
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduceMotion, strength]);

  return (
    <div ref={ref} className={`${className} magnet-surface`}>
      {children}
    </div>
  );
}

export function Spotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--sc-mx", ((e.clientX - r.left) / r.width).toFixed(3));
      el.style.setProperty("--sc-my", ((e.clientY - r.top) / r.height).toFixed(3));
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div ref={ref} className={`${className} spotlight-surface`}>
      {children}
    </div>
  );
}

/* ── Shared scroll progress passthrough for pinned choreography ─ */

export function useActProgress(ref: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return scrollYProgress;
}

export type { MotionValue };
