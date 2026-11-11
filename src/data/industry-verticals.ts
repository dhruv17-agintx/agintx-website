export type KillerProduct = {
  number: string;
  name: string;
  painPoint: string;
  workflow: string;
  impact: string;
};

export type IndustryVertical = {
  slug: string;
  prefix: string;          // 3-letter prefix: "fin-agintx", "med-agintx", etc.
  name: string;            // e.g. "Financial Services"
  tagline: string;
  acv: string;             // e.g. "$120K/yr SaaS + Setup"
  rawAcv: number;          // numeric value for sorting/aggregation
  rolloutPhase: string;    // "Days 1–30 (Core)", "Days 31–60 (Expansion)", "Days 61–90 (Full Suite)"
  color: string;           // theme accent
  icon: string;
  pdfKillerSolution: string;
  corePainPoint: string;
  buyerPersona: string;
  products: KillerProduct[];
  codeSnippet: string;
};

export const INDUSTRY_VERTICALS: IndustryVertical[] = [
  {
    slug: "financial-services",
    prefix: "fin-agintx",
    name: "Financial Services",
    tagline: "Autonomous regulatory compliance, AML graph surveillance, and risk mitigation.",
    acv: "$120K/yr SaaS + Setup",
    rawAcv: 120000,
    rolloutPhase: "Days 1–30 (Core)",
    color: "#00E5FF",
    icon: "🏦",
    pdfKillerSolution: "Autonomous Regulatory Compliance & AML Risk Scraper",
    corePainPoint:
      "Global financial institutions spend hundreds of millions on manual compliance review while suffering 95%+ false-positive rates and severe FINRA/SEC/OCC enforcement penalties.",
    buyerPersona: "Chief Compliance Officer (CCO) & Head of Financial Crime",
    products: [
      {
        number: "01",
        name: "AML Transaction Anomaly & Risk Graph Scraper",
        painPoint: "High volume of false-positive transaction alerts burying compliance teams.",
        workflow: "Ingests real-time SWIFT/Fedwire feeds, applies temporal graph neural models, isolates multi-hop suspicious layering.",
        impact: "85% reduction in false-positive AML alerts.",
      },
      {
        number: "02",
        name: "Autonomous SAR (Suspicious Activity Report) Drafter",
        painPoint: "Filing SARs with FinCEN takes up to 6 hours per case of manual narrative writing.",
        workflow: "Compiles transaction history, counterparty KYC dossiers, and generates FinCEN-compliant narratives.",
        impact: "Drafts audit-ready SARs in under 90 seconds.",
      },
      {
        number: "03",
        name: "Continuous Sanctions & PEP Screening Agent",
        painPoint: "Batch screening misses intra-day OFAC, EU, and UN watch-list changes.",
        workflow: "Scrapes global sanction lists continuously; matches against customer accounts with fuzzy phonetic indexing.",
        impact: "Zero-latency sanction updates across 10M+ accounts.",
      },
      {
        number: "04",
        name: "Cross-Border Wire & ISO 20022 Compliance Checker",
        painPoint: "Rich ISO 20022 XML formats fail validation, leading to costly wire rejects.",
        workflow: "Validates MT/MX messaging syntax, extracts structured remittance data, and flags formatting anomalies.",
        impact: "99.8% straight-through processing for foreign payments.",
      },
      {
        number: "05",
        name: "SEC & FINRA Regulatory Disclosure Harmonizer",
        painPoint: "Quarterly 10-Q/10-K and Form ADV disclosures take months of cross-team coordination.",
        workflow: "Correlates departmental risk data with new regulatory mandates to produce unified filing drafts.",
        impact: "Cuts disclosure drafting cycles by 70%.",
      },
      {
        number: "06",
        name: "Commercial Loan Underwriting & Covenant Monitor",
        painPoint: "Trailing covenant compliance is calculated months late from quarterly PDFs.",
        workflow: "Extracts balance sheet metrics from borrower ERP feeds and alerts on DSCR / debt-to-equity breaches.",
        impact: "Proactive default prevention 45 days earlier.",
      },
      {
        number: "07",
        name: "Multi-Entity Beneficial Ownership (UBO) Unraveler",
        painPoint: "Complex offshore shell holding structures obfuscate ultimate beneficial owners.",
        workflow: "Traverses corporate registry databases across 60+ jurisdictions to unmask ownership thresholds.",
        impact: "Instant KYC/KYB entity structure resolution.",
      },
      {
        number: "08",
        name: "Trade Surveillance & Spoofing Detection Pipeline",
        painPoint: "Market manipulation patterns escape traditional threshold-based trade monitors.",
        workflow: "Correlates order book level-2 depth with cancel ratios to identify quote stuffing and spoofing.",
        impact: "Real-time market abuse alerts with full reconstructive replay.",
      },
      {
        number: "09",
        name: "Model Risk Management (SR 11-7) Validator",
        painPoint: "Validating quantitative risk models requires expensive external consultant reviews.",
        workflow: "Performs autonomous stress testing, conceptual soundness reviews, and back-testing validation.",
        impact: "Reduces annual model audit costs by 60%.",
      },
      {
        number: "10",
        name: "Institutional Wealth Mandate & Rebalance Guardian",
        painPoint: "Investment managers risk client mandate violations during volatile market swings.",
        workflow: "Monitors asset allocation against ESG, liquidity, and concentration policy constraints in real time.",
        impact: "100% adherence to customized institutional IPS agreements.",
      },
    ],
    codeSnippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_API_KEY });

// fin-agintx: Autonomous Regulatory Compliance & AML Risk Scraper
const amlAgent = await client.agents.create({
  name: "fin-aml-screener",
  model: "gpt-4o",
  vertical: "financial-services",
  enclave: "soc2-type2-compliant",
  tools: ["ofac-sanctions-stream", "swift-iso20022", "fincen-sar-builder"],
});

const report = await amlAgent.run({
  entityId: "CORP-884920",
  wireBatchId: "BATCH-US-2026-X11",
  riskThreshold: "high",
});

console.log(report.sarDraftGenerated); // true
console.log(report.riskScore);          // 0.04 (clear)
console.log(report.auditCertificate);   // "FIN-AUD-2026-8812"`,
  },
  {
    slug: "healthcare-pharma",
    prefix: "med-agintx",
    name: "Healthcare & Pharma",
    tagline: "HIPAA-secure clinical trial data harmonization, RCM automation, and interoperability.",
    acv: "$250K/yr Enterprise Tier",
    rawAcv: 250000,
    rolloutPhase: "Days 1–30 (Core)",
    color: "#00D68F",
    icon: "🏥",
    pdfKillerSolution: "HIPAA-Secure Clinical Trial Data Harmonization Engine",
    corePainPoint:
      "Clinical trials are delayed by 8–14 months due to incompatible EHR schemas (FHIR, HL7, CDISC), while hospitals suffer massive revenue leakage from manual claims appeals.",
    buyerPersona: "VP Clinical Operations & Chief Information Officer (CIO)",
    products: [
      {
        number: "01",
        name: "Clinical Trial Multi-Site Protocol Harmonizer",
        painPoint: "Trial data arrives in heterogeneous formats from 50+ global hospital trial sites.",
        workflow: "Converts raw HL7/FHIR into unified CDISC SDTM/ADaM datasets with zero manual data transformation.",
        impact: "Shortens FDA submission prep by 6 months.",
      },
      {
        number: "02",
        name: "Real-Time Eligibility & Cost-Estimator",
        painPoint: "Unverified insurance coverage leads to unexpected patient denials and bad debt.",
        workflow: "Executes real-time X12 270/271 checks and calculates copay/coinsurance out-of-pocket estimates.",
        impact: "40% reduction in upfront patient collection drop-off.",
      },
      {
        number: "03",
        name: "EDI 837/835 Claims Reconciliation Engine",
        painPoint: "Underpaid insurance remittances go undetected inside massive electronic 835 batches.",
        workflow: "Matches line-by-line billed 837 claims against 835 remittance advices and flags contractual variances.",
        impact: "Recovers 3–5% in uncollected net patient revenue.",
      },
      {
        number: "04",
        name: "Autonomous Denied Claims Appeal Pipeline",
        painPoint: "High-dollar denials expire past timely filing deadlines before billing teams can appeal.",
        workflow: "Parses CARC/RARC denial codes, retrieves clinical documentation, and drafts appeal packets.",
        impact: "45% increase in denial overturn rate.",
      },
      {
        number: "05",
        name: "Cross-State Telehealth Licensure & Payment Ledger",
        painPoint: "Multi-state virtual care providers face complex state tax and medical board licensure rules.",
        workflow: "Validates provider state licensure and cross-allocates revenue across state tax regimes.",
        impact: "Instant compliance for nationwide telehealth networks.",
      },
      {
        number: "06",
        name: "HL7/FHIR Diagnostic Lab Charge Capture",
        painPoint: "Unsolicited lab results are lost without generating billable hospital charges.",
        workflow: "Listens to LIS ORU feeds, maps LOINC to CPT codes, and posts validated charges to Epic/Cerner.",
        impact: "Eliminates 98% of unbilled outpatient lab tests.",
      },
      {
        number: "07",
        name: "Specialty Pharmacy Benefit Investigation",
        painPoint: "High-cost biologics require complex prior authorizations and copay assistance stacking.",
        workflow: "Performs pharmacy benefit checks, matches manufacturer co-pay cards, and calculates final patient cost.",
        impact: "Reduces time-to-first-dose from 18 days to 48 hours.",
      },
      {
        number: "08",
        name: "DSO Dental Attachment & Fast-Track Claims",
        painPoint: "Dental claims are rejected for missing periodontal charts or bitewing radiographs.",
        workflow: "Validates required attachments by procedure code before submission to clearinghouses.",
        impact: "Achieves 92% first-pass clean claim rate for dental chains.",
      },
      {
        number: "09",
        name: "Value-Based Care Multi-Payer RAF Aggregator",
        painPoint: "Accountable Care Organizations miss chronic HCC recapture opportunities.",
        workflow: "Aggregates medical claims across all Medicare Advantage payers to highlight un-coded conditions.",
        impact: "Averages +0.18 RAF score improvement across panels.",
      },
      {
        number: "10",
        name: "Payer Interoperability Mandate (FHIR) Gateway",
        painPoint: "CMS-9115-F mandates patient access APIs with strict security and uptime penalties.",
        workflow: "Hosts a secure, certified HL7 FHIR US Core 3.1.1 gateway connected to legacy payer cores.",
        impact: "100% compliance with federal interoperability rules.",
      },
    ],
    codeSnippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_API_KEY });

// med-agintx: Clinical Trial Harmonization Engine
const trialAgent = await client.agents.create({
  name: "med-clinical-harmonizer",
  model: "claude-3-5-sonnet",
  vertical: "healthcare-pharma",
  compliance: ["HIPAA", "FDA-21-CFR-Part-11", "CDISC"],
  tools: ["fhir-converter", "phi-deidentifier", "sdtm-builder"],
});

const trialData = await trialAgent.run({
  protocolId: "PH-ONC-2026-03",
  sourceEHR: "s3://clinical-raw/site-042/fhir_bundles.tar.gz",
  targetStandard: "CDISC-SDTM-v2.1",
});

console.log(trialData.phiRedacted);     // 100% verified
console.log(trialData.mappedSubjects);  // 1,420 subjects
console.log(trialData.fdaReady);        // true`,
  },
  {
    slug: "real-estate",
    prefix: "cre-agintx",
    name: "Real Estate (PropTech)",
    tagline: "Automated commercial underwriting, zoning code AI, and portfolio diligence.",
    acv: "$96K/yr per Portfolio",
    rawAcv: 96000,
    rolloutPhase: "Days 1–30 (Core)",
    color: "#FFB020",
    icon: "🏢",
    pdfKillerSolution: "Automated Commercial Underwriting & Zoning AI",
    corePainPoint:
      "Private equity real estate firms spend 3 to 6 weeks manually parsing unstructured rent rolls, operating statements, and municipal zoning ordinances to underwrite single deals.",
    buyerPersona: "Head of Acquisitions & Managing Director of Real Estate",
    products: [
      {
        number: "01",
        name: "Automated Commercial Underwriting & DCF Engine",
        painPoint: "Building cash flow projection models from scratch takes analysts 40+ hours per property.",
        workflow: "Ingests T12 statements, normalizes expense lines, models debt structures, and outputs dynamic pro-forma models.",
        impact: "Reduces underwriting cycle from 3 weeks to 3 hours.",
      },
      {
        number: "02",
        name: "Municipal Zoning Code & GIS Permitting AI",
        painPoint: "Determining maximum buildable FAR and parking ratios requires slow urban planning consultations.",
        workflow: "Cross-references county GIS parcel data with municipal zoning bylaws to compute allowable density.",
        impact: "Instant development capacity feasibility analysis.",
      },
      {
        number: "03",
        name: "Rent Roll & Lease Expiration Normalizer",
        painPoint: "Multifamily and retail rent rolls arrive in corrupted, bespoke Excel spreadsheets.",
        workflow: "Parses lease commencement dates, escalations, renewal options, and tenant reimbursements automatically.",
        impact: "Normalizes 10,000+ tenant lines with 99.7% accuracy.",
      },
      {
        number: "04",
        name: "Commercial Lease Abstracting & Risk Extractor",
        painPoint: "Hidden co-tenancy and continuous operation clauses lead to surprise rent abatements.",
        workflow: "Extracts key clauses (exclusivity, kick-out, subletting) from 80-page retail/office leases.",
        impact: "Surfaces unmitigated lease risks before closing.",
      },
      {
        number: "05",
        name: "Phase I Environmental (ESA) Risk Analyzer",
        painPoint: "Environmental diligence reports span hundreds of pages with buried REC findings.",
        workflow: "Scans environmental site assessments, historical aerials, and spills databases for recognized risks.",
        impact: "Identifies contamination liabilities instantly.",
      },
      {
        number: "06",
        name: "Construction Draw Inspection & Lien Reconciler",
        painPoint: "Disbursing construction loan draws without verifying mechanics liens causes lender liability.",
        workflow: "Matches contractor pay applications against architect inspection reports and unconditional lien waivers.",
        impact: "Accelerates construction draw funding by 75%.",
      },
      {
        number: "07",
        name: "Tenant Credit & Fair Housing Compliance Engine",
        painPoint: "Manual tenant background evaluations risk disparate-impact compliance violations.",
        workflow: "Evaluates debt-to-income and rental history against standardized, auditable underwriting criteria.",
        impact: "100% Fair Housing Act compliance guarantee.",
      },
      {
        number: "08",
        name: "Property Tax Assessment & Comp Appeal Agent",
        painPoint: "Commercial properties are over-assessed by local jurisdictions, eroding net operating income.",
        workflow: "Identifies valuation discrepancies against nearby market comps and drafts assessment appeals.",
        impact: "Recovers an average of $45K/building in tax overcharges.",
      },
      {
        number: "09",
        name: "Building ESG & Energy Star Performance Sync",
        painPoint: "Institutional capital requires audited GRESB / Energy Star emissions data across portfolios.",
        workflow: "Connects utility smart meters with EPA Portfolio Manager to automate ESG disclosures.",
        impact: "Zero-touch annual GRESB benchmark submissions.",
      },
      {
        number: "10",
        name: "Title Commitment & Encumbrance Analyzer",
        painPoint: "Easements and deed restrictions discovered late kill acquisition transactions.",
        workflow: "Analyzes Schedule B-II title exceptions and cross-references parcel plot maps.",
        impact: "Eliminates closing delays due to title surprises.",
      },
    ],
    codeSnippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_API_KEY });

// cre-agintx: Automated Underwriting & Zoning AI
const underwritingAgent = await client.agents.create({
  name: "cre-underwriter",
  model: "gpt-4o",
  vertical: "real-estate",
  tools: ["rentroll-parser", "gis-zoning-lookup", "dcf-calculator"],
});

const deal = await underwritingAgent.run({
  propertyType: "Multifamily-Class-B",
  address: "1420 Brickell Ave, Miami, FL",
  files: ["rent_roll.xlsx", "t12_operating.pdf"],
  targetIrr: 0.16,
});

console.log(deal.maxBuildableUnits); // 240 units (Zoning T6-24-O)
console.log(deal.underwrittenNOI);   // $2,410,500
console.log(deal.recommendedBid);     // $41,200,000`,
  },
  {
    slug: "energy-utilities",
    prefix: "nrg-agintx",
    name: "Energy & Utilities",
    tagline: "Smart grid predictive maintenance, outage forecasting, and energy dispatch.",
    acv: "$300K/yr Enterprise Grid",
    rawAcv: 300000,
    rolloutPhase: "Days 31–60 (Expansion)",
    color: "#00E5FF",
    icon: "⚡",
    pdfKillerSolution: "Smart Grid Predictive Maintenance & Outage Forecasting",
    corePainPoint:
      "Utilities face catastrophic outage liabilities, wildfire lawsuits, and extreme weather grid collapse while transformer replacement lead times exceed 120 weeks.",
    buyerPersona: "VP Grid Operations & Chief System Operator",
    products: [
      {
        number: "01",
        name: "Smart Grid Predictive Maintenance & Outage Forecaster",
        painPoint: "Storm outages catch utilities off-guard, causing multi-day restoration delays.",
        workflow: "Fuses hyper-local meteorological forecasts with transformer loading history to predict failure nodes.",
        impact: "Cuts customer outage minutes by 35%.",
      },
      {
        number: "02",
        name: "Substation SCADA Telemetry Anomaly Investigator",
        painPoint: "High-frequency SCADA alarms trigger alert fatigue inside control room operator centers.",
        workflow: "Filters transient oscillations from critical transformer thermal degradation events.",
        impact: "Prevents major substation burnouts before occurrence.",
      },
      {
        number: "03",
        name: "NERC CIP Regulatory Compliance Audit Engine",
        painPoint: "NERC CIP audits demand massive evidence collection for every digital asset and patch cycle.",
        workflow: "Continuously logs system configurations, cyber asset inventories, and perimeter access logs.",
        impact: "Zero non-compliance fines on biennial NERC audits.",
      },
      {
        number: "04",
        name: "Renewable Generation Curtailment Minimizer",
        painPoint: "Solar and wind farms lose millions being forced offline by transmission bottlenecks.",
        workflow: "Models dynamic line ratings (DLR) to safely maximize grid throughput during generation peaks.",
        impact: "Reduces renewable curtailment by 22%.",
      },
      {
        number: "05",
        name: "BESS Degradation & Wholesale Arbitrage Agent",
        painPoint: "Grid batteries degrade prematurely when dispatched on sub-optimal market cycles.",
        workflow: "Co-optimizes cell state-of-health electrochemical models with day-ahead LMP power prices.",
        impact: "Extends BESS asset lifetime by 3.5 years.",
      },
      {
        number: "06",
        name: "Transmission Corridor Vegetation Vision Agent",
        painPoint: "Tree branches contacting high-voltage lines trigger devastating catastrophic wildfires.",
        workflow: "Analyzes high-res satellite and drone LiDAR imagery to pinpoint rapid tree growth encroachment.",
        impact: "Eliminates high-risk wildfire ignition triggers.",
      },
      {
        number: "07",
        name: "Extreme Weather Demand Response Dispatcher",
        painPoint: "Winter freezes and heatwaves cause unexpected generation reserve margin collapses.",
        workflow: "Auto-signals commercial thermostats, EV chargers, and industrial loads to curtail demand.",
        impact: "Dispatches 500+ MW of peak relief in seconds.",
      },
      {
        number: "08",
        name: "Interconnection Queue Feasibility Evaluator",
        painPoint: "Clean energy projects languish in 5-year interconnection study backlogs with RTOs.",
        workflow: "Automates power flow and short-circuit impact studies for prospective solar/storage assets.",
        impact: "Speeds up initial interconnection review by 80%.",
      },
      {
        number: "09",
        name: "AMI Smart Meter Water & Power Theft Detector",
        painPoint: "Non-technical line losses and bypass meter tampering bleed revenue unnoticed.",
        workflow: "Compares feeder meter aggregate output against downstream household meter consumption.",
        impact: "Uncovers millions in unmetered utility consumption.",
      },
      {
        number: "10",
        name: "Carbon Offset & REC Generation Ledger",
        painPoint: "Double-counting of renewable energy credits (RECs) destroys corporate ESG credibility.",
        workflow: "Mints cryptographically verifiable hourly carbon-free energy (CFE) production receipts.",
        impact: "Guarantees 24/7 matching for green corporate buyers.",
      },
    ],
    codeSnippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_API_KEY });

// nrg-agintx: Predictive Maintenance & Grid Outage Forecaster
const gridAgent = await client.agents.create({
  name: "nrg-outage-predictor",
  model: "gemini-1.5-pro",
  vertical: "energy-utilities",
  tools: ["scada-telemetry", "noaa-storm-radar", "nerc-cip-logger"],
  realtime: true,
});

const assessment = await gridAgent.run({
  controlZone: "PJM-EASTERN-CORRIDOR",
  weatherAlert: "Category 2 Hurricane approaching",
  transformerAssets: 480,
});

console.log(assessment.failureProbability); // High risk on 4 units
console.log(assessment.dispatchWorkOrder);   // Crew pre-staged at Substation 14
console.log(assessment.nercAuditStatus);     // Compliant`,
  },
  {
    slug: "manufacturing",
    prefix: "mfg-agintx",
    name: "Manufacturing",
    tagline: "Computer vision line bottleneck detection, defect triage, and predictive tooling.",
    acv: "$180K/yr per Plant",
    rawAcv: 180000,
    rolloutPhase: "Days 31–60 (Expansion)",
    color: "#FF5252",
    icon: "🏭",
    pdfKillerSolution: "Computer Vision Supply Chain Bottleneck Detector",
    corePainPoint:
      "Unplanned line micro-stoppages (30–90 seconds) and silent yield degradation cost industrial plants millions, while legacy MES and ERP tools lack visual root-cause diagnostics.",
    buyerPersona: "VP of Manufacturing Operations & Plant General Manager",
    products: [
      {
        number: "01",
        name: "Computer Vision Line Bottleneck Detector",
        painPoint: "Micro-delays on automated assembly lines accumulate into huge daily production losses.",
        workflow: "Processes real-time overhead camera feeds, tracks conveyor transit times, and identifies jam roots.",
        impact: "+4.8% Overall Equipment Effectiveness (OEE) gain.",
      },
      {
        number: "02",
        name: "Automated Visual Defect & Scrap Classifier",
        painPoint: "Human visual inspectors suffer fatigue, passing defective parts downstream to customers.",
        workflow: "Detects micro-cracks, surface blemishes, and welding flaws with sub-millimeter precision.",
        impact: "Reduces customer defect escapes to under 5 PPM.",
      },
      {
        number: "03",
        name: "BOM Single-Source Obsolescence Risk Agent",
        painPoint: "Critical electronic components are discontinued without advance warning from suppliers.",
        workflow: "Continuously monitors component lifecycle databases and recommends drop-in replacements.",
        impact: "Zero production shutdowns from parts obsolescence.",
      },
      {
        number: "04",
        name: "CNC & Robotic Acoustic Tool Wear Monitor",
        painPoint: "Machining bits snap during cycles, destroying expensive raw titanium and aluminum blanks.",
        workflow: "Analyzes acoustic frequency sensors to predict cutting tool wear before catastrophic fracture.",
        impact: "Saves $250K/yr per production cell in tooling damage.",
      },
      {
        number: "05",
        name: "Supplier Lead-Time Variance Adjuster",
        painPoint: "Static lead times inside SAP ERP cause chronic parts stockouts or massive over-inventory.",
        workflow: "Calculates real-world vendor delivery lead times and auto-adjusts MRP safety stock buffers.",
        impact: "30% reduction in working capital locked in inventory.",
      },
      {
        number: "06",
        name: "Plant Floor OSHA PPE Compliance Vision Agent",
        painPoint: "Workplace safety violations lead to worker injuries and severe regulatory fines.",
        workflow: "Scans active industrial zones to verify hardhat, hi-vis, and eyewear compliance in real time.",
        impact: "Zero OSHA safety non-conformance citations.",
      },
      {
        number: "07",
        name: "Full-Genealogy Lot Traceability Engine",
        painPoint: "Component recalls force widespread, expensive recalls because batch tracking is incomplete.",
        workflow: "Links barcode serialization from raw ingot to finished serial numbers in an immutable ledger.",
        impact: "Pinpoints recall scope to specific 50-unit batches.",
      },
      {
        number: "08",
        name: "Dynamic Shift Scheduling & Constraint Dispatcher",
        painPoint: "Unplanned operator absences disrupt complex sequential machine setups.",
        workflow: "Rebalances shift rosters based on operator certification skills and production line priorities.",
        impact: "Eliminates shift changeover idle time.",
      },
      {
        number: "09",
        name: "Engineering Change Order (ECO) Impact Analyzer",
        painPoint: "CAD revisions take weeks to review across tooling, inventory, and supplier readiness.",
        workflow: "Analyzes 3D CAD updates, flags affected inventory parts, and estimates total scrap cost.",
        impact: "Speeds ECO implementation cycle by 65%.",
      },
      {
        number: "10",
        name: "ISO 9001 / IATF 16949 Audit Trail Generator",
        painPoint: "Automotive supplier quality audits demand tedious compilation of calibration certificates.",
        workflow: "Aggregates machine calibration logs, gage R&R studies, and non-conformance reports automatically.",
        impact: "Audit-ready quality dossier generated in minutes.",
      },
    ],
    codeSnippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_API_KEY });

// mfg-agintx: Computer Vision Bottleneck Detector
const mfgAgent = await client.agents.create({
  name: "mfg-line-vision",
  model: "gemini-1.5-flash",
  vertical: "manufacturing",
  multimodal: true,
  tools: ["camera-rtsp-stream", "mes-connector", "plc-actuator"],
});

const report = await mfgAgent.run({
  plantId: "PLANT-DETROIT-02",
  lineId: "ASSEMBLY-CHASSIS-04",
  targetOEE: 0.88,
});

console.log(report.bottleneckNode);   // "Station 12: Torque nutrunner delay"
console.log(report.dwellVariance);    // +42 seconds vs benchmark
console.log(report.alertSentToPLC);   // true`,
  },
  {
    slug: "logistics-supply-chain",
    prefix: "log-agintx",
    name: "Logistics & Supply Chain",
    tagline: "Autonomous multi-modal route optimization, demurrage mitigation, and EDI orchestration.",
    acv: "$150K/yr Enterprise",
    rawAcv: 150000,
    rolloutPhase: "Days 31–60 (Expansion)",
    color: "#7C4DFF",
    icon: "🚢",
    pdfKillerSolution: "Autonomous Multi-Modal Freight Route Optimizer",
    corePainPoint:
      "Global 3PLs and shippers bleed 7–12% margin on ocean container demurrage penalties, spot rate volatility, and disconnected EDI 204/214 updates.",
    buyerPersona: "VP Global Logistics & Chief Supply Chain Officer (CSCO)",
    products: [
      {
        number: "01",
        name: "Autonomous Multi-Modal Freight Route Optimizer",
        painPoint: "Dispatchers default to expensive air/truck lanes when ocean schedules face congestion.",
        workflow: "Dynamically models rail, drayage, and ocean feeder options against delivery SLA deadlines.",
        impact: "18% average reduction in landed freight costs.",
      },
      {
        number: "02",
        name: "Port Demurrage & Container Dwell Mitigation Agent",
        painPoint: "Containers trapped at marine terminals incur tens of thousands in daily per-diem fees.",
        workflow: "Tracks vessel AIS telemetry, predicts terminal gate delays, and auto-dispatches bonded drayage.",
        impact: "82% reduction in port detention and demurrage penalties.",
      },
      {
        number: "03",
        name: "Carrier EDI 204/214 Exception Rerouter",
        painPoint: "Late delivery alerts arrive hours after trucks break down, destroying customer OTIF scores.",
        workflow: "Monitors EDI 214 transit pings and re-tenders loads to backup carriers before deadlines break.",
        impact: "Protects 98%+ On-Time-In-Full (OTIF) ratings.",
      },
      {
        number: "04",
        name: "Dynamic Spot vs. Contract Rate Arbitrage Agent",
        painPoint: "Shippers overpay contract rates when spot capacity drops significantly below tender prices.",
        workflow: "Compares live DAT/Freightos spot rates with negotiated contracts to optimize tendering.",
        impact: "Captures 12% savings during soft freight cycles.",
      },
      {
        number: "05",
        name: "Customs Tariff & HTS Automated Classifier",
        painPoint: "Incorrect Harmonized Tariff Schedule (HTS) codes trigger costly customs holds and penalties.",
        workflow: "Analyzes product commercial invoices and matches exact 10-digit HTS codes with rationale.",
        impact: "Eliminates border customs inspection delays.",
      },
      {
        number: "06",
        name: "Cold Chain Telemetry & Excursion Recovery",
        painPoint: "Refrigerated pharmaceutical and grocery loads spoil when reefer units lose power.",
        workflow: "Monitors IoT temperature sensors and dispatches nearest mobile reefer repair technicians.",
        impact: "Saves $4M+ annually in spoiled perishable shipments.",
      },
      {
        number: "07",
        name: "Warehouse Yard & Dock Appointment Orchestrator",
        painPoint: "Truck drivers idle for hours waiting for warehouse bays, triggering detention surcharges.",
        workflow: "Schedules dynamic dock appointments based on real-time GPS trailer proximity.",
        impact: "Reduces driver dock turn time from 150m to 35m.",
      },
      {
        number: "08",
        name: "Cross-Border Drayage & Broker Handoff Dispatcher",
        painPoint: "US-Mexico-Canada cross-border handoffs between long-haul and dray drivers stall at borders.",
        workflow: "Coordinates customs broker e-manifest filings and stages transfer drivers at border ports.",
        impact: "Halves border transit turnaround times.",
      },
      {
        number: "09",
        name: "Freight Audit & Duplicate Invoice Reconciler",
        painPoint: "Carriers bill duplicate accessorials (fuel surcharges, wait time) that slip past AP.",
        workflow: "Audits freight bills against rate confirmations and bills of lading down to line-item pennies.",
        impact: "Recovers 4.2% of total freight spend in billing errors.",
      },
      {
        number: "10",
        name: "Scope 3 Logistics Carbon Calculation Engine",
        painPoint: "Enterprises face mandatory European CSRD and SEC emissions reporting for shipping.",
        workflow: "Calculates precise GLEC-compliant ton-kilometer emissions across maritime, rail, and road.",
        impact: "100% verified Scope 3 shipping disclosures.",
      },
    ],
    codeSnippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_API_KEY });

// log-agintx: Multi-Modal Freight Optimizer
const logisticsAgent = await client.agents.create({
  name: "log-freight-optimizer",
  model: "gpt-4o",
  vertical: "logistics-supply-chain",
  tools: ["ais-vessel-tracker", "edi-204-engine", "freightos-spot-rates"],
});

const route = await logisticsAgent.run({
  origin: "Port of Shanghai (CNSHA)",
  destination: "Chicago Distribution Center (ORD)",
  cargo: "Electronics (40ft High Cube x 12)",
  slaDeadline: "2026-11-14",
});

console.log(route.optimalMode);      // "Ocean to Tacoma + Intermodal Rail to Chicago"
console.log(route.demurrageRisk);    // Zero (pre-cleared at rail ramp)
console.log(route.savingsVsAir);     // $84,200 saved`,
  },
  {
    slug: "legal-compliance",
    prefix: "leg-agintx",
    name: "Legal & Compliance",
    tagline: "Cross-jurisdiction contract redlining, M&A diligence risk scoring, and policy enforcement.",
    acv: "$100K/yr per Firm",
    rawAcv: 100000,
    rolloutPhase: "Days 31–60 (Expansion)",
    color: "#FF4081",
    icon: "⚖️",
    pdfKillerSolution: "Cross-Jurisdiction Contract Redlining & Risk Engine",
    corePainPoint:
      "Enterprise deal closures are paralyzed for weeks by manual legal redlining, while global organizations struggle to enforce cross-border compliance (GDPR, EU AI Act, US state laws).",
    buyerPersona: "General Counsel & Partner at AmLaw 100 Firm",
    products: [
      {
        number: "01",
        name: "Cross-Jurisdiction Contract Redlining & Risk Engine",
        painPoint: "Negotiating standard vendor MSAs and NDAs consumes hundreds of expensive attorney hours.",
        workflow: "Applies firm playbooks, auto-suggests fallback clauses, and flags unacceptable liability terms.",
        impact: "Cuts contract review time by 75%.",
      },
      {
        number: "02",
        name: "M&A Virtual Data Room Diligence & Risk Ranker",
        painPoint: "Reviewing 10,000 corporate documents during M&A diligence leads to missed liabilities.",
        workflow: "Ingests data room archives, ranks change-of-control clauses, and highlights non-compete limits.",
        impact: "Completes Phase 1 diligence in 48 hours vs 3 weeks.",
      },
      {
        number: "03",
        name: "Non-Standard Clause Drift & Audit Tracker",
        painPoint: "Decentralized sales teams give away unlimited liability and custom SLAs without approval.",
        workflow: "Scans active contract repositories to identify deviation from authorized legal templates.",
        impact: "Eliminates rogue legal liabilities across sales contracts.",
      },
      {
        number: "04",
        name: "Regulatory Subpoena & e-Discovery Relevancy Ranker",
        painPoint: "Litigation document review costs millions in contract attorney fees for privileged material.",
        workflow: "Applies high-precision legal reasoning to tag attorney-client privilege and key responsive evidence.",
        impact: "Reduces e-discovery document review costs by 70%.",
      },
      {
        number: "05",
        name: "Entity Governance & Annual Filing Lifecycle Agent",
        painPoint: "Multi-subsidiary corporations miss state franchise tax and annual minutes filings.",
        workflow: "Tracks registered agent notices, prepares board resolutions, and submits annual state filings.",
        impact: "Zero entity loss-of-good-standing occurrences.",
      },
      {
        number: "06",
        name: "Outside Counsel LEDES Billing Guideline Auditor",
        painPoint: "Law firms submit non-compliant fee invoices with block billing and unauthorized staffing.",
        workflow: "Audits LEDES 98B files line-by-line against corporate billing guidelines before payment.",
        impact: "Recovers 8–12% in unauthorized legal fee overcharges.",
      },
      {
        number: "07",
        name: "Patent Prior Art & Landscape Analyzer",
        painPoint: "Filing patent applications without comprehensive prior art searching causes USPTO office actions.",
        workflow: "Searches global patent offices (USPTO, EPO, WIPO) to validate novel claims and freedom-to-operate.",
        impact: "Doubles first-action patent allowance rate.",
      },
      {
        number: "08",
        name: "Data Privacy (GDPR / CPRA) & DPA Evaluator",
        painPoint: "Vendor Data Processing Agreements fail to mandate required cross-border transfer mechanisms.",
        workflow: "Verifies standard contractual clauses (SCCs) and ensures vendor sub-processor transparency.",
        impact: "100% compliance with international data privacy laws.",
      },
      {
        number: "09",
        name: "Export Control (ITAR / EAR) Guardrail Agent",
        painPoint: "Sharing technical data with foreign nationals inadvertently violates federal ITAR rules.",
        workflow: "Classifies technical documents against Commerce Control and US Munitions lists before export.",
        impact: "Prevents severe federal export control criminal penalties.",
      },
      {
        number: "10",
        name: "Commercial Lease & Contract Renewal Notifier",
        painPoint: "Failing to send formal non-renewal notices locks companies into auto-renewing leases.",
        workflow: "Tracks notice deadlines and generates legally valid certified mail cancellation notices.",
        impact: "Eliminates unwanted multi-year auto-renewals.",
      },
    ],
    codeSnippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_API_KEY });

// leg-agintx: Cross-Jurisdiction Contract Redlining Engine
const legalAgent = await client.agents.create({
  name: "leg-contract-redliner",
  model: "claude-3-5-sonnet",
  vertical: "legal-compliance",
  tools: ["playbook-enforcer", "jurisdiction-rules", "docx-differ"],
});

const redline = await legalAgent.run({
  contractPath: "vendor_msa_draft_v3.docx",
  jurisdiction: "Delaware / UK English",
  firmPlaybook: "corporate_standard_2026",
  maxIndemnityCap: "12_months_fees",
});

console.log(redline.redlinesApplied);  // 14 critical changes made
console.log(redline.riskScore);        // Reduced from High to Low
console.log(redline.docxDownloadUrl);  // "s3://legal-redlines/msa_signed.docx"`,
  },
  {
    slug: "b2b-saas-tech",
    prefix: "sas-agintx",
    name: "B2B SaaS & Tech",
    tagline: "Automated customer data migration, zero-churn onboarding, and telemetry analytics.",
    acv: "$72K/yr Usage Tier",
    rawAcv: 72000,
    rolloutPhase: "Days 61–90 (Full Suite)",
    color: "#00E5FF",
    icon: "💻",
    pdfKillerSolution: "Automated Customer Data Migration & Onboarding Agent",
    corePainPoint:
      "Enterprise customer onboarding takes 60–90 days due to messy legacy CSV exports, schema mismatches, and bespoke integration hurdles—stalling Time-to-Value (TTV) and driving early churn.",
    buyerPersona: "VP of Customer Success & VP of Engineering",
    products: [
      {
        number: "01",
        name: "Automated Customer Data Migration & Schema Mapper",
        painPoint: "Customers provide messy, non-standard database dumps during onboarding.",
        workflow: "Ingests legacy tables, uses semantic vector matching to align fields, and transforms data into product schemas.",
        impact: "Cuts customer time-to-first-value from 60 days to 48 hours.",
      },
      {
        number: "02",
        name: "Legacy Export Auto-Cleaner & De-Duplicator",
        painPoint: "Dirty customer data with duplicate accounts ruins new CRM/ERP implementations.",
        workflow: "Identifies duplicate records using probabilistic entity matching and cleans malformed records.",
        impact: "Zero dirty data imported on Go-Live day.",
      },
      {
        number: "03",
        name: "Product Telemetry & Churn Risk Early Warning",
        painPoint: "Key enterprise customer accounts go cold without Customer Success knowing.",
        workflow: "Monitors daily active users, feature breadth usage, and flags accounts with declining momentum.",
        impact: "40% reduction in first-year customer churn.",
      },
      {
        number: "04",
        name: "Enterprise SSO & SCIM Provisioning Assistant",
        painPoint: "Configuring Okta / Azure AD SAML setups stalls mid-market to enterprise conversions.",
        workflow: "Tests SAML assertions, debugs attribute mapping errors, and guides customer IT automatically.",
        impact: "Reduces SSO setup time from 2 weeks to 15 minutes.",
      },
      {
        number: "05",
        name: "API Integration Health & Webhook Self-Healer",
        painPoint: "Silent webhook failures cause customer systems to desynchronize unnoticed.",
        workflow: "Monitors endpoint status codes, automatically backs off, retries, and regenerates broken payloads.",
        impact: "99.99% webhook delivery reliability.",
      },
      {
        number: "06",
        name: "SOC 2 & ISO Continuous Evidence Collector",
        painPoint: "Annual security audits require engineering to manually screenshot cloud configurations.",
        workflow: "Gathers proof of GitHub branch protection, AWS IAM MFA, and employee laptop encryption.",
        impact: "Hands-off, continuous SOC 2 audit compliance.",
      },
      {
        number: "07",
        name: "Usage-Based Metering & Billing Reconciler",
        painPoint: "Complex API usage events are dropped before reaching Stripe, causing revenue leakage.",
        workflow: "Reconciles raw telemetry events against Stripe invoice line items and alerts on discrepancies.",
        impact: "Recovers 3–7% in unbilled usage revenue.",
      },
      {
        number: "08",
        name: "Tier-1 Developer Support & Error Trace Diagnostic",
        painPoint: "Senior engineers spend hours triaging customer support tickets regarding obscure API errors.",
        workflow: "Inspects customer request IDs, reproduces errors in sandboxes, and returns code fixes.",
        impact: "65% instant resolution rate on technical support tickets.",
      },
      {
        number: "09",
        name: "Customer Success QBR Auto-Generator",
        painPoint: "Account managers take 10+ hours per client compiling Quarterly Business Review decks.",
        workflow: "Aggregates customer ROI metrics, total usage hours, and benchmark comparison slides into Keynote/PDF.",
        impact: "100% automated QBR generation for all enterprise accounts.",
      },
      {
        number: "10",
        name: "In-Tenant VPC Helm Chart Configurator",
        painPoint: "On-premise enterprise deployments fail on idiosyncratic Kubernetes configurations.",
        workflow: "Validates customer AWS EKS / GCP GKE cluster prerequisites and auto-generates tailored Helm charts.",
        impact: "Flawless on-premise private VPC deployments in hours.",
      },
    ],
    codeSnippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_API_KEY });

// sas-agintx: Data Migration & Onboarding Agent
const onboardingAgent = await client.agents.create({
  name: "sas-onboarding-migrator",
  model: "gpt-4o",
  vertical: "b2b-saas-tech",
  tools: ["csv-schema-mapper", "dedupe-engine", "db-importer"],
});

const migration = await onboardingAgent.run({
  customerId: "CUST-ACME-ENTERPRISE",
  sourceDump: "salesforce_legacy_export.csv",
  targetSchema: "agintx_crm_v2",
});

console.log(migration.matchedColumns); // 48 of 48 mapped
console.log(migration.dedupedRows);    // 1,842 duplicates resolved
console.log(migration.status);         // "Migration completed in 4 minutes"`,
  },
  {
    slug: "retail-ecommerce",
    prefix: "rtl-agintx",
    name: "Retail & E-Commerce",
    tagline: "Dynamic omnichannel pricing, inventory synchronization, and margin protection.",
    acv: "$84K/yr Enterprise",
    rawAcv: 84000,
    rolloutPhase: "Days 61–90 (Full Suite)",
    color: "#FF9100",
    icon: "🛍️",
    pdfKillerSolution: "Dynamic Omnichannel Pricing & Inventory Sync Agent",
    corePainPoint:
      "Retailers juggle Shopify, Amazon, and physical ERPs; unaligned pricing triggers Amazon buy-box suppression, stockouts destroy organic rank, and sudden overstock causes margin-killing fire sales.",
    buyerPersona: "VP of E-Commerce & Chief Commercial Officer (CCO)",
    products: [
      {
        number: "01",
        name: "Dynamic Omnichannel Pricing & Elasticity Agent",
        painPoint: "Manual pricing updates lag competitor discounts, losing the Amazon Buy Box.",
        workflow: "Monitors competitor scraper feeds, calculates price elasticity, and adjusts prices within floor boundaries.",
        impact: "14% increase in Buy Box share with protected margin floors.",
      },
      {
        number: "02",
        name: "Real-Time Omnichannel Inventory Sync Agent",
        painPoint: "Overselling inventory across Amazon and Shopify triggers marketplace cancellation penalties.",
        workflow: "Synchronizes stock levels across all storefronts in sub-second intervals from the warehouse ERP.",
        impact: "Zero stockout cancellations across marketplaces.",
      },
      {
        number: "03",
        name: "Safety-Stock Allocator & Store Transfer Optimizer",
        painPoint: "Certain retail stores run out of popular sizes while other stores sit on excess inventory.",
        workflow: "Generates optimal inter-store balancing transfers based on regional sell-through velocity.",
        impact: "Reduces inventory carrying costs by 18%.",
      },
      {
        number: "04",
        name: "Automated Catalog Enrichment & SEO Generator",
        painPoint: "Listing 10,000 new seasonal SKUs takes copywriters months to produce rich product copy.",
        workflow: "Ingests raw manufacturer specs and outputs platform-optimized titles, bullets, and keyword tags.",
        impact: "Instant catalog launch with 25% higher organic search traffic.",
      },
      {
        number: "05",
        name: "Markdown Cadence & End-of-Life Liquidation Planner",
        painPoint: "Holding obsolete fashion/electronics inventory too long forces devastating 70% clearance losses.",
        workflow: "Predicts terminal sell-through date and schedules progressive 10%–20% discounts to maximize total recovery.",
        impact: "+11% higher gross recovery on liquidated inventory.",
      },
      {
        number: "06",
        name: "Return Fraud & Wardrobing Anomaly Detector",
        painPoint: "Organized return fraud and 'wardrobing' drains 8% of retail margins.",
        workflow: "Cross-checks customer return history, carrier weight receipts, and serial numbers.",
        impact: "Prevents $1.2M annually in fraudulent return payouts.",
      },
      {
        number: "07",
        name: "Vendor Chargeback & Short-Shipment Disputer",
        painPoint: "Big-box retail buyers issue unfair chargebacks claiming missing barcodes or late delivery.",
        workflow: "Matches warehouse bills of lading and photo evidence to automatically contest vendor deductions.",
        impact: "Recovers 68% of disputed retail chargeback penalties.",
      },
      {
        number: "08",
        name: "Promotional Margin Guardrail Validator",
        painPoint: "Stackable coupon codes accidentally discount luxury items below wholesale cost.",
        workflow: "Tests coupon code combinations against minimum margin rules before promotions go live.",
        impact: "Eliminates catastrophic coupon-stacking margin leakage.",
      },
      {
        number: "09",
        name: "Supplier Dropship SLA & Delivery Monitor",
        painPoint: "Third-party dropship suppliers ship late, ruining customer reviews on direct-to-consumer sites.",
        workflow: "Tracks supplier order confirmation times and automatically reroutes orders when SLA thresholds break.",
        impact: "Ensures 99.2% on-time fulfillment for dropship catalogs.",
      },
      {
        number: "10",
        name: "Cart Abandonment & Dynamic Incentive Agent",
        painPoint: "Standard generic 10% discount emails fail to recover high-value hesitant shoppers.",
        workflow: "Evaluates shopper browsing history and crafts bespoke incentives based on margin thresholds.",
        impact: "22% lift in abandoned checkout recoveries.",
      },
    ],
    codeSnippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_API_KEY });

// rtl-agintx: Dynamic Pricing & Inventory Sync Agent
const pricingAgent = await client.agents.create({
  name: "rtl-pricing-engine",
  model: "gpt-4o",
  vertical: "retail-ecommerce",
  tools: ["amazon-sp-api", "shopify-inventory", "competitor-scraper"],
});

const sync = await pricingAgent.run({
  sku: "APPAREL-JKT-004",
  costOfGoods: 42.00,
  minMarginFloor: 0.35,
  competitorPrice: 79.99,
});

console.log(sync.optimizedPrice);    // $78.95 (Maintains 46% margin)
console.log(sync.buyBoxStatus);      // Won (98% probability)
console.log(sync.inventoryReserved); // 450 units synced across channels`,
  },
  {
    slug: "education-edtech",
    prefix: "edu-agintx",
    name: "Education & EdTech",
    tagline: "Automated credential verification, Title IV compliance packaging, and accreditation management.",
    acv: "$60K/yr Institution",
    rawAcv: 60000,
    rolloutPhase: "Days 61–90 (Full Suite)",
    color: "#00D68F",
    icon: "🎓",
    pdfKillerSolution: "Automated Credential Verification & Compliance Hub",
    corePainPoint:
      "Universities and EdTech platforms expend massive registrar labor manually validating transcripts, processing state professional licensure CE credits, and preparing high-stakes Title IV compliance audits.",
    buyerPersona: "University Provost, Dean of Academic Affairs & Chief Registrar",
    products: [
      {
        number: "01",
        name: "Automated Credential & Foreign Transcript Evaluator",
        painPoint: "Evaluating international transcripts for transfer credits takes registrars 4 to 6 weeks per applicant.",
        workflow: "Translates foreign syllabi, converts grading scales, and maps credit hours to institutional courses.",
        impact: "Reduces evaluation turnaround from 30 days to 5 minutes.",
      },
      {
        number: "02",
        name: "State Board Professional Licensure & CE Tracker",
        painPoint: "Licensed professionals (nurses, engineers, CPAs) risk losing credentials over unverified CE hours.",
        workflow: "Ingests continuing education certificates, validates accreditation validity, and reports to state boards.",
        impact: "100% on-time licensure renewal compliance.",
      },
      {
        number: "03",
        name: "Title IV Financial Aid & IPEDS Compliance Hub",
        painPoint: "Errors in annual IPEDS federal reporting trigger massive Title IV student financial aid audits.",
        workflow: "Cross-checks enrollment status, pell grant disbursements, and graduation rate reporting.",
        impact: "Zero federal financial aid compliance sanctions.",
      },
      {
        number: "04",
        name: "Course Articulation & Transfer Credit Engine",
        painPoint: "Community college transfer students abandon enrollment when credit articulation is opaque.",
        workflow: "Analyzes course catalog descriptions and auto-approves transfer course equivalencies.",
        impact: "Boosts transfer student matriculation by 28%.",
      },
      {
        number: "05",
        name: "Accreditation (HLC / SACSCOC) Evidence Compiler",
        painPoint: "Decennial university accreditation reviews require collecting thousands of binder documents.",
        workflow: "Aggregates faculty CVs, student learning outcome assessments, and committee meeting minutes.",
        impact: "Generates comprehensive accreditation self-study dossiers automatically.",
      },
      {
        number: "06",
        name: "Student Retention Risk & Early Warning Agent",
        painPoint: "At-risk undergraduate students drop out before academic advisors notice poor midterm engagement.",
        workflow: "Correlates LMS (Canvas/Blackboard) submission frequency with quiz grades to alert advisors.",
        impact: "Increases freshman retention by 7.4%.",
      },
      {
        number: "07",
        name: "Faculty Workload & Tenure Review Dossier Agent",
        painPoint: "Tracking faculty research grants, teaching loads, and service hours is completely siloed.",
        workflow: "Aggregates publication citations, student evaluations, and grant awards into standardized tenure dossiers.",
        impact: "Streamlines faculty promotion and tenure reviews.",
      },
      {
        number: "08",
        name: "Syllabus Accessibility & Section 508 ADA Validator",
        painPoint: "Online course materials fail federal accessibility standards, prompting OCR civil rights complaints.",
        workflow: "Scans PDFs, videos, and course readings for screen-reader compatibility and closed-caption quality.",
        impact: "100% ADA / Section 508 accessibility compliance.",
      },
      {
        number: "09",
        name: "Research Grant (NSF / NIH) Post-Award Auditor",
        painPoint: "Principal investigators misallocate lab supply expenses, triggering federal grant clawbacks.",
        workflow: "Validates grant ledger purchase orders against approved NSF/NIH budget justifications.",
        impact: "Prevents grant disallowance and federal clawbacks.",
      },
      {
        number: "10",
        name: "Alumni Outcomes & Gainful Employment Reporter",
        painPoint: "Career centers rely on outdated phone surveys to report alumni employment statistics.",
        workflow: "Correlates public professional registry profiles to verify graduate career placements.",
        impact: "94% verified alumni career placement audit tracking.",
      },
    ],
    codeSnippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_API_KEY });

// edu-agintx: Credential Verification & Compliance Hub
const eduAgent = await client.agents.create({
  name: "edu-credential-verifier",
  model: "gpt-4o",
  vertical: "education-edtech",
  tools: ["transcript-ocr", "wes-grading-scale", "title-iv-validator"],
});

const evaluation = await eduAgent.run({
  applicantId: "STU-INTL-9021",
  foreignInstitution: "University of Delhi",
  degreeAwarded: "Bachelor of Technology in Computer Science",
  transcriptFile: "delhi_transcript_official.pdf",
});

console.log(evaluation.usGpaEquivalent);   // 3.82 (Validated)
console.log(evaluation.creditsTransferred); // 94 credit hours
console.log(evaluation.accreditedStatus);   // Verified via NAAC Grade A+`,
  },
  {
    slug: "rfp-intelligence",
    prefix: "rfp-agintx",
    name: "RFP Intelligence & Procurement",
    tagline: "Autonomous RFP finder, ingestion engine, real-time compliance matrix, and win-rate optimization.",
    acv: "$140K/yr Enterprise Suite",
    rawAcv: 140000,
    rolloutPhase: "Phase 1 (Infrastructure & MVP)",
    color: "#00E5FF",
    icon: "📑",
    pdfKillerSolution: "Autonomous RFP Ingestion & Parsing Engine",
    corePainPoint:
      "The Request for Proposal (RFP) lifecycle remains one of the most resource-intensive bottlenecks: enterprise bidding teams spend 200+ hours per submission manually reviewing 100-page specs, cross-checking compliance matrices, and risking disqualification from expired opportunities or non-compliant clauses.",
    buyerPersona: "VP of Bid Management, Head of Government Affairs & Chief Commercial Officer",
    products: [
      {
        number: "01",
        name: "Autonomous RFP Ingestion & Parsing Engine",
        painPoint: "Solitations arrive in multi-format PDFs, Word docs, and portal forms with scattered requirements.",
        workflow: "Ingests uploaded documents, extracts structural hierarchy, separates compliance tables from narrative briefs, indexes into pgvector, and outputs standardized JSON schemas.",
        impact: "Shreds 150-page RFPs into structured requirements in 45 seconds.",
      },
      {
        number: "02",
        name: "Real-Time Compliance Matrix & Go/No-Go Agent",
        painPoint: "Bidding teams waste weeks pursuing low-margin bids where mandatory requirements cannot be met.",
        workflow: "Evaluates RFP requirements against past project wins, technical capacity, SLA risk, and margin requirements to recommend go/no-go decisions.",
        impact: "Generates definitive Go/No-Go verdict with win probability in under 5 minutes.",
      },
      {
        number: "03",
        name: "Dynamic Knowledge Base & Content Synthesizer",
        painPoint: "Proposals contain outdated security credentials, stale case studies, and obsolete technical specs.",
        workflow: "RAG-backed knowledge retrieval microservice ingesting company collateral, tagged by product line and recency, injecting verified snippets directly into templates.",
        impact: "100% verified compliance responses without manual copy-pasting.",
      },
      {
        number: "04",
        name: "Precision Competitive Intelligence & Pricing Simulator",
        painPoint: "Bidding blind on price leads to leaving money on the table or losing to incumbent margin slashing.",
        workflow: "Ingests historical win/loss bid data, industry benchmarks, and scope parameters to generate tiered pricing models (fixed-fee, T&M, value-based).",
        impact: "Maximizes win rates while protecting target 40%+ gross margins.",
      },
      {
        number: "05",
        name: "Collaborative Multi-Department Draft & Review Workspace",
        painPoint: "Legal, Finance, Engineering, and Sales work in conflicting offline email attachments on tight deadlines.",
        workflow: "Real-time collaborative workspace interface using WebSockets with task tags, countdown alerts, section ownership locks, and automated redline tracking.",
        impact: "Eliminates version control conflicts across cross-functional teams.",
      },
      {
        number: "06",
        name: "Automated Legal & Risk Redlining Guardian",
        painPoint: "Onerous unlimited liability clauses, abnormal indemnity caps, and data privacy mismatches sneak into contracts.",
        workflow: "NLP compliance checker trained on standard enterprise MSAs that flags company risk policy violations and suggests pre-approved legal fallback text.",
        impact: "Guarantees zero non-conforming contract liabilities.",
      },
      {
        number: "07",
        name: "Executive Summary & Persuasive Narrative Generator",
        painPoint: "Technical proposals read like dry manuals rather than compelling, buyer-aligned value propositions.",
        workflow: "Specialized LLM pipeline analyzing RFP introductions and evaluation criteria to synthesize a tailored 3-paragraph executive summary mirroring buyer psychology.",
        impact: "Consistently achieves top qualitative scores from evaluation committees.",
      },
      {
        number: "08",
        name: "Visual Diagram & Architecture Generator",
        painPoint: "Creating tailored architecture flowcharts and delivery milestone Gantt charts delays submissions.",
        workflow: "Translates unstructured technical specifications into Mermaid.js or SVG flowcharts, system architecture diagrams, and milestone Gantt charts.",
        impact: "Generates embeddable technical architecture diagrams in seconds.",
      },
      {
        number: "09",
        name: "Post-Submission Analytics & Win/Loss Feedback Loop",
        painPoint: "Debrief feedback from procurement officers is rarely codified into future bidding cycles.",
        workflow: "Tracks proposal performance metrics, compiles procurement committee feedback, and refines vector embeddings based on lost bid feedback.",
        impact: "+26% cumulative win-rate improvement year-over-year.",
      },
      {
        number: "10",
        name: "White-Label Client Submission Portal & Tracker",
        painPoint: "Submitting 500-page PDF attachments via email provides zero buyer engagement visibility.",
        workflow: "Replaces clunky email chains and PDFs with secure, interactive, branded micro-sites with magic links, interactive pricing calculators, video walkthroughs, and e-signatures.",
        impact: "Tracks buyer engagement dwell time and speeds contract execution by 3x.",
      },
    ],
    codeSnippet: `import { AgintX } from "@agintx/sdk";

const client = new AgintX({ apiKey: process.env.AGINTX_API_KEY });

// rfp-agintx: Autonomous RFP Ingestion, Compliance Matrix & Auto-Draft
const rfpAgent = await client.agents.create({
  name: "rfp-intelligence-suite",
  model: "claude-3-5-sonnet",
  vertical: "rfp-intelligence",
  tools: [
    "rfp-parser-pgvector",
    "compliance-matrix-scorer",
    "pricing-simulator",
    "legal-redline-guardian"
  ],
});

const analysis = await rfpAgent.run({
  solicitationFile: "s3://procurement-docs/ENTERPRISE_CLOUD_RFP_2026.pdf",
  companyCapabilities: ["SOC2-Type-II", "FedRAMP-High", "HIPAA", "Multi-Agent-CAE"],
  filterExpired: true,
  targetMarginFloor: 0.42,
});

console.log(analysis.goNoGoScore);      // 94/100 (RECOMMENDATION: GO)
console.log(analysis.complianceMatrix); // 142/142 mandatory requirements verified
console.log(analysis.pricingModel);     // Value-based: $4,850,000 (46% gross margin)
console.log(analysis.executiveSummary); // 3-paragraph tailored buyer pitch generated`,
  },
];

export const TOTAL_ACV_VALUE = INDUSTRY_VERTICALS.reduce((sum, v) => sum + v.rawAcv, 0);

export function getIndustryVertical(slug: string): IndustryVertical | undefined {
  return INDUSTRY_VERTICALS.find((v) => v.slug === slug);
}
