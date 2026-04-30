import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "3-7",
  title: "Keeps answers generic",
  track: "DISCOVERY . 07 OF 09",
  priority: "P2 - Weak",
  statusLabel: "Weak Signal",
  meaning: {
    description: "The buyer is engaging but staying non-specific and non-committal. They aren't avoiding the conversation, but they aren't giving you anything concrete to anchor a business case to. This creates an 'illusion of progress' where discovery feels active but lacks the actionable insight required to build a strong deal.",
    subSignals: [
      {
        title: "Non-Committal Engagement",
        description: "Talking without anchoring the conversation to real pain, specific workflows, or outcomes."
      },
      {
        title: "Illusion of Progress",
        description: "Discovery interactions that feel cooperative but have very low information density."
      },
      {
        title: "Safe Communication",
        description: "Keeping responses at a high enough level that they don't expose internal reality, gaps, or conflict."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Initially generic but provides specific details when guided with structured options",
        "Generic answers that become more concrete when a specific recent example is requested",
        "Consistent participation that slowly layers on detail as trust is built"
      ],
      quotes: [
        "“It depends mostly on the volume of X, but usually it plays out like...”"
      ]
    },
    fake: {
      bullets: [
        "Consistently non-specific responses despite multiple probing attempts from different angles",
        "Using 'process' or 'the team' as a shield to avoid detailing actual workflows",
        "Low cognitive investment in defining the specifics of the problem"
      ],
      quotes: [
        "“We have a process for that already.”",
        "“It depends on a few things.”",
        "“We manage it internally, no big issues.”",
        "“It’s handled by the team.”",
        "“We’re exploring a few things currently.”"
      ]
    }
  },
  whyPriority: {
    description: "Generic answers are dangerous because they are not direct resistance, but they hide the absence of real understanding. You cannot build a use case or business case on vague generalities. If not corrected, this behavior drifts into serious deal-stalling territory because the deal remains 'clean-looking but hollow'.",
    strongRead: "You’re hearing words—but you aren’t learning reality.",
    misread: "Thinking 'they answered everything, so the call went well'."
  },
  fresherMustUnderstand: {
    description: "Generic responses usually mean low engagement depth or low perceived value. Specificity must be pulled from the buyer; it is rarely offered naturally. Don't settle for vague answers; force specificity early to ensure you aren't building a deal on hollow understanding. If you move to a demo without specifics, you have already lost the differentiation battle.",
    items: [
      {
        title: "Low Engagement Depth",
        description: "Generic answers indicate the buyer isn't yet thinking deeply or seriously about the problem."
      },
      {
        title: "Extraction is Mandatory",
        description: "Your job is to intentionally extract the details the buyer is too safe or lazy to offer on their own."
      },
      {
        title: "Specificity = Value",
        description: "The more specific the context you uncover, the more uniquely valuable your solution becomes."
      }
    ]
  },
  authorityMoves: {
    description: "Force specific anchoring, narrow the scope of your questions, and offer structured options to guide the buyer toward concrete answers.",
    items: [
      {
        title: "Move 1: Force Specific Anchoring (Critical)",
        wrong: "Accepting 'we handle it internally' and moving to the next topic.",
        correct: "“Got it — who typically owns that, and how does it actually play out day to day?”",
        outcome: "Breaks the abstraction and moves the conversation back to practical organizational reality."
      },
      {
        title: "Move 2: Narrow the Scope",
        wrong: "Asking more broad, open-ended questions like 'tell me more about your process'.",
        correct: "“When you say ‘depends’—what does it depend on most often?”",
        outcome: "Converts a vague, dismissive answer into a structured data point you can build on."
      },
      {
        title: "Move 3: Ask for One Example",
        wrong: "Continuing to talk in generalities and theoretical scenarios.",
        correct: "“Can you walk me through one recent instance of where this actually occurred?”",
        outcome: "Forces the buyer to move from general theory to a concrete, real-world scenario."
      },
      {
        title: "Move 4: Offer Structured Options",
        wrong: "Leaving the answer completely open to the buyer's natural brevity or laziness.",
        correct: "“In most setups, this is either centralized or handled team-wise — which one is closer to your case?”",
        outcome: "Reduces ambiguity and guides the buyer toward a clear, categorical answer."
      },
      {
        title: "Move 5: Reflect + Tighten",
        wrong: "Pretending the generic answer was sufficient for discovery.",
        correct: "“So broadly it’s handled internally — but I want to make sure we don’t stay too high level. Where does this actually get tricky in practice?”",
        outcome: "Acknowledges the surface-level answer while pushing for the underlying complexity and pain points."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Accepting Generic Answers",
        description: "Failing to probe for detail when the buyer gives a one-word or vague response.",
        consequence: "You leave the call with no real understanding of how to differentiate your solution from competitors."
      },
      {
        title: "Asking Broad Questions",
        description: "Using prompts like “Tell me more about your process.”",
        consequence: "Invites more generic, non-committal answers and reinforces the shallow, safe dynamic."
      },
      {
        title: "Moving Forward Anyway",
        description: "Proceeding to a demo or price discussion without having specific contextual anchors.",
        consequence: "The solution pitch will be generic and won't resonate with any specific internal stakeholder pain."
      },
      {
        title: "Over-Explaining",
        description: "Trying to compensate for the buyer's brevity by talking more yourself.",
        consequence: "Fills the airtime but doesn't fix the fundamental lack of insight from the buyer's side."
      }
    ]
  },
  microSignals: {
    description: "Determine if the generic behavior is a starting point or a dead end.",
    strong: ["Generic initially but becomes highly specific when guided with structured options (Recoverable)"],
    medium: ["Consistently generic but polite and cooperative across different topics (Neutral)"],
    weak: ["Generic and disengaged behavior across multiple conversation threads (Weak)"]
  },
  whatHappensNext: {
    description: "Convert Generic → Specific → Actionable Insight.",
    doText: "Anchor every response to a person or workflow, narrow the scope of your questions, and use examples to validate specifics.",
    dontItems: ["Accept 'the team' or 'the process' as sufficient actors", "Move to the next phase without anchoring context", "Assume clarity exists where it hasn't been explicitly stated"]
  },
  finalMentalModel: {
    title: "“Reality is specific.”",
    description: "If it isn't specific, it isn't real discovery. Your job is to push past the generalities until you hit the actual mechanics of their world."
  },
  oneLineSummary: "Generic answers feel like progress—but they hide the absence of real understanding. Your job is to force specificity.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
