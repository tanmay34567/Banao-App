import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "2-5",
  title: "Focuses on features only",
  track: "INTEREST . 06 OF 07",
  priority: "P2 - Caution",
  statusLabel: "Neutral Signal",
  meaning: {
    description: "The buyer is evaluating at the surface level, not at the decision level. They are looking at tools rather than solving a problem. This leads to commodity comparison, price sensitivity, and weak differentiation.",
    subSignals: [
      {
        title: "Surface Evaluation",
        description: "Asking 'does it have X' instead of 'why does this matter to the business'."
      },
      {
        title: "Safe Conversation Zone",
        description: "Buyers stay here when they don't fully understand the problem or don't want to commit yet."
      },
      {
        title: "Commodity Trap",
        description: "The risk of becoming an interchangeable vendor compared solely on feature checklists."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Feature request directly tied to a business context",
        "Seeking to understand trade-offs between different technical approaches",
        "Converting feature capability into a specific, internal use case"
      ],
      quotes: [
        "“Do you support X for our onboarding use case?”"
      ]
    },
    fake: {
      bullets: [
        "Random feature questions with no logical structure",
        "Checklist-style questioning without shared goals",
        "No reference to an internal need, problem, or workflow"
      ],
      quotes: [
        "“Does it have X?”",
        "“Can it do Y?”",
        "“Do you support Z?”"
      ]
    }
  },
  whyPriority: {
    description: "Feature-level discussion is low-value evaluation. It makes you an interchangeable commodity. You must lift the conversation from features to decisions to maintain control and high-value positioning.",
    strongRead: "Lift conversation from features to decisions.",
    misread: "Matching buyer level; continuing the shallow feature loop."
  },
  fresherMustUnderstand: {
    description: "Features are a safe zone for buyers who aren't ready to commit. You cannot win on features alone; staying here forces you to compete on checklists and price. This is a redirection opportunity, not a bad signal.",
    items: [
      {
        title: "Features = Safe Zone",
        description: "Buyers talk features when they are comparing options but don't yet own the problem or the solution."
      },
      {
        title: "Checklist Competition",
        description: "Staying at the feature level makes you a commodity and inevitably invites price sensitivity."
      },
      {
        title: "Redirection is Key",
        description: "Your job is to move the conversation from feature curiosity to problem context and decision criteria."
      }
    ]
  },
  authorityMoves: {
    description: "Don't indulge in a detailed feature-dump. Answer briefly and then immediately elevate the conversation to the business impact and workflow level.",
    items: [
      {
        title: "Move 1: Answer Briefly, Then Elevate (Critical)",
        wrong: "Deep diving into a detailed technical explanation of the feature.",
        correct: "“Yes, we support that — but usually the more important question is how that impacts your workflow. How are you currently handling this?”",
        outcome: "Acknowledges the buyer while redirecting to higher-level, high-value discovery."
      },
      {
        title: "Move 2: Re-anchor to Problem",
        wrong: "Accepting the feature requirement as an absolute given.",
        correct: "“Out of curiosity — what’s driving this requirement for you?”",
        outcome: "Moves the focus from a technical feature to an underlying organizational need."
      },
      {
        title: "Move 3: Introduce Decision Context",
        wrong: "Treating every feature request as equally important to the deal.",
        correct: "“Teams typically evaluate this based on X, Y, and Z — feature is one part, but impact tends to matter more. How are you thinking about that?”",
        outcome: "Shifts the evaluation criteria and guides the buyer's thinking process."
      },
      {
        title: "Move 4: Use Trade-offs",
        wrong: "Presenting the feature without any mention of downsides or complexities.",
        correct: "“You can have this feature, but it often comes with trade-offs in X — how important is that in your case?”",
        outcome: "Forces a decision-level conversation and adds professional depth to the evaluation."
      },
      {
        title: "Move 5: Convert Feature → Use Case",
        wrong: "Talking about the feature functionality in a vacuum.",
        correct: "“If you had this feature — where would it actually be used in your workflow?”",
        outcome: "Grounds the request in reality and builds tangible relevance for the solution."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Feature Dump",
        description: "Explaining every detail and technical spec of a feature just because it was asked.",
        consequence: "The buyer becomes overwhelmed and the conversation stays at a shallow, technical level."
      },
      {
        title: "Matching Buyer Level",
        description: "Staying at the feature level because that is where the buyer is currently comfortable.",
        consequence: "You fail to elevate the deal and lose control of the strategic business narrative."
      },
      {
        title: "Checklist Competition",
        description: "Trying to prove superiority based solely on a list of supported features.",
        consequence: "You become a commodity vendor rather than a strategic business partner."
      },
      {
        title: "Ignoring Intent",
        description: "Failing to ask 'why' they care about or require a specific feature.",
        consequence: "You miss the real internal context and the hidden drivers that actually close deals."
      }
    ]
  },
  microSignals: {
    description: "Differentiate between feature-driven tools and outcome-driven solutions.",
    strong: ["Feature mentioned in the context of a specific, named use case (Stronger Version)"],
    medium: ["Generic feature curiosity without context (Neutral)"],
    weak: ["Random, unstructured feature questions during discovery (Weak Signal)"]
  },
  whatHappensNext: {
    description: "Convert Feature Curiosity → Problem Context → Decision Criteria.",
    doText: "Answer lightly, ask 'why', elevate the conversation, and anchor to a specific use case.",
    dontItems: ["Stay trapped in the feature loop", "Over-explain technical specifications", "Compete blindly on checklists"]
  },
  finalMentalModel: {
    title: "“Shift from evaluating tools to evaluating outcomes”",
    description: "Don't resist feature questions, but don't indulge them either. Redirect intelligently to the impact level."
  },
  oneLineSummary: "Feature questions are not wrong—but if you stay there, you lose the deal. Elevate or get commoditized.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
