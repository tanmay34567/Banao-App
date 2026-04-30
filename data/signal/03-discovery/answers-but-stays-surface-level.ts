import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "3-5",
  title: "Answers but stays surface-level",
  track: "DISCOVERY . 05 OF 09",
  priority: "P1 - Priority",
  statusLabel: "Caution Signal",
  meaning: {
    description: "The buyer is cooperating but not truly engaging. They keep the conversation moving and stay polite, but provide no depth, specifics, or expansion. This creates a dangerous 'fake discovery' where you think progress is being made, but you lack the insight required to build a real business case or defensible solution.",
    subSignals: [
      {
        title: "Cooperative Non-Engagement",
        description: "Answering every question without volunteering any detail or ownership."
      },
      {
        title: "Generic Safeguarding",
        description: "Using high-level phrases to avoid exposing internal gaps, conflicts, or inefficiencies."
      },
      {
        title: "Low Cognitive Investment",
        description: "Participation that stays in 'polite conversation' mode rather than 'problem-solving' mode."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Initially surface-level but opens up significantly when specific examples are requested",
        "Brief answers that still confirm a specific operational point when pressed",
        "Honest admission of being 'unsure' followed by a promise to find out"
      ],
      quotes: [
        "“Yeah, that happens sometimes, let me think of a specific instance from last week...”"
      ]
    },
    fake: {
      bullets: [
        "Consistently vague responses despite multiple probing attempts from different angles",
        "Dismissive agreement without any contextual detail or expansion",
        "Deflecting deeper questions back to the AE or to a future meeting"
      ],
      quotes: [
        "“Yeah, that sounds about right.”",
        "“We handle it internally, it's fine.”",
        "“It’s not too big of an issue for us, honestly.”",
        "“We’ve got a process for that already, no issues there.”"
      ]
    }
  },
  whyPriority: {
    description: "Surface-level answers create a false sense of progress. If you move forward without deep insight, you are building a deal on assumptions, leading to misaligned solutions and late-stage failures. This signal is a red flag hidden as cooperation—you must diagnose the cause (low trust, low perceived value, or style) and unlock depth early.",
    strongRead: "You’re talking—but you aren’t learning anything meaningful yet.",
    misread: "Thinking 'they’re answering everything, so it’s a good call'."
  },
  fresherMustUnderstand: {
    description: "Depth is earned, not given. If a buyer stays at the surface, you haven't built enough trust or relevance yet. Don't settle for shallow data; it leads to weak, uncloseable deals. Break the pattern early by asking for examples and allowing silence to pull out better answers. Don't move to a demo until you have context.",
    items: [
      {
        title: "Fake Discovery",
        description: "Collecting shallow data feels like progress but lacks the insight to justify a high-value deal."
      },
      {
        title: "Earn the Depth",
        description: "Surface answers usually mean you haven't yet proven why the buyer should trust you with the 'messy truth'."
      },
      {
        title: "Silence is a Tool",
        description: "Juniors often fill silences too fast; letting a question hang often forces the buyer to think and share more than they intended."
      }
    ]
  },
  authorityMoves: {
    description: "Challenge vagueness, ask for specific examples, and use silence strategically to pull the buyer one layer deeper into their reality.",
    items: [
      {
        title: "Move 1: Go One Level Deeper (Baseline)",
        wrong: "Accepting 'sometimes' or 'usually' as a definitive discovery point.",
        correct: "“When you say ‘sometimes’—how often does that actually happen in a given month?”",
        outcome: "Forces the buyer to move from abstract generalities to specific frequency and impact."
      },
      {
        title: "Move 2: Ask for Example (Critical)",
        wrong: "Continuing to ask hypothetical or leading questions.",
        correct: "“Can you walk me through a recent instance of where this happened?”",
        outcome: "Moves the buyer from theory to reality, revealing the messy details that discovery thrives on."
      },
      {
        title: "Move 3: Silence + Wait",
        wrong: "Immediately asking a clarifying question when the buyer pauses to think.",
        correct: "Ask a deep, slightly uncomfortable question, then wait. Let the silence do the work.",
        outcome: "The pressure pulls higher-quality, more thoughtful responses that the buyer was initially holding back."
      },
      {
        title: "Move 4: Reframe Importance",
        wrong: "Asking deep questions without explaining why they are necessary for the buyer.",
        correct: "“I’m asking because this is usually where things either work smoothly or break completely — want to make sure we’re not missing something”",
        outcome: "Justifies the deeper questioning and aligns you as a partner trying to prevent their future failure."
      },
      {
        title: "Move 5: Controlled Challenge (Advanced)",
        wrong: "Ignoring the lack of depth and getting frustrated or bored with the call.",
        correct: "“Feels like we might still be at a high level — would it help to go a bit deeper into how this actually plays out?”",
        outcome: "Politely calls out the surface-level dynamic and invites the buyer to engage more seriously."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Accepting at Face Value",
        description: "Not probing further when a buyer gives a one-sentence, generic answer.",
        consequence: "You finish the call with a notebook full of data but zero real understanding of the problem."
      },
      {
        title: "Moving Forward Too Fast",
        description: "Proceeding to the demo or solution phase while the discovery is still shallow.",
        consequence: "Your solution won't land because it isn't anchored to a specific, deeply understood pain point."
      },
      {
        title: "Asking Generic Questions",
        description: "“Tell me more about that” or other vague prompts that don't direct the buyer.",
        consequence: "Doesn't give the buyer a specific direction to expand in, reinforcing the surface-level habit."
      },
      {
        title: "Filling the Silence",
        description: "Not allowing the buyer space to think before jumping back in with another question.",
        consequence: "Trains the buyer that they can get away with short, easy answers because you'll do the work for them."
      }
    ]
  },
  microSignals: {
    description: "Identify if the surface-level behavior is structural or situational.",
    strong: ["Initially surface-level but opens up significantly when challenged with a specific example (Recoverable)"],
    medium: ["Consistently brief and professional, but still cooperative across all topics (Neutral)"],
    weak: ["Avoids depth and deflects even when pushed repeatedly for operational specifics (Strong Negative)"]
  },
  whatHappensNext: {
    description: "Convert Surface Answers → Specific Context → Real Insight.",
    doText: "Challenge vagueness immediately, demand real-world examples, and introduce structure to the answers.",
    dontItems: ["Accept 'fine' as a valid status", "Assume you understand the 'why' without hearing a concrete example", "Rush to show product before the 'how' is clear"]
  },
  finalMentalModel: {
    title: "“Depth is the only metric of discovery.”",
    description: "If you're talking but not learning anything new or specific, you aren't doing discovery. Don't settle for the polite surface; go one layer deeper every time."
  },
  oneLineSummary: "Surface-level answers feel like progress—but they create weak deals. Your job is to go one layer deeper every time.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
