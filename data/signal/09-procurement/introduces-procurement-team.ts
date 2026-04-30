import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "9-1",
  title: "Introduces procurement team",
  track: "PROCUREMENT . 02 OF 09",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "This signal indicates a specific moment of engagement in the PROCUREMENT stage. Reading this correctly helps you understand the buyer's current mental state and how to steer the conversation toward a productive outcome.",
    subSignals: [
      {
        title: "Initial Engagement",
        description: "The buyer is reacting to the current step in the process."
      },
      {
        title: "Process Alignment",
        description: "This signal helps verify if the buyer's timeline matches yours."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Direct reference to the current topic",
        "Specific mention of internal workflows",
        "Concrete questions about implementation"
      ],
      quotes: [
        "“How does this specifically impact our team structure?”",
        "“I can see how this relates to our current project.”"
      ]
    },
    fake: {
      bullets: [
        "Generic agreement without depth",
        "Surface-level politeness",
        "Deflecting to other topics"
      ],
      quotes: [
        "“That sounds interesting, maybe later.”",
        "“We can talk about that eventually.”"
      ]
    }
  },
  whyPriority: {
    description: "Misinterpreting this signal can lead to a misalignment of expectations and wasted resources in the following stages.",
    strongRead: "maintain control of the deal flow.",
    misread: "lose momentum and drift into a 'no decision' state."
  },
  fresherMustUnderstand: {
    description: "The difference between active intent and passive compliance.",
    items: [
      {
        title: "Don't confuse activity with progress",
        description: "A response is an action, but not necessarily a step forward."
      },
      {
        title: "Verify the 'Why'",
        description: "Always understand the motivation behind the buyer's signal."
      }
    ]
  },
  authorityMoves: {
    description: "Moves to solidify your position as a trusted advisor.",
    items: [
      {
        title: "Reframing the Signal",
        wrong: "Okay, thanks for that information.",
        correct: "Based on what you just shared, it seems like [Problem] is the priority — is that right?",
        outcome: "You confirm understanding and maintain the diagnostic lead.",
        open: true
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Accepting at face value",
        description: "Not digging into the 'why' behind the signal.",
        consequence: "You build the deal on assumptions rather than truth."
      },
      {
        title: "Missing the timing",
        description: "Waiting too long to react to a critical signal.",
        consequence: "The window of relevance closes, and urgency decays."
      }
    ]
  },
  microSignals: {
    description: "The subtle cues that reveal the buyer's true stance.",
    strong: ["Specific internal details shared", "Request for concrete next steps"],
    medium: ["General acknowledgement", "Request for more information"],
    weak: ["One-word answers", "Frequent rescheduling"]
  },
  whatHappensNext: {
    description: "Securing the next milestone.",
    doText: "Verify the depth of this signal and align it with the established problem statement.",
    dontItems: ["Ignore the nuance", "Assume the signal means a 'yes'"]
  },
  finalMentalModel: {
    title: "“The signal is a pulse check.”",
    description: "Treat every signal as a measurement of the deal's health. A strong pulse means keep moving; a weak pulse means stop and diagnose."
  },
  oneLineSummary: "Every signal is an opportunity to either gain control or lose it.",
  guardrails: {
    items: []
  },
  bestPractices: {
    items: []
  },
  aiMockTest: {
    description: "Practice responding to this signal in a simulated environment.",
    steps: []
  }
};
