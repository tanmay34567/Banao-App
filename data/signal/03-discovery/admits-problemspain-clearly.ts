import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "3-1",
  title: "Admits problems / pain clearly",
  track: "DISCOVERY . 02 OF 09",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer is openly acknowledging a real problem that affects them. This is the moment discovery shifts from exploration to problem ownership. It indicates that the buyer sees a real issue—delays, losses, inefficiencies—that they haven't been able to fix. Pain is the engine of the deal; without it, there is no urgency or priority.",
    subSignals: [
      {
        title: "Problem Ownership",
        description: "Shifting from 'there might be an issue' to 'this is a problem for us'."
      },
      {
        title: "Intensity Discovery",
        description: "Revealing the severity and emotional/business weight of the issue."
      },
      {
        title: "Decision Driver",
        description: "The problem starts to form the basis for future justification and urgency."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Clear admission of a specific current struggle or bottleneck",
        "Acknowledgement of failed internal attempts to fix the problem",
        "Impact described in terms of concrete delays, losses, or inefficiencies"
      ],
      quotes: [
        "“This is a real issue for us right now.”",
        "“We’re struggling with this, and it’s causing significant delays.”",
        "“We haven’t been able to fix this internally so far.”"
      ]
    },
    fake: {
      bullets: [
        "Abstract mention of general industry problems with no local ownership",
        "Casual reference to an issue with no stated impact or priority",
        "Problem stated but immediately dismissed as 'not a big deal for us'"
      ],
      quotes: [
        "“Yeah, everyone in our space has that problem I guess.”",
        "“It's a bit annoying but we're mostly fine with it.”"
      ]
    }
  },
  whyPriority: {
    description: "Pain is the primary engine of a deal. Without clear, admitted pain, there is no urgency, no priority, and ultimately no decision. A stated problem is just the start—it must be developed into quantified, urgent pain to drive a real deal forward.",
    strongRead: "The problem is real—now make it important enough to act on.",
    misread: "Jumping to solution immediately after pain is admitted."
  },
  fresherMustUnderstand: {
    description: "This is a turning point in the deal, but don't rush to solve it yet. You still don't know the root cause, the full impact, or who else is affected. Pain must be expanded and deepened, not just noted. A stated problem is not enough; only quantified, urgent pain drives decisions.",
    items: [
      {
        title: "Turning Point",
        description: "This is where you shift from being an explorer to a deal-shaper."
      },
      {
        title: "Don't Rush to Solve",
        description: "You need to understand root causes and organizational impact before suggesting fixes."
      },
      {
        title: "Develop the Pain",
        description: "Pain that isn't expanded and deepened will decay back into 'not a priority' very quickly."
      }
    ]
  },
  authorityMoves: {
    description: "Acknowledge the pain calmly, then immediately move to quantify its impact, understand its frequency, and identify its consequences.",
    items: [
      {
        title: "Move 1: Acknowledge Without Overreacting",
        wrong: "“That’s a huge problem!” (Over-excited) or ignoring it entirely.",
        correct: "“Got it — let’s break that down a bit”",
        outcome: "Maintains professional authority while inviting the buyer to go deeper."
      },
      {
        title: "Move 2: Quantify Impact (Critical)",
        wrong: "Discussing pain only in emotional or abstract terms without metrics.",
        correct: "“What does this translate to in terms of impact — time, cost, or output?”",
        outcome: "Moves the conversation from a vague 'problem' to a measurable business impact."
      },
      {
        title: "Move 3: Understand Frequency",
        wrong: "Assuming a one-time issue is a systemic, high-priority problem.",
        correct: "“How often does this happen?”",
        outcome: "Gauges the severity and inherent urgency of the situation."
      },
      {
        title: "Move 4: Identify Consequences",
        wrong: "Failing to project the current problem into future risks.",
        correct: "“If this continues as-is, what does that affect over the next few months?”",
        outcome: "Surfaces future risk and builds necessary urgency for a decision."
      },
      {
        title: "Move 5: Connect to Personal Stakes",
        wrong: "Treating the problem as purely corporate or technical with no human element.",
        correct: "“How does this impact you or your team directly?”",
        outcome: "Adds a personal motivation layer, making the buyer a true internal advocate."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Jumping to Solution",
        description: "Trying to pitch the product as soon as any problem is mentioned.",
        consequence: "Weakens your expert positioning and likely misses the root cause."
      },
      {
        title: "Staying Surface-Level",
        description: "Failing to ask about impact, frequency, or future consequences.",
        consequence: "The pain remains weak and 'not urgent' in the buyer's mind."
      },
      {
        title: "Over-Sympathizing",
        description: "“That sounds really bad, I'm so sorry...”",
        consequence: "Destroys authority; you sound like a peer or friend, not a consultant."
      },
      {
        title: "Not Connecting to Business Impact",
        description: "Treating the problem as only technical or operational with no financial link.",
        consequence: "Missing the decision-level importance that justifies a high-value purchase."
      }
    ]
  },
  microSignals: {
    description: "Determine the intensity and ownership of the admitted pain.",
    strong: ["Clear pain + quantified impact + stated urgency (Strong Version)"],
    medium: ["Clear pain admitted, but no numbers or definite timeline yet (Medium)"],
    weak: ["Problem stated, but zero ownership or urgency expressed (Weak)"]
  },
  whatHappensNext: {
    description: "Convert Pain → Quantified Impact → Urgency → Justification.",
    doText: "Expand the problem, quantify the impact, understand the consequences, and link to stakeholders.",
    dontItems: ["Jump to solution", "Move ahead too fast", "Assume urgency exists without building it"]
  },
  finalMentalModel: {
    title: "“Make it important enough to act on.”",
    description: "The problem is real—now you must intensify and structure the pain so it becomes an unavoidable priority."
  },
  oneLineSummary: "A stated problem is not enough—only quantified, urgent pain drives decisions. Your job is to build that.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
