"use client";

import { useState } from "react";
import { TopBar } from "@/components/playbook/top-bar";

export default function Page() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([
    "foundations-1",
    "foundations-2",
  ]);

  const tasks = [
    {
      id: "foundations",
      title: "Foundations",
      items: [
        { id: "foundations-1", title: "Map the buyer journey end-to-end" },
        { id: "foundations-2", title: "Learn the 10 deal stages" },
        { id: "foundations-3", title: "Understand the Signals system" },
      ],
    },
    {
      id: "skills",
      title: "Deal skills",
      items: [
        { id: "skills-1", title: "Run a layered discovery on a real buyer" },
        { id: "skills-2", title: "Build a stakeholder power map" },
        { id: "skills-3", title: "Quantify ROI for one open deal" },
      ],
    },
    {
      id: "deals",
      title: "Live deals",
      items: [
        { id: "deals-1", title: "Diagnose where your deal is stuck" },
        { id: "deals-2", title: "Co-author a mutual close plan with your champion" },
        { id: "deals-3", title: "Submit a deal for peer review" },
      ],
    },
  ];

  const toggleTask = (id: string) => {
    setCompletedTasks((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const totalTasks = tasks.reduce((acc, section) => acc + section.items.length, 0);
  const completedCount = completedTasks.length;
  const progressPercentage = Math.round((completedCount / totalTasks) * 100);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-3xl px-4 py-10 md:px-6">
          <div className="mb-2 text-[11px] uppercase tracking-widest text-info">
            Sales onboarding
          </div>
          <h1 className="font-display text-3xl font-semibold">Welcome to Banao</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            A short ramp to make you dangerous on real B2B deals — buyers, stakeholders, ROI, and
            close plans.
          </p>

          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">Your progress</div>
                <div className="font-display text-2xl font-semibold">
                  {completedCount}{" "}
                  <span className="text-muted-foreground">/ {totalTasks}</span>
                </div>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-info-soft text-info">
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
                  className="lucide lucide-trophy h-4 w-4"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </span>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-info transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">{progressPercentage}% complete</div>
          </div>

          <div className="mt-8 space-y-6">
            {tasks.map((section) => (
              <section key={section.id}>
                <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {section.title}
                </div>
                <div className="space-y-2">
                  {section.items.map((item) => {
                    const isCompleted = completedTasks.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleTask(item.id)}
                        className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                          isCompleted
                            ? "border-success/30 bg-success-soft"
                            : "border-border bg-card hover:bg-muted/40"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {isCompleted ? (
                            <span className="grid h-5 w-5 place-items-center rounded-full bg-success text-white">
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
                                className="lucide lucide-check h-3 w-3"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                          ) : (
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
                              className="lucide lucide-circle h-5 w-5 text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                          )}
                          <span
                            className={`text-sm ${
                              isCompleted ? "line-through opacity-70" : ""
                            }`}
                          >
                            {item.title}
                          </span>
                        </span>
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
                          className="lucide lucide-sparkles h-3.5 w-3.5 text-muted-foreground"
                        >
                          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                          <path d="M20 3v4" />
                          <path d="M22 5h-4" />
                          <path d="M4 17v2" />
                          <path d="M5 18H3" />
                        </svg>
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
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

