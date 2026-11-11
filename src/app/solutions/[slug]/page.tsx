import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { INDUSTRY_VERTICALS, getIndustryVertical } from "@/data/industry-verticals";
import RfpFinder from "@/components/rfp/RfpFinder";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

const SLUG_ALIASES: Record<string, string> = {
  finance: "financial-services",
  fin: "financial-services",
  banking: "financial-services",
  healthcare: "healthcare-pharma",
  pharma: "healthcare-pharma",
  med: "healthcare-pharma",
  "real-estate": "real-estate",
  proptech: "real-estate",
  cre: "real-estate",
  energy: "energy-utilities",
  utilities: "energy-utilities",
  nrg: "energy-utilities",
  manufacturing: "manufacturing",
  mfg: "manufacturing",
  logistics: "logistics-supply-chain",
  supplychain: "logistics-supply-chain",
  log: "logistics-supply-chain",
  legal: "legal-compliance",
  compliance: "legal-compliance",
  leg: "legal-compliance",
  law: "legal-compliance",
  saas: "b2b-saas-tech",
  sas: "b2b-saas-tech",
  tech: "b2b-saas-tech",
  retail: "retail-ecommerce",
  ecommerce: "retail-ecommerce",
  rtl: "retail-ecommerce",
  education: "education-edtech",
  edtech: "education-edtech",
  edu: "education-edtech",
  rfp: "rfp-intelligence",
  "rfp-finder": "rfp-intelligence",
  procurement: "rfp-intelligence",
  proposals: "rfp-intelligence",
};

export function generateStaticParams() {
  const primarySlugs = INDUSTRY_VERTICALS.map((v) => ({ slug: v.slug }));
  const aliasSlugs = Object.keys(SLUG_ALIASES).map((alias) => ({ slug: alias }));
  return [...primarySlugs, ...aliasSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = SLUG_ALIASES[slug.toLowerCase()] || slug;
  const vertical = getIndustryVertical(canonicalSlug);
  if (!vertical) return { title: "Vertical Solution — AgintX" };

  return {
    title: `${vertical.prefix} — ${vertical.name} AI Agent Solutions | AgintX`,
    description: `${vertical.tagline} Powered by AgintX Core Agentic Engine (CAE). Annual Contract Value: ${vertical.acv}.`,
  };
}

export default async function VerticalDetailPage({ params }: Props) {
  const { slug } = await params;
  const canonicalSlug = SLUG_ALIASES[slug.toLowerCase()] || slug;
  const vertical = getIndustryVertical(canonicalSlug);

  if (!vertical) notFound();

  const isHealthcare = vertical.slug === "healthcare-pharma";
  const isRfp = vertical.slug === "rfp-intelligence";

  return (
    <>
      {/* ─── Hero ───────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.crumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/solutions">Solutions Catalog</Link>
            <span>/</span>
            <span>{vertical.prefix}</span>
          </nav>

          <div className={styles.headerRow}>
            <div>
              <span className={styles.bucketBadge}>{vertical.prefix}</span>
              <h1 className="text-display">
                <span style={{ marginRight: 12 }}>{vertical.icon}</span>
                {vertical.name}
              </h1>
              <p className="text-body-lg text-secondary" style={{ marginTop: 12, maxWidth: 640 }}>
                {vertical.tagline}
              </p>
            </div>

            <div className={styles.acvCard}>
              <div className={styles.acvLabel}>Target Annual Contract Value</div>
              <div className={styles.acvValue}>{vertical.acv}</div>
              <div style={{ marginTop: 8, fontSize: "0.75rem", color: "var(--text-muted)" }}>
                Rollout: {vertical.rolloutPhase}
              </div>
            </div>
          </div>

          {/* PDF Killer Solution Card */}
          <div className={styles.killerCard}>
            <div className={styles.killerTitle}>PDF Strategy Killer Workflow Solution</div>
            <div className={styles.killerName}>{vertical.pdfKillerSolution}</div>
            <p className={styles.killerDesc}>
              Packaged as a standardized, API-driven solution running on AgintX Core Agentic Engine (CAE).
              Instant multi-tenant deployment with dedicated secure enclave isolation.
            </p>
            {isHealthcare && (
              <div style={{ marginTop: 16 }}>
                <Link href="/solutions/healthcare" className="btn btn-primary" id="launch-uhic-sandboxes">
                  Launch 10 Interactive Healthcare Sandboxes →
                </Link>
              </div>
            )}
            {isRfp && (
              <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#rfp-finder-interactive" className="btn btn-primary" id="jump-to-rfp-finder">
                  Launch Live RFP Finder ↓
                </a>
                <Link href="/rfp-finder" className="btn btn-secondary">
                  Open Fullscreen Finder Portal ↗
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Interactive RFP Finder (rfp-agintx only) ─── */}
      {isRfp && (
        <section
          className="section"
          id="rfp-finder-interactive"
          style={{ background: "rgba(10, 16, 30, 0.6)", borderBottom: "1px solid var(--border-subtle)" }}
        >
          <div className="container">
            <div style={{ marginBottom: 32 }}>
              <div className="section-eyebrow">Active Solicitations Feed</div>
              <h2 className="text-h1">Interactive RFP Finder &amp; Match Engine</h2>
              <p className="text-body-lg text-secondary" style={{ maxWidth: 640, marginTop: 8 }}>
                Filter live federal, state, and enterprise opportunities by date range, industry vertical, contract revenue ceiling, and capability accuracy. Guaranteed non-expired contracts only.
              </p>
            </div>
            <RfpFinder />
          </div>
        </section>
      )}

      {/* ─── Pain Point & Target Persona ───────────── */}
      <section className={styles.painSection}>
        <div className="container">
          <div className={styles.painGrid}>
            <div className={styles.painBox}>
              <div className="section-eyebrow" style={{ color: "var(--red-400)" }}>Top-Tier Customer Pain Point</div>
              <h2 className="text-h3" style={{ marginTop: 8, marginBottom: 12 }}>What keeps buyers up at night</h2>
              <p className="text-body text-secondary">{vertical.corePainPoint}</p>
            </div>

            <div className={styles.personaBox}>
              <div className="section-eyebrow">Target Enterprise Buyer</div>
              <h2 className="text-h3" style={{ marginTop: 8, marginBottom: 12 }}>{vertical.buyerPersona}</h2>
              <p className="text-body text-secondary">
                Designed to deliver quantifiable ROI within the first 30 days of deployment. Replaces
                unscalable custom consulting hours with automated, self-healing agent pipelines.
              </p>
              <div style={{ marginTop: 16 }}>
                <Link href={`/demo?vertical=${vertical.prefix}`} className="btn btn-secondary btn-sm" id="talk-to-specialist">
                  Speak with a {vertical.name} specialist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 10 Killer Products ─────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow">Productized Suite</div>
          <h2 className="text-h1">10 Killer Product Modules for {vertical.prefix}</h2>
          <p className="text-body text-secondary" style={{ maxWidth: 640, marginTop: 10 }}>
            Each module addresses high-value operational bottlenecks with pre-trained models,
            deterministic guardrails, and enterprise data connectors.
          </p>

          <div className={styles.productsGrid}>
            {vertical.products.map((product) => (
              <div key={product.number} className={styles.productCard}>
                <div className={styles.productTop}>
                  <span className={styles.productNum}>{product.number}</span>
                  <span className={styles.productImpact}>{product.impact}</span>
                </div>

                <h3 className={styles.productName}>{product.name}</h3>

                <div className={styles.productField}>
                  <div className={styles.fieldLabel}>Pain Point Solved</div>
                  <div className={styles.fieldValue}>{product.painPoint}</div>
                </div>

                <div className={styles.productField}>
                  <div className={styles.fieldLabel}>Agent Workflow Engine</div>
                  <div className={styles.fieldValue}>{product.workflow}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ─── Code Snippet ───────────────────────── */}
          <div className={styles.codeSection}>
            <div className="section-eyebrow">SDK Implementation</div>
            <h3 className="text-h2" style={{ marginTop: 8 }}>Deploying {vertical.prefix} via CAE SDK</h3>
            <div className={styles.codeWrap}>
              <div className={styles.codeHeader}>
                <span>typescript · @agintx/sdk · {vertical.prefix}</span>
                <span>Production Enclave</span>
              </div>
              <pre className={styles.codeBody}>
                <code>{vertical.codeSnippet}</code>
              </pre>
            </div>
          </div>

          {/* ─── Bottom CTA ─────────────────────────── */}
          <div className={styles.ctaRow}>
            <Link
              href={`/demo?vertical=${vertical.prefix}`}
              className="btn btn-primary btn-lg"
              id={`cta-demo-${vertical.prefix}`}
            >
              Request a {vertical.prefix} Demo
            </Link>
            <Link href="/solutions" className="btn btn-secondary btn-lg">
              Explore All 10 Verticals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
