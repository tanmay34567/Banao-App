import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "3-3",
  title: "Quantifies impact (time, money, etc.)",
  track: "DISCOVERY . 03 OF 09",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer is moving from conceptual interest to economic reality by attaching measurable numbers to the problem. This marks a massive shift in deal quality—the problem now has a price tag. Quantified impact provides the justification for action, budget, and decision pressure, making the deal fundable and defensible internally.",
    subSignals: [
      {
        title: "Economic Reality",
        description: "Moving from 'this is an issue' to 'this is costing us something measurable'."
      },
      {
        title: "Budget Justification",
        description: "Creating the financial foundation for a business case that finance can approve."
      },
      {
        title: "Decision Urgency",
        description: "Using measurable loss (time or money) to pressure the internal timeline for a fix."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Specific, frequent, and business-impacting numbers shared voluntarily",
        "Clear description of time leaks or financial losses",
        "Willingness to breakdown how the numbers were calculated"
      ],
      quotes: [
        "“This is taking us 10–12 hours a week.”",
        "“We’re losing ~₹5–10 lakhs monthly because of this.”",
        "“This delays onboarding by 2–3 days per customer.”",
        "“Our team spends 30% of their time manually fixing this.”"
      ]
    },
    fake: {
      bullets: [
        "Rough estimates with no logical basis or validation",
        "Numbers that don't relate to core business outcomes or priority KPIs",
        "Passively agreeing with AE-suggested numbers without local context"
      ],
      quotes: [
        "“It takes some time I guess.”",
        "“We probably lose a few hours weekly, hard to say.”"
      ]
    }
  },
  whyPriority: {
    description: "Numbers provide the ultimate justification for action. Without quantified impact, there is no real urgency or budget pressure. With it, you can build a defensible ROI and accelerate decisions. This is where deals become fundable and internally defensible.",
    strongRead: "The problem now has a price tag—use it to justify action.",
    misread: "Accepting surface-level numbers without expanding or validating them."
  },
  fresherMustUnderstand: {
    description: "Quantification is not the end—it's the start of ROI thinking. Buyers often underestimate impact or miss indirect/downstream effects. Your job is to handle numbers intelligently, expand the impact logically, and bridge the gap to solution value. This is where your authority as a strategic advisor spikes.",
    items: [
      {
        title: "The Bridge to Business Case",
        description: "Numbers transform a conceptual problem into a fundable, actionable business case."
      },
      {
        title: "Numbers are Incomplete",
        description: "Buyers often miss indirect impacts like customer experience, attrition, or team efficiency."
      },
      {
        title: "Don't Jump to Pricing",
        description: "Value anchor first. Keep the focus on the cost of the problem before discussing the cost of your solution."
      }
    ]
  },
  authorityMoves: {
    description: "Validate the buyer's numbers, expand on hidden impacts, and annualize the loss to increase magnitude and urgency.",
    items: [
      {
        title: "Move 1: Validate the Numbers (Critical)",
        wrong: "Ignoring the numbers or moving on to the next question without confirmation.",
        correct: "“Just to make sure I understand — that’s around X per month / week, right?”",
        outcome: "Confirms accuracy and shows you are paying deep attention to their business metrics."
      },
      {
        title: "Move 2: Expand Hidden Impact",
        wrong: "Accepting only the first direct number mentioned (e.g., just time).",
        correct: "“Beyond that direct impact, does this also affect things like customer experience or team efficiency?”",
        outcome: "Surfaces indirect costs and significantly increases the total perceived impact of the problem."
      },
      {
        title: "Move 3: Annualize / Aggregate",
        wrong: "Leaving the problem at a small weekly or monthly scale.",
        correct: "“So roughly speaking, that’s about X over a year — is that fair?”",
        outcome: "Increases the magnitude of the problem, making it a much more tangible target for a fix."
      },
      {
        title: "Move 4: Connect to Priority",
        wrong: "Treating numbers as data only, not as a driver for decision timing.",
        correct: "“Given this level of impact, how is this currently being prioritized internally?”",
        outcome: "Directly links the financial/time loss to the urgency of the decision-making process."
      },
      {
        title: "Move 5: Bridge to Solution Value",
        wrong: "Failing to flip the conversation to the positive outcome.",
        correct: "“If this could be reduced significantly, what would that change for your team?”",
        outcome: "Starts the ROI thinking and moves the buyer toward a positive investment justification."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Ignoring the Numbers",
        description: "Moving past numerical data without validating, expanding, or summarizing it.",
        consequence: "You lose significant leverage and authority in the later negotiation stages."
      },
      {
        title: "Not Expanding Impact",
        description: "Accepting only surface-level, direct costs without probing for indirect effects.",
        consequence: "The business case remains weak and easily deprioritized by stakeholders outside the immediate loop."
      },
      {
        title: "Jumping to Pricing",
        description: "Immediately offering your product's price as soon as they mention a loss.",
        consequence: "Prematurely shifts the focus to cost rather than anchoring the value of the fix."
      },
      {
        title: "Not Linking to Decision",
        description: "Failing to connect the quantified loss to a required timeline for action.",
        consequence: "The deal stalls as a 'nice-to-have' improvement with no inherent deadline."
      }
    ]
  },
  microSignals: {
    description: "Gauge the specificity and business weight of the numbers.",
    strong: ["Clear, specific numbers + high business impact + urgency (Strong Version)"],
    medium: ["Rough numbers or 'back-of-the-envelope' estimates (Medium)"],
    weak: ["Inconsistent, unclear, or unverified numbers (Weak)"]
  },
  whatHappensNext: {
    description: "Convert Quantified Impact → Business Case → Decision Justification.",
    doText: "Validate the numbers, expand the impact, aggregate to a yearly scale, and link it all to solution value.",
    dontItems: ["Ignore the numerical data", "Move ahead too fast without anchoring", "Jump to pricing prematurely"]
  },
  finalMentalModel: {
    title: "“The problem now has a price tag.”",
    description: "A quantified problem is a fundable problem. Your job is to build a compelling business case on the foundation of these numbers."
  },
  oneLineSummary: "When a buyer quantifies impact, the deal becomes financially real—your job is to turn that into a compelling business case.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
