import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "1-7",
  title: "No clear reason for taking meeting",
  track: "CONTACT . 08 OF 08",
  priority: "P1 - Priority",
  statusLabel: "Negative Signal",
  meaning: {
    description: "The buyer does not have a defined motivation. They showed up but don't know why this matters to them. It signals that there is no active problem, urgency, or ownership here yet.",
    subSignals: [
      {
        title: "Missing Motivation",
        description: "The buyer cannot articulate a clear reason for the engagement."
      },
      {
        title: "Surface Curiosity",
        description: "Exploration without a felt need or specific goal."
      },
      {
        title: "Lack of Ownership",
        description: "No one in the room feels the pain of the status quo."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Vague initially but opens up when probed",
        "Curious but non-committal with some context emerging",
        "Open to hypothesis testing"
      ],
      quotes: [
        "“Just exploring”",
        "“Thought I’d understand what you do”"
      ]
    },
    fake: {
      bullets: [
        "Consistently vague responses",
        "No ownership of any problem statement",
        "No follow-up interest despite probing"
      ],
      quotes: [
        "“No specific reason, just learning.”",
        "“Came across this and got curious.”"
      ]
    }
  },
  whyPriority: {
    description: "Without a reason, discovery becomes shallow, solutioning becomes irrelevant, and deals drift endlessly. It's a critical qualification moment where you must decide if the deal is worth pursuing fast.",
    strongRead: "Validate quickly; decide to pursue or park.",
    misread: "Forcing interest; assuming meeting equals opportunity."
  },
  fresherMustUnderstand: {
    description: "A meeting is not an opportunity. You cannot create demand out of nothing if no pain exists. Your job is to decide if this is worth pursuing, not to force interest or pitch harder.",
    items: [
      {
        title: "Meeting ≠ Opportunity",
        description: "Showing up and taking time doesn't mean there's a deal or a real problem to solve."
      },
      {
        title: "Pain > Education",
        description: "Educating the buyer can create interest, but without existing pain, it won't create urgency."
      },
      {
        title: "Qualification Moment",
        description: "Decide early if this conversation is a waste of weeks or a real opportunity."
      }
    ]
  },
  authorityMoves: {
    description: "Anchor the conversation through direct clarification and hypothesis testing. Be prepared to exit strategically if no clear intent emerges.",
    items: [
      {
        title: "Move 1: Direct Clarification (Critical)",
        wrong: "Moving ahead without knowing why they are there.",
        correct: "“Got it — just to anchor this, what made you take this conversation right now?”",
        outcome: "Forces the buyer to articulate their motivation even if it's vague."
      },
      {
        title: "Move 2: Hypothesis Testing",
        wrong: "Accepting 'just looking' at face value.",
        correct: "“Typically when teams explore this, it’s because of X or Y — does either of those connect to your situation?”",
        outcome: "Provides structure for their thinking and tests for hidden intent."
      },
      {
        title: "Move 3: Priority Calibration",
        wrong: "Assuming they want to solve a problem now.",
        correct: "“Is this something you’re actively looking to solve, or more exploratory at this stage?”",
        outcome: "Separates idle curiosity from real buying intent."
      },
      {
        title: "Move 4: Controlled Narrowing",
        wrong: "Giving a full-blown presentation to a vague buyer.",
        correct: "“In that case, it might make sense to keep this high-level — and if something becomes relevant, we can go deeper.”",
        outcome: "Reduces your time investment while maintaining positioning."
      },
      {
        title: "Move 5: Strategic Exit (Important)",
        wrong: "Pushing a solution onto someone who hasn't asked for one.",
        correct: "“Sounds like this isn’t a priority right now — probably best to reconnect if this becomes more relevant.”",
        outcome: "Saves time, maintains respect, and keeps the future door open."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Forcing Interest",
        description: "AE tries to convince or educate the buyer into wanting a solution.",
        consequence: "Leads to a low-quality pipeline and long, dead deal cycles."
      },
      {
        title: "Full Pitch Anyway",
        description: "“Let me show you what we do...” without any context from the buyer.",
        consequence: "The buyer has no context for the value, and you lose authority."
      },
      {
        title: "Not Qualifying",
        description: "Proceeding with the call without understanding intent or testing seriousness.",
        consequence: "Massive waste of AE and technical resources."
      },
      {
        title: "Assuming Future Potential",
        description: "Thinking 'maybe later this will convert' without evidence.",
        consequence: "Over-investing in a deal that has no current momentum."
      }
    ]
  },
  microSignals: {
    description: "Differentiate between early-stage curiosity and a complete lack of deal foundation.",
    strong: ["Initially vague, but opens up when probed (Recoverable)"],
    medium: ["Curious but non-committal (Neutral)"],
    weak: ["Consistently vague / No ownership / No follow-up interest (Strong Negative)"]
  },
  whatHappensNext: {
    description: "Convert No Reason → Clear Direction OR Clean Exit.",
    doText: "Clarify motivation, test hypotheses, assess priority, and decide to proceed or disengage.",
    dontItems: ["Force momentum", "Push a solution", "Assume it's a deal"]
  },
  finalMentalModel: {
    title: "“There is no engine in this deal — don’t try to drive it”",
    description: "Protect your time and pipeline quality. Test quickly and exit cleanly if no signal emerges."
  },
  oneLineSummary: "If the buyer doesn’t know why they’re here, there’s no deal yet—your job is to find it or leave.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
