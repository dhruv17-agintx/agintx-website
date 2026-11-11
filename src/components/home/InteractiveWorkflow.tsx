"use client";

import { useState } from "react";
import styles from "./InteractiveWorkflow.module.css";

type WorkflowStep = {
  num: string;
  title: string;
  tagline: string;
  desc: string;
  deliverables: string[];
  mockData: {
    type: "intent" | "catalog" | "code" | "deploy" | "eval";
    badge: string;
    title: string;
    content: string;
    stats: { k: string; v: string }[];
  };
};

const STEPS: WorkflowStep[] = [
  {
    num: "01",
    title: "Describe",
    tagline: "Natural Language Intent Compiler",
    desc: "Define agent goals, constraints, and operational boundaries in plain language. AgintX parses complex enterprise requirements and synthesizes an executable state machine DAG automatically.",
    deliverables: [
      "Natural language requirement parsing",
      "Automatic DAG topology synthesis",
      "Role-based privilege boundaries",
      "Compliance policy inference",
    ],
    mockData: {
      type: "intent",
      badge: "INTENT COMPILER v3.2",
      title: "rfp_shredder_workflow.intent",
      content: `// Human Intent Input:
"When an active federal solicitation drops in SAM.gov,
 ingest the RFP PDF, run DFARS clause extraction,
 query pgvector for past technical past performance,
 and trigger proposal director sign-off if win-rate > 85%."

// CAE Compiled Execution Topology:
{
  "topology": "SupervisorWorkerDAG",
  "nodes": ["SamGovListener", "PdfShredder", "DfarsMatrix", "VectorRAG", "HumanGate"],
  "sla_max_latency_ms": 120,
  "confidence_threshold": 0.85
}`,
      stats: [
        { k: "Parsing Time", v: "8ms" },
        { k: "Synthesized Nodes", v: "5 Agents" },
        { k: "Schema Validity", v: "100%" },
      ],
    },
  },
  {
    num: "02",
    title: "Procure",
    tagline: "Zero-Trust Catalog Sourcing",
    desc: "Automatically source and configure the right foundation models, specialized embedding engines, vector databases, and enterprise connectors from your approved corporate catalog.",
    deliverables: [
      "Dynamic cost & latency multi-model routing",
      "Pre-authenticated tool connector vault",
      "Zero API key sprawl with automated token rotation",
      "Confidential computing enclave pairing",
    ],
    mockData: {
      type: "catalog",
      badge: "CATALOG ORCHESTRATOR",
      title: "approved_resources.catalog",
      content: `[APPROVED ENTERPRISE STACK]
✓ Models: Claude-3.5-Sonnet (Reasoning) | GPT-4o (Drafting) | Gemini-1.5-Flash (Extraction)
✓ Vector Storage: pgvector (AWS RDS Aurora / 1536-dim / HNSW index)
✓ Verified Connectors:
  - Epic EHR (FHIR R4 OAuth2)
  - Bloomberg Terminal API (Market Data Gateway)
  - Salesforce Core CRM (Bulk v2)
  - Snowflake Data Cloud (Confidential Data Cleanroom)
✓ Enclave: AWS Nitro Enclave (SOC-2 Type II Attestation Verified)`,
      stats: [
        { k: "Active Connectors", v: "500+" },
        { k: "Model Redundancy", v: "4-Way Failover" },
        { k: "Audit Status", v: "Pre-Cleared" },
      ],
    },
  },
  {
    num: "03",
    title: "Develop",
    tagline: "Type-Safe Agent Synthesis",
    desc: "Generate production-grade agent code with built-in safety rails, exponential retry logic, state persistence, and deterministic observability — zero repetitive boilerplate.",
    deliverables: [
      "Production-ready TypeScript & Python SDKs",
      "Self-correcting code generation",
      "Built-in OWASP & prompt injection filters",
      "Deterministic mock environments for unit tests",
    ],
    mockData: {
      type: "code",
      badge: "TYPE-SAFE AGENT SYNTH",
      title: "proposal_agent.ts",
      content: `import { Agent, Tool, Enclave, PolicyGate } from "@agintx/sdk";

@Enclave({ isolation: "ConfidentialNitro", soc2: true })
export class RfpEvaluationAgent extends Agent {
  @PolicyGate({ maxBudgetUSD: 5.0, requireHumanAboveWinRate: 0.90 })
  async evaluateSolicitation(solicitationId: string) {
    const rawRfp = await this.tools.samGov.fetchRfp(solicitationId);
    const parsedMatrix = await this.tools.docParser.shred(rawRfp);
    const pastPerformance = await this.tools.vectorRAG.match(parsedMatrix.clauses);
    
    return this.supervisor.dispatch({
      action: "COMPILE_PROPOSAL_DOSSIER",
      confidence: pastPerformance.matchRate,
      payload: parsedMatrix
    });
  }
}`,
      stats: [
        { k: "Type Safety", v: "100% Strict" },
        { k: "Boilerplate Reduction", v: "92%" },
        { k: "Unit Test Pass", v: "48/48" },
      ],
    },
  },
  {
    num: "04",
    title: "Deploy",
    tagline: "One-Click Sovereign Enclaves",
    desc: "Ship multi-agent swarms to any target environment — AWS, Azure, GCP, sovereign VPC, on-prem bare metal, or air-gapped GovCloud — with immutable image builds and zero config drift.",
    deliverables: [
      "Sub-50ms cold-start serverless or Kubernetes containers",
      "Confidential computing Nitro & TDX enclaves",
      "Air-gapped deployment for DoD & defense contractors",
      "Zero-downtime blue/green swarm rollback",
    ],
    mockData: {
      type: "deploy",
      badge: "ZERO-DRIFT DEPLOY",
      title: "cluster_telemetry.deploy",
      content: `[DEPLOYMENT PIPELINE #AGX-9824]
Target: AWS GovCloud (US-East) · CMMC Level 3 Enclave
Digest: sha256:7f92b4ec9103... (Immutable Build Verified)

Status: DEPLOYED TO PRODUCTION ✓
- Pods: 12 Active Nodes (Auto-scaling 2–50)
- Cold-Start: 38ms
- Memory Footprint: 142MB per worker
- Egress Policy: Strict Zero-Egress (Air-Gapped Private VPC)
- Mutual TLS: mTLS 1.3 with automated certificate rotation`,
      stats: [
        { k: "Cold Start", v: "< 40ms" },
        { k: "Target SLA", v: "99.99%" },
        { k: "Config Drift", v: "0.00%" },
      ],
    },
  },
  {
    num: "05",
    title: "Done",
    tagline: "Continuous Evals & Governance",
    desc: "Monitor, evaluate, and iterate with confidence. Full distributed traces, synthetic adversarial evals, token cost accounting, and cryptographic human-in-the-loop approvals.",
    deliverables: [
      "OpenTelemetry distributed trace graphs",
      "Deterministic eval harness with benchmark regressions",
      "Human-in-the-loop escalation approval queues",
      "Real-time token cost & margin ledger",
    ],
    mockData: {
      type: "eval",
      badge: "GOVERNANCE & EVALS",
      title: "realtime_observability.audit",
      content: `[CONTINUOUS EVALUATION RUNTIME]
Active Agents: 10,482 Swarms · P99 Latency: 42ms · Error Rate: 0.001%

Live Gates Status:
[HUMAN GATE #01] DOD Solicitation #FA8773-26-R-0012 -> APPROVED by Director of Contracts (0.4s)
[EVAL HARNESS] 2,400 synthetic adversarial prompts tested -> 100% Guardrail Deflection
[COST LEDGER] Total Token Spend: $14.28 | Gross Margin: 88.4%
[AUDIT DIGEST] Signed with Hardware Security Module (HSM Key #498)`,
      stats: [
        { k: "Gross Margin", v: "88.4%" },
        { k: "Eval Score", v: "99.8%" },
        { k: "Audit Trails", v: "100% Immutable" },
      ],
    },
  },
];

export default function InteractiveWorkflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = STEPS[activeIndex];

  return (
    <div className={styles.wrapper}>
      {/* ── Left Column: Stepper Navigator ── */}
      <div className={styles.stepsCol}>
        <div className={styles.stepsList}>
          {STEPS.map((step, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={step.num}
                onClick={() => setActiveIndex(idx)}
                className={`${styles.stepCard} ${isActive ? styles.stepCardActive : ""}`}
                id={`workflow-step-btn-${step.num}`}
              >
                <div className={styles.stepNumBadge}>
                  <span>{step.num}</span>
                  {isActive && <span className={styles.activePill} />}
                </div>

                <div className={styles.stepInfo}>
                  <div className={styles.stepHeaderRow}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <span className={styles.stepTagline}>{step.tagline}</span>
                  </div>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Right Column: Dynamic Interactive Preview ── */}
      <div className={styles.previewCol}>
        <div className={styles.previewCard}>
          {/* Card Window Bar */}
          <div className={styles.previewHeader}>
            <div className={styles.previewBadge}>
              <span className={styles.previewDot} />
              <span>{activeStep.mockData.badge}</span>
            </div>
            <span className={styles.filename}>{activeStep.mockData.title}</span>
          </div>

          {/* Code / Config Preview Area */}
          <div className={styles.codeArea}>
            <pre className={styles.pre}>
              <code>{activeStep.mockData.content}</code>
            </pre>
          </div>

          {/* Key Deliverables Checkpoints */}
          <div className={styles.deliverablesSection}>
            <h4 className={styles.deliverablesTitle}>ENTERPRISE DELIVERABLES INCLUDED</h4>
            <div className={styles.deliverablesGrid}>
              {activeStep.deliverables.map((item, i) => (
                <div key={i} className={styles.deliverableItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className={styles.previewFooter}>
            {activeStep.mockData.stats.map((st) => (
              <div key={st.k} className={styles.statBox}>
                <span className={styles.statVal}>{st.v}</span>
                <span className={styles.statKey}>{st.k}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
