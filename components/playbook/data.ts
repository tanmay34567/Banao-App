import { ActivityMark, ConstructionIcon, Brain, type PlaybookIcon } from "@/components/playbook/icons";
import { momentumSubstepDetails } from "@/components/playbook/substep-details";

export type LayerDefinition = {
  id: string;
  title: string;
  icon: PlaybookIcon;
  description: string;
};

export type MomentumSubstep = {
  id: string;
  title: string;
  bullets: string[];
  details?: string[];
};

export type MomentumStep = {
  id: string;
  label: string;
  substeps: MomentumSubstep[];
};

export type MomentumDefinitionSection = {
  title: string;
  lines: string[];
};

export type MomentumDefinition = {
  title: string;
  sections: MomentumDefinitionSection[];
};

export type ConstructionTrack = {
  id: string;
  label: string;
  overlays: string[];
};

export type SignalStatus = "success" | "warning" | "error";

export type SignalOverlay = {
  text: string;
  priority: string;
  status: SignalStatus;
};

export type SignalTrack = {
  id: string;
  label: string;
  overlays: SignalOverlay[];
};

export type AccordionItemData = {
  title: string;
  body: string;
  open: boolean;
};

export type MockStepData = {
  title: string;
  content: string[];
  open: boolean;
};

export const layers: LayerDefinition[] = [
  {
    id: "momentum",
    title: "Deal Momentum",
    description: "",
    icon: ActivityMark,
  },
  {
    id: "construction",
    title: "Deal Construction",
    description: "",
    icon: ConstructionIcon,
  },
  {
    id: "signal",
    title: "Signal",
    description: "",
    icon: ActivityMark, // Using ActivityMark for Signal too as per screenshot
  },
  {
    id: "psychology",
    title: "Buyer Psychology",
    description: "",
    icon: Brain,
  },
];

const baseMomentumSteps: MomentumStep[] = [
  {
    id: "1",
    label: "Contact",
    substeps: [
      {
        id: "1.1",
        title: "Contact Channels",
        bullets: [
          "Cold outbound (email / call / LinkedIn)",
          "Social / warm outreach",
          "Events / conferences",
          "Referrals / introductions",
          "Inbound",
          "Existing relationships",
        ],
      },
      {
        id: "1.2",
        title: "Persona Targeting",
        bullets: [
          "Right entry persona",
          "Role vs influence vs access",
          "Single-thread vs multi-thread",
        ],
      },
      {
        id: "1.3",
        title: "Problem Hypothesis",
        bullets: ["Expected problem", "Why this company", "Why this persona"],
      },
      {
        id: "1.4",
        title: "First Touch Execution",
        bullets: [
          "Problem-first messaging",
          "Channel-specific execution",
          "Call vs async nuance",
        ],
      },
      {
        id: "1.5",
        title: "Follow-up System",
        bullets: ["Multi-touch sequence", "Message variation", "Stop vs persist"],
      },
      {
        id: "1.6",
        title: "Contact Qualification",
        bullets: [
          "Real vs fake signal",
          "Response vs engagement vs intent",
          "Early disqualification",
        ],
      },
    ],
  },
  {
    id: "2",
    label: "Interest",
    substeps: [
      {
        id: "2.1",
        title: "Signal Validation",
        bullets: ["Politeness vs real interest", "Passive vs active engagement"],
      },
      {
        id: "2.2",
        title: "Curiosity Build",
        bullets: ["Insight hooks", "Tension creation"],
      },
      {
        id: "2.3",
        title: "Conversation Framing",
        bullets: ["Agenda setting", "Tone control"],
      },
      {
        id: "2.4",
        title: "Micro Qualification",
        bullets: ["Relevance", "Ownership", "Urgency"],
      },
      {
        id: "2.5",
        title: "Transition to Discovery",
        bullets: ["Secure time", "Set expectations"],
      },
    ],
  },
  {
    id: "3",
    label: "Discovery",
    substeps: [
      {
        id: "3.1",
        title: "Problem Mapping",
        bullets: ["Surface problem", "Root cause", "Frequency"],
      },
      {
        id: "3.2",
        title: "Impact Quantification",
        bullets: ["Business impact", "Personal impact"],
      },
      {
        id: "3.3",
        title: "Current State",
        bullets: ["Existing solutions", "Gaps"],
      },
      {
        id: "3.4",
        title: "Urgency & Trigger",
        bullets: ["Why now", "Cost of inaction"],
      },
      {
        id: "3.5",
        title: "Stakeholder Mapping",
        bullets: ["Stakeholders involved", "Decision owner"],
      },
      {
        id: "3.6",
        title: "Qualification Depth",
        bullets: ["Budget", "Authority", "Timeline"],
      },
      {
        id: "3.7",
        title: "Problem Reframing",
        bullets: ["Sharpen problem clarity"],
      },
    ],
  },
  {
    id: "4",
    label: "Validation",
    substeps: [
      {
        id: "4.1",
        title: "Solution Mapping",
        bullets: ["Use-case based demo"],
      },
      {
        id: "4.2",
        title: "Feature -> Problem Fit",
        bullets: ["Map to discovery"],
      },
      {
        id: "4.3",
        title: "Objection Surfacing",
        bullets: ["Confusion", "Skepticism", "Constraints"],
      },
      {
        id: "4.4",
        title: "Value Articulation",
        bullets: ["Outcomes", "Before vs after"],
      },
      {
        id: "4.5",
        title: "Buyer Confirmation",
        bullets: ["Problem solved acknowledgment"],
      },
    ],
  },
  {
    id: "5",
    label: "Internal Discussion",
    substeps: [
      {
        id: "5.1",
        title: "Champion Identification",
        bullets: ["Internal owner"],
      },
      {
        id: "5.2",
        title: "Internal Narrative",
        bullets: ["Problem story", "Value story"],
      },
      {
        id: "5.3",
        title: "Enablement Assets",
        bullets: ["Decks", "One-pagers", "ROI summary"],
      },
      {
        id: "5.4",
        title: "Process Mapping",
        bullets: ["Decision flow"],
      },
      {
        id: "5.5",
        title: "Pre-empt Objections",
        bullets: ["Finance", "Tech", "Leadership"],
      },
    ],
  },
  {
    id: "6",
    label: "Stakeholder Expansion",
    substeps: [
      {
        id: "6.1",
        title: "Stakeholder Mapping",
        bullets: ["Economic buyer", "Technical buyer", "Users", "Blockers"],
      },
      {
        id: "6.2",
        title: "Persona Messaging",
        bullets: ["Tailored narratives"],
      },
      {
        id: "6.3",
        title: "Risk Mitigation",
        bullets: ["Address concerns"],
      },
      {
        id: "6.4",
        title: "Consensus Building",
        bullets: ["Align stakeholders"],
      },
    ],
  },
  {
    id: "7",
    label: "Pilot",
    substeps: [
      {
        id: "7.1",
        title: "Scope Definition",
        bullets: ["Included vs excluded"],
      },
      {
        id: "7.2",
        title: "Success Metrics",
        bullets: ["Measurable outcomes"],
      },
      {
        id: "7.3",
        title: "Execution Support",
        bullets: ["High-touch support"],
      },
      {
        id: "7.4",
        title: "Progress Tracking",
        bullets: ["Check-ins", "Reporting"],
      },
      {
        id: "7.5",
        title: "Outcome Evaluation",
        bullets: ["Success vs failure"],
      },
    ],
  },
  {
    id: "8",
    label: "Budget Discussion",
    substeps: [
      {
        id: "8.1",
        title: "Value Anchoring",
        bullets: ["ROI"],
      },
      {
        id: "8.2",
        title: "Pricing Structure",
        bullets: ["Packages", "Tiers"],
      },
      {
        id: "8.3",
        title: "Budget Validation",
        bullets: ["Availability", "Approval path"],
      },
      {
        id: "8.4",
        title: "Negotiation Handling",
        bullets: ["Pushback"],
      },
    ],
  },
  {
    id: "9",
    label: "Procurement",
    substeps: [
      {
        id: "9.1",
        title: "Vendor Onboarding",
        bullets: ["Documentation"],
      },
      {
        id: "9.2",
        title: "Legal Review",
        bullets: ["Contracts", "Compliance"],
      },
      {
        id: "9.3",
        title: "Security Checks",
        bullets: ["IT / data"],
      },
      {
        id: "9.4",
        title: "Final Negotiation",
        bullets: ["Terms closure"],
      },
    ],
  },
  {
    id: "10",
    label: "Close",
    substeps: [
      {
        id: "10.1",
        title: "Agreement Signing",
        bullets: ["Formal closure"],
      },
      {
        id: "10.2",
        title: "Implementation Planning",
        bullets: ["Onboarding"],
      },
      {
        id: "10.3",
        title: "Stakeholder Alignment",
        bullets: ["Roles"],
      },
      {
        id: "10.4",
        title: "Success Definition",
        bullets: ["Metrics"],
      },
    ],
  },
];

export const momentumSteps: MomentumStep[] = baseMomentumSteps.map((step) => ({
  ...step,
  substeps: step.substeps.map((substep) => ({
    ...substep,
    details: momentumSubstepDetails[substep.id],
  })),
}));

export const momentumDefinitions: MomentumDefinition[] = [
  {
    title: "Contact",
    sections: [
      {
        title: "Definition",
        lines: [
          "Buyer acknowledges you exist and engages enough to allow a legitimate path toward deeper conversation.",
          "Contact means:",
          "Correct person engaged",
          "Relevance recognized",
          "Next interaction possible",
          "If this fails:",
          "You never enter the deal",
          "No Interest stage happens",
          "Deal is DEAD before birth",
        ],
      },
      {
        title: "Core Must-Win Mindset",
        lines: [
          "“Can I earn enough relevance and trust for this buyer to give me serious time?”",
          "Not:",
          "“How do I get a reply?”",
          "Wrong mindset.",
          "You need:",
          "Commitment.",
          "If buyer won’t give time:",
          "You are losing.",
        ],
      },
      {
        title: "Buyer Reality (Alignment View)",
        lines: [
          "Buyer is thinking:",
          "Why is this person contacting me?",
          "Is this relevant?",
          "Is this another generic sales interruption?",
          "Is this worth even 30 seconds?",
          "They are protecting:",
          "Attention",
          "Time",
          "Reputation",
          "Cognitive load",
          "They are not asking:",
          "“What does this seller want?”",
          "They are asking:",
          "“Why should I care?”",
        ],
      },
      {
        title: "What Must Be True To Progress",
        lines: [
          "Buyer must believe at least one of these:",
          "This may relate to a real issue I have",
          "This may be worth exploring",
          "This person may understand something relevant",
          "Taking a conversation is low-risk",
          "And seller must have:",
          "Right persona",
          "Credible problem hypothesis",
          "Clear next-step ask",
          "If any is weak:",
          "Contact stalls.",
        ],
      },
    ],
  },
  {
    title: "Interest",
    sections: [
      {
        title: "Definition",
        lines: [
          "Buyer has moved beyond acknowledging you and is showing active curiosity about the problem or the conversation.",
          "This means buyer is doing one or more of these:",
          "Asking meaningful questions",
          "Exploring implications",
          "Sharing context voluntarily",
          "Agreeing to a deeper conversation",
          "Not interest:",
          "“Sounds interesting”",
          "“Send something over”",
          "Being polite on a call",
          "That is noise.",
          "Interest means:",
          "Buyer is leaning in.",
          "If this fails:",
          "Discovery never becomes real",
          "You carry fake pipeline",
          "Deal often dies later disguised as “stalled”",
        ],
      },
      {
        title: "Core Must-Win Mindset",
        lines: [
          "“Can I convert curiosity into structured willingness to explore?”",
          "Not:",
          "“How do I keep them talking?”",
          "Wrong.",
          "You need movement toward discovery.",
          "If curiosity does not deepen:",
          "You are losing control.",
        ],
      },
      {
        title: "Buyer Reality (Alignment View)",
        lines: [
          "Buyer is thinking:",
          "Is this problem really worth attention?",
          "Is this person credible?",
          "Is deeper discussion worth time?",
          "Am I exploring or getting pulled into a sales process?",
          "Buyer is evaluating:",
          "Relevance",
          "Risk",
          "Effort",
          "Value of continued engagement",
          "They are deciding whether to invest attention.",
        ],
      },
      {
        title: "What Must Be True To Progress",
        lines: [
          "Buyer must believe:",
          "Problem may matter enough to unpack",
          "Conversation may produce value",
          "Deeper discussion feels low-risk",
          "And seller must have:",
          "Real interest signal (not politeness)",
          "Curiosity converted into dialogue",
          "Path toward discovery",
          "If weak:",
          "Fake opportunity.",
        ],
      },
    ],
  },
  {
    title: "Discovery",
    sections: [
      {
        title: "Overview",
        lines: [
          "This is where real deals are either created or exposed as fiction.",
          "Most weak deals are not lost in pricing.",
          "They were never truly discovered.",
        ],
      },
      {
        title: "Definition",
        lines: [
          "Discovery is the process of establishing, with buyer agreement:",
          "A meaningful problem exists",
          "Its impact matters",
          "Current state is insufficient",
          "There is reason to change",
          "If you only “asked questions,” that is not discovery.",
          "Discovery means:",
          "Shared understanding has been created.",
          "If this fails:",
          "Validation becomes generic",
          "Stakeholder expansion weakens",
          "Budget conversations collapse",
          "Deal dies later as “no decision”",
        ],
      },
      {
        title: "Core Must-Win Mindset",
        lines: [
          "“Can I uncover truth the buyer will act on — not just collect information?”",
          "Not:",
          "“How do I complete qualification?”",
          "Wrong.",
          "This is not a checklist exercise.",
          "This is diagnosis.",
        ],
      },
      {
        title: "Buyer Reality (Alignment View)",
        lines: [
          "Buyer is thinking:",
          "Is this actually a problem worth changing?",
          "Do I fully understand the issue myself?",
          "Is change worth disruption?",
          "Is this seller helping me think… or extracting data?",
          "Buyer is deciding whether problem deserves action.",
        ],
      },
      {
        title: "What Must Be True To Progress",
        lines: [
          "Buyer must believe:",
          "Problem is real",
          "Impact matters",
          "Doing nothing has consequences",
          "Seller must have:",
          "Root problem clarity",
          "Impact clarity",
          "Stakeholder insight",
          "Change motivation identified",
          "If weak:",
          "Deal is fragile.",
        ],
      },
    ],
  },
  {
    title: "Validation",
    sections: [
      {
        title: "Overview",
        lines: [
          "This is where the buyer moves from:",
          "“We have a problem.”",
          "to",
          "“This may be a credible path to solve it.”",
          "Most sellers turn this into a product demo.",
          "That is where deals get weakened.",
          "Validation is not “showing the product.”",
          "Validation is proving fit.",
        ],
      },
      {
        title: "Definition",
        lines: [
          "Validation is the process where buyer confirms:",
          "Your solution addresses their problem",
          "It fits their use case",
          "It can plausibly produce desired outcomes",
          "This is not generic interest.",
          "This is contextual solution confidence.",
          "If this fails:",
          "Buyer cannot take you internally",
          "Champion weakens",
          "Stakeholders resist",
          "Deal often dies before Internal Discussion",
        ],
      },
      {
        title: "Core Must-Win Mindset",
        lines: [
          "“Can the buyer clearly see themselves succeeding with this?”",
          "Not:",
          "“How do I give a great demo?”",
          "Wrong mindset.",
          "The question is not:",
          "Did they like what they saw?",
          "It is:",
          "Do they believe it fits them?",
        ],
      },
      {
        title: "Buyer Reality (Alignment View)",
        lines: [
          "Buyer is thinking:",
          "Will this actually solve our problem?",
          "Will this work in our environment?",
          "Is this practical or just impressive?",
          "Am I seeing relevance or just features?",
          "They are evaluating:",
          "Fit",
          "Credibility",
          "Risk",
          "Real-world applicability",
          "Not your product elegance.",
        ],
      },
      {
        title: "What Must Be True To Progress",
        lines: [
          "Buyer must believe:",
          "Solution maps to their problem",
          "Value feels plausible",
          "Concerns are manageable",
          "Seller must have:",
          "Discovery-linked validation",
          "Buyer confirmation of relevance",
          "Early objections surfaced",
          "If weak:",
          "Validation is fake.",
        ],
      },
    ],
  },
  {
    title: "Internal Discussion",
    sections: [
      {
        title: "Definition",
        lines: [
          "Buyer takes your solution internally and tries to justify it without you present",
          "If this fails:",
          "You don’t get stakeholder access",
          "You don’t get budget conversation",
          "Deal is DEAD (no notification)",
        ],
      },
      {
        title: "Core Must-Win Mindset",
        lines: [
          "“Can my champion sell this better than I can — when I’m not there?”",
          "If answer = NO",
          "You are already losing",
        ],
      },
      {
        title: "Buyer Reality (Alignment View)",
        lines: [
          "Your champion is thinking:",
          "“How do I explain this clearly?”",
          "“Will I look smart or stupid proposing this?”",
          "“What objections will I face?”",
          "“Is this worth the political risk?”",
          "They are NOT thinking about your product",
          "They are thinking about their internal survival",
        ],
      },
      {
        title: "What Must Be True To Progress",
        lines: [
          "Champion:",
          "Understands the problem deeply",
          "Believes in your solution",
          "Can articulate value in their org language",
          "Internal path is:",
          "Known (who needs to approve)",
          "Navigable (not blocked)",
          "If any of this is weak:",
          "Deal stalls here",
        ],
      },
    ],
  },
  {
    title: "Stakeholder Expansion",
    sections: [
      {
        title: "Overview",
        lines: [
          "This is where deals stop being “one person likes us” and become an organizational decision.",
          "Most enterprise deals do not die because the solution is weak.",
          "They die because multiple stakeholders were never aligned.",
          "This is where political complexity enters.",
        ],
      },
      {
        title: "Definition",
        lines: [
          "Stakeholder Expansion is the process of moving from a single-threaded opportunity (one primary contact/champion) to a multi-threaded deal where all critical decision participants are identified, engaged, and progressively aligned.",
          "This means:",
          "Relevant stakeholders are mapped",
          "Their concerns are understood",
          "Their incentives are addressed",
          "Consensus begins forming",
          "If this fails:",
          "Hidden blockers emerge late",
          "Champion loses internal support",
          "Budget stalls",
          "Procurement never starts",
          "Deal dies as “internal misalignment”",
        ],
      },
      {
        title: "Core Must-Win Mindset",
        lines: [
          "“Can I build enough cross-functional alignment that this deal survives beyond one person?”",
          "Not:",
          "“How do I get more people into meetings?”",
          "Wrong.",
          "This is not stakeholder collection.",
          "This is stakeholder alignment.",
        ],
      },
      {
        title: "Buyer Reality (Alignment View)",
        lines: [
          "Every stakeholder is asking different questions.",
          "Finance:",
          "Is this worth paying for?",
          "Technical:",
          "Will this create risk?",
          "Users:",
          "Will this make life harder?",
          "Executive:",
          "Why prioritize this?",
          "They are not evaluating the same deal.",
          "They are evaluating from different incentive structures.",
          "Your job:",
          "Align those incentives enough to prevent rejection.",
        ],
      },
      {
        title: "What Must Be True To Progress",
        lines: [
          "Must be true:",
          "Critical stakeholders identified",
          "No major unknown blocker left unmapped",
          "Major stakeholder concerns addressed",
          "Broad support exists for evaluation/progress",
          "Seller must have:",
          "Multi-threaded access",
          "Persona-specific messaging",
          "Consensus-building motion",
          "If weak:",
          "deal is politically fragile.",
        ],
      },
    ],
  },
  {
    title: "Pilot",
    sections: [
      {
        title: "Overview",
        lines: [
          "This is where the deal moves from:",
          "“We think this could work.”",
          "to",
          "“We have evidence it works.”",
          "A pilot is not a trial.",
          "A pilot is a controlled proof event.",
          "Most deals do not fail in pilot because product fails.",
          "They fail because pilot was badly designed.",
        ],
      },
      {
        title: "Definition",
        lines: [
          "Pilot is a bounded evaluation where buyer and seller test solution value against agreed success criteria in a defined scope.",
          "Must include:",
          "Defined scope",
          "Defined success metrics",
          "Defined stakeholders involved",
          "Defined evaluation window",
          "Without these you do not have a pilot.",
          "You have an experiment drifting toward failure.",
          "If this fails:",
          "Budget discussion weakens",
          "Confidence collapses",
          "Internal momentum reverses",
          "Deal often dies as “pilot inconclusive”",
        ],
      },
      {
        title: "Core Must-Win Mindset",
        lines: [
          "“Can I turn belief into evidence the buyer can defend internally?”",
          "Not:",
          "“How do I get them using the product?”",
          "Wrong.",
          "Pilot is not usage.",
          "Pilot is proof.",
        ],
      },
      {
        title: "Buyer Reality (Alignment View)",
        lines: [
          "Buyer is thinking:",
          "Will this actually deliver?",
          "Will this create work for us?",
          "What if results are weak?",
          "Can I safely champion this after pilot?",
          "They are not testing features.",
          "They are testing:",
          "Risk versus value.",
        ],
      },
      {
        title: "What Must Be True To Progress",
        lines: [
          "Must be true:",
          "Success definition agreed",
          "Evaluation scope controlled",
          "Stakeholders aligned on what “good” looks like",
          "Buyer sees credible path to measurable value",
          "Seller must have:",
          "Pilot structure",
          "Success criteria",
          "Support plan",
          "Review motion",
          "If weak:",
          "pilot becomes chaos.",
        ],
      },
    ],
  },
  {
    title: "Budget Discussion",
    sections: [
      {
        title: "Overview",
        lines: [
          "This is where many sellers panic and start negotiating against themselves.",
          "Huge mistake.",
          "This stage is not:",
          "“Talking about price.”",
          "It is:",
          "Converting proven value into economic justification.",
          "If you reduce this stage to pricing you shrink your own deal.",
        ],
      },
      {
        title: "Definition",
        lines: [
          "Budget Discussion is the process where buyer and seller align on whether the value established justifies investment, how that investment will be funded, and what commercial structure can support purchase.",
          "This includes:",
          "Economic justification",
          "Budget reality",
          "Pricing structure",
          "Commercial negotiation",
          "If this fails:",
          "Proven value may still not get funded",
          "Deal may stall in “no budget”",
          "Procurement may never begin",
          "Deal dies as commercial misalignment",
        ],
      },
      {
        title: "Core Must-Win Mindset",
        lines: [
          "“Can I help the buyer justify investment — not just defend price?”",
          "Not:",
          "“How do I get them to accept my number?”",
          "Wrong.",
          "That is reactive selling.",
          "This is value defense.",
        ],
      },
      {
        title: "Buyer Reality (Alignment View)",
        lines: [
          "Buyer is thinking:",
          "Is this worth spending on?",
          "Can I justify this internally?",
          "Is this the right use of limited budget?",
          "What risk exists if I overpay or choose wrong?",
          "They are evaluating:",
          "Value vs cost",
          "Funding feasibility",
          "Internal approval risk",
          "Not just price.",
        ],
      },
      {
        title: "What Must Be True To Progress",
        lines: [
          "Must be true:",
          "Value clearly established",
          "Buyer sees economic logic",
          "Budget path exists or can be created",
          "Commercial expectations broadly align",
          "Seller must have:",
          "Value anchor",
          "Budget understanding",
          "Pricing logic",
          "Negotiation discipline",
          "If weak:",
          "deal enters discount spiral.",
        ],
      },
    ],
  },
  {
    title: "Procurement",
    sections: [
      {
        title: "Overview",
        lines: [
          "This is where many reps make a fatal assumption:",
          "“The deal is basically done.”",
          "Wrong.",
          "This is where “approved deals” die.",
          "Not because buyer changed mind.",
          "Because process friction killed momentum.",
          "Procurement is not paperwork.",
          "It is a risk-control system.",
          "Treat it casually and you lose signed business.",
        ],
      },
      {
        title: "Definition",
        lines: [
          "Procurement is the structured process where a buyer organization converts commercial intent into contractual commitment through legal, compliance, security, vendor onboarding, and purchasing controls.",
          "This includes:",
          "Vendor onboarding",
          "Legal review",
          "Security / compliance review",
          "Final commercial terms execution",
          "If this fails:",
          "Deal delays indefinitely",
          "Internal momentum decays",
          "Approval can be re-questioned",
          "Deal dies as process attrition",
        ],
      },
      {
        title: "Core Must-Win Mindset",
        lines: [
          "“Can I keep decision momentum alive while helping the buyer clear internal risk controls?”",
          "Not:",
          "“How fast can contracts get signed?”",
          "Wrong.",
          "This is not admin work.",
          "This is momentum protection.",
        ],
      },
      {
        title: "Buyer Reality (Alignment View)",
        lines: [
          "Buyer is thinking:",
          "Will procurement block this?",
          "Will legal raise issues?",
          "Could this become painful internally?",
          "Will I regret pushing this through?",
          "They are protecting:",
          "Compliance risk",
          "Internal process credibility",
          "Personal political exposure",
          "This is still risk management.",
          "Not a done deal.",
        ],
      },
      {
        title: "What Must Be True To Progress",
        lines: [
          "Must be true:",
          "Process path understood",
          "Major compliance risks manageable",
          "Commercial terms close to final",
          "Champion still engaged through process",
          "Seller must have:",
          "Process readiness",
          "Response discipline",
          "Internal coordination",
          "Momentum management",
          "If weak:",
          "deal slows and can die.",
        ],
      },
    ],
  },
  {
    title: "Close",
    sections: [
      {
        title: "Overview",
        lines: [
          "This is where intent becomes commitment.",
          "Not “verbal yes.”",
          "Not “contract sent.”",
          "Not “looks done.”",
          "Close means the buyer has made an enforceable commitment and momentum is transferred into successful execution.",
          "Many reps think close is the finish line.",
          "Wrong.",
          "Close is where bad deals get exposed.",
          "Because if commitment is weak it can still unravel.",
        ],
      },
      {
        title: "Definition",
        lines: [
          "Close is the process of converting approved, contracted intent into confirmed commitment, securing the deal operationally, and ensuring a clean handoff into delivery so the decision holds.",
          "This includes:",
          "Final commitment confirmation",
          "Signature completion",
          "Mutual expectation alignment",
          "Internal handoff / launch readiness",
          "If this fails:",
          "Signed deal can still stall",
          "Buyer remorse can emerge",
          "Implementation can wobble",
          "“Won” deal can become dead revenue",
        ],
      },
      {
        title: "Core Must-Win Mindset",
        lines: [
          "“Can I secure commitment in a way that sticks after signature?”",
          "Not:",
          "“How do I get the paper signed?”",
          "Too small.",
          "Close is commitment durability.",
        ],
      },
      {
        title: "Buyer Reality (Alignment View)",
        lines: [
          "Even at close, buyer may still think:",
          "Did we make right choice?",
          "What happens next?",
          "Will execution go smoothly?",
          "Am I exposed if this goes wrong?",
          "This is often quiet anxiety.",
          "The sale is not emotionally finished.",
          "Buyer is still validating the decision.",
        ],
      },
      {
        title: "What Must Be True To Progress",
        lines: [
          "Must be true:",
          "Contract executed",
          "Decision remains supported internally",
          "Expectations aligned for what happens next",
          "Transition to delivery is credible",
          "Seller must have:",
          "Close control",
          "Commitment confirmation",
          "Handoff readiness",
          "Post-signature confidence reinforcement",
          "If weak:",
          "closed deal can decay.",
        ],
      },
    ],
  },
];

export const constructionTracks: ConstructionTrack[] = [
  {
    id: "0",
    label: "Pre-Contact",
    overlays: ["Worldview", "Industry forces", "ICP clarity"],
  },
  {
    id: "1",
    label: "Contact",
    overlays: [
      "Entry via channel",
      "Problem hypothesis activation",
      "Persona relevance check",
    ],
  },
  {
    id: "2",
    label: "Interest",
    overlays: [
      "Persona understanding",
      "Frame control",
      "Trigger identification",
      "Pain surface",
      "Stakes tease",
    ],
  },
  {
    id: "3",
    label: "Discovery",
    overlays: [
      "Context / problem / impact",
      "Problem depth",
      "Do-nothing cost",
      "Value hypothesis",
      "Stakeholder discovery",
      "Commitment signal",
    ],
  },
  {
    id: "4",
    label: "Validation",
    overlays: [
      "Solution shaping",
      "Buyer self-recognition",
      "Differentiation",
      "Credibility",
    ],
  },
  {
    id: "5",
    label: "Internal Discussion",
    overlays: ["ROI establishment", "Champion coaching", "Narrative transfer"],
  },
  {
    id: "6",
    label: "Stakeholder Expansion",
    overlays: [
      "Stakeholder expansion",
      "Persona narratives",
      "Objection handling",
      "Political alignment",
      "Risk removal",
    ],
  },
  {
    id: "7",
    label: "Pilot",
    overlays: [
      "Pilot / test",
      "Success metrics",
      "Proof of value",
      "ROI strengthening",
    ],
  },
  {
    id: "8",
    label: "Budget Discussion",
    overlays: [
      "Economic buyer alignment",
      "Budget path",
      "Priority justification",
      "Trade-offs",
    ],
  },
  {
    id: "9",
    label: "Procurement",
    overlays: ["Procurement process", "Negotiation", "Decision signal"],
  },
  {
    id: "10",
    label: "Close",
    overlays: [
      "Decision reinforcement",
      "Risk reassurance",
      "Agreement",
      "Expansion setup",
    ],
  },
];

export const signalTracks: SignalTrack[] = [
  {
    id: "0",
    label: "Pre-Contact",
    overlays: [
      { text: "Personalised reply to outreach", priority: "P1", status: "success" },
      { text: "Mentions specific context/problem", priority: "P1", status: "success" },
      { text: "Quick response (<24h)", priority: "P2", status: "success" },
      { text: "Generic reply (“sounds interesting”)", priority: "P2", status: "warning" },
      { text: "Asks for deck immediately", priority: "P2", status: "warning" },
      { text: "No response after multiple touchpoints", priority: "P1", status: "error" },
      { text: "Redirects to generic email / junior", priority: "P1", status: "error" },
    ],
  },
  {
    id: "1",
    label: "Contact",
    overlays: [
      { text: "Shows up on time", priority: "P2", status: "success" },
      { text: "Mentions why they took the meeting", priority: "P1", status: "success" },
      { text: "Shares context without prompting", priority: "P1", status: "success" },
      { text: "Asks “what do you do?” only", priority: "P2", status: "warning" },
      { text: "Passive / low energy engagement", priority: "P2", status: "warning" },
      { text: "Distracted (multitasking, no camera, etc.)", priority: "P3", status: "warning" },
      { text: "Late / reschedules multiple times", priority: "P1", status: "error" },
      { text: "No clear reason for taking meeting", priority: "P1", status: "error" },
    ],
  },
  {
    id: "2",
    label: "Interest",
    overlays: [
      { text: "Asks relevant follow-up questions", priority: "P1", status: "success" },
      { text: "Connects to internal use case", priority: "P1", status: "success" },
      { text: "Shares internal problems voluntarily", priority: "P1", status: "success" },
      { text: "Requests next meeting", priority: "P1", status: "success" },
      { text: "Says “this is interesting” without depth", priority: "P2", status: "warning" },
      { text: "Focuses on features only", priority: "P2", status: "warning" },
      { text: "Asks for deck/recording", priority: "P3", status: "warning" },
      { text: "No next step commitment", priority: "P1", status: "error" },
      { text: "Ghosts after initial call", priority: "P1", status: "error" },
    ],
  },
  {
    id: "3",
    label: "Discovery",
    overlays: [
      { text: "Shares detailed workflows/process", priority: "P1", status: "success" },
      { text: "Admits problems/pain clearly", priority: "P1", status: "success" },
      { text: "Quantifies impact (time, money, etc.)", priority: "P1", status: "success" },
      { text: "Introduces internal context/politics", priority: "P1", status: "success" },
      { text: "Answers but stays surface-level", priority: "P1", status: "warning" },
      { text: "Deflects deeper questions", priority: "P1", status: "warning" },
      { text: "Keeps answers generic", priority: "P2", status: "warning" },
      { text: "Avoids discussing impact", priority: "P1", status: "error" },
      { text: "Says “everything is fine”", priority: "P1", status: "error" },
    ],
  },
  {
    id: "4",
    label: "Validation",
    overlays: [
      { text: "Asks “will this work for us?”", priority: "P1", status: "success" },
      { text: "Shares constraints/requirements", priority: "P1", status: "success" },
      { text: "Engages in solution discussion", priority: "P1", status: "success" },
      { text: "Compares approaches thoughtfully", priority: "P2", status: "success" },
      { text: "Asks for generic demo", priority: "P2", status: "warning" },
      { text: "Focuses only on features", priority: "P2", status: "warning" },
      { text: "No clear evaluation criteria", priority: "P1", status: "warning" },
      { text: "Repeats basic questions", priority: "P1", status: "error" },
      { text: "Brings new objections late", priority: "P1", status: "error" },
    ],
  },
  {
    id: "5",
    label: "Internal Discussion",
    overlays: [
      { text: "Mentions internal conversations happening", priority: "P1", status: "success" },
      { text: "Shares feedback from others", priority: "P1", status: "success" },
      { text: "Asks for material to share internally", priority: "P2", status: "success" },
      { text: "Prepares for internal pitch", priority: "P1", status: "success" },
      { text: "Says “will discuss internally” (no detail)", priority: "P1", status: "warning" },
      { text: "Delays without explanation", priority: "P1", status: "warning" },
      { text: "No visibility into stakeholders", priority: "P1", status: "warning" },
      { text: "Goes silent after “internal discussion”", priority: "P1", status: "error" },
      { text: "Comes back with new objections misaligned", priority: "P1", status: "error" },
    ],
  },
  {
    id: "6",
    label: "Stakeholder Expansion",
    overlays: [
      { text: "Introduces new stakeholders proactively", priority: "P1", status: "success" },
      { text: "Stakeholders engage with context", priority: "P1", status: "success" },
      { text: "Persona-specific questions emerge", priority: "P1", status: "success" },
      { text: "Multiple stakeholders attend calls", priority: "P1", status: "success" },
      { text: "Stakeholders passive/silent", priority: "P2", status: "warning" },
      { text: "Same person controls all communication", priority: "P1", status: "warning" },
      { text: "“Will loop them later” repeatedly", priority: "P1", status: "warning" },
      { text: "New stakeholder asks from scratch", priority: "P1", status: "error" },
      { text: "Conflicting stakeholder opinions", priority: "P1", status: "error" },
    ],
  },
  {
    id: "7",
    label: "Pilot / Test",
    overlays: [
      { text: "Commits resources/time for pilot", priority: "P1", status: "success" },
      { text: "Defines success criteria", priority: "P1", status: "success" },
      { text: "Engages actively during pilot", priority: "P1", status: "success" },
      { text: "Shares feedback quickly", priority: "P1", status: "success" },
      { text: "Vague pilot goals", priority: "P1", status: "warning" },
      { text: "Low engagement during pilot", priority: "P1", status: "warning" },
      { text: "Delays pilot start repeatedly", priority: "P1", status: "warning" },
      { text: "No clear ownership on buyer side", priority: "P1", status: "error" },
      { text: "Pilot runs but no decision path", priority: "P1", status: "error" },
    ],
  },
  {
    id: "8",
    label: "Budget Discussion",
    overlays: [
      { text: "Asks structured pricing questions", priority: "P1", status: "success" },
      { text: "Discusses budget range openly", priority: "P1", status: "success" },
      { text: "Aligns cost with value", priority: "P1", status: "success" },
      { text: "Mentions budget approval process", priority: "P1", status: "success" },
      { text: "Asks for discount early", priority: "P2", status: "warning" },
      { text: "Price sensitivity without context", priority: "P1", status: "warning" },
      { text: "“Too expensive” without reasoning", priority: "P1", status: "error" },
      { text: "Budget suddenly becomes blocker", priority: "P1", status: "error" },
      { text: "No clarity on budget owner", priority: "P1", status: "error" },
    ],
  },
  {
    id: "9",
    label: "Procurement",
    overlays: [
      { text: "Shares procurement steps/process", priority: "P1", status: "success" },
      { text: "Introduces procurement team", priority: "P1", status: "success" },
      { text: "Engages in contract discussion", priority: "P1", status: "success" },
      { text: "Negotiates specifics", priority: "P1", status: "success" },
      { text: "Delays citing process vaguely", priority: "P1", status: "warning" },
      { text: "Legal/procurement slow without clarity", priority: "P2", status: "warning" },
      { text: "Reopens solved topics", priority: "P1", status: "error" },
      { text: "New stakeholders block deal", priority: "P1", status: "error" },
      { text: "Endless negotiation loops", priority: "P1", status: "error" },
    ],
  },
  {
    id: "10",
    label: "Close",
    overlays: [
      { text: "Confirms decision clearly", priority: "P1", status: "success" },
      { text: "Aligns on next steps/timeline", priority: "P1", status: "success" },
      { text: "Internal champion pushes closure", priority: "P1", status: "success" },
      { text: "Verbal commitment given", priority: "P1", status: "success" },
      { text: "“Almost there” without specifics", priority: "P1", status: "warning" },
      { text: "Delays signing without reason", priority: "P1", status: "warning" },
      { text: "Goes silent at final stage", priority: "P1", status: "error" },
      { text: "Last-minute objections", priority: "P1", status: "error" },
      { text: "Decision pushed indefinitely", priority: "P1", status: "error" },
    ],
  },
];

export const guardrails: AccordionItemData[] = [
  {
    title: "Running Checklist Discovery",
    body: "You ask a list of pre-prepared questions without adapting to the buyer's responses. This makes the conversation feel transactional and signals that you're not actually listening. Internally, the buyer disengages and gives surface-level answers.",
    open: true,
  },
  {
    title: "Jumping to Solution Too Early",
    body: "You begin demoing features before the buyer agrees on the problem. That shifts the conversation into product comparison mode and weakens urgency. A stronger move is to stay with the pain until the buyer clearly states what is broken and what it is costing them.",
    open: false,
  },
  {
    title: "Staying at Surface-Level Pain",
    body: "The buyer says pipeline visibility is poor, but you never unpack what that actually means for forecasting, board pressure, or missed revenue. Surface pain sounds interesting, but deep pain creates urgency. Keep asking what happens next, who feels it, and why it matters now.",
    open: false,
  },
  {
    title: "Over-Talking Instead of Listening",
    body: "When you answer too fast or tell long stories, the buyer stops exploring their own thinking. You lose the chance to hear the language they use, the politics they hint at, and the emotion underneath the issue. Aim for short prompts, then let silence do some work.",
    open: false,
  },
];

export const bestPractices: AccordionItemData[] = [
  {
    title: "Use Layered Questioning",
    body: "Start with context, then move to problem, then impact, and finally personal consequences. This structured depth helps you uncover not just what's happening, but why it matters. It also makes the buyer feel understood, which increases openness.",
    open: true,
  },
  {
    title: "Quantify the Impact Clearly",
    body: "Translate vague frustration into numbers where possible. Ask about wasted hours, missed opportunities, delayed deals, or forecast gaps. Even directional numbers help the buyer and your team understand the cost of leaving the problem unsolved.",
    open: false,
  },
  {
    title: "Actively Listen and Reflect Back",
    body: "A short reflection like 'It sounds like the real issue is rep inconsistency, not just low activity' helps the buyer feel heard and often leads them to elaborate. Reflection also lets you verify meaning before moving forward. It is one of the fastest ways to deepen trust.",
    open: false,
  },
  {
    title: "Uncover Personal Stakes",
    body: "Ask how this problem affects the buyer personally: credibility with leadership, team morale, promotion plans, or risk exposure. When a buyer ties the issue to their own success, momentum usually increases. Personal stakes are often the bridge between interest and action.",
    open: false,
  },
];

export const mockSteps: MockStepData[] = [
  {
    title: "STEP 1 — Set the Scenario",
    content: [
      "Start by defining the situation clearly in your AI chat:",
      "Your role: Account Executive",
      "Buyer role: VP Sales (or relevant persona)",
      "Company context: SaaS / Enterprise / Startup",
      "Problem area: pipeline visibility, churn, inefficiency",
      "This ensures the conversation feels realistic and focused.",
    ],
    open: true,
  },
  {
    title: "STEP 2 — Start the Discovery Call",
    content: [
      "Open the conversation with a confident but low-pressure setup:",
      "Confirm the buyer's goal for the meeting",
      "Share a simple agenda and expected outcome",
      "Ask one broad context question before narrowing in",
      "Listen for language that signals urgency or resistance",
      "This keeps the conversation focused without making it feel scripted.",
    ],
    open: false,
  },
  {
    title: "STEP 3 — Drive the Conversation",
    content: [
      "Move from context into problem and impact:",
      "Explore what is happening today",
      "Clarify where the issue shows up in workflow",
      "Ask what happens if the problem continues",
      "Look for operational and political consequences",
      "Your goal is to make the buyer explain the problem in their own words.",
    ],
    open: false,
  },
];
