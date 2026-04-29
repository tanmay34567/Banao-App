export interface SignalDetail {
  id: string;
  title: string;
  track: string;
  priority: string;
  statusLabel: string;
  meaning: {
    description: string;
    subSignals: {
      title: string;
      description: string;
    }[];
  };
  countsAsPersonalised: {
    real: {
      bullets: string[];
      quotes: string[];
    };
    fake: {
      bullets: string[];
      quotes: string[];
    };
  };
  whyP1: {
    description: string;
    strongRead: string;
    misread: string;
  };
  fresherMustUnderstand: {
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  authorityMoves: {
    description: string;
    items: {
      title: string;
      wrong: string;
      correct: string;
      outcome: string;
      open?: boolean;
    }[];
  };
  commonMistakes: {
    items: {
      title: string;
      description: string;
      consequence: string;
    }[];
  };
  microSignals: {
    description: string;
    strong: string[];
    medium: string[];
    weak: string[];
  };
  whatHappensNext: {
    description: string;
    doText: string;
    dontItems: string[];
  };
  finalMentalModel: {
    title: string;
    description: string;
  };
  guardrails: {
    items: {
      title: string;
      description: string;
    }[];
  };
  bestPractices: {
    items: {
      title: string;
      description: string;
    }[];
  };
  aiMockTest: {
    description: string;
    steps: {
      title: string;
      description: string;
      content?: string;
    }[];
  };
  oneLineSummary: string;
}

export const signalDetailsData: Record<string, SignalDetail> = {
  "Personalised reply to outreach": {
    id: "0",
    title: "Personalised reply to outreach",
    track: "SIGNAL . 01 OF 05",
    priority: "P1 - Priority",
    statusLabel: "Strong Signal",
    meaning: {
      description: "A personalised reply is the first true micro-commitment from a buyer. It signals that they read, processed, and chose to respond with intent — not politeness. Treat it as an open door, not a closed deal. Your job here is to convert a moment of attention into a structured conversation, without overplaying your hand.",
      subSignals: [
        {
          title: "Mentally engaged",
          description: "Buyer paused, read, and chose to respond with effort."
        },
        {
          title: "Cognitive connection",
          description: "They mapped your message to something real on their side."
        },
        {
          title: "Problem awareness",
          description: "An adjacent problem is alive enough to react to."
        }
      ]
    },
    countsAsPersonalised: {
      real: {
        bullets: [
          "Refers to company, role, or specific problem",
          "Mentions concrete numbers, teams, or workflows",
          "Connects directly to a use-case"
        ],
        quotes: [
          "“We’re rebuilding our pipeline review with 14 AEs — your point on forecast drift hit home.”",
          "“Curious how you handle multi-threading inside Procurement.”"
        ]
      },
      fake: {
        bullets: [
          "Weak signals disguised as strong",
          "“Sounds interesting”",
          "“Tell me more”",
          "“Share details / a deck”"
        ],
        quotes: [
          "“Looks interesting, send me a deck.”",
          "“Happy to learn more — share a one-pager.”"
        ]
      }
    },
    whyP1: {
      description: "This signal is the fork in the road. Read correctly, it determines whether you're looking at a real opportunity or expensive noise.",
      strongRead: "move forward with control.",
      misread: "weeks of wasted cycles."
    },
    fresherMustUnderstand: {
      description: "Don't confuse openness with intent",
      items: [
        {
          title: "This is NOT interest",
          description: "A reply is permission to start — not commitment to buy."
        },
        {
          title: "No budget or urgency yet",
          description: "Don't assume a timeline exists just because they replied."
        },
        {
          title: "Only permission to explore",
          description: "Treat it like an open door, not a signed agreement."
        }
      ]
    },
    authorityMoves: {
      description: "The four moves that earn control of the conversation",
      items: [
        {
          title: "Frame Control",
          wrong: "Thanks for replying! When works for a quick chat?",
          correct: "Before we book time — what made my note land for you?",
          outcome: "You set the tone: this is a diagnostic, not a sales call.",
          open: true
        },
        {
          title: "Insight Injection",
          wrong: "...",
          correct: "...",
          outcome: "..."
        },
        {
          title: "Soft Qualification",
          wrong: "...",
          correct: "...",
          outcome: "..."
        },
        {
          title: "Controlled Next Step",
          wrong: "...",
          correct: "...",
          outcome: "..."
        }
      ]
    },
    commonMistakes: {
      items: [
        {
          title: "Over-excitement",
          description: "You celebrate the reply and lose framing.",
          consequence: "Buyer reads desperation, not value."
        },
        {
          title: "Info dump",
          description: "You send a deck, case studies, and a calendar in one breath.",
          consequence: "You overwhelm and hand back control."
        },
        {
          title: "No direction",
          description: "You ask 'what do you want to know?'",
          consequence: "Conversation drifts into curiosity with no path."
        },
        {
          title: "Assuming deal",
          description: "You jump to pricing, timeline, procurement.",
          consequence: "You burn trust before earning it."
        }
      ]
    },
    microSignals: {
      description: "Read the texture, not just the response",
      strong: [
        "Names a specific internal problem",
        "Asks a sharp, scoped question",
        "Suggests a time or person to involve"
      ],
      medium: [
        "Acknowledges the topic generally",
        "Asks for more information",
        "Mentions 'maybe next quarter'"
      ],
      weak: [
        "One-line polite reply",
        "“Send a deck” with no context",
        "Forwards to an inbox, not a person"
      ]
    },
    whatHappensNext: {
      description: "Goal of the next interaction",
      doText: "Convert interest into a structured conversation with a clear diagnostic frame.",
      dontItems: ["Sell", "Demo", "Convince"]
    },
    finalMentalModel: {
      title: "“The door is open.”",
      description: "A personalised reply doesn't mean you're inside the room. It means the door is unlatched. Your job is to enter with control — calm posture, sharp questions, no oversell. The way you walk in decides the rest of the deal."
    },
    guardrails: {
      items: [
        {
          title: "Running Checklist Discovery",
          description: "You ask a list of pre-prepared questions without adapting to the buyer’s responses. This makes the conversation feel transactional and signals that you’re not actually listening. Internally, the buyer disengages and gives surface-level answers."
        },
        {
          title: "Jumping to Solution Too Early",
          description: "Trying to demo features before fully understanding the context and impact."
        },
        {
          title: "Staying at Surface-Level Pain",
          description: "Accepting general statements without digging deeper into the 'why'."
        },
        {
          title: "Over-Talking Instead of Listening",
          description: "Dominating the conversation instead of letting the buyer lead with their pain."
        },
        {
          title: "Ignoring Emotional and Personal Drivers",
          description: "Focusing only on business metrics and ignoring how the problem affects the person."
        },
        {
          title: "Not Identifying the 'Why Now'",
          description: "Failing to uncover the trigger that made this a priority today."
        }
      ]
    },
    bestPractices: {
      items: [
        {
          title: "Use Layered Questioning",
          description: "Start with context, then move to problem, then impact, and finally personal consequences. This structured depth helps you uncover not just what’s happening, but why it matters. It also makes the buyer feel understood, which increases openness."
        },
        {
          title: "Quantify the Impact Clearly",
          description: "Help the buyer see the cost of inaction in concrete terms."
        },
        {
          title: "Actively Listen and Reflect Back",
          description: "Repeat what you heard to confirm understanding and build rapport."
        },
        {
          title: "Uncover Personal Stakes",
          description: "Understand how solving this problem helps the buyer individually."
        },
        {
          title: "Drive Toward a Clear Problem Statement",
          description: "Summarize the pain into a single, agreed-upon statement."
        },
        {
          title: "Establish Urgency with 'Why Now'",
          description: "Identify the deadline or event driving the need for a solution."
        }
      ]
    },
    aiMockTest: {
      description: "This section helps you apply discovery skills in a simulated environment. Instead of just understanding concepts, you actively practice real conversations where the buyer responds dynamically. The goal is to improve how you think, ask questions, and navigate ambiguity in real time — not to deliver perfect answers.",
      steps: [
        {
          title: "STEP 1 — Set the Scenario",
          description: "Start by defining the situation clearly in your AI chat: Your role: Account Executive; Target role: VP Sales for relevant company; Company context: [See Case Studies in Playbook]; Problem focus: [e.g., deal visibility, churn, efficiency]. This ensures the conversation feels realistic and focused.",
          content: "Scenario setup details..."
        },
        {
          title: "STEP 2 — Start the Discovery Call",
          description: "Initiate the call with a strong frame and open-ended questions."
        },
        {
          title: "STEP 3 — Drive the Conversation",
          description: "Navigate the buyer's responses and dig deeper into pain points."
        },
        {
          title: "STEP 4 — Handle Real Buyer Behavior",
          description: "Respond to pushback, surface-level answers, or redirects."
        },
        {
          title: "STEP 5 — Close the Discovery Properly",
          description: "Summarize findings and agree on concrete next steps."
        },
        {
          title: "STEP 6 — Reflect Immediately",
          description: "Analyze what went well and what could be improved."
        },
        {
          title: "STEP 7 — Repeat and Improve",
          description: "Run the scenario again with a different focus or more difficult buyer."
        }
      ]
    },
    oneLineSummary: "Personalised reply gives entry — authority determines outcome."
  },
  "Mentions specific context/problem": {
    id: "1",
    title: "Mentions specific context/problem",
    track: "SIGNAL . 02 OF 05",
    priority: "P1 - Priority",
    statusLabel: "Strong Signal",
    meaning: {
      description: "When a buyer mentions a specific internal context or problem, it's a massive green flag. It means they've already done the mental work of connecting your outreach to their reality.",
      subSignals: [
        {
          title: "High Intent",
          description: "They are willing to share internal pain points."
        }
      ]
    },
    countsAsPersonalised: {
      real: {
        bullets: ["Specific mention of workflow", "Concrete pain point"],
        quotes: ["“We handle this manually today.”"]
      },
      fake: {
        bullets: ["Generic praise"],
        quotes: ["“Good note.”"]
      }
    },
    whyP1: {
      description: "This is a direct indicator of a qualified opportunity.",
      strongRead: "Fast-track to discovery.",
      misread: "Missing a critical pain hook."
    },
    fresherMustUnderstand: {
      description: "Don't ignore the context",
      items: [
        {
          title: "Context is the hook",
          description: "Use their words in your next reply."
        }
      ]
    },
    authorityMoves: {
      description: "Leverage the context",
      items: [
        {
          title: "Pain Echo",
          wrong: "Glad to hear that. When can we talk?",
          correct: "You mentioned [Problem] — how is that impacting [Metric]?",
          outcome: "You deepen the discovery immediately."
        }
      ]
    },
    commonMistakes: {
      items: [
        {
          title: "Ignoring the hint",
          description: "Sticking to your script instead of their context.",
          consequence: "You look like a robot."
        }
      ]
    },
    microSignals: {
      description: "Read the depth of context",
      strong: ["Specific team names", "Specific software mentioned"],
      medium: ["General process mentioned"],
      weak: ["'We have a lot of problems'"]
    },
    whatHappensNext: {
      description: "Confirm the context",
      doText: "Ask a clarifying question about the specific context mentioned.",
      dontItems: ["Pivot to a generic pitch"]
    },
    finalMentalModel: {
      title: "“The hook is set.”",
      description: "They gave you the language to use. Use it."
    },
    oneLineSummary: "Specific context is a gift — don't waste it on a generic reply.",
    guardrails: {
      items: [
        {
          title: "Placeholder Guardrail",
          description: "Details for this specific signal's guardrails."
        }
      ]
    },
    bestPractices: {
      items: [
        {
          title: "Placeholder Practice",
          description: "Details for this specific signal's best practices."
        }
      ]
    },
    aiMockTest: {
      description: "Practice simulated discovery for this signal.",
      steps: [
        {
          title: "Step 1",
          description: "Define the scenario based on the specific context provided."
        }
      ]
    }
  }
};

export function getSignalDetail(
  title: string, 
  trackLabel: string, 
  index: number, 
  total: number, 
  status: string, 
  priority: string
): SignalDetail {
  if (signalDetailsData[title]) {
    return signalDetailsData[title];
  }

  // Fallback data structure for signals without specific content
  return {
    id: `fallback-${index}`,
    title: title,
    track: `SIGNAL . ${String(index).padStart(2, '0')} OF ${String(total).padStart(2, '0')}`,
    priority: `${priority} - Priority`,
    statusLabel: status === 'success' ? 'Strong Signal' : status === 'warning' ? 'Caution Signal' : 'Negative Signal',
    meaning: {
      description: `This signal indicates a moment of ${status === 'success' ? 'positive' : status === 'warning' ? 'uncertain' : 'negative'} engagement in the ${trackLabel} stage. Reading this correctly helps you understand the buyer's current mental state and how to steer the conversation toward a productive outcome.`,
      subSignals: [
        {
          title: "Initial Engagement",
          description: "The buyer is reacting to the current step in the process."
        },
        {
          title: "Process Alignment",
          description: "This signal helps verify if the buyer's timeline matches yours."
        }
      ]
    },
    countsAsPersonalised: {
      real: {
        bullets: [
          "Direct reference to the current topic",
          "Specific mention of internal workflows",
          "Concrete questions about implementation"
        ],
        quotes: [
          "“How does this specifically impact our team structure?”",
          "“I can see how this relates to our current project.”"
        ]
      },
      fake: {
        bullets: [
          "Generic agreement without depth",
          "Surface-level politeness",
          "Deflecting to other topics"
        ],
        quotes: [
          "“That sounds interesting, maybe later.”",
          "“We can talk about that eventually.”"
        ]
      }
    },
    whyP1: {
      description: "Misinterpreting this signal can lead to a misalignment of expectations and wasted resources in the following stages.",
      strongRead: "maintain control of the deal flow.",
      misread: "lose momentum and drift into a 'no decision' state."
    },
    fresherMustUnderstand: {
      description: "The difference between active intent and passive compliance.",
      items: [
        {
          title: "Don't confuse activity with progress",
          description: "A response is an action, but not necessarily a step forward."
        },
        {
          title: "Verify the 'Why'",
          description: "Always understand the motivation behind the buyer's signal."
        }
      ]
    },
    authorityMoves: {
      description: "Moves to solidify your position as a trusted advisor.",
      items: [
        {
          title: "Reframing the Signal",
          wrong: "Okay, thanks for that information.",
          correct: "Based on what you just shared, it seems like [Problem] is the priority — is that right?",
          outcome: "You confirm understanding and maintain the diagnostic lead.",
          open: true
        }
      ]
    },
    commonMistakes: {
      items: [
        {
          title: "Accepting at face value",
          description: "Not digging into the 'why' behind the signal.",
          consequence: "You build the deal on assumptions rather than truth."
        },
        {
          title: "Missing the timing",
          description: "Waiting too long to react to a critical signal.",
          consequence: "The window of relevance closes, and urgency decays."
        }
      ]
    },
    microSignals: {
      description: "The subtle cues that reveal the buyer's true stance.",
      strong: ["Specific internal details shared", "Request for concrete next steps"],
      medium: ["General acknowledgement", "Request for more information"],
      weak: ["One-word answers", "Frequent rescheduling"]
    },
    whatHappensNext: {
      description: "Securing the next milestone.",
      doText: "Verify the depth of this signal and align it with the established problem statement.",
      dontItems: ["Ignore the nuance", "Assume the signal means a 'yes'"]
    },
    finalMentalModel: {
      title: "“The signal is a pulse check.”",
      description: "Treat every signal as a measurement of the deal's health. A strong pulse means keep moving; a weak pulse means stop and diagnose."
    },
    oneLineSummary: "Every signal is an opportunity to either gain control or lose it.",
    guardrails: {
      items: []
    },
    bestPractices: {
      items: []
    },
    aiMockTest: {
      description: "Practice responding to this signal in a simulated environment.",
      steps: []
    }
  };
}
