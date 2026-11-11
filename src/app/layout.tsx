import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AgintX — AI Agents Platform",
    template: "%s | AgintX",
  },
  description:
    "AgintX is the enterprise AI agents platform. Describe, Procure, Develop, Deploy, Done! Built for CTOs and engineering teams building production-grade AI workflows.",
  keywords: [
    "AI agents platform",
    "enterprise AI",
    "AI workflow automation",
    "multi-agent orchestration",
    "AgintX",
  ],
  openGraph: {
    siteName: "AgintX",
    type: "website",
    url: "https://agintx.com",
    title: "AgintX — AI Agents Platform",
    description:
      "Enterprise-grade AI agent platform. Describe, Procure, Develop, Deploy, Done!",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgintX — AI Agents Platform",
    description:
      "Enterprise-grade AI agent platform. Describe, Procure, Develop, Deploy, Done!",
  },
  metadataBase: new URL("https://agintx.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
