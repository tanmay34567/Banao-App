import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "0-1",
  title: "Mentions specific context/problem",
  track: "PRE-CONTACT . 02 OF 07",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer is not just interested — they are mapping your solution into their reality. This is a major jump from surface-level interest to a real situation inside their organization.",
    subSignals: [
      {
        title: "Mapping Reality",
        description: "The buyer connects the solution to their internal world."
      },
      {
        title: "Real Use Case",
        description: "Specific mention of workflows, teams, or problems."
      },
      {
        title: "Past Attempts",
        description: "Buyer mentions trying to solve this before, signaling urgency and real pain."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Clear use case",
        "Real situation",
        "Mentions past attempts"
      ],
      quotes: [
        "“We’re struggling with onboarding drop-offs after signup”",
        "“Our sales team is facing delays in lead qualification”",
        "“We tried solving this with X, but it didn’t work”"
      ]
    },
    fake: {
      bullets: [
        "Generally useful agreement",
        "Surface-level praise",
        "Theoretic alignment"
      ],
      quotes: [
        "“Yeah this could work anywhere”",
        "“Seems generally useful”"
      ]
    }
  },
  whyPriority: {
    description: "This is the first moment where a deal can actually start forming. Without this, you are in theory land. With this, you are entering real problem space.",
    strongRead: "entering real problem space.",
    misread: "staying in theory land."
  },
  fresherMustUnderstand: {
    description: "This is NOT full discovery. It's an entry point. The buyer's problem statement is often incomplete, politically filtered, or just a symptom of a deeper root cause.",
    items: [
      {
        title: "Not Full Discovery",
        description: "It is an entry point into deeper discovery, not the end of it."
      },
      {
        title: "Incomplete Statements",
        description: "The buyer's problem may be politically filtered or a symptom, not root cause."
      },
      {
        title: "Diagnose vs Pitch",
        description: "If you rush here, you become a vendor. Explore to become an advisor."
      }
    ]
  },
  authorityMoves: {
    description: "This is where you lock authority permanently or lose it early. Explore the problem better than they can explain it. Diagnose before prescribing.",
    items: [
      {
        title: "Move 1: Problem Expansion (Critical)",
        wrong: "Jumping to solution immediately: “We solve exactly that!”",
        correct: "“Got it — when this happens, it’s usually driven by a couple of underlying factors. Can we break this down a bit?”",
        outcome: "You don't accept problem at face value; you show thinking depth and take control of problem definition."
      },
      {
        title: "Move 2: Layered Probing (Go Deeper)",
        wrong: "Surface level questions only.",
        correct: "“When did this start becoming an issue? How are you currently handling it? Where does it break down specifically? What happens if this doesn’t get solved?”",
        outcome: "Move from surface to structure; build cognitive authority."
      },
      {
        title: "Move 3: Pattern Matching Insight",
        wrong: "Generic response.",
        correct: "“We’ve seen similar situations where the issue wasn’t just X, but actually Y happening upstream — do you see something like that?”",
        outcome: "Positions you as experienced and expands their thinking."
      },
      {
        title: "Move 4: Impact Amplification",
        wrong: "Ignoring the business cost.",
        correct: "“What does this translate to in terms of impact — is this more of an efficiency issue or is it affecting revenue / output directly?”",
        outcome: "Move conversation toward pain intensity and prepare ground for value."
      },
      {
        title: "Move 5: Controlled Non-Solutioning",
        wrong: "“We can solve this by...”",
        correct: "“Before jumping into solutions, I want to make sure we’re clear on the problem structure — otherwise we might optimize the wrong thing.”",
        outcome: "Builds frame authority and prevents premature pitching."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Immediate Pitch",
        description: "Buyer says issue, junior says 'We solve that!'.",
        consequence: "Authority collapses instantly."
      },
      {
        title: "Accepting Problem Blindly",
        description: "Assuming buyer is correct and problem is fully understood.",
        consequence: "Building solution on incomplete or biased data."
      },
      {
        title: "Feature Mapping",
        description: "Mapping issue to features A, B, C immediately.",
        consequence: "You become a product brochure, not a partner."
      },
      {
        title: "Not Going Deep Enough",
        description: "Surface questions only, resulting in no differentiation.",
        consequence: "Buyer treats you as a commodity."
      }
    ]
  },
  microSignals: {
    description: "Read the quality and depth of the problem mention.",
    strong: ["Specific problem + impact + past attempts (Strong deal potential)"],
    medium: ["Specific problem but no depth (Needs exploration)"],
    weak: ["Vague problem mention (Don't over-invest yet)"]
  },
  whatHappensNext: {
    description: "Convert Problem Mention → Structured Problem Understanding.",
    doText: "Map workflow, identify root cause, quantify impact, and understand stakeholders.",
    dontItems: ["Demo", "Pricing", "Proposal"]
  },
  finalMentalModel: {
    title: "“The problem door is open”",
    description: "Don't rush to fix. Diagnose before prescribing. Your authority is determined by whether you explore it better than they can explain it."
  },
  guardrails: {
    items: []
  },
  bestPractices: {
    items: []
  },
  aiMockTest: {
    description: "Practice simulated discovery for this high-stakes signal.",
    steps: []
  },
  oneLineSummary: "When a buyer shares a problem, your authority is determined by whether you explore it better than they can explain it."
};
