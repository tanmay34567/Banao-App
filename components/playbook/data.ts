import { Brain, Briefcase, Gauge, ShieldX } from "lucide-react";
import { ActivityMark, type PlaybookIcon } from "@/components/playbook/icons";

export type LayerDefinition = {
  id: string;
  title: string;
  icon: PlaybookIcon;
  steps: string[];
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
    id: "01",
    title: "Deal Momentum",
    icon: ActivityMark,
    steps: [
      "Contact",
      "Interest",
      "Discovery",
      "Validation",
      "Internal Discussion",
      "Stakeholder Expansion",
      "Pilot",
      "Budget Discussion",
      "Procurement",
      "Close",
    ],
  },
  {
    id: "02",
    title: "Deal Construction",
    icon: Briefcase,
    steps: [
      "Worldview",
      "Industry Forces",
      "ICP",
      "Persona",
      "Trigger",
      "Pain",
      "Stakes",
      "Champion",
      "Stakeholders",
      "Access",
      "Discovery",
      "Problem Depth",
      "Value Hypothesis",
      "Solution Shaping",
      "Differentiation",
      "Credibility",
      "Champion Coaching",
      "Stakeholder Expansion",
      "Objection Surface",
      "Objection Handling",
      "Political Alignment",
      "Risk Removal",
      "Pilot/Test",
      "Proof",
      "ROI Case",
      "Economic Buyer",
      "Budget Path",
      "Procurement",
      "Negotiation",
      "Decision Signal",
      "Close",
      "Expansion",
    ],
  },
  {
    id: "03",
    title: "Buyer Psychology",
    icon: Brain,
    steps: [
      "Trigger",
      "Pain Intensity",
      "Personal Risk",
      "Career Incentive",
      "Budget Authority",
      "Internal Politics",
      "Status Protection",
      "Consensus Building",
      "Decision Momentum",
    ],
  },
  {
    id: "04",
    title: "Positive Deal Signals",
    icon: Gauge,
    steps: [
      "Engagement",
      "Stakeholders",
      "Questions",
      "Internal Sharing",
      "Pilot Request",
      "Budget Talk",
      "Procurement Contact",
      "Timeline Talk",
    ],
  },
  {
    id: "05",
    title: "Failure Diagnostics",
    icon: ShieldX,
    steps: [
      "No Champion",
      "Weak Pain",
      "Wrong Stakeholder",
      "No Budget Owner",
      "Objections Unresolved",
      "Political Resistance",
      "Procurement Delay",
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
  {
    title: "Ignoring Emotional and Personal Drivers",
    body: "Deals are rarely moved by business logic alone. If you never learn who is under pressure, who wants promotion, or who fears failure, you miss the real energy behind a decision. Good discovery connects the business case to personal consequences.",
    open: false,
  },
  {
    title: "Not Identifying the 'Why Now'",
    body: "Without a time-bound reason to act, the deal will drift. If the buyer cannot explain what changed recently or what deadline is approaching, there is no true momentum yet. Find the trigger event, the forcing function, or the cost of delay.",
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
  {
    title: "Drive Toward a Clear Problem Statement",
    body: "Before presenting a solution, aim to co-author a crisp sentence about the problem. For example: 'Your team lacks a reliable way to inspect deal health early enough to prevent quarter-end surprises.' A shared problem statement makes later validation much easier.",
    open: false,
  },
  {
    title: "Establish Urgency with 'Why Now'",
    body: "Tie the conversation to a deadline, leadership change, missed target, or initiative already in motion. Buyers move faster when the problem is connected to a real event instead of a general aspiration. If there is no 'why now,' your next step should be finding it.",
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
  {
    title: "STEP 4 — Handle Real Buyer Behavior",
    content: [
      "Expect the buyer to be partial, busy, or guarded:",
      "If they go vague, ask for a recent example",
      "If they jump ahead, gently return to the problem",
      "If they resist, acknowledge the concern before probing further",
      "If they minimize pain, test the downstream impact",
      "Real discovery improves when you stay calm instead of rushing to rescue the conversation.",
    ],
    open: false,
  },
  {
    title: "STEP 5 — Close the Discovery Properly",
    content: [
      "End by synthesizing what you heard and proposing the next step:",
      "Reflect the problem, impact, and urgency back to the buyer",
      "Confirm what matters most to them",
      "Outline what should happen next in the process",
      "Assign a clear owner for follow-up",
      "A good close creates momentum instead of just ending the meeting politely.",
    ],
    open: false,
  },
  {
    title: "STEP 6 — Reflect Immediately",
    content: [
      "Review the call while the details are fresh:",
      "What pain was confirmed versus assumed",
      "Which stakeholder signals were strong or weak",
      "Where urgency came from",
      "What was still unclear after the conversation",
      "This reflection helps you improve fast and sharpen the next touchpoint.",
    ],
    open: false,
  },
  {
    title: "STEP 7 — Repeat and Improve",
    content: [
      "Use repetition to build better judgment:",
      "Run the same scenario with a different persona",
      "Try a stricter buyer who gives shorter answers",
      "Practice deeper follow-up questions",
      "Compare your first version to your latest version",
      "The point is not perfection. It is building better instincts over time.",
    ],
    open: false,
  },
];
