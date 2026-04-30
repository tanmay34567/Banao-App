import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "3-0",
  title: "Shares detailed workflows / process",
  track: "DISCOVERY . 01 OF 09",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer is opening up how their system actually works—not just describing the problem. This provides deep operational visibility into the step-by-step flow, roles involved, tools used, and specific failure points. It allows for system-level understanding rather than surface-level conversation.",
    subSignals: [
      {
        title: "Operational Transparency",
        description: "Letting you inside their system and exposing actual mechanics."
      },
      {
        title: "Breakpoint Identification",
        description: "Highlighting exactly where current processes slow down or fail."
      },
      {
        title: "Stakeholder Mapping",
        description: "Revealing the specific roles and handoffs within the workflow."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Step-by-step flow including specific roles and tools mentioned",
        "Clear identification of where things break down most often",
        "Acknowledgement of edge cases and variations in the process"
      ],
      quotes: [
        "“First the lead comes in from X, then it gets assigned to Y…”",
        "“We currently do A → B → C, but at B things slow down…”",
        "“This goes through ops, then finance, then back to sales…”"
      ]
    },
    fake: {
      bullets: [
        "High-level steps with no operational or tool-level detail",
        "Vague descriptions without naming specific roles or departments",
        "Generic process that sounds like a textbook example rather than reality"
      ],
      quotes: [
        "“We have a standard sales process.”",
        "“Our team handles onboarding internally.”"
      ]
    }
  },
  whyPriority: {
    description: "You now understand reality, not just perception. This unlocks root cause identification, solution design accuracy, and real value articulation. Strong deals are built on this operational truth, while weak ones are exposed by a lack of it.",
    strongRead: "Understand the system better than the buyer explains it.",
    misread: "Treating this as a simple information dump or passive note-taking mode."
  },
  fresherMustUnderstand: {
    description: "This is gold—don't waste it by staying at the surface level. Most buyers avoid this level of detail. When they open up, you're no longer just taking notes; you're reverse-engineering their system. This is where you earn authority as an advisor by identifying gaps they haven't seen.",
    items: [
      {
        title: "Operational Gold",
        description: "Very few buyers share this level of detail; it's a major sign of trust and intent."
      },
      {
        title: "Not Note-Taking Mode",
        description: "You must actively structure, question, and validate the flow as they speak."
      },
      {
        title: "Earn Advisor Status",
        description: "Sharp questions about breakpoints and inefficiencies prove you understand their world."
      }
    ]
  },
  authorityMoves: {
    description: "Map the flow actively, identify friction points, and link the process directly to business impact.",
    items: [
      {
        title: "Move 1: Map the Flow Actively",
        wrong: "Passive listening without confirming the structure.",
        correct: "“So just to map this — it starts at X, then moves to Y, then Z. Is that correct?”",
        outcome: "Shows high level of understanding and creates a shared structural reality."
      },
      {
        title: "Move 2: Identify Breakpoints (Critical)",
        wrong: "Documenting the 'ideal' process only.",
        correct: "“Where in this flow does it break down most often?”",
        outcome: "Focuses the conversation on friction and high-leverage pain points."
      },
      {
        title: "Move 3: Highlight Inefficiencies",
        wrong: "Ignoring obvious gaps or delays in their description.",
        correct: "“It seems like there’s a delay between X and Y — what usually causes that?”",
        outcome: "Surfaces hidden problems and adds immediate diagnostic insight."
      },
      {
        title: "Move 4: Test Variations",
        wrong: "Assuming the process is static and identical every time.",
        correct: "“Does this flow stay consistent, or does it change depending on the situation?”",
        outcome: "Uncovers edge cases and prevents oversimplification of the solution design."
      },
      {
        title: "Move 5: Link to Impact",
        wrong: "Discussing the process as an isolated technical sequence.",
        correct: "“When this slows down here, what does it affect downstream in terms of [Outcome]?”",
        outcome: "Connects operational mechanics directly to business impact and value."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Passive Listening",
        description: "Letting the buyer talk without adding structure or asking probing questions.",
        consequence: "You fail to add value and miss the opportunity to show expertise."
      },
      {
        title: "Not Structuring",
        description: "Failing to summarize the flow back to the buyer to confirm accuracy.",
        consequence: "The buyer feels misunderstood and doubts your ability to solve the problem."
      },
      {
        title: "Jumping to Solution",
        description: "Interrupting the workflow description to explain how your product fixes it.",
        consequence: "You appear premature and likely miss the full picture of the problem."
      },
      {
        title: "Ignoring Gaps",
        description: "Not questioning inconsistencies or obvious omissions in their described process.",
        consequence: "Leads to a weak diagnosis and a solution that fails to address root causes."
      }
    ]
  },
  microSignals: {
    description: "Assess the depth of the operational disclosure.",
    strong: ["Full workflow + specific roles + clear pain points shared (Strong)"],
    medium: ["Process described but with limited tool or specific role detail (Medium)"],
    weak: ["High-level steps with zero operational friction mentioned (Weak)"]
  },
  whatHappensNext: {
    description: "Convert Workflow → Bottlenecks → Root Cause → Solution Design.",
    doText: "Map the process clearly, identify the breakpoints, understand variations, and link it all to business impact.",
    dontItems: ["Jump ahead to solutioning", "Stay at a surface-level description", "Treat the conversation as a one-way info dump"]
  },
  finalMentalModel: {
    title: "“Reverse-engineer the system.”",
    description: "You are inside their system now. Your goal is to understand it better than the buyer can explain it, identifying the invisible friction points."
  },
  oneLineSummary: "When a buyer shares their workflow, you’re no longer discovering—you’re reverse-engineering their system. Do it properly.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
