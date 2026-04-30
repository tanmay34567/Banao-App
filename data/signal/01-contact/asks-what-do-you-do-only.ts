import { SignalDetail } from "../types";

export const data: SignalDetail = {
  id: "1-3",
  title: "Asks 'what do you do?' only",
  track: "CONTACT . 04 OF 08",
  priority: "P2 - Priority",
  statusLabel: "Caution Signal",
  meaning: {
    description: "The buyer has no clear frame yet and is putting you into the 'vendor explanation box'. They are not anchored in a problem or thinking in use cases. They are asking you to define yourself without context.",
    subSignals: [
      {
        title: "Neutral Curiosity",
        description: "Interest without underlying intent or perceived relevance."
      },
      {
        title: "Missing Frame",
        description: "The buyer doesn't see how this relates to their reality yet."
      },
      {
        title: "Vendor Classification",
        description: "An invitation to become just another product explanation."
      }
    ]
  },
  countsAsPersonalised: {
    real: {
      bullets: [
        "“What do you do for companies like ours?” (Context emerging)",
        "Specific question about your target audience or use cases",
        "Active attempt to find alignment"
      ],
      quotes: [
        "“How do you help teams like mine specifically?”"
      ]
    },
    fake: {
      bullets: [
        "Asked casually with low engagement",
        "Generic curiosity without any reference to their own world",
        "Missing frame or problem anchor"
      ],
      quotes: [
        "“What do you do?”",
        "“Tell me about your company.”"
      ]
    }
  },
  whyPriority: {
    description: "If mishandled, you immediately become 'another vendor explaining their product.' It's a fork point signal where your response determines if you stay an advisor or drop to vendor status.",
    strongRead: "Shift from 'What we do' → 'Why it matters in your world'.",
    misread: "Accepting the default frame; over-explaining features."
  },
  fresherMustUnderstand: {
    description: "This is not a real question; it's a sign they don't see the relevance yet. Answering directly kills authority. You must add context before answering and anchor the explanation in their reality.",
    items: [
      {
        title: "It's a Trap",
        description: "Answering with a generic pitch accepts their frame and loses your control over the narrative."
      },
      {
        title: "Default is Death",
        description: "Juniors usually go into features or company intros, which is the fastest way to lose authority."
      },
      {
        title: "Context First",
        description: "Your job is to move from a generic 'what' to a specific 'why it matters to you'."
      }
    ]
  },
  authorityMoves: {
    description: "Don't accept the default frame. Push for context and anchor your explanation in a problem-first narrative.",
    items: [
      {
        title: "Move 1: Contextual Reframe (Most Important)",
        wrong: "“We are a platform that helps with…”",
        correct: "“Happy to explain — but just so I don’t give you a generic answer, what context are you looking at this from?”",
        outcome: "Pushes for context and maintains your authority as an advisor."
      },
      {
        title: "Move 2: Hypothesis-Based Framing",
        wrong: "Blindly pitching without knowing their needs.",
        correct: "“At a high level, we typically work with teams facing X or Y — does either of those resonate with what you’re exploring?”",
        outcome: "Anchors the explanation and makes it immediately relevant."
      },
      {
        title: "Move 3: Problem-First Answer",
        wrong: "A feature dump or product overview.",
        correct: "“At a high level, we help teams solve X — but it usually shows up in very different ways depending on the setup. That’s why I’d rather anchor this to your context.”",
        outcome: "Avoids the vendor box and brings the conversation back to them."
      },
      {
        title: "Move 4: Short + Redirect",
        wrong: "Talking too much to try and impress.",
        correct: "“In one line, we help with X — but the more important question is whether that’s actually relevant for your setup. Can you share what prompted this?”",
        outcome: "Answers the question lightly and redirects strongly to discovery."
      }
    ]
  },
  commonMistakes: {
    items: [
      {
        title: "Full Company Pitch",
        description: "Giving a long explanation of the company and feature list.",
        consequence: "You become replaceable, forgettable, and low-status."
      },
      {
        title: "Talking Too Much",
        description: "Trying to impress the buyer by over-explaining everything.",
        consequence: "The buyer disengages and puts you in the vendor box."
      },
      {
        title: "Not Redirecting",
        description: "Answering fully and then just moving forward with your deck.",
        consequence: "You lose control of the frame and discovery depth."
      },
      {
        title: "Sounding Generic",
        description: "“We are a leading platform that...”",
        consequence: "Instant authority drop and loss of strategic positioning."
      }
    ]
  },
  microSignals: {
    description: "Categorize the level of context and engagement in the question.",
    strong: ["“What do you do for companies like ours?” (Context emerging)"],
    medium: ["“What do you do?” (Neutral)"],
    weak: ["Asked casually with low engagement (Weak Signal)"]
  },
  whatHappensNext: {
    description: "Convert Generic Curiosity → Context → Relevance.",
    doText: "Push for context, anchor your explanation, redirect to their world, and start discovery.",
    dontItems: ["Pitch", "Dump info", "Stay generic"]
  },
  finalMentalModel: {
    title: "“Buyer has no frame — if you don’t create one, you’ll fall into theirs”",
    description: "Don't accept the default frame. Anchor every explanation in their reality to maintain your position as an advisor."
  },
  oneLineSummary: "“What do you do?” is not a question—it’s a trap. Your answer determines whether you become a vendor or an advisor.",
  guardrails: { items: [] },
  bestPractices: { items: [] },
  aiMockTest: { description: "", steps: [] }
};
