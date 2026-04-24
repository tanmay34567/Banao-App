"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Compass, Lightbulb, Microscope, Search, ShieldAlert } from "lucide-react";
import {
  bestPractices,
  constructionTracks,
  guardrails,
  layers,
  mockSteps,
  momentumDefinitions,
  momentumSteps,
} from "@/components/playbook/data";
import { ContentSection } from "@/components/playbook/content-section";
import { LayerCard } from "@/components/playbook/layer-card";
import { MockStep } from "@/components/playbook/mock-step";
import { CircleNav, NavButton } from "@/components/playbook/nav-buttons";
import { StepItem } from "@/components/playbook/step-item";
import { TopBar } from "@/components/playbook/top-bar";

type DefinitionBlock =
  | { type: "paragraph"; text: string }
  | { type: "label"; text: string }
  | { type: "list"; items: string[] };

const definitionLabelLines = new Set([
  "Contact means:",
  "If this fails:",
  "Not:",
  "You need:",
  "They are protecting:",
  "They are not asking:",
  "They are asking:",
  "Buyer must believe at least one of these:",
  "And seller must have:",
  "Interest means:",
  "Buyer is thinking:",
  "Buyer is evaluating:",
  "Buyer must believe:",
  "Seller must have:",
  "This is where the buyer moves from:",
  "to",
  "The question is not:",
  "It is:",
  "Must include:",
  "They are not testing features.",
  "They are testing:",
  "This stage is not:",
  "It is:",
  "This includes:",
  "Champion:",
  "Internal path is:",
  "Finance:",
  "Technical:",
  "Users:",
  "Executive:",
  "Your job:",
  "Must be true:",
  "Every stakeholder is asking different questions.",
  "Procurement is not paperwork.",
  "They are protecting:",
  "Even at close, buyer may still think:",
]);

function isBulletCandidate(line: string) {
  return (
    !line.endsWith(".") &&
    !line.endsWith("?") &&
    !line.endsWith("!") &&
    !line.endsWith(":") &&
    !line.includes("“") &&
    line.length < 80
  );
}

function buildDefinitionBlocks(lines: string[]): DefinitionBlock[] {
  const blocks: DefinitionBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (definitionLabelLines.has(line) || line.endsWith(":")) {
      blocks.push({ type: "label", text: line });
      index += 1;

      const items: string[] = [];
      while (index < lines.length) {
        const nextLine = lines[index];
        if (definitionLabelLines.has(nextLine) || nextLine.endsWith(":")) {
          break;
        }
        if (!isBulletCandidate(nextLine)) {
          break;
        }
        items.push(nextLine);
        index += 1;
      }

      if (items.length > 0) {
        blocks.push({ type: "list", items });
      }
      continue;
    }

    if (isBulletCandidate(line)) {
      const items: string[] = [];
      while (index < lines.length) {
        const nextLine = lines[index];
        if (
          definitionLabelLines.has(nextLine) ||
          nextLine.endsWith(":") ||
          !isBulletCandidate(nextLine)
        ) {
          break;
        }
        items.push(nextLine);
        index += 1;
      }

      if (items.length > 0) {
        blocks.push({ type: "list", items });
        continue;
      }
    }

    blocks.push({ type: "paragraph", text: line });
    index += 1;
  }

  return blocks;
}

export default function Home() {
  const [constructionEnabled, setConstructionEnabled] = useState(false);
  const [activeMomentumStepIndex, setActiveMomentumStepIndex] = useState(0);
  const [activeSubstepByMomentum, setActiveSubstepByMomentum] = useState<Record<number, number>>({
    0: 0,
  });
  const [activeConstructionTrackIndex, setActiveConstructionTrackIndex] = useState(1);
  const [activeOverlayByTrack, setActiveOverlayByTrack] = useState<Record<number, number>>({
    1: 0,
  });
  const topRailRef = useRef<HTMLDivElement | null>(null);
  const railViewportRef = useRef<HTMLDivElement | null>(null);
  const topStepsRowRef = useRef<HTMLDivElement | null>(null);
  const topStepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const subRailRef = useRef<HTMLDivElement | null>(null);
  const subStepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const momentumSubstepSectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [topLine, setTopLine] = useState({ left: 18, right: 18, linkLeft: 0 });
  const [subLine, setSubLine] = useState({ left: 18, right: 18 });
  const [subRowOffset, setSubRowOffset] = useState(0);
  const [connector, setConnector] = useState({ left: 0, top: 0, width: 0, height: 0 });

  const activeMomentumStep = momentumSteps[activeMomentumStepIndex];
  const activeMomentumSubstepIndex = activeSubstepByMomentum[activeMomentumStepIndex] ?? 0;
  const activeMomentumSubstep =
    activeMomentumStep.substeps[
      Math.min(activeMomentumSubstepIndex, activeMomentumStep.substeps.length - 1)
    ];
  const activeMomentumDefinition = momentumDefinitions[activeMomentumStepIndex];

  const handleMomentumSubstepSelect = (index: number) => {
    setActiveSubstepByMomentum((current) => ({
      ...current,
      [activeMomentumStepIndex]: index,
    }));

    const substep = activeMomentumStep.substeps[index];
    if (!substep) {
      return;
    }

    requestAnimationFrame(() => {
      momentumSubstepSectionRefs.current[substep.id]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const activeConstructionTrack = constructionTracks[activeConstructionTrackIndex];
  const activeConstructionOverlayIndex = activeOverlayByTrack[activeConstructionTrackIndex] ?? 0;
  const activeConstructionTitle =
    activeConstructionTrack.overlays[
      Math.min(
        activeConstructionOverlayIndex,
        activeConstructionTrack.overlays.length - 1
      )
    ];
  const visibleConstructionOverlays = useMemo(() => {
    const items: Array<{
      key: string;
      label: string;
      source: "prev" | "current" | "next";
      overlayIndex: number;
    }> = [];

    const previousTrack = constructionTracks[activeConstructionTrackIndex - 1];
    const nextTrack = constructionTracks[activeConstructionTrackIndex + 1];

    if (previousTrack && previousTrack.overlays.length > 0) {
      const prevIndex = previousTrack.overlays.length - 1;
      items.push({
        key: `${previousTrack.id}-prev-${prevIndex}`,
        label: previousTrack.overlays[prevIndex],
        source: "prev",
        overlayIndex: prevIndex,
      });
    }

    activeConstructionTrack.overlays.forEach((overlay, index) => {
      items.push({
        key: `${activeConstructionTrack.id}-current-${index}`,
        label: overlay,
        source: "current",
        overlayIndex: index,
      });
    });

    if (nextTrack && nextTrack.overlays.length > 0) {
      items.push({
        key: `${nextTrack.id}-next-0`,
        label: nextTrack.overlays[0],
        source: "next",
        overlayIndex: 0,
      });
    }

    return items;
  }, [activeConstructionTrack, activeConstructionTrackIndex]);

  const stepperItems = useMemo(() => {
    if (constructionEnabled) {
      return constructionTracks.map((track, index) => ({
        label: `${track.id}. ${track.label === "Pre-Contact" ? "Pre-Contact" : track.label}`,
        active: index === activeConstructionTrackIndex,
        onClick: () => {
          setActiveConstructionTrackIndex(index);

          if (index > 0) {
            setActiveMomentumStepIndex(index - 1);
          }
        },
      }));
    }

    return momentumSteps.map((step, index) => ({
      label: `${step.id}. ${step.label}`,
      active: index === activeMomentumStepIndex,
      onClick: () => {
        setActiveMomentumStepIndex(index);
        if (constructionEnabled) {
          setActiveConstructionTrackIndex(index + 1);
        }
      },
    }));
  }, [
    activeConstructionTrackIndex,
    activeMomentumStepIndex,
    constructionEnabled,
  ]);

  const currentPrimaryIndex =
    constructionEnabled
      ? activeConstructionOverlayIndex
      : activeMomentumStepIndex;
  const currentPrimaryLength =
    constructionEnabled
      ? activeConstructionTrack.overlays.length
      : momentumSteps.length;
  const canGoToPreviousConstructionOverlay =
    activeConstructionOverlayIndex > 0 || activeConstructionTrackIndex > 0;
  const canGoToNextConstructionOverlay =
    activeConstructionOverlayIndex < activeConstructionTrack.overlays.length - 1 ||
    activeConstructionTrackIndex < constructionTracks.length - 1;

  const handlePrev = () => {
    if (constructionEnabled) {
      if (activeConstructionOverlayIndex > 0) {
        setActiveOverlayByTrack((current) => ({
          ...current,
          [activeConstructionTrackIndex]: Math.max(
            (current[activeConstructionTrackIndex] ?? 0) - 1,
            0
          ),
        }));
        return;
      }

      if (activeConstructionTrackIndex > 0) {
        const previousTrackIndex = activeConstructionTrackIndex - 1;
        const previousTrack = constructionTracks[previousTrackIndex];

        setActiveConstructionTrackIndex(previousTrackIndex);
        if (previousTrackIndex > 0) {
          setActiveMomentumStepIndex(previousTrackIndex - 1);
        }
        setActiveOverlayByTrack((current) => ({
          ...current,
          [previousTrackIndex]: previousTrack.overlays.length - 1,
        }));
      }

      return;
    }

    setActiveMomentumStepIndex((current) => Math.max(current - 1, 0));
  };

  const handleNext = () => {
    if (constructionEnabled) {
      if (activeConstructionOverlayIndex < activeConstructionTrack.overlays.length - 1) {
        setActiveOverlayByTrack((current) => ({
          ...current,
          [activeConstructionTrackIndex]: Math.min(
            (current[activeConstructionTrackIndex] ?? 0) + 1,
            activeConstructionTrack.overlays.length - 1
          ),
        }));
        return;
      }

      if (activeConstructionTrackIndex < constructionTracks.length - 1) {
        const nextTrackIndex = activeConstructionTrackIndex + 1;

        setActiveConstructionTrackIndex(nextTrackIndex);
        if (nextTrackIndex > 0) {
          setActiveMomentumStepIndex(nextTrackIndex - 1);
        }
        setActiveOverlayByTrack((current) => ({
          ...current,
          [nextTrackIndex]: 0,
        }));
      }

      return;
    }

    setActiveMomentumStepIndex((current) =>
      Math.min(current + 1, momentumSteps.length - 1)
    );
  };

  useEffect(() => {
    const updateRailGeometry = () => {
      const topRail = topRailRef.current;
      const topStepsRow = topStepsRowRef.current;
      const topButtons = topStepRefs.current.filter(Boolean) as HTMLButtonElement[];

      if (topRail && topStepsRow && topButtons.length > 0) {
        const first = topButtons[0];
        const last = topButtons[topButtons.length - 1];
        const active = topButtons[
          constructionEnabled ? activeConstructionTrackIndex : activeMomentumStepIndex
        ];

        setTopLine({
          left: first.offsetLeft + 18,
          right: Math.max(
            18,
            topStepsRow.scrollWidth - (last.offsetLeft + last.offsetWidth - 18)
          ),
          linkLeft: active.offsetLeft + active.offsetWidth / 2,
        });
      }

      const subRail = subRailRef.current;
      const subButtons = subStepRefs.current.filter(Boolean) as HTMLButtonElement[];

      if (constructionEnabled && subRail) {
        const firstSub = subButtons[0];
        const lastSub = subButtons[subButtons.length - 1];
        const activeVisibleOverlayIndex = visibleConstructionOverlays.findIndex(
          (overlay) =>
            overlay.source === "current" &&
            overlay.overlayIndex === activeConstructionOverlayIndex
        );
        const activeSub = subButtons[activeVisibleOverlayIndex];
        const activeTop = topButtons[activeConstructionTrackIndex];
        let nextSubRowOffset = 0;

        if (activeSub && activeTop) {
          const activeTopCenter = activeTop.offsetLeft + activeTop.offsetWidth / 2;
          const activeSubCenter = activeSub.offsetLeft + activeSub.offsetWidth / 2;
          nextSubRowOffset = Math.max(activeTopCenter - activeSubCenter, 0);
          setSubRowOffset(nextSubRowOffset);
        } else {
          setSubRowOffset(0);
        }

        setSubLine({
          left: firstSub ? Math.max(firstSub.offsetLeft - 18, 18) : 18,
          right: firstSub && lastSub
            ? subRail.scrollWidth - (lastSub.offsetLeft + lastSub.offsetWidth - 18)
            : 18,
        });

        if (activeSub && activeTop) {
          const topCenter = activeTop.offsetLeft + activeTop.offsetWidth / 2;
          const subCenter =
            subRail.offsetLeft +
            nextSubRowOffset +
            activeSub.offsetLeft +
            activeSub.offsetWidth / 2;

          setConnector({
            left: Math.min(topCenter, subCenter),
            top: 38,
            width: Math.abs(subCenter - topCenter),
            height: 40,
          });
        }
      } else {
        setSubRowOffset(0);
        setConnector({ left: 0, top: 0, width: 0, height: 0 });
      }
    };

    updateRailGeometry();
    window.addEventListener("resize", updateRailGeometry);

    return () => window.removeEventListener("resize", updateRailGeometry);
  }, [
    activeConstructionTrackIndex,
    activeMomentumStepIndex,
    constructionEnabled,
    stepperItems.length,
    activeConstructionOverlayIndex,
    activeConstructionTrack.overlays.length,
    visibleConstructionOverlays,
  ]);

  useEffect(() => {
    const viewport = railViewportRef.current;
    const topStepsRow = topStepsRowRef.current;
    const activeTop = topStepRefs.current[
      constructionEnabled ? activeConstructionTrackIndex : activeMomentumStepIndex
    ];

    if (!viewport || !topStepsRow || !activeTop) {
      return;
    }

    const targetLeft =
      activeTop.offsetLeft - viewport.clientWidth / 2 + activeTop.offsetWidth / 2;
    const maxScrollLeft = Math.max(topStepsRow.scrollWidth - viewport.clientWidth, 0);

    const left = Math.min(Math.max(targetLeft, 0), maxScrollLeft);
    if (typeof viewport.scrollTo === "function") {
      viewport.scrollTo({
        left,
        behavior: "smooth",
      });
      return;
    }

    viewport.scrollLeft = left;
  }, [activeConstructionTrackIndex, activeMomentumStepIndex, constructionEnabled]);

  return (
    <main className="min-h-screen bg-white px-0 text-[#1f2333]">
      <div className="mx-auto max-w-[2010px] bg-white">
        <TopBar />

        <section className="border-b border-[#ece9f6] bg-[radial-gradient(circle_at_top,#f3f0ff_0%,#ffffff_62%)] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-[1520px]">
            <div className="scrollbar-hidden flex gap-4 overflow-x-auto pb-2">
              {layers.map((layer) => (
                <LayerCard
                  key={layer.id}
                  {...layer}
                  active={layer.id === "momentum" ? true : constructionEnabled}
                  onClick={() => {
                    if (layer.id === "momentum") {
                      return;
                    }

                    if (constructionEnabled) {
                      setConstructionEnabled(false);
                      return;
                    }

                    setConstructionEnabled(true);
                    setActiveConstructionTrackIndex(activeMomentumStepIndex + 1);
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#ece9f6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-[1520px]">
            <div
              ref={railViewportRef}
              className="scrollbar-hidden overflow-x-auto pb-3"
            >
              <div ref={topRailRef} className="relative inline-flex min-w-max flex-col pt-3 sm:pt-4">
                <div
                  className="absolute top-[24px] h-px bg-[#dfd8eb] sm:top-[30px]"
                  style={{
                    left: `${topLine.left}px`,
                    right: `${topLine.right}px`,
                  }}
                />
                <div ref={topStepsRowRef} className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
                  {stepperItems.map((step, index) => (
                    <StepItem
                      key={step.label}
                      ref={(node) => {
                        topStepRefs.current[index] = node;
                      }}
                      label={step.label}
                      active={step.active}
                      className="px-3 text-[13px] sm:px-3.5 sm:text-[14px]"
                      onClick={step.onClick}
                    />
                  ))}
                </div>
                {constructionEnabled ? (
                  <div
                    ref={subRailRef}
                    className="relative mt-5 inline-flex min-w-max flex-col sm:mt-7"
                    style={{ transform: `translateX(${subRowOffset}px)` }}
                  >
                    <div
                      className="absolute top-[15px] h-px bg-[#cfc7ff] sm:top-[19px]"
                      style={{
                        left: `${subLine.left}px`,
                        right: `${subLine.right}px`,
                      }}
                    />
                    <div className="flex items-center gap-3 sm:gap-4">
                      {visibleConstructionOverlays.map((overlay) => (
                        <StepItem
                          key={overlay.key}
                          ref={(node) => {
                            const itemIndex = visibleConstructionOverlays.findIndex(
                              (item) => item.key === overlay.key
                            );
                            subStepRefs.current[itemIndex] = node;
                          }}
                          label={`• ${overlay.label}`}
                          active={
                            overlay.source === "current" &&
                            overlay.overlayIndex === activeConstructionOverlayIndex
                          }
                          activeStyle="outline"
                          className="relative z-10 px-4"
                          onClick={() => {
                            if (overlay.source === "prev") {
                              const previousTrackIndex = Math.max(
                                activeConstructionTrackIndex - 1,
                                0
                              );
                              setActiveConstructionTrackIndex(previousTrackIndex);
                              setActiveMomentumStepIndex(
                                Math.max(previousTrackIndex - 1, 0)
                              );
                              setActiveOverlayByTrack((current) => ({
                                ...current,
                                [previousTrackIndex]: overlay.overlayIndex,
                              }));
                              return;
                            }

                            if (overlay.source === "next") {
                              const nextTrackIndex = Math.min(
                                activeConstructionTrackIndex + 1,
                                constructionTracks.length - 1
                              );
                              setActiveConstructionTrackIndex(nextTrackIndex);
                              if (nextTrackIndex > 0) {
                                setActiveMomentumStepIndex(nextTrackIndex - 1);
                              }
                              setActiveOverlayByTrack((current) => ({
                                ...current,
                                [nextTrackIndex]: overlay.overlayIndex,
                              }));
                              return;
                            }

                            setActiveOverlayByTrack((current) => ({
                              ...current,
                              [activeConstructionTrackIndex]: overlay.overlayIndex,
                            }));
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}
                {constructionEnabled ? (
                  <div
                    className="pointer-events-none absolute hidden sm:block"
                    style={{
                      left: `${connector.left}px`,
                      top: `${connector.top}px`,
                      width: `${connector.width}px`,
                      height: `${connector.height}px`,
                    }}
                  >
                    <div
                      className="absolute left-0 top-0 h-[24px] border-l-2 border-dashed border-[#8a7cff]"
                      style={{
                        left: `${topLine.linkLeft - connector.left}px`,
                      }}
                    />
                    <div
                      className="absolute top-[24px] border-t-2 border-dashed border-[#8a7cff]"
                      style={{
                        left: `${Math.min(topLine.linkLeft, connector.left + connector.width) - connector.left}px`,
                        width: `${connector.width}px`,
                      }}
                    />
                    <div
                      className="absolute top-[24px] h-[16px] border-l-2 border-dashed border-[#8a7cff]"
                      style={{ left: `${connector.width}px` }}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-[1520px]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
              {!constructionEnabled ? (
                <aside className="w-full shrink-0 lg:sticky lg:top-4 lg:w-[340px] lg:self-start">
                  <div className="rounded-[20px] border border-[#e7e0ed] bg-white p-4 shadow-[0_12px_28px_rgba(31,35,51,0.05)] sm:rounded-[24px] sm:p-6 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
                    <div className="flex items-start gap-4">
                      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[linear-gradient(180deg,#5f56f3_0%,#4f46e5_100%)] text-white shadow-[0_14px_32px_rgba(95,86,243,0.24)] sm:h-[44px] sm:w-[44px]">
                        <Compass className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px]" strokeWidth={2.2} />
                      </div>
                      <div className="space-y-1">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7b8092] sm:text-[12px] sm:tracking-[0.24em]">
                          Momentum Step
                        </div>
                        <h2 className="text-[16px] font-semibold text-[#171d2a] sm:text-[18px]">
                          {activeMomentumStep.label}
                        </h2>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-[#efebf5] pt-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#7b8092]">
                        Substeps
                      </div>

                      <div className="mt-4 space-y-3 sm:space-y-4">
                        {activeMomentumStep.substeps.map((substep, index) => {
                          const isActive = index === activeMomentumSubstepIndex;

                          return (
                            <div key={substep.id}>
                              <button
                                type="button"
                                onClick={() => handleMomentumSubstepSelect(index)}
                                className={[
                                  "flex w-full items-center justify-between rounded-[14px] px-3 py-2.5 text-left transition sm:rounded-[16px] sm:px-4 sm:py-3",
                                  isActive
                                    ? "border border-[#7a6cff] bg-white text-[#191f2e]"
                                    : "text-[#3f465a] hover:bg-[#f7f5fb]",
                                ].join(" ")}
                              >
                                <span className="text-[13px] font-semibold sm:text-[14px]">
                                  {substep.id} {substep.title}
                                </span>
                                <span
                                  className={[
                                    "text-lg leading-none",
                                    isActive ? "text-[#6f5cff]" : "text-[#afb5c6]",
                                  ].join(" ")}
                                >
                                  ›
                                </span>
                              </button>

                              <ul className="mt-2 space-y-1.5 pl-6 text-[12px] text-[#9aa0b2] sm:space-y-2 sm:pl-7 sm:text-[13px]">
                                {substep.bullets.map((bullet) => (
                                  <li key={bullet} className="list-disc">
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </aside>
              ) : null}

              <div className="min-w-0 flex-1 lg:pr-3">
                <div className="flex flex-col gap-5 border-b border-[#ece9f6] pb-8 sm:gap-6 sm:pb-10 lg:flex-row lg:items-end lg:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6f5cff] sm:gap-3 sm:text-[12px] sm:tracking-[0.22em]">
                      <span>{constructionEnabled ? "Construction" : "Momentum"}</span>
                      <span className="text-[#a9a1ba]">
                        / {String(currentPrimaryIndex + 1).padStart(2, "0")} of{" "}
                        {String(currentPrimaryLength).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#f5f1ec] sm:h-14 sm:w-14 sm:rounded-[18px]">
                        <Search className="h-5 w-5 text-[#1d2130] sm:h-7 sm:w-7" strokeWidth={2.1} />
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-[30px] font-semibold leading-none tracking-[-0.05em] text-[#151925] sm:text-[44px] lg:text-[60px]">
                          {constructionEnabled
                            ? activeConstructionTitle
                            : activeMomentumStep.label}
                        </h1>
                        <p className="text-[15px] text-[#676d81] sm:text-[18px]">
                          {constructionEnabled
                            ? activeConstructionTrack.label
                            : `${activeMomentumSubstep.id} ${activeMomentumSubstep.title}`}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start lg:self-auto">
                    <NavButton
                      direction="prev"
                      disabled={
                        constructionEnabled
                          ? !canGoToPreviousConstructionOverlay
                          : currentPrimaryIndex === 0
                      }
                      onClick={handlePrev}
                    />
                    <NavButton
                      direction="next"
                      disabled={
                        constructionEnabled
                          ? !canGoToNextConstructionOverlay
                          : currentPrimaryIndex === currentPrimaryLength - 1
                      }
                      onClick={handleNext}
                    />
                  </div>
                </div>

                <div className="space-y-8 py-8 sm:space-y-10 sm:py-10 lg:space-y-12">
                  <section className="rounded-[16px] border border-[#e3dbf6] bg-[#efebff] px-4 py-4 text-[13px] leading-[1.8] text-[#4a4f63] sm:rounded-[20px] sm:px-7 sm:py-6 sm:text-[15px] sm:leading-[1.95]">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-[#1a2130] sm:text-[22px]">
                          {activeMomentumDefinition.title}
                        </h2>
                      </div>

                      {activeMomentumDefinition.sections.map((section) => (
                        <div key={section.title} className="space-y-2.5">
                          <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#5d54d6] sm:text-[13px]">
                            {section.title}
                          </h3>
                          <div className="space-y-1.5">
                            {buildDefinitionBlocks(section.lines).map((block, index) => {
                              if (block.type === "paragraph") {
                                return (
                                  <p
                                    key={`${section.title}-${index}`}
                                    className="text-[#4a4f63]"
                                  >
                                    {block.text}
                                  </p>
                                );
                              }

                              if (block.type === "label") {
                                return (
                                  <p
                                    key={`${section.title}-${index}`}
                                    className="pt-1 font-semibold text-[#2d3345]"
                                  >
                                    {block.text}
                                  </p>
                                );
                              }

                              return (
                                <ul
                                  key={`${section.title}-${index}`}
                                  className="space-y-1.5 pl-5 text-[#4a4f63]"
                                >
                                  {block.items.map((item) => (
                                    <li key={item} className="list-disc">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-6 scroll-mt-24" id={`step-${activeMomentumStep.id}-substeps`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#ece9f6] bg-[#fbfbfd] text-[#4c5268]">
                        <Compass className="h-4 w-4" />
                      </div>
                      <div>
                        <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-[#1b2030] sm:text-[34px]">
                          {activeMomentumStep.label} substeps
                        </h2>
                        {/* <p className="mt-1 text-sm text-[#72788c] sm:text-[15px]">
                          Click any substep in the sidebar to jump directly to its section.
                        </p> */}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {activeMomentumStep.substeps.map((substep, index) => {
                        const isActive = index === activeMomentumSubstepIndex;
                        const isOpen = isActive;
                        const contentLines = substep.details?.length
                          ? substep.details
                          : substep.bullets;

                        return (
                          <section
                            key={substep.id}
                            id={`substep-${substep.id}`}
                            ref={(node) => {
                              momentumSubstepSectionRefs.current[substep.id] = node;
                            }}
                            className={[
                              "scroll-mt-28 rounded-[20px] border bg-white px-5 py-5 shadow-[0_10px_26px_rgba(31,35,51,0.04)] sm:px-6 sm:py-6",
                              isActive
                                ? "border-[#7a6cff] shadow-[0_14px_32px_rgba(111,92,255,0.12)]"
                                : "border-[#ece9f6]",
                            ].join(" ")}
                          >
                            <button
                              type="button"
                              onClick={() => handleMomentumSubstepSelect(index)}
                              className="flex w-full items-start justify-between gap-4 text-left"
                            >
                              <div>
                                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7b8092] sm:text-[12px]">
                                  Substep {substep.id}
                                </div>
                                <h3 className="mt-1 text-[20px] font-semibold tracking-[-0.03em] text-[#1a2130] sm:text-[24px]">
                                  {substep.title}
                                </h3>
                              </div>

                              <div className="flex items-center gap-3">
                                <span
                                  className={[
                                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition",
                                    isOpen
                                      ? "border-[#d8cffb] bg-[#f5f1ff] text-[#6f5cff]"
                                      : "border-[#ece9f6] bg-[#fbfbfd] text-[#8b90a2]",
                                  ].join(" ")}
                                  aria-hidden="true"
                                >
                                  <ChevronDown
                                    className={[
                                      "h-4 w-4 transition-transform",
                                      isOpen ? "rotate-180" : "",
                                    ].join(" ")}
                                  />
                                </span>
                              </div>
                            </button>

                            {isOpen ? (
                              <div className="mt-4 space-y-2.5 border-t border-[#f0ebfa] pt-4 text-[14px] leading-7 text-[#555b70] sm:text-[15px]">
                                {buildDefinitionBlocks(contentLines).map((block, blockIndex) => {
                                  if (block.type === "paragraph") {
                                    return (
                                      <p key={`${substep.id}-${blockIndex}`}>{block.text}</p>
                                    );
                                  }

                                  if (block.type === "label") {
                                    return (
                                      <p
                                        key={`${substep.id}-${blockIndex}`}
                                        className="pt-1 font-semibold text-[#2d3345]"
                                      >
                                        {block.text}
                                      </p>
                                    );
                                  }

                                  return (
                                    <ul
                                      key={`${substep.id}-${blockIndex}`}
                                      className="space-y-1.5 pl-5 text-[#555b70]"
                                    >
                                      {block.items.map((item) => (
                                        <li key={item} className="list-disc">
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  );
                                })}
                              </div>
                            ) : null}
                          </section>
                        );
                      })}
                    </div>
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
                        This section helps you apply discovery skills in a simulated
                        environment. Instead of just understanding concepts, you
                        actively practice real conversations where the buyer responds
                        dynamically. The goal is to improve how you think, ask
                        questions, and navigate ambiguity in real time.
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
                        disabled={
                          constructionEnabled
                            ? !canGoToPreviousConstructionOverlay
                            : currentPrimaryIndex === 0
                        }
                        onClick={handlePrev}
                      />
                      <div className="space-y-1">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c2bfd0]">
                          Previous
                        </div>
                        <div className="text-sm font-medium text-[#444a60]">
                          Step {Math.max(currentPrimaryIndex, 1)}
                        </div>
                      </div>
                    </div>

                    <div className="text-left text-xs font-semibold uppercase tracking-[0.22em] text-[#b6b2c6] lg:text-center">
                      {constructionEnabled
                        ? activeConstructionTrack.label
                        : activeMomentumStep.label}
                    </div>

                    <div className="flex items-center gap-4 self-start lg:self-auto">
                      <div className="space-y-1 text-right">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c2bfd0]">
                          Next
                        </div>
                        <div className="text-sm font-medium text-[#444a60]">
                          Step {Math.min(currentPrimaryIndex + 2, currentPrimaryLength)}
                        </div>
                      </div>
                      <CircleNav
                        direction="right"
                        disabled={
                          constructionEnabled
                            ? !canGoToNextConstructionOverlay
                            : currentPrimaryIndex === currentPrimaryLength - 1
                        }
                        onClick={handleNext}
                      />
                    </div>
                  </div>
                </footer>
              </div>
            </div>
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
