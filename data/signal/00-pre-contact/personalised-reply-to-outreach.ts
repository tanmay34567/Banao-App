import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "0-0",
  title: "Personalised reply to outreach",
  track: "PRE-CONTACT . 01 OF 07",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer didn’t just notice you — they mentally engaged with your context. This is the earliest proof of relevance, cognitive connection, and potential problem-awareness.",
    subSignals: [
      {
        title: "Relevance",
        description: "The buyer acknowledges that your context applies to them."
      },
      {
        title: "Cognitive Connection",
        description: "They have mentally mapped your outreach to their reality."
      },
      {
        title: "Problem Awareness",
        description: "A potential problem is recognized as real and alive."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Refers to company / role / problem",
        "Mentions something specific you said",
        "Connects to a real use-case"
      ],
      quotes: [
        "“This is relevant to what we’re trying with our onboarding flows”",
        "“We’ve been facing something similar in our sales process”",
        "“Curious how this would apply to our use case”"
      ]
    },
    fake: {
      bullets: [
        "“Sounds interesting”",
        "“Tell me more”",
        "“Can you share details?”"
      ],
      quotes: [
        "“Sounds interesting”",
        "“Tell me more”",
        "“Can you share details?”"
      ]
    }
  },
  whyPriority: {
    description: "It determines whether you’re entering a real opportunity OR just noise. This signal is the fork in the road.",
    strongRead: "push forward with authority.",
    misread: "waste cycles on non-deals."
  },
  fresherMustUnderstand: {
    description: "This is NOT “interest”. It is “Initial cognitive alignment”. Very early stage. Fragile.",
    items: [
      {
        title: "Initial Cognitive Alignment",
        description: "Early stage and fragile connection."
      },
      {
        title: "Not Interest Yet",
        description: "Does NOT mean budget exists, urgency exists, or deal is real."
      },
      {
        title: "Permission to Explore",
        description: "It ONLY means you have permission to explore deeper."
      }
    ]
  },
  authorityMoves: {
    description: "Maintain control and status from the first touch. Juniors often become eager and authority collapses.",
    items: [
      {
        title: "Move 1: Frame Control (Immediate)",
        wrong: "“Thanks for your reply! Let me tell you more…”",
        correct: "“Glad this is relevant — usually when teams mention this, it ties back to one of 2–3 underlying constraints. Happy to explore if that’s the case here.”",
        outcome: "You don't chase, you set direction, and you maintain authority."
      },
      {
        title: "Move 2: Insight Injection (Early)",
        wrong: "Explaining product details immediately.",
        correct: "“In similar cases, we usually see X happening behind the scenes — curious if that’s true for you as well?”",
        outcome: "Elevate conversation and move from vendor to thinking partner."
      },
      {
        title: "Move 3: Soft Qualification (Important)",
        wrong: "Ignoring the buyer's current solving stage.",
        correct: "“Just to make sure this is worth exploring — are you already actively looking at solving this, or still early stage?”",
        outcome: "Filters noise and signals you value your time."
      },
      {
        title: "Move 4: Controlled Next Step",
        wrong: "“Let’s book a call”",
        correct: "“If it makes sense, we can spend 20 mins mapping how this shows up in your setup and whether it’s even worth solving right now.”",
        outcome: "Frames the call as exploration, not a pitch."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Over-Excitement",
        description: "“Amazing! This is exactly what we do…”",
        consequence: "You instantly become low-status and salesy."
      },
      {
        title: "Info Dump",
        description: "Sending deck, long explanation, or explaining product.",
        consequence: "Kills curiosity."
      },
      {
        title: "No Direction",
        description: "“Let me know how you want to proceed”",
        consequence: "You gave up control."
      },
      {
        title: "Assuming Deal is Real",
        description: "Treating it as a started deal.",
        consequence: "Mistaking an opened door for a started deal."
      }
    ]
  },
  microSignals: {
    description: "Read the texture of the response to understand depth.",
    strong: ["Mentions problem + context (Higher probability)"],
    medium: ["Mentions relevance only (Needs probing)"],
    weak: ["Generic interest (Treat cautiously)"]
  },
  whatHappensNext: {
    description: "Objective is to convert interest into a structured conversation.",
    doText: "Structured exploration of the problem setup and relevance.",
    dontItems: ["Sell", "Demo", "Convince"]
  },
  finalMentalModel: {
    title: "“The door is open”",
    description: "A personalised reply doesn't mean you're inside the room. It means the door is unlatched. Your job is to enter with control — calm posture, sharp questions, no oversell."
  },
  guardrails: {
    items: []
  },
  bestPractices: {
    items: []
  },
  aiMockTest: {
    description: "Practice responding to this signal in a simulated environment.",
    steps: []
  },
  oneLineSummary: "A personalised reply gives you entry — authority determines whether you stay inside or get thrown out."
};
