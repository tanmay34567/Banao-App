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
  whyPriority: {
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
