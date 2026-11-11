"use client";

import { useState, FormEvent, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getHealthcareProduct } from "@/data/healthcare-products";
import styles from "./page.module.css";

const TEAM_SIZES = [
  "1–10", "11–50", "51–200", "201–1,000", "1,000+"
];

const USE_CASES = [
  "10 Vertical Productized Solutions (CAE)",
  "Healthcare payments & interop (UHIC)",
  "Operations automation",
  "Developer tooling",
  "Customer support agents",
  "Document processing",
  "Data analysis & reporting",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  teamSize: string;
  useCase: string;
  message: string;
  honeypot: string;
};

const INITIAL: FormState = {
  name: "", email: "", company: "", role: "",
  teamSize: "", useCase: "", message: "", honeypot: "",
};

export default function DemoPage() {
  return (
    <Suspense>
      <DemoPageInner />
    </Suspense>
  );
}

function DemoPageInner() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const productSlug = searchParams.get("product");
    const verticalParam = searchParams.get("vertical");

    if (verticalParam) {
      setForm((prev) => ({
        ...prev,
        useCase: "10 Vertical Productized Solutions (CAE)",
        message: prev.message || `Interested in a technical deep-dive and pilot architecture for ${verticalParam}.`,
      }));
      return;
    }

    if (!productSlug) return;
    const product = getHealthcareProduct(productSlug);
    const label = product
      ? `${product.domain} — ${product.name}`
      : productSlug;
    setForm((prev) => ({
      ...prev,
      useCase: "Healthcare payments & interop (UHIC)",
      message: prev.message || `Interested in a live walkthrough of: ${label}`,
    }));
  }, [searchParams]);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // spam gate
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email us directly at contact@agintx.com");
    }
  };

  return (
    <>
      <section className={styles.page}>
        <div className={styles.glow} aria-hidden="true" />
        <div className="container">
          <div className={styles.inner}>
            {/* ── Left panel ── */}
            <div className={styles.left}>
              <div className="section-eyebrow animate-fade-up">Request a Demo</div>
              <h1 className={`text-h1 animate-fade-up-delay-1 ${styles.heading}`}>
                See AgintX in your environment.
              </h1>
              <p className={`text-body text-secondary animate-fade-up-delay-2 ${styles.subtext}`}>
                Our solutions engineers will walk you through a live demo tailored to your use case,
                team size, and tech stack — then build a prototype with you.
              </p>

              <div className={`${styles.expects} animate-fade-up-delay-3`}>
                <h3 className="text-label text-muted" style={{ marginBottom: 16 }}>What to expect</h3>
                <ul className="check-list">
                  {[
                    "60-minute technical deep-dive",
                    "Custom architecture session",
                    "Proof-of-concept build along",
                    "Pricing structured to your team",
                    "Compliance & security Q&A",
                    "No sales pressure — just value",
                  ].map((item) => (
                    <li key={item} className="check-item">
                      <svg className="check-icon" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M5.5 9l2.5 2.5 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.trustBadges}>
                {["SOC 2 Type II", "GDPR Ready", "HIPAA Compliant"].map((b) => (
                  <span key={b} className="badge badge-green">{b}</span>
                ))}
              </div>
            </div>

            {/* ── Form ── */}
            <div className={styles.right}>
              {status === "success" ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="18" stroke="#00D68F" strokeWidth="1.5" />
                      <path d="M12 20l6 6 10-12" stroke="#00D68F" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h2 className="text-h2">You&apos;re on the list.</h2>
                  <p className="text-body text-secondary" style={{ marginTop: 12 }}>
                    We&apos;ll reach out to <strong>{form.email}</strong> within one business day
                    to schedule your demo.
                  </p>
                  <p className="text-body-sm text-muted" style={{ marginTop: 16 }}>
                    Questions in the meantime?{" "}
                    <a href="mailto:contact@agintx.com" style={{ color: "var(--cyan-500)" }}>
                      contact@agintx.com
                    </a>
                  </p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <h2 className="text-h3" style={{ marginBottom: 24 }}>Tell us about your team</h2>

                  {/* Honeypot */}
                  <input
                    type="text" name="bot-field" tabIndex={-1}
                    style={{ position: "absolute", opacity: 0, height: 0, pointerEvents: "none" }}
                    value={form.honeypot} onChange={set("honeypot")}
                  />

                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label htmlFor="demo-name" className="form-label">Full Name *</label>
                      <input id="demo-name" type="text" className="form-input"
                        placeholder="Jane Smith" required value={form.name} onChange={set("name")} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="demo-email" className="form-label">Work Email *</label>
                      <input id="demo-email" type="email" className="form-input"
                        placeholder="jane@company.com" required value={form.email} onChange={set("email")} />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label htmlFor="demo-company" className="form-label">Company *</label>
                      <input id="demo-company" type="text" className="form-input"
                        placeholder="Acme Corp" required value={form.company} onChange={set("company")} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="demo-role" className="form-label">Your Role</label>
                      <input id="demo-role" type="text" className="form-input"
                        placeholder="CTO, VP Engineering…" value={form.role} onChange={set("role")} />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label htmlFor="demo-team" className="form-label">Team Size</label>
                      <select id="demo-team" className="form-select" value={form.teamSize} onChange={set("teamSize")}>
                        <option value="">Select…</option>
                        {TEAM_SIZES.map((s) => <option key={s} value={s}>{s} employees</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="demo-usecase" className="form-label">Primary Use Case</label>
                      <select id="demo-usecase" className="form-select" value={form.useCase} onChange={set("useCase")}>
                        <option value="">Select…</option>
                        {USE_CASES.map((u) => <option key={u} value={u}>{u}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="demo-message" className="form-label">Anything else you&apos;d like us to know?</label>
                    <textarea id="demo-message" className="form-textarea" rows={4}
                      placeholder="Describe your current setup, pain points, or specific requirements…"
                      value={form.message} onChange={set("message")} />
                  </div>

                  {errorMsg && (
                    <div className={styles.error} role="alert">{errorMsg}</div>
                  )}

                  <button
                    type="submit"
                    className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                    disabled={status === "loading"}
                    id="demo-form-submit"
                  >
                    {status === "loading" ? (
                      <>
                        <span className={styles.spinner} aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Request Demo
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className={styles.formDisclaimer}>
                    By submitting, you agree to our{" "}
                    <a href="/privacy">Privacy Policy</a>. We&apos;ll never share your info.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
