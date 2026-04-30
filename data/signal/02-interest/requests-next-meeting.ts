import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "2-3",
  title: "Requests next meeting",
  track: "INTEREST . 04 OF 07",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer is willing to invest more time to continue the conversation. In early deals, time commitment is a proxy for intent. However, a next meeting request only means a willingness to continue, not necessarily deal progress.",
    subSignals: [
      {
        title: "Forward Motion",
        description: "Willingness to stay engaged and continue exploration of the solution."
      },
      {
        title: "Time Investment",
        description: "The buyer is allocating a scarce resource (time) to you again, signaling relevance."
      },
      {
        title: "Continuation Request",
        description: "A sign that you've passed the basic relevance and authority test."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Clear purpose + stakeholders + direction",
        "Specific agenda items requested by the buyer",
        "Wants to go deeper into internal application"
      ],
      quotes: [
        "“Let’s get our operations head involved next time”",
        "“Let’s go deeper into how this would work for us”"
      ]
    },
    fake: {
      bullets: [
        "Generic request without specific goal or topic",
        "Vague 'sometime' in the future without commitment",
        "Polite delay tactic or non-confrontational exit"
      ],
      quotes: [
        "“Let’s catch up again sometime”"
      ]
    }
  },
  whyPriority: {
    description: "Time commitment is the primary early-stage intent proxy. Scheduling means you've earned continuation. However, it's easily misread as deal progress when it's just willingness to talk; without structured progression, momentum will still die.",
    strongRead: "Design the next step intentionally; lock commitment properly.",
    misread: "Over-celebrating; assuming meeting equals closing or high priority."
  },
  fresherMustUnderstand: {
    description: "A next meeting is a window of control, not the finish line. You must define the purpose, agenda, and outcome of the next step. If you let the buyer define everything, you lose authority and risk stagnating the deal.",
    items: [
      {
        title: "Window of Control",
        description: "You have momentum and attention; use it to shape the evaluation criteria and internal vision."
      },
      {
        title: "Define the Next Meeting",
        description: "Don't just schedule; define the specific purpose and outcome expected from the interaction."
      },
      {
        title: "Momentum is Fragile",
        description: "Meetings without clear direction lead to 'meeting fatigue' and eventual deal death."
      }
    ]
  },
  authorityMoves: {
    description: "Design the next step to ensure structured progression. Clarify the intent, set an agenda, and involve relevant stakeholders early.",
    items: [
      {
        title: "Move 1: Clarify Purpose (Critical)",
        wrong: "“Sure, let’s schedule another call”",
        correct: "“Makes sense — what would you want to focus on in the next conversation?”",
        outcome: "Forces the buyer to articulate their intent and gives you direction for the next call."
      },
      {
        title: "Move 2: Define Agenda",
        wrong: "Leaving the next call open-ended or 'to be decided'.",
        correct: "“In the next call, we can go deeper into X and see how this would actually work in your setup — does that make sense?”",
        outcome: "Adds professional structure and prevents the interaction from becoming a generic sync."
      },
      {
        title: "Move 3: Introduce Stakeholders",
        wrong: "Continuing the same conversation with the same person repeatedly.",
        correct: "“Would it make sense to involve anyone else from your side who would be part of evaluating this?”",
        outcome: "Expands the deal footprint and starts building internal consensus early."
      },
      {
        title: "Move 4: Set Outcome Expectation",
        wrong: "Not having a clear 'go/no-go' criteria for the next step.",
        correct: "“Goal for that conversation should be to see if this is actually worth pursuing further — fair?”",
        outcome: "Aligns expectations and prevents the deal from drifting into non-committal limbo."
      },
      {
        title: "Move 5: Lock Commitment Properly",
        wrong: "Setting a short, informal 15-minute sync.",
        correct: "“Let’s block a time where we can do this properly — not just a quick sync”",
        outcome: "Increases the perceived seriousness and value of the interaction."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Over-Celebrating",
        description: "Thinking 'they want another meeting, so the deal is strong'.",
        consequence: "Leads to false confidence and a lack of diagnostic rigor in the next steps."
      },
      {
        title: "No Structure",
        description: "Scheduling calls without a defined agenda, stakeholders, or purpose.",
        consequence: "Results in wasted meetings that frustrate both the buyer and the AE."
      },
      {
        title: "Not Expanding Stakeholders",
        description: "Keeping the conversation loop restricted to the initial contact only.",
        consequence: "The deal stagnates as the broader internal consensus is never built."
      },
      {
        title: "Buyer-Defined Flow",
        description: "Letting the buyer dictate every part of the next step's agenda and timing.",
        consequence: "You lose your authority and role as an expert guide in the buying process."
      }
    ]
  },
  microSignals: {
    description: "Distinguish between a structured progression and a polite delay or generic curiosity.",
    strong: ["Clear purpose + specific stakeholders + direction (Strong Version)"],
    medium: ["Wants next call, but with a vague or shifting purpose (Neutral)"],
    weak: ["Generic 'let's catch up sometime' without commitment (Weak Signal)"]
  },
  whatHappensNext: {
    description: "Convert Next Meeting → Structured Progression.",
    doText: "Clarify intent, define the agenda, expand the stakeholder group, and set a clear outcome.",
    dontItems: ["Schedule blindly", "Assume progress is automatic", "Repeat the same surface-level conversation"]
  },
  finalMentalModel: {
    title: "“The buyer is willing to continue — make that continuation meaningful”",
    description: "Don't relax just because you have a meeting. Design the next step intentionally to move the deal closer to a decision."
  },
  oneLineSummary: "A next meeting is not progress—structured progression is. Your job is to create it.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
