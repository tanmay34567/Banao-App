import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "0-5",
  title: "No response after multiple touchpoints",
  track: "PRE-CONTACT . 06 OF 07",
  priority: "P1 - Priority",
  statusLabel: "Negative Signal",
  meaning: {
    description: "The buyer has deprioritized you (or never prioritized you to begin with). Silence is not an absence of signal; it is negative feedback indicating you are not important enough to respond to right now.",
    subSignals: [
      {
        title: "Broken Momentum",
        description: "The conversation flow has stopped."
      },
      {
        title: "Low Perceived Value",
        description: "Your messages are not triggering a response."
      },
      {
        title: "No Urgency",
        description: "The problem you are addressing isn't a current priority."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Responded earlier, then dropped",
        "Missed 1-2 replies (Recoverable)"
      ],
      quotes: [
        "(Previous engagement exists)"
      ]
    },
    fake: {
      bullets: [
        "Multiple ignored follow-ups",
        "No response across channels",
        "Long-term silence"
      ],
      quotes: [
        "(Total radio silence)"
      ]
    }
  },
  whyPriority: {
    description: "It indicates deal death or near-death. Mishandling it leads to pipeline pollution, time drain, and loss of credibility. Silence is a diagnostic signal.",
    strongRead: "Force a decision; regain relevance or exit.",
    misread: "Chasing endlessly; assuming they're just 'busy'."
  },
  fresherMustUnderstand: {
    description: "Silence is negative feedback. More generic follow-ups ('just checking in') do not revive deals; they lower your status.",
    items: [
      {
        title: "Silence is a Signal",
        description: "It's not an absence of response; it is a response indicating deprioritization."
      },
      {
        title: "Chasing ≠ Progress",
        description: "Generic follow-ups don't revive deals and can damage your reputation."
      },
      {
        title: "The Decision Point",
        description: "You must either reposition, multi-thread, or exit cleanly."
      }
    ]
  },
  authorityMoves: {
    description: "Break the pattern. Use loss framing and strategic disqualification to reclaim authority and force clarity.",
    items: [
      {
        title: "Move 1: Pattern Interrupt (Critical Reset)",
        wrong: "“Following up again…”",
        correct: "“Seems like this may not be a priority right now — should I close this from my end?”",
        outcome: "Breaks the pattern and creates tension that forces a response."
      },
      {
        title: "Move 2: Loss Framing",
        wrong: "Continuing to push without friction.",
        correct: "“If this is still relevant, happy to continue — otherwise I don’t want this to become background noise.”",
        outcome: "Shows respect for time and maintains authority."
      },
      {
        title: "Move 3: Relevance Re-anchor",
        wrong: "Repeating the same old pitch.",
        correct: "“When we last spoke, we touched on X — in similar cases, teams usually revisit this when Y becomes a constraint. Curious if that’s happening on your side?”",
        outcome: "Reconnects to value and introduces a specific trigger."
      },
      {
        title: "Move 4: Multi-Thread (If Applicable)",
        wrong: "Staying single-threaded with a non-responder.",
        correct: "“We’ve been discussing X with [name] — wanted to get your perspective as well” (to another stakeholder).",
        outcome: "Reduces dependency and revives the deal through the network."
      },
      {
        title: "Move 5: Strategic Disqualification",
        wrong: "Never closing the loop.",
        correct: "“Given current priorities, this might not be the right time — I’ll step back for now. Happy to reconnect when this becomes relevant.”",
        outcome: "Preserves dignity, keeps the door open, and avoids desperation."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Endless Chasing",
        description: "5+ follow-ups with no change in messaging.",
        consequence: "You become noise and are permanently de-prioritized."
      },
      {
        title: "Lowering Status",
        description: "Using phrases like 'Just checking in' or 'Gentle reminder'.",
        consequence: "Signals neediness and lack of control."
      },
      {
        title: "Ignoring the Signal",
        description: "Treating silence as neutral rather than negative.",
        consequence: "Wasted time on dead opportunities."
      },
      {
        title: "Not Closing the Loop",
        description: "Leaving stagnant deals in the pipeline indefinitely.",
        consequence: "Pipeline data becomes fiction."
      }
    ]
  },
  microSignals: {
    description: "Determine the recoverability of the situation based on previous engagement depth.",
    strong: ["Responded earlier, then dropped (Slightly Recoverable)"],
    medium: ["One or two missed replies (Neutral-Weak)"],
    weak: ["No response across channels / Multiple ignored follow-ups (Strong Negative)"]
  },
  whatHappensNext: {
    description: "Convert Silence → Clarity.",
    doText: "Break the pattern, re-anchor to value, and force a 'yes' or 'no'.",
    dontItems: ["Chase endlessly", "Use generic follow-up scripts", "Keep deal in limbo"]
  },
  finalMentalModel: {
    title: "“You lost priority — regain relevance or exit cleanly”",
    description: "Don't chase, don't assume. Force a decision to reclaim your time and positioning."
  },
  oneLineSummary: "Silence is not absence of response — it is a response. Treat it as such.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
