"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "motion/react";
import {
  IconArrowRight, IconBolt, IconBrandInstagram, IconBrandMeta, IconBrandWhatsapp,
  IconBuildingStore, IconChartBar, IconCheck, IconChevronRight, IconDeviceMobile,
  IconBrain, IconMapPin, IconMessageCircle, IconMessages, IconRoute,
  IconSearch, IconSparkles, IconStar, IconUsers, IconX, IconCalendar, IconQrcode,
  IconCash, IconShieldCheck, IconScissors, IconStethoscope, IconFileText, IconTrendingUp,
  IconFlame, IconReceipt, IconStars
} from "@tabler/icons-react";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { Reveal } from "./reveal";
import { GoogleMark } from "./google-mark";
import { GrowthJourney } from "./growth-journey";
import { ScrollSection, ScrollVisual } from "./scroll-motion";

const channels = [
  { icon: IconBrandMeta, label: "Meta Business", desc: "Facebook & Instagram Ads" },
  { icon: GoogleMark, label: "Google Business", desc: "Search, Maps & Reviews" },
  { icon: IconBrandWhatsapp, label: "WhatsApp API", desc: "4s Automated Response" },
  { icon: IconBolt, label: "Cloud Software", desc: "Zero Paper Registers" },
  { icon: IconBrain, label: "Zitters AI", desc: "Unified Growth Engine" },
];

function CommandCenter() {
  return (
    <ScrollVisual className="command-center" label="Illustrative Zitters dashboard with sample data" travel={32}>
      <div className="command-topbar">
        <div className="mini-brand">
          <span className="mini-brand-mark">
            <Image src="/brand-mark.png" alt="Zitters" width={18} height={18} />
          </span>
          <strong>Zitters Platform · Growth & Automation OS</strong>
        </div>
        <div className="command-search">
          <IconSearch size={14} /> Multi-channel platform · Live demo
        </div>
        <div className="command-avatar">ZM</div>
      </div>
      <div className="command-body">
        <aside className="command-nav">
          <span className="active"><IconSparkles size={16} /> Growth command</span>
          <span><IconBrandMeta size={16} /> Meta Growth</span>
          <span><IconMapPin size={16} /> Google Business</span>
          <span><IconBolt size={16} /> Manual to Software</span>
          <span><IconBuildingStore size={16} /> Products</span>
        </aside>
        <div className="command-content">
          <div className="command-heading">
            <div>
              <small>ZITTERS GROWTH & AUTOMATION ENGINE</small>
              <h3>Manual grind replaced. Business growing.</h3>
            </div>
            <span className="preview-ai"><IconSparkles size={15} /> Real-time sync</span>
          </div>
          <div className="metric-row">
            <div>
              <span>Meta Ads Leads</span>
              <strong>184</strong>
              <em>+32.4% via Meta & WhatsApp</em>
            </div>
            <div>
              <span>Google Maps Searches</span>
              <strong>1,420</strong>
              <em>+41.8% local discovery</em>
            </div>
            <div>
              <span>Manual Hours Saved</span>
              <strong>340 hrs</strong>
              <em>100% digital records</em>
            </div>
          </div>
          <div className="command-grid">
            <div className="growth-card">
              <div className="card-label">
                <span>Inbound Demand & Conversions</span>
                <small>Last 30 days</small>
              </div>
              <div className="chart-bars">
                {Array.from({ length: 12 }, (_, i) => (
                  <motion.i
                    key={i}
                    initial={false}
                    whileInView={{ scaleY: [0.15, 1] }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.65, delay: i * 0.045 }}
                  />
                ))}
              </div>
              <div className="chart-axis">
                <span>Aug 24 · Meta Campaign</span>
                <span>Sep 20 · Google #1 Rank</span>
              </div>
            </div>
            <div className="ai-actions">
              <div className="card-label">
                <span>Real-time automation activity</span>
                <small>Live triggers</small>
              </div>
              <div className="ai-action">
                <b>01</b>
                <p>
                  <strong>Meta Ad Lead ➔ WhatsApp Reply in 3.4s</strong>
                  <span>Instagram prospect auto-received pricing brochure & trial invite</span>
                </p>
                <IconChevronRight size={16} />
              </div>
              <div className="ai-action">
                <b>02</b>
                <p>
                  <strong>Google Maps ➔ 5★ Review Collected</strong>
                  <span>Automated review prompt generated a 5-star customer rating</span>
                </p>
                <IconChevronRight size={16} />
              </div>
              <div className="ai-action">
                <b>03</b>
                <p>
                  <strong>Manual Register ➔ Cloud Software</strong>
                  <span>140 client records transitioned from paper log to GymOS database</span>
                </p>
                <IconChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div className="live-notice notice-one">
        <span><IconBrandWhatsapp size={17} /></span>
        <div>
          <strong>Meta Lead Converted</strong>
          <small>Instant WhatsApp reply in 3.8s</small>
        </div>
        <b>₹14,500</b>
      </motion.div>
      <motion.div className="live-notice notice-two">
        <span><IconStar size={17} /></span>
        <div>
          <strong>Google Business Verified</strong>
          <small>4.9★ Local Search Rating</small>
        </div>
      </motion.div>
    </ScrollVisual>
  );
}

export function LandingPage() {
  const { scrollYProgress } = useScroll();
  return (
    <main className="home-page">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <SiteHeader />

      {/* Hero Section */}
      <ScrollSection className="main-hero" id="top">
        <div className="site-shell hero-layout">
          <div className="hero-message">
            <motion.div
              className="announcement"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span>OUR MOTTO</span> Converting manual work to software <IconArrowRight size={14} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
            >
              Turn manual business<br />
              <span>into modern software.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18 }}
            >
              Zitters replaces messy registers, spreadsheets, and lost follow-ups with purpose-built vertical software—while driving high-intent customers from Google Business and Meta straight to your door.
            </motion.p>
            <motion.div
              className="hero-ctas"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
            >
              <Link className="primary-cta" href="#products">
                Explore Products & Software <IconArrowRight size={17} />
              </Link>
              <Link className="secondary-cta" href="#agenda">
                Our Growth Agenda & Motto
              </Link>
            </motion.div>
            <motion.div
              className="hero-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
            >
              <span><IconCheck size={14} /> Meta Ads & WhatsApp Flow</span>
              <span><IconCheck size={14} /> Google Business & Maps Domination</span>
              <span><IconCheck size={14} /> 100% Manual Work Replaced</span>
            </motion.div>
          </div>
          <CommandCenter />
        </div>
        <a className="hero-scroll" href="#agenda">
          <span>Scroll to explore</span>
          <i />
        </a>
      </ScrollSection>

      {/* Channel & Ecosystem Band */}
      <ScrollSection className="channel-band">
        <Reveal className="site-shell channel-inner">
          <span>Helping businesses grow with</span>
          <div>
            {channels.map((channel) => (
              <span key={channel.label} data-channel={channel.label}>
                <channel.icon size={19} />
                {channel.label}
              </span>
            ))}
          </div>
        </Reveal>
      </ScrollSection>

      {/* Motto & Agenda Section */}
      <ScrollSection className="motto-section section-pad" id="agenda">
        <div className="site-shell">
          <Reveal className="section-title">
            <span className="motto-badge">
              <IconBolt size={14} /> Our Core Motto & Agenda
            </span>
            <h2>
              Converting manual work to software.<br />
              <span>Powered by Meta & Google growth.</span>
            </h2>
            <p>
              Most local businesses are trapped in manual chaos: physical paper diaries, untracked cash slips, lost WhatsApp chats, and invisible Google profiles. Our mission is two-fold: convert all manual friction into automated vertical software, and funnel steady customer demand through Meta and Google Business.
            </p>
          </Reveal>

          <div className="comparison-grid">
            {/* The Manual Chaos Card */}
            <Reveal className="comparison-card manual-card" direction="left">
              <div className="comparison-header">
                <div>
                  <span className="comparison-tag">The Old Manual Grind</span>
                  <h3 className="comparison-title">Before Zitters</h3>
                </div>
                <IconX size={24} color="#dc2626" />
              </div>
              <ul className="comparison-list">
                <li className="comparison-item">
                  <span className="comparison-icon"><IconX size={16} /></span>
                  <div className="comparison-text">
                    <strong>Physical Paper Registers & Diaries</strong>
                    <p>Manual attendance logs, misplaced membership files, faded billing books, and daily calculation errors.</p>
                  </div>
                </li>
                <li className="comparison-item">
                  <span className="comparison-icon"><IconX size={16} /></span>
                  <div className="comparison-text">
                    <strong>Lost Meta Leads & 4-Hour Response Delays</strong>
                    <p>Enquiries from Instagram and Facebook sit unanswered in DMs, losing hot prospects to faster competitors.</p>
                  </div>
                </li>
                <li className="comparison-item">
                  <span className="comparison-icon"><IconX size={16} /></span>
                  <div className="comparison-text">
                    <strong>Buried on Google Search & Maps</strong>
                    <p>Few or outdated reviews, incomplete business profiles, and zero local SEO strategy for "near me" searches.</p>
                  </div>
                </li>
                <li className="comparison-item">
                  <span className="comparison-icon"><IconX size={16} /></span>
                  <div className="comparison-text">
                    <strong>Manual Fee Chasing & Payment Leakage</strong>
                    <p>Awkward phone calls to chase dues, untracked cash/UPI slips, and members expiring without automated renewals.</p>
                  </div>
                </li>
                <li className="comparison-item">
                  <span className="comparison-icon"><IconX size={16} /></span>
                  <div className="comparison-text">
                    <strong>Exhausted Business Owner</strong>
                    <p>Spending evenings matching attendance registers and tallying accounts instead of expanding the business.</p>
                  </div>
                </li>
              </ul>
            </Reveal>

            {/* The Zitters Software Way Card */}
            <Reveal className="comparison-card software-card" direction="right">
              <div className="comparison-header">
                <div>
                  <span className="comparison-tag">The Zitters Software System</span>
                  <h3 className="comparison-title">With Zitters Platform</h3>
                </div>
                <IconCheck size={24} color="#4ade80" />
              </div>
              <ul className="comparison-list">
                <li className="comparison-item">
                  <span className="comparison-icon"><IconCheck size={16} /></span>
                  <div className="comparison-text">
                    <strong>100% Cloud Vertical Software</strong>
                    <p>Dedicated industry software (starting with GymOS). Zero paper registers, QR check-ins, and 1-click cloud records.</p>
                  </div>
                </li>
                <li className="comparison-item">
                  <span className="comparison-icon"><IconCheck size={16} /></span>
                  <div className="comparison-text">
                    <strong>Instant Meta to WhatsApp Flow in 4 Seconds</strong>
                    <p>Every lead from Instagram and Facebook is greeted, qualified, and delivered pricing automatically on WhatsApp.</p>
                  </div>
                </li>
                <li className="comparison-item">
                  <span className="comparison-icon"><IconCheck size={16} /></span>
                  <div className="comparison-text">
                    <strong>Dominant Google Business & Automated 5★ Reviews</strong>
                    <p>Rank top-3 on Google Maps. Automatically request 5-star reviews after customer visits to compound authority.</p>
                  </div>
                </li>
                <li className="comparison-item">
                  <span className="comparison-icon"><IconCheck size={16} /></span>
                  <div className="comparison-text">
                    <strong>Automated Billing, UPI Links & Zero Leakage</strong>
                    <p>WhatsApp payment reminders with instant UPI checkout, automated renewal invoices, and zero dues slip-through.</p>
                  </div>
                </li>
                <li className="comparison-item">
                  <span className="comparison-icon"><IconCheck size={16} /></span>
                  <div className="comparison-text">
                    <strong>Total Operational Freedom & Real-Time Metrics</strong>
                    <p>Owners view revenue, attendance, and team performance in one clear dashboard while operations run on autopilot.</p>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </ScrollSection>

      {/* Meta & Google Business Growth Engines */}
      <ScrollSection className="growth-engines-section section-pad" id="growth-engine">
        <div className="site-shell">
          <Reveal className="section-title">
            <span className="eyebrow-text">HOW WE GROW YOUR BUSINESS</span>
            <h2>
              Two high-velocity engines.<br />
              <span>Steady customer acquisition.</span>
            </h2>
            <p>
              We don’t just digitize your back-office—we feed your business with real, paying customers from day one through Meta advertising and Google Business presence.
            </p>
          </Reveal>

          <div className="engines-grid">
            {/* Meta Growth Engine */}
            <Reveal className="engine-card">
              <div className="engine-header">
                <div className="engine-badges">
                  <span className="engine-channel-pill meta">
                    <IconBrandMeta size={14} /> Meta Ads
                  </span>
                  <span className="engine-channel-pill meta">
                    <IconBrandInstagram size={14} /> Instagram
                  </span>
                  <span className="engine-channel-pill whatsapp">
                    <IconBrandWhatsapp size={14} /> WhatsApp
                  </span>
                </div>
                <IconFlame size={22} color="#0866FF" />
              </div>
              <h3 className="engine-title">Meta Ads & Instant WhatsApp Routing</h3>
              <p className="engine-desc">
                Capture high-intent prospects across Facebook and Instagram, then connect them instantly to your business over WhatsApp before their intent fades.
              </p>
              <ul className="engine-features-list">
                <li>
                  <IconCheck size={16} />
                  <span><strong>Hyper-targeted local campaigns:</strong> Custom creative designed specifically for your neighborhood and industry.</span>
                </li>
                <li>
                  <IconCheck size={16} />
                  <span><strong>4-second response time:</strong> Leads automatically receive interactive WhatsApp messages with rates, passes, and schedule options.</span>
                </li>
                <li>
                  <IconCheck size={16} />
                  <span><strong>Automated qualification:</strong> AI qualifies customer budget, interest, and preferred timing before passing to your team.</span>
                </li>
                <li>
                  <IconCheck size={16} />
                  <span><strong>Re-engagement broadcasts:</strong> Re-activate dormant prospects with special offers without risk of WhatsApp account bans.</span>
                </li>
              </ul>
              <div className="engine-preview-box">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <IconBrandWhatsapp size={16} color="#15803d" />
                  <strong style={{ fontSize: "11px", color: "#15803d" }}>Live WhatsApp Ingestion Preview</strong>
                </div>
                <div style={{ background: "#f0fdf4", padding: "10px 12px", borderRadius: "6px", fontSize: "11px", color: "#166534", lineHeight: 1.5 }}>
                  <p style={{ margin: 0 }}>
                    <strong>Zitters Bot:</strong> "Hi Rahul! 👋 Thanks for clicking our Instagram Ad. Here is your complimentary 1-Day Pass and membership tariff. Would you like to schedule your visit for today or tomorrow?"
                  </p>
                  <small style={{ display: "block", marginTop: "4px", color: "#86efac", fontSize: "9px" }}>Sent automatically in 3.4 seconds · Verified lead</small>
                </div>
              </div>
            </Reveal>

            {/* Google Business & Local Engine */}
            <Reveal className="engine-card" delay={0.1}>
              <div className="engine-header">
                <div className="engine-badges">
                  <span className="engine-channel-pill google">
                    <GoogleMark size={14} /> Google Business
                  </span>
                  <span className="engine-channel-pill google">
                    <IconMapPin size={14} /> Google Maps
                  </span>
                  <span className="engine-channel-pill google">
                    <IconStars size={14} /> Local SEO
                  </span>
                </div>
                <IconTrendingUp size={22} color="#171717" />
              </div>
              <h3 className="engine-title">Google Search, Maps & Review Intelligence</h3>
              <p className="engine-desc">
                Turn local "near me" searches into daily footfall. Rank in the coveted top-3 Google Maps pack and turn happy customers into automated 5-star reviews.
              </p>
              <ul className="engine-features-list">
                <li>
                  <IconCheck size={16} />
                  <span><strong>Google Business Profile dominance:</strong> Full optimization of categories, services, photos, and high-converting keywords.</span>
                </li>
                <li>
                  <IconCheck size={16} />
                  <span><strong>Automated 5-star review collection:</strong> Smart review prompts sent after visits or renewals to build genuine social proof.</span>
                </li>
                <li>
                  <IconCheck size={16} />
                  <span><strong>AI review replies:</strong> Automated, keyword-rich replies to customer reviews that boost Google local ranking signals.</span>
                </li>
                <li>
                  <IconCheck size={16} />
                  <span><strong>Local search visibility:</strong> Track calls, direction requests, and profile views from verified local searchers.</span>
                </li>
              </ul>
              <div className="engine-preview-box">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <GoogleMark size={16} />
                  <strong style={{ fontSize: "11px", color: "#171717" }}>Google Maps #1 Ranking Preview</strong>
                </div>
                <div style={{ background: "#f8f9fa", padding: "10px 12px", borderRadius: "6px", fontSize: "11px", color: "#333", border: "1px solid #e9ecef" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <strong style={{ fontSize: "12px" }}>Local Fitness & Wellness Center</strong>
                    <span style={{ color: "#b45309", fontWeight: 700 }}>4.9 ★★★★★ (248)</span>
                  </div>
                  <p style={{ margin: "4px 0 0", color: "#666", fontSize: "10px" }}>
                    #1 in Local 3-Pack · 182 directions requested this week · 64 direct calls
                  </p>
                  <small style={{ display: "block", marginTop: "4px", color: "#15803d", fontSize: "9px" }}>
                    ✓ Profile verified & updated with real-time hours
                  </small>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </ScrollSection>

      {/* Growth Journey (4 Stages Pinned Animation) */}
      <GrowthJourney />

      {/* The Products Showcase (Where Gym is Displayed as a Flagship Product) */}
      <ScrollSection className="product-directory section-pad" id="products">
        <div className="site-shell">
          <Reveal className="section-title directory-title">
            <span className="eyebrow-text">THE ZITTERS PRODUCT FAMILY</span>
            <h2>Dedicated SaaS products for real industries.</h2>
            <p>
              Every industry has unique manual bottlenecks. We build dedicated vertical operating systems that convert manual friction into automated software, wired directly into our shared Meta & Google growth engines.
            </p>
          </Reveal>

          {/* Flagship Product: GymOS */}
          <Reveal className="flagship-showcase">
            <div className="flagship-content">
              <div className="flagship-badge-row">
                <span className="flagship-status-badge">
                  <span /> Live · Flagship Product
                </span>
                <span className="flagship-industry">Fitness & Gym Operations</span>
              </div>
              <h3 className="flagship-title">GymOS</h3>
              <h4 className="flagship-subtitle">The Connected Operating System for Gyms & Fitness Centers</h4>
              <p className="flagship-desc">
                Replace manual paper registers, attendance diaries, and WhatsApp fee chasing with a complete cloud operating system. GymOS handles member CRM, QR code check-ins, automated fee collections, and member mobile app.
              </p>
              <div className="flagship-features-grid">
                <div className="flagship-feature-item">
                  <IconCheck size={16} />
                  <span><strong>Member CRM:</strong> Digital profiles & plan expiry tracking</span>
                </div>
                <div className="flagship-feature-item">
                  <IconCheck size={16} />
                  <span><strong>QR Attendance:</strong> Instant check-in without front-desk queues</span>
                </div>
                <div className="flagship-feature-item">
                  <IconCheck size={16} />
                  <span><strong>Fee Automation:</strong> WhatsApp payment links & UPI receipts</span>
                </div>
                <div className="flagship-feature-item">
                  <IconCheck size={16} />
                  <span><strong>Member App:</strong> Workout progress, streaks & announcements</span>
                </div>
              </div>
              <div className="flagship-actions">
                <Link className="flagship-inside-cta" href="/products/gymos">
                  Go Inside GymOS (View All Data & Screens) <IconArrowRight size={17} />
                </Link>
                <Link
                  className="flagship-direct-demo"
                  href="https://gym.zitters.com/login"
                  target="_blank"
                >
                  Open Live Dashboard ↗
                </Link>
              </div>
            </div>

            <div className="flagship-preview-side">
              <div className="flagship-preview-card">
                <div className="flagship-stat-row">
                  <div className="flagship-stat-col">
                    <small>Paperless Check-in</small>
                    <strong>100%</strong>
                    <em>QR Automated</em>
                  </div>
                  <div className="flagship-stat-col">
                    <small>Attendance Speed</small>
                    <strong>&lt; 2 sec</strong>
                    <em>Zero Queues</em>
                  </div>
                  <div className="flagship-stat-col">
                    <small>On-Time Fees</small>
                    <strong>98.4%</strong>
                    <em>UPI Reminders</em>
                  </div>
                </div>
                <Link href="/products/gymos" className="flagship-visual-teaser">
                  <img src="/gym-dashboard.png" alt="GymOS Owner Dashboard" />
                  <div className="flagship-visual-overlay">
                    <span>
                      <IconSparkles size={14} /> Click to go inside & view all GymOS modules →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Upcoming Industry Vertical Products */}
          <div className="upcoming-suite-grid">
            <Reveal className="upcoming-product-card">
              <div className="upcoming-top">
                <span className="upcoming-icon-wrap"><IconBuildingStore size={22} /></span>
                <span className="upcoming-tag">In Pipeline</span>
              </div>
              <h3>CommerceOS</h3>
              <h4>Retail, Inventory & WhatsApp Storefronts</h4>
              <p>Convert offline ledger books and manual inventory into cloud barcode POS, automated supplier re-orders, and WhatsApp product catalogs.</p>
            </Reveal>

            <Reveal className="upcoming-product-card" delay={0.08}>
              <div className="upcoming-top">
                <span className="upcoming-icon-wrap"><IconScissors size={22} /></span>
                <span className="upcoming-tag">In Pipeline</span>
              </div>
              <h3>SalonOS</h3>
              <h4>Salons, Spas & Aesthetic Studios</h4>
              <p>Eliminate telephone appointment tag. Automate stylist chair rosters, Google Bookings, Instagram DM scheduling, and automated SMS reminder flows.</p>
            </Reveal>

            <Reveal className="upcoming-product-card" delay={0.16}>
              <div className="upcoming-top">
                <span className="upcoming-icon-wrap"><IconStethoscope size={22} /></span>
                <span className="upcoming-tag">In Exploration</span>
              </div>
              <h3>ClinicOS</h3>
              <h4>Clinics & Outpatient Care</h4>
              <p>Move paper health files into secure digital health records, automated patient appointment queues, and recurring follow-up reminders.</p>
            </Reveal>
          </div>
        </div>
      </ScrollSection>

      {/* Compounding Advantage Section */}
      <ScrollSection className="competitive-section section-pad">
        <div className="site-shell">
          <Reveal className="competitive-card">
            <div>
              <span className="eyebrow-text">A COMPOUNDING ADVANTAGE</span>
              <h2>
                Every interaction makes<br />
                the next one smarter.
              </h2>
              <p>
                When your Meta Ads, Google Business profile, and vertical software share the same customer context, growth loops compound automatically. Inbound leads convert faster, customer data flows into software without manual entry, and automated reviews feed back into Google search ranking.
              </p>
            </div>
            <div className="advantage-loop">
              <div className="loop-center">
                <span className="loop-mark">
                  <Image src="/brand-mark.png" alt="Zitters" width={38} height={38} />
                </span>
                <strong>Zitters AI</strong>
              </div>
              <span className="loop-item item-one">Meta & Google</span>
              <span className="loop-item item-two">WhatsApp 4s</span>
              <span className="loop-item item-three">Industry Software</span>
              <span className="loop-item item-four">5★ Reviews</span>
              <i className="loop-ring ring-one" />
              <i className="loop-ring ring-two" />
            </div>
          </Reveal>
        </div>
      </ScrollSection>

      {/* Final CTA */}
      <ScrollSection className="final-cta" id="contact">
        <div className="cta-lines" />
        <Reveal className="site-shell final-content">
          <span className="eyebrow-text">CONVERTING MANUAL WORK TO SOFTWARE</span>
          <h2>
            Ready to stop the manual grind?<br />
            <span>Scale with Meta, Google & Zitters.</span>
          </h2>
          <p>
            Explore GymOS today or schedule a free consultation with our team to digitize your business operations.
          </p>
          <div>
            <Link className="white-cta" href="/products/gymos">
              Go Inside GymOS (View All Data) <IconArrowRight size={17} />
            </Link>
            <Link className="outline-cta" href="mailto:zitters.contact@gmail.com">
              Talk to our team
            </Link>
          </div>
          <div style={{ marginTop: "22px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", opacity: 0.88 }}>
            <span>Help line:</span>
            <a href="mailto:zitters.contact@gmail.com" style={{ color: "#fff", textDecoration: "underline", fontWeight: 600 }}>
              zitters.contact@gmail.com
            </a>
          </div>
        </Reveal>
      </ScrollSection>

      <SiteFooter />
    </main>
  );
}
