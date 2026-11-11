import type { AgentTraceStep } from "@/data/healthcare-products";
import styles from "./DemoShell.module.css";

type Props = {
  traces: AgentTraceStep[];
  revealed: number;
  running: boolean;
};

export default function AgentTrace({ traces, revealed, running }: Props) {
  if (!running && revealed === 0) {
    return <p className={styles.idle}>Run the agent to stream UHIC tool calls.</p>;
  }

  return (
    <ul className={styles.traceList} aria-live="polite">
      {traces.map((step, i) => {
        const visible = i < revealed;
        const pending = running && i === revealed;
        if (!visible && !pending) return null;
        const statusClass =
          !visible ? styles.dotPending
          : step.status === "ok" ? styles.dotOk
          : step.status === "warn" ? styles.dotWarn
          : styles.dotError;
        return (
          <li key={`${step.tool}-${i}`} className={styles.traceItem}>
            <span className={`${styles.dot} ${statusClass}`} />
            <div>
              <div className={styles.tool}>{pending ? "…" : step.tool}</div>
              <div className={styles.detail}>{visible ? step.detail : "Calling tool…"}</div>
            </div>
            <span className={styles.ms}>{visible ? `${step.ms}ms` : ""}</span>
          </li>
        );
      })}
    </ul>
  );
}
