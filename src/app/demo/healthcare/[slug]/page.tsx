import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DemoShell from "@/components/demo/DemoShell";
import {
  getHealthcareProduct,
  getScenarios,
  HEALTHCARE_SLUGS,
} from "@/data/healthcare-products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return HEALTHCARE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getHealthcareProduct(slug);
  if (!product) return { title: "Healthcare demo" };
  return {
    title: `${product.domain} demo`,
    description: product.summary,
  };
}

export default async function HealthcareDemoPage({ params }: Props) {
  const { slug } = await params;
  const product = getHealthcareProduct(slug);
  const scenarios = getScenarios(slug);
  if (!product || scenarios.length === 0) notFound();

  return <DemoShell product={product} scenarios={scenarios} />;
}
