import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "0-6",
  title: "Redirects to generic email / junior",
  track: "PRE-CONTACT . 07 OF 07",
  priority: "P1 - Priority",
  statusLabel: "Negative Signal",
  meaning: {
    description: "The buyer has downgraded your importance and your level. This is not about process; it's about perception. You've been filtered out or classified as a non-strategic vendor.",
    subSignals: [
      {
        title: "“Email info@…”",
        description: "You’re not worth my time"
      },
      {
        title: "“Talk to my associate”",
        description: "This is not strategic"
      },
      {
        title: "“Looping in X”",
        description: "You don’t need me involved"
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Redirect with context",
        "Continued senior involvement",
        "Correct stakeholder routing"
      ],
      quotes: [
        "“Looping in our operations head — they handle this”"
      ]
    },
    fake: {
      bullets: [
        "Generic inbox redirection",
        "Junior-only engagement",
        "No senior involvement from original contact"
      ],
      quotes: [
        "“Reach out to our generic email / junior team member”"
      ]
    }
  },
  whyPriority: {
    description: "You have lost authority at the entry point. If this sticks, you'll be stuck in low-level conversations with no access to decision-makers and weak positioning permanently.",
    strongRead: "Maintain authority; re-elevate.",
    misread: "Accepting logistics as process; losing leverage."
  },
  fresherMustUnderstand: {
    description: "This is not logistics; it's a judgment about your relevance and level. Accepting blindly traps you in a junior loop that is hard to climb back up from.",
    items: [
      {
        title: "This is NOT Logistics",
        description: "It's a judgment about your strategic relevance and authority level."
      },
      {
        title: "You've Been Classified",
        description: "The buyer sees you as a low-priority vendor, not a strategic partner."
      },
      {
        title: "The Junior Loop Trap",
        description: "Accepting delegation blindly makes it extremely hard to re-engage senior decision-makers."
      }
    ]
  },
  authorityMoves: {
    description: "Re-anchor your level. Don't resist blindly, but don't accept blindly either. Test the intent behind the redirection and maintain senior threads.",
    items: [
      {
        title: "Move 1: Soft Pushback (Critical)",
        wrong: "“Sure, I’ll reach out to them”",
        correct: "“Happy to connect — just so I approach this correctly, is this something you’d typically stay involved in, or better handled fully by them?”",
        outcome: "Tests intent and signals that you expect relevance."
      },
      {
        title: "Move 2: Re-anchor Importance",
        wrong: "Accepting the downgrade without a fight.",
        correct: "“The reason I reached out to you specifically is because this usually impacts X at your level — want to make sure we’re aligning this correctly.”",
        outcome: "Re-elevates the conversation and justifies senior involvement."
      },
      {
        title: "Move 3: Dual Threading (Very Powerful)",
        wrong: "Choosing one path and losing the other.",
        correct: "“I’ll connect with them for details — and maybe we can sync briefly once there’s clarity on whether this is worth pursuing?”",
        outcome: "Keeps the senior loop alive while still following the redirection."
      },
      {
        title: "Move 4: Qualification Check",
        wrong: "Assuming all redirection is negative.",
        correct: "“Got it — just to confirm, would they be evaluating this independently, or would this still need alignment at your level later?”",
        outcome: "Helps you understand the real decision flow."
      },
      {
        title: "Move 5: Controlled Acceptance (If Needed)",
        wrong: "Disappearing into the junior loop.",
        correct: "“Makes sense — I’ll connect with them and circle back with a summary if we see something meaningful here.”",
        outcome: "Maintains authority and signals that you will come back up."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Blind Acceptance",
        description: "Immediately moving to the junior or generic inbox without question.",
        consequence: "You lose access, leverage, and deal quality."
      },
      {
        title: "Not Questioning",
        description: "Assuming this is just 'how the process works'.",
        consequence: "You fail to see that you're being filtered out."
      },
      {
        title: "Staying Stuck",
        description: "Spending weeks with low-context stakeholders who have no power.",
        consequence: "Deal stalls and eventually dies."
      },
      {
        title: "Losing Original Contact",
        description: "Failing to maintain a connection with the senior stakeholder.",
        consequence: "The deal loses momentum and internal weight."
      }
    ]
  },
  microSignals: {
    description: "Determine if the redirection is healthy process or negative filtering.",
    strong: ["Redirect with context + continued involvement (Recoverable)"],
    medium: ["Redirect without clarity (Weak)"],
    weak: ["Generic inbox / Junior-only engagement / No senior involvement (Strong Negative)"]
  },
   whatHappensNext: {
    description: "Convert Delegation → Structured Stakeholder Map.",
    doText: "Understand why you were redirected, maintain the original thread, and evaluate the new stakeholder's actual role.",
    dontItems: ["Fully shift down", "Accept passively", "Lose senior access"]
  },
  finalMentalModel: {
    title: "“You’ve been pushed down — climb back or accept a smaller deal”",
    description: "Don't resist blindly, but don't accept blindly. Re-anchor your level to maintain the deal's strategic value."
  },
  oneLineSummary: "Redirection is not process — it’s positioning feedback. Handle it accordingly.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
