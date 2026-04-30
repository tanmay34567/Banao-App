import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "0-2",
  title: "Quick response (<24h)",
  track: "PRE-CONTACT . 03 OF 07",
  priority: "P2 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer is engaged enough to not ignore you. It's a baseline engagement signal, not a commitment signal. A fast reply simply means you're not being ignored.",
    subSignals: [
      {
        title: "Baseline Engagement",
        description: "The buyer is reacting to the flow of conversation."
      },
      {
        title: "Flow Maintenance",
        description: "The conversation is moving without significant friction."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Replies within same day / next day",
        "Maintains conversation flow",
        "Doesn’t leave you hanging for multiple follow-ups"
      ],
      quotes: [
        "“Thanks for the note, happy to chat later this week.”",
        "“Got it, let's keep the thread going.”"
      ]
    },
    fake: {
      bullets: [
        "Instant replies every time (could be habit)",
        "Polite but non-committal",
        "Generic speed without substance"
      ],
      quotes: [
        "“Sure.”",
        "“OK.”"
      ]
    }
  },
  whyPriority: {
    description: "It is useful context but low diagnostic power on its own. A deal can move fast with slow responders or die with fast responders.",
    strongRead: "baseline engagement.",
    misread: "high intent or urgency."
  },
  fresherMustUnderstand: {
    description: "Speed ≠ Intent. Fast replies can be due to habit or politeness, not commitment. Context and combination with other signals are what matter.",
    items: [
      {
        title: "Speed ≠ Intent",
        description: "Some people reply fast by habit or politeness, but aren't committed."
      },
      {
        title: "Context Matters",
        description: "Fast response in early stage is weak; in mid/late stage it's stronger."
      },
      {
        title: "Combine Signals",
        description: "Quick response alone is weak; combine with specific problems or stakeholders for strength."
      }
    ]
  },
  authorityMoves: {
    description: "Preserve status and perception of value. Avoid becoming over-available or reactive. Match pace, not urgency.",
    items: [
      {
        title: "Move 1: Match Pace, Not Urgency",
        wrong: "Replying instantly every time (e.g., 30 seconds).",
        correct: "Respond in reasonable time, maintaining flow without looking like you're waiting for them.",
        outcome: "Preserves status and perception of value."
      },
      {
        title: "Move 2: Don’t Over-Reward Speed",
        wrong: "Jumping ahead immediately: “Great, let me send you everything / book demo / share pricing”",
        correct: "“Got it — before we move forward, I want to understand X properly so we don’t jump ahead.”",
        outcome: "You stay structured and don't accelerate blindly."
      },
      {
        title: "Move 3: Introduce Depth Early",
        wrong: "Focusing on speed alone.",
        correct: "“Since we’re aligned on this, can we go one level deeper into how this currently works on your side?”",
        outcome: "Converts engagement into substance."
      },
      {
        title: "Move 4: Maintain Frame (Very Important)",
        wrong: "Falling into 'chat mode' or reactive mode.",
        correct: "“Let’s capture this properly — easier if we spend 20 mins aligning instead of going back and forth.”",
        outcome: "Shift from texting to structured conversation; maintain control."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Confusing Politeness with Intent",
        description: "Assuming fast replies equal high interest.",
        consequence: "Misjudging deal potential and building fake pipeline."
      },
      {
        title: "Becoming Over-Available",
        description: "Instant replies, anytime availability, and no boundaries.",
        consequence: "You become low value and replaceable."
      },
      {
        title: "Speeding Up Prematurely",
        description: "“They’re responsive → let’s close fast”.",
        consequence: "Shallow discovery and weak deals."
      },
      {
        title: "Losing Structure",
        description: "Conversation becomes chatty, unstructured, and directionless.",
        consequence: "No clear path to a deal."
      }
    ]
  },
  microSignals: {
    description: "Read the depth of the response speed and content.",
    strong: ["Fast + thoughtful replies (Better signal)"],
    medium: ["Fast but short replies (Neutral)"],
    weak: ["Fast but generic ('ok', 'sure') (Low value)"]
  },
  whatHappensNext: {
    description: "Convert Speed → Depth → Direction.",
    doText: "Use responsiveness to ask better questions and move toward a structured call.",
    dontItems: ["Push product", "Jump to demo", "Rush to pricing"]
  },
  finalMentalModel: {
    title: "“Door is open, but room may be empty”",
    description: "Don't assume, don't rush. Test if there's something real inside. Fast replies show availability, not intent."
  },
  guardrails: {
    items: []
  },
  bestPractices: {
    items: []
  },
  aiMockTest: {
    description: "Practice responding to this signal in a simulated environment.",
    steps: []
  },
  oneLineSummary: "Fast replies show availability — not intent. Your job is to convert availability into meaningful engagement."
};
