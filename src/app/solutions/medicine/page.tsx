import type { Metadata } from "next";
import Link from "next/link";
import { VERTICALS } from "@/data/verticals";
import { HEALTHCARE_PRODUCTS } from "@/data/healthcare-products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Medicine & healthcare",
  description:
    "med-agintx clinical operations plus AgintX’s 10 healthcare payments and interoperability products.",
};

export default function MedicineVerticalPage() {
  const med = VERTICALS.find((v) => v.slug === "medicine");
  if (!med) return null;

  return (
    <section className={styles.page}>
      <div className="container">
        <div className="eyebrow">{med.prefix}</div>
        <h1 className="text-h1">{med.headline}</h1>
        <p className="text-body-lg text-secondary" style={{ marginTop: 12, maxWidth: 640 }}>
          {med.subheadline}
        </p>

        <div className={styles.grid}>
          {med.useCases.map((uc) => (
            <div key={uc.title} className={styles.card}>
              <h2 className="text-h3">{uc.title}</h2>
              <p className="text-body-sm text-secondary" style={{ marginTop: 8 }}>{uc.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.banner}>
          <div className="eyebrow">Payments & integration</div>
          <h2 className="text-h3">10 productized revenue-cycle modules</h2>
          <p className="text-body text-secondary" style={{ marginTop: 8, marginBottom: 16, maxWidth: 520 }}>
            Eligibility, EDI 837/835 recon, denials, telehealth ledger, lab charge capture, pharmacy BI,
            dental attachments, VBC RAF, behavioral superbills, and the payer FHIR gateway.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/solutions/healthcare" className="btn btn-primary" id="med-to-healthcare">
              Open healthcare hub
            </Link>
            {HEALTHCARE_PRODUCTS.slice(0, 3).map((p) => (
              <Link key={p.slug} href={p.demoHref} className="btn btn-secondary btn-sm">
                {p.domain.split("&")[0].trim()}
              </Link>
            ))}
          </div>
        </div>

        <div className={`code-wrap ${styles.code}`}>
          <div className="code-header">
            <span className="code-title">{med.code.title}</span>
          </div>
          <pre className="code-body">{med.code.snippet}</pre>
        </div>
      </div>
    </section>
  );
}
