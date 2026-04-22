"use client";

import { useMemo, useState } from "react";
import { Lightbulb, Microscope, Search, ShieldAlert } from "lucide-react";
import {
  bestPractices,
  guardrails,
  layers,
  mockSteps,
} from "@/components/playbook/data";
import { ContentSection } from "@/components/playbook/content-section";
import { getStepIcon } from "@/components/playbook/icons";
import { LayerCard } from "@/components/playbook/layer-card";
import { MockStep } from "@/components/playbook/mock-step";
import { CircleNav, NavButton } from "@/components/playbook/nav-buttons";
import { StepItem } from "@/components/playbook/step-item";
import { TopBar } from "@/components/playbook/top-bar";

export default function Home() {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const [activeStepByLayer, setActiveStepByLayer] = useState<Record<string, number>>({
    "01": 0,
    "02": 0,
    "03": 0,
    "04": 0,
    "05": 0,
  });

  const activeLayer = layers[activeLayerIndex];
  const activeStepIndex = activeStepByLayer[activeLayer.id] ?? 0;
  const activeStepLabel = activeLayer.steps[activeStepIndex];
  const activeSteps = useMemo(
    () =>
      activeLayer.steps.map((label, index) => ({
        id: String(index + 1).padStart(2, "0"),
        label,
        icon: getStepIcon(label),
        active: index === activeStepIndex,
        completed: index < activeStepIndex,
      })),
    [activeLayer, activeStepIndex]
  );

  return (
    <main className="min-h-screen bg-white px-0 text-[#1f2333]">
      <div className="mx-auto max-w-[2010px] overflow-hidden bg-white">
        <TopBar />

        <section className="border-b border-[#ece9f6] bg-[radial-gradient(circle_at_top,#f3f0ff_0%,#ffffff_62%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-[1520px]">
            <div className="scrollbar-hidden flex gap-3 overflow-x-auto pb-2">
              {layers.map((layer, index) => (
                <LayerCard
                  key={layer.id}
                  {...layer}
                  active={index === activeLayerIndex}
                  onClick={() => setActiveLayerIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#ece9f6] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-[1441px] justify-center overflow-x-auto sm:flex">
            <div className="pt-6 sm:pt-10">
              <div className="scrollbar-hidden max-w-[1250px] overflow-x-auto pb-2">
                <div className="flex min-w-max gap-10">
                {activeSteps.map((step, index) => (
                  <StepItem
                    key={`${activeLayer.id}-${step.id}`}
                    {...step}
                    isFirst={index === 0}
                    isLast={index === activeSteps.length - 1}
                    onClick={() =>
                      setActiveStepByLayer((current) => ({
                        ...current,
                        [activeLayer.id]: index,
                      }))
                    }
                  />
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-[1520px]">
            <div className="flex flex-col gap-6 border-b border-[#ece9f6] pb-8 sm:pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7f72ff] sm:gap-3 sm:text-[12px] lg:text-[14px]">
                  <span>Momentum</span>
                  <span className="text-[#beb5d8]">
                    Step {String(activeStepIndex + 1).padStart(2, "0")} of{" "}
                    {String(activeLayer.steps.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#f5f1ec] sm:h-14 sm:w-14 sm:rounded-[16px]">
                    <Search className="h-5 w-5 text-[#1d2130] sm:h-7 sm:w-7" strokeWidth={2.1} />
                  </div>
                  <h1 className="text-[36px] font-semibold leading-none tracking-[-0.05em] text-[#151925] sm:text-[44px] lg:text-[56px]">
                    {activeStepLabel}
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start lg:self-auto">
                <NavButton
                  direction="prev"
                  disabled={activeStepIndex === 0}
                  onClick={() =>
                    setActiveStepByLayer((current) => ({
                      ...current,
                      [activeLayer.id]: Math.max((current[activeLayer.id] ?? 0) - 1, 0),
                    }))
                  }
                />
                <NavButton
                  direction="next"
                  disabled={activeStepIndex === activeLayer.steps.length - 1}
                  onClick={() =>
                    setActiveStepByLayer((current) => ({
                      ...current,
                      [activeLayer.id]: Math.min(
                        (current[activeLayer.id] ?? 0) + 1,
                        activeLayer.steps.length - 1
                      ),
                    }))
                  }
                />
              </div>
            </div>

            <div className="space-y-8 py-8 sm:space-y-10 sm:py-10 lg:space-y-12">
              <section className="rounded-[18px] border border-[#e3dbf6] bg-[#efebff] px-4 py-4 text-[13px] leading-[1.8] text-[#4a4f63] sm:rounded-[20px] sm:px-7 sm:py-6 sm:text-[15px] sm:leading-[1.95]">
                <p>
                  Discovery is where you move from surface-level conversation to
                  real business understanding. This is not about asking
                  questions for the sake of it. It&apos;s about diagnosing a
                  problem deeply enough that both you and the buyer clearly
                  understand what&apos;s broken, why it matters, and what happens
                  if nothing changes.
                </p>
                <p>
                  In strong enterprise deals, discovery is where momentum is
                  either created or permanently lost. If you stay shallow, the
                  deal becomes a feature comparison later. If you go deep, you
                  shape how the buyer thinks about the problem and that gives
                  you control over the deal.
                </p>
                <p>
                  Your job here is to uncover context, pain, impact, urgency,
                  and personal stakes, not just requirements.
                </p>
              </section>

              <ContentSection
                title="Guardrails"
                titleClassName="text-[#f27045]"
                icon={
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#fff4ec] text-[#f27045] sm:h-14 sm:w-14 sm:rounded-[18px]">
                    <ShieldAlert className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                }
                items={guardrails}
                accentClassName="bg-[#f27045]"
                markerType="dot"
                panelClassName="bg-white"
              />

              <ContentSection
                title="Best Practices"
                titleClassName="text-[#31b487]"
                icon={
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#ebfbf5] text-[#31b487] sm:h-14 sm:w-14 sm:rounded-[18px]">
                    <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                }
                items={bestPractices}
                accentClassName="bg-[#5bc69b]"
                markerType="check"
                panelClassName="bg-white"
              />

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#ece9f6] bg-[#fbfbfd] text-[#4c5268]">
                    <Microscope className="h-4 w-4" />
                  </div>
                  <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-[#1b2030] sm:text-[34px]">
                    AI mock test
                  </h2>
                </div>

                <div className="border-t border-[#ece9f6] pt-5 text-[14px] leading-7 text-[#5d6071] sm:pt-6 sm:text-[15px] sm:leading-8">
                  <p>
                    This section helps you apply discovery skills in a
                    simulated environment. Instead of just understanding
                    concepts, you actively practice real conversations where
                    the buyer responds dynamically. The goal is to improve how
                    you think, ask questions, and navigate ambiguity in real
                    time, not to deliver perfect answers.
                  </p>
                </div>

                <div className="space-y-4">
                  {mockSteps.map((step) => (
                    <MockStep key={step.title} {...step} />
                  ))}
                </div>
              </section>
            </div>

            <footer className="mt-2 border-t border-[#ece9f6] py-6 sm:py-8">
              <div className="flex flex-col gap-6 text-[#6f7488] sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <CircleNav
                    direction="left"
                    disabled={activeStepIndex === 0}
                    onClick={() =>
                      setActiveStepByLayer((current) => ({
                        ...current,
                        [activeLayer.id]: Math.max((current[activeLayer.id] ?? 0) - 1, 0),
                      }))
                    }
                  />
                  <div className="space-y-1">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c2bfd0]">
                      Previous
                    </div>
                    <div className="text-sm font-medium text-[#444a60]">
                      Step {String(Math.max(activeStepIndex, 1)).padStart(1, "0")}
                    </div>
                  </div>
                </div>

                <div className="text-left text-xs font-semibold uppercase tracking-[0.22em] text-[#b6b2c6] lg:text-center">
                  {activeLayer.title}
                </div>

                <div className="flex items-center gap-4 self-start lg:self-auto">
                  <div className="space-y-1 text-right">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c2bfd0]">
                      Next
                    </div>
                    <div className="text-sm font-medium text-[#444a60]">
                      Step{" "}
                      {String(
                        Math.min(activeStepIndex + 2, activeLayer.steps.length)
                      ).padStart(1, "0")}
                    </div>
                  </div>
                  <CircleNav
                    direction="right"
                    disabled={activeStepIndex === activeLayer.steps.length - 1}
                    onClick={() =>
                      setActiveStepByLayer((current) => ({
                        ...current,
                        [activeLayer.id]: Math.min(
                          (current[activeLayer.id] ?? 0) + 1,
                          activeLayer.steps.length - 1
                        ),
                      }))
                    }
                  />
                </div>
              </div>
            </footer>
          </div>
        </section>

        <div className="border-t border-[#ece9f6] px-4 py-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="mx-auto flex max-w-[1520px] flex-col gap-3 text-xs text-[#8d92a4] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#202433] text-[10px] font-semibold text-white">
                B
              </div>
              <span>Banao — built for sellers who close.</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <span>↔ navigate steps</span>
              <span>Changelog</span>
              <span>Methodology</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
