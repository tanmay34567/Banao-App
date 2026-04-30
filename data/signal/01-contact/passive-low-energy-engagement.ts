import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "1-4",
  title: "Passive / low energy engagement",
  track: "CONTACT . 05 OF 08",
  priority: "P2 - Priority",
  statusLabel: "Caution Signal",
  meaning: {
    description: "The buyer is present but not mentally invested. They are on the call but not in the conversation. This signals that they aren't convinced the topic matters yet and is a strong predictor of a weak deal quality.",
    subSignals: [
      {
        title: "Passive Presence",
        description: "Attendance without active contribution or curiosity."
      },
      {
        title: "Low Mental Investment",
        description: "Short answers and minimal reaction to insights or context."
      },
      {
        title: "Neutral Attendance",
        description: "Showing up only because it's on the calendar, not because of a felt need."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Short answers ('yeah', 'okay')",
        "No follow-up questions",
        "Minimal reaction to insights",
        "Letting you drive the entire agenda"
      ],
      quotes: [
        "“Yeah, makes sense.”",
        "“Okay, next slide.”"
      ]
    },
    fake: {
      bullets: [
        "Passive initially but improves after a pattern interrupt",
        "Quiet but taking detailed notes (monitor body language)",
        "Listening carefully (rare without active input)"
      ],
      quotes: [
        "(Silence while thinking or taking notes)"
      ]
    }
  },
  whyPriority: {
    description: "Passive buyers rarely convert into strong deals. If it continues, the deal weakens; if it improves, it strengthens. It's a directional signal that requires an immediate reset or disqualification.",
    strongRead: "Force clarity; create interest or walk away.",
    misread: "Assuming silence equals thoughtfulness; ignoring the warning."
  },
  fresherMustUnderstand: {
    description: "Silence is often disinterest or distraction, not careful listening. Engagement must be earned—if it's missing, it might be because you aren't relevant enough. This is a recoverable signal because you still have a live interaction.",
    items: [
      {
        title: "Earn the Right",
        description: "Engagement isn't guaranteed; if they are passive, you might be being too generic or talking too much."
      },
      {
        title: "Don't Compensate with Noise",
        description: "Talking more to fill the silence makes the passive engagement worse."
      },
      {
        title: "Live Interaction Advantage",
        description: "Unlike a ghosted email, you have a live human—use the moment to reset the frame."
      }
    ]
  },
  authorityMoves: {
    description: "Interrupt the pattern and force active participation. Shift from generic content to specific relevance or use controlled tension to surface the truth.",
    items: [
      {
        title: "Move 1: Pattern Interrupt (Immediate Reset)",
        wrong: "Continuing with the pitch as if they are fully engaged.",
        correct: "“Let me pause here — I might be going too generic. Does any of this actually connect to what you’re dealing with?”",
        outcome: "Creates awareness, forces engagement, and shows confidence."
      },
      {
        title: "Move 2: Direct Engagement Question",
        wrong: "Asking yes/no questions that encourage passive answers.",
        correct: "“From your side, what part of this is most relevant — if any?”",
        outcome: "Invites participation and tests their true level of interest."
      },
      {
        title: "Move 3: Re-anchor to Their Context",
        wrong: "Staying at a high-level overview.",
        correct: "“Earlier you mentioned X — how does this relate to that in your current setup?”",
        outcome: "Shifts from generic to specific and brings relevance back to the call."
      },
      {
        title: "Move 4: Increase Cognitive Load",
        wrong: "Making it too easy for them to just sit back and listen.",
        correct: "“If you had to choose — is your bigger constraint X or Y right now?”",
        outcome: "Forces them to think and triggers a more active response."
      },
      {
        title: "Move 5: Controlled Confrontation (Advanced)",
        wrong: "Ignoring the low energy and ending the call without clarity.",
        correct: "“Feels like this may not be a priority right now — is that fair?”",
        outcome: "Creates healthy tension and surfaces the truth about the deal's priority."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Talking More",
        description: "AE compensates for the buyer's silence by explaining more or adding features.",
        consequence: "Buyer disengages further; authority is lost."
      },
      {
        title: "Ignoring the Signal",
        description: "Continuing the call as if everything is fine and intent is high.",
        consequence: "You build a 'fake pipeline' of deals that will never close."
      },
      {
        title: "Blaming the Buyer",
        description: "Assuming they are just 'uninterested' without reflecting on your own delivery.",
        consequence: "Missing the opportunity to create relevance."
      },
      {
        title: "Ending Without Clarity",
        description: "Ending the call with a vague 'let's stay in touch'.",
        consequence: "No clear direction or momentum for the next steps."
      }
    ]
  },
  microSignals: {
    description: "Look for changes in energy or compounding disengagement.",
    strong: ["Passive initially, but improves after a pattern interrupt (Recoverable)"],
    medium: ["Consistently low energy throughout the call (Neutral/Negative)"],
    weak: ["Passive + distracted + disengaged (Strong Negative)"]
  },
  whatHappensNext: {
    description: "Convert Passive Presence → Active Engagement → Real Signal.",
    doText: "Interrupt the pattern, re-anchor relevance, ask engaging questions, and test seriousness.",
    dontItems: ["Assume seriousness", "Drift into casual talk", "Waste the opportunity to disqualify"]
  },
  finalMentalModel: {
    title: "“You have attention, but not interest — create it or walk away”",
    description: "Don't overvalue punctuality, but don't ignore it. Use it as a foundation to establish control and professional authority."
  },
  oneLineSummary: "Passive engagement is not neutral—it’s a warning. Fix it or exit early.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
