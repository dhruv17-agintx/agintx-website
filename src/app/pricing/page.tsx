import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "AgintX pricing — Starter, Growth, and Enterprise tiers. Transparent feature comparison and a full FAQ.",
};

const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: "$499",
    period: "/mo",
    desc: "For small teams getting started with AI agent workflows.",
    cta: "Get Started",
    ctaHref: "/demo",
    highlight: false,
    features: [
      "Up to 5 agents",
      "10,000 agent runs / mo",
      "3 tool integrations",
      "7-day trace retention",
      "Email support",
      "99.9% uptime SLA",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$1,999",
    period: "/mo",
    desc: "For scaling teams deploying agents across multiple workflows.",
    cta: "Request Demo",
    ctaHref: "/demo",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Up to 50 agents",
      "100,000 agent runs / mo",
      "Unlimited tool integrations",
      "30-day trace retention",
      "Human-in-the-loop gates",
      "Priority support (4h SLA)",
      "SSO / SAML",
      "99.95% uptime SLA",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organizations with strict compliance and scale requirements.",
    cta: "Talk to Sales",
    ctaHref: "/demo",
    highlight: false,
    features: [
      "Unlimited agents",
      "Unlimited agent runs",
      "Custom tool integrations",
      "Unlimited trace retention",
      "Human-in-the-loop gates",
      "Dedicated support + CSM",
      "VPC / on-prem deployment",
      "SOC 2 + HIPAA + GDPR",
      "Custom SLA (up to 99.99%)",
      "Audit log exports",
    ],
  },
];

type Check = string | boolean | null;

const COMPARE_FEATURES: {
  category: string;
  rows: { label: string; starter: Check; growth: Check; enterprise: Check }[];
}[] = [
  {
    category: "Platform",
    rows: [
      { label: "Agent count",          starter: "5",           growth: "50",            enterprise: "Unlimited" },
      { label: "Agent runs / month",   starter: "10,000",      growth: "100,000",        enterprise: "Unlimited" },
      { label: "Tool integrations",    starter: "3",           growth: "Unlimited",      enterprise: "Unlimited" },
      { label: "Multi-agent topology", starter: false,         growth: true,             enterprise: true },
      { label: "Custom models",        starter: false,         growth: true,             enterprise: true },
      { label: "VPC / on-prem",        starter: false,         growth: false,            enterprise: true },
    ],
  },
  {
    category: "Observability",
    rows: [
      { label: "Trace retention",        starter: "7 days",    growth: "30 days",        enterprise: "Unlimited" },
      { label: "Evaluation metrics",     starter: true,        growth: true,             enterprise: true },
      { label: "Real-time dashboards",   starter: false,       growth: true,             enterprise: true },
      { label: "Alerts & webhooks",      starter: false,       growth: true,             enterprise: true },
    ],
  },
  {
    category: "Security & Compliance",
    rows: [
      { label: "SOC 2 Type II",         starter: true,         growth: true,             enterprise: true },
      { label: "SSO / SAML",            starter: false,        growth: true,             enterprise: true },
      { label: "HIPAA",                 starter: false,        growth: false,            enterprise: true },
      { label: "GDPR",                  starter: true,         growth: true,             enterprise: true },
      { label: "Audit log exports",     starter: false,        growth: false,            enterprise: true },
      { label: "MFA enforcement",       starter: true,         growth: true,             enterprise: true },
    ],
  },
  {
    category: "Support",
    rows: [
      { label: "Support channel",       starter: "Email",      growth: "Priority (4h)",  enterprise: "Dedicated CSM" },
      { label: "Onboarding",            starter: "Self-serve", growth: "Guided",         enterprise: "White-glove" },
      { label: "SLA",                   starter: "99.9%",      growth: "99.95%",         enterprise: "Up to 99.99%" },
    ],
  },
];

const FAQ = [
  {
    q: "Is there a free trial?",
    a: "Yes — all plans include a 14-day free trial with full feature access. No credit card required to start.",
  },
  {
    q: "What counts as an agent run?",
    a: "An agent run is a single invocation of an agent — from receiving its goal to producing a final output. Sub-calls between agents in a multi-agent workflow count as separate runs.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.",
  },
  {
    q: "What happens if I exceed my run limit?",
    a: "We'll notify you at 80% usage. By default, runs pause at the limit — or you can enable overage billing at $0.02/run for uninterrupted operation.",
  },
  {
    q: "Is annual billing available?",
    a: "Yes. Annual billing includes a 20% discount on Starter and Growth plans. Contact sales for Enterprise annual pricing.",
  },
  {
    q: "Can Enterprise plans be deployed on our own infrastructure?",
    a: "Yes. Enterprise plans support VPC, on-prem, and air-gapped deployments. Our solutions team will work with your infrastructure and security teams for a custom deployment.",
  },
];

function CheckIcon({ value }: { value: Check }) {
  if (value === true) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-label="Included">
        <circle cx="9" cy="9" r="8" fill="rgba(0,214,143,0.12)" />
        <path d="M5.5 9l2.5 2.5 4-4.5" stroke="#00D68F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (value === false) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-label="Not included">
        <circle cx="9" cy="9" r="8" fill="rgba(255,255,255,0.03)" />
        <path d="M6.5 9h5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return <span className={styles.compareText}>{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      {/* ─── Hero ────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-eyebrow animate-fade-up" style={{ justifyContent: "center" }}>
            Pricing
          </div>
          <h1 className={`text-display animate-fade-up-delay-1 ${styles.heroH1}`}>
            Simple, transparent pricing.
          </h1>
          <p className={`text-body-lg text-secondary animate-fade-up-delay-2 ${styles.heroDesc}`}>
            No hidden fees. No per-seat traps. Pay for what your agents actually do.
          </p>
        </div>
      </section>

      {/* ─── Tier Cards ──────────────────────────── */}
      <section className={`section-sm ${styles.tiers}`}>
        <div className="container">
          <div className={styles.tierGrid}>
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`${styles.tierCard} ${tier.highlight ? styles.tierHighlight : ""}`}
                id={`tier-${tier.id}`}
              >
                {tier.badge && (
                  <span className={`badge badge-cyan ${styles.tierBadge}`}>{tier.badge}</span>
                )}
                <div className={styles.tierHeader}>
                  <h2 className={styles.tierName}>{tier.name}</h2>
                  <div className={styles.tierPrice}>
                    <span className={styles.tierPriceAmount}>{tier.price}</span>
                    {tier.period && <span className={styles.tierPricePeriod}>{tier.period}</span>}
                  </div>
                  <p className={styles.tierDesc}>{tier.desc}</p>
                </div>

                <Link
                  href={tier.ctaHref}
                  className={`btn btn-lg ${tier.highlight ? "btn-primary" : "btn-secondary"} ${styles.tierCta}`}
                  id={`tier-cta-${tier.id}`}
                >
                  {tier.cta}
                </Link>

                <ul className={styles.tierFeatures}>
                  {tier.features.map((f) => (
                    <li key={f} className={styles.tierFeatureItem}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="7" fill="rgba(0,214,143,0.1)" />
                        <path d="M4.5 8l2.5 2.5 4-4.5" stroke="#00D68F" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Comparison Table ────────────────────── */}
      <section className={`section ${styles.compare}`}>
        <div className="container">
          <h2 className="text-h2" style={{ marginBottom: 40 }}>Full feature comparison</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thFeature} scope="col">Feature</th>
                  <th className={styles.th} scope="col">Starter</th>
                  <th className={`${styles.th} ${styles.thHighlight}`} scope="col">Growth</th>
                  <th className={styles.th} scope="col">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_FEATURES.map((group) => (
                  <>
                    <tr key={`group-${group.category}`} className={styles.groupRow}>
                      <td colSpan={4} className={styles.groupLabel}>{group.category}</td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label} className={styles.dataRow}>
                        <td className={styles.tdFeature}>{row.label}</td>
                        <td className={styles.td}><CheckIcon value={row.starter} /></td>
                        <td className={`${styles.td} ${styles.tdHighlight}`}><CheckIcon value={row.growth} /></td>
                        <td className={styles.td}><CheckIcon value={row.enterprise} /></td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────── */}
      <section className={`section ${styles.faq}`}>
        <div className="container">
          <div className={styles.faqInner}>
            <h2 className="text-h2" style={{ marginBottom: 8 }}>Frequently asked questions</h2>
            <p className="text-body text-secondary" style={{ marginBottom: 48 }}>
              Still have questions?{" "}
              <a href="mailto:contact@agintx.com" style={{ color: "var(--cyan-500)" }}>
                Email us
              </a>
              .
            </p>
            <div className={styles.faqGrid}>
              {FAQ.map((item) => (
                <div key={item.q} className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{item.q}</h3>
                  <p className={styles.faqA}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Enterprise CTA ──────────────────────── */}
      <section className={`section-sm ${styles.enterpriseCta}`}>
        <div className="container">
          <div className={styles.enterpriseCtaInner}>
            <div className={styles.enterpriseCtaLeft}>
              <span className="badge badge-cyan" style={{ marginBottom: 16 }}>Enterprise</span>
              <h2 className="text-h2">Need a custom deal?</h2>
              <p className="text-body text-secondary" style={{ marginTop: 10, maxWidth: 440 }}>
                Our enterprise team will scope a plan around your run volume, compliance requirements,
                and infrastructure preferences.
              </p>
            </div>
            <Link href="/demo" className="btn btn-primary btn-lg" id="pricing-enterprise-cta">
              Talk to Sales
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
