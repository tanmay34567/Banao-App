"use client";

import { TopBar } from "@/components/playbook/top-bar";
import { useState } from "react";

const STEPS = [
  { id: 1, name: "Screen" },
  { id: 2, name: "Recruiter Call" },
  { id: 3, name: "Technical" },
  { id: 4, name: "System Design" },
  { id: 5, name: "Behavioral" },
  { id: 6, name: "Onsite Loop" },
  { id: 7, name: "Offer & Negotiation" },
];

const CONTENT_DATA: Record<number, { mistakes: string[]; frameworks: string[] }> = {
  1: {
    mistakes: ["Talking too much about yourself", "Not knowing the company's product", "Vague answers about past experience"],
    frameworks: ["Elevator Pitch: Who you are + What you do", "Connection Framing: Why this company?"],
  },
  2: {
    mistakes: ["Asking about salary too early", "Lack of enthusiasm", "Not asking clarifying questions"],
    frameworks: ["Reverse Interview: Asking about team culture", "Value Prop: How you fit the role"],
  },
  3: {
    mistakes: [
      "Answering before understanding the question",
      "Reciting frameworks instead of thinking out loud",
      "Optimizing too early in the process",
      "Vague STAR stories without quantified impact",
    ],
    frameworks: [
      "STAR-Q: Situation, Task, Action, Result, Quantify",
      "Trade-off framing for design questions",
      "Constraints-first problem solving",
    ],
  },
  4: {
    mistakes: ["Ignoring scalability", "Single point of failure designs", "Not considering latency"],
    frameworks: ["High-Level Design (HLD) Roadmap", "Bottleneck Analysis", "Data Flow diagrams"],
  },
  5: {
    mistakes: ["Blaming teammates", "Taking all the credit", "Lack of growth mindset"],
    frameworks: ["STAR: Situation, Task, Action, Result", "Conflict Resolution: Listen, Validate, Solve"],
  },
  6: {
    mistakes: ["Losing energy throughout the day", "Inconsistent answers across interviewers", "Not taking notes"],
    frameworks: ["Pacing: Managing energy and time", "Consistency Check: Aligning your stories"],
  },
  7: {
    mistakes: ["Accepting the first offer immediately", "Negotiating without data", "Showing all your cards"],
    frameworks: ["Batna: Best Alternative To a Negotiated Agreement", "The Pivot: Moving from salary to total comp"],
  },
};

export default function Page() {
  const [activeStep, setActiveStep] = useState(1);

  const currentStepData = STEPS.find((s) => s.id === activeStep);
  const content = CONTENT_DATA[activeStep] || CONTENT_DATA[1];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />
      <div className="border-b border-border bg-[#f1f3fa]/50">
        <div className="mx-auto flex w-full max-w-[1400px] items-center gap-1 overflow-x-auto px-6 py-3 scrollbar-hidden">
          {STEPS.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex shrink-0 items-center gap-1.5 text-[13px] font-medium transition-none ${
                activeStep === step.id
                  ? "rounded-full bg-[#6b66f1] px-4 py-1.5 font-semibold text-white shadow-sm"
                  : "text-[#8a91a8] hover:text-[#4a4f63] px-3 py-1.5"
              }`}
            >
              <span className={activeStep === step.id ? "opacity-70" : "opacity-40"}>
                {step.id}.
              </span>{" "}
              {step.name}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-3xl px-4 py-10 md:px-6">
          <div className="mb-3 text-[11px] uppercase tracking-widest text-[#7b66f1] font-bold">InterviewGod</div>
          <div className="flex items-start justify-between gap-4">
            <h1 className="flex items-center gap-3 font-display text-4xl font-semibold tracking-tight text-foreground">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card text-muted-foreground shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-4 w-4"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
              {currentStepData?.name}
            </h1>
            <div className="flex shrink-0 items-center gap-2">
              <button
                onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                disabled={activeStep === 1}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/50 disabled:opacity-30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-left h-3.5 w-3.5"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>{" "}
                Prev
              </button>
              <button
                onClick={() => setActiveStep(Math.min(STEPS.length, activeStep + 1))}
                disabled={activeStep === STEPS.length}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#1c1f2e] px-4 py-2 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-30"
              >
                Next{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-3.5 w-3.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="info-box mt-6">
            {currentStepData?.name} is a structured conversation, not a quiz. Treat it as a chance to
            show how you think, not just what you know. Strong candidates make the interviewer want
            to keep working with them after the answer ends.
          </div>
          <section className="mt-10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md border border-border bg-card text-muted-foreground shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-triangle-alert h-3.5 w-3.5"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </span>
              <h2 className="font-display text-xl font-semibold text-warn">Common mistakes</h2>
            </div>
            <div className="space-y-2">
              {content.mistakes.map((mistake, idx) => (
                <details
                  key={`${activeStep}-mistake-${idx}`}
                  open={activeStep === 1 && idx === 0}
                  className="group rounded-xl border border-border bg-card accent-bar-warn overflow-hidden shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-warn"></span>
                      <span className="text-foreground">{mistake}</span>
                    </span>
                    <svg
                      className="h-3.5 w-3.5 text-muted-foreground group-open:rotate-180"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M3 4.5l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>
                  <div className="border-t border-border/60 bg-muted/10 px-4 py-3 text-[13px] leading-relaxed text-muted-foreground">
                    Catch yourself early. Pause, reframe the situation in your own words, and confirm
                    the expectations before diving in.
                  </div>
                </details>
              ))}
            </div>
          </section>
          <section className="mt-10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md border border-border bg-card text-muted-foreground shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lightbulb h-3.5 w-3.5"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </span>
              <h2 className="font-display text-xl font-semibold text-success">Answer frameworks</h2>
            </div>
            <div className="space-y-2">
              {content.frameworks.map((framework, idx) => (
                <details
                  key={`${activeStep}-framework-${idx}`}
                  open={false}
                  className="group rounded-xl border border-border bg-card accent-bar-success overflow-hidden shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-success"></span>
                      <span className="text-foreground">{framework}</span>
                    </span>
                    <svg
                      className="h-3.5 w-3.5 text-muted-foreground group-open:rotate-180"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M3 4.5l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>
                  <div className="border-t border-border/60 bg-muted/10 px-4 py-3 text-[13px] leading-relaxed text-muted-foreground">
                    Use the framework as scaffolding — not a script. Your job is to make the
                    interviewer&apos;s job easier.
                  </div>
                </details>
              ))}
            </div>
          </section>
          <section className="mt-10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md border border-border bg-card text-muted-foreground shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mic h-3.5 w-3.5"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
              </span>
              <h2 className="font-display text-xl font-semibold text-foreground">AI mock interview</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Practice a live round with realistic follow-ups based on the stage you selected.
            </p>
            <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mic h-3.5 w-3.5"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>{" "}
              Start mock interview
            </button>
          </section>
        </div>
      </main>

      <footer className="mt-12 border-t border-border bg-background">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-4 text-xs text-muted-foreground md:px-6">
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
              B
            </span>
            <span>B2B Sales OS — built for sellers who close</span>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <span>↻ navigate steps</span>
            <span>Changelog</span>
            <span>Methodology</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
