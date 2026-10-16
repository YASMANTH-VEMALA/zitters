"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Smooth-scroll engine (scroll-craft act I + MengTo cinematic-scroll-storytelling).
 * Lenis on wheel only, gated to fine pointers + no-preference motion.
 * Anchor links keep native jump with scroll-margin; Lenis handles the glide.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;
    // Touch devices keep native momentum. Desktop wheels get a restrained glide.
    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const syncMotion = () => {
      const paused = document.querySelector(".motion-root")?.getAttribute("data-motion-paused") === "true";
      if (reducedMotion.matches || paused) lenis.stop();
      else lenis.start();
    };
    const motionRoot = document.querySelector(".motion-root");
    const observer = new MutationObserver(syncMotion);
    if (motionRoot) observer.observe(motionRoot, { attributes: true, attributeFilter: ["data-motion-paused"] });
    reducedMotion.addEventListener("change", syncMotion);
    syncMotion();

    // Glide for same-page anchors instead of a hard jump.
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const hash = href.slice(href.indexOf("#"));
      if (hash.length < 2) return;
      // Only same-page links: "/#x" on "/" or "#x" anywhere.
      const url = new URL(anchor.href, window.location.href);
      if (url.pathname !== window.location.pathname) return;
      if (reducedMotion.matches || document.querySelector(".motion-root")?.getAttribute("data-motion-paused") === "true") return;
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -84, duration: 1.05 });
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      reducedMotion.removeEventListener("change", syncMotion);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
