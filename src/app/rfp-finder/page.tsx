import type { Metadata } from "next";
import Link from "next/link";
import RfpFinder from "@/components/rfp/RfpFinder";

export const metadata: Metadata = {
  title: "Live RFP Finder & Procurement Match Engine | rfp-agintx",
  description:
    "Search and filter active, non-expired federal, state, and enterprise RFPs by date range, industry vertical, and contract ceiling. Powered by rfp-agintx.",
};

export default function RfpFinderStandalonePage() {
  return (
    <>
      <section style={{ padding: "120px 0 40px", borderBottom: "1px solid var(--border-subtle)", background: "radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.08) 0%, transparent 60%)" }}>
        <div className="container">
          <nav style={{ display: "flex", gap: 8, fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/solutions" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>Solutions</Link>
            <span>/</span>
            <Link href="/solutions/rfp-intelligence" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>rfp-agintx</Link>
            <span>/</span>
            <span>RFP Finder</span>
          </nav>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
            <div>
              <div className="section-eyebrow animate-fade-up">rfp-agintx Intelligence Suite</div>
              <h1 className="text-display animate-fade-up-delay-1" style={{ marginTop: 8 }}>
                Live RFP Finder &amp; <span className="text-gradient">Match Engine</span>
              </h1>
              <p className="text-body-lg text-secondary animate-fade-up-delay-2" style={{ maxWidth: 680, marginTop: 12 }}>
                Scan active high-value procurement solicitations across defense, healthcare, finance, energy, and cloud infrastructure.
                Strict real-time validation ensures <strong>zero expired contracts</strong> are ever surfaced.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/solutions/rfp-intelligence" className="btn btn-secondary">
                View 10 RFP Killer Modules
              </Link>
              <Link href="/demo?vertical=rfp-agintx" className="btn btn-primary">
                Deploy rfp-agintx
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <RfpFinder />
        </div>
      </section>
    </>
  );
}
