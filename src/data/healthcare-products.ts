export type TraceStatus = "ok" | "warn" | "error";

export type AgentTraceStep = {
  tool: string;
  detail: string;
  status: TraceStatus;
  ms: number;
};

export type ResultField = {
  label: string;
  value: string;
};

export type DemoScenario = {
  id: string;
  label: string;
  kind: "happy" | "exception";
  inputs: ResultField[];
  traces: AgentTraceStep[];
  result: {
    status: "approved" | "matched" | "exception" | "complete";
    headline: string;
    fields: ResultField[];
    notes: string[];
  };
};

export type HealthcareProduct = {
  slug: string;
  number: string;
  domain: string;
  name: string;
  acv: string;
  summary: string;
  workflow: string[];
  adapters: string[];
  demoHref: string;
};

export const HEALTHCARE_PRODUCTS: HealthcareProduct[] = [
  {
    slug: "eligibility",
    number: "01",
    domain: "Hospitals & Health Systems",
    name: "Real-Time Eligibility & Instant Patient Cost-Estimator Agent",
    acv: "$180K/yr SaaS",
    summary:
      "Check coverage and estimate patient responsibility at the point of scheduling — before the visit, not after the bill.",
    workflow: [
      "Ingest patient + payer + CPT from EHR",
      "Query clearinghouse eligibility (270/271)",
      "Apply plan copay / coinsurance / deductible",
      "Return patient-pay estimate + audit id",
    ],
    adapters: ["Epic", "Cerner", "Availity", "Change Healthcare"],
    demoHref: "/demo/healthcare/eligibility",
  },
  {
    slug: "edi-recon",
    number: "02",
    domain: "Ambulatory & Clinic Groups",
    name: "Automated Clearinghouse EDI 837/835 Reconciliation Engine",
    acv: "$96K/yr SaaS",
    summary:
      "Match outbound claims to inbound ERAs line-by-line and surface underpayments before they age out.",
    workflow: [
      "Load 837 claim batch",
      "Ingest corresponding 835 ERA",
      "Reconcile paid vs billed by line",
      "Flag unmatched / underpaid with variance",
    ],
    adapters: ["Waystar", "Availity", "Office Ally"],
    demoHref: "/demo/healthcare/edi-recon",
  },
  {
    slug: "denials",
    number: "03",
    domain: "Medical Billing Companies",
    name: "AI-Powered Denied Claims Appeal & Resubmission Pipeline",
    acv: "$120K/yr per Hub",
    summary:
      "Turn denial codes into appeal packets: missing-docs checklist, letter draft, and resubmit-ready claim.",
    workflow: [
      "Parse CARC/RARC denial codes",
      "Pull clinical evidence from EHR",
      "Draft appeal letter + checklist",
      "Package 837 resubmission",
    ],
    adapters: ["Epic", "Athena", "Change Healthcare"],
    demoHref: "/demo/healthcare/denials",
  },
  {
    slug: "telehealth-ledger",
    number: "04",
    domain: "Telehealth Platforms",
    name: "Cross-State Multi-Currency Patient Payment & Ledger Sync",
    acv: "$84K/yr Tiered",
    summary:
      "Settle visits when the patient, clinician, and billing entity sit in different states or currencies.",
    workflow: [
      "Resolve visit vs patient jurisdiction",
      "Validate clinician license in visit state",
      "Post ledger in visit + settlement currency",
      "Flag tax/nexus notes",
    ],
    adapters: ["Stripe", "Adyen", "State license boards"],
    demoHref: "/demo/healthcare/telehealth-ledger",
  },
  {
    slug: "lab-charge",
    number: "05",
    domain: "Laboratory Networks",
    name: "HL7/FHIR Lab Result to Billing Charge-Capture Automation",
    acv: "$150K/yr Enterprise",
    summary:
      "Convert ORU / DiagnosticReport events into CPT charge lines the moment the result posts.",
    workflow: [
      "Ingest HL7 ORU or FHIR DiagnosticReport",
      "Match accession to order",
      "Map tests to CPT / charge master",
      "Post charges or hold unsolicited results",
    ],
    adapters: ["Epic Beaker", "Cerner PathNet", "Sunquest"],
    demoHref: "/demo/healthcare/lab-charge",
  },
  {
    slug: "pharmacy-bi",
    number: "06",
    domain: "Specialty Pharmacies",
    name: "Real-Time Benefit Investigation & Copay Card Orchestrator",
    acv: "$110K/yr SaaS",
    summary:
      "Run benefit investigation, stack copay cards, and quote true patient out-of-pocket before dispense.",
    workflow: [
      "Lookup NDC + plan formulary",
      "Determine PA / step therapy",
      "Orchestrate copay card stack",
      "Return patient OOP + PA flag",
    ],
    adapters: ["CoverMyMeds", "NCPDP", "RxHub"],
    demoHref: "/demo/healthcare/pharmacy-bi",
  },
  {
    slug: "dental-claims",
    number: "07",
    domain: "Dental Support Orgs (DSOs)",
    name: "Automated X-Ray Attachment & Fast-Track Claims Adjudication",
    acv: "$72K/yr Network",
    summary:
      "Check bitewing / PAN attachments against CDT rules so claims don’t bounce for missing images.",
    workflow: [
      "Read CDT + charted procedure",
      "Verify required radiographic attachments",
      "Score completeness for the payer",
      "Predict adjudication window",
    ],
    adapters: ["Dentrix", "Eaglesoft", "NEA FastAttach"],
    demoHref: "/demo/healthcare/dental-claims",
  },
  {
    slug: "vbc-ledger",
    number: "08",
    domain: "Value-Based Care Networks",
    name: "Risk-Adjustment Multi-Payer Data Aggregation & Ledger",
    acv: "$240K/yr Enterprise",
    summary:
      "Roll member panels across payers into one RAF snapshot, gap list, and shared savings ledger.",
    workflow: [
      "Ingest claims + encounters per payer",
      "Compute RAF / HCC snapshot",
      "Surface stale or missing HCCs",
      "Post shared-savings ledger entries",
    ],
    adapters: ["Epic", "CMS HCC", "payer 837 extracts"],
    demoHref: "/demo/healthcare/vbc-ledger",
  },
  {
    slug: "behavioral-superbill",
    number: "09",
    domain: "Behavioral Health Clinics",
    name: "Superbill Auto-Generation & Out-of-Network Reimbursement Tracker",
    acv: "$60K/yr SaaS",
    summary:
      "Generate CPT/ICD superbills from session notes and track out-of-network reimbursement status.",
    workflow: [
      "Parse synthetic session note",
      "Require start/stop times",
      "Emit superbill (CPT + ICD-10)",
      "Track OON claim status",
    ],
    adapters: ["SimplePractice", "TherapyNotes", "Clearinghouse"],
    demoHref: "/demo/healthcare/behavioral-superbill",
  },
  {
    slug: "fhir-gateway",
    number: "10",
    domain: "Health Insurance Payers",
    name: "FHIR API Interoperability Mandate Compliance Gateway",
    acv: "$300K/yr Enterprise",
    summary:
      "Patient Access and Provider Directory FHIR gateway with consent/scope checks and audit latency.",
    workflow: [
      "Authenticate Patient Access request",
      "Check consent + SMART scopes",
      "Assemble FHIR Bundle",
      "Log mandate-compliant audit trail",
    ],
    adapters: ["CMS Patient Access", "SMART on FHIR", "Provider Directory"],
    demoHref: "/demo/healthcare/fhir-gateway",
  },
];

export const HEALTHCARE_SLUGS = HEALTHCARE_PRODUCTS.map((p) => p.slug);

export function getHealthcareProduct(slug: string) {
  return HEALTHCARE_PRODUCTS.find((p) => p.slug === slug);
}

export const HEALTHCARE_SCENARIOS: Record<string, DemoScenario[]> = {
  eligibility: [
    {
      id: "active-ppo",
      label: "Active PPO · colonoscopy",
      kind: "happy",
      inputs: [
        { label: "Patient", value: "Avery Patel · SYN-10482 (synthetic)" },
        { label: "Payer", value: "Blue Shield of California PPO" },
        { label: "Member ID", value: "XBC-44019283" },
        { label: "CPT", value: "45378 — Colonoscopy, diagnostic" },
        { label: "Place of service", value: "22 — On Campus-Outpatient Hospital" },
      ],
      traces: [
        { tool: "ehr-connector", detail: "Pulled demographics + insurance from Epic (sandbox)", status: "ok", ms: 180 },
        { tool: "eligibility-270", detail: "X12 270 submitted to Availity test payer", status: "ok", ms: 420 },
        { tool: "plan-benefits", detail: "271 active · copay $40 · coinsurance 20% · deductible remaining $320", status: "ok", ms: 90 },
        { tool: "cost-estimator", detail: "Allowed $1,840 · patient estimate $368", status: "ok", ms: 70 },
      ],
      result: {
        status: "approved",
        headline: "Coverage active · patient estimate $368",
        fields: [
          { label: "Eligibility", value: "Active through 2026-12-31" },
          { label: "Plan", value: "PPO Gold 20" },
          { label: "Allowed amount", value: "$1,840.00" },
          { label: "Deductible remaining", value: "$320.00" },
          { label: "Coinsurance", value: "20%" },
          { label: "Patient responsibility", value: "$368.00" },
          { label: "Audit ID", value: "AUD-ELIG-2026-09112" },
        ],
        notes: ["Estimate is not a guarantee of payment.", "Prior auth not required for 45378 on this plan."],
      },
    },
    {
      id: "inactive",
      label: "Inactive coverage",
      kind: "exception",
      inputs: [
        { label: "Patient", value: "Jordan Miles · SYN-22810 (synthetic)" },
        { label: "Payer", value: "Aetna Commercial" },
        { label: "Member ID", value: "W123456789" },
        { label: "CPT", value: "99214 — Office visit, established" },
      ],
      traces: [
        { tool: "ehr-connector", detail: "Pulled insurance from Cerner sandbox", status: "ok", ms: 140 },
        { tool: "eligibility-270", detail: "X12 270 submitted", status: "ok", ms: 390 },
        { tool: "plan-benefits", detail: "271 AAA*72 — coverage terminated 2026-08-31", status: "error", ms: 80 },
      ],
      result: {
        status: "exception",
        headline: "Coverage inactive — collect self-pay or new insurance",
        fields: [
          { label: "Eligibility", value: "Terminated 2026-08-31" },
          { label: "Reason", value: "AAA*72 Inactive coverage" },
          { label: "Patient responsibility", value: "Self-pay (no estimate from plan)" },
          { label: "Audit ID", value: "AUD-ELIG-2026-09113" },
        ],
        notes: ["Agent paused charge capture.", "Front desk prompted to collect alternate coverage."],
      },
    },
  ],

  "edi-recon": [
    {
      id: "batch-matched",
      label: "Claim batch vs ERA",
      kind: "happy",
      inputs: [
        { label: "837 batch", value: "CLM-BATCH-4419 · 12 claims · $48,220 billed" },
        { label: "835 ERA", value: "ERA-835-9921 · date 2026-10-18" },
        { label: "Payer", value: "UHC Oxford" },
        { label: "TIN", value: "12-3456789" },
      ],
      traces: [
        { tool: "edi-837-parser", detail: "Parsed 12 claims / 41 service lines", status: "ok", ms: 210 },
        { tool: "edi-835-parser", detail: "Parsed ERA · 11 claims paid, 1 underpaid", status: "ok", ms: 190 },
        { tool: "line-matcher", detail: "40/41 lines matched on CLP/SVC", status: "ok", ms: 120 },
        { tool: "variance-engine", detail: "Underpay $240 on CLM-4419-08 (CO-45)", status: "warn", ms: 60 },
      ],
      result: {
        status: "matched",
        headline: "11 matched · 1 underpaid · $240 variance",
        fields: [
          { label: "Matched", value: "11 claims · $45,980 paid" },
          { label: "Underpaid", value: "CLM-4419-08 · billed $1,200 · paid $960" },
          { label: "Unmatched 837", value: "None" },
          { label: "Missing 835", value: "None" },
          { label: "CARC", value: "CO-45 Charges exceed fee schedule" },
          { label: "Work queue", value: "UNDERPAY-Q · assigned billing" },
        ],
        notes: ["Variance within contracted allowable — no appeal recommended."],
      },
    },
    {
      id: "missing-835",
      label: "Missing 835",
      kind: "exception",
      inputs: [
        { label: "837 batch", value: "CLM-BATCH-4502 · 6 claims · $9,400 billed" },
        { label: "835 ERA", value: "Not received · expected 2026-10-20" },
        { label: "Payer", value: "Cigna" },
      ],
      traces: [
        { tool: "edi-837-parser", detail: "Parsed 6 claims", status: "ok", ms: 150 },
        { tool: "era-inbox", detail: "No 835 for payer+date window", status: "error", ms: 80 },
        { tool: "aging-check", detail: "Claims day-12 · below 835 SLA of 14 days", status: "warn", ms: 40 },
      ],
      result: {
        status: "exception",
        headline: "No ERA on file — batch held in unmatched queue",
        fields: [
          { label: "Unmatched 837", value: "6 claims · $9,400" },
          { label: "Next action", value: "Poll clearinghouse tomorrow; escalate at day 14" },
          { label: "Ticket", value: "ERA-MISS-4502" },
        ],
        notes: ["Agent will not auto-write-off. Follow-up scheduled."],
      },
    },
  ],

  denials: [
    {
      id: "co16-appeal",
      label: "CO-16 missing info",
      kind: "happy",
      inputs: [
        { label: "Claim", value: "CLM-2026-77120" },
        { label: "Denial", value: "CO-16 Claim/service lacks information" },
        { label: "RARC", value: "N216 Incomplete/invalid demographics" },
        { label: "CPT", value: "70553 — MRI brain w/o & w contrast" },
        { label: "DOS", value: "2026-09-12" },
      ],
      traces: [
        { tool: "denial-parser", detail: "Mapped CO-16 / N216 → missing referring NPI", status: "ok", ms: 90 },
        { tool: "ehr-connector", detail: "Retrieved referring NPI 1497xxxxxxx (de-identified)", status: "ok", ms: 200 },
        { tool: "appeal-drafter", detail: "Drafted 1-page appeal + corrected 837", status: "ok", ms: 310 },
        { tool: "packet-builder", detail: "Resubmit packet RESUB-77120 ready", status: "ok", ms: 80 },
      ],
      result: {
        status: "complete",
        headline: "Appeal packet ready · missing referring NPI supplied",
        fields: [
          { label: "Checklist", value: "Referring NPI · order · demographics ✓" },
          { label: "Letter", value: "Appeal-77120.md (draft)" },
          { label: "Resubmit", value: "837P replacement · freq 7" },
          { label: "Timely filing", value: "71 days remaining" },
        ],
        notes: ["Human gate recommended before submit.", "No clinical medical-necessity narrative required for CO-16."],
      },
    },
    {
      id: "timely-filing",
      label: "Timely filing dead",
      kind: "exception",
      inputs: [
        { label: "Claim", value: "CLM-2025-11082" },
        { label: "Denial", value: "CO-29 Time limit for filing has expired" },
        { label: "DOS", value: "2025-06-02" },
        { label: "Payer limit", value: "90 days" },
      ],
      traces: [
        { tool: "denial-parser", detail: "CO-29 timely filing", status: "ok", ms: 70 },
        { tool: "calendar-check", detail: "DOS + 90 days = 2025-08-31 · expired", status: "error", ms: 40 },
        { tool: "appeal-drafter", detail: "Skipped — no good-cause exception on file", status: "warn", ms: 30 },
      ],
      result: {
        status: "exception",
        headline: "Timely-filing window closed — do not resubmit",
        fields: [
          { label: "Write-off class", value: "TF-EXPIRED" },
          { label: "Patient bill", value: "Do not balance-bill (contracted)" },
          { label: "Next action", value: "QA original submit date; if clearinghouse delay, open good-cause" },
        ],
        notes: ["Agent blocked automated appeal to avoid payer noise."],
      },
    },
  ],

  "telehealth-ledger": [
    {
      id: "ca-tx-usd",
      label: "CA clinician · TX patient",
      kind: "happy",
      inputs: [
        { label: "Visit", value: "TH-88421 · 2026-10-21 14:00 PT" },
        { label: "Clinician state", value: "California (licensed CA + TX compact)" },
        { label: "Patient state", value: "Texas" },
        { label: "Charge", value: "$185.00 USD" },
        { label: "Settlement FX", value: "USD (no conversion)" },
      ],
      traces: [
        { tool: "license-registry", detail: "TX compact license active through 2027-03", status: "ok", ms: 160 },
        { tool: "nexus-engine", detail: "Sales-tax nexus: TX telehealth exempt for this POS", status: "ok", ms: 70 },
        { tool: "ledger-sync", detail: "Posted visit USD 185 / settlement USD 185", status: "ok", ms: 90 },
      ],
      result: {
        status: "complete",
        headline: "License valid · ledger synced in USD",
        fields: [
          { label: "Jurisdiction", value: "Visit TX · clinician CA compact" },
          { label: "Tax/nexus", value: "No TX sales tax on professional service" },
          { label: "Ledger", value: "AR-TH-88421 · settled" },
          { label: "Payout", value: "$185.00 USD · ACH next window" },
        ],
        notes: ["Store-of-record remains US-East HIPAA workspace."],
      },
    },
    {
      id: "no-license",
      label: "License not valid",
      kind: "exception",
      inputs: [
        { label: "Visit", value: "TH-88490 · NY patient" },
        { label: "Clinician state", value: "Florida only" },
        { label: "Patient state", value: "New York" },
        { label: "Charge", value: "€120.00 EUR (intl self-pay)" },
      ],
      traces: [
        { tool: "license-registry", detail: "No NY license or compact for NPI", status: "error", ms: 150 },
        { tool: "ledger-sync", detail: "Hold — cannot post professional fee", status: "warn", ms: 40 },
      ],
      result: {
        status: "exception",
        headline: "Visit blocked — clinician not licensed in NY",
        fields: [
          { label: "Action", value: "Do not complete encounter; offer NY-licensed pool" },
          { label: "Ledger", value: "Not posted" },
          { label: "FX", value: "EUR quote unused" },
        ],
        notes: ["Compliance hold logged COMP-TH-88490."],
      },
    },
  ],

  "lab-charge": [
    {
      id: "cbc-panel",
      label: "CBC panel result",
      kind: "happy",
      inputs: [
        { label: "Message", value: "FHIR DiagnosticReport DR-33012" },
        { label: "Accession", value: "LAB-ACC-90821" },
        { label: "Order", value: "CBC with differential · ordering NPI on file" },
        { label: "Result", value: "Final · 2026-10-22T09:14Z" },
      ],
      traces: [
        { tool: "fhir-ingest", detail: "DiagnosticReport + Observation bundle accepted", status: "ok", ms: 110 },
        { tool: "order-matcher", detail: "Accession LAB-ACC-90821 matched to order ORD-55102", status: "ok", ms: 80 },
        { tool: "charge-master", detail: "Mapped to CPT 85025 × 1 · $42.00", status: "ok", ms: 60 },
      ],
      result: {
        status: "complete",
        headline: "Charge captured · CPT 85025",
        fields: [
          { label: "CPT", value: "85025 — Complete CBC w/ auto diff" },
          { label: "Charge", value: "$42.00" },
          { label: "Missing-order flag", value: "None" },
          { label: "Billing status", value: "Queued to 837" },
        ],
        notes: ["Result stored in sandbox only — synthetic LOINC values."],
      },
    },
    {
      id: "unsolicited",
      label: "Unsolicited result",
      kind: "exception",
      inputs: [
        { label: "Message", value: "HL7 ORU^R01 MSH-10=MSG9921" },
        { label: "Accession", value: "LAB-ACC-orphan-14" },
        { label: "Order", value: "None in LIS" },
      ],
      traces: [
        { tool: "hl7-ingest", detail: "ORU parsed · OBX×4", status: "ok", ms: 100 },
        { tool: "order-matcher", detail: "No accession / placer order found", status: "error", ms: 70 },
        { tool: "charge-master", detail: "Charge hold — unsolicited result", status: "warn", ms: 20 },
      ],
      result: {
        status: "exception",
        headline: "Unsolicited result — no charge posted",
        fields: [
          { label: "Queue", value: "UNSOLICITED-RESULTS" },
          { label: "Action", value: "Lab accessioning to attach order or discard" },
          { label: "CPT", value: "—" },
        ],
        notes: ["Prevents phantom charges from reflex or misrouted ORUs."],
      },
    },
  ],

  "pharmacy-bi": [
    {
      id: "humira-stack",
      label: "Specialty NDC + copay card",
      kind: "happy",
      inputs: [
        { label: "NDC", value: "00074-0554-02 (synthetic specialty)" },
        { label: "Plan", value: "ESI / Commercial PPO" },
        { label: "Days supply", value: "28" },
        { label: "Pharmacy", value: "Agintx Specialty (sandbox)" },
      ],
      traces: [
        { tool: "formulary-lookup", detail: "Tier 3 specialty · PA required", status: "ok", ms: 200 },
        { tool: "pa-check", detail: "ePA initiated · CoverMyMeds sandbox id PA-441", status: "ok", ms: 180 },
        { tool: "copay-orchestrator", detail: "Manufacturer card $5 copay · remaining $4,800 cap", status: "ok", ms: 140 },
      ],
      result: {
        status: "complete",
        headline: "PA required · patient OOP $5 with copay card",
        fields: [
          { label: "PA needed", value: "Yes — ePA PA-441 submitted" },
          { label: "Plan copay before card", value: "$150.00" },
          { label: "Copay card", value: "Active · $5 fill" },
          { label: "Patient OOP", value: "$5.00" },
          { label: "Card remaining", value: "$4,800.00 annual" },
        ],
        notes: ["Dispense held until PA approval in production; demo continues."],
      },
    },
    {
      id: "card-exhausted",
      label: "Copay card exhausted",
      kind: "exception",
      inputs: [
        { label: "NDC", value: "00074-0554-02" },
        { label: "Plan", value: "ESI / Commercial PPO" },
        { label: "Copay card", value: "MFR-CARD-992 · $0 remaining" },
      ],
      traces: [
        { tool: "formulary-lookup", detail: "Tier 3 · PA on file approved", status: "ok", ms: 160 },
        { tool: "copay-orchestrator", detail: "Card cap exhausted YTD", status: "error", ms: 90 },
      ],
      result: {
        status: "exception",
        headline: "Copay assistance exhausted — quote plan OOP",
        fields: [
          { label: "PA needed", value: "No (approved)" },
          { label: "Patient OOP", value: "$150.00 plan copay" },
          { label: "Next action", value: "Offer foundation grant search" },
        ],
        notes: ["Agent will not apply a depleted card."],
      },
    },
  ],

  "dental-claims": [
    {
      id: "crown-with-xray",
      label: "Crown + bitewings on file",
      kind: "happy",
      inputs: [
        { label: "CDT", value: "D2740 — Crown porcelain/ceramic" },
        { label: "Tooth", value: "14" },
        { label: "Attachments", value: "Bitewings BW-14 + PA-14" },
        { label: "Payer", value: "Delta Dental PPO" },
      ],
      traces: [
        { tool: "cdt-rules", detail: "D2740 requires pre-op PA + bitewing < 12 mo", status: "ok", ms: 80 },
        { tool: "attachment-check", detail: "NEA-style images present and dated 2026-09-02", status: "ok", ms: 110 },
        { tool: "adjudication-eta", detail: "Fast-track eligible · 4–6 business days", status: "ok", ms: 50 },
      ],
      result: {
        status: "complete",
        headline: "Attachments complete · fast-track 4–6 days",
        fields: [
          { label: "Completeness", value: "100% (PA + BW)" },
          { label: "Predicted adjudication", value: "4–6 business days" },
          { label: "Pre-D", value: "Not required for this payer/CDT pair" },
        ],
        notes: ["Images are placeholders — no real radiographs stored."],
      },
    },
    {
      id: "missing-bw",
      label: "Missing bitewing",
      kind: "exception",
      inputs: [
        { label: "CDT", value: "D2740 — Crown porcelain/ceramic" },
        { label: "Tooth", value: "19" },
        { label: "Attachments", value: "PA-19 only" },
      ],
      traces: [
        { tool: "cdt-rules", detail: "Bitewing required", status: "ok", ms: 70 },
        { tool: "attachment-check", detail: "BW missing", status: "error", ms: 90 },
      ],
      result: {
        status: "exception",
        headline: "Hold claim — missing bitewing for tooth 19",
        fields: [
          { label: "Completeness", value: "50%" },
          { label: "Predicted adjudication", value: "Would deny N356 without BW" },
          { label: "Action", value: "Request BW from clinic before submit" },
        ],
        notes: ["Fast-track disabled until attachment complete."],
      },
    },
  ],

  "vbc-ledger": [
    {
      id: "raf-panel",
      label: "3-payer member panel",
      kind: "happy",
      inputs: [
        { label: "Panel", value: "ACO-NORTH · 1,240 attributed members (synthetic)" },
        { label: "Payers", value: "CMS MA · BCBS · UHC" },
        { label: "Period", value: "MY 2026 YTD" },
      ],
      traces: [
        { tool: "claims-ingest", detail: "Merged 3 payer extracts · 18,402 encounters", status: "ok", ms: 320 },
        { tool: "hcc-engine", detail: "CMS-HCC V28 · mean RAF 1.12", status: "ok", ms: 240 },
        { tool: "gap-finder", detail: "86 recapture opportunities · 12 stale HCCs", status: "ok", ms: 130 },
        { tool: "shared-ledger", detail: "YTD shared savings accrual $1.04M", status: "ok", ms: 70 },
      ],
      result: {
        status: "complete",
        headline: "RAF 1.12 · 86 gaps · $1.04M shared-savings accrual",
        fields: [
          { label: "Mean RAF", value: "1.12 (prior year 1.08)" },
          { label: "Stale HCC", value: "12 members — recapture this quarter" },
          { label: "Gap list", value: "Diabetes w/o complication undocumented × 31" },
          { label: "Ledger", value: "VBC-LEDGER-ACO-NORTH · posted" },
        ],
        notes: ["Synthetic RAF only — not for CMS submission."],
      },
    },
    {
      id: "stale-hcc",
      label: "Stale HCC cohort",
      kind: "exception",
      inputs: [
        { label: "Panel", value: "POD-WEST · 80 members" },
        { label: "Payers", value: "CMS MA" },
        { label: "Issue", value: "HCC 18 last documented 2024" },
      ],
      traces: [
        { tool: "hcc-engine", detail: "HCC 18 aged out of 12-month window for 22 members", status: "warn", ms: 180 },
        { tool: "gap-finder", detail: "RAF at risk −0.318 if not recaptured", status: "error", ms: 90 },
      ],
      result: {
        status: "exception",
        headline: "Stale HCC 18 — RAF at risk −0.318",
        fields: [
          { label: "Members", value: "22 need diabetes recapture visit" },
          { label: "Action", value: "Outreach worklist sent to care management" },
          { label: "Ledger", value: "Accrual haircut reserved $96K" },
        ],
        notes: ["Agent does not code from claims alone — chart review required."],
      },
    },
  ],

  "behavioral-superbill": [
    {
      id: "90837",
      label: "60-min psychotherapy",
      kind: "happy",
      inputs: [
        { label: "Note", value: "SYN note · 2026-10-20 · 10:00–10:53 · supportive + CBT" },
        { label: "Clinician", value: "LCSW · NPI sandbox" },
        { label: "Payer", value: "Out-of-network BCBS" },
      ],
      traces: [
        { tool: "note-parser", detail: "Start 10:00 / stop 10:53 · 53 minutes", status: "ok", ms: 120 },
        { tool: "cpt-coder", detail: "90837 (60 min) · ICD-10 F41.1", status: "ok", ms: 90 },
        { tool: "oon-tracker", detail: "Superbill SB-22018 · patient submit OON", status: "ok", ms: 70 },
      ],
      result: {
        status: "complete",
        headline: "Superbill ready · 90837 / F41.1",
        fields: [
          { label: "CPT", value: "90837 — Psychotherapy, 53 min" },
          { label: "ICD-10", value: "F41.1 Generalized anxiety disorder" },
          { label: "Charge", value: "$185.00" },
          { label: "OON status", value: "Packet emailed to patient · tracker OON-22018" },
        ],
        notes: ["Times present — add-on 90840 not indicated."],
      },
    },
    {
      id: "no-times",
      label: "Missing start/stop",
      kind: "exception",
      inputs: [
        { label: "Note", value: "SYN note · “patient discussed sleep hygiene”" },
        { label: "Times", value: "Not documented" },
      ],
      traces: [
        { tool: "note-parser", detail: "No start/stop timestamps", status: "error", ms: 80 },
        { tool: "cpt-coder", detail: "Blocked 90834/90837 without duration", status: "warn", ms: 20 },
      ],
      result: {
        status: "exception",
        headline: "Cannot generate superbill — missing start/stop times",
        fields: [
          { label: "Action", value: "Return note to clinician for duration" },
          { label: "OON tracker", value: "Not opened" },
        ],
        notes: ["Payers downcode or deny psychotherapy without documented time."],
      },
    },
  ],

  "fhir-gateway": [
    {
      id: "patient-access",
      label: "Patient Access Bundle",
      kind: "happy",
      inputs: [
        { label: "Request", value: "GET /Patient/{id}/$everything" },
        { label: "App", value: "Sandbox patient portal (SMART)" },
        { label: "Scopes", value: "patient/*.read" },
        { label: "Consent", value: "Granted 2026-01-15" },
      ],
      traces: [
        { tool: "smart-auth", detail: "Bearer valid · patient context SYN-PA-01", status: "ok", ms: 60 },
        { tool: "consent-check", detail: "Patient Access consent active", status: "ok", ms: 40 },
        { tool: "fhir-assemble", detail: "Bundle 48 entries · Patient, Coverage, EOB, ExplanationOfBenefit", status: "ok", ms: 180 },
      ],
      result: {
        status: "complete",
        headline: "200 OK · FHIR Bundle · 48 entries · 42 ms p95",
        fields: [
          { label: "ResourceType", value: "Bundle (searchset)" },
          { label: "Consent", value: "Valid" },
          { label: "Latency", value: "42 ms (sandbox)" },
          { label: "Audit", value: "FHIR-ACC-2026-10021" },
        ],
        notes: ["CMS Patient Access mandate path — synthetic resources only."],
      },
    },
    {
      id: "no-consent",
      label: "Missing consent",
      kind: "exception",
      inputs: [
        { label: "Request", value: "GET /Patient/{id}/Coverage" },
        { label: "App", value: "Third-party wellness app" },
        { label: "Consent", value: "Revoked 2026-09-01" },
      ],
      traces: [
        { tool: "smart-auth", detail: "Token valid" , status: "ok", ms: 50 },
        { tool: "consent-check", detail: "No active Patient Access consent", status: "error", ms: 35 },
      ],
      result: {
        status: "exception",
        headline: "403 Forbidden — missing patient consent",
        fields: [
          { label: "HTTP", value: "403" },
          { label: "OperationOutcome", value: "consent-inactive" },
          { label: "Latency", value: "18 ms" },
          { label: "Audit", value: "FHIR-DENY-2026-10022" },
        ],
        notes: ["Gateway never returns clinical resources without consent."],
      },
    },
  ],
};

export function getScenarios(slug: string): DemoScenario[] {
  return HEALTHCARE_SCENARIOS[slug] ?? [];
}
