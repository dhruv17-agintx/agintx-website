import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AgintXLogo from "@/components/AgintXLogo";
import HeroAgentConsole from "@/components/home/HeroAgentConsole";
import InteractiveWorkflow from "@/components/home/InteractiveWorkflow";
import VerticalsShowcase from "@/components/home/VerticalsShowcase";
import AgentNetworkTopology from "@/components/home/AgentNetworkTopology";

export const metadata: Metadata = {
  title: "AgintX — Enterprise AI Agents Platform",
  description:
    "AgintX is the enterprise AI agents platform. Describe, Procure, Develop, Deploy, Done! Featuring 11 productized vertical suites and the Live RFP Finder.",
};

const STATS = [
  { value: "10,000+", label: "Agents in Production" },
  { value: "<42ms",   label: "P99 DAG Latency" },
  { value: "11",      label: "Productized Verticals" },
  { value: "85%–90%", label: "Target Gross Margin" },
  { value: "99.99%",  label: "Uptime SLA (SOC 2)" },
];

const ECONOMICS_COMPARISON = [
  {
    dimension: "Delivery Model & Time",
    agency: "3 to 6 months per client with high billable hourly rates",
    agintx: "Instant self-serve deployment with zero-drift configurations",
    multiplier: "100x Faster",
  },
  {
    dimension: "Gross Margin Profile",
    agency: "40% – 50% (Constrained by senior engineer & consultant salaries)",
    agintx: "85% – 90% (Autonomous software compute scale)",
    multiplier: "2x Margin",
  },
  {
    dimension: "Engineering Headcount",
    agency: "6 to 10 dedicated engineers per client deployment",
    agintx: "0.2 FTE per client via automated self-healing supervisor DAGs",
    multiplier: "30x Leverage",
  },
  {
    dimension: "Valuation Multiple",
    agency: "1x – 2x Revenue (Professional service agency multiple)",
    agintx: "10x – 20x ARR (Enterprise SaaS multiple with high net retention)",
    multiplier: "10x Multiple",
  },
  {
    dimension: "Quality & Compliance",
    agency: "Manual review, human fatigue, and high false-alarm rates",
    agintx: "Deterministic eval test harness with 100% cryptographic audit trail",
    multiplier: "99.9% Determinism",
  },
];

const CAPABILITIES = [
  {
    title: "Multi-Model Intelligent Router",
    desc: "Route queries dynamically to Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, or open-source weights based on latency, cost, and task complexity.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "500+ Verified Tool Connectors (MCP)",
    desc: "Production-ready connectors for Salesforce, Bloomberg, Epic FHIR, Snowflake, Jira, and PostgreSQL with automatic secret rotation and mTLS.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Cryptographic Human Gates",
    desc: "Enforce hardware-token approvals, dual-authorization sign-offs, and compliance quarantine paths for financial or legal decisions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Hybrid Vector + Graph Memory",
    desc: "Persistent episodic and semantic memory with sub-10ms pgvector retrieval, automated deduplication, and regulatory knowledge graph indexing.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    title: "Sovereign & Air-Gapped Enclaves",
    desc: "Run on AWS GovCloud, Azure Confidential Computing, or air-gapped on-premise Kubernetes clusters with zero outbound data leakage.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Deterministic Eval & Regression Rails",
    desc: "Automated synthetic stress testing with thousands of adversarial prompts. Guardrail scorecards ensure 99.9% output determinism.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero Section ───────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className="container-wide">
          <div className={styles.heroInner}>
            {/* Left Content Column */}
            <div className={styles.heroContent}>
              <div className={styles.eyebrowLive}>
                <span className={styles.livePulseDot} />
                <span>CORE AGENTIC ENGINE (CAE) v3.2 · 11 ENTERPRISE VERTICALS</span>
              </div>

              <h1 className={styles.heroHeadline}>
                Autonomous AI Agents.{" "}
                <span className="text-gradient">Engineered for Enterprise Scale.</span>
              </h1>

              <p className={styles.heroSub}>
                AgintX is the complete platform to describe, procure, develop, deploy, and govern
                production-grade multi-agent swarms. Replace months of manual custom agency builds with 11 productized enterprise suites.
              </p>

              <div className={styles.heroCtas}>
                <Link href="/rfp-finder" className={`btn btn-primary btn-lg ${styles.glowBtn}`} id="hero-cta-rfp">
                  Launch Live RFP Finder
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
                <Link href="/solutions" className="btn btn-secondary btn-lg" id="hero-cta-solutions">
                  Explore 11 Verticals
                </Link>
              </div>

              <div className={styles.heroBadges}>
                <span className={styles.heroBadge}>
                  <span className={styles.heroBadgeDot} />
                  SOC 2 Type II
                </span>
                <span className={styles.heroBadge}>
                  <span className={styles.heroBadgeDot} />
                  &lt;42ms P99 Latency
                </span>
                <span className={styles.heroBadge}>
                  <span className={styles.heroBadgeDot} />
                  Zero Config Drift
                </span>
                <span className={styles.heroBadge}>
                  <span className={styles.heroBadgeDot} />
                  HIPAA &amp; GovCloud
                </span>
              </div>
            </div>

            {/* Right Interactive Console Column */}
            <div className={styles.heroConsoleWrap}>
              <HeroAgentConsole />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust & Real-Time Stats Bar ───────────── */}
      <section className={styles.trustBar}>
        <div className="container-wide">
          <div className={styles.trustGrid}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.trustStat}>
                <span className={styles.trustValue}>{stat.value}</span>
                <span className={styles.trustLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5-Step Workflow: Describe, Procure, Develop, Deploy, Done ─── */}
      <section className="section" id="workflow">
        <div className="container-wide">
          <div className={styles.sectionHeader}>
            <div className="section-eyebrow">Operating System</div>
            <h2 className={styles.sectionTitle}>
              Five Steps. One Autonomous Platform.
            </h2>
            <p className={styles.sectionDesc}>
              <strong>Describe, Procure, Develop, Deploy, Done!</strong> From natural-language enterprise intent
              to deployed sovereign multi-agent swarms with zero infrastructure overhead.
            </p>
          </div>

          <InteractiveWorkflow />
        </div>
      </section>

      {/* ─── 11 Productized Vertical Solutions Matrix ── */}
      <section className="section" id="verticals" style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div className="container-wide">
          <div className={styles.sectionHeader}>
            <div className="section-eyebrow">Productization Architecture</div>
            <h2 className={styles.sectionTitle}>
              11 Enterprise Productized Solutions
            </h2>
            <p className={styles.sectionDesc}>
              Move from slow, high-friction custom dev agencies to automated, high-margin software assets.
              Each vertical pairs the Core Agentic Engine (CAE) with domain-specific regulatory guardrails and product modules.
            </p>
          </div>

          <VerticalsShowcase />
        </div>
      </section>

      {/* ─── Interactive Multi-Agent DAG Topology ────── */}
      <section className="section" id="architecture">
        <div className="container-wide">
          <div className={styles.sectionHeader}>
            <div className="section-eyebrow">System Topology</div>
            <h2 className={styles.sectionTitle}>
              Multi-Agent Consensus &amp; Enclave Topology
            </h2>
            <p className={styles.sectionDesc}>
              Inspect how the Supervisor orchestrates peer workers, runs semantic pgvector RAG, connects to enterprise tools via MCP, and triggers hardware-authenticated human sign-off gates.
            </p>
          </div>

          <AgentNetworkTopology />
        </div>
      </section>

      {/* ─── Economics: Agency Services vs AgintX ─────── */}
      <section className={`section ${styles.economics}`} id="economics">
        <div className="container-wide">
          <div className={styles.sectionHeader}>
            <div className="section-eyebrow">Financial Transformation</div>
            <h2 className={styles.sectionTitle}>
              Agency Services Model vs. Productized Software
            </h2>
            <p className={styles.sectionDesc}>
              Why modern CTOs and technology providers are shifting from human-heavy consulting to AgintX productized autonomous suites.
            </p>
          </div>

          <div className={styles.econTableWrap}>
            <table className={styles.econTable}>
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Traditional Dev Agency</th>
                  <th>AgintX Autonomous Platform</th>
                  <th>Enterprise Advantage</th>
                </tr>
              </thead>
              <tbody>
                {ECONOMICS_COMPARISON.map((row) => (
                  <tr key={row.dimension}>
                    <td className={styles.econMetric}>{row.dimension}</td>
                    <td className={styles.econOld}>{row.agency}</td>
                    <td className={styles.econNew}>{row.agintx}</td>
                    <td>
                      <span className={styles.econPill}>{row.multiplier}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Platform Capabilities Bento Grid ────────── */}
      <section className="section" id="capabilities">
        <div className="container-wide">
          <div className={styles.sectionHeader}>
            <div className="section-eyebrow">Engine Features</div>
            <h2 className={styles.sectionTitle}>
              Built for Production Mission-Critical Reliability
            </h2>
            <p className={styles.sectionDesc}>
              Enterprise governance, cryptographic security enclaves, and sub-50ms distributed execution.
            </p>
          </div>

          <div className={styles.bentoGrid}>
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className={styles.bentoCard}>
                <div className={styles.bentoIconBox}>{cap.icon}</div>
                <h3 className={styles.bentoTitle}>{cap.title}</h3>
                <p className={styles.bentoDesc}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── High-Impact Final CTA Section ───────────── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaGlow} aria-hidden="true" />
        <div className="container-wide">
          <div className={styles.finalCtaCard}>
            <div className={styles.finalCtaLeft}>
              <div className={styles.ctaBrandRow}>
                <AgintXLogo theme="dark" size="lg" />
              </div>

              <h2 className={styles.finalCtaH2}>
                Ready to ship your first <br />
                <span className="text-gradient">production multi-agent swarm?</span>
              </h2>

              <p className={styles.finalCtaDesc}>
                Partner with the AgintX engineering team. We will map your business requirements
                to an autonomous agent pipeline and deliver a working production prototype in 48 hours.
              </p>

              <div className={styles.finalCtaBtns}>
                <Link href="/demo" className={`btn btn-primary btn-lg ${styles.glowBtn}`} id="cta-final-demo">
                  Schedule Architecture Review
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
                <Link href="/rfp-finder" className="btn btn-secondary btn-lg" id="cta-final-rfp">
                  Launch Live RFP Finder
                </Link>
              </div>
            </div>

            <div className={styles.finalCtaRight}>
              <h4 className={styles.guaranteeTitle}>48-Hour Prototype Commitment</h4>
              <div className={styles.guaranteeList}>
                {[
                  "60-minute technical architecture deep dive with staff agent engineer",
                  "Zero-trust enclave sizing (Confidential Computing / GovCloud / VPC)",
                  "Custom Go/No-Go compliance matrix tailored to your sector",
                  "Fixed-fee productized subscription quote with 85%+ gross margin",
                  "Full SOC 2 Type II, HIPAA, and DFARS compliance audit packet",
                ].map((item) => (
                  <div key={item} className={styles.guaranteeItem}>
                    <span className={styles.guaranteeCheck}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
