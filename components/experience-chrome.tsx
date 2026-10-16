"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll } from "motion/react";
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";

const links = [
  { label: "The approach", href: "/#approach" },
  { label: "How it works", href: "/#workflow" },
  { label: "GymOS", href: "/products/gymos" },
  { label: "Questions", href: "/#questions" },
];

export function ExperienceHeader() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <header className="ex-header">
      <div className="ex-container ex-header-inner">
        <Link href="/" className="ex-brand" aria-label="Zitters home" onClick={() => setOpen(false)}>
          <span className="ex-brand-symbol"><Image src="/brand-mark.png" alt="" width={34} height={34} priority /></span>
          <span>Zitters<span className="ex-brand-period">.</span></span>
        </Link>
        <nav className="ex-nav" aria-label="Primary navigation">
          {links.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="ex-header-actions">
          <Link className="ex-header-contact" href="mailto:zitters.contact@gmail.com?subject=Let's%20talk%20about%20Zitters">
            Let&apos;s talk <IconArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <button className="ex-menu-button" type="button" aria-expanded={open} aria-controls="ex-mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>
      </div>
      <nav id="ex-mobile-nav" className={`ex-mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation" inert={!open}>
        {links.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link href="mailto:zitters.contact@gmail.com?subject=Let's%20talk%20about%20Zitters" onClick={() => setOpen(false)}>Let&apos;s talk <IconArrowUpRight size={18} /></Link>
      </nav>
      <motion.span className="ex-scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
    </header>
  );
}

export function ExperienceFooter() {
  return (
    <footer className="ex-footer">
      <div className="ex-container">
        <div className="ex-footer-top">
          <div>
            <Link href="/" className="ex-brand" aria-label="Zitters home">
              <span className="ex-brand-symbol"><Image src="/brand-mark.png" alt="" width={34} height={34} /></span>
              <span>Zitters<span className="ex-brand-period">.</span></span>
            </Link>
            <p>Purpose-built software for the work that keeps local businesses moving.</p>
          </div>
          <div className="ex-footer-links">
            <div><strong>Explore</strong><Link href="/#approach">The approach</Link><Link href="/#workflow">How it works</Link><Link href="/products/gymos">GymOS</Link></div>
            <div><strong>Connect</strong><Link href="mailto:zitters.contact@gmail.com">Email the team</Link><Link href="https://www.instagram.com/zittersin" target="_blank" rel="noreferrer">Instagram</Link><Link href="https://gym.zitters.com/login" target="_blank" rel="noreferrer">GymOS sign in</Link></div>
          </div>
        </div>
        <div className="ex-footer-bottom"><span>© {new Date().getFullYear()} Zitters Technologies</span><span>Made for the people behind the business.</span></div>
      </div>
    </footer>
  );
}
