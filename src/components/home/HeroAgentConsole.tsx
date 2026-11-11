"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./HeroAgentConsole.module.css";

type Scenario = {
  id: string;
  name: string;
  vertical: string;
  badge: string;
  prompt: string;
  models: string[];
  steps: {
    agent: string;
    action: string;
    detail: string;
    status: "done" | "active" | "waiting";
    latency: string;
    tokens?: string;
  }[];
  output: {
    title: string;
    stats: { label: string; value: string; color?: string }[];
    summary: string;
  };
};

const SCENARIOS: Scenario[] = [
  {
    id: "rfp",
    name: "Autonomous RFP Shredder",
    vertical: "rfp-agintx",
    badge: "Procurement Suite",
    prompt: "Ingest DOD Solicitation #FA8773-26-R-0012 (248 pages), build compliance matrix, score win probability, and draft 3-paragraph executive proposal.",
    models: ["Claude 3.5 Sonnet", "Gemini 1.5 Pro", "pgvector"],
    steps: [
      {
        agent: "DocParser-Agent",
        action: "Chunking & Vector Shredding",
        detail: "248 PDF pages parsed into 1,842 semantic chunks with table structure preserved.",
        status: "done",
        latency: "14ms",
        tokens: "4,210",
      },
      {
        agent: "Compliance-Matrix-Agent",
        action: "Clause Extraction & Risk Scoring",
        detail: "Found 47 mandatory requirements (DFARS 252.204-7012, CMMC L3). Capability match: 46/47.",
        status: "done",
        latency: "28ms",
        tokens: "8,940",
      },
      {
        agent: "Pricing-Simulator-Agent",
        action: "Historical Rate Benchmark",
        detail: "Simulated 14 competitor bids: Target fee $4.2M yields 38.4% gross margin at 96.4% win rate.",
        status: "done",
        latency: "18ms",
        tokens: "2,350",
      },
      {
        agent: "Executive-Pitch-Agent",
        action: "Tailored Narrative Synthesis",
        detail: "Generated 3-paragraph executive narrative focused on autonomous security failover.",
        status: "done",
        latency: "22ms",
        tokens: "1,420",
      },
      {
        agent: "Human-Gate-Guardian",
        action: "Sign-Off Enclave Triggered",
        detail: "Autonomous proposal sealed with SHA-256 digest #a8e7... Ready for proposal director review.",
        status: "done",
        latency: "4ms",
      },
    ],
    output: {
      title: "RFP Evaluation & Response Dossier",
      stats: [
        { label: "Win Probability", value: "96.4%", color: "#00E5FF" },
        { label: "Compliance Score", value: "98.2%", color: "#10B981" },
        { label: "Target Gross Margin", value: "38.4%", color: "#3B82F6" },
        { label: "Time Saved", value: "48 Hours", color: "#A855F7" },
      ],
      summary: "Autonomous evaluation complete. 47/47 clauses addressed. Zero compliance gaps detected. Proposal packet compiled with automated audit appendix.",
    },
  },
  {
    id: "consensus",
    name: "Multi-Agent Consensus Swarm",
    vertical: "Core CAE",
    badge: "DAG Orchestration",
    prompt: "Execute supervisor DAG for automated microservice refactor with real-time peer critique, linting, and regression tests.",
    models: ["GPT-4o", "Claude 3.5 Sonnet", "DeepSeek-Coder"],
    steps: [
      {
        agent: "Supervisor-Orchestrator",
        action: "Decomposing Architecture DAG",
        detail: "Split monolith auth module into 3 stateless agents: TokenVerifier, AuditLogger, RateLimiter.",
        status: "done",
        latency: "12ms",
        tokens: "3,110",
      },
      {
        agent: "CodeGen-Agent",
        action: "Rust & TypeScript Synthesis",
        detail: "Synthesized type-safe handlers with zero unwrap calls and compile-time memory bounds.",
        status: "done",
        latency: "34ms",
        tokens: "7,820",
      },
      {
        agent: "PeerReview-Agent",
        action: "Adversarial Stress Test",
        detail: "Executed 10,000 synthetic concurrency requests: 0 race conditions, P99 latency = 4.2ms.",
        status: "done",
        latency: "25ms",
        tokens: "4,600",
      },
      {
        agent: "SecOps-Guardian",
        action: "OWASP Top-10 Policy Scan",
        detail: "Zero injection vulnerabilities. Memory enclave verified under SOC-2 Type II standards.",
        status: "done",
        latency: "9ms",
        tokens: "1,890",
      },
    ],
    output: {
      title: "Consensus Swarm Benchmark Result",
      stats: [
        { label: "Consensus Agreement", value: "100%", color: "#10B981" },
        { label: "P99 Execution", value: "4.2ms", color: "#00E5FF" },
        { label: "Test Coverage", value: "99.8%", color: "#3B82F6" },
        { label: "Security Faults", value: "0 Detected", color: "#10B981" },
      ],
      summary: "Refactored microservice passed multi-model peer review. Zero regressions detected across 1,200 automated unit tests.",
    },
  },
  {
    id: "med",
    name: "Prior-Auth & FHIR Adjudicator",
    vertical: "med-agintx",
    badge: "Healthcare Suite",
    prompt: "Parse patient clinical notes for spinal MRI (CPT 72148), cross-reference with Aetna Medical Policy #0181, and file X12 278 EDI prior-authorization.",
    models: ["Claude 3.5 Sonnet", "Med-PaLM Enclave", "pgvector"],
    steps: [
      {
        agent: "ClinicalNotes-Extractor",
        action: "EHR Ingestion & De-identification",
        detail: "Parsed EHR clinical encounter note. De-identified 18 HIPAA Safe Harbor identifiers.",
        status: "done",
        latency: "16ms",
        tokens: "2,400",
      },
      {
        agent: "PolicyEngine-Agent",
        action: "Payer Policy Rules Verification",
        detail: "Verified: 6 weeks conservative physical therapy documented, progressive radiculopathy verified.",
        status: "done",
        latency: "21ms",
        tokens: "5,120",
      },
      {
        agent: "EDI-278-Generator",
        action: "X12 Payload Compilation",
        detail: "Generated syntax-validated ASC X12 278 Prior-Auth transaction with attached clinical references.",
        status: "done",
        latency: "11ms",
        tokens: "1,650",
      },
    ],
    output: {
      title: "Prior-Authorization Adjudication",
      stats: [
        { label: "Approval Confidence", value: "98.9%", color: "#10B981" },
        { label: "Turnaround Time", value: "< 90 Sec", color: "#00E5FF" },
        { label: "Denial Risk", value: "< 1.2%", color: "#3B82F6" },
        { label: "HIPAA Compliance", value: "100% Enclave", color: "#A855F7" },
      ],
      summary: "Clinical criteria for CPT 72148 fully satisfied. EDI 278 transaction accepted by payer clearinghouse gateway.",
    },
  },
  {
    id: "fin",
    name: "AML Graph Surveillance Radar",
    vertical: "fin-agintx",
    badge: "Finance Suite",
    prompt: "Monitor real-time Fedwire/SWIFT transaction stream, run multi-hop graph clustering, detect structuring/layering, and auto-draft FinCEN SAR narrative.",
    models: ["GPT-4o", "Neo4j Graph Engine", "Llama-3-70B"],
    steps: [
      {
        agent: "StreamListener-Agent",
        action: "Real-Time Ingestion & Filtering",
        detail: "Processed 48,200 wire transfers/sec. Isolated 3 foreign shell entities with cyclical hops.",
        status: "done",
        latency: "6ms",
        tokens: "3,890",
      },
      {
        agent: "GraphCluster-Agent",
        action: "Temporal Graph Traversal",
        detail: "Uncovered 5-hop structuring evasion: $9,850 transfers staged across 14 accounts in 3 hours.",
        status: "done",
        latency: "19ms",
        tokens: "6,200",
      },
      {
        agent: "SARDrafter-Agent",
        action: "FinCEN Regulatory Narrative",
        detail: "Drafted audit-ready Suspicious Activity Report with exact timestamps, IPs, and KYC matches.",
        status: "done",
        latency: "24ms",
        tokens: "3,400",
      },
    ],
    output: {
      title: "FinCEN SAR Surveillance Dossier",
      stats: [
        { label: "False-Positive Drop", value: "85%", color: "#00E5FF" },
        { label: "Drafting Speed", value: "72 Sec", color: "#10B981" },
        { label: "Audit Accuracy", value: "99.9%", color: "#3B82F6" },
        { label: "Regulatory Ready", value: "FinCEN BSAB", color: "#A855F7" },
      ],
      summary: "Multi-hop structuring confirmed. Case flagged with high-confidence fraud index. SAR narrative automatically ready for compliance officer sign-off.",
    },
  },
];

export default function HeroAgentConsole() {
  const [activeId, setActiveId] = useState("rfp");
  const [isRunning, setIsRunning] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number>(5);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  const handleRun = () => {
    setIsRunning(true);
    setVisibleSteps(1);

    if (timerRef.current) clearInterval(timerRef.current);

    let current = 1;
    timerRef.current = setInterval(() => {
      current++;
      setVisibleSteps(current);
      if (current >= scenario.steps.length) {
        setIsRunning(false);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 600);
  };

  useEffect(() => {
    setVisibleSteps(scenario.steps.length);
    setIsRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [activeId, scenario.steps.length]);

  return (
    <div className={styles.terminalContainer}>
      {/* ── Console Header ── */}
      <div className={styles.terminalHeader}>
        <div className={styles.windowControls}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </div>

        <div className={styles.engineBadge}>
          <span className={styles.statusPulse} />
          <span className={styles.engineText}>CAE 3.2 RUNTIME</span>
          <span className={styles.engineSep}>/</span>
          <span className={styles.latencyText}>P99: 38ms</span>
        </div>

        <div className={styles.actionGroup}>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className={styles.runBtn}
            id="hero-console-run-btn"
          >
            {isRunning ? (
              <>
                <span className={styles.spinner} />
                Executing Swarm...
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 2v12l10-6z" />
                </svg>
                Re-Run Swarm
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Scenario Switcher Tabs ── */}
      <div className={styles.tabBar}>
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveId(s.id)}
            className={`${styles.tabBtn} ${s.id === activeId ? styles.tabActive : ""}`}
            id={`tab-scenario-${s.id}`}
          >
            <span className={styles.tabVertical}>{s.vertical}</span>
            <span className={styles.tabName}>{s.name}</span>
          </button>
        ))}
      </div>

      {/* ── Terminal Body ── */}
      <div className={styles.terminalBody}>
        {/* Intent Prompt Bar */}
        <div className={styles.promptBar}>
          <div className={styles.promptLabel}>
            <span className={styles.promptChevron}>&gt;</span>
            <span className={styles.promptTag}>NATURAL LANGUAGE INTENT</span>
          </div>
          <p className={styles.promptText}>&quot;{scenario.prompt}&quot;</p>
          <div className={styles.modelTags}>
            {scenario.models.map((m) => (
              <span key={m} className={styles.modelTag}>
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Step-by-Step Agent Pipeline Execution */}
        <div className={styles.pipelineSection}>
          <div className={styles.pipelineTitle}>
            <span>AUTONOMOUS AGENT TRACES</span>
            <span className={styles.stepsCounter}>
              {Math.min(visibleSteps, scenario.steps.length)}/{scenario.steps.length} STAGES COMPLETED
            </span>
          </div>

          <div className={styles.stepsList}>
            {scenario.steps.slice(0, visibleSteps).map((step, idx) => (
              <div
                key={idx}
                className={`${styles.stepItem} ${
                  isRunning && idx === visibleSteps - 1 ? styles.stepRunning : styles.stepDone
                }`}
              >
                <div className={styles.stepIndicator}>
                  <div className={styles.stepCircle}>
                    {isRunning && idx === visibleSteps - 1 ? (
                      <span className={styles.stepPulseDot} />
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6.5l2.5 2.5 5-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  {idx < scenario.steps.length - 1 && <div className={styles.stepTrack} />}
                </div>

                <div className={styles.stepContent}>
                  <div className={styles.stepHead}>
                    <span className={styles.agentName}>{step.agent}</span>
                    <span className={styles.actionName}>{step.action}</span>
                    <div className={styles.stepMeta}>
                      {step.tokens && <span className={styles.tokens}>{step.tokens} tokens</span>}
                      <span className={styles.stepLatency}>{step.latency}</span>
                    </div>
                  </div>
                  <p className={styles.stepDetail}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Output Card */}
        {visibleSteps >= scenario.steps.length && (
          <div className={styles.outputCard}>
            <div className={styles.outputHeader}>
              <div className={styles.outputBadge}>
                <span className={styles.checkIcon}>✓</span>
                <span>{scenario.output.title}</span>
              </div>
              <span className={styles.sealedTag}>VERIFIED ENCLAVE ARTIFACT</span>
            </div>

            <div className={styles.metricsGrid}>
              {scenario.output.stats.map((st) => (
                <div key={st.label} className={styles.metricItem}>
                  <span className={styles.metricValue} style={{ color: st.color || "#00E5FF" }}>
                    {st.value}
                  </span>
                  <span className={styles.metricLabel}>{st.label}</span>
                </div>
              ))}
            </div>

            <p className={styles.outputSummary}>{scenario.output.summary}</p>
          </div>
        )}

        {/* Console Footer Jump Links */}
        <div className={styles.terminalFooter}>
          <div className={styles.footerNote}>
            <span>Autonomous agent swarm running in zero-trust VPC sandbox.</span>
          </div>
          <div className={styles.footerActions}>
            {scenario.id === "rfp" && (
              <Link href="/rfp-finder" className={styles.footerLink}>
                Launch Live RFP Finder Portal →
              </Link>
            )}
            {scenario.id === "med" && (
              <Link href="/solutions/healthcare" className={styles.footerLink}>
                Explore 10 Healthcare Sandboxes →
              </Link>
            )}
            {scenario.id === "fin" && (
              <Link href="/solutions/financial-services" className={styles.footerLink}>
                View fin-agintx Suite →
              </Link>
            )}
            {scenario.id === "consensus" && (
              <Link href="/platform" className={styles.footerLink}>
                Inspect CAE Orchestration Architecture →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
