"use client";

import Link from "next/link";
import AgintXLogo from "./AgintXLogo";
import styles from "./Footer.module.css";

const LINKS = {
  Platform: [
    { label: "Overview",         href: "/platform" },
    { label: "Agent Orchestration", href: "/platform#orchestration" },
    { label: "Security",         href: "/platform#security" },
    { label: "Integrations",     href: "/platform#integrations" },
  ],
  Solutions: [
    { label: "11 Vertical Solutions", href: "/solutions" },
    { label: "rfp-agintx (RFP Finder)", href: "/rfp-finder" },
    { label: "fin-agintx (Finance)",   href: "/solutions/financial-services" },
    { label: "med-agintx (Healthcare)",href: "/solutions/healthcare-pharma" },
    { label: "cre-agintx (Real Estate)",href: "/solutions/real-estate" },
    { label: "nrg-agintx (Energy)",     href: "/solutions/energy-utilities" },
    { label: "Healthcare 10 Sandboxes", href: "/solutions/healthcare" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs#api" },
    { label: "Changelog",     href: "/docs#changelog" },
    { label: "Status",        href: "https://status.agintx.com" },
  ],
  Company: [
    { label: "About",   href: "/#about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog",    href: "/#blog" },
    { label: "Contact", href: "mailto:contact@agintx.com" },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand column */}
            <div className={styles.brand}>
              <AgintXLogo theme="dark" size="md" />
              <p className={styles.tagline}>
                Describe, Procure, Develop, Deploy, Done!
              </p>
              <p className={styles.blurb}>
                Enterprise AI agents platform built for engineering teams who ship to production.
              </p>
              <div className={styles.statusBar}>
                <span className={styles.statusDot} />
                <span className={styles.statusLabel}>All systems operational</span>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(LINKS).map(([group, links]) => (
              <div key={group} className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>{group}</h4>
                <ul>
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={styles.footerLink}
                        {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © 2025 AgintX, Inc. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
              <Link href="/terms"   className={styles.legalLink}>Terms</Link>
              <Link href="/security" className={styles.legalLink}>Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
