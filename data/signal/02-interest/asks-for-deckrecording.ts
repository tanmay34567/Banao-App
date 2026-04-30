import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "2-6",
  title: "Asks for deck / recording",
  track: "INTEREST . 07 OF 07",
  priority: "P3 - Caution",
  statusLabel: "Neutral Signal",
  meaning: {
    description: "The buyer prefers asynchronous, low-effort consumption over real engagement for now. It could mean they want to share it internally, revisit context, or simply missed something. It's a signal of deferred engagement, not necessarily progress.",
    subSignals: [
      {
        title: "Asynchronous Preference",
        description: "Consumption of information on their own terms and schedule."
      },
      {
        title: "Internal Movement",
        description: "Could be intended for stakeholder expansion and internal advocacy."
      },
      {
        title: "Passive Consumption",
        description: "Might be a polite way to disengage from live interaction and 'think about it'."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Request for internal sharing with specific, named stakeholders",
        "Linked directly to a concrete next step or meeting",
        "Focused request for a specific section or demo part"
      ],
      quotes: [
        "“Can you share the recording? I want to show this to my team.”"
      ]
    },
    fake: {
      bullets: [
        "Passive 'I'll check later' with no follow-up plan",
        "No mention of who else will see the content",
        "Vague or non-committal purpose for the request"
      ],
      quotes: [
        "“Just send the recording, I’ll check.”",
        "“Send the deck over, I'll take a look sometime.”"
      ]
    }
  },
  whyPriority: {
    description: "A recording or deck request is low control and has low standalone meaning. It can be neutral, positive, or negative depending on context. You must interpret it alongside other signals to decide if it's real progression or polite disengagement.",
    strongRead: "Bridge async consumption back to live conversation.",
    misread: "Assuming progress; letting the buyer go offline without a re-engagement plan."
  },
  fresherMustUnderstand: {
    description: "Content does not move a deal forward; engagement does. Once you share content, you lose narrative control and the buyer may misinterpret or lose context. This is a fork point where you must drive re-engagement or risk falling into a passive loop.",
    items: [
      {
        title: "Content ≠ Progress",
        description: "Sending information is a task, not a deal milestone. It doesn't inherently mean the deal is moving."
      },
      {
        title: "Loss of Narrative Control",
        description: "Shared decks are interpreted without your expert guidance, potentially leading to fatal misunderstandings."
      },
      {
        title: "Deferred Engagement",
        description: "A recording request is often the buyer putting the conversation 'on hold'; your job is to bring it back live."
      }
    ]
  },
  authorityMoves: {
    description: "Don't just blind-send content. Understand the intent, frame the material, and attach a concrete next step to maintain momentum and control.",
    items: [
      {
        title: "Move 1: Understand Intent (Critical)",
        wrong: "“Sure, I’ll send it” (Passive obedience).",
        correct: "“Happy to share — is this for your own reference or to loop others in?”",
        outcome: "Clarifies the purpose and helps you decide the best next step for stakeholder expansion."
      },
      {
        title: "Move 2: Frame the Content",
        wrong: "Sending the raw material without any framing or context.",
        correct: "“I’ll share a short version — just keep in mind it’s more useful once we anchor it to your specific setup”",
        outcome: "Sets expectations and prevents the buyer from drawing final conclusions in a vacuum."
      },
      {
        title: "Move 3: Attach Next Step",
        wrong: "“Here it is, let me know what you think.”",
        correct: "“Sharing this — once you’ve had a look, we can spend 15 mins aligning it to your use case”",
        outcome: "Ensures the asynchronous consumption leads back to a live, productive conversation."
      },
      {
        title: "Move 4: Join the Internal Conversation",
        wrong: "Letting the buyer present your solution internally without you.",
        correct: "“Makes sense — happy to also join that conversation if helpful, so we can address questions directly”",
        outcome: "Avoids second-hand interpretation and keeps you in the actual decision-making loop."
      },
      {
        title: "Move 5: Limit Content Depth",
        wrong: "Sending heavy, 50-slide decks or hour-long raw recordings.",
        correct: "Send focused, high-level, or incomplete versions that necessitate a follow-up conversation.",
        outcome: "Drives engagement by leaving valuable gaps that only you can fill live."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Blind Sending",
        description: "Sending content without context, framing, or a follow-up request.",
        consequence: "Usually results in zero follow-up and zero engagement from the buyer."
      },
      {
        title: "Over-Sending",
        description: "Sharing full product decks or detailed demo recordings immediately.",
        consequence: "Overwhelms the buyer and allows them to disqualify you without ever speaking again."
      },
      {
        title: "Losing Control",
        description: "Letting the buyer go offline without a clear, scheduled re-engagement plan.",
        consequence: "The deal often dies a slow, silent death in the 'deferred' or 'unread' pile."
      },
      {
        title: "Assuming Progress",
        description: "Thinking 'they asked for the recording, so the deal is moving forward'.",
        consequence: "Leads to false hope and misallocation of time/energy away from real deals."
      }
    ]
  },
  microSignals: {
    description: "Identify if the request is for expansion or for disengagement.",
    strong: ["Request for internal sharing with specific stakeholders (Healthy Scenario)"],
    medium: ["Request for own reference or to revisit context (Neutral Scenario)"],
    weak: ["Passive 'I'll check later' with no logical driver (Weak Scenario)"]
  },
   whatHappensNext: {
    description: "Convert Content Request → Structured Follow-Up.",
    doText: "Clarify the intent, frame the content, attach a next step, and stay in the loop.",
    dontItems: ["Send and disappear", "Overload the buyer with info", "Assume the request equals progress"]
  },
  finalMentalModel: {
    title: "“Bridge async consumption back to live conversation”",
    description: "Don't let them go offline without a plan. Your job is to keep the narrative live and guided."
  },
  oneLineSummary: "A recording request is not engagement—it’s deferred engagement. Your job is to bring it back live.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
