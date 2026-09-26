"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "motion/react";
import {
  IconArrowLeft, IconArrowRight, IconBell, IconChartBar, IconCheck,
  IconCreditCard, IconDeviceMobile, IconQrcode, IconSparkles, IconUsers,
  IconX, IconBolt, IconBrandWhatsapp, IconFileText, IconCalendar, IconFlame
} from "@tabler/icons-react";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { Reveal } from "./reveal";
import { ScrollSection, ScrollVisual } from "./scroll-motion";

const transformations = [
  {
    oldWay: "Paper Registers",
    title: "Instant QR Attendance",
    copy: "No manual log books or front-desk queues. Members scan their unique QR on arrival and enter in under 2 seconds.",
    newWay: "100% Paperless Check-In",
  },
  {
    oldWay: "Manual Fee Chasing",
    title: "Automated WhatsApp Payments",
    copy: "Replace uncomfortable reminder phone calls with automated WhatsApp alerts containing one-tap UPI payment links.",
    newWay: "Zero Fee Leakage",
  },
  {
    oldWay: "Lost Expiry Dates",
    title: "Real-Time Member CRM",
    copy: "Know exactly who is active, due for renewal, or expired. Admission codes and member profiles in one searchable cloud database.",
    newWay: "Searchable Member Cloud",
  },
  {
    oldWay: "Paper Workout Sheets",
    title: "Member Mobile Experience",
    copy: "Give gym members a dedicated smartphone app for attendance streaks, membership validity, workouts, and gym notifications.",
    newWay: "Branded Member Mobile App",
  },
];

const modules = [
  { icon: IconUsers, title: "Member CRM", copy: "Searchable member database, plans, emergency contacts, active/expired status and visit histories in one screen." },
  { icon: IconCreditCard, title: "Fees & Payments", copy: "Track monthly collections, automated payment receipts, outstanding dues, and revenue projections." },
  { icon: IconQrcode, title: "Dual QR Journeys", copy: "Instant branch admission and front-desk attendance flows without manual staff supervision or queues." },
  { icon: IconBell, title: "Automated Communication", copy: "WhatsApp and mobile alerts for upcoming fee dues, birthday wishes, workout streaks, and gym announcements." },
  { icon: IconDeviceMobile, title: "Member Mobile App", copy: "A clean mobile home for your members to check in, track personal workout streaks, view receipts, and refer friends." },
  { icon: IconChartBar, title: "Owner Growth Insights", copy: "Real-time metrics on member retention, daily footfall peak hours, revenue collected, and staff attendance." },
];

export function GymOSPage() {
  const { scrollYProgress } = useScroll();
  return (
    <main className="gym-page">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <SiteHeader dark />

      {/* Hero Section */}
      <ScrollSection className="gym-hero">
        <div className="gym-gridlines" />
        <div className="site-shell gym-hero-inner">
          <motion.div className="gym-crumb" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/"><IconArrowLeft size={14} /> Back to Zitters Platform</Link>
            <span>/</span>
            <b>GymOS (Flagship Vertical SaaS)</b>
          </motion.div>
          <motion.div className="gym-product-id" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <span>G</span>
            <div>
              <small>ZITTERS VERTICAL SAAS PRODUCT</small>
              <strong>GymOS</strong>
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            Run your gym.<br />
            <span>Grow your community.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
            The all-in-one software operating system that converts paper registers, lost fee dues, and front-desk bottlenecks into automated cloud software.
          </motion.p>
          <motion.div className="gym-hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>
            <Link href="https://gym-ecosystem-web-theta.vercel.app/dashboard" target="_blank" className="gym-primary">
              Open Live GymOS Dashboard <IconArrowRight size={17} />
            </Link>
            <Link href="#tour" className="gym-secondary">
              Explore All Modules & Data
            </Link>
          </motion.div>
          <ScrollVisual className="gym-hero-screen" travel={30}>
            <div className="screen-chrome">
              <i /><i /><i />
              <span>gymos.app/dashboard · Live Owner Command Center</span>
            </div>
            <Image src="/gym-dashboard.png" alt="GymOS owner dashboard" width={1918} height={954} preload />
          </ScrollVisual>
        </div>
      </ScrollSection>

      {/* Proof Bar */}
      <ScrollSection className="gym-proof">
        <Reveal className="site-shell">
          <span>OPERATIONAL PROOF FROM LIVE GYMS</span>
          <div>
            <p>
              <strong>100% Paperless</strong>
              <small>QR attendance & digital records</small>
            </p>
            <p>
              <strong>&lt; 2 Second Check-in</strong>
              <small>zero front-desk queues</small>
            </p>
            <p>
              <strong>98.4% Fee Recovery</strong>
              <small>automated WhatsApp UPI alerts</small>
            </p>
          </div>
        </Reveal>
      </ScrollSection>

      {/* Manual to Software Transformation for Gyms */}
      <ScrollSection className="gym-transformation-section section-pad">
        <div className="site-shell">
          <Reveal className="gym-section-heading">
            <span className="eyebrow-text">OUR MOTTO IN ACTION</span>
            <h2>
              Converting manual gym work<br />
              <span>into automated software.</span>
            </h2>
            <p>
              Gym owners lose up to 15 hours each week managing paper registers, manually verifying expired plans, and awkwardly following up on fee dues. GymOS replaces the manual hustle with clean, reliable software.
            </p>
          </Reveal>

          <div className="gym-transform-grid">
            {transformations.map((t, idx) => (
              <Reveal className="gym-transform-card" key={t.title} delay={idx * 0.06}>
                <span className="old-way">Replaces: {t.oldWay}</span>
                <h4>{t.title}</h4>
                <p>{t.copy}</p>
                <div className="new-way">
                  <IconCheck size={14} />
                  <span>{t.newWay}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Member Management Deep Dive */}
      <ScrollSection className="gym-story section-pad" id="tour">
        <div className="site-shell">
          <Reveal className="gym-section-heading">
            <span className="eyebrow-text">01 · MEMBER RELATIONSHIPS & CRM</span>
            <h2>
              Every member record,<br />
              instantly searchable.
            </h2>
            <p>
              Say goodbye to physical binders and paper registration slips. Search your entire gym membership base by name, phone number, admission code, or plan status in milliseconds.
            </p>
          </Reveal>
          <div className="story-block">
            <Reveal direction="left" className="story-copy">
              <span>MEMBER INTELLIGENCE</span>
              <h3>No more lost renewals or expired memberships slipping through.</h3>
              <p>
                GymOS gives front-desk staff and owners complete visibility into active plans, upcoming expiries, and daily visits without switching between screens or cross-referencing ledger notebooks.
              </p>
              <ul>
                <li><IconCheck size={15} /> Live active, expiring, and expired member indicators</li>
                <li><IconCheck size={15} /> One-click renewal links dispatched directly to WhatsApp</li>
                <li><IconCheck size={15} /> Complete check-in timestamps and visit history logs</li>
              </ul>
            </Reveal>
            <ScrollVisual className="story-screen">
              <div className="screen-chrome"><i /><i /><i /></div>
              <Image src="/gym-members.png" alt="GymOS member management" width={1918} height={954} />
            </ScrollVisual>
          </div>
        </div>
      </ScrollSection>

      {/* All 6 Core Modules Grid */}
      <ScrollSection className="gym-feature-dark section-pad">
        <div className="site-shell">
          <Reveal className="gym-section-heading centered light-title">
            <span className="eyebrow-text">COMPLETE GYM SUITE</span>
            <h2>The operational toolkit for modern gyms.</h2>
            <p>
              Every module is designed to eliminate a manual task, improve member experience, and protect your gym's bottom line.
            </p>
          </Reveal>
          <div className="gym-module-grid">
            {modules.map((module, index) => (
              <Reveal className="gym-module" delay={index * 0.05} key={module.title}>
                <span><module.icon size={23} /></span>
                <small>0{index + 1}</small>
                <h3>{module.title}</h3>
                <p>{module.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Member Mobile Application Experience */}
      <ScrollSection className="gym-split-feature section-pad">
        <div className="site-shell split-feature-inner">
          <ScrollVisual className="mobile-product">
            <div className="mobile-halo" />
            <div className="phone-frame">
              <span />
              <Image src="/gym-mobile.png" alt="GymOS member mobile experience" width={486} height={875} />
            </div>
            <div className="mobile-float float-attendance">
              <IconCheck size={16} />
              <p>
                <strong>Attendance marked</strong>
                <small>10:42 am · Main branch</small>
              </p>
            </div>
            <div className="mobile-float float-streak">
              <IconSparkles size={16} />
              <p>
                <strong>12 day workout streak</strong>
                <small>Personal best</small>
              </p>
            </div>
          </ScrollVisual>
          <Reveal direction="right" className="member-copy" delay={0.1}>
            <span className="eyebrow-text">MEMBER SMARTPHONE APP</span>
            <h2>Give members a reason to stay engaged.</h2>
            <p>
              A clean mobile experience keeps members connected to your gym every single day—attendance check-in, workout tracking, renewal alerts, and community announcements in one sleek mobile interface.
            </p>
            <div>
              <span>
                <b>01</b>
                <p>
                  <strong>One-Tap QR Attendance</strong>
                  <small>Fast, contactless check-in from their own phone without waiting in front-desk queues.</small>
                </p>
              </span>
              <span>
                <b>02</b>
                <p>
                  <strong>Workout Streaks & Progress</strong>
                  <small>Visual streak counter motivates regular visits and boosts annual membership renewals.</small>
                </p>
              </span>
              <span>
                <b>03</b>
                <p>
                  <strong>Instant Invoices & Digital Receipts</strong>
                  <small>Members can view past payment receipts, plan validity, and locker assignments anytime.</small>
                </p>
              </span>
            </div>
          </Reveal>
        </div>
      </ScrollSection>

      {/* Gallery of Live GymOS Screens */}
      <ScrollSection className="gym-gallery section-pad">
        <div className="site-shell">
          <Reveal className="gym-section-heading">
            <span className="eyebrow-text">PRODUCT TOUR</span>
            <h2>Clear screens for real work.</h2>
            <p>
              Built specifically for gym owners and desk staff. Fast, quiet interfaces that require zero training to operate.
            </p>
          </Reveal>
          <div className="gallery-grid">
            <Reveal className="gallery-card wide">
              <div>
                <span>Fee Collection Engine</span>
                <h3>Collections without awkward follow-ups</h3>
              </div>
              <Image src="/gym-fees.png" alt="GymOS fee management" width={1918} height={954} />
            </Reveal>
            <Reveal className="gallery-card">
              <div>
                <span>QR Check-In System</span>
                <h3>Admission and attendance simplified</h3>
              </div>
              <Image src="/gym-qr.png" alt="GymOS QR code management" width={1918} height={954} />
            </Reveal>
            <Reveal className="gallery-card">
              <div>
                <span>Automated Messaging</span>
                <h3>Stay connected between gym visits</h3>
              </div>
              <Image src="/gym-notifications.png" alt="GymOS notifications" width={1918} height={954} />
            </Reveal>
          </div>
        </div>
      </ScrollSection>

      {/* GymOS + Zitters Growth Engine */}
      <ScrollSection className="gym-growth section-pad">
        <div className="site-shell">
          <Reveal className="growth-banner">
            <div>
              <span className="eyebrow-text">GYMOS + META & GOOGLE GROWTH</span>
              <h2>
                Operate smoothly today.<br />
                Acquire members tomorrow.
              </h2>
              <p>
                GymOS connects directly to Zitters' Meta and Google growth engines. Target local fitness seekers on Instagram & Google Maps, funnel them directly into automated WhatsApp trial offers, and enroll them as paying members right inside GymOS.
              </p>
              <div className="growth-tags">
                <span>Instagram Ad Ingestion</span>
                <span>Google Maps #1 Ranking</span>
                <span>Automated 5★ Review Collector</span>
                <span>WhatsApp Trial Booking</span>
              </div>
            </div>
            <div className="growth-orbit">
              <div>
                <span>G</span>
                <strong>GymOS</strong>
              </div>
              <i className="orbit-line one" />
              <i className="orbit-line two" />
              <span className="orbit-item item-ai">Meta</span>
              <span className="orbit-item item-chat">WhatsApp</span>
              <span className="orbit-item item-map">Google</span>
            </div>
          </Reveal>
        </div>
      </ScrollSection>

      {/* Final Call to Action */}
      <ScrollSection className="gym-final">
        <Reveal className="site-shell">
          <span className="gym-product-small">GYMOS BY ZITTERS</span>
          <h2>
            Your gym already has momentum.<br />
            <span>Give it a modern operating system.</span>
          </h2>
          <p>
            Experience the live GymOS dashboard and see how easy it is to convert your gym's manual registers into software.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <Link
              href="https://gym-ecosystem-web-theta.vercel.app/dashboard"
              target="_blank"
              className="gym-primary"
            >
              Open Live GymOS Dashboard <IconArrowRight size={17} />
            </Link>
            <Link href="/" className="gym-secondary">
              ← Back to All Zitters Products
            </Link>
          </div>
        </Reveal>
      </ScrollSection>

      <SiteFooter />
    </main>
  );
}
