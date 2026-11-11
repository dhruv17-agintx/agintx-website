"use client";

import { useState } from "react";
import Link from "next/link";
import { INDUSTRY_VERTICALS } from "@/data/industry-verticals";
import styles from "./VerticalsShowcase.module.css";

const CATEGORIES = [
  { id: "all", label: "All 11 Verticals" },
  { id: "procurement", label: "RFP & Procurement" },
  { id: "regulated", label: "Regulated & Enterprise ($120K+)" },
  { id: "healthcare", label: "Healthcare & Life Sciences" },
];

export default function VerticalsShowcase() {
  const [filter, setFilter] = useState("all");

  const filtered = INDUSTRY_VERTICALS.filter((v) => {
    if (filter === "procurement") return v.slug === "rfp-intelligence";
    if (filter === "regulated") return v.rawAcv >= 120000;
    if (filter === "healthcare") return v.slug === "healthcare-pharma";
    return true;
  });

  return (
    <div className={styles.container}>
      {/* ── Category Filters ── */}
      <div className={styles.filterBar}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`${styles.filterBtn} ${filter === cat.id ? styles.filterActive : ""}`}
            id={`filter-cat-${cat.id}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Spotlight Banner for RFP Finder (if all or procurement) ── */}
      {(filter === "all" || filter === "procurement") && (
        <div className={styles.rfpSpotlight}>
          <div className={styles.rfpBadgeRow}>
            <span className={styles.livePulseDot} />
            <span className={styles.rfpSpotlightTag}>FLAGSHIP 11TH VERTICAL · LIVE PORTAL</span>
            <span className={styles.guaranteeTag}>ZERO-EXPIRED GUARANTEE</span>
          </div>

          <div className={styles.rfpContentGrid}>
            <div className={styles.rfpLeft}>
              <div className={styles.rfpPrefix}>rfp-agintx</div>
              <h3 className={styles.rfpH3}>RFP Intelligence &amp; Autonomous Proposal Suite</h3>
              <p className={styles.rfpDesc}>
                Turn 200+ page government and commercial solicitations into win-optimized proposals.
                Includes the active Live RFP Finder tracking SAM.gov &amp; agency solicitations with zero expired contracts.
              </p>
              <div className={styles.rfpTags}>
                <span className={styles.rfpFeatureTag}>Autonomous Shredder</span>
                <span className={styles.rfpFeatureTag}>Go/No-Go Agent</span>
                <span className={styles.rfpFeatureTag}>Compliance Matrix</span>
                <span className={styles.rfpFeatureTag}>Pricing Simulator</span>
              </div>
            </div>

            <div className={styles.rfpRight}>
              <div className={styles.rfpMetricsBox}>
                <div className={styles.rfpStat}>
                  <span className={styles.rfpStatVal}>$140K/yr</span>
                  <span className={styles.rfpStatLbl}>Target ACV</span>
                </div>
                <div className={styles.rfpStat}>
                  <span className={styles.rfpStatVal}>88%</span>
                  <span className={styles.rfpStatLbl}>Gross Margin</span>
                </div>
                <div className={styles.rfpStat}>
                  <span className={styles.rfpStatVal}>96.4%</span>
                  <span className={styles.rfpStatLbl}>Win Prob Score</span>
                </div>
              </div>

              <div className={styles.rfpActions}>
                <Link href="/rfp-finder" className="btn btn-primary" id="home-rfp-portal-btn">
                  Launch Live RFP Finder
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
                <Link href="/solutions/rfp-intelligence" className="btn btn-secondary" id="home-rfp-details-btn">
                  View 10 RFP Modules
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Verticals Grid ── */}
      <div className={styles.grid}>
        {filtered.map((vert) => (
          <div key={vert.slug} className={styles.card} id={`vertical-card-${vert.slug}`}>
            <div className={styles.cardHeader}>
              <span className={styles.prefixBadge} style={{ borderColor: vert.color, color: vert.color }}>
                {vert.prefix}
              </span>
              <span className={styles.acvBadge}>{vert.acv}</span>
            </div>

            <div className={styles.titleRow}>
              <span className={styles.icon}>{vert.icon}</span>
              <h3 className={styles.cardTitle}>{vert.name}</h3>
            </div>

            <p className={styles.tagline}>{vert.tagline}</p>

            <div className={styles.killerBox}>
              <div className={styles.killerLabel}>CORE PRODUCT MODULE</div>
              <div className={styles.killerTitle}>{vert.pdfKillerSolution}</div>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.moduleCount}>10 Killer Modules</span>
              <div className={styles.linkGroup}>
                {vert.slug === "healthcare-pharma" ? (
                  <Link href="/solutions/healthcare" className={styles.cardActionLink}>
                    10 Sandboxes →
                  </Link>
                ) : vert.slug === "rfp-intelligence" ? (
                  <Link href="/rfp-finder" className={styles.cardActionLink}>
                    RFP Finder →
                  </Link>
                ) : (
                  <Link href={`/solutions/${vert.slug}`} className={styles.cardActionLink}>
                    Explore Vertical →
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
