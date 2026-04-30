import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "2-1",
  title: "Connects to internal use case",
  track: "INTEREST . 02 OF 07",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer is mapping your solution into their actual workflow or system. They are no longer asking generic questions but are thinking about how this fits into their specific setup. This represents a major leap in deal reality.",
    subSignals: [
      {
        title: "Concrete Relevance",
        description: "Relevance has moved from theoretical to a specific internal context."
      },
      {
        title: "Workflow Mapping",
        description: "The buyer is mentally 'placing' your tool inside their existing processes."
      },
      {
        title: "Tangible Opportunity",
        description: "The deal is starting to become justifiable and actionable within the org."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Specific use case + workflow + impact",
        "Clearly defined internal owner or team mentioned",
        "Direct connection to existing internal processes"
      ],
      quotes: [
        "“This could work for our onboarding flow”",
        "“We could use this in our sales qualification process”",
        "“This might help our support team with X”",
        "“This could plug into how we handle Y internally”"
      ]
    },
    fake: {
      bullets: [
        "Vague use case mention without depth",
        "Hypothetical connection ('maybe someone could use this')",
        "Disconnected from any real workflow or team"
      ],
      quotes: [
        "“I guess marketing could use this for something.”"
      ]
    }
  },
  whyPriority: {
    description: "Relevance has become concrete. You now have a use case, a context, and a direction. Handled correctly, it anchors value and gains you authority; handled poorly, you become a mere order-taker for a suboptimal solution.",
    strongRead: "Validate, refine, and expand the vision.",
    misread: "Accepting blindly; assuming the use case is final and optimal."
  },
  fresherMustUnderstand: {
    description: "The buyer's initial connection is a starting hypothesis, not the final design. Don't over-agree or rush to demo. Instead, engage critically to shape the solution and anchor its real-world value.",
    items: [
      {
        title: "Starting Hypothesis",
        description: "The use case they mention is their initial interpretation; it likely needs refinement to be optimal."
      },
      {
        title: "High-Leverage Moment",
        description: "This is where you earn authority by showing you understand their world better than they do."
      },
      {
        title: "Avoid Blind Agreement",
        description: "Saying 'Yes, exactly!' is weak positioning. Be a partner who pressure-tests the idea to ensure it holds."
      }
    ]
  },
  authorityMoves: {
    description: "Shape the use case until it becomes real and defensible. Move from the high-level idea to step-by-step execution and business impact.",
    items: [
      {
        title: "Move 1: Validate, Don't Accept Blindly",
        wrong: "“Yes, that’s exactly how it works”",
        correct: "“That’s a good direction — let’s pressure-test it a bit to make sure it holds in your setup”",
        outcome: "Acknowledges the buyer while maintaining your role as an expert advisor."
      },
      {
        title: "Move 2: Break Down the Use Case",
        wrong: "Staying at a high-level summary of the idea.",
        correct: "“Walk me through how this would actually play out step by step on your side”",
        outcome: "Moves from an idea to execution and identifies potential gaps early."
      },
      {
        title: "Move 3: Identify Constraints",
        wrong: "Ignoring potential friction or internal blockers.",
        correct: "“Where do you see this breaking or getting blocked internally?”",
        outcome: "Surfaces real-world risks and helps you understand internal friction points."
      },
      {
        title: "Move 4: Expand the Use Case",
        wrong: "Sticking strictly to their one stated use case.",
        correct: "“In similar setups, this often extends into X as well — would that be relevant for you?”",
        outcome: "Increases the deal's scope and overall business value."
      },
      {
        title: "Move 5: Anchor Impact",
        wrong: "Focusing only on the technical 'how'.",
        correct: "“If this works as expected, what does this change for your team?”",
        outcome: "Connects the solution to tangible business outcomes and builds the business case."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Immediate Agreement",
        description: "Agreeing fully as soon as the buyer suggests a use case.",
        consequence: "You lose the authority to shape the deal optimally and strategically."
      },
      {
        title: "Jumping to Demo",
        description: "“Let me show you how this works” before understanding the context.",
        consequence: "The demo lacks a structured foundation and relevant anchoring."
      },
      {
        title: "Not Validating Feasibility",
        description: "Ignoring constraints, dependencies, or the actual workflow details.",
        consequence: "Leads to broken deals and failed implementations later on."
      },
      {
        title: "Staying Surface-Level",
        description: "Failing to dig into the step-by-step impact and stakeholders involved.",
        consequence: "The deal foundation remains weak and easily deprioritized."
      }
    ]
  },
  microSignals: {
    description: "Categorize the quality and depth of the internal connection.",
    strong: ["Specific use case + workflow + impact (Strong Version)"],
    medium: ["Clear use case, but no depth in description (Neutral)"],
    weak: ["Vague use case mention ('maybe X could use this') (Weak Signal)"]
  },
  whatHappensNext: {
    description: "Convert Use Case → Validated Solution → Business Impact.",
    doText: "Break down the use case, identify constraints, expand intelligently, and anchor outcomes.",
    dontItems: ["Accept the first idea blindly", "Rush to show product features", "Skip the validation phase"]
  },
  finalMentalModel: {
    title: "“The buyer is imagining your solution in their world — make that vision strong”",
    description: "Don't move too fast. Shape the use case properly to ensure it's defensible and high-value."
  },
  oneLineSummary: "When a buyer connects to a use case, don’t confirm it—refine it until it becomes real and defensible.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
