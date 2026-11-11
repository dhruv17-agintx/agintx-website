import type { Metadata } from "next";
import Link from "next/link";
import { HEALTHCARE_PRODUCTS } from "@/data/healthcare-products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Healthcare payments & integration",
  description:
    "Ten productized AgintX workflows for revenue cycle leakage and EHR interoperability — eligibility, EDI recon, denials, FHIR, and more. Interactive demo environment with synthetic data.",
};

export default function HealthcareSolutionsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="eyebrow">UHIC · Healthcare payments & interop</div>
          <h1 className="text-h1">10 healthcare payments & integration products</h1>
          <p className={`text-body-lg text-secondary ${styles.heroDesc}`}>
            High-margin productized workflows on a single HIPAA-oriented middleware core.
            Each module below is a canned demo environment — synthetic data only, not PHI.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <Link href={HEALTHCARE_PRODUCTS[0].demoHref} className="btn btn-primary btn-lg" id="hc-launch-first">
              Launch first demo
            </Link>
            <Link href="/demo?product=healthcare-uhic" className="btn btn-secondary btn-lg">
              Talk to solutions
            </Link>
          </div>
        </div>
      </section>

      <section className={`section-sm ${styles.core}`}>
        <div className="container">
          <div className={styles.coreGrid}>
            <div>
              <div className="eyebrow">Unified Healthcare Interoperability Core</div>
              <h2 className="text-h2">One core. Ten engines.</h2>
              <p className="text-body text-secondary" style={{ marginTop: 12, maxWidth: 480 }}>
                Pre-built adapters for Epic, Cerner, Allscripts, and major clearinghouses.
                Demo sandboxes share the same agent shell: inputs, tool trace, result, live-demo CTA.
              </p>
            </div>
            <ul className={styles.coreList}>
              {[
                "Automated BAA generation (production) — sandbox uses synthetic tenants",
                "Encryption at rest / in transit · SOC 2 Type II audit logging",
                "Hours to deploy vs months of custom EHR consulting",
                "Subscription ACV from $60K to $300K per product",
              ].map((item) => (
                <li key={item} className={styles.coreItem}>· {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Productized killer workflows</div>
          <h2 className="text-h2" style={{ marginBottom: 28 }}>Pick a module</h2>
          <div className={styles.grid}>
            {HEALTHCARE_PRODUCTS.map((p) => (
              <Link key={p.slug} href={p.demoHref} className={styles.card} id={`hc-card-${p.slug}`}>
                <div className={styles.cardTop}>
                  <span className={styles.num}>{p.number}</span>
                  <span className={styles.acv}>{p.acv}</span>
                </div>
                <div className={styles.domain}>{p.domain}</div>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.summary}>{p.summary}</p>
                <span className={styles.cta}>Open demo →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.medicine}>
        <div className="container">
          <div className={styles.medicineInner}>
            <div>
              <div className="eyebrow">Also in healthcare</div>
              <h2 className="text-h3">Clinical operations (med-agintx)</h2>
              <p className="text-body text-secondary" style={{ marginTop: 8, maxWidth: 520 }}>
                Prior authorization, clinical documentation, and care-gap agents — the original
                medicine vertical, nested under the same solutions path.
              </p>
            </div>
            <Link href="/solutions/medicine" className="btn btn-secondary">
              View medicine vertical
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
