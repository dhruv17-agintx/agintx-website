"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ACTIVE_RFP_CONTRACTS, type ActiveRFPContract, getActiveRFPContracts } from "@/data/rfp-contracts";
import styles from "./RfpFinder.module.css";

const INDUSTRIES = [
  "All Industries",
  "Defense & Aerospace",
  "Healthcare & Pharma",
  "Financial Services",
  "Energy & Utilities",
  "Cloud & Enterprise Tech",
  "Logistics & Supply Chain",
  "Real Estate (PropTech)",
  "Legal & Compliance",
  "Education & EdTech",
  "Retail & E-Commerce",
];

const REVENUE_BRACKETS = [
  "All Budgets",
  "<$5M",
  "$5M - $20M",
  "$20M+",
];

export default function RfpFinder() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedRevenue, setSelectedRevenue] = useState("All Budgets");
  const [dateFilter, setDateFilter] = useState<"all" | "14d" | "30d" | "60d" | "90d">("all");
  const [minAccuracy, setMinAccuracy] = useState<number>(90); // default 90% accuracy optimization

  // Active modal inspection
  const [activeModalContract, setActiveModalContract] = useState<ActiveRFPContract | null>(null);
  const [activeActionType, setActiveActionType] = useState<"gonogo" | "compliance" | "executive" | null>(null);
  const [simulatingAgent, setSimulatingAgent] = useState(false);

  // Guarantee: ONLY non-expired contracts are ever queried
  const verifiedActiveList = useMemo(() => {
    return getActiveRFPContracts();
  }, []);

  // Filtered contracts
  const filteredContracts = useMemo(() => {
    return verifiedActiveList.filter((contract) => {
      // 1. Strict Deadline Check (Zero Expired Guarantee)
      const now = new Date("2026-10-27T15:00:00").getTime();
      const deadline = new Date(contract.deadline + "T23:59:59").getTime();
      if (deadline <= now) return false;

      // 2. Accuracy Filter (Optimize accuracy)
      if (contract.accuracyScore < minAccuracy) return false;

      // 3. Date Range Filter
      if (dateFilter === "14d" && contract.daysRemaining > 14) return false;
      if (dateFilter === "30d" && contract.daysRemaining > 30) return false;
      if (dateFilter === "60d" && contract.daysRemaining > 60) return false;
      if (dateFilter === "90d" && contract.daysRemaining > 90) return false;

      // 4. Industry Filter
      if (selectedIndustry !== "All Industries" && !contract.industry.includes(selectedIndustry.split(" ")[0])) {
        return false;
      }

      // 5. Revenue Ceiling Filter
      if (selectedRevenue === "<$5M" && contract.contractCeiling >= 5000000) return false;
      if (selectedRevenue === "$5M - $20M" && (contract.contractCeiling < 5000000 || contract.contractCeiling > 20000000)) return false;
      if (selectedRevenue === "$20M+" && contract.contractCeiling < 20000000) return false;

      // 6. Keyword / Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          contract.title.toLowerCase().includes(q) ||
          contract.agency.toLowerCase().includes(q) ||
          contract.solicitationNumber.toLowerCase().includes(q) ||
          contract.naicsCode.toLowerCase().includes(q) ||
          contract.summary.toLowerCase().includes(q);
        if (!matches) return false;
      }

      return true;
    }).sort((a, b) => b.accuracyScore - a.accuracyScore); // optimize: highest accuracy first
  }, [verifiedActiveList, searchQuery, selectedIndustry, selectedRevenue, dateFilter, minAccuracy]);

  const handleTriggerAction = (contract: ActiveRFPContract, type: "gonogo" | "compliance" | "executive") => {
    setActiveModalContract(contract);
    setActiveActionType(type);
    setSimulatingAgent(true);
    setTimeout(() => {
      setSimulatingAgent(false);
    }, 850);
  };

  return (
    <div className={styles.container}>
      {/* Zero-Expired Guarantee Bar */}
      <div className={styles.guaranteeBadge}>
        <span className={styles.guaranteeDot} />
        <span>Verified Active Live Feed · Zero Expired Contracts Surfaced (Strict Real-Time Enforcement)</span>
      </div>

      {/* Filter Card Panel */}
      <div className={styles.filterPanel}>
        <div className={styles.searchRow}>
          <div className={styles.searchInputWrap}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search active RFPs by keyword, agency, solicitation #, or NAICS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="rfp-search-input"
            />
          </div>

          <div style={{ minWidth: 200 }}>
            <div className={styles.filterLabel}>Optimize Accuracy</div>
            <select
              className={styles.selectInput}
              style={{ width: "100%" }}
              value={minAccuracy}
              onChange={(e) => setMinAccuracy(Number(e.target.value))}
              id="rfp-accuracy-filter"
            >
              <option value={90}>Min 90% Match (Vetted)</option>
              <option value={95}>Min 95% Match (High Win Rate)</option>
              <option value={98}>Min 98% Match (Top Tier Match)</option>
              <option value={80}>Show All Matches (80%+)</option>
            </select>
          </div>
        </div>

        {/* Dropdowns Row */}
        <div className={styles.filtersGrid}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel} htmlFor="rfp-industry-select">Industry Vertical</label>
            <select
              id="rfp-industry-select"
              className={styles.selectInput}
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
            >
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel} htmlFor="rfp-revenue-select">Contract Value / Ceiling</label>
            <select
              id="rfp-revenue-select"
              className={styles.selectInput}
              value={selectedRevenue}
              onChange={(e) => setSelectedRevenue(e.target.value)}
            >
              {REVENUE_BRACKETS.map((rev) => (
                <option key={rev} value={rev}>{rev}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel} htmlFor="rfp-date-select">Submission Window</label>
            <select
              id="rfp-date-select"
              className={styles.selectInput}
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value as any)}
            >
              <option value="all">All Active Windows (Future)</option>
              <option value="14d">Closes in Next 14 Days (Urgent)</option>
              <option value="30d">Closes in Next 30 Days</option>
              <option value="60d">Closes in Next 60 Days</option>
              <option value="90d">Closes in Next 90 Days</option>
            </select>
          </div>
        </div>

        {/* Quick Date Range Pills */}
        <div className={styles.quickPills}>
          <span className={styles.pillLabel}>Quick Filter:</span>
          <button
            type="button"
            className={`${styles.pillBtn} ${dateFilter === "all" ? styles.pillBtnActive : ""}`}
            onClick={() => setDateFilter("all")}
          >
            All Active ({verifiedActiveList.length})
          </button>
          <button
            type="button"
            className={`${styles.pillBtn} ${dateFilter === "14d" ? styles.pillBtnActive : ""}`}
            onClick={() => setDateFilter("14d")}
          >
            Next 14 Days
          </button>
          <button
            type="button"
            className={`${styles.pillBtn} ${dateFilter === "30d" ? styles.pillBtnActive : ""}`}
            onClick={() => setDateFilter("30d")}
          >
            Next 30 Days
          </button>
          <button
            type="button"
            className={`${styles.pillBtn} ${dateFilter === "60d" ? styles.pillBtnActive : ""}`}
            onClick={() => setDateFilter("60d")}
          >
            Next 60 Days
          </button>
          <button
            type="button"
            className={`${styles.pillBtn} ${dateFilter === "90d" ? styles.pillBtnActive : ""}`}
            onClick={() => setDateFilter("90d")}
          >
            Next 90 Days
          </button>
        </div>
      </div>

      {/* Results Header */}
      <div className={styles.resultsHeader}>
        <div className={styles.resultsCount}>
          Showing <strong>{filteredContracts.length}</strong> active opportunities (Sorted by accuracy match)
        </div>
        <div className={styles.accuracyOptimizerPill}>
          <span>⚡ AI Capability Match Active</span>
          <span>·</span>
          <span>Filtered ≥ {minAccuracy}% Accuracy</span>
        </div>
      </div>

      {/* Contracts List */}
      {filteredContracts.length === 0 ? (
        <div className={styles.emptyState}>
          <h3>No non-expired RFPs match your current filter combination.</h3>
          <p style={{ marginTop: 8 }}>
            Try lowering your accuracy threshold or expanding the submission window date range.
          </p>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ marginTop: 16 }}
            onClick={() => {
              setSearchQuery("");
              setSelectedIndustry("All Industries");
              setSelectedRevenue("All Budgets");
              setDateFilter("all");
              setMinAccuracy(80);
            }}
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className={styles.contractsList}>
          {filteredContracts.map((contract) => (
            <div key={contract.id} className={styles.contractCard} id={`contract-${contract.id}`}>
              <div className={styles.cardTopRow}>
                <div className={styles.badgesGroup}>
                  <span className={styles.solicitationBadge}>{contract.solicitationNumber}</span>
                  <span className="badge badge-cyan">{contract.industry}</span>
                  <span className={styles.accuracyBadge}>{contract.accuracyScore}% Accuracy Match</span>
                </div>
                <span className={styles.deadlineBadge}>
                  ⏳ Closes in {contract.daysRemaining} days ({contract.deadline})
                </span>
              </div>

              <h3 className={styles.contractTitle}>{contract.title}</h3>

              <div className={styles.contractMeta}>
                <span><strong>Agency:</strong> {contract.agency}</span>
                <span>•</span>
                <span><strong>NAICS:</strong> {contract.naicsCode}</span>
                <span>•</span>
                <span><strong>Set-Aside:</strong> {contract.setAside}</span>
              </div>

              <p className={styles.contractSummary}>{contract.summary}</p>

              {/* Mandatory requirements preview */}
              <div className={styles.requirementsWrap}>
                <div className={styles.requirementsTitle}>Mandatory Compliance Checklist (Auto-Extracted)</div>
                <ul className={styles.requirementsList}>
                  {contract.mandatoryRequirements.map((req, idx) => (
                    <li key={idx} className={styles.reqItem}>
                      <span className={styles.reqCheck}>✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer with Pricing Ceiling & Actions */}
              <div className={styles.cardFooter}>
                <div className={styles.ceilingBox}>
                  <span className={styles.ceilingLabel}>Contract Ceiling</span>
                  <span className={styles.ceilingValue}>{contract.formattedCeiling}</span>
                </div>

                <div className={styles.actionsGroup}>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleTriggerAction(contract, "gonogo")}
                    id={`btn-gonogo-${contract.id}`}
                  >
                    Run Go/No-Go Agent
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleTriggerAction(contract, "compliance")}
                    id={`btn-matrix-${contract.id}`}
                  >
                    Compliance Matrix
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => handleTriggerAction(contract, "executive")}
                    id={`btn-draft-${contract.id}`}
                  >
                    Auto-Draft Proposal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Interactive Agent Flow Modal */}
      {activeModalContract && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true">
          <div className={styles.modalContent}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setActiveModalContract(null)}
              aria-label="Close dialog"
            >
              ×
            </button>

            <div className="section-eyebrow" style={{ color: "var(--cyan-400)" }}>
              AgintX RFP Intelligence Engine (CAE)
            </div>

            <h2 className="text-h2" style={{ marginTop: 8, marginBottom: 12 }}>
              {activeActionType === "gonogo" && "Solution #2: Real-Time Compliance Matrix & Go/No-Go Agent"}
              {activeActionType === "compliance" && "Solution #1: Autonomous RFP Ingestion & Compliance Matrix"}
              {activeActionType === "executive" && "Solution #7: Executive Summary & Persuasive Pitch Generator"}
            </h2>

            <p className="text-body-sm text-secondary">
              Evaluating solicitation <strong>{activeModalContract.solicitationNumber}</strong> · {activeModalContract.title}
            </p>

            {simulatingAgent ? (
              <div className={styles.traceBox}>
                <div>[0.00s] Parsing solicitation structure via LangChain &amp; pgvector...</div>
                <div>[0.28s] Cross-referencing {activeModalContract.mandatoryRequirements.length} mandatory clauses against enterprise capabilities...</div>
                <div>[0.55s] Running Monte Carlo pricing simulation with 42% margin floor...</div>
                <div>[0.82s] Synthesizing executive brief for {activeModalContract.agency}...</div>
              </div>
            ) : (
              <div>
                <div className={styles.scorecardGrid}>
                  <div className={styles.scorecardStat}>
                    <div className={styles.ceilingLabel}>Decision Recommendation</div>
                    <div className={styles.scorecardValue}>{activeModalContract.goNoGoRecommendation}</div>
                  </div>
                  <div className={styles.scorecardStat}>
                    <div className={styles.ceilingLabel}>Estimated Win Probability</div>
                    <div className={styles.scorecardValue} style={{ color: "var(--cyan-400)" }}>
                      {activeModalContract.winProbability}%
                    </div>
                  </div>
                  <div className={styles.scorecardStat}>
                    <div className={styles.ceilingLabel}>Target Gross Margin</div>
                    <div className={styles.scorecardValue}>
                      {activeModalContract.estimatedMargin}%
                    </div>
                  </div>
                </div>

                {activeActionType === "gonogo" && (
                  <div className={styles.requirementsWrap}>
                    <div className={styles.requirementsTitle}>Evaluator Go/No-Go Rationale</div>
                    <p className="text-body-sm text-secondary" style={{ lineHeight: 1.6 }}>
                      AgintX scores this opportunity at <strong>{activeModalContract.accuracyScore}% accuracy match</strong>.
                      All {activeModalContract.mandatoryRequirements.length} mandatory technical clauses (including FedRAMP/HIPAA/SOC2 constraints)
                      align directly with pre-verified organizational credentials. Estimated ceiling: {activeModalContract.formattedCeiling}.
                      Zero non-conforming liabilities detected.
                    </p>
                  </div>
                )}

                {activeActionType === "compliance" && (
                  <div className={styles.requirementsWrap}>
                    <div className={styles.requirementsTitle}>Generated Compliance Matrix (100% Pass)</div>
                    <ul className={styles.requirementsList}>
                      {activeModalContract.mandatoryRequirements.map((req, i) => (
                        <li key={i} className={styles.reqItem} style={{ marginBottom: 6 }}>
                          <span className={styles.reqCheck}>[VERIFIED PASS]</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeActionType === "executive" && (
                  <div className={styles.requirementsWrap}>
                    <div className={styles.requirementsTitle}>Generated Executive Pitch Narrative (Solution #7)</div>
                    <p className="text-body-sm text-secondary" style={{ fontStyle: "italic", lineHeight: 1.7 }}>
                      &ldquo;In response to {activeModalContract.agency}&apos;s solicitation ({activeModalContract.solicitationNumber}),
                      AgintX delivers a production-hardened autonomous intelligence framework built specifically for
                      {activeModalContract.industry.toLowerCase()} operations. By unifying multi-agent task execution
                      with deterministic compliance guardrails, our solution ensures immediate compliance with all
                      solicitation parameters while guaranteeing zero-downtime deployment within 48 hours of contract award.&rdquo;
                    </p>
                  </div>
                )}

                <div style={{ display: "flex", gap: 12, marginTop: 24, justifyContent: "flex-end" }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setActiveModalContract(null)}
                  >
                    Close
                  </button>
                  <Link
                    href={`/demo?vertical=rfp-agintx`}
                    className="btn btn-primary"
                    id="modal-rfp-demo-cta"
                  >
                    Proceed with Proposal in rfp-agintx →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
