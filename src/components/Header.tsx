"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import AgintXLogo from "./AgintXLogo";

const NAV_LINKS = [
  { href: "/solutions", label: "Solutions" },
  { href: "/rfp-finder", label: "RFP Finder" },
  { href: "/platform",  label: "Platform" },
  { href: "/pricing",   label: "Pricing" },
  { href: "/docs",      label: "Docs" },
];

function isActive(pathname: string, href: string) {
  if (href === "/rfp-finder") {
    return pathname.startsWith("/rfp-finder") || pathname.includes("rfp-intelligence");
  }
  if (href === "/solutions") {
    return pathname.startsWith("/solutions") && !pathname.includes("rfp-intelligence");
  }
  return pathname === href;
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="AgintX Home">
          <AgintXLogo />
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive(pathname, link.href) ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/demo" className="btn btn-secondary btn-sm">
            Request Demo
          </Link>
          <Link href="/demo" className="btn btn-primary btn-sm">
            Get Started
          </Link>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${isActive(pathname, link.href) ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileCtas}>
            <Link href="/demo" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
              Request Demo
            </Link>
            <Link href="/demo" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
