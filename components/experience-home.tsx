"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  IconArrowRight, IconArrowUpRight, IconBrandMeta, IconBrandWhatsapp,
  IconBuildingStore, IconCheck, IconCreditCard, IconMapPin, IconQrcode,
  IconScissors, IconStethoscope, IconUsers,
} from "@tabler/icons-react";
import { ExperienceFooter, ExperienceHeader } from "./experience-chrome";
import { Parallax, Reveal, ScrubbedWords } from "./scroll-primitives";
import { useSiteReducedMotion } from "./motion-settings";

const workflow = [
  {
    label: "01 / Attract",
    title: "Be found by the right people.",
    copy: "A clear Google Business profile and local Meta campaigns help nearby customers discover you when they are ready to act.",
    signal: "Searches, calls and enquiries",
    action: "Give every new enquiry a place to land",
    icon: IconMapPin,
  },
  {
    label: "02 / Respond",
    title: "Keep the conversation moving.",
    copy: "Route enquiries into a WhatsApp conversation, send the details people ask for and give your team one place to follow up.",
    signal: "A question or trial request",
    action: "A clear next step for the customer",
    icon: IconBrandWhatsapp,
  },
  {
    label: "03 / Operate",
    title: "Let software remember the details.",
    copy: "GymOS brings member profiles, plans, attendance, dues and messages into the same working view for owners and staff.",
    signal: "A visit, renewal or payment",
    action: "An up-to-date member record",
    icon: IconQrcode,
  },
];

const operatingData = [
  { number: "01", event: "New enquiry", record: "Lead source and contact", next: "Reply and invite to visit" },
  { number: "02", event: "Member joins", record: "Plan and start date", next: "Make the membership visible to staff" },
  { number: "03", event: "Member arrives", record: "QR check-in", next: "Update the visit history" },
  { number: "04", event: "Plan approaches expiry", record: "Renewal status", next: "Send a timely reminder" },
];

const roadmap = [
  { icon: IconBuildingStore, title: "CommerceOS", status: "In pipeline", copy: "A focused workspace for retail operations and inventory." },
  { icon: IconScissors, title: "SalonOS", status: "In pipeline", copy: "Scheduling and client operations for salons and studios." },
  { icon: IconStethoscope, title: "ClinicOS", status: "In exploration", copy: "A possible future workflow for outpatient teams." },
];

const faq = [
  { q: "Is GymOS the product I can explore now?", a: "Yes. GymOS is the current product shown on this site. The other industry concepts are labeled by their development status." },
  { q: "Can we start with one branch?", a: "That is a sensible starting point. Contact the team with your current member count and the processes you want to improve, and they can scope a pilot with you." },
  { q: "What happens to our existing member records?", a: "Share the formats you use today during a product conversation. The team can review the data, discuss an import plan and clarify what needs manual cleanup before any migration." },
  { q: "Do we have to use every growth channel?", a: "No. The website shows how local discovery, advertising and messaging can connect to operations. The right starting mix depends on where your customers already come from." },
];

function Hero() {
  const reduce = useSiteReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -58]);

  return (
    <section className="ex-hero" ref={heroRef} id="top">
      <div className="ex-hero-orbit ex-hero-orbit-one" aria-hidden="true" />
      <div className="ex-hero-orbit ex-hero-orbit-two" aria-hidden="true" />
      <div className="ex-container ex-hero-grid">
        <div className="ex-hero-copy">
          <span className="ex-overline"><i /> Software for the way local business really works</span>
          <h1>Less admin.<br /><em>More momentum.</em></h1>
          <p>Bring enquiries, members and everyday operations into one connected flow. Zitters starts with GymOS, a focused operating system for gyms.</p>
          <div className="ex-hero-actions">
            <Link className="ex-button ex-button-light" href="/products/gymos">Explore GymOS <IconArrowUpRight size={18} /></Link>
            <Link className="ex-text-link" href="#approach">See the approach <IconArrowRight size={18} /></Link>
          </div>
          <div className="ex-hero-meta"><span>01 / A real product to explore</span><span>02 / A clearer way to grow</span></div>
        </div>
        <motion.div className="ex-hero-visual" style={{ y: reduce ? 0 : imageY }}>
          <div className="ex-screen-label"><span className="ex-live-dot" /> GYMOS / OWNER VIEW</div>
          <div className="ex-screen-shell">
            <div className="ex-screen-top"><span><i /><i /><i /></span><small>GymOS dashboard</small><b>Product view</b></div>
            <Image src="/gym-dashboard.png" alt="GymOS owner dashboard showing the product interface" width={1918} height={954} priority />
          </div>
          <div className="ex-hero-float ex-hero-float-one"><IconUsers size={18} /><span><b>Members</b><small>Profiles, plans and status</small></span></div>
          <div className="ex-hero-float ex-hero-float-two"><IconQrcode size={18} /><span><b>Attendance</b><small>Recorded in one flow</small></span></div>
        </motion.div>
      </div>
      <div className="ex-hero-bottom ex-container"><span>From the first enquiry to the next renewal</span><span>Discover · Connect · Operate</span></div>
    </section>
  );
}

function Statement() {
  return (
    <section className="ex-statement" id="approach">
      <div className="ex-container ex-statement-grid">
        <div className="ex-section-index"><span>THE APPROACH</span><span>01 — 04</span></div>
        <div>
          <ScrubbedWords label="A business grows when the small handoffs work. The enquiry gets answered. The visit gets recorded. The renewal gets noticed. Zitters makes those moments easier to run." className="ex-statement-words">
            A business grows when the small handoffs work. The <mark>enquiry gets answered.</mark> The <mark>visit gets recorded.</mark> The <mark>renewal gets noticed.</mark> Zitters makes those moments easier to run.
          </ScrubbedWords>
          <p className="ex-statement-note">A practical system for the moments that usually live in separate apps, notebooks and someone&apos;s memory.</p>
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = Array.from(listRef.current?.querySelectorAll<HTMLElement>("[data-flow-step]") ?? []);
    if (!nodes.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(Number((visible.target as HTMLElement).dataset.flowStep));
    }, { rootMargin: "-28% 0px -38% 0px", threshold: [0, 0.25, 0.5] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const ActiveIcon = workflow[active].icon;
  return (
    <section className="ex-workflow" id="workflow">
      <div className="ex-container">
        <div className="ex-workflow-heading"><span className="ex-kicker">The connected workflow</span><h2>Three moves.<br /><em>One shared picture.</em></h2><p>Each stage passes useful context to the next. Your team sees what happened and what needs attention.</p></div>
        <div className="ex-workflow-grid">
          <div className="ex-workflow-sticky" aria-live="polite">
            <div className="ex-workflow-panel">
              <div className="ex-workflow-panel-top"><span>THE HANDOFF / {String(active + 1).padStart(2, "0")}</span><span className="ex-panel-dots"><i /><i /><i /></span></div>
              <div className="ex-workflow-icon"><ActiveIcon size={32} stroke={1.5} /></div>
              <strong>{workflow[active].title}</strong>
              <div className="ex-workflow-path"><span>{workflow[active].signal}</span><IconArrowRight size={20} /><span>{workflow[active].action}</span></div>
              <div className="ex-workflow-meter" aria-hidden="true"><span style={{ width: `${((active + 1) / workflow.length) * 100}%` }} /></div>
            </div>
          </div>
          <div ref={listRef} className="ex-workflow-steps">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return <article className="ex-workflow-step" data-flow-step={index} data-active={active === index} key={step.label}>
                <div className="ex-workflow-step-top"><span>{step.label}</span><Icon size={26} stroke={1.5} /></div>
                <h3>{step.title}</h3><p>{step.copy}</p>
                <div className="ex-workflow-step-foot"><span>{step.signal}</span><IconArrowRight size={16} /><span>{step.action}</span></div>
              </article>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="ex-product" id="product">
      <div className="ex-container ex-product-grid">
        <div className="ex-product-copy">
          <span className="ex-kicker">The first Zitters product</span>
          <h2>Meet GymOS<span className="ex-dot">.</span></h2>
          <p className="ex-lead">A calmer way to run a busy gym.</p>
          <p>Member records, QR attendance, fees, messages and an owner view live together. The real product screens tell the story better than a stack of promises.</p>
          <ul className="ex-check-list">
            <li><IconCheck size={18} /> Find a member and their plan quickly</li>
            <li><IconCheck size={18} /> See visits and dues in context</li>
            <li><IconCheck size={18} /> Give members their own mobile view</li>
          </ul>
          <Link className="ex-button ex-button-dark" href="/products/gymos">Take the GymOS tour <IconArrowUpRight size={18} /></Link>
        </div>
        <div className="ex-product-visual">
          <Parallax rate={-0.035}>
            <div className="ex-product-image"><Image src="/gym-members.png" alt="GymOS member management screen" width={1918} height={954} /><span>01 / Member management</span></div>
          </Parallax>
          <div className="ex-product-mobile"><Image src="/gym-mobile.png" alt="GymOS member mobile screen" width={486} height={875} /><span>MEMBER VIEW</span></div>
        </div>
      </div>
    </section>
  );
}

function DataMap() {
  return (
    <section className="ex-data-map" id="details">
      <div className="ex-container">
        <div className="ex-data-head"><div><span className="ex-kicker">New perspective</span><h2>The details that<br /><em>make a difference.</em></h2></div><p>Useful data is the information your team can act on next. Here is how a connected day can unfold.</p></div>
        <div className="ex-data-table" role="table" aria-label="How daily business events become useful next actions">
          <div className="ex-data-row ex-data-labels" role="row"><span role="columnheader">Moment</span><span role="columnheader">What gets captured</span><span role="columnheader">What happens next</span></div>
          {operatingData.map((item) => <div className="ex-data-row" role="row" key={item.number}><span role="cell"><b>{item.number}</b>{item.event}</span><span role="cell">{item.record}</span><span role="cell">{item.next}<IconArrowUpRight size={18} /></span></div>)}
        </div>
        <p className="ex-data-note">This is an illustrative workflow, not a customer performance claim. Specific integrations and setup are scoped with the Zitters team.</p>
      </div>
    </section>
  );
}

function GrowthAndRoadmap() {
  return (
    <>
      <section className="ex-growth" id="growth"><div className="ex-container"><div className="ex-growth-head"><span className="ex-kicker">Beyond the front desk</span><h2>Make the next customer<br />easier to find.</h2><p>Operations and discovery belong in the same conversation. Zitters connects a business&apos;s public presence to the way it handles the interest that follows.</p></div><div className="ex-growth-grid">
        <Reveal className="ex-growth-card"><div className="ex-growth-card-top"><IconBrandMeta size={30} stroke={1.5} /><span>01 / LOCAL DEMAND</span></div><h3>Reach the neighbourhood.</h3><p>Build Meta campaigns around a clear offer and a local audience. Give the enquiry a direct path into a conversation.</p><div className="ex-growth-flow"><span>Ad</span><IconArrowRight size={15} /><span>Enquiry</span><IconArrowRight size={15} /><span>Conversation</span></div></Reveal>
        <Reveal className="ex-growth-card" delay={0.08}><div className="ex-growth-card-top"><IconMapPin size={30} stroke={1.5} /><span>02 / LOCAL DISCOVERY</span></div><h3>Show up with clarity.</h3><p>Keep Google Business details, services, photos and review responses useful for someone deciding where to go.</p><div className="ex-growth-flow"><span>Search</span><IconArrowRight size={15} /><span>Profile</span><IconArrowRight size={15} /><span>Visit</span></div></Reveal>
      </div></div></section>
      <section className="ex-roadmap"><div className="ex-container ex-roadmap-grid"><div><span className="ex-kicker">What comes next</span><h2>One industry<br />at a time.</h2><p>GymOS is available to explore today. These focused ideas show where the product family may go next.</p></div><div className="ex-roadmap-list">{roadmap.map((item) => { const Icon = item.icon; return <div className="ex-roadmap-item" key={item.title}><Icon size={24} stroke={1.5} /><div><strong>{item.title}</strong><p>{item.copy}</p></div><span>{item.status}</span></div>; })}</div></div></section>
    </>
  );
}

function QuestionsAndClose() {
  return <><section className="ex-faq" id="questions"><div className="ex-container ex-faq-grid"><div><span className="ex-kicker">Good questions</span><h2>A few things<br />worth knowing.</h2><p>Clear expectations make better working relationships.</p></div><div className="ex-faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></div></section>
    <section className="ex-close" id="contact"><div className="ex-container ex-close-inner"><span className="ex-kicker">Ready to move forward?</span><h2>Make room for<br /><em>what&apos;s next.</em></h2><p>See GymOS in detail or tell us which part of your operation needs the most attention.</p><div><Link className="ex-button ex-button-light" href="/products/gymos">Explore GymOS <IconArrowUpRight size={18} /></Link><Link className="ex-button ex-button-outline" href="mailto:zitters.contact@gmail.com?subject=Let's%20talk%20about%20Zitters">Talk to Zitters <IconArrowUpRight size={18} /></Link></div></div></section></>;
}

export function ExperienceHome() {
  return <main className="ex-page"><ExperienceHeader /><Hero /><Statement /><Workflow /><Product /><DataMap /><GrowthAndRoadmap /><QuestionsAndClose /><ExperienceFooter /></main>;
}
