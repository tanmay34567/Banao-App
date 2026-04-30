import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "1-5",
  title: "Distracted (multitasking, no camera, etc.)",
  track: "CONTACT . 06 OF 08",
  priority: "P3 - Priority",
  statusLabel: "Caution Signal",
  meaning: {
    description: "The buyer’s attention is divided, not necessarily their intent. It means you don't have full attention right now, but shouldn't be immediately interpreted as the deal being dead.",
    subSignals: [
      {
        title: "Divided Attention",
        description: "Multitasking or external distractions during the call."
      },
      {
        title: "Low Attention Context",
        description: "Background noise, no camera, or delayed responses."
      },
      {
        title: "Unstable Engagement",
        description: "Brief moments of focus interrupted by other tasks."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Brief distraction, then re-engages",
        "Light multitasking but still responsive to questions",
        "Transparent about distractions (e.g., 'Sorry, just getting a ping')"
      ],
      quotes: [
        "“Sorry, go ahead — just had a quick ping.”"
      ]
    },
    fake: {
      bullets: [
        "Continuous distraction + low engagement",
        "Ignoring questions completely or frequently asking for repeats",
        "Extreme background noise or zero effort to focus"
      ],
      quotes: [
        "(Looking away constantly)",
        "“Sorry, what was that? I was just answering an email.”"
      ]
    }
  },
  whyPriority: {
    description: "It has low controllability and low diagnostic accuracy on its own. It could mean a busy schedule or low interest. Your job is to test which one it is without assuming the worst.",
    strongRead: "Stabilize attention; test intent.",
    misread: "Assuming distraction equals disinterest; overreacting."
  },
  fresherMustUnderstand: {
    description: "Distraction does not always mean disengagement. However, if it persists, it becomes a pattern. Your behavior can either improve or worsen their attention level.",
    items: [
      {
        title: "Don't Over-Judge",
        description: "External factors like back-to-back meetings are common; don't assume the deal is dead immediately."
      },
      {
        title: "Engagement improves Attention",
        description: "Active engagement and relevant questions can pull a distracted buyer back in."
      },
      {
        title: "Manage Attention, Not Intent",
        description: "Treat it as an unstable interaction state that needs stabilizing, not a final verdict on interest."
      }
    ]
  },
  authorityMoves: {
    description: "Reclaim attention through light check-ins and increasing interactivity. If distraction remains high, be prepared to reschedule to maintain quality and dignity.",
    items: [
      {
        title: "Move 1: Light Check-In (Non-Confrontational)",
        wrong: "Calling them out aggressively: “You seem distracted.”",
        correct: "“Let me pause — is this a good time, or should we pick a better slot?”",
        outcome: "Shows respect, gives them control, and tests their seriousness."
      },
      {
        title: "Move 2: Reclaim Attention",
        wrong: "Talking more to try and 'win' their attention back.",
        correct: "“I want to make this useful — from your side, what’s most important for us to focus on?”",
        outcome: "Pulls them back in and shifts from a monologue to an interaction."
      },
      {
        title: "Move 3: Increase Interactivity",
        wrong: "Continuing with long explanations.",
        correct: "“Between X and Y, which one is a bigger constraint right now?”",
        outcome: "Forces engagement and breaks passive consumption patterns."
      },
      {
        title: "Move 4: Tighten Communication",
        wrong: "Complex narratives and long-winded company intros.",
        correct: "Using short, sharp inputs and direct questions.",
        outcome: "Reduces the barrier to entry for their divided attention."
      },
      {
        title: "Move 5: Controlled Rescheduling (If Needed)",
        wrong: "Pushing through a low-quality call where no one is listening.",
        correct: "“Feels like you’ve got a lot going on — happy to reschedule and do this properly when you have space.”",
        outcome: "Maintains dignity, protects call quality, and signals confidence."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Ignoring Completely",
        description: "Continuing long explanations without checking in.",
        consequence: "You lose both attention and control over the call."
      },
      {
        title: "Overreacting",
        description: "Assuming they aren't interested just because they typed an email.",
        consequence: "Prematurely judging a potentially good deal."
      },
      {
        title: "Talking More",
        description: "AE talks faster or more to try and keep the buyer's attention.",
        consequence: "Makes the distraction worse and reduces relevance."
      },
      {
        title: "Calling It Out Aggressively",
        description: "“You seem distracted”",
        consequence: "Creates immediate defensiveness and kills the vibe."
      }
    ]
  },
  microSignals: {
    description: "Identify if the distraction is temporary or indicative of low priority.",
    strong: ["Brief distraction, then re-engages (Harmless Version)"],
    medium: ["Light multitasking, but still responsive (Neutral)"],
    weak: ["Continuous distraction + low engagement (Concerning)"]
  },
  whatHappensNext: {
    description: "Convert Split Attention → Focused Engagement OR Clean Exit.",
    doText: "Acknowledge lightly, re-engage actively, test attention, and decide whether to continue or reschedule.",
    dontItems: ["Ignore the behavior", "Overreact to a single instance", "Push blindly through a low-quality call"]
  },
  finalMentalModel: {
    title: "“Attention is unstable — stabilize it or pause the conversation”",
    description: "Manage the interaction quality. Don't assume intent from a temporary state of divided attention."
  },
  oneLineSummary: "Distraction is about attention, not intent—your job is to test which one it is.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
