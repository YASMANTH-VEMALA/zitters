"use client";

import { useRef, type CSSProperties } from "react";
import { useSiteReducedMotion } from "./motion-settings";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { IconArrowRight, IconSearch, IconMessageCircle, IconBolt, IconChartBar } from "@tabler/icons-react";

const stages = [
  { icon: IconSearch, title: "Be discovered", label: "Meta & Google Presence", color: "#2563eb", copy: "Capture high-intent local demand through top-ranked Google Search, Google Maps, and precision Meta (Instagram & Facebook) ads." },
  { icon: IconMessageCircle, title: "Convert attention", label: "Instant WhatsApp Routing", color: "#168367", copy: "Engage every inbound lead in under 4 seconds over WhatsApp. Answer questions, share brochures, and schedule visits automatically." },
  { icon: IconBolt, title: "Manual to software", label: "Paperless Operations", color: "#7c3aed", copy: "Replace paper registers, manual spreadsheets, and fee diaries with tailored industry software, QR attendance, and automated billing." },
  { icon: IconChartBar, title: "Compounding scale", label: "Reviews & AI Retention", color: "#b77908", copy: "Collect 5-star Google reviews on autopilot, track renewals before they lapse, and let AI recommendations drive steady business growth." },
];

function GrowthStage({ stage, index, progress }: { stage: typeof stages[number]; index: number; progress: MotionValue<number> }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useSiteReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "start 55%"] });
  const start = index * 0.19;
  const end = start + 0.2;
  const y = useTransform(progress, [start, end], [32 + index * 8, 0]);
  const opacity = useTransform(progress, [start, end], [0.38, 1]);
  const fill = useTransform(progress, [start, end], [0, 1]);
  const mobileY = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const mobileOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const mobileFill = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.article ref={ref} className="growth-stage" style={{
      "--stage-color": stage.color,
      "--stage-y": reduced ? 0 : y,
      "--stage-opacity": reduced ? 1 : opacity,
      "--stage-fill": reduced ? 1 : fill,
      "--mobile-y": reduced ? 0 : mobileY,
      "--mobile-opacity": reduced ? 1 : mobileOpacity,
      "--mobile-fill": reduced ? 1 : mobileFill,
    } as CSSProperties}>
      <div className="growth-stage-top"><span className="growth-stage-icon"><stage.icon size={26} stroke={1.6} /></span><span className="growth-stage-number">0{index + 1}</span></div>
      <h3>{stage.title}</h3>
      <p>{stage.copy}</p>
      <span className="growth-stage-label">{stage.label}</span>
      <span className="growth-stage-track" aria-hidden="true"><i /></span>
    </motion.article>
  );
}

export function GrowthJourney() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useSiteReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 100px", "end end"] });
  const headlineColor = useTransform(scrollYProgress, [0, 0.65], ["#929292", "#171717"]);
  return (
    <section ref={ref} className="growth-journey" id="solutions" aria-labelledby="growth-journey-title">
      <div className="growth-journey-sticky site-shell">
        <div className="growth-journey-heading">
          <span className="eyebrow-text">Built around growth, not software bloat</span>
          <h2 id="growth-journey-title">Most businesses don’t need more paperwork.<br /><motion.span style={{ color: reduced ? "#171717" : headlineColor }}>They need manual work converted to software.</motion.span></h2>
          <div className="growth-journey-intro"><p>Lead generation from Meta and Google connects directly with dedicated vertical software—so every enquiry becomes a paying customer, and operations run on autopilot.</p><span className="growth-scroll-hint"><IconArrowRight size={15} /> Scroll through the journey</span></div>
        </div>
        <div className="growth-journey-rail" aria-hidden="true"><motion.i style={{ scaleX: reduced ? 1 : scrollYProgress }} /></div>
        <div className="growth-journey-grid">{stages.map((stage, index) => <GrowthStage key={stage.title} stage={stage} index={index} progress={scrollYProgress} />)}</div>
        <div className="growth-journey-caption"><span>Four connected stages.</span><span>From manual grind to automated scale.</span></div>
      </div>
    </section>
  );
}


