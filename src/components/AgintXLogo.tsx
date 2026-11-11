import Image from "next/image";

interface AgintXLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
  theme?: "light" | "dark" | "auto";
  className?: string;
}

export default function AgintXLogo({
  size = "md",
  showWordmark = true,
  theme = "light",
  className = "",
}: AgintXLogoProps) {
  const sizes = {
    sm: { mark: 30, text: 16, gap: 8 },
    md: { mark: 38, text: 19, gap: 10 },
    lg: { mark: 48, text: 24, gap: 12 },
    xl: { mark: 64, text: 30, gap: 14 },
  };
  const s = sizes[size] || sizes.md;

  const textColor = theme === "dark" ? "#FFFFFF" : "#0A0A0A";

  return (
    <span
      className={`agintx-logo-badge ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: s.gap,
        userSelect: "none",
        textDecoration: "none",
      }}
    >
      {/* ── Official AgintX Network X Mark ── */}
      <span
        style={{
          position: "relative",
          width: s.mark,
          height: s.mark,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.2s ease",
        }}
      >
        <Image
          src="/agintx-logo.png"
          alt="AgintX Mark"
          width={s.mark}
          height={s.mark}
          priority
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter:
              theme === "dark"
                ? "drop-shadow(0 2px 10px rgba(56, 189, 248, 0.35))"
                : "drop-shadow(0 2px 8px rgba(11, 27, 106, 0.18))",
          }}
        />
      </span>

      {/* ── Modern Wordmark ── */}
      {showWordmark && (
        <span
          style={{
            fontFamily: "var(--font, 'DM Sans', system-ui, sans-serif)",
            fontWeight: 700,
            fontSize: s.text,
            letterSpacing: "-0.03em",
            color: textColor,
            lineHeight: 1,
            display: "inline-flex",
            alignItems: "baseline",
          }}
        >
          agint
          <span
            style={{
              color: "#2563EB",
              fontWeight: 800,
              marginLeft: "1px",
              background: "linear-gradient(135deg, #2563EB 0%, #00D5FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            x
          </span>
        </span>
      )}
    </span>
  );
}
