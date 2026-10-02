"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [lifting, setLifting] = useState(false);

  const exit = useCallback(() => {
    setLifting(true);
    setTimeout(() => setVisible(false), 700);
  }, []);

  useEffect(() => {
    // Always show for full 2.2s — no session shortcut that makes it feel broken
    const t = setTimeout(exit, 2200);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && exit();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [exit]);

  if (!visible) return null;

  return (
    <div
      className={`zsp ${lifting ? "zsp-lift" : ""}`}
      onClick={exit}
      aria-hidden="true"
    >
      {/* Radial glow that matches the logo colours */}
      <div className="zsp-glow" />

      {/* The logo — large and centred, nothing else */}
      <div className={`zsp-logo-wrap ${lifting ? "" : "zsp-pop"}`}>
        <Image
          src="/brand-mark.png"
          alt="Zitters"
          width={200}
          height={200}
          priority
          className="zsp-img"
        />
      </div>
    </div>
  );
}
