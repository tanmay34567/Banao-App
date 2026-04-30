import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "3-4",
  title: "Introduces internal context / politics",
  track: "DISCOVERY . 04 OF 09",
  priority: "P1 - Priority",
  statusLabel: "Strong Signal",
  meaning: {
    description: "The buyer is revealing the organizational reality of how decisions actually happen. This marks a shift from problem/solution discussion to navigating the internal decision map. By sharing approval dynamics, internal priorities, and misalignment, the buyer is inviting you into the political battlefield where deals are truly won or lost.",
    subSignals: [
      {
        title: "Trust Signal",
        description: "Sharing sensitive internal conflicts or dynamics indicates a high level of trust and partnership."
      },
      {
        title: "Decision Mapping",
        description: "Revealing who actually influences decisions beyond the obvious job titles."
      },
      {
        title: "Risk Visibility",
        description: "Identifying potential internal resistance or misalignment early in the discovery process."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "Clear mention of specific departments or roles that might push back",
        "Disclosure of current leadership focus or conflicting internal priorities",
        "Description of the actual approval path and truly influential stakeholders"
      ],
      quotes: [
        "“Finance will push back on this.”",
        "“Our leadership is focused on cost reduction right now.”",
        "“Ops wants this, but product currently disagrees.”",
        "“We’d need sign-off from X before moving ahead.”",
        "“There’s some resistance internally to changing our current setup.”"
      ]
    },
    fake: {
      bullets: [
        "Vague references to a 'team' without naming specific roles or dynamics",
        "Generic statements like 'we need to discuss internally' with no context",
        "No mention of potential friction or the actual approval steps"
      ],
      quotes: [
        "“I’ll need to check with the team.”",
        "“We’ll get back to you after we talk internally.”"
      ]
    }
  },
  whyPriority: {
    description: "Deals are not won on logic alone—they are won inside internal dynamics. This signal provides the decision map and risk visibility required to navigate the organization. Without this, deals stall unexpectedly and objections appear too late to handle effectively.",
    strongRead: "Navigate the organization, don't just sell the product.",
    misread: "Taking political sides or reacting emotionally to internal conflict."
  },
  fresherMustUnderstand: {
    description: "Deals often fail due to internal misalignment and political friction, not product features. You are now in strategy mode—your job is to identify who matters, who blocks, and who supports. Stay neutral and structured when conflict is shared. One perspective is never the full picture; you must validate and expand the map.",
    items: [
      {
        title: "The Political Battlefield",
        description: "Most deals fail because of internal friction and misalignment, not because the product didn't work."
      },
      {
        title: "Strategy > Product",
        description: "Shift your focus from features to organizational navigation and stakeholder alignment."
      },
      {
        title: "Stay Neutral",
        description: "Don't take sides in internal conflicts; acknowledge them without judgment to keep the buyer sharing."
      }
    ]
  },
  authorityMoves: {
    description: "Acknowledge context without judgment, map the stakeholders actively, and collaborate with the buyer to align the internal strategy.",
    items: [
      {
        title: "Move 1: Acknowledge Without Judgment",
        wrong: "“Yeah, finance always blocks things” (Taking sides) or ignoring it entirely.",
        correct: "“Got it — that’s helpful context”",
        outcome: "Maintains neutrality while encouraging the buyer to share more sensitive internal reality."
      },
      {
        title: "Move 2: Map Stakeholders (Critical)",
        wrong: "Staying single-threaded and not asking about other influencers.",
        correct: "“Who else would typically be involved in evaluating something like this?”",
        outcome: "Expands your visibility into the real decision-making circle."
      },
      {
        title: "Move 3: Understand Influence & Power",
        wrong: "Assuming everyone mentioned has the same level of authority.",
        correct: "“Between these groups, who usually drives the final decision?”",
        outcome: "Identifies the real power centers and prevents misaligned efforts."
      },
      {
        title: "Move 4: Surface Objections Early",
        wrong: "Hoping that resistance will disappear on its own.",
        correct: "“From their perspective, what would be the main concern or pushback?”",
        outcome: "Allows you to pre-handle objections and prepare your champion with the right data."
      },
      {
        title: "Move 5: Align Strategy",
        wrong: "Trying to force a path forward that ignores internal politics.",
        correct: "“Given this dynamic, what’s the best way to approach this internally?”",
        outcome: "Turns the buyer into a collaborator who co-creates the path to a successful deal."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Ignoring Politics",
        description: "Focusing exclusively on product and features while ignoring organizational dynamics.",
        consequence: "Leads to surprise blockers and deal-killing objections appearing late in the cycle."
      },
      {
        title: "Taking Sides",
        description: "“Yeah, I agree, the Ops team is right to push for this.”",
        consequence: "Extremely dangerous; alienates other stakeholders and destroys your status as a neutral advisor."
      },
      {
        title: "Not Mapping Stakeholders",
        description: "Failing to ask about the broader decision-making group.",
        consequence: "The deal becomes fragile and dependent on a single person who might lose influence."
      },
      {
        title: "Not Preparing for Objections",
        description: "Knowing there is resistance but not arming your champion with counter-arguments.",
        consequence: "The deal collapses as soon as it hits the first internal hurdle."
      }
    ]
  },
  microSignals: {
    description: "Determine the depth of the organizational disclosure.",
    strong: ["Named stakeholders + specific conflicts + clear approval flow shared (Strong)"],
    medium: ["Mentions other departments or stakeholders with limited detail (Medium)"],
    weak: ["Vague references to 'leadership' or 'the team' with no context (Weak)"]
  },
  whatHappensNext: {
    description: "Convert Internal Context → Stakeholder Map → Deal Strategy.",
    doText: "Identify all stakeholders, understand their relative influence, surface their objections early, and align your approach with your champion.",
    dontItems: ["Ignore internal dynamics", "Oversimplify the approval process", "Stay exclusively product-focused"]
  },
  finalMentalModel: {
    title: "“Navigate, don’t just sell.”",
    description: "You are now inside the organization. Understand how decisions actually get made and who really holds the power to say yes or no."
  },
  oneLineSummary: "Internal politics isn’t noise—it’s the battlefield where deals are won or lost. Learn to navigate it early.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
