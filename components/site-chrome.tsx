"use client";
import Link from "next/link";
import { IconArrowRight, IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Reveal } from "./reveal";

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 12); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`suite-header ${scrolled ? "scrolled" : ""} ${dark ? "on-dark" : ""}`}><div className="site-shell suite-nav"><Link href="/"><Logo /></Link><nav className="suite-links"><Link href="/#products">Products <IconChevronDown size={14} /></Link><Link href="/#agenda">Our Agenda & Motto</Link><Link href="/#growth-engine">Meta & Google Growth</Link><Link href="/products/gymos" className="header-product-pill"><span>GymOS</span><small>Live</small></Link></nav><div className="suite-actions"><Link className="nav-signin" href="https://gym.zitters.com/login" target="_blank">Sign in</Link><Link className="nav-cta" href="/#contact">Get started <IconArrowRight size={15} /></Link><button aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <IconX /> : <IconMenu2 />}</button></div></div>{open && <nav className="suite-mobile"><Link href="/#products" onClick={() => setOpen(false)}>Products</Link><Link href="/#agenda" onClick={() => setOpen(false)}>Our Agenda & Motto</Link><Link href="/#growth-engine" onClick={() => setOpen(false)}>Meta & Google Growth</Link><Link href="/products/gymos" onClick={() => setOpen(false)}>GymOS (Live Product)</Link><Link href="https://gym.zitters.com/login" target="_blank">Sign in</Link></nav>}</header>;
}
export function SiteFooter() {
  return (
    <footer className="suite-footer">
      <Reveal className="site-shell footer-top">
        <div className="footer-intro">
          <Logo />
          <p>
            Converting manual work to software.<br />
            Helping businesses grow with Meta & Google.
          </p>
        </div>
        <div className="footer-columns">
          <div>
            <strong>Growth Agenda</strong>
            <Link href="/#agenda">Our Core Motto</Link>
            <Link href="/#growth-engine">Meta Business Growth</Link>
            <Link href="/#growth-engine">Google Search & Maps</Link>
            <Link href="/#solutions">Growth Flywheel</Link>
          </div>
          <div>
            <strong>Products Suite</strong>
            <Link href="/products/gymos">GymOS (Live)</Link>
            <span>CommerceOS · Soon</span>
            <span>SalonOS · Soon</span>
            <span>ClinicOS · Soon</span>
          </div>
          <div>
            <strong>Company & Support</strong>
            <Link href="/#contact">Contact & Audit</Link>
            <Link href="mailto:zitters.contact@gmail.com">Help Line: zitters.contact@gmail.com</Link>
            <Link href="mailto:zitters.contact@gmail.com">Partner with us</Link>
            <Link href="https://gym.zitters.com/login" target="_blank">GymOS Dashboard</Link>
          </div>
        </div>
      </Reveal>
      <div className="site-shell footer-base">
        <span>© {new Date().getFullYear()} Zitters Technologies</span>
        <span>Converting manual work to software. Built for businesses everywhere.</span>
      </div>
    </footer>
  );
}
