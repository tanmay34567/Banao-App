import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "2-4",
  title: "Says 'this is interesting' (without depth)",
  track: "INTEREST . 05 OF 07",
  priority: "P2 - Caution",
  statusLabel: "Neutral Signal",
  meaning: {
    description: "The buyer is acknowledging value at a surface level—but not committing to it. They are reacting to the presentation rather than connecting it to their world. Without specifics, this is often polite validation rather than real interest.",
    subSignals: [
      {
        title: "Surface Reaction",
        description: "Reacting to the demonstration/presentation rather than an internal need."
      },
      {
        title: "Polite Validation",
        description: "Acknowledging the value or quality without admitting a specific problem or goal."
      },
      {
        title: "Lack of Engagement",
        description: "If they say 'interesting' and then stop, the real signal is the silence that follows."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Connects 'interesting' to a specific issue or department",
        "Follows up with 'tell me more' or a specific question",
        "Direct reference to internal context"
      ],
      quotes: [
        "“This is interesting for our onboarding issue”",
        "“Interesting, tell me more about how that works for Y.”"
      ]
    },
    fake: {
      bullets: [
        "Generic 'interesting' with no follow-up",
        "No reference to their own world or workflow",
        "Neutral or passive delivery style"
      ],
      quotes: [
        "“This is interesting.”",
        "“This looks good.”",
        "“Nice, makes sense.”"
      ]
    }
  },
  whyPriority: {
    description: "This is a dangerous fake-positive signal. It feels positive but carries no real commitment or direction. It can lead to a strong deal if explored, or a dead deal if interest is simply assumed. Interest without intent is not a signal.",
    strongRead: "Convert reaction into relevance.",
    misread: "Accepting it as progress; assuming they are 'interested' and ready to buy."
  },
  fresherMustUnderstand: {
    description: "Interest does not equal intent. A surface reaction is just an acknowledgment of value, not a commitment to action. You must proactively bridge the gap between their acknowledgment and their actual reality.",
    items: [
      {
        title: "Interest ≠ Intent",
        description: "Saying 'interesting' doesn't mean there is a problem, a context, or a planned action behind it."
      },
      {
        title: "The Gap is the Signal",
        description: "If they say 'interesting' and ask nothing, the engagement is actually weak and needs testing."
      },
      {
        title: "Bridge to Relevance",
        description: "Your job is to move them from a generic reaction to a specific application in their internal world."
      }
    ]
  },
  authorityMoves: {
    description: "Don't celebrate a generic compliment. Force specificity, anchor the comment to their context, and test for real interest.",
    items: [
      {
        title: "Move 1: Force Specificity (Critical)",
        wrong: "“Great!” (Accepting the generic compliment).",
        correct: "“When you say interesting—what part specifically stood out?”",
        outcome: "Breaks the vagueness and drives clarity on what part of the value actually resonated."
      },
      {
        title: "Move 2: Anchor to Their Context",
        wrong: "Letting the comment stay generic and unanchored.",
        correct: "“How does that connect to what you’re currently dealing with?”",
        outcome: "Moves the buyer from a generic surface reaction to a relevant internal one."
      },
      {
        title: "Move 3: Offer Structured Options",
        wrong: "Leaving the floor too open for another vague answer.",
        correct: "“Usually this resonates either from a speed perspective or a control perspective—which one is closer to your situation?”",
        outcome: "Guides their thinking and reduces the cognitive load of having to be specific."
      },
      {
        title: "Move 4: Test Real Interest",
        wrong: "Assuming the comment means they want to move forward.",
        correct: "“Is this something you see as worth exploring further, or more of a good-to-know right now?”",
        outcome: "Separates real signal from noise and avoids building an inflated, false pipeline."
      },
      {
        title: "Move 5: Introduce Depth Prompt",
        wrong: "Not pushing for a concrete use case.",
        correct: "“If we were to take this further, where do you see this actually being applied in your setup?”",
        outcome: "Pushes the conversation toward a concrete use case and builds real, actionable engagement."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Accepting as Progress",
        description: "Thinking 'they’re interested' and updating the deal stage in CRM.",
        consequence: "Inflates your pipeline with deals that have no real momentum or intent to buy."
      },
      {
        title: "Moving Forward Blindly",
        description: "Scheduling next steps or sending proposals without context or alignment.",
        consequence: "Wastes cycles on deals that haven't been qualified for real relevance yet."
      },
      {
        title: "Over-Explaining",
        description: "Trying to build more excitement by adding more features or technical detail.",
        consequence: "Doesn't solve the core problem of a lack of depth or personal relevance."
      },
      {
        title: "Ignoring the Vagueness Gap",
        description: "Failing to address the lack of specificity in their response during the call.",
        consequence: "The deal stays shallow and eventually dies in the 'no decision' category."
      }
    ]
  },
  microSignals: {
    description: "Identify if the 'interesting' comment is a sign of engagement or a polite dismissal.",
    strong: ["“This is interesting for [specific issue/department]” (Real Signal)"],
    medium: ["“Interesting, tell me more” (Neutral)"],
    weak: ["“Interesting” (No follow-up/No specifics) (Weak Signal)"]
  },
  whatHappensNext: {
    description: "Convert Surface Reaction → Specific Relevance → Real Signal.",
    doText: "Ask exactly what part is interesting, connect it to their context, test seriousness, and move toward a use case.",
    dontItems: ["Assume interest automatically", "Move forward without alignment", "Stay generic in the conversation"]
  },
  finalMentalModel: {
    title: "“There’s a spark—but no fire yet”",
    description: "Don't celebrate a generic compliment. Turn the spark of curiosity into the substance of a real deal."
  },
  oneLineSummary: "“Interesting” without depth is not interest—it’s an invitation to create relevance.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
