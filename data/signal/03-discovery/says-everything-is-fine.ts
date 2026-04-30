import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "3-9",
  title: "Says “everything is fine”",
  track: "DISCOVERY . 09 OF 09",
  priority: "P1 - Priority",
  statusLabel: "Negative Signal",
  meaning: {
    description: "The buyer does not perceive a meaningful problem worth solving. This is one of the clearest 'no deal' signals because without perceived pain, there is no urgency, no internal push, and no justification for change. Even if your solution is objectively superior, there is no motivation for the buyer to switch from their current 'fine' status quo.",
    subSignals: [
      {
        title: "Lack of Perceived Pain",
        description: "The current state is viewed as acceptable, stable, and not requiring intervention."
      },
      {
        title: "No Motivation to Change",
        description: "The risks and effort of switching to a new solution outweigh any perceived benefit."
      },
      {
        title: "Defensive Satisfaction",
        description: "Claiming everything is fine to avoid the discomfort of exposing internal inefficiencies or weaknesses."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Initially claims everything is fine but opens up when probed with a specific industry perspective",
        "Admits to a minor 'non-perfect' area when the social pressure to perform is removed",
        "Genuinely stable environment with high satisfaction levels and no hidden friction"
      ],
      quotes: [
        "“Got it — that’s actually good to hear.”",
        "“In similar setups, things often look fine on the surface, but challenges show up around X...”"
      ]
    },
    fake: {
      bullets: [
        "Firm, dismissive 'no issues' combined with zero engagement on potential improvement areas",
        "Refusal to acknowledge even industry-standard friction points that are known to exist in their space",
        "Shutting down the conversation as soon as operational gaps are hinted at"
      ],
      quotes: [
        "“Everything is working fine for us.”",
        "“We’re okay for now, no major issues currently.”",
        "“Nothing broken on our end, thanks anyway.”",
        "“We don't have any pain points in this area right now.”"
      ]
    }
  },
  whyPriority: {
    description: "No problem perception = no deal. You cannot sell into a vacuum of 'no problem'. This is a critical qualification moment; you must decide quickly if there is hidden potential or if this is a dead deal. Arguing or pitching into a vacuum only destroys your authority and wastes your time on accounts that will never close.",
    strongRead: "If everything is “fine,” there’s nothing to fix—either uncover a real gap or exit early.",
    misread: "Thinking 'I'll show them why they need this' without any established or admitted pain."
  },
  fresherMustUnderstand: {
    description: "You cannot sell to someone who doesn't think they have a problem worth solving. Juniors often try to fight this signal by explaining features or trying to 'convince' the buyer, which only makes them look pushy and low-authority. Your job is to test the perception lightly and move on if no resonance is found. Preserving your positioning is more important than chasing a dead deal.",
    items: [
      {
        title: "Sell into Pain, Not Features",
        description: "Without pain, there is no motivation. Features are irrelevant to someone who is satisfied with their status quo."
      },
      {
        title: "Don't Argue With the Buyer",
        description: "Telling a buyer their system isn't perfect creates instant emotional resistance and kills trust."
      },
      {
        title: "Strategic Exit is a Win",
        description: "Walking away from a non-deal early saves your energy and time for actual opportunities in your pipeline."
      }
    ]
  },
  authorityMoves: {
    description: "Accept the current state without resistance, introduce a new perspective gently, and test for hidden friction before making a qualification decision.",
    items: [
      {
        title: "Move 1: Accept Without Resistance (Critical)",
        wrong: "“There must be some issue you're facing, no system is perfect.”",
        correct: "“Got it — that’s actually good to hear.”",
        outcome: "Removes the pressure of a 'sales call' and builds trust by validating their professional perspective."
      },
      {
        title: "Move 2: Introduce Perspective (Not Pitch)",
        wrong: "Pitching why your product is better than their 'fine' current setup.",
        correct: "“In similar setups, things often look fine on the surface, but challenges show up around X or Y — does any of that resonate?”",
        outcome: "Gently challenges their perception by providing a new lens based on your expertise and pattern matching."
      },
      {
        title: "Move 3: Explore Improvement Angle",
        wrong: "Ignoring the 'fine' and continuing with a generic discovery script.",
        correct: "“Even if things are working, is there anything you’re looking to improve or optimize currently?”",
        outcome: "Shifts the conversation from 'fixing a problem' to 'optimizing for performance,' a much lower-resistance entry point."
      },
      {
        title: "Move 4: Test for Hidden Friction",
        wrong: "Asking more open-ended 'how do you do X' questions that invite generic answers.",
        correct: "“If you had to pick one thing that’s not perfect today, what would it be?”",
        outcome: "Lowers the stakes and opens a small door for the buyer to admit to a minor issue without losing face."
      },
      {
        title: "Move 5: Strategic Exit (If No Signal)",
        wrong: "Staying on the call trying to find a wedge in a clearly settled account.",
        correct: "“Makes sense — sounds like this isn’t something that needs attention right now. Happy to reconnect if that changes.”",
        outcome: "Preserves your professional positioning and saves you from wasting time on a deal with zero momentum."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Arguing With the Buyer",
        description: "Trying to prove they have a problem: “Surely you have some delays or errors in this process?”",
        consequence: "Creates immediate emotional resistance and positions you as an adversary rather than a trusted advisor."
      },
      {
        title: "Forcing a Problem",
        description: "Trying to manufacture pain where the buyer doesn't perceive any.",
        consequence: "The buyer shuts down and identifies you as a typical pushy salesperson, making future reconnection impossible."
      },
      {
        title: "Pitching Anyway",
        description: "“Let me just show you what we do anyway, just in case it's helpful later.”",
        consequence: "Pitching into a vacuum with no context; the demonstration will feel irrelevant, boring, and low-value."
      },
      {
        title: "Staying Too Long",
        description: "Spending excessive effort trying to find a wedge in a clearly satisfied account.",
        consequence: "Massive waste of your most valuable resource—time—on a lead that will never convert."
      }
    ]
  },
  microSignals: {
    description: "Assess the finality of the satisfaction.",
    strong: ["Initially claims 'fine' but opens up significantly when probed with a specific perspective (Recoverable)"],
    medium: ["Stable environment but expresses a mild curiosity about optimization or future-proofing (Neutral)"],
    weak: ["Firmly 'no issues' combined with low engagement or a clear desire to end the conversation (Strong Negative)"]
  },
  whatHappensNext: {
    description: "Convert “All Good” → Hidden Opportunity OR Clean Exit.",
    doText: "Accept the current state, introduce perspective gently, test for optimization interest, and decide whether to exit.",
    dontItems: ["Argue about their current status quo", "Push features too early without established pain", "Assume hidden pain exists where it hasn't been admitted"]
  },
  finalMentalModel: {
    title: "“No perceived need, no deal.”",
    description: "Without a problem, there is no reason to change. Test lightly for hidden gaps, then move on if the current state is genuinely settled."
  },
  oneLineSummary: "If everything is “fine,” there’s nothing to fix—either uncover a real gap or exit early.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
