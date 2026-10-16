"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  IconArrowLeft, IconArrowRight, IconArrowUpRight, IconBell,
  IconCheck, IconCreditCard, IconDeviceMobile, IconQrcode, IconUsers,
} from "@tabler/icons-react";
import { ExperienceFooter, ExperienceHeader } from "./experience-chrome";
import { Reveal, ScrubbedWords } from "./scroll-primitives";

const views = [
  { id: "members", number: "01", label: "Members", icon: IconUsers, image: "/gym-members.png", alt: "GymOS member list and management interface", title: "The member story, in one place.", copy: "Find a person, see their plan and understand their status without searching through a register or switching spreadsheets.", details: ["Searchable member profiles", "Plan and status context", "A clearer starting point for renewals"] },
  { id: "attendance", number: "02", label: "Attendance", icon: IconQrcode, image: "/gym-qr.png", alt: "GymOS QR attendance management interface", title: "A check-in that becomes a useful record.", copy: "QR attendance gives the front desk a simple flow and gives owners a visit history they can actually use.", details: ["QR-based check-in", "Visit history", "A connected member record"] },
  { id: "fees", number: "03", label: "Fees", icon: IconCreditCard, image: "/gym-fees.png", alt: "GymOS fee tracking interface", title: "Know what is due and what is done.", copy: "Keep plans, payments and outstanding fees visible together so follow-up is based on the right information.", details: ["Fee status at a glance", "Payment context", "Renewal visibility"] },
  { id: "messages", number: "04", label: "Messages", icon: IconBell, image: "/gym-notifications.png", alt: "GymOS notifications and messaging interface", title: "Stay connected between visits.", copy: "Use member context to plan relevant reminders and announcements instead of sending the same message to everyone.", details: ["Notification workspace", "Member-related updates", "A more timely conversation"] },
];

const gymFaq = [
  { q: "Can my team see both the desk and owner views?", a: "GymOS presents daily operations and an owner dashboard in separate product views. Ask the Zitters team to walk through the access setup for your roles." },
  { q: "Can members use GymOS on their phones?", a: "The product includes a member-facing mobile experience for details such as attendance, membership information and updates. The exact rollout can be discussed for your gym." },
  { q: "Can we discuss moving existing records?", a: "Yes. Bring a sample of your current records to a product conversation. The team can assess formats, cleanup needs and a practical import plan." },
  { q: "Where can I see the product?", a: "The screens on this page show the GymOS interface. Use the dashboard link if you already have access, or email Zitters to arrange a guided walkthrough." },
];

function Viewer() {
  const [active, setActive] = useState(0);
  const view = views[active];
  return (
    <section className="ex-gym-viewer" id="explore">
      <div className="ex-container">
        <div className="ex-gym-viewer-head"><div><span className="ex-kicker">Inside the product</span><h2>See the work,<br /><em>not just the pitch.</em></h2></div><p>Choose a part of the day. The screens below are the GymOS product views provided with this site.</p></div>
        <div className="ex-gym-tabs" role="tablist" aria-label="GymOS product views">
          {views.map((item, index) => { const Icon = item.icon; return <button key={item.id} type="button" role="tab" id={`tab-${item.id}`} aria-controls="gym-view-panel" aria-selected={index === active} tabIndex={index === active ? 0 : -1} className={index === active ? "is-active" : ""} onClick={() => setActive(index)} onKeyDown={(event) => { if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return; event.preventDefault(); const next = (active + (event.key === "ArrowRight" ? 1 : -1) + views.length) % views.length; setActive(next); document.getElementById(`tab-${views[next].id}`)?.focus(); }}><Icon size={19} stroke={1.6} /><span>{item.label}</span><b>{item.number}</b></button>; })}
        </div>
        <div className="ex-gym-panel" role="tabpanel" id="gym-view-panel" aria-labelledby={`tab-${view.id}`}>
          <div className="ex-gym-panel-copy"><span className="ex-panel-eyebrow">VIEW {view.number} / {view.label.toUpperCase()}</span><h3>{view.title}</h3><p>{view.copy}</p><ul>{view.details.map((detail) => <li key={detail}><IconCheck size={17} />{detail}</li>)}</ul></div>
          <div className="ex-gym-panel-image" key={view.id}><div className="ex-screen-top"><span><i /><i /><i /></span><small>GymOS / {view.label}</small><b>Product view</b></div><Image src={view.image} alt={view.alt} width={1918} height={954} /></div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceGymOS() {
  return <main className="ex-page ex-gym-page">
    <ExperienceHeader />
    <section className="ex-gym-hero" id="top"><div className="ex-container"><Link className="ex-back-link" href="/"><IconArrowLeft size={16} /> All Zitters</Link><div className="ex-gym-hero-grid"><div><span className="ex-overline"><i /> THE FIRST ZITTERS PRODUCT</span><h1>Your gym,<br /><em>in sync.</em></h1><p>GymOS brings the day into focus: members, attendance, fees, messages and an owner view that belong together.</p><div className="ex-hero-actions"><Link className="ex-button ex-button-dark" href="#explore">Explore the product <IconArrowRight size={18} /></Link><Link className="ex-text-link" href="mailto:zitters.contact@gmail.com?subject=GymOS%20walkthrough">Ask for a walkthrough <IconArrowUpRight size={18} /></Link></div></div><div className="ex-gym-hero-screen"><div className="ex-screen-top"><span><i /><i /><i /></span><small>GymOS / owner dashboard</small><b>Product view</b></div><Image src="/gym-dashboard.png" alt="GymOS owner dashboard" width={1918} height={954} priority /></div></div></div></section>
    <div className="ex-gym-ribbon"><div className="ex-container"><span><IconUsers size={19} /> Member records</span><span><IconQrcode size={19} /> QR attendance</span><span><IconCreditCard size={19} /> Fee tracking</span><span><IconBell size={19} /> Notifications</span><span><IconDeviceMobile size={19} /> Member view</span></div></div>
    <section className="ex-gym-intro"><div className="ex-container ex-gym-intro-grid"><div className="ex-section-index"><span>WHY GYMOS</span><span>01 — 03</span></div><div><ScrubbedWords className="ex-statement-words" label="A busy gym should feel alive, not scattered. One member record connects the visit, the plan and the next conversation.">A busy gym should feel alive, not scattered. <mark>One member record</mark> connects the visit, the plan and the next conversation.</ScrubbedWords><p className="ex-statement-note">The work is still yours. The context no longer has to live in five different places.</p></div></div></section>
    <Viewer />
    <section className="ex-gym-member"><div className="ex-container ex-gym-member-grid"><div className="ex-gym-phone-wrap"><div className="ex-gym-phone"><Image src="/gym-mobile.png" alt="GymOS member mobile experience" width={486} height={875} /></div><div className="ex-gym-phone-note"><span>MEMBER SIDE</span><b>The experience continues after check-in.</b></div></div><div className="ex-gym-member-copy"><span className="ex-kicker">For the member, too</span><h2>A gym that stays<br /><em>in their pocket.</em></h2><p>The member-facing view brings key information and updates closer to the people who use your gym.</p><div className="ex-member-points"><Reveal><span>01</span><div><strong>Know the plan</strong><p>Membership details are easier to find when they are available on a personal screen.</p></div></Reveal><Reveal delay={0.06}><span>02</span><div><strong>See the visits</strong><p>Attendance becomes part of a more connected member experience.</p></div></Reveal><Reveal delay={0.12}><span>03</span><div><strong>Keep in touch</strong><p>Announcements and reminders have a natural home between sessions.</p></div></Reveal></div></div></div></section>
    <section className="ex-gym-flow"><div className="ex-container"><span className="ex-kicker">A better working day</span><h2>One action leads<br />to the next.</h2><div className="ex-gym-flow-grid"><div><IconQrcode size={28} /><b>01</b><h3>Check in</h3><p>A member scans and their visit is captured.</p></div><div><IconUsers size={28} /><b>02</b><h3>Stay current</h3><p>The record keeps attendance and plan context together.</p></div><div><IconCreditCard size={28} /><b>03</b><h3>Follow up</h3><p>Your team sees what needs attention before it gets missed.</p></div></div><p className="ex-data-note">Illustrative workflow using GymOS product areas; timing and outcomes depend on each gym&apos;s setup.</p></div></section>
    <section className="ex-faq" id="gym-questions"><div className="ex-container ex-faq-grid"><div><span className="ex-kicker">Before you begin</span><h2>Questions from<br />gym teams.</h2><p>A product conversation should make the practical details clear.</p></div><div className="ex-faq-list">{gymFaq.map((item) => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></div></section>
    <section className="ex-close ex-gym-close"><div className="ex-container ex-close-inner"><span className="ex-kicker">Bring your gym into focus</span><h2>See what a more<br /><em>connected day feels like.</em></h2><p>Explore your next step with the Zitters team, or sign in if you already use GymOS.</p><div><Link className="ex-button ex-button-light" href="mailto:zitters.contact@gmail.com?subject=GymOS%20walkthrough">Request a walkthrough <IconArrowUpRight size={18} /></Link><Link className="ex-button ex-button-outline" href="https://gym.zitters.com/login" target="_blank" rel="noreferrer">GymOS sign in <IconArrowUpRight size={18} /></Link></div></div></section>
    <ExperienceFooter />
  </main>;
}
