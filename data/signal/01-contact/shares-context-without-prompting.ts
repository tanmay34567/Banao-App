import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "1-2",
  title: "Shares context without prompting",
  track: "CONTACT . 03 OF 08",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer is voluntarily opening their internal world. They are giving details unasked and expanding beyond your prompts. This is a major trust and engagement signal, indicating they feel understood and safe in the conversation.",
    subSignals: [
      {
        title: "Voluntary Transparency",
        description: "The buyer lowers their guard and shares more than required."
      },
      {
        title: "Internal World Access",
        description: "Gaining insight into internal workflows, struggles, and politics."
      },
      {
        title: "Earned Trust",
        description: "A sign that your approach has established enough credibility for the buyer to open up."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Detailed explanation of internal issues",
        "Mention of internal constraints or politics",
        "Proactive expansion on initial answers"
      ],
      quotes: [
        "“Actually, the bigger issue is…”",
        "“Internally, we’re struggling with…”",
        "“The challenge is our team does X, but Y happens…”"
      ]
    },
    fake: {
      bullets: [
        "Slight expansion but still very controlled",
        "Sharing non-critical or generic context",
        "Surface-level extra information only"
      ],
      quotes: [
        "“What usually happens is we just use a spreadsheet.”"
      ]
    }
  },
  whyPriority: {
    description: "The buyer is increasing transparency, giving you access to real context and faster discovery. Handled well, it accelerates the deal; mishandled, the buyer shuts down and hides their internal reality.",
    strongRead: "Go deeper; earn deeper access.",
    misread: "Interrupting or rushing to solutions; closing the door prematurely."
  },
  fresherMustUnderstand: {
    description: "This is a privileged moment where the buyer goes beyond default filtering behavior. Your response determines whether they continue to open up or close back up. Depth is more important than speed here.",
    items: [
      {
        title: "Privileged Moment",
        description: "The buyer is choosing to share more than the surface-level default; respect the trust."
      },
      {
        title: "Response Determines Flow",
        description: "Interrupting or ignoring this context will cause the buyer to shut down and stop sharing."
      },
      {
        title: "Depth > Speed",
        description: "This is not the time to move faster or demo; it's the time to unpack root causes and impact."
      }
    ]
  },
  authorityMoves: {
    description: "Stay present and curious. Use silence and reflective listening to encourage even deeper sharing of internal context.",
    items: [
      {
        title: "Move 1: Let Them Finish (Critical)",
        wrong: "Interrupting because you think you understand or have a solution.",
        correct: "Maintaining silence while the buyer expands on their context.",
        outcome: "Builds trust, depth, and a better flow of information."
      },
      {
        title: "Move 2: Expand What They Said",
        wrong: "Moving on to your next pre-planned question.",
        correct: "“That’s helpful — when you say X, can you walk me through how that actually plays out?”",
        outcome: "Shows genuine interest and encourages further transparency."
      },
      {
        title: "Move 3: Reflect + Elevate",
        wrong: "Acknowledging at surface level only.",
        correct: "“So if I’m understanding correctly — you’re dealing with X at the surface, but the underlying challenge seems to be Y. Is that fair?”",
        outcome: "Demonstrates understanding, adds structure, and builds authority."
      },
      {
        title: "Move 4: Connect to Impact",
        wrong: "Failing to tie context to consequences.",
        correct: "“What does this translate to in terms of impact — where does this hurt the most?”",
        outcome: "Moves from simple context to real-world consequences, increasing deal seriousness."
      },
      {
        title: "Move 5: Pattern Recognition",
        wrong: "Treating the issue as an isolated incident.",
        correct: "“We’ve seen similar situations where this creates downstream issues in Z — does that happen here as well?”",
        outcome: "Demonstrates your experience and expands the buyer's own thinking."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Interrupting",
        description: "Cutting the buyer off while they are sharing valuable context.",
        consequence: "Breaks trust and stops the flow of internal information."
      },
      {
        title: "Ignoring Context",
        description: "Moving immediately to the next question on your script.",
        consequence: "Signals that you aren't actually listening to them."
      },
      {
        title: "Jumping to Solution",
        description: "“We can fix that by...”",
        consequence: "Collapses discovery and kills your authority as a strategic partner."
      },
      {
        title: "Not Going Deeper",
        description: "Accepting the shared context at face level without probing for more.",
        consequence: "You miss the root causes and real deal insights."
      }
    ]
  },
  microSignals: {
    description: "Gauge the level of trust and depth being offered.",
    strong: ["Detailed explanation with internal challenges/politics (Strong Version)"],
    medium: ["Some extra context with limited depth (Neutral)"],
    weak: ["Slight expansion but still controlled (Weak Signal)"]
  },
  whatHappensNext: {
    description: "Convert Shared Context → Structured Understanding → Insight.",
    doText: "Let them speak, expand their context, organize it clearly, and identify deeper patterns.",
    dontItems: ["Move ahead to the next stage", "Rush the solution", "Ignore the nuances shared"]
  },
  finalMentalModel: {
    title: "“The buyer is opening up — don’t close the door by rushing”",
    description: "Stay present and stay curious. Your goal is to earn even deeper access by showing you value the context they've already shared."
  },
  oneLineSummary: "When a buyer shares context without being asked, your job is not to move forward—it’s to go deeper.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
