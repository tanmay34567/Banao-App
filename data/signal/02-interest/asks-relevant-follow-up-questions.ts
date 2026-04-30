import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "2-0",
  title: "Asks relevant follow-up questions",
  track: "INTEREST . 01 OF 07",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer is processing, evaluating, and engaging with the problem/solution. They have crossed from passive listening to active thinking, connecting dots and testing applicability to their own world.",
    subSignals: [
      {
        title: "Active Thinking",
        description: "Buyer is building a mental model of how the solution fits their reality."
      },
      {
        title: "Cognitive Investment",
        description: "Willingness to spend mental energy on the details of the interaction."
      },
      {
        title: "Relevance Formation",
        description: "Interest is shifting from generic curiosity to specific, applied evaluation."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Contextual + layered questions",
        "References earlier discussion points",
        "Applied directly to their specific situation"
      ],
      quotes: [
        "“How would this work in our setup?”",
        "“What happens if X doesn’t exist on our side?”",
        "“How do teams usually handle Y in this case?”",
        "“What’s the trade-off between A and B here?”"
      ]
    },
    fake: {
      bullets: [
        "Feature-based curiosity only",
        "Generic or unstructured questions",
        "No reference to their own internal context"
      ],
      quotes: [
        "“Do you have a mobile app?”",
        "“How much does it cost?”"
      ]
    }
  },
  whyPriority: {
    description: "The buyer has entered evaluation mode, indicating high cognitive investment and that a decision process is beginning. If handled well, it accelerates the deal; if mishandled, momentum breaks.",
    strongRead: "Guide the evaluation; don't just answer.",
    misread: "Answering literally or shortly; missing the chance to guide their thinking."
  },
  fresherMustUnderstand: {
    description: "Questions equal thinking, not just curiosity. Don't rush to answer; instead, try to understand why they are asking and what they are evaluating. This is your primary opportunity to control and guide their evaluation process.",
    items: [
      {
        title: "Questions = Thinking",
        description: "The buyer is trying to build a mental model of your value; treat it as an evaluation step, not a chore."
      },
      {
        title: "Don't Rush to Answer",
        description: "First understand the intent and motivation behind the question before providing a solution."
      },
      {
        title: "Control Opportunity",
        description: "Use your answers to shape how they think, what they prioritize, and how they judge the solution."
      }
    ]
  },
  authorityMoves: {
    description: "Don't just respond—shape the evaluation. Answer clearly but always expand or redirect to deepen the discovery and maintain your role as a strategic guide.",
    items: [
      {
        title: "Move 1: Answer + Expand (Critical)",
        wrong: "Giving a direct, short answer without any follow-up.",
        correct: "“Good question — short answer is X. But more importantly, this depends on how your current setup handles Y. How does that work on your side?”",
        outcome: "Answers the buyer while redirecting to deeper discovery and context."
      },
      {
        title: "Move 2: Clarify Intent Behind Question",
        wrong: "Assuming you know why they are asking.",
        correct: "“When you ask that — are you thinking more about implementation or impact?”",
        outcome: "Tailors your response to their specific mental state and evaluation criteria."
      },
      {
        title: "Move 3: Introduce Trade-offs",
        wrong: "Presenting the solution as a perfect, no-compromise option.",
        correct: "“You can approach this in two ways — if you optimize for X, you trade off Y. How are you thinking about that?”",
        outcome: "Elevates the conversation and positions you as a high-value expert guide."
      },
      {
        title: "Move 4: Re-anchor to Their Context",
        wrong: "Providing generic, one-size-fits-all answers.",
        correct: "“In your case, since you mentioned X earlier, this would likely show up as Y — does that align?”",
        outcome: "Keeps relevance high and anchors the answer to their tangible reality."
      },
      {
        title: "Move 5: Encourage More Questions",
        wrong: "Ending the topic as soon as you've answered.",
        correct: "“What else are you thinking through right now?”",
        outcome: "Opens space for more engagement and deeper participant buy-in."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Answering Too Literally",
        description: "Just answering the surface-level question without any expansion or redirection.",
        consequence: "You miss the opportunity to guide their mental model and decision criteria."
      },
      {
        title: "Information Dump",
        description: "Over-explaining with too much detail or long feature lists.",
        consequence: "Overwhelms the buyer and dilutes the strategic focus of the deal."
      },
      {
        title: "Not Connecting to Context",
        description: "Answering generically rather than tying it to their shared world.",
        consequence: "Relevance decays and the conversation starts feeling like a generic vendor pitch."
      },
      {
        title: "Treating All Questions Equally",
        description: "Failing to distinguish between strategic evaluation and surface-level curiosity.",
        consequence: "Misallocates your energy and misses the real deal-driving motivations."
      }
    ]
  },
  microSignals: {
    description: "Categorize the quality and intent of the questions asked.",
    strong: ["Contextual + layered questions referencing earlier discussion (Strong Version)"],
    medium: ["Relevant but shallow questions (Neutral)"],
    weak: ["Feature-based curiosity only (Weak Signal)"]
  },
  whatHappensNext: {
    description: "Convert Questions → Structured Evaluation → Decision Momentum.",
    doText: "Answer and expand, understand the intent, introduce trade-offs, and anchor to their context.",
    dontItems: ["Answer passively", "Over-explain features", "Lose control of the conversation flow"]
  },
  finalMentalModel: {
    title: "“The buyer is thinking — now guide how they think”",
    description: "Don't just respond. Shape the buyer's evaluation process by adding depth and context to every answer."
  },
  oneLineSummary: "Relevant questions mean the buyer is evaluating—your job is to guide the evaluation, not just answer it.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
