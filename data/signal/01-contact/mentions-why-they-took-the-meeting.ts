import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "1-1",
  title: "Mentions why they took the meeting",
  track: "CONTACT . 02 OF 08",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer is self-declaring intent. This is one of the earliest moments where you don't have to guess motivation—they are telling you their reason. It's a major upgrade from generic interest or passive attendance.",
    subSignals: [
      {
        title: "Declared Motivation",
        description: "The buyer openly states their reason for engagement."
      },
      {
        title: "Entry Narrative",
        description: "The surface-level story the buyer uses to justify the meeting."
      },
      {
        title: "Intent Self-Declaration",
        description: "A clear signal that the buyer is looking for a solution or understanding."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Clear reason + context + urgency",
        "Specific problem mention",
        "Active exploration indicator"
      ],
      quotes: [
        "“We’re exploring tools for X”",
        "“We’ve been facing issues with Y”",
        "“Wanted to understand if this could help with Z”"
      ]
    },
    fake: {
      bullets: [
        "Vague reason ('just exploring')",
        "Clear reason but no depth or energy",
        "Surface-level curiosity only"
      ],
      quotes: [
        "“I'm just exploring right now.”"
      ]
    }
  },
  whyPriority: {
    description: "It reveals the entry point into the deal, providing direction, context, and a starting hypothesis. Handled correctly, it accelerates the deal; mishandled, it leads to a drop in authority.",
    strongRead: "Anchor the conversation; build depth before direction.",
    misread: "Accepting at face value; assuming full discovery is done."
  },
  fresherMustUnderstand: {
    description: "This is NOT full discovery. It's only the surface reason or entry narrative. It must become your anchor point for the rest of the conversation to maintain relevance and build trust.",
    items: [
      {
        title: "Surface ≠ Root Cause",
        description: "What they tell you is their version of the reason, not necessarily the complete reality or root cause."
      },
      {
        title: "Relevance Anchor",
        description: "If you ignore their stated reason, the conversation drifts and your relevance drops instantly."
      },
      {
        title: "A Trust Moment",
        description: "The buyer is opening up; your response determines your authority and trust trajectory."
      }
    ]
  },
  authorityMoves: {
    description: "Lead the conversation by expanding on their statement. Don't jump to solutions immediately; instead, unpack the layers behind their motivation.",
    items: [
      {
        title: "Move 1: Structured Acknowledgement (Very Important)",
        wrong: "“Got it — let me show you how we solve that”",
        correct: "“That helps — usually when teams look into this, there are a few layers behind it. Can we unpack this a bit?”",
        outcome: "Acknowledge, expand, and take control of the discovery flow."
      },
      {
        title: "Move 2: Problem Expansion",
        wrong: "Accepting the problem as described without digging deeper.",
        correct: "“When you say X, where does this show up most clearly in your workflow?”",
        outcome: "Moves from a statement to a structured problem that you can address."
      },
      {
        title: "Move 3: Context Deepening",
        wrong: "Moving on to features too soon.",
        correct: "“How long has this been an issue? What have you tried so far? What triggered this conversation now?”",
        outcome: "Adds timeline, causality, and urgency to the deal."
      },
      {
        title: "Move 4: Intent Calibration (Critical)",
        wrong: "Assuming high intent without verification.",
        correct: "“Is this something you’re actively looking to solve in the near term, or more exploratory right now?”",
        outcome: "Separates curiosity from real intent and avoids building a false pipeline."
      },
      {
        title: "Move 5: Reframe (If Needed)",
        wrong: "Sticking to the buyer's potentially weak framing.",
        correct: "“It sounds like X on the surface — but in similar situations, it’s often driven by Y underneath. Does that resonate?”",
        outcome: "Upgrades the buyer's thinking and builds your authority as an expert."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Immediate Solutioning",
        description: "Jumping to the product demo the second they share their reason.",
        consequence: "Authority and diagnostic lead are lost instantly."
      },
      {
        title: "Ignoring the Statement",
        description: "Continuing with a generic pitch or pre-planned deck flow.",
        consequence: "The buyer feels the conversation is not relevant to them."
      },
      {
        title: "Surface-Level Questions",
        description: "Failing to dig into impact, workflow, or stakeholders.",
        consequence: "Discovery remains shallow and the deal is fragile."
      },
      {
        title: "Not Anchoring Conversation",
        description: "Moving away from their stated 'why' for taking the meeting.",
        consequence: "The conversation becomes scattered and loses its focus."
      }
    ]
  },
  microSignals: {
    description: "Determine the depth of intent behind the declared reason.",
    strong: ["Clear reason + context + urgency (Strong Version)"],
    medium: ["Clear reason, but no depth (Neutral)"],
    weak: ["Vague reason ('just exploring') (Weak Signal)"]
  },
  whatHappensNext: {
    description: "Convert Declared Reason → Structured Understanding → Real Problem.",
    doText: "Expand their statement, map the context, identify the root cause, and quantify the importance.",
    dontItems: ["Pitch immediately", "Assume you understand the full problem", "Waste the anchor point"]
  },
  finalMentalModel: {
    title: "“Buyer has entered with intent — now earn the right to lead”",
    description: "Don't rush and don't ignore. Build depth and understanding before you try to provide direction."
  },
  oneLineSummary: "When a buyer tells you why they’re here, your job is not to answer—it’s to understand it better than they explained it.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
