"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { MotionConfig, useReducedMotion } from "motion/react";

const MotionPaused = createContext(false);

export function useSiteReducedMotion() {
  const paused = useContext(MotionPaused);
  const reduced = useReducedMotion();
  return paused || reduced;
}

export function MotionSettings({ children }: { children: React.ReactNode }) {
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    try { setPaused(localStorage.getItem("zitters-motion-paused") === "true"); } catch {}
  }, []);
  function toggle() {
    const next = !paused;
    setPaused(next);
    try { localStorage.setItem("zitters-motion-paused", String(next)); } catch {}
  }
  return <MotionPaused.Provider value={paused}>
    <MotionConfig reducedMotion={paused ? "always" : "user"}>
      <div className="motion-root" data-motion-paused={paused || !!reduced}>
        {children}
        <button className="motion-toggle" onClick={toggle} aria-pressed={paused} disabled={!!reduced} aria-label={reduced ? "Animations disabled by system preference" : paused ? "Resume animations" : "Pause animations"}>
          <span aria-hidden="true">{paused || reduced ? "▶" : "Ⅱ"}</span>
          {reduced ? "Reduced motion" : paused ? "Resume motion" : "Pause motion"}
        </button>
      </div>
    </MotionConfig>
  </MotionPaused.Provider>;
}
