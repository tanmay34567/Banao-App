import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "1-0",
  title: "Shows up on time",
  track: "CONTACT . 01 OF 08",
  priority: "P2 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer has basic respect and minimal intent to engage. This is a hygiene signal, not a commitment signal. It signals professional discipline and a willingness to engage at least at the surface level.",
    subSignals: [
      {
        title: "Professional Discipline",
        description: "The buyer respects the schedule and the engagement."
      },
      {
        title: "Baseline Respect",
        description: "You are not being ignored or de-prioritized in the short term."
      },
      {
        title: "Willingness to Engage",
        description: "Low friction in the initial meeting interaction."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Repeated punctuality across meetings",
        "On time + prepared + engaged",
        "High behavioral consistency"
      ],
      quotes: [
        "(Joins exactly on time / 1 min early)"
      ]
    },
    fake: {
      bullets: [
        "On time + passive participation",
        "On time + distracted / multitasking",
        "Hygiene without depth"
      ],
      quotes: [
        "“I'm here, but I only have 10 mins.”"
      ]
    }
  },
  whyPriority: {
    description: "It is a hygiene signal, not a commitment signal. Deals can close with late buyers or die with punctual ones. Its value is in establishing a behavioral baseline.",
    strongRead: "Establish control early; build process authority.",
    misread: "Overvaluing as high intent; assuming seriousness."
  },
  fresherMustUnderstand: {
    description: "Punctuality means respect, not interest. A single instance is weak; look for patterns of consistency and combine with energy/engagement levels.",
    items: [
      {
        title: "Respect ≠ Interest",
        description: "Showing up on time means you're not ignored, but doesn't mean they are invested yet."
      },
      {
        title: "Pattern > Single Instance",
        description: "Look for consistency in punctuality over multiple meetings for real behavioral insight."
      },
      {
        title: "Presence ≠ Engagement",
        description: "Don't confuse their attendance with active intent to solve a problem."
      }
    ]
  },
  authorityMoves: {
    description: "Reinforce authority by starting on time and establishing structure early. Match their discipline with your own professionalism.",
    items: [
      {
        title: "Move 1: Start On Time (Non-Negotiable)",
        wrong: "Waiting endlessly for others or a late-running buyer.",
        correct: "“Let’s get started — we can bring others in as they join.”",
        outcome: "Signals professionalism and builds process authority."
      },
      {
        title: "Move 2: Acknowledge Without Over-Praising",
        wrong: "“Thanks so much for being on time!” (Sounds low-status).",
        correct: "“Great — let’s jump in.”",
        outcome: "Maintains your status as an equal stakeholder; keeps it professional."
      },
      {
        title: "Move 3: Use It to Establish Structure",
        wrong: "Starting casually without an agenda.",
        correct: "“Let’s use this time efficiently — I want to cover X, then Y, and see if this is even worth going deeper.”",
        outcome: "Sets the agenda and takes control early."
      },
      {
        title: "Move 4: Test Engagement Quickly",
        wrong: "Assuming intent just because they are there.",
        correct: "“Before we go deeper — what made you take this conversation?”",
        outcome: "Validates seriousness and avoids wasting a well-timed meeting."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Over-Interpreting",
        description: "Assuming joined on time equals high interest or seriousness.",
        consequence: "Misjudging the deal's health early on."
      },
      {
        title: "Under-Leveraging",
        description: "Starting casually and not setting a clear structure.",
        consequence: "Wasting a clean entry point to establish authority."
      },
      {
        title: "Waiting Passively",
        description: "Waiting silently if the buyer is slightly late.",
        consequence: "Loss of momentum and status; looking like you have nothing else to do."
      },
      {
        title: "No Pattern Tracking",
        description: "Failing to notice repeated punctuality or delays.",
        consequence: "Missing key behavioral insights about the stakeholder."
      }
    ]
  },
  microSignals: {
    description: "Combine presence with energy and preparation to gauge true intent.",
    strong: ["On time + prepared + engaged (Better Signal)"],
    medium: ["On time + passive (Neutral)"],
    weak: ["On time + distracted / multitasking (Misleading)"]
  },
  whatHappensNext: {
    description: "Convert Attendance → Engagement → Direction.",
    doText: "Set structure immediately, validate intent early, and drive depth in the conversation.",
    dontItems: ["Assume seriousness", "Drift into casual talk", "Waste a clean start"]
  },
  finalMentalModel: {
    title: "“They respected the meeting — now earn the right to continue it”",
    description: "Don't overvalue punctuality, but don't ignore it. Use it as a foundation to establish control and professional authority."
  },
  oneLineSummary: "Punctuality earns them a meeting — authority determines what happens inside it.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
