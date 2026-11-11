import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "AgintX platform architecture — multi-agent orchestration, tool integration, memory management, governance, and enterprise-grade deployment.",
};

const LAYERS = [
  { label: "01 — Definition",    desc: "Natural language to structured agent spec" },
  { label: "02 — Procurement",   desc: "Model selection, tool binding, data connectors" },
  { label: "03 — Orchestration", desc: "Agent-to-agent topology, routing, retries" },
  { label: "04 — Deployment",    desc: "Cloud, VPC, on-prem — zero config drift" },
  { label: "05 — Observability", desc: "Traces, evals, alerts, audit logs" },
];

const CAPABILITIES = [
  {
    title: "Multi-Model Orchestration",
    desc: "Dynamically route tasks to the optimal LLM — GPT-4o, Claude 3, Gemini, or custom fine-tuned models — based on cost, latency, and accuracy policies you define.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="6" r="4" stroke="#00E5FF" strokeWidth="1.5" />
        <circle cx="6"  cy="22" r="4" stroke="#00E5FF" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="4" stroke="#00E5FF" strokeWidth="1.5" />
        <line x1="14" y1="10" x2="6"  y2="18" stroke="#00E5FF" strokeWidth="1" opacity="0.5" />
        <line x1="14" y1="10" x2="22" y2="18" stroke="#00E5FF" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Tool Integration (500+)",
    desc: "Pre-built connectors for Salesforce, HubSpot, Jira, GitHub, Slack, Postgres, Snowflake, and custom REST/GraphQL APIs. New integrations in minutes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="6" width="10" height="8" rx="2" stroke="#00E5FF" strokeWidth="1.5" />
        <rect x="16" y="14" width="10" height="8" rx="2" stroke="#00E5FF" strokeWidth="1.5" />
        <path d="M12 10h4l-4 8h4" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Agent-to-Agent Communication",
    desc: "Build supervisor-worker hierarchies, peer-to-peer mesh networks, or any DAG topology. Typed message contracts with schema validation between every agent.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="10" width="9" height="8" rx="2" stroke="#00E5FF" strokeWidth="1.5" />
        <rect x="17" y="10" width="9" height="8" rx="2" stroke="#00E5FF" strokeWidth="1.5" />
        <path d="M11 14h6" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="2 2" />
        <path d="M15 11.5l2.5 2.5-2.5 2.5" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Human-in-the-Loop",
    desc: "Insert approval gates, escalation paths, and review checkpoints anywhere in the workflow. Configurable per agent, per action, or per risk threshold.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="5" stroke="#00E5FF" strokeWidth="1.5" />
        <path d="M5 26c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Memory & Context",
    desc: "Persistent short-term session memory and long-term vector storage. Agents that remember context across runs, users, and teams — with fine-grained access control.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <ellipse cx="14" cy="10" rx="10" ry="4" stroke="#00E5FF" strokeWidth="1.5" />
        <path d="M4 10v5c0 2.21 4.48 4 10 4s10-1.79 10-4v-5" stroke="#00E5FF" strokeWidth="1.5" />
        <path d="M4 15v5c0 2.21 4.48 4 10 4s10-1.79 10-4v-5" stroke="#00E5FF" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Governance & Compliance",
    desc: "Full audit trails for every agent action, decision, and tool call. Policy-as-code enforcement, RBAC, and compliance exports for SOC 2, HIPAA, and GDPR.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l10 4.5v7c0 5.5-4 10.5-10 12C8 25 4 20 4 14.5v-7L14 3z" stroke="#00E5FF" strokeWidth="1.5" />
        <path d="M10 14l3 3 5-6" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const USE_CASES = [
  {
    dept: "Operations",
    title: "Autonomous process automation",
    desc: "Replace RPA fragility with reasoning agents that handle exceptions, escalate edge cases, and integrate with existing ITSM tools.",
  },
  {
    dept: "Engineering",
    title: "AI-native developer tooling",
    desc: "Code review agents, automated testing pipelines, incident triage, and root cause analysis — embedded in your existing CI/CD.",
  },
  {
    dept: "Customer Experience",
    title: "Enterprise-grade support agents",
    desc: "Tier-1 deflection agents with product knowledge, CRM context, and seamless human handoffs — deployed on your infrastructure.",
  },
  {
    dept: "Finance",
    title: "Intelligent document processing",
    desc: "Extract, validate, and reconcile financial documents with human-in-the-loop gates for exception handling and audit trails.",
  },
];

const COMPLIANCE = ["SOC 2 Type II", "GDPR", "HIPAA", "ISO 27001", "VPC Deploy", "SSO / SAML", "MFA", "Audit Logs"];

export default function PlatformPage() {
  return (
    <>
      {/* ─── Platform Hero ──────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-eyebrow animate-fade-up">Platform</div>
            <h1 className={`text-display animate-fade-up-delay-1 ${styles.heroH1}`}>
              Built for the way<br />
              <span className="text-gradient">enterprise ships AI.</span>
            </h1>
            <p className={`text-body-lg text-secondary animate-fade-up-delay-2 ${styles.heroDesc}`}>
              Five tightly integrated layers — from agent definition to production deployment —
              with enterprise-grade security, observability, and governance baked in at every level.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Architecture Layers ─────────────────────── */}
      <section className={`section ${styles.architecture}`} id="orchestration">
        <div className="container">
          <div className={styles.archInner}>
            <div className={styles.archLeft}>
              <div className="section-eyebrow">Architecture</div>
              <h2 className="text-h1">Five-layer platform</h2>
              <p className="text-body text-secondary" style={{ marginTop: 12, maxWidth: 400 }}>
                Every layer is independently operable and auditable. No monolithic black boxes.
              </p>
            </div>

            <div className={styles.archLayers}>
              {LAYERS.map((layer, i) => (
                <div key={layer.label} className={styles.archLayer}>
                  <div className={styles.archLayerNum}>{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <div className={styles.archLayerLabel}>{layer.label.split("— ")[1]}</div>
                    <div className="text-body-sm text-muted">{layer.desc}</div>
                  </div>
                  <div className={styles.archLayerBar}>
                    <div className={styles.archLayerFill} style={{ width: `${85 - i * 10}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Capabilities Grid ───────────────────────── */}
      <section className={`section ${styles.capabilities}`}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Capabilities</div>
            <h2 className="text-h1">What AgintX does</h2>
          </div>
          <div className={styles.capsGrid}>
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className={styles.capCard}>
                <div className={styles.capIcon}>{cap.icon}</div>
                <h3 className="text-h3" style={{ marginBottom: 8 }}>{cap.title}</h3>
                <p className="text-body-sm text-secondary">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UHIC Healthcare ─────────────────────────── */}
      <section className={`section ${styles.useCases}`} id="uhic">
        <div className="container">
          <div className="eyebrow">Healthcare UHIC</div>
          <h2 className="text-h1" style={{ marginBottom: 16 }}>
            HIPAA-oriented payments &amp; interop core
          </h2>
          <p className="text-body text-secondary" style={{ maxWidth: 560, marginBottom: 28 }}>
            Unified Healthcare Interoperability Core: Epic, Cerner, and Allscripts adapters plus
            major clearinghouses. Ten productized engines for eligibility, EDI, denials, FHIR, and more —
            BAA-backed in production, synthetic sandboxes on this site.
          </p>
          <Link href="/solutions/healthcare" className="btn btn-primary" id="platform-uhic-cta">
            Open healthcare demos
          </Link>
        </div>
      </section>

      {/* ─── Use Cases ──────────────────────────────── */}
      <section className={`section ${styles.useCases}`} id="integrations">
        <div className="container">
          <div className="section-eyebrow">Use Cases</div>
          <h2 className="text-h1" style={{ marginBottom: 40 }}>Across every team.</h2>
          <div className={styles.useCaseGrid}>
            {USE_CASES.map((uc) => (
              <div key={uc.title} className={styles.useCaseCard}>
                <span className="badge badge-cyan" style={{ marginBottom: 16 }}>{uc.dept}</span>
                <h3 className="text-h3" style={{ marginBottom: 10 }}>{uc.title}</h3>
                <p className="text-body-sm text-secondary">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Security & Compliance ──────────────────── */}
      <section className={`section ${styles.security}`} id="security">
        <div className="container">
          <div className={styles.securityInner}>
            <div className={styles.securityLeft}>
              <div className="section-eyebrow">Security & Compliance</div>
              <h2 className="text-h1" style={{ marginBottom: 16 }}>
                Enterprise-grade<br />from the ground up.
              </h2>
              <p className="text-body text-secondary" style={{ maxWidth: 380 }}>
                AgintX is built for regulated industries. Every deployment includes end-to-end encryption,
                comprehensive audit logs, and policy enforcement that meets the strictest compliance frameworks.
              </p>
              <Link href="/demo" className="btn btn-primary" style={{ marginTop: 32 }}>
                Review our Security Docs
              </Link>
            </div>
            <div className={styles.securityBadges}>
              {COMPLIANCE.map((badge) => (
                <div key={badge} className={styles.complianceBadge}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M8 1.5l5.5 2.5v4.5C13.5 12 11 15 8 16 5 15 2.5 12 2.5 8.5V4L8 1.5z"
                      stroke="#00D68F" strokeWidth="1.2" />
                    <path d="M5.5 8l2 2 3-3.5" stroke="#00D68F" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─────────────────────────────── */}
      <section className={`section-sm ${styles.cta}`}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="text-h2" style={{ marginBottom: 12 }}>
            Ready to see it in action?
          </h2>
          <p className="text-body text-secondary" style={{ marginBottom: 32 }}>
            Schedule a technical deep-dive with our solutions team.
          </p>
          <Link href="/demo" className="btn btn-primary btn-lg" id="platform-cta">
            Request a Demo
          </Link>
          <Link href="/pricing" className="btn btn-ghost btn-lg" style={{ marginLeft: 8 }}>
            View Pricing
          </Link>
        </div>
      </section>
    </>
  );
}
