"use client";

import { useState } from "react";
import styles from "./AgentNetworkTopology.module.css";

type NodeDetail = {
  id: string;
  name: string;
  role: string;
  model: string;
  latency: string;
  security: string;
  status: string;
};

const NODES: Record<string, NodeDetail> = {
  supervisor: {
    id: "supervisor",
    name: "Supervisor Orchestrator",
    role: "Decomposes high-level intent into concurrent DAG execution threads. Synthesizes peer consensus.",
    model: "Claude 3.5 Sonnet / GPT-4o",
    latency: "12ms",
    security: "Isolated Memory Enclave",
    status: "ACTIVE (100% HEALTH)",
  },
  rag: {
    id: "rag",
    name: "pgvector Knowledge RAG",
    role: "Sub-10ms semantic chunk retrieval across enterprise document corpus and past performance matrices.",
    model: "text-embedding-3-large",
    latency: "8ms",
    security: "Role-Based Tenancy Filter",
    status: "INDEX READY (1.8M VECTORS)",
  },
  coder: {
    id: "coder",
    name: "Autonomous Code & Logic Synth",
    role: "Generates type-safe handlers, EDI/FHIR transactions, and automated test harnesses.",
    model: "DeepSeek-Coder / GPT-4o",
    latency: "28ms",
    security: "Compile-Time Memory Safety",
    status: "SYNTHESIZING ✓",
  },
  guardian: {
    id: "guardian",
    name: "Legal & Policy Guardian",
    role: "Autonomous redlining and regulatory compliance verification (DFARS, HIPAA, SOC 2, FINRA).",
    model: "Rule-Based + Fine-Tuned Llama 3",
    latency: "14ms",
    security: "Zero Prompt Injection Gate",
    status: "ENFORCING POLICIES",
  },
  human: {
    id: "human",
    name: "Human-in-the-Loop Threshold Gate",
    role: "Enforces cryptographic sign-off for financial transactions > $10K or win-probabilities < 85%.",
    model: "Cryptographic Webhook / MFA",
    latency: "< 500ms webhook",
    security: "Hardware Key (HSM / FIDO2)",
    status: "GATE ARMED",
  },
  tools: {
    id: "tools",
    name: "Enterprise Tool Bridge (MCP)",
    role: "Pre-authenticated bidirectional connectors for Salesforce, Epic FHIR, Bloomberg, Slack, and Jira.",
    model: "Model Context Protocol (MCP)",
    latency: "4ms",
    security: "mTLS 1.3 + Auto Token Rotation",
    status: "500+ CONNECTORS READY",
  },
};

export default function AgentNetworkTopology() {
  const [activeNodeKey, setActiveNodeKey] = useState<string>("supervisor");
  const activeNode = NODES[activeNodeKey] || NODES.supervisor;

  return (
    <div className={styles.wrapper}>
      {/* ── Visual Interactive SVG Canvas ── */}
      <div className={styles.canvasContainer}>
        <div className={styles.canvasHeader}>
          <div className={styles.canvasBadge}>
            <span className={styles.pulseDot} />
            <span>CAE 3.2 TOPOLOGY ENGINE</span>
          </div>
          <span className={styles.hintText}>Click any node to inspect runtime enclave</span>
        </div>

        <svg
          className={styles.svgCanvas}
          viewBox="0 0 600 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
            </linearGradient>

            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <pattern id="gridPattern" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Background grid */}
          <rect width="600" height="360" fill="url(#gridPattern)" rx="16" />

          {/* ── Connection Paths (Animated Beams) ── */}
          {/* Supervisor to RAG */}
          <path d="M 300 85 L 140 180" stroke="rgba(56,189,248,0.3)" strokeWidth="2" strokeDasharray="4 3" />
          {/* Supervisor to Coder */}
          <path d="M 300 85 L 300 180" stroke="rgba(56,189,248,0.5)" strokeWidth="2" strokeDasharray="4 3" />
          {/* Supervisor to Guardian */}
          <path d="M 300 85 L 460 180" stroke="rgba(56,189,248,0.3)" strokeWidth="2" strokeDasharray="4 3" />

          {/* Workers to Human Gate */}
          <path d="M 140 220 L 250 280" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <path d="M 300 220 L 300 280" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <path d="M 460 220 L 350 280" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

          {/* Tools Bridge to Workers */}
          <path d="M 520 85 L 460 180" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 520 85 L 300 180" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Animated Flow Packets */}
          <circle cx="300" cy="85" r="3" fill="#38BDF8" filter="url(#glowEffect)">
            <animateMotion path="M 0 0 L -160 95" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="85" r="3" fill="#38BDF8" filter="url(#glowEffect)">
            <animateMotion path="M 0 0 L 0 95" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="85" r="3" fill="#38BDF8" filter="url(#glowEffect)">
            <animateMotion path="M 0 0 L 160 95" dur="2.2s" repeatCount="indefinite" />
          </circle>

          {/* ── Node: Supervisor (Top Center) ── */}
          <g
            className={`${styles.svgNode} ${activeNodeKey === "supervisor" ? styles.svgNodeActive : ""}`}
            onClick={() => setActiveNodeKey("supervisor")}
          >
            <rect
              x="200"
              y="40"
              width="200"
              height="50"
              rx="10"
              fill={activeNodeKey === "supervisor" ? "rgba(37,99,235,0.35)" : "rgba(15,23,42,0.85)"}
              stroke={activeNodeKey === "supervisor" ? "#38BDF8" : "rgba(56,189,248,0.4)"}
              strokeWidth={activeNodeKey === "supervisor" ? 2 : 1}
            />
            <text x="300" y="62" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="700" fontFamily="DM Mono">
              SUPERVISOR ORCHESTRATOR
            </text>
            <text x="300" y="77" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="DM Sans">
              Consensus DAG · Multi-Model Router
            </text>
          </g>

          {/* ── Node: Tools Bridge (Top Right) ── */}
          <g
            className={`${styles.svgNode} ${activeNodeKey === "tools" ? styles.svgNodeActive : ""}`}
            onClick={() => setActiveNodeKey("tools")}
          >
            <rect
              x="450"
              y="45"
              width="135"
              height="40"
              rx="8"
              fill={activeNodeKey === "tools" ? "rgba(16,185,129,0.25)" : "rgba(15,23,42,0.75)"}
              stroke={activeNodeKey === "tools" ? "#10B981" : "rgba(16,185,129,0.3)"}
              strokeWidth="1"
            />
            <text x="517" y="63" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="600" fontFamily="DM Mono">
              MCP TOOL BRIDGE
            </text>
            <text x="517" y="75" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="DM Sans">
              Salesforce · Bloomberg · Epic
            </text>
          </g>

          {/* ── Worker Node: RAG (Middle Left) ── */}
          <g
            className={`${styles.svgNode} ${activeNodeKey === "rag" ? styles.svgNodeActive : ""}`}
            onClick={() => setActiveNodeKey("rag")}
          >
            <rect
              x="70"
              y="170"
              width="140"
              height="48"
              rx="8"
              fill={activeNodeKey === "rag" ? "rgba(37,99,235,0.3)" : "rgba(15,23,42,0.8)"}
              stroke={activeNodeKey === "rag" ? "#38BDF8" : "rgba(255,255,255,0.12)"}
              strokeWidth="1"
            />
            <text x="140" y="190" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="600" fontFamily="DM Mono">
              PGVECTOR RAG
            </text>
            <text x="140" y="204" textAnchor="middle" fill="#94A3B8" fontSize="8.5" fontFamily="DM Sans">
              1.8M Vectors · 8ms
            </text>
          </g>

          {/* ── Worker Node: Code & Logic Synth (Middle Center) ── */}
          <g
            className={`${styles.svgNode} ${activeNodeKey === "coder" ? styles.svgNodeActive : ""}`}
            onClick={() => setActiveNodeKey("coder")}
          >
            <rect
              x="230"
              y="170"
              width="140"
              height="48"
              rx="8"
              fill={activeNodeKey === "coder" ? "rgba(37,99,235,0.3)" : "rgba(15,23,42,0.8)"}
              stroke={activeNodeKey === "coder" ? "#38BDF8" : "rgba(255,255,255,0.12)"}
              strokeWidth="1"
            />
            <text x="300" y="190" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="600" fontFamily="DM Mono">
              LOGIC &amp; CODE SYNTH
            </text>
            <text x="300" y="204" textAnchor="middle" fill="#94A3B8" fontSize="8.5" fontFamily="DM Sans">
              Type-Safe Handlers · Tests
            </text>
          </g>

          {/* ── Worker Node: Legal Guardian (Middle Right) ── */}
          <g
            className={`${styles.svgNode} ${activeNodeKey === "guardian" ? styles.svgNodeActive : ""}`}
            onClick={() => setActiveNodeKey("guardian")}
          >
            <rect
              x="390"
              y="170"
              width="140"
              height="48"
              rx="8"
              fill={activeNodeKey === "guardian" ? "rgba(37,99,235,0.3)" : "rgba(15,23,42,0.8)"}
              stroke={activeNodeKey === "guardian" ? "#38BDF8" : "rgba(255,255,255,0.12)"}
              strokeWidth="1"
            />
            <text x="460" y="190" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="600" fontFamily="DM Mono">
              POLICY GUARDIAN
            </text>
            <text x="460" y="204" textAnchor="middle" fill="#94A3B8" fontSize="8.5" fontFamily="DM Sans">
              DFARS · HIPAA · SOC 2
            </text>
          </g>

          {/* ── Node: Human-in-the-Loop Gate (Bottom Center) ── */}
          <g
            className={`${styles.svgNode} ${activeNodeKey === "human" ? styles.svgNodeActive : ""}`}
            onClick={() => setActiveNodeKey("human")}
          >
            <rect
              x="210"
              y="280"
              width="180"
              height="48"
              rx="10"
              fill={activeNodeKey === "human" ? "rgba(16,185,129,0.25)" : "rgba(15,23,42,0.85)"}
              stroke={activeNodeKey === "human" ? "#10B981" : "rgba(16,185,129,0.35)"}
              strokeWidth={activeNodeKey === "human" ? 2 : 1}
            />
            <text x="300" y="301" textAnchor="middle" fill="#10B981" fontSize="10.5" fontWeight="700" fontFamily="DM Mono">
              HUMAN-IN-THE-LOOP GATE
            </text>
            <text x="300" y="316" textAnchor="middle" fill="#94A3B8" fontSize="8.5" fontFamily="DM Sans">
              Cryptographic Sign-off Enclave
            </text>
          </g>
        </svg>
      </div>

      {/* ── Node Detail Telemetry Panel ── */}
      <div className={styles.telemetryPanel}>
        <div className={styles.panelHeader}>
          <span className={styles.panelTag}>NODE TELEMETRY INSPECTOR</span>
          <span className={styles.panelStatus}>{activeNode.status}</span>
        </div>

        <h3 className={styles.nodeTitle}>{activeNode.name}</h3>
        <p className={styles.nodeRole}>{activeNode.role}</p>

        <div className={styles.statsList}>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Foundation Models:</span>
            <span className={styles.statValue}>{activeNode.model}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>P99 Execution Latency:</span>
            <span className={styles.statValue} style={{ color: "#38BDF8" }}>
              {activeNode.latency}
            </span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Security Enclave:</span>
            <span className={styles.statValue} style={{ color: "#10B981" }}>
              {activeNode.security}
            </span>
          </div>
        </div>

        <div className={styles.panelFoot}>
          <span>Deterministic execution governed by AgintX CAE 3.2</span>
        </div>
      </div>
    </div>
  );
}
