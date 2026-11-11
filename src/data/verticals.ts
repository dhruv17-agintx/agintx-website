export type Vertical = {
  slug: string;
  prefix: string;        // e.g. "bank-agintx"
  industry: string;      // e.g. "Banking"
  company: string;       // reference company
  slogan: string;
  headline: string;
  subheadline: string;
  color: string;         // accent hex
  icon: string;          // emoji/icon for the card
  overview: string[];    // 3 bullet capabilities
  useCases: { title: string; desc: string }[];
  code: { title: string; lang: string; snippet: string };
  testimonials: { quote: string; name: string; title: string; company: string }[];
};

export const VERTICALS: Vertical[] = [
  {
    slug: "banking",
    prefix: "bank-agintx",
    industry: "Banking",
    company: "JPMorgan Chase",
    slogan: "What matters most.",
    headline: "AI agents built for banking operations.",
    subheadline: "bank-agintx automates compliance review, fraud detection workflows, and loan underwriting — with full audit trails baked in.",
    color: "#003087",
    icon: "🏦",
    overview: [
      "Automated KYC / AML compliance review at scale",
      "Fraud signal aggregation across transaction streams",
      "Loan underwriting with regulatory documentation",
    ],
    useCases: [
      { title: "KYC Automation", desc: "Agents pull identity docs, cross-reference sanctions lists, and draft SAR filings — reducing review time by 80%." },
      { title: "Fraud Triage", desc: "Real-time transaction scoring agents that escalate high-risk signals to human review with full context." },
      { title: "Credit Underwriting", desc: "Multi-agent pipeline ingests financials, generates risk narrative, and produces Reg B-compliant decision letters." },
    ],
    code: {
      title: "KYC Review Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// bank-agintx: KYC compliance review agent
const kycAgent = await client.agents.create({
  name: "bank-kyc-agent",
  model: "gpt-4o",
  vertical: "banking",
  tools: ["sanctions-screener", "document-ocr", "aml-lookup"],
  guardrails: { requireHumanApproval: ["high-risk"] },
  auditLog: true,
});

const result = await kycAgent.run({
  customerId: "C-84920",
  documents: ["passport.pdf", "proof-of-address.pdf"],
  jurisdiction: "US",
});

console.log(result.riskScore);    // 0.12 (low)
console.log(result.sarRequired);  // false
console.log(result.auditId);      // "AUD-2024-09281"`,
    },
    testimonials: [
      { quote: "bank-agintx cut our KYC cycle from 3 days to 4 hours. Our compliance team now focuses on edge cases, not paperwork.", name: "Sarah Chen", title: "Chief Compliance Officer", company: "Pacific National Bank" },
      { quote: "The audit trail built into every agent run made our OCC exam prep straightforward for the first time in years.", name: "Marcus Webb", title: "VP Risk Operations", company: "Frontier Credit Union" },
      { quote: "We deployed fraud triage agents in 6 weeks. False positive rates dropped 40%. The ROI was immediate.", name: "Priya Nair", title: "Head of Financial Crime", company: "Meridian Financial" },
    ],
  },
  {
    slug: "insurance",
    prefix: "ins-agintx",
    industry: "Insurance",
    company: "State Farm",
    slogan: "Like a good neighbor, State Farm is there.",
    headline: "AI agents for faster claims and smarter underwriting.",
    subheadline: "ins-agintx handles first notice of loss, coverage verification, and claims routing — reducing cycle times from weeks to hours.",
    color: "#c8102e",
    icon: "🛡️",
    overview: [
      "First notice of loss (FNOL) intake automation",
      "Policy coverage verification and gap analysis",
      "Subrogation identification and recovery initiation",
    ],
    useCases: [
      { title: "Claims Intake", desc: "Agents process FNOL submissions, extract loss details, assign adjusters, and schedule inspections automatically." },
      { title: "Coverage Verification", desc: "Instantly resolve 'is this covered?' queries by traversing policy documents with RAG-enabled agents." },
      { title: "Subrogation", desc: "Agents identify recovery opportunities in closed claims and draft demand letters to third-party carriers." },
    ],
    code: {
      title: "FNOL Processing Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// ins-agintx: First notice of loss agent
const fnolAgent = await client.agents.create({
  name: "ins-fnol-agent",
  model: "claude-3-5-sonnet",
  vertical: "insurance",
  tools: ["policy-lookup", "adjuster-assignment", "inspection-scheduler"],
  memory: { type: "session", store: "claims-db" },
});

const claim = await fnolAgent.run({
  policyNumber: "POL-774-2291-A",
  lossDate: "2024-11-03",
  lossType: "auto-collision",
  description: "Rear-end collision on I-95 northbound near exit 14.",
  attachments: ["scene-photos.zip", "police-report.pdf"],
});

console.log(claim.claimId);        // "CLM-2024-119284"
console.log(claim.adjusterName);   // "James Holloway"
console.log(claim.inspectionDate); // "2024-11-06T10:00:00"`,
    },
    testimonials: [
      { quote: "ins-agintx handles 60% of our FNOL volume without human touch. Customer satisfaction scores actually went up.", name: "Linda Torres", title: "SVP Claims Operations", company: "Keystone Mutual" },
      { quote: "Our adjusters spend time on complex claims now. ins-agintx owns the routine ones end-to-end.", name: "David Kim", title: "Director of Digital Claims", company: "Coastal Property & Casualty" },
      { quote: "Coverage verification that used to take 30 minutes now takes 90 seconds. Agents pull the exact policy clause.", name: "Angela Ross", title: "Chief Digital Officer", company: "Summit Life Insurance" },
    ],
  },
  {
    slug: "payments",
    prefix: "pay-agintx",
    industry: "Payments",
    company: "Visa",
    slogan: "To be the best way to pay and be paid, everywhere.",
    headline: "AI agents for payment operations and dispute resolution.",
    subheadline: "pay-agintx automates chargeback processing, merchant onboarding verification, and real-time dispute triage.",
    color: "#1a1f71",
    icon: "💳",
    overview: [
      "Chargeback and dispute resolution automation",
      "Merchant onboarding KYB verification",
      "Real-time transaction monitoring and alerting",
    ],
    useCases: [
      { title: "Dispute Resolution", desc: "Agents retrieve transaction evidence, apply network rules, and draft representment packages automatically." },
      { title: "Merchant KYB", desc: "Multi-agent pipeline verifies business identity, reviews UBO structures, and scores risk before onboarding." },
      { title: "Transaction Monitoring", desc: "Continuous monitoring agents flag anomalies, correlate patterns across merchants, and generate SAR candidates." },
    ],
    code: {
      title: "Chargeback Resolution Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// pay-agintx: Chargeback dispute agent
const disputeAgent = await client.agents.create({
  name: "pay-dispute-agent",
  model: "gpt-4o",
  vertical: "payments",
  tools: ["transaction-retriever", "evidence-packager", "network-rules"],
  workflow: "representment-v2",
});

const resolution = await disputeAgent.run({
  chargebackId: "CB-2024-884211",
  reasonCode: "4853",           // Cardholder dispute
  merchantId: "MID-00129483",
  transactionDate: "2024-10-15",
  amount: 284.99,
  currency: "USD",
});

console.log(resolution.recommendation);  // "fight"
console.log(resolution.winProbability);  // 0.82
console.log(resolution.evidencePackage); // S3 URL
console.log(resolution.deadline);        // "2024-11-01"`,
    },
    testimonials: [
      { quote: "pay-agintx reversed our chargeback win rate from 34% to 71% by building airtight evidence packages every time.", name: "Jason Park", title: "VP Risk & Disputes", company: "Clearstone Payments" },
      { quote: "Merchant onboarding went from 5 days to same-day. pay-agintx runs KYB checks in parallel across 12 sources.", name: "Mia Johnson", title: "Head of Merchant Operations", company: "Apex PSP" },
      { quote: "The agents adapt to network rule changes automatically. We don't chase Visa/Mastercard bulletins anymore.", name: "Carlos Reyes", title: "Chief Payments Officer", company: "Velocity Financial" },
    ],
  },
  {
    slug: "medicine",
    prefix: "med-agintx",
    industry: "Medicine & Healthcare",
    company: "Johnson & Johnson",
    slogan: "Helping people everywhere live longer, healthier lives.",
    headline: "AI agents for clinical operations and care coordination.",
    subheadline: "med-agintx handles prior authorization, clinical documentation, and care gap identification — HIPAA-compliant by default.",
    color: "#c8102e",
    icon: "🏥",
    overview: [
      "Prior authorization automation with payer rule engines",
      "Clinical documentation and SOAP note generation",
      "Care gap identification across patient populations",
    ],
    useCases: [
      { title: "Prior Auth", desc: "Agents gather clinical criteria, match against payer policies, and submit auth requests — reducing denials by 45%." },
      { title: "Clinical Documentation", desc: "Post-encounter agents generate structured notes, ICD-10 codes, and billing-ready documentation from transcripts." },
      { title: "Care Gap Alerts", desc: "Population health agents identify patients overdue for screenings and auto-schedule outreach campaigns." },
    ],
    code: {
      title: "Prior Authorization Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// med-agintx: Prior authorization agent (HIPAA-compliant)
const priorAuthAgent = await client.agents.create({
  name: "med-priorauth-agent",
  model: "gpt-4o",
  vertical: "healthcare",
  compliance: ["HIPAA", "HITECH"],
  tools: ["ehr-connector", "payer-portal", "clinical-criteria"],
  dataResidency: "us-east-1",
});

const authResult = await priorAuthAgent.run({
  patientId: "P-29183-DEIDENTIFIED",
  procedureCode: "43239",        // EGD with biopsy
  diagnosisCodes: ["K21.0", "K57.30"],
  payerId: "BCBS-CA",
  orderingNPI: "1234567890",
});

console.log(authResult.authNumber);    // "BCB-2024-9912734"
console.log(authResult.status);        // "approved"
console.log(authResult.validThrough);  // "2025-01-15"`,
    },
    testimonials: [
      { quote: "med-agintx cut prior auth turnaround from 72 hours to 4. Our physicians spend time with patients, not portals.", name: "Dr. Rachel Greene", title: "Chief Medical Officer", company: "Northside Health System" },
      { quote: "HIPAA compliance isn't an afterthought — it's built into every agent call. Our CISO approved it in two weeks.", name: "Ethan Brooks", title: "VP IT & Security", company: "Central Coast Medical" },
      { quote: "Clinical documentation quality improved across the board. Denials from coding errors dropped 60%.", name: "Sandra Liu", title: "Revenue Cycle Director", company: "Bayview Hospital Group" },
    ],
  },
  {
    slug: "advertising",
    prefix: "adx-agintx",
    industry: "Advertising & Marketing",
    company: "WPP",
    slogan: "Creative transformation: building better futures.",
    headline: "AI agents for campaign operations and creative at scale.",
    subheadline: "adx-agintx powers media buying optimization, creative variant generation, and performance attribution — across every channel.",
    color: "#000000",
    icon: "📣",
    overview: [
      "Programmatic media buying optimization agents",
      "Creative variant generation and A/B test orchestration",
      "Cross-channel attribution and budget reallocation",
    ],
    useCases: [
      { title: "Media Optimization", desc: "Agents monitor bid performance hourly, reallocate budgets across channels, and pause underperforming placements." },
      { title: "Creative Scale", desc: "Generate hundreds of ad variants from a single brief — localized copy, resized assets, and personalized CTAs." },
      { title: "Attribution", desc: "Multi-touch attribution agents reconcile data across DSPs, CDPs, and CRMs to surface true channel ROI." },
    ],
    code: {
      title: "Campaign Optimization Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// adx-agintx: Campaign performance optimization agent
const campaignAgent = await client.agents.create({
  name: "adx-optimizer-agent",
  model: "gpt-4o",
  vertical: "advertising",
  tools: ["meta-ads-api", "google-ads-api", "ttd-api", "looker-connector"],
  schedule: "0 */4 * * *",  // every 4 hours
});

const report = await campaignAgent.run({
  campaignId: "CAMP-Q4-2024-BRAND",
  kpi: "roas",
  targetRoas: 4.5,
  budget: { daily: 50000, currency: "USD" },
  channels: ["meta", "google", "programmatic"],
});

console.log(report.currentRoas);       // 3.8
console.log(report.reallocation);      // { meta: -15%, google: +22%, ttd: -7% }
console.log(report.projectedRoas);     // 4.6
console.log(report.actionsApplied);    // 12`,
    },
    testimonials: [
      { quote: "adx-agintx pays for itself every week. ROAS improved 28% in Q1 alone from autonomous budget reallocation.", name: "Brittany Hayes", title: "Performance Marketing Director", company: "Vantage Media Group" },
      { quote: "We scaled creative production 10x without adding headcount. The variant agents understand brand voice remarkably well.", name: "Tom Nguyen", title: "VP Creative Technology", company: "Orbit Digital" },
      { quote: "Attribution reporting that used to take our analysts 3 days now runs overnight, automatically. Game changer.", name: "Fiona Walsh", title: "Head of Marketing Analytics", company: "Sprout Commerce" },
    ],
  },
  {
    slug: "streaming",
    prefix: "vid-agintx",
    industry: "Video & Streaming",
    company: "Netflix",
    slogan: "Entertain the world.",
    headline: "AI agents for content operations and personalization.",
    subheadline: "vid-agintx manages content metadata, recommendation tuning, and QA pipeline orchestration — at global streaming scale.",
    color: "#e50914",
    icon: "🎬",
    overview: [
      "Content metadata enrichment and taxonomy tagging",
      "Recommendation model feedback loop orchestration",
      "Automated QA and encoding pipeline monitoring",
    ],
    useCases: [
      { title: "Metadata Enrichment", desc: "Agents analyze content, generate structured tags, mood scores, and accessibility metadata at ingest time." },
      { title: "Recommendation Tuning", desc: "Feedback agents A/B test recommendation strategies, surface anomalies in engagement, and escalate for review." },
      { title: "QA Pipeline", desc: "Encoding QA agents detect artifacts, audio sync issues, and subtitle errors before content goes live." },
    ],
    code: {
      title: "Content Metadata Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// vid-agintx: Content metadata enrichment agent
const metadataAgent = await client.agents.create({
  name: "vid-metadata-agent",
  model: "gemini-1.5-pro",
  vertical: "streaming",
  tools: ["video-analyzer", "taxonomy-lookup", "accessibility-tagger"],
  multimodal: true,
});

const metadata = await metadataAgent.run({
  contentId: "TITLE-84920-EN",
  videoUrl: "s3://content-bucket/raw/84920.mp4",
  targetMarkets: ["US", "UK", "JP", "BR"],
  languages: ["en", "ja", "pt-BR"],
});

console.log(metadata.genres);          // ["thriller", "neo-noir"]
console.log(metadata.moodScore);       // { tension: 0.82, humor: 0.12 }
console.log(metadata.contentWarnings); // ["violence", "language"]
console.log(metadata.accessibilityTags); // { adTrack: true, closedCaptions: 4 }`,
    },
    testimonials: [
      { quote: "vid-agintx tagged 40,000 titles in our backlog in 72 hours. Manual tagging would have taken 18 months.", name: "Alex Patel", title: "VP Content Operations", company: "StreamCore Media" },
      { quote: "QA agents catch encoding artifacts our human reviewers miss. Subscriber complaints dropped 33% post-launch.", name: "Nina Schulz", title: "Head of Streaming Engineering", company: "Luma Studios" },
      { quote: "Recommendation A/B testing runs continuously now. We ship 3x more experiments per quarter than before.", name: "Jordan Lee", title: "Director of Personalization", company: "Nexus Play" },
    ],
  },
  {
    slug: "enterprise-software",
    prefix: "ent-agintx",
    industry: "Enterprise Software",
    company: "Microsoft",
    slogan: "Empowering every person and organization to achieve more.",
    headline: "AI agents for software delivery and IT operations.",
    subheadline: "ent-agintx orchestrates code review, incident response, and release management — embedded in your existing DevOps stack.",
    color: "#00a4ef",
    icon: "💻",
    overview: [
      "Automated code review and security scanning agents",
      "Incident triage and runbook execution orchestration",
      "Release orchestration and change advisory automation",
    ],
    useCases: [
      { title: "Code Review", desc: "Agents perform semantic code review, flag security issues, suggest improvements, and enforce style guides at PR time." },
      { title: "Incident Response", desc: "On-call agents triage alerts, run diagnostic runbooks, correlate signals, and page humans only when needed." },
      { title: "Release Management", desc: "Change advisory agents review deployment windows, validate rollback plans, and post change records automatically." },
    ],
    code: {
      title: "Incident Response Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// ent-agintx: Incident triage and response agent
const incidentAgent = await client.agents.create({
  name: "ent-incident-agent",
  model: "gpt-4o",
  vertical: "enterprise-software",
  tools: ["datadog-api", "pagerduty", "runbook-executor", "slack-bot"],
  humanGate: { severity: ["P0", "P1"] },
});

const response = await incidentAgent.run({
  alertId: "DD-ALT-9920183",
  service: "payments-api",
  severity: "P2",
  symptoms: ["latency_p99 > 2000ms", "error_rate > 0.5%"],
  environment: "production",
});

console.log(response.rootCause);      // "connection pool exhaustion: payments-db-primary"
console.log(response.runbookSteps);   // 4 executed automatically
console.log(response.resolution);     // "pool size increased from 50 → 150"
console.log(response.mttr);           // "11 minutes"`,
    },
    testimonials: [
      { quote: "ent-agintx resolved 70% of P2 incidents autonomously. Our on-call engineers finally sleep through the night.", name: "Ryan Carter", title: "Director of SRE", company: "Foundry Cloud" },
      { quote: "Code review agents are more consistent than our most senior engineers. Security issues that slipped through are now caught every time.", name: "Isabella Moore", title: "VP Engineering", company: "Helix Software" },
      { quote: "MTTR dropped from 47 minutes to 9. The ROI from just one avoided outage covered a year of AgintX.", name: "Daniel Cho", title: "CTO", company: "Vertix Systems" },
    ],
  },
  {
    slug: "ecommerce",
    prefix: "eco-agintx",
    industry: "E-Commerce & Retail",
    company: "Amazon",
    slogan: "To be Earth's most customer-centric company.",
    headline: "AI agents for retail operations and customer experience.",
    subheadline: "eco-agintx handles catalog enrichment, dynamic pricing, and customer support resolution — at marketplace scale.",
    color: "#ff9900",
    icon: "🛒",
    overview: [
      "Product catalog enrichment and SEO optimization",
      "Dynamic pricing agents with competitor monitoring",
      "Customer support resolution and escalation routing",
    ],
    useCases: [
      { title: "Catalog Enrichment", desc: "Agents ingest raw product data and generate SEO-optimized titles, bullets, descriptions, and keyword tags at scale." },
      { title: "Dynamic Pricing", desc: "Pricing agents monitor competitor prices, demand signals, and margin floors to update prices in real time." },
      { title: "Support Automation", desc: "Resolution agents handle returns, order inquiries, and complaints end-to-end — escalating only complex cases." },
    ],
    code: {
      title: "Product Enrichment Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// eco-agintx: Product catalog enrichment agent
const catalogAgent = await client.agents.create({
  name: "eco-catalog-agent",
  model: "gpt-4o",
  vertical: "ecommerce",
  tools: ["image-analyzer", "keyword-research", "competitor-scraper"],
  batchSize: 500,
});

const enriched = await catalogAgent.run({
  asin: "B0CXF8MHJK",
  category: "Electronics > Headphones",
  rawData: {
    title: "Headphones wireless",
    images: ["front.jpg", "side.jpg", "lifestyle.jpg"],
    specs: { driver: "40mm", impedance: "32Ω" }
  },
  marketplace: "amazon-us",
});

console.log(enriched.title);       // "Premium Wireless Headphones — 40mm HD Drivers..."
console.log(enriched.bullets);     // 5 SEO-optimized bullet points
console.log(enriched.keywords);    // 28 ranked search terms
console.log(enriched.bsr_delta);   // +12% projected`,
    },
    testimonials: [
      { quote: "eco-agintx enriched 200,000 SKUs in a weekend. Search ranking improved across 40% of the catalog within a month.", name: "Monica Zhang", title: "Head of Marketplace Ops", company: "Stellar Commerce" },
      { quote: "Dynamic pricing agents maintained margin targets during Black Friday while staying competitive. Best Q4 in 5 years.", name: "Phil Watkins", title: "VP Merchandising", company: "TrueGrid Retail" },
      { quote: "Support resolution rate went from 61% to 89% with eco-agintx handling first touch. CSAT actually improved.", name: "Samira Osei", title: "Director of CX", company: "Boundless Market" },
    ],
  },
  {
    slug: "cloud",
    prefix: "cld-agintx",
    industry: "Cloud Infrastructure",
    company: "Amazon Web Services",
    slogan: "Enabling developers and enterprises to build the future.",
    headline: "AI agents for cloud operations and cost governance.",
    subheadline: "cld-agintx handles infrastructure provisioning, cost anomaly detection, and security posture management — across multi-cloud environments.",
    color: "#ff9900",
    icon: "☁️",
    overview: [
      "Infrastructure-as-code generation and drift detection",
      "Cloud cost anomaly detection and rightsizing",
      "Security posture management and remediation",
    ],
    useCases: [
      { title: "IaC Automation", desc: "Agents generate Terraform/CloudFormation from natural language requirements and validate against policy guardrails." },
      { title: "Cost Governance", desc: "Agents monitor spend anomalies, identify idle resources, and generate rightsizing recommendations with ROI projections." },
      { title: "Security Posture", desc: "Continuous scanning agents detect misconfigurations, prioritize findings, and auto-remediate approved vulnerability classes." },
    ],
    code: {
      title: "Cloud Cost Governance Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// cld-agintx: Cloud cost optimization agent
const costAgent = await client.agents.create({
  name: "cld-cost-agent",
  model: "gpt-4o",
  vertical: "cloud",
  tools: ["aws-cost-explorer", "gcp-billing", "azure-advisor", "terraform"],
  schedule: "0 8 * * 1",  // every Monday 8am
});

const report = await costAgent.run({
  accounts: ["aws-prod", "gcp-staging", "azure-dev"],
  lookbackDays: 30,
  budgetThreshold: 150000,  // USD monthly
  autoRemediate: ["terminate-idle-ec2", "right-size-rds"],
});

console.log(report.totalSpend);         // $142,830
console.log(report.anomalies);          // 3 detected
console.log(report.savings.projected);  // $18,400/mo
console.log(report.actionsExecuted);    // 7 (auto-remediated)`,
    },
    testimonials: [
      { quote: "cld-agintx found $220K in annual waste in our first scan. It paid for 3 years of the platform in week one.", name: "Brian Foster", title: "Cloud Platform Director", company: "Pinnacle Tech" },
      { quote: "Security posture management was a quarterly exercise. Now it's continuous. We fixed 800 findings in 30 days.", name: "Leah Crawford", title: "CISO", company: "Vertex SaaS" },
      { quote: "IaC generation that used to take a senior engineer 2 days takes 20 minutes. And it passes our policy checks automatically.", name: "Omar Hassan", title: "Head of Platform Engineering", company: "Nimbus Infra" },
    ],
  },
  {
    slug: "automotive",
    prefix: "auto-agintx",
    industry: "Automotive & EV",
    company: "Tesla",
    slogan: "Accelerating the world's transition to sustainable energy.",
    headline: "AI agents for automotive supply chain and service ops.",
    subheadline: "auto-agintx orchestrates parts procurement, warranty claim processing, and dealer service scheduling — across global OEM networks.",
    color: "#cc0000",
    icon: "🚗",
    overview: [
      "Parts procurement and supplier negotiation automation",
      "Warranty claim validation and fraud detection",
      "Dealer service scheduling and capacity optimization",
    ],
    useCases: [
      { title: "Procurement", desc: "Agents monitor inventory levels, trigger purchase orders, and negotiate spot pricing from approved supplier pools." },
      { title: "Warranty Claims", desc: "Claim validation agents review service records, compare to VIN history, and detect warranty fraud patterns." },
      { title: "Service Scheduling", desc: "Agents balance technician capacity across dealer networks, prioritize recall campaigns, and reduce wait times." },
    ],
    code: {
      title: "Warranty Claim Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// auto-agintx: Warranty claim validation agent
const warrantyAgent = await client.agents.create({
  name: "auto-warranty-agent",
  model: "gpt-4o",
  vertical: "automotive",
  tools: ["vin-decoder", "service-history", "oem-policy", "fraud-scorer"],
  humanGate: { fraudScore: 0.7 },
});

const claim = await warrantyAgent.run({
  claimId: "WC-2024-448821",
  vin: "1HGBH41JXMN109186",
  dealerCode: "DLR-CA-0291",
  repairCode: "ENB-0041",        // engine block repair
  laborHours: 8.5,
  partsTotal: 2840.00,
});

console.log(claim.approved);      // true
console.log(claim.fraudScore);    // 0.14 (clean)
console.log(claim.reimbursable);  // $3,284.50
console.log(claim.processingTime); // "4 minutes"`,
    },
    testimonials: [
      { quote: "auto-agintx processes 3x more warranty claims per day than our manual team. Dealer satisfaction is up significantly.", name: "Rebecca Stone", title: "Director of Warranty Ops", company: "Meridian Automotive Group" },
      { quote: "Fraud detection caught $4.2M in questionable claims in our first year. The ROI speaks for itself.", name: "James Liu", title: "VP After-Sales", company: "Pacific Motor Company" },
      { quote: "Parts procurement agents reduced our emergency spot-buy costs by 31% through proactive reorder point management.", name: "Christine Park", title: "Head of Supply Chain", company: "Northbridge OEM" },
    ],
  },
  {
    slug: "telecom",
    prefix: "tel-agintx",
    industry: "Telecommunications",
    company: "Verizon",
    slogan: "Connecting people, places, and things safely and reliably.",
    headline: "AI agents for network ops and customer lifecycle management.",
    subheadline: "tel-agintx automates network fault detection, churn prediction, and order provisioning — across millions of subscriber accounts.",
    color: "#cd040b",
    icon: "📡",
    overview: [
      "Network fault detection and self-healing automation",
      "Churn prediction and proactive retention campaigns",
      "Order provisioning and service activation orchestration",
    ],
    useCases: [
      { title: "Network Ops", desc: "Agents monitor network telemetry, isolate fault roots, and execute remediation playbooks before customers notice." },
      { title: "Churn Prevention", desc: "Predictive agents identify at-risk subscribers, trigger personalized retention offers, and track conversion." },
      { title: "Order Provisioning", desc: "Agents orchestrate SIM activation, port-in processing, and equipment dispatch across BSS/OSS systems." },
    ],
    code: {
      title: "Network Fault Response Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// tel-agintx: Network fault detection and response agent
const networkAgent = await client.agents.create({
  name: "tel-netops-agent",
  model: "gpt-4o",
  vertical: "telecom",
  tools: ["nms-connector", "snmp-poller", "runbook-executor", "noc-alerter"],
  realtime: true,
});

const incident = await networkAgent.run({
  alarmId: "NMS-2024-001928",
  nodeId: "RTRSF-CORE-04",
  region: "us-west-2",
  alarmType: "BGP_SESSION_DOWN",
  impactedSubscribers: 4200,
  priority: "critical",
});

console.log(incident.rootCause);    // "Fiber cut on segment SFO-OAK-C"
console.log(incident.rerouted);     // true (via SFO-SJC-B)
console.log(incident.restored);     // "8 minutes 14 seconds"
console.log(incident.subscribersAffected); // 0 (post-reroute)`,
    },
    testimonials: [
      { quote: "tel-agintx restored a major fiber cut in 8 minutes autonomously. Our NOC team watched it work. Zero escalation needed.", name: "Patrick O'Brien", title: "VP Network Operations", company: "Nexwave Telecom" },
      { quote: "Churn rate dropped 18% after deploying tel-agintx's retention campaign agents. The offers are actually relevant.", name: "Yuki Tanaka", title: "Director of Customer Lifecycle", company: "OpenSignal Mobile" },
      { quote: "Order provisioning errors dropped 92%. Agents catch BSS/OSS mismatches before they become customer-facing outages.", name: "Rosa Martinez", title: "Head of Digital Ops", company: "ClearWave Communications" },
    ],
  },
  {
    slug: "aerospace",
    prefix: "aero-agintx",
    industry: "Aerospace & Defense",
    company: "SpaceX",
    slogan: "Revolutionizing space technology to enable human life on Mars.",
    headline: "AI agents for mission planning and maintenance operations.",
    subheadline: "aero-agintx orchestrates MRO scheduling, anomaly detection from telemetry, and compliance document generation — with ITAR-compliant data handling.",
    color: "#005288",
    icon: "🚀",
    overview: [
      "Predictive maintenance from sensor telemetry streams",
      "MRO work order generation and parts sourcing",
      "Regulatory documentation and airworthiness compliance",
    ],
    useCases: [
      { title: "Predictive Maintenance", desc: "Agents process continuous telemetry from aircraft and spacecraft, flag anomalies, and trigger work orders proactively." },
      { title: "MRO Optimization", desc: "Maintenance agents schedule hangar time, source certified parts, and optimize technician routing across fleets." },
      { title: "Compliance Docs", desc: "Agents generate airworthiness directives, Form 337s, and 8130-3 tags from structured maintenance records." },
    ],
    code: {
      title: "Predictive Maintenance Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// aero-agintx: Aircraft predictive maintenance agent
const mroAgent = await client.agents.create({
  name: "aero-mro-agent",
  model: "gpt-4o",
  vertical: "aerospace",
  compliance: ["ITAR", "FAR-Part-43", "DO-178C"],
  tools: ["acars-stream", "cms-connector", "parts-catalog", "work-order-system"],
  dataResidency: "us-gov-east-1",
});

const analysis = await mroAgent.run({
  aircraftReg: "N-CLASSIFIED",
  flightHours: 12480,
  lastCheck: "C-check-2023-11",
  telemetry: { eng1_vibration: 3.8, hyd_pressure_B: 2880 },
  nextRevenue: "2024-12-01T06:00:00Z",
});

console.log(analysis.anomalies);       // ["ENG1 vibration trending +0.4/100hr"]
console.log(analysis.recommendation);  // "Inspect fan blade LRU before next departure"
console.log(analysis.workOrder);       // "WO-2024-88291" (auto-created)
console.log(analysis.partsOrdered);    // ["P/N 73-1284-001"]`,
    },
    testimonials: [
      { quote: "aero-agintx caught a compressor blade wear pattern 200 flight hours before our scheduled inspection. It prevented a critical event.", name: "Col. Thomas Harding (Ret.)", title: "Director of Fleet Maintenance", company: "Stratos Aviation" },
      { quote: "Compliance documentation that required 3 AMTs and a full day now takes 90 minutes. FAA audits are no longer something we dread.", name: "Karen Fields", title: "VP Quality Assurance", company: "Horizon MRO" },
      { quote: "Parts sourcing agents reduced AOG events by 44% through proactive inventory positioning based on telemetry predictions.", name: "Raj Krishnamurthy", title: "Chief Supply Chain Officer", company: "Orbital Defense Systems" },
    ],
  },
  {
    slug: "cybersecurity",
    prefix: "sec-agintx",
    industry: "Cybersecurity",
    company: "CrowdStrike",
    slogan: "We stop breaches.",
    headline: "AI agents for threat detection and security operations.",
    subheadline: "sec-agintx orchestrates SOC triage, vulnerability prioritization, and incident containment — at machine speed, with human oversight built in.",
    color: "#e02020",
    icon: "🔒",
    overview: [
      "SOC alert triage and false positive elimination",
      "Vulnerability prioritization with exploit intelligence",
      "Incident containment and forensic evidence collection",
    ],
    useCases: [
      { title: "SOC Triage", desc: "Agents enrich alerts with threat intel, correlate across SIEM data, and reduce analyst alert fatigue by 80%." },
      { title: "Vulnerability Management", desc: "Agents cross-reference CVEs with asset criticality and live exploit data to produce ranked remediation queues." },
      { title: "Incident Response", desc: "On detection, agents isolate affected hosts, collect forensic artifacts, and draft initial incident reports automatically." },
    ],
    code: {
      title: "SOC Alert Triage Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// sec-agintx: SOC alert triage and response agent
const socAgent = await client.agents.create({
  name: "sec-soc-agent",
  model: "gpt-4o",
  vertical: "cybersecurity",
  tools: ["splunk-api", "virustotal", "mitre-attck", "edr-connector"],
  humanGate: { severity: ["critical"] },
  responseTime: "< 90s",
});

const triage = await socAgent.run({
  alertId: "SPL-2024-881923",
  ruleName: "Lateral Movement - Pass the Hash",
  sourceHost: "WKST-FIN-042",
  destHost: "SRV-DC-PRIMARY",
  indicator: "NTLM hash reuse across 4 hosts",
  mitreTactic: "TA0008",
});

console.log(triage.verdict);          // "true_positive"
console.log(triage.confidence);       // 0.94
console.log(triage.containment);      // "WKST-FIN-042 isolated"
console.log(triage.mitreChain);       // ["T1550.002", "T1021.002"]
console.log(triage.incidentId);       // "INC-2024-00411"`,
    },
    testimonials: [
      { quote: "sec-agintx handles 91% of our tier-1 alerts autonomously. Our analysts work real threats, not noise.", name: "Zara Ahmed", title: "CISO", company: "Blackthorn Financial" },
      { quote: "Mean time to contain dropped from 4 hours to 11 minutes. The agents isolate and collect evidence faster than any human team.", name: "Steve Kowalski", title: "VP Security Operations", company: "Redline Insurance" },
      { quote: "Vuln prioritization went from a monthly report nobody read to a daily, auto-updated queue our team actually follows.", name: "Nina Johansson", title: "Director of Vulnerability Management", company: "Harbor Tech" },
    ],
  },
  {
    slug: "logistics",
    prefix: "lgx-agintx",
    industry: "Logistics & Supply Chain",
    company: "FedEx",
    slogan: "Connecting people and possibilities around the globe.",
    headline: "AI agents for shipment operations and supply chain intelligence.",
    subheadline: "lgx-agintx automates carrier selection, exception management, and demand forecasting — across your entire logistics network.",
    color: "#4d148c",
    icon: "📦",
    overview: [
      "Intelligent carrier selection and rate optimization",
      "Shipment exception detection and proactive resolution",
      "Demand forecasting and inventory positioning agents",
    ],
    useCases: [
      { title: "Carrier Optimization", desc: "Agents evaluate cost, transit time, and service performance in real time to select optimal carriers per shipment." },
      { title: "Exception Management", desc: "Monitoring agents detect delays, lost packages, and customs holds — then trigger resolution workflows automatically." },
      { title: "Demand Forecasting", desc: "Forecasting agents ingest sales data, seasonal signals, and external events to generate SKU-level inventory recommendations." },
    ],
    code: {
      title: "Shipment Exception Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// lgx-agintx: Shipment exception management agent
const exceptionAgent = await client.agents.create({
  name: "lgx-exception-agent",
  model: "gpt-4o",
  vertical: "logistics",
  tools: ["fedex-api", "ups-api", "customs-broker", "customer-comms"],
  monitor: { pollInterval: "5m", exceptions: ["delay", "lost", "customs-hold"] },
});

const resolution = await exceptionAgent.run({
  trackingNumber: "7489274882349283",
  carrier: "fedex",
  exceptionCode: "CUSTOMS_HOLD",
  origin: "SHZ",
  destination: "LAX",
  estimatedDelay: "3-5 business days",
  shipmentValue: 12400,
});

console.log(resolution.action);       // "broker_contacted"
console.log(resolution.brokerRef);    // "CUST-2024-99182"
console.log(resolution.customerNotified); // true (auto-email sent)
console.log(resolution.newETA);       // "2024-11-08"`,
    },
    testimonials: [
      { quote: "lgx-agintx resolved 78% of shipment exceptions without a human. Customer satisfaction for delayed shipments actually improved.", name: "Harold Grant", title: "VP Transportation", company: "Apex Fulfillment" },
      { quote: "Carrier selection agents reduced freight costs 19% in year one by dynamically routing based on real-time performance scores.", name: "Theresa Mack", title: "Director of Logistics Operations", company: "United Goods Co." },
      { quote: "Demand forecasting accuracy improved from 71% to 89%. Stockouts dropped 60%. Our DC utilization is at a 5-year high.", name: "Kevin Leung", title: "Head of Supply Chain Analytics", company: "Pacific Distribution" },
    ],
  },
  {
    slug: "energy",
    prefix: "enrg-agintx",
    industry: "Energy & Utilities",
    company: "NextEra Energy",
    slogan: "Committed to clean energy, innovation, and sustainability.",
    headline: "AI agents for grid operations and energy trading.",
    subheadline: "enrg-agintx manages load forecasting, asset health monitoring, and energy trading optimization — for utilities operating at grid scale.",
    color: "#00843d",
    icon: "⚡",
    overview: [
      "Grid load forecasting and demand response orchestration",
      "Renewable asset health monitoring and maintenance",
      "Energy trading optimization and position management",
    ],
    useCases: [
      { title: "Load Forecasting", desc: "Agents combine weather data, historical consumption, and real-time grid signals to forecast load with 98.5% accuracy." },
      { title: "Asset Monitoring", desc: "Continuous agents monitor turbine, solar panel, and substation health — scheduling maintenance before failures occur." },
      { title: "Trading Optimization", desc: "Trading agents evaluate spot market prices, forecasted generation, and storage capacity to optimize energy positions." },
    ],
    code: {
      title: "Grid Load Forecasting Agent",
      lang: "typescript",
      snippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_KEY });

// enrg-agintx: Grid load forecasting and demand response agent
const gridAgent = await client.agents.create({
  name: "enrg-grid-agent",
  model: "gpt-4o",
  vertical: "energy",
  tools: ["ercot-api", "noaa-weather", "scada-connector", "demand-response"],
  schedule: "0 */1 * * *",  // hourly
  realtime: true,
});

const forecast = await gridAgent.run({
  controlArea: "ERCOT-NORTH",
  forecastWindow: "24h",
  date: "2024-11-15",
  weather: { tempF: 28, windMph: 45, snowfall: 2 },
  peakDemand: { previous: 52400, threshold: 58000 },  // MW
});

console.log(forecast.peakMW);           // 57,840 (near threshold)
console.log(forecast.demandResponse);   // triggered: 1,200 MW curtailed
console.log(forecast.renewableShare);   // 0.34 (34%)
console.log(forecast.gridStatus);       // "stable"`,
    },
    testimonials: [
      { quote: "enrg-agintx's load forecasting kept our grid stable during the February freeze when demand spiked 40% above forecast.", name: "William Greer", title: "VP Grid Operations", company: "Lone Star Power" },
      { quote: "Turbine health agents identified a gearbox anomaly on 3 units simultaneously. We avoided $4M in catastrophic failure costs.", name: "Laura Huang", title: "Director of Asset Management", company: "WindPeak Energy" },
      { quote: "Trading optimization agents improved our average capture price by $3.40/MWh. At our volume, that's $12M annually.", name: "Sean Murphy", title: "Head of Energy Trading", company: "Cascade Renewables" },
    ],
  },
];

export const VERTICAL_SLUGS = VERTICALS.map((v) => v.slug);
