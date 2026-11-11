"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import AgentTrace from "./AgentTrace";
import {
  HEALTHCARE_PRODUCTS,
  type DemoScenario,
  type HealthcareProduct,
} from "@/data/healthcare-products";
import styles from "./DemoShell.module.css";

type Props = {
  product: HealthcareProduct;
  scenarios: DemoScenario[];
};

export default function DemoShell({ product, scenarios }: Props) {
  const [scenarioId, setScenarioId] = useState(scenarios[0]?.id ?? "");
  const scenario = useMemo(
    () => scenarios.find((s) => s.id === scenarioId) ?? scenarios[0],
    [scenarios, scenarioId],
  );

  const [running, setRunning] = useState(false);
  const [revealed, setRevealed] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setRunning(false);
    setRevealed(0);
    setDone(false);
  }, [scenarioId]);

  useEffect(() => {
    if (!running || !scenario) return;
    if (revealed >= scenario.traces.length) {
      const t = setTimeout(() => {
        setRunning(false);
        setDone(true);
      }, 350);
      return () => clearTimeout(t);
    }
    const delay = 280 + (scenario.traces[revealed]?.ms ?? 80) / 3;
    const t = setTimeout(() => setRevealed((n) => n + 1), delay);
    return () => clearTimeout(t);
  }, [running, revealed, scenario]);

  const run = () => {
    setDone(false);
    setRevealed(0);
    setRunning(true);
  };

  if (!scenario) return null;

  const statusClass =
    scenario.result.status === "exception" ? styles.statusException : styles.statusComplete;

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.banner} role="status">
          Demo environment · synthetic data · not PHI · UHIC sandbox
        </div>

        <nav className={styles.crumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/solutions/healthcare">Healthcare solutions</Link>
          <span>/</span>
          <span>{product.domain}</span>
        </nav>

        <div className={styles.headerRow}>
          <div>
            <div className="eyebrow">{product.number} · {product.domain}</div>
            <h1 className="text-h2">{product.name}</h1>
            <p className="text-body text-secondary" style={{ marginTop: 10, maxWidth: 640 }}>
              {product.summary}
            </p>
          </div>
          <div className={styles.acv}>{product.acv}</div>
        </div>

        <ol className={styles.steps}>
          {product.workflow.map((step, i) => (
            <li key={step} className={styles.step}>
              <div className={styles.stepNum}>0{i + 1}</div>
              <div className={styles.stepText}>{step}</div>
            </li>
          ))}
        </ol>

        <div className={styles.layout}>
          <aside className={styles.panel}>
            <div className={styles.panelTitle}>Inputs</div>
            <div className={styles.scenarioRow}>
              {scenarios.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`${styles.scenarioBtn} ${s.id === scenario.id ? styles.scenarioActive : ""}`}
                  onClick={() => setScenarioId(s.id)}
                >
                  {s.label}
                  <span className={styles.kind}>{s.kind === "exception" ? "exception" : "happy path"}</span>
                </button>
              ))}
            </div>
            <dl className={styles.dl}>
              {scenario.inputs.map((f) => (
                <div key={f.label} className={styles.row}>
                  <dt className={styles.dt}>{f.label}</dt>
                  <dd className={styles.dd}>{f.value}</dd>
                </div>
              ))}
            </dl>
            <button
              type="button"
              className={`btn btn-primary ${styles.runBtn}`}
              onClick={run}
              disabled={running}
              id={`run-agent-${product.slug}`}
            >
              {running ? "Running agent…" : "Run agent"}
            </button>
          </aside>

          <div className={styles.panel}>
            <div className={styles.panelTitle}>Agent trace</div>
            <AgentTrace traces={scenario.traces} revealed={revealed} running={running} />

            {done && (
              <div className={styles.result}>
                <div className={`${styles.headline} ${statusClass}`}>{scenario.result.headline}</div>
                <dl className={styles.dl}>
                  {scenario.result.fields.map((f) => (
                    <div key={f.label} className={styles.row}>
                      <dt className={styles.dt}>{f.label}</dt>
                      <dd className={styles.dd}>{f.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className={styles.notes}>
                  {scenario.result.notes.map((n) => (
                    <li key={n} className={styles.note}>{n}</li>
                  ))}
                </ul>
                <div className={styles.ctaRow}>
                  <Link
                    href={`/demo?product=${product.slug}`}
                    className="btn btn-primary"
                    id={`request-live-${product.slug}`}
                  >
                    Request live demo
                  </Link>
                  <Link href="/solutions/healthcare" className="btn btn-secondary">
                    All healthcare modules
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <nav className={styles.navGrid} aria-label="Other healthcare demos">
          {HEALTHCARE_PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              href={p.demoHref}
              className={`${styles.navCard} ${p.slug === product.slug ? styles.navActive : ""}`}
            >
              <span className={styles.navNum}>{p.number}</span>
              {p.domain}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
