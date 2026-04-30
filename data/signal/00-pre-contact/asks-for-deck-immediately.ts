import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "0-4",
  title: "Asks for deck immediately",
  track: "PRE-CONTACT . 05 OF 07",
  priority: "P2 - Priority",
  statusLabel: "Caution Signal",
  meaning: {
    description: "The buyer wants low-effort information consumption, not a real conversation (yet). This is usually a polite deflection, curiosity without commitment, or delegation.",
    subSignals: [
      {
        title: "Polite deflection",
        description: "“Send deck” = I don’t want to engage right now"
      },
      {
        title: "Curiosity without commitment",
        description: "“Let me browse first”"
      },
      {
        title: "Delegation / forwarding",
        description: "“I’ll pass this to someone else”"
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Request for specific use case content",
        "Context-driven request",
        "Higher intent indicator"
      ],
      quotes: [
        "“Can you share something specific to X use case?”"
      ]
    },
    fake: {
      bullets: [
        "Generic request",
        "Low investment",
        "Passive shortcut attempt"
      ],
      quotes: [
        "“Send me your deck”",
        "“Just send deck, I’ll review”"
      ]
    }
  },
  whyPriority: {
    description: "It feels like progress but often leads to dead ends. Decks don't create urgency or build authority. The risk is in your reaction, not the signal itself.",
    strongRead: "Stay selective; reclaim control.",
    misread: "Blind compliance; losing narrative."
  },
  fresherMustUnderstand: {
    description: "A deck is a passive medium. Once you send it, you lose control of the narrative, timing, and interpretation.",
    items: [
      {
        title: "A Deck is Passive",
        description: "You lose control of the narrative and timing once it's sent."
      },
      {
        title: "Interpretation Risk",
        description: "The buyer may misunderstand or skip key parts of your value proposition."
      },
      {
        title: "Low Effort Shortcut",
        description: "They are trying to avoid thinking deeply or committing time."
      }
    ]
  },
  authorityMoves: {
    description: "Redirect toward interaction. Slow down blind compliance and reclaim the diagnostic lead.",
    items: [
      {
        title: "Move 1: Controlled Deflection (Critical)",
        wrong: "“Sure, here’s the deck”",
        correct: "“Happy to share something — but just to make sure it’s relevant, can I quickly understand what you’re looking to evaluate?”",
        outcome: "Slows down blindly and reclaims control."
      },
      {
        title: "Move 2: Context Before Content",
        wrong: "Assuming the deck is enough.",
        correct: "“We do have a deck, but it’s quite generic — usually more useful once we anchor it to your use case. What specifically would you want to see?”",
        outcome: "Devalues the generic deck and increases the importance of a conversation."
      },
      {
        title: "Move 3: Offer Structured Alternative",
        wrong: "Accepting passive consumption.",
        correct: "“Instead of sending a static deck, it might be more useful to walk through how this applies to your setup — takes 15–20 mins. If not, I can still share a high-level overview.”",
        outcome: "Nudges toward a call while maintaining authority."
      },
      {
        title: "Move 4: If You MUST Send Something",
        wrong: "Sending the full deck immediately.",
        correct: "“Sharing a short overview — happy to go deeper once we align on relevance.”",
        outcome: "Keeps curiosity alive and avoids info-dumping."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Immediate Deck Dump",
        description: "Sending the full deck without any context or friction.",
        consequence: "You become a commodity and easily ignorable."
      },
      {
        title: "Overloading Information",
        description: "Sending long, feature-heavy decks or docs.",
        consequence: "Buyer disengages due to cognitive load."
      },
      {
        title: "No Follow-Up Structure",
        description: "“Let me know your thoughts” with the deck.",
        consequence: "The conversation dies silently."
      },
      {
        title: "Assuming Progress",
        description: "“They asked for deck → deal is moving”.",
        consequence: "False pipeline and wasted forecasting energy."
      }
    ]
  },
  microSignals: {
    description: "Gauge the level of intent behind the request.",
    strong: ["“Can you share something specific to X use case?” (Higher intent)"],
    medium: ["“Send me your deck” (Neutral)"],
    weak: ["“Just send deck, I’ll review” (Likely disengagement)"]
  },
  whatHappensNext: {
    description: "Convert Passive Interest → Active Engagement.",
    doText: "Ask for context, guide toward conversation, control information flow, and re-engage after sending.",
    dontItems: ["Dump content", "Wait passively", "Assume progress"]
  },
  finalMentalModel: {
    title: "“They want to stay low effort — you need to raise engagement”",
    description: "Don't block, but don't blindly comply. Redirect toward interaction and test if they are willing to invest even 2 minutes of context."
  },
  oneLineSummary: "A deck request is not a buying signal — it’s a test of whether you’ll give up control.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
