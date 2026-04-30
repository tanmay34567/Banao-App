import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "1-6",
  title: "Late / reschedules multiple times",
  track: "CONTACT . 07 OF 08",
  priority: "P1 - Priority",
  statusLabel: "Negative Signal",
  meaning: {
    description: "The buyer is consistently deprioritizing this conversation. Once it happens multiple times, it becomes a pattern of low priority rather than just being 'busy' or 'unlucky scheduling'.",
    subSignals: [
      {
        title: "Consistent Deprioritization",
        description: "The buyer chooses other tasks over this conversation repeatedly."
      },
      {
        title: "Low Seriousness",
        description: "Meeting the AE is seen as a low-value or low-priority task."
      },
      {
        title: "Broken Momentum",
        description: "Repeated delays prevent the deal from gaining internal weight or context."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "One-time delay with sincere apology",
        "Reschedules but proposes new time quickly",
        "Clear external blocker shared"
      ],
      quotes: [
        "“So sorry, something urgent came up. Can we do 3pm today instead?”"
      ]
    },
    fake: {
      bullets: [
        "Repeated rescheduling without clear reason",
        "No urgency in finding a new time",
        "No ownership of the delay or ghosting"
      ],
      quotes: [
        "(Ghosted meeting)",
        "“Let's just push this to next week.”"
      ]
    }
  },
  whyPriority: {
    description: "It directly reflects priority and seriousness. It's highly diagnostic—deals rarely close when meetings are repeatedly delayed and momentum is broken early. Ignoring this leads to massive time drain.",
    strongRead: "Force prioritization; set boundaries.",
    misread: "Rationalizing for the buyer; unlimited flexibility."
  },
  fresherMustUnderstand: {
    description: "Time is a proxy for priority. Everyone is busy; priority decides behavior. Unlimited flexibility signals low value and a lack of professional boundaries.",
    items: [
      {
        title: "Time = Priority Proxy",
        description: "Buyers show disinterest by not showing up or delaying, even if they don't say it."
      },
      {
        title: "Don't Rationalize",
        description: "Assuming 'they must be busy' ignores the fact that they are choosing to be busy with other things."
      },
      {
        title: "Control Test",
        description: "Accommodating every reschedule signals that your time and your solution are low value."
      }
    ]
  },
  authorityMoves: {
    description: "Stop passive chasing. Reposition yourself by acknowledging the pattern and testing the deal's priority directly.",
    items: [
      {
        title: "Move 1: Pattern Acknowledgement (Critical)",
        wrong: "“No problem, let’s reschedule again”",
        correct: "“Seems like timing has been tricky — should we pause this for now and revisit when it’s more of a priority?”",
        outcome: "Stops passive chasing and creates immediate clarity."
      },
      {
        title: "Move 2: Priority Test",
        wrong: "Guessing why they are late or busy.",
        correct: "“Just to align — is this something you’re actively looking to move on right now, or better to pick up later?”",
        outcome: "Surfaces the truth about the deal's current priority level."
      },
      {
        title: "Move 3: Controlled Scarcity",
        wrong: "Being available at any time the buyer suggests.",
        correct: "“Happy to continue — I’d just want to make sure we block time when we can give this proper attention.”",
        outcome: "Signals that your time has value and sets professional expectations."
      },
      {
        title: "Move 4: Reset Engagement",
        wrong: "Letting momentum die slowly.",
        correct: "“Let’s lock a time that works properly — otherwise we’ll keep losing momentum.”",
        outcome: "Reinforces seriousness and brings structure back to the deal."
      },
      {
        title: "Move 5: Strategic Exit (Very Important)",
        wrong: "Chasing forever.",
        correct: "“Given current priorities, it probably makes sense to pause this — happy to reconnect when this becomes more relevant.”",
        outcome: "Preserves dignity and keeps the door open for the future without wasting cycles."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Unlimited Flexibility",
        description: "Rescheduling endlessly and always adjusting to their schedule.",
        consequence: "You become permanently low priority."
      },
      {
        title: "Ignoring the Pattern",
        description: "Treating every delay as an isolated, unlucky incident.",
        consequence: "You miss the clear signal of deprioritization."
      },
      {
        title: "Over-Chasing",
        description: "Sending constant reminders and asking repeatedly for new times.",
        consequence: "Damages your positioning and looks desperate."
      },
      {
        title: "No Boundary Setting",
        description: "Never pushing back or questioning the rescheduling pattern.",
        consequence: "The buyer loses respect for your time."
      }
    ]
  },
  microSignals: {
    description: "Identify if the behavior is a one-off issue or a recurring priority problem.",
    strong: ["Reschedules but apologizes + proposes new time quickly (Recoverable)"],
    medium: ["Occasional delays (Neutral)"],
    weak: ["Repeated rescheduling / No urgency / No ownership (Strong Negative)"]
  },
  whatHappensNext: {
    description: "Convert Delay Pattern → Priority Clarity.",
    doText: "Acknowledge the pattern, test the priority, and be prepared to park the deal if needed.",
    dontItems: ["Chase endlessly", "Assume it's just a scheduling issue", "Wait for the buyer to disqualify themselves"]
  },
  finalMentalModel: {
    title: "“You are not a priority — change that or stop investing”",
    description: "Don't chase and don't assume. Force prioritization to either move the deal forward or park it cleanly."
  },
  oneLineSummary: "Repeated rescheduling is not a scheduling issue—it’s a priority issue. Treat it like one.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
