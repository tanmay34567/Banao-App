import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "0-3",
  title: "Generic reply (“sounds interesting”)",
  track: "PRE-CONTACT . 04 OF 07",
  priority: "P2 - Priority",
  statusLabel: "Caution Signal",
  meaning: {
    description: "The buyer is politely acknowledging you, not committing to anything. This is low-friction engagement, not interest.",
    subSignals: [
      {
        title: "“Sounds interesting”",
        description: "I’m open, but not invested"
      },
      {
        title: "“Tell me more”",
        description: "You haven’t earned depth yet"
      },
      {
        title: "“Looks good”",
        description: "I haven’t evaluated this"
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Moves toward real signal",
        "Mentions specific internal context",
        "Tests relevance with a use case"
      ],
      quotes: [
        "“This looks interesting for our onboarding use case”"
      ]
    },
    fake: {
      bullets: [
        "Polite acknowledgment",
        "Low investment",
        "Ambiguous signal"
      ],
      quotes: [
        "“Sounds interesting, tell me more”",
        "“Nice”",
        "“Cool”",
        "“Looks good”"
      ]
    }
  },
  whyPriority: {
    description: "Ambiguous signal with high risk of misinterpretation. It gives you a small opening but does NOT confirm problem, intent, or relevance.",
    strongRead: "Permission to explore.",
    misread: "Validation to proceed."
  },
  fresherMustUnderstand: {
    description: "This is NOT progress. Nothing has moved in the deal. You still don’t know if there is a real problem, if they care, or if this is worth pursuing.",
    items: [
      {
        title: "This is NOT Progress",
        description: "Deal hasn't moved. Problem/intent/relevance unconfirmed."
      },
      {
        title: "The Junior Trap",
        description: "Assuming interest leads to pitching/demoing too early, which kills the deal."
      },
      {
        title: "The Fork Point",
        description: "You must choose to test depth and qualify rather than blindly advancing."
      }
    ]
  },
  authorityMoves: {
    description: "Convert Generic → Specific. Offer structured hypotheses and light qualification while maintaining controlled advancement.",
    items: [
      {
        title: "Move 1: Convert Generic → Specific",
        wrong: "“Great! Let me share more details / deck / features”",
        correct: "“Glad it sounds interesting — just to anchor this, what specifically caught your attention?”",
        outcome: "Forces clarity and tests real engagement."
      },
      {
        title: "Move 2: Offer Structured Hypothesis",
        wrong: "“What are you looking for?”",
        correct: "“Typically when this resonates, it’s because of either X, Y, or Z — curious which one is closer to your situation?”",
        outcome: "Guides thinking and shows expertise."
      },
      {
        title: "Move 3: Light Qualification (Critical)",
        wrong: "Assuming they are active.",
        correct: "“Out of curiosity — is this something you’re actively trying to solve right now, or more exploratory?”",
        outcome: "Separates real vs casual and saves time."
      },
      {
        title: "Move 4: Controlled Advancement",
        wrong: "Jumping to call immediately.",
        correct: "“If there’s something real here, we can go deeper on a short call — otherwise happy to keep it async for now.”",
        outcome: "Removes pressure and positions you as selective."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Over-Interpreting",
        description: "“They said interesting → they are interested”",
        consequence: "Misalignment and wasted effort."
      },
      {
        title: "Info Dump",
        description: "Sending deck, long messages, explaining everything.",
        consequence: "Kills curiosity and lowers status."
      },
      {
        title: "Jumping to Demo",
        description: "Skipping problem, context, and qualification.",
        consequence: "Deal dies silently later."
      },
      {
        title: "No Filtering",
        description: "Treating every reply as opportunity.",
        consequence: "Pipeline pollution."
      }
    ]
  },
  microSignals: {
    description: "Read the subtle differences in wording to gauge intent.",
    strong: ["“This looks interesting for our onboarding use case” (Slightly Stronger)"],
    medium: ["“Sounds interesting, tell me more” (Neutral)"],
    weak: ["“Nice” / “Cool” / “Looks good” (Almost no signal)"]
  },
  whatHappensNext: {
    description: "Convert Politeness → Relevance → Problem.",
    doText: "Ask for specificity, introduce structured thinking, test seriousness, and decide whether to invest.",
    dontItems: ["Sell", "Demo", "Push next steps blindly"]
  },
  finalMentalModel: {
    title: "“Door slightly open, but no one committed inside”",
    description: "Don’t walk in blindly; don’t walk away immediately. Knock properly and check if someone’s actually there."
  },
  oneLineSummary: "Generic interest is not real interest — your job is to force clarity without losing control.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
