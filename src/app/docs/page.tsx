import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "AgintX developer documentation — quickstart guide, API reference, core concepts, and integration guides.",
};

const QUICKSTART = [
  {
    step: "1",
    title: "Install the SDK",
    code: `npm install @agintx/sdk`,
    lang: "bash",
  },
  {
    step: "2",
    title: "Initialize AgintX",
    code: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({
  apiKey: process.env.AGINTX_API_KEY,
  workspace: "your-workspace-id",
});`,
    lang: "typescript",
  },
  {
    step: "3",
    title: "Deploy your first agent",
    code: `const agent = await client.agents.create({
  name: "research-agent",
  model: "gpt-4o",
  tools: ["web-search", "document-reader"],
  goal: "Summarize competitive landscape for {company}",
});

const result = await agent.run({ company: "Acme Corp" });
console.log(result.output);`,
    lang: "typescript",
  },
];

const DOC_SECTIONS = [
  {
    title: "Core Concepts",
    badge: null,
    docs: [
      { title: "Agents",             desc: "What agents are and how they work" },
      { title: "Orchestration",      desc: "Supervisor-worker topologies" },
      { title: "Memory & Context",   desc: "Session and long-term storage" },
      { title: "Tool Calling",       desc: "How agents interact with external APIs" },
      { title: "Human-in-the-Loop",  desc: "Approval gates and escalation" },
    ],
  },
  {
    title: "Guides",
    badge: null,
    docs: [
      { title: "Building your first agent",     desc: "End-to-end walkthrough" },
      { title: "Multi-agent workflows",         desc: "Connecting agents together" },
      { title: "Custom tool integration",       desc: "Add any API as a tool" },
      { title: "Deploying to production",       desc: "Cloud, VPC, and on-prem options" },
      { title: "Testing & evaluation",          desc: "Eval frameworks and benchmarks" },
    ],
  },
  {
    title: "API Reference",
    badge: "REST",
    docs: [
      { title: "Agents API",        desc: "Create, update, run, and monitor agents" },
      { title: "Workflows API",     desc: "Define multi-agent orchestration flows" },
      { title: "Tools API",         desc: "Register and bind custom tools" },
      { title: "Memory API",        desc: "Read and write agent memory" },
      { title: "Observability API", desc: "Traces, logs, and eval metrics" },
    ],
  },
  {
    title: "Security & Compliance",
    badge: null,
    docs: [
      { title: "Authentication & RBAC",   desc: "API keys, SSO, and team permissions" },
      { title: "Data residency",          desc: "Region options and VPC deployment" },
      { title: "Audit logs",              desc: "Export and interpret audit events" },
      { title: "Compliance certifications", desc: "SOC 2, HIPAA, GDPR details" },
    ],
  },
];

const RESOURCES = [
  { title: "Healthcare UHIC", desc: "10 payments & interop demo modules", href: "/solutions/healthcare", icon: "🏥" },
  { title: "Changelog",       desc: "What's new in each release",      href: "#changelog", icon: "📋" },
  { title: "GitHub SDK",      desc: "Open-source SDK & examples",       href: "#github",    icon: "⚙️" },
  { title: "Community",       desc: "Ask questions, share workflows",    href: "#community", icon: "💬" },
  { title: "Status Page",     desc: "Real-time platform status",         href: "https://status.agintx.com", icon: "🟢" },
];

export default function DocsPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className="section-eyebrow animate-fade-up">Documentation</div>
          <h1 className={`text-h1 animate-fade-up-delay-1 ${styles.heroH1}`}>
            Build with AgintX.
          </h1>
          <p className={`text-body-lg text-secondary animate-fade-up-delay-2 ${styles.heroDesc}`}>
            Everything you need to integrate, deploy, and scale AI agents on the AgintX platform.
          </p>

          {/* Search hint */}
          <div className={`${styles.searchHint} animate-fade-up-delay-3`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Search docs coming soon…
            <kbd className={styles.kbd}>⌘K</kbd>
          </div>
        </div>
      </section>

      {/* ─── Quickstart ────────────────────────── */}
      <section className={`section ${styles.quickstart}`}>
        <div className="container">
          <div className="section-eyebrow">Quickstart</div>
          <h2 className="text-h2" style={{ marginBottom: 40 }}>Up and running in 3 steps.</h2>

          <div className={styles.steps}>
            {QUICKSTART.map((item) => (
              <div key={item.step} className={styles.qsStep}>
                <div className={styles.qsStepHeader}>
                  <span className={styles.qsNum}>{item.step}</span>
                  <h3 className="text-h3">{item.title}</h3>
                </div>
                <pre className={styles.codeBlock}>
                  <code className={`lang-${item.lang}`}>{item.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Doc Sections ───────────────────────── */}
      <section className={`section ${styles.sections}`}>
        <div className="container">
          <div className={styles.sectionGrid}>
            {DOC_SECTIONS.map((sec) => (
              <div key={sec.title} className={styles.docSection}>
                <div className={styles.docSectionHeader}>
                  <h3 className={styles.docSectionTitle}>{sec.title}</h3>
                  {sec.badge && <span className="badge badge-cyan">{sec.badge}</span>}
                </div>
                <ul className={styles.docList}>
                  {sec.docs.map((doc) => (
                    <li key={doc.title}>
                      <Link href="#" className={styles.docLink}>
                        <div>
                          <span className={styles.docLinkTitle}>{doc.title}</span>
                          <span className={styles.docLinkDesc}>{doc.desc}</span>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── More Resources ─────────────────────── */}
      <section className={`section-sm ${styles.resources}`} id="changelog">
        <div className="container">
          <h2 className="text-h2" style={{ marginBottom: 32 }}>More Resources</h2>
          <div className={styles.resourceGrid}>
            {RESOURCES.map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className={styles.resourceCard}
                {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className={styles.resourceIcon}>{r.icon}</span>
                <div>
                  <div className={styles.resourceTitle}>{r.title}</div>
                  <div className={styles.resourceDesc}>{r.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─────────────────────────── */}
      <section className={`section-sm ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h3 className="text-h3">Need help getting started?</h3>
              <p className="text-body text-secondary" style={{ marginTop: 6 }}>
                Our team offers hands-on onboarding for enterprise teams.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <Link href="/demo" className="btn btn-primary" id="docs-cta-demo">Request Demo</Link>
              <Link href="/platform" className="btn btn-secondary">Platform Overview</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
