import { Briefcase } from "lucide-react";
import { ActivityMark, type PlaybookIcon } from "@/components/playbook/icons";

export type LayerDefinition = {
  id: string;
  title: string;
  icon: PlaybookIcon;
  description: string;
};

export type MomentumSubstep = {
  id: string;
  title: string;
  bullets: string[];
};

export type MomentumStep = {
  id: string;
  label: string;
  substeps: MomentumSubstep[];
};

export type ConstructionTrack = {
  id: string;
  label: string;
  overlays: string[];
};

export type AccordionItemData = {
  title: string;
  body: string;
  open: boolean;
};

export type MockStepData = {
  title: string;
  content: string[];
  open: boolean;
};

export const layers: LayerDefinition[] = [
  {
    id: "momentum",
    title: "Deal Momentum",
    description: "",
    icon: ActivityMark,
  },
  {
    id: "construction",
    title: "Deal Construction",
    description: "",
    icon: Briefcase,
  },
];

export const momentumSteps: MomentumStep[] = [
  {
    id: "1",
    label: "Contact",
    substeps: [
      {
        id: "1.1",
        title: "Contact Channels",
        bullets: [
          "Cold outbound (email / call / LinkedIn)",
          "Social / warm outreach",
          "Events / conferences",
          "Referrals / introductions",
          "Inbound",
          "Existing relationships",
        ],
      },
      {
        id: "1.2",
        title: "Persona Targeting",
        bullets: [
          "Right entry persona",
          "Role vs influence vs access",
          "Single-thread vs multi-thread",
        ],
      },
      {
        id: "1.3",
        title: "Problem Hypothesis",
        bullets: ["Expected problem", "Why this company", "Why this persona"],
      },
      {
        id: "1.4",
        title: "First Touch Execution",
        bullets: [
          "Problem-first messaging",
          "Channel-specific execution",
          "Call vs async nuance",
        ],
      },
      {
        id: "1.5",
        title: "Follow-up System",
        bullets: ["Multi-touch sequence", "Message variation", "Stop vs persist"],
      },
      {
        id: "1.6",
        title: "Contact Qualification",
        bullets: [
          "Real vs fake signal",
          "Response vs engagement vs intent",
          "Early disqualification",
        ],
      },
    ],
  },
  {
    id: "2",
    label: "Interest",
    substeps: [
      {
        id: "2.1",
        title: "Signal Validation",
        bullets: ["Politeness vs real interest", "Passive vs active engagement"],
      },
      {
        id: "2.2",
        title: "Curiosity Build",
        bullets: ["Insight hooks", "Tension creation"],
      },
      {
        id: "2.3",
        title: "Conversation Framing",
        bullets: ["Agenda setting", "Tone control"],
      },
      {
        id: "2.4",
        title: "Micro Qualification",
        bullets: ["Relevance", "Ownership", "Urgency"],
      },
      {
        id: "2.5",
        title: "Transition to Discovery",
        bullets: ["Secure time", "Set expectations"],
      },
    ],
  },
  {
    id: "3",
    label: "Discovery",
    substeps: [
      {
        id: "3.1",
        title: "Problem Mapping",
        bullets: ["Surface problem", "Root cause", "Frequency"],
      },
      {
        id: "3.2",
        title: "Impact Quantification",
        bullets: ["Business impact", "Personal impact"],
      },
      {
        id: "3.3",
        title: "Current State",
        bullets: ["Existing solutions", "Gaps"],
      },
      {
        id: "3.4",
        title: "Urgency & Trigger",
        bullets: ["Why now", "Cost of inaction"],
      },
      {
        id: "3.5",
        title: "Stakeholder Mapping",
        bullets: ["Stakeholders involved", "Decision owner"],
      },
      {
        id: "3.6",
        title: "Qualification Depth",
        bullets: ["Budget", "Authority", "Timeline"],
      },
      {
        id: "3.7",
        title: "Problem Reframing",
        bullets: ["Sharpen problem clarity"],
      },
    ],
  },
  {
    id: "4",
    label: "Validation",
    substeps: [
      {
        id: "4.1",
        title: "Solution Mapping",
        bullets: ["Use-case based demo"],
      },
      {
        id: "4.2",
        title: "Feature -> Problem Fit",
        bullets: ["Map to discovery"],
      },
      {
        id: "4.3",
        title: "Objection Surfacing",
        bullets: ["Confusion", "Skepticism", "Constraints"],
      },
      {
        id: "4.4",
        title: "Value Articulation",
        bullets: ["Outcomes", "Before vs after"],
      },
      {
        id: "4.5",
        title: "Buyer Confirmation",
        bullets: ["Problem solved acknowledgment"],
      },
    ],
  },
  {
    id: "5",
    label: "Internal Discussion",
    substeps: [
      {
        id: "5.1",
        title: "Champion Identification",
        bullets: ["Internal owner"],
      },
      {
        id: "5.2",
        title: "Internal Narrative",
        bullets: ["Problem story", "Value story"],
      },
      {
        id: "5.3",
        title: "Enablement Assets",
        bullets: ["Decks", "One-pagers", "ROI summary"],
      },
      {
        id: "5.4",
        title: "Process Mapping",
        bullets: ["Decision flow"],
      },
      {
        id: "5.5",
        title: "Pre-empt Objections",
        bullets: ["Finance", "Tech", "Leadership"],
      },
    ],
  },
  {
    id: "6",
    label: "Stakeholder Expansion",
    substeps: [
      {
        id: "6.1",
        title: "Stakeholder Mapping",
        bullets: ["Economic buyer", "Technical buyer", "Users", "Blockers"],
      },
      {
        id: "6.2",
        title: "Persona Messaging",
        bullets: ["Tailored narratives"],
      },
      {
        id: "6.3",
        title: "Risk Mitigation",
        bullets: ["Address concerns"],
      },
      {
        id: "6.4",
        title: "Consensus Building",
        bullets: ["Align stakeholders"],
      },
    ],
  },
  {
    id: "7",
    label: "Pilot",
    substeps: [
      {
        id: "7.1",
        title: "Scope Definition",
        bullets: ["Included vs excluded"],
      },
      {
        id: "7.2",
        title: "Success Metrics",
        bullets: ["Measurable outcomes"],
      },
      {
        id: "7.3",
        title: "Execution Support",
        bullets: ["High-touch support"],
      },
      {
        id: "7.4",
        title: "Progress Tracking",
        bullets: ["Check-ins", "Reporting"],
      },
      {
        id: "7.5",
        title: "Outcome Evaluation",
        bullets: ["Success vs failure"],
      },
    ],
  },
  {
    id: "8",
    label: "Budget Discussion",
    substeps: [
      {
        id: "8.1",
        title: "Value Anchoring",
        bullets: ["ROI"],
      },
      {
        id: "8.2",
        title: "Pricing Structure",
        bullets: ["Packages", "Tiers"],
      },
      {
        id: "8.3",
        title: "Budget Validation",
        bullets: ["Availability", "Approval path"],
      },
      {
        id: "8.4",
        title: "Negotiation Handling",
        bullets: ["Pushback"],
      },
    ],
  },
  {
    id: "9",
    label: "Procurement",
    substeps: [
      {
        id: "9.1",
        title: "Vendor Onboarding",
        bullets: ["Documentation"],
      },
      {
        id: "9.2",
        title: "Legal Review",
        bullets: ["Contracts", "Compliance"],
      },
      {
        id: "9.3",
        title: "Security Checks",
        bullets: ["IT / data"],
      },
      {
        id: "9.4",
        title: "Final Negotiation",
        bullets: ["Terms closure"],
      },
    ],
  },
  {
    id: "10",
    label: "Close",
    substeps: [
      {
        id: "10.1",
        title: "Agreement Signing",
        bullets: ["Formal closure"],
      },
      {
        id: "10.2",
        title: "Implementation Planning",
        bullets: ["Onboarding"],
      },
      {
        id: "10.3",
        title: "Stakeholder Alignment",
        bullets: ["Roles"],
      },
      {
        id: "10.4",
        title: "Success Definition",
        bullets: ["Metrics"],
      },
    ],
  },
];

export const constructionTracks: ConstructionTrack[] = [
  {
    id: "0",
    label: "Pre-Contact",
    overlays: ["Worldview", "Industry forces", "ICP clarity"],
  },
  {
    id: "1",
    label: "Contact",
    overlays: [
      "Entry via channel",
      "Problem hypothesis activation",
      "Persona relevance check",
    ],
  },
  {
    id: "2",
    label: "Interest",
    overlays: [
      "Persona understanding",
      "Frame control",
      "Trigger identification",
      "Pain surface",
      "Stakes tease",
    ],
  },
  {
    id: "3",
    label: "Discovery",
    overlays: [
      "Context / problem / impact",
      "Problem depth",
      "Do-nothing cost",
      "Value hypothesis",
      "Stakeholder discovery",
      "Commitment signal",
    ],
  },
  {
    id: "4",
    label: "Validation",
    overlays: [
      "Solution shaping",
      "Buyer self-recognition",
      "Differentiation",
      "Credibility",
    ],
  },
  {
    id: "5",
    label: "Internal Discussion",
    overlays: ["ROI establishment", "Champion coaching", "Narrative transfer"],
  },
  {
    id: "6",
    label: "Stakeholder Expansion",
    overlays: [
      "Stakeholder expansion",
      "Persona narratives",
      "Objection handling",
      "Political alignment",
      "Risk removal",
    ],
  },
  {
    id: "7",
    label: "Pilot",
    overlays: [
      "Pilot / test",
      "Success metrics",
      "Proof of value",
      "ROI strengthening",
    ],
  },
  {
    id: "8",
    label: "Budget Discussion",
    overlays: [
      "Economic buyer alignment",
      "Budget path",
      "Priority justification",
      "Trade-offs",
    ],
  },
  {
    id: "9",
    label: "Procurement",
    overlays: ["Procurement process", "Negotiation", "Decision signal"],
  },
  {
    id: "10",
    label: "Close",
    overlays: [
      "Decision reinforcement",
      "Risk reassurance",
      "Agreement",
      "Expansion setup",
    ],
  },
];

export const guardrails: AccordionItemData[] = [
  {
    title: "Running Checklist Discovery",
    body: "You ask a list of pre-prepared questions without adapting to the buyer's responses. This makes the conversation feel transactional and signals that you're not actually listening. Internally, the buyer disengages and gives surface-level answers.",
    open: true,
  },
  {
    title: "Jumping to Solution Too Early",
    body: "You begin demoing features before the buyer agrees on the problem. That shifts the conversation into product comparison mode and weakens urgency. A stronger move is to stay with the pain until the buyer clearly states what is broken and what it is costing them.",
    open: false,
  },
  {
    title: "Staying at Surface-Level Pain",
    body: "The buyer says pipeline visibility is poor, but you never unpack what that actually means for forecasting, board pressure, or missed revenue. Surface pain sounds interesting, but deep pain creates urgency. Keep asking what happens next, who feels it, and why it matters now.",
    open: false,
  },
  {
    title: "Over-Talking Instead of Listening",
    body: "When you answer too fast or tell long stories, the buyer stops exploring their own thinking. You lose the chance to hear the language they use, the politics they hint at, and the emotion underneath the issue. Aim for short prompts, then let silence do some work.",
    open: false,
  },
];

export const bestPractices: AccordionItemData[] = [
  {
    title: "Use Layered Questioning",
    body: "Start with context, then move to problem, then impact, and finally personal consequences. This structured depth helps you uncover not just what's happening, but why it matters. It also makes the buyer feel understood, which increases openness.",
    open: true,
  },
  {
    title: "Quantify the Impact Clearly",
    body: "Translate vague frustration into numbers where possible. Ask about wasted hours, missed opportunities, delayed deals, or forecast gaps. Even directional numbers help the buyer and your team understand the cost of leaving the problem unsolved.",
    open: false,
  },
  {
    title: "Actively Listen and Reflect Back",
    body: "A short reflection like 'It sounds like the real issue is rep inconsistency, not just low activity' helps the buyer feel heard and often leads them to elaborate. Reflection also lets you verify meaning before moving forward. It is one of the fastest ways to deepen trust.",
    open: false,
  },
  {
    title: "Uncover Personal Stakes",
    body: "Ask how this problem affects the buyer personally: credibility with leadership, team morale, promotion plans, or risk exposure. When a buyer ties the issue to their own success, momentum usually increases. Personal stakes are often the bridge between interest and action.",
    open: false,
  },
];

export const mockSteps: MockStepData[] = [
  {
    title: "STEP 1 — Set the Scenario",
    content: [
      "Start by defining the situation clearly in your AI chat:",
      "Your role: Account Executive",
      "Buyer role: VP Sales (or relevant persona)",
      "Company context: SaaS / Enterprise / Startup",
      "Problem area: pipeline visibility, churn, inefficiency",
      "This ensures the conversation feels realistic and focused.",
    ],
    open: true,
  },
  {
    title: "STEP 2 — Start the Discovery Call",
    content: [
      "Open the conversation with a confident but low-pressure setup:",
      "Confirm the buyer's goal for the meeting",
      "Share a simple agenda and expected outcome",
      "Ask one broad context question before narrowing in",
      "Listen for language that signals urgency or resistance",
      "This keeps the conversation focused without making it feel scripted.",
    ],
    open: false,
  },
  {
    title: "STEP 3 — Drive the Conversation",
    content: [
      "Move from context into problem and impact:",
      "Explore what is happening today",
      "Clarify where the issue shows up in workflow",
      "Ask what happens if the problem continues",
      "Look for operational and political consequences",
      "Your goal is to make the buyer explain the problem in their own words.",
    ],
    open: false,
  },
];
