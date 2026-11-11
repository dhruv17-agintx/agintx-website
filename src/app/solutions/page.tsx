import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRY_VERTICALS, TOTAL_ACV_VALUE } from "@/data/industry-verticals";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "10 Vertical Productized Solutions — AgintX",
  description:
    "Explore AgintX's 10 industry verticals and productized solutions: fin-agintx, med-agintx, cre-agintx, nrg-agintx, mfg-agintx, log-agintx, leg-agintx, sas-agintx, rtl-agintx, edu-agintx.",
};

const ECONOMICS = [
  { metric: "Gross Margin", oldModel: "40% – 50% (High labor cost)", newModel: "85% – 90% (Pure software scale)" },
  { metric: "Delivery Time", oldModel: "3 to 6 months per client", newModel: "Instant deployment via self-serve portal" },
  { metric: "Valuation Multiple", oldModel: "1x – 2x Revenue (Agency)", newModel: "10x – 20x ARR (SaaS Multiple)" },
];

export default function SolutionsDirectoryPage() {
  const formattedAcv = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(TOTAL_ACV_VALUE);

  return (
    <>
      {/* ─── Hero ───────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-eyebrow animate-fade-up">Productization Architecture</div>
            <h1 className={`text-display ${styles.heroH1} animate-fade-up-delay-1`}>
              Enterprise <span className="text-gradient">Productized Solutions.</span>
            </h1>
            <p className={`text-body-lg text-secondary ${styles.heroDesc} animate-fade-up-delay-2`}>
              Moving from a high-friction services model to automated, high-margin software products.
              Each vertical leverages our Core Agentic Engine (CAE) wrapped in domain-specific configurations,
              prompt layers, and secure multi-tenant enclaves.
            </p>

            <div className={`${styles.heroStats} animate-fade-up-delay-3`}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>{INDUSTRY_VERTICALS.length}</span>
                <span className={styles.heroStatLabel}>Industry Verticals</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>{INDUSTRY_VERTICALS.length * 10}</span>
                <span className={styles.heroStatLabel}>Killer Product Modules</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>{formattedAcv}+</span>
                <span className={styles.heroStatLabel}>Combined Catalog ACV</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>85%–90%</span>
                <span className={styles.heroStatLabel}>Target Gross Margin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Verticals Catalog ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="section-eyebrow">Enterprise Catalog</div>
              <h2 className="text-h1">Select a vertical solution</h2>
            </div>
            <Link href="/demo" className="btn btn-secondary" id="cta-custom-vertical">
              Request custom enterprise vertical
            </Link>
          </div>

          {/* Featured RFP Finder Banner */}
          <div style={{ marginTop: 28, padding: "18px 24px", background: "rgba(0, 229, 255, 0.05)", border: "1px solid rgba(0, 229, 255, 0.25)", borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontSize: "1.75rem" }}>📑</span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className={styles.badgeBucket}>rfp-agintx</span>
                  <span style={{ fontSize: "0.8125rem", color: "var(--green-400)", fontWeight: 600 }}>✓ Zero-Expired Guarantee Active</span>
                </div>
                <div style={{ fontSize: "0.9375rem", color: "var(--text-primary)", fontWeight: 600, marginTop: 4 }}>
                  Interactive RFP Finder: Filter active federal &amp; enterprise solicitations by date range, industry, revenue ceiling, and capability accuracy.
                </div>
              </div>
            </div>
            <Link href="/rfp-finder" className="btn btn-primary btn-sm" id="cta-explore-rfp-finder">
              Launch Live RFP Finder →
            </Link>
          </div>

          <div className={styles.verticalsGrid}>
            {INDUSTRY_VERTICALS.map((vertical) => (
              <Link
                key={vertical.slug}
                href={`/solutions/${vertical.slug}`}
                className={styles.verticalCard}
                id={`card-${vertical.prefix}`}
              >
                <div className={styles.cardTop}>
                  <span className={styles.badgeBucket}>{vertical.prefix}</span>
                  <span className={styles.cardAcv}>{vertical.acv.split(" ")[0]}</span>
                </div>

                <h3 className={styles.cardTitle}>
                  <span style={{ marginRight: 8 }}>{vertical.icon}</span>
                  {vertical.name}
                </h3>

                <div className={styles.cardKiller}>{vertical.pdfKillerSolution}</div>
                <p className={styles.cardDesc}>{vertical.tagline}</p>

                <div className={styles.cardFooter}>
                  <span>{vertical.rolloutPhase.split(" ")[0]} {vertical.rolloutPhase.split(" ")[1]}</span>
                  <span className={styles.cardLinkText}>
                    Explore 10 Modules →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Architecture & CAE ─────────────────────── */}
      <section className={styles.archSection}>
        <div className="container">
          <div className={styles.archGrid}>
            <div>
              <div className="section-eyebrow">Architecture &amp; Scalability</div>
              <h2 className="text-h2" style={{ marginBottom: 16 }}>Core Agentic Engine (CAE)</h2>
              <p className="text-body text-secondary">
                Rather than building 10 distinct bespoke codebases, AgintX standardizes on a modular
                Core Agentic Engine. Each vertical product is a specialized configuration wrapper,
                deterministic prompt topology, and secure enterprise connector built on top of the
                same resilient core.
              </p>
              <div style={{ marginTop: 24 }}>
                <Link href="/platform" className="btn btn-primary" id="cae-platform-link">
                  Inspect CAE Architecture
                </Link>
              </div>
            </div>

            <div className={styles.archCard}>
              <h3 className="text-h3">Multi-Tenant Isolation &amp; Security</h3>
              <p className="text-body-sm text-secondary" style={{ marginTop: 8 }}>
                Every vertical solution runs in segregated secure enclaves with end-to-end encryption,
                ensuring total regulatory compliance right out of the box.
              </p>
              <ul className={styles.archList}>
                <li className={styles.archItem}>
                  <span className={styles.archCheck}>✓</span>
                  <span><strong>SOC 2 Type II Certified:</strong> Continuous automated compliance telemetry</span>
                </li>
                <li className={styles.archItem}>
                  <span className={styles.archCheck}>✓</span>
                  <span><strong>HIPAA &amp; BAA Ready:</strong> Built-in PHI redaction for healthcare modules</span>
                </li>
                <li className={styles.archItem}>
                  <span className={styles.archCheck}>✓</span>
                  <span><strong>GDPR &amp; Regional Enclaves:</strong> In-region tenant storage (US, EU, APAC)</span>
                </li>
                <li className={styles.archItem}>
                  <span className={styles.archCheck}>✓</span>
                  <span><strong>Private VPC Deployments:</strong> AWS EKS, GCP GKE, and Azure air-gapped support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Unit Economics ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow">Exponential Unit Economics</div>
          <h2 className="text-h2">The Productization Shift</h2>
          <p className="text-body text-secondary" style={{ maxWidth: 640, marginTop: 12 }}>
            By packaging bespoke services into standardized, API-driven solutions across the 10
            highest-revenue global verticals, AgintX transitions from an agency into an exponential SaaS ecosystem.
          </p>

          <table className={styles.economicsTable}>
            <thead>
              <tr>
                <th>Economic Metric</th>
                <th>Services Model (Old)</th>
                <th>Productized Model (AgintX)</th>
              </tr>
            </thead>
            <tbody>
              {ECONOMICS.map((row) => (
                <tr key={row.metric}>
                  <td><strong>{row.metric}</strong></td>
                  <td className="text-muted">{row.oldModel}</td>
                  <td className={styles.highlightGreen}>{row.newModel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── GTM CTA ───────────────────────────────── */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border-subtle)", textAlign: "center" }}>
        <div className="container">
          <h2 className="text-h2" style={{ marginBottom: 12 }}>
            Launch a tailored vertical solution for your team
          </h2>
          <p className="text-body text-secondary" style={{ marginBottom: 28, maxWidth: 520, margin: "0 auto 28px" }}>
            Our solutions engineering team can map your domain workflow into a working AgintX prototype within 48 hours.
          </p>
          <Link href="/demo" className="btn btn-primary btn-lg" id="solutions-cta-demo">
            Schedule a Vertical Deep-Dive
          </Link>
        </div>
      </section>
    </>
  );
}
