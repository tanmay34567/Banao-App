import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "2-2",
  title: "Shares internal problems voluntarily",
  track: "INTEREST . 03 OF 07",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer is revealing real internal friction without being pushed. This is a high-trust, high-value signal where you move beyond surface conversation and see the real problem layer—not the polished version.",
    subSignals: [
      {
        title: "Proactive Disclosure",
        description: "The buyer brings up gaps or issues on their own without being prompted."
      },
      {
        title: "Real Problem Access",
        description: "Gaining insight into internal inefficiencies, hidden blockers, and real decision drivers."
      },
      {
        title: "Trust Indicator",
        description: "A sign that the buyer feels safe enough to expose internal weaknesses and admit gaps to you."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Detailed internal problem description",
        "Mention of specific impact + failed attempts to solve",
        "Admitting gaps or inefficiencies proactively"
      ],
      quotes: [
        "“Honestly, our team struggles with X internally”",
        "“The real issue is we don’t have visibility into Y”",
        "“We’ve tried solving this, but it keeps breaking at Z”",
        "“Internally, alignment is a mess around this”"
      ]
    },
    fake: {
      bullets: [
        "Slight internal mention without depth or context",
        "General complaints without specific grounding in workflow",
        "Disconnected from any real business driver"
      ],
      quotes: [
        "“Yeah, we have some issues here and there.”"
      ]
    }
  },
  whyPriority: {
    description: "You are seeing the real problem layer, giving you access to root causes and hidden blockers. This is where deals become strong, defensible, and closable. If handled correctly, you build a deal on reality; if ignored, you stay shallow and lose later.",
    strongRead: "Go deeper than symptoms; diagnose systemic issues.",
    misread: "Jumping to solutions immediately; over-sympathizing."
  },
  fresherMustUnderstand: {
    description: "This is a trust moment where the buyer is taking a risk by exposing weakness. Your response determines if they go deeper or shut down. This is not the time to sell; it's the time to understand deeply. Real deals are built on these internal truths.",
    items: [
      {
        title: "A Trust Moment",
        description: "Exposing internal weakness is a risk for the buyer; normalize it and encourage them to continue sharing."
      },
      {
        title: "Not Time to Sell",
        description: "Resist the urge to pitch your solution as soon as a problem is shared; discovery and understanding are still the priorities."
      },
      {
        title: "Deals Built on Reality",
        description: "Without understanding the real internal friction, your deal will remain surface-level and easily defeated by internal inertia later."
      }
    ]
  },
  authorityMoves: {
    description: "Stay calm and curious. Move from a simple statement to a structured understanding of the root cause, impact, and internal ownership.",
    items: [
      {
        title: "Move 1: Acknowledge Without Overreacting",
        wrong: "“Oh wow, that’s a big problem” (Overreacting) or ignoring it completely.",
        correct: "“That’s helpful — let’s unpack that a bit”",
        outcome: "Normalizes the sharing of problems and encourages the buyer to continue their disclosure."
      },
      {
        title: "Move 2: Expand the Problem",
        wrong: "Accepting the surface-level mention without further inquiry.",
        correct: "“When this happens, where does it break down most clearly?”",
        outcome: "Moves from a simple statement to a structured understanding of key friction points."
      },
      {
        title: "Move 3: Understand Impact",
        wrong: "Focusing only on the technical gap without the business consequence.",
        correct: "“What does this translate to in terms of impact for the team?”",
        outcome: "Builds seriousness by connecting the problem to real-world consequences and urgency."
      },
      {
        title: "Move 4: Trace Root Cause",
        wrong: "Stopping at the symptoms mentioned by the buyer.",
        correct: "“Why do you think this keeps happening internally?”",
        outcome: "Identifies systemic issues and organizational blockers rather than just surface symptoms."
      },
      {
        title: "Move 5: Surface Ownership & Stakes",
        wrong: "Failing to map who actually suffers from the problem.",
        correct: "“Who is most affected by this internally? If this doesn’t get fixed, what’s at risk?”",
        outcome: "Maps stakeholders and identifies the real urgency and emotional drivers behind the need."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Jumping to Solution",
        description: "“We can fix that by...”",
        consequence: "Cuts discovery short and loses the diagnostic depth needed for a strong, defensible deal."
      },
      {
        title: "Over-Sympathizing",
        description: "“That sounds really tough...”",
        consequence: "Weakens your positioning as a peer advisor; can come across as condescending or low-status."
      },
      {
        title: "Not Going Deeper",
        description: "Accepting a surface explanation without probing for the 'why' behind it.",
        consequence: "You miss the root cause and lose your real leverage in the eventual solutioning phase."
      },
      {
        title: "Ignoring Emotional Layer",
        description: "Failing to acknowledge the frustration or pressure behind the internal problem.",
        consequence: "Results in a shallow understanding of the buyer's true personal and professional motivation."
      }
    ]
  },
  microSignals: {
    description: "Gauge the level of disclosure and the underlying deal quality.",
    strong: ["Detailed internal problem with impact + failed attempts shared proactively (Strong Version)"],
    medium: ["Problem mentioned but with limited depth or context (Neutral)"],
    weak: ["Slight internal mention without expansion or specifics (Weak Signal)"]
  },
  whatHappensNext: {
    description: "Convert Internal Problem → Root Cause → Impact → Structured Opportunity.",
    doText: "Expand the problem, identify the root cause, quantify the impact, and map the stakeholders.",
    dontItems: ["Jump to solutioning immediately", "Stay at the surface level", "Rush the conversation forward"]
  },
  finalMentalModel: {
    title: "“The buyer is showing you the real problem — understand it fully first”",
    description: "Don't rush to fix. Stay present and curious, and go deeper into the diagnosis than the buyer expects."
  },
  oneLineSummary: "When a buyer shares internal problems voluntarily, you’re no longer discovering—you’re diagnosing. Do it properly.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
