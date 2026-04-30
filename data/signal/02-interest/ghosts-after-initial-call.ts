import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "2-8",
  title: "Ghosts after initial call",
  track: "INTEREST . 09 OF 09",
  priority: "P1 - Priority",
  statusLabel: "Negative Signal",
  meaning: {
    description: "The buyer has disengaged completely after the first interaction. This is almost never random—it’s a direct consequence of what happened (or didn't happen) in the first call. It indicates a loss of relevance, priority, or perceived value immediately after the first interaction.",
    subSignals: [
      {
        title: "Silent Rejection",
        description: "Buyers often choose silence over explicit rejection to avoid uncomfortable conversations."
      },
      {
        title: "Value Gap",
        description: "The perceived value of the solution didn't justify the effort or time required for continuation."
      },
      {
        title: "Post-Call Disengagement",
        description: "A total drop in interest despite appearing engaged during the live meeting."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Initially responded to follow-up, then dropped after a specific internal event",
        "Internal timing shift confirmed through other company news/channels",
        "Responds to a direct pattern-interrupt questioning relevance"
      ],
      quotes: [
        "“Feels like we may have missed the mark in the last conversation — if it’s not relevant, totally fine to pause.”"
      ]
    },
    fake: {
      bullets: [
        "Complete silence across all channels (Email, LinkedIn, Phone) for >7 days",
        "No replies to high-value, pattern-interrupt follow-ups",
        "Vague 'we're still looking at it' with zero follow-through engagement"
      ],
      quotes: [
        "(Complete Silence across all channels)",
        "“We’re still looking at it” (with no further interaction or timeline)"
      ]
    }
  },
  whyPriority: {
    description: "Ghosting is a post-call feedback signal. It tells you how the call was perceived and whether your value was clear. Chasing blindly won't fix it because the problem is upstream (call quality), not downstream (follow-up skill).",
    strongRead: "Force clarity or closure; diagnose call quality.",
    misread: "Blaming the buyer; assuming a few more follow-ups will 'wake them up'."
  },
  fresherMustUnderstand: {
    description: "Ghosting is not a follow-up problem—it’s a relevance problem revealed after the first call. More follow-ups won't fix poor positioning. Use this as a diagnosis moment to improve your future deal control and discovery skills.",
    items: [
      {
        title: "Upstream Problem",
        description: "The deal died in the call, not in the inbox. Fix your discovery and positioning first."
      },
      {
        title: "Silence = Decision",
        description: "In sales, silence is a very clear decision. Don't ignore it by pretending the deal is still 'warm'."
      },
      {
        title: "Stop the Chasing",
        description: "Repeatedly sending 'just checking in' messages destroys your authority and wastes valuable cycles."
      }
    ]
  },
  authorityMoves: {
    description: "Interrupt the ghosting pattern, re-anchor to the original problem, or offer a clean exit to maintain your professional dignity and force a response.",
    items: [
      {
        title: "Move 1: Pattern Interrupt Follow-Up (Critical)",
        wrong: "“Following up on this…”",
        correct: "“Seems like this may not have been a priority after our conversation — should I close this from my end?”",
        outcome: "Breaks the buyer's expectation of a typical follow-up, creates tension, and often forces a truthful response."
      },
      {
        title: "Move 2: Re-anchor to Value",
        wrong: "Sending the deck again without context or new insights.",
        correct: "“When we spoke, we touched on X — in similar situations, teams usually revisit this when Y becomes a constraint. Curious if that’s happening on your side?”",
        outcome: "Reintroduces relevance by connecting the solution back to a concrete internal pain point."
      },
      {
        title: "Move 3: Acknowledge Drop-Off",
        wrong: "Acting as if nothing is wrong while sending repeated generic follow-ups.",
        correct: "“Feels like we may have missed the mark in the last conversation — if it’s not relevant, totally fine to pause.”",
        outcome: "Shows awareness and professionalism, reducing the buyer's pressure and increasing the chance of an honest update."
      },
      {
        title: "Move 4: Offer Clear Exit",
        wrong: "Keeping the deal open indefinitely in your active pipeline.",
        correct: "“I’ll step back for now — happy to reconnect if this becomes relevant later.”",
        outcome: "Maintains your dignity and saves you from the cycle of unrequited chasing."
      },
      {
        title: "Move 5: Internal Reflection (Most Important)",
        wrong: "Blaming the 'unresponsive' or 'unprofessional' buyer.",
        correct: "Diagnose: Did I jump to solution too early? Was discovery shallow? Did I fail to anchor the problem?",
        outcome: "Turns a lost deal into a training lesson that improves your success rate on the next opportunity."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Over-Chasing",
        description: "Sending multiple follow-ups with no change in messaging or value add.",
        consequence: "You become background noise and get ignored permanently or blocked."
      },
      {
        title: "Blaming the Buyer",
        description: "Thinking 'the buyer is being difficult' instead of questioning your call quality.",
        consequence: "You fail to learn the necessary lessons to stop ghosting from happening in future deals."
      },
      {
        title: "Ignoring the Signal",
        description: "Keeping the deal marked as 'warm' in the CRM despite weeks of silence.",
        consequence: "Creates a fake pipeline and leads to inaccurate forecasting and missed quotas."
      },
      {
        title: "No Pattern Interrupt",
        description: "Using standard templates that the buyer is already filtering out as low-value noise.",
        consequence: "The buyer has no reason to break their silence and engage with you again."
      }
    ]
  },
  microSignals: {
    description: "Determine if there is any path to recovery.",
    strong: ["Responded initially to follow-up, then dropped (Slightly Recoverable)"],
    medium: ["One or two missed replies in a busy week (Neutral)"],
    weak: ["Complete silence across all channels for >7 days (Strong Negative)"]
  },
  whatHappensNext: {
    description: "Convert Ghosting → Clarity OR Closure.",
    doText: "Send a pattern interrupt, re-anchor to the core problem, and be prepared to disqualify the deal.",
    dontItems: ["Chase blindly", "Ignore the clear signal of disengagement", "Keep the deal in your active forecast"]
  },
  finalMentalModel: {
    title: "“Relevance is your only lifeline.”",
    description: "You lost relevance after the first interaction. Either re-establish it immediately or exit with your authority intact."
  },
  oneLineSummary: "Ghosting is not a follow-up problem—it’s a relevance problem revealed after the first call.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
