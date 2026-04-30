import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "2-7",
  title: "No next step commitment",
  track: "INTEREST . 08 OF 09",
  priority: "P1 - Priority",
  statusLabel: "Negative Signal",
  meaning: {
    description: "The buyer is not willing to invest further time or move the deal forward. Deferring to 'later' without a concrete next step is a silent deal death signal—it means they are not prioritizing this enough to continue right now.",
    subSignals: [
      {
        title: "Momentum Stall",
        description: "Missing next steps directly lead to stalled deals and broken deal logic."
      },
      {
        title: "Polite Disengagement",
        description: "Buyers use vague language like 'stay in touch' to exit without being confrontational."
      },
      {
        title: "Low Ownership",
        description: "The buyer isn't taking responsibility for the next milestone in the evaluation."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Initially no step but open to AE's structured suggestion",
        "Wants to proceed but identifies a specific internal alignment blocker first",
        "Clear about why they need a few days to revisit"
      ],
      quotes: [
        "“Before we wrap—what do you think makes sense as a next step?”"
      ]
    },
    fake: {
      bullets: [
        "Avoids commitment entirely despite prompting",
        "No timeline or ownership shared for the next action",
        "Vague 'we'll see' responses to progress questions"
      ],
      quotes: [
        "“Let’s stay in touch.”",
        "“We’ll revisit later.”",
        "“I’ll get back to you.”",
        "“Send me details, I’ll check.”"
      ]
    }
  },
  whyPriority: {
    description: "Deals don’t stall randomly; they stall because of missing next steps. This is often the exact moment a deal dies while remaining in your pipeline. It is a critical signal because it forces you to decide between recovery and disqualification.",
    strongRead: "Force direction; don't accept ambiguity.",
    misread: "Accepting 'later' as a neutral or positive response."
  },
  fresherMustUnderstand: {
    description: "Every good call ends with a defined next step. A lack of commitment is often a responsibility failure—you must establish clear value and call control. Ambiguity is your enemy; force a decision point early.",
    items: [
      {
        title: "Call Ends = Step Defined",
        description: "If a call ends without a next step, you have lost control and momentum permanently."
      },
      {
        title: "Your Responsibility",
        description: "Missing steps often mean you failed to establish enough value or direction during the conversation."
      },
      {
        title: "Clarify or Disqualify",
        description: "Never accept 'later' blindly; either find a path forward or park the deal properly to save time."
      }
    ]
  },
  authorityMoves: {
    description: "Force clarity and surface intent. Don't be afraid to address the ambiguity directly or provide a structured path forward.",
    items: [
      {
        title: "Move 1: Directly Address It (Critical)",
        wrong: "“Sure, let’s stay in touch”",
        correct: "“Before we wrap—what do you think makes sense as a next step, if any?”",
        outcome: "Forces the buyer to articulate their real level of interest or intent."
      },
      {
        title: "Move 2: Offer Structured Next Step",
        wrong: "Ending the call without proposing a specific direction.",
        correct: "“Based on this, it might make sense to go deeper into X in the next conversation—does that feel relevant?”",
        outcome: "Provides a clear path for the buyer to commit to, making it easy to say yes."
      },
      {
        title: "Move 3: Test Priority",
        wrong: "Assuming that 'later' means 'in a few weeks'.",
        correct: "“Is this something you’d want to move forward with in the near term, or better to revisit later?”",
        outcome: "Separates real deals from polite delays and 'maybe-someday' conversations."
      },
      {
        title: "Move 4: Controlled Exit",
        wrong: "Chasing a buyer who has already checked out.",
        correct: "“Sounds like this isn’t a priority right now — I’ll step back for now and we can reconnect if this becomes relevant.”",
        outcome: "Maintains your authority and saves you from wasting cycles on a dead deal."
      },
      {
        title: "Move 5: Leave Clean Re-entry Path",
        wrong: "Ending the relationship with frustration or silence.",
        correct: "“If priorities change or this becomes more pressing, happy to pick this up again.”",
        outcome: "Keeps the door open for the future without letting the deal clutter your active pipeline."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Accepting Vague Ending",
        description: "Agreeing to 'connect later' without any structure, timeline, or owner.",
        consequence: "You lose all momentum and the deal silently disappears from your grasp."
      },
      {
        title: "Not Asking for Next Step",
        description: "Ending the call without ever proposing or asking for a progression.",
        consequence: "The buyer assumes the conversation is over and moves on to other priorities."
      },
      {
        title: "Artificial Pipeline",
        description: "Marking vague deals as 'warm' or 'in progress' in the CRM.",
        consequence: "Inflates pipeline numbers with dead deals, leading to bad forecasting and missed quotas."
      },
      {
        title: "Over-Chasing Dead Deals",
        description: "Sending repeated follow-ups to a buyer who avoided a next step.",
        consequence: "Damages your credibility and wastes time that could be spent on real opportunities."
      }
    ]
  },
  microSignals: {
    description: "Assess if the lack of commitment is a timing issue or a disinterest issue.",
    strong: ["No step initially, but open to your structured suggestion (Recoverable)"],
    medium: ["Vague 'we'll see' with no concrete blocker mentioned (Weak)"],
    weak: ["Avoids commitment entirely / No timeline / No ownership (Strong Negative)"]
  },
  whatHappensNext: {
    description: "Convert No Commitment → Clear Outcome.",
    doText: "Address the lack of step directly, offer a structured path, and be prepared to park the deal properly.",
    dontItems: ["Accept a vague ending", "Assume 'later' means they will reach out", "Keep a dead deal in your active pipeline"]
  },
  finalMentalModel: {
    title: "“The deal has no future path — create one or close it”",
    description: "Don't ignore the silence or ambiguity. Force a direction to either move the deal forward or exit cleanly."
  },
  oneLineSummary: "No next step is not a small issue—it’s the end of the deal unless you fix it.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
