"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Compass, 
  Lightbulb, 
  Microscope, 
  Search, 
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  Activity,
  Brain
} from "lucide-react";
import {
  bestPractices,
  constructionTracks,
  guardrails,
  layers,
  mockSteps,
  momentumDefinitions,
  momentumSteps,
  signalTracks,
  type ConstructionTrack,
  type SignalStatus,
  type SignalTrack,
} from "@/components/playbook/data";
import { ContentSection } from "@/components/playbook/content-section";
import { LayerCard } from "@/components/playbook/layer-card";
import { MockStep } from "@/components/playbook/mock-step";
// nav-buttons imported on demand
import { StepItem } from "@/components/playbook/step-item";
import { TopBar } from "@/components/playbook/top-bar";
import { SignalDetailView } from "@/components/playbook/signal-detail-view";
import { getSignalDetail } from "@/data/signal";
import { cn } from "@/lib/utils";
import { NavigationFooter } from "@/components/playbook/navigation-footer";


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

import { Suspense } from "react";

function HomeContent() {
  const [constructionEnabled, setConstructionEnabled] = useState(false);
  const [activeMomentumStepIndex, setActiveMomentumStepIndex] = useState(0);
  const [activeSubstepByMomentum, setActiveSubstepByMomentum] = useState<Record<number, number>>({
    0: 0,
  });
  const [activeConstructionTrackIndex, setActiveConstructionTrackIndex] = useState(1);
  const [activeOverlayByTrack, setActiveOverlayByTrack] = useState<Record<number, number>>({
    1: 0,
  });
  const [signalEnabled, setSignalEnabled] = useState(false);
  const [activeSignalTrackIndex, setActiveSignalTrackIndex] = useState(1);
  const [activeSignalOverlayByTrack, setActiveSignalOverlayByTrack] = useState<Record<number, number>>({
    1: 0,
  });
  const [psychologyEnabled, setPsychologyEnabled] = useState(false);
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
  const [connector, setConnector] = useState({ 
    left: 0, 
    top: 0, 
    width: 0, 
    height: 0,
    topCenter: 0,
    subCenter: 0
  });

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const highlight = searchParams.get("highlight");

  useEffect(() => {
    const layer = searchParams.get("layer");
    if (layer === "signal") {
      setSignalEnabled(true);
      setConstructionEnabled(false);
      setPsychologyEnabled(false);
    } else if (layer === "construction") {
      setConstructionEnabled(true);
      setSignalEnabled(false);
      setPsychologyEnabled(false);
    }

    const highlight = searchParams.get("highlight");

    const stage = searchParams.get("stage");
    if (stage) {
      const stageMap: Record<string, number> = {
        "pre-contact": -1,
        contact: 0,
        interest: 1,
        discovery: 2,
        validation: 3,
        internal: 4,
        stakeholder: 5,
        pilot: 6,
        budget: 7,
        procurement: 8,
        close: 9,
      };
      
      if (stageMap[stage] !== undefined) {
        const stageIdx = stageMap[stage];
        if (stage === "pre-contact") {
          setActiveConstructionTrackIndex(0);
          setConstructionEnabled(true);
          setSignalEnabled(false);
          setPsychologyEnabled(false);
        } else {
          setActiveMomentumStepIndex(stageIdx);
          // Also ensure construction/signal tracks match if they are enabled
          if (constructionEnabled) {
            setActiveConstructionTrackIndex(stageIdx + 1);
          }
          if (signalEnabled) {
            setActiveSignalTrackIndex(stageIdx + 1);
          }

          // Handle substep deep-linking
          const substepId = searchParams.get("substep");
          if (substepId) {
            const substepIdx = momentumSteps[stageIdx].substeps.findIndex(s => s.id === substepId);
            if (substepIdx !== -1) {
              setActiveSubstepByMomentum(prev => ({
                ...prev,
                [stageIdx]: substepIdx
              }));
            }
          }

          // Handle signal overlay deep-linking
          const overlayIdx = searchParams.get("overlay");
          if (overlayIdx !== null && layer === "signal") {
            const idx = parseInt(overlayIdx);
            setActiveSignalOverlayByTrack(prev => ({
              ...prev,
              [stageIdx + 1]: idx
            }));
          }
        }
      }
    }

    // Exact text scrolling logic
    if (highlight) {
      setTimeout(() => {
        const el = document.getElementById(encodeURIComponent(highlight));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (stage) {
          // Fallback to scrolling to the stage section if text not found yet
          window.scrollTo({ top: 400, behavior: "smooth" });
        }
      }, 600); // Wait for animations/renders
    }
    // Cleanup URL parameters after use
    const hasDeepLink = searchParams.get("stage") || searchParams.get("layer") || searchParams.get("highlight");
    if (hasDeepLink) {
      setTimeout(() => {
        router.replace(pathname, { scroll: false });
      }, 2000); // Wait 2s so the user sees the highlight, then clean up URL
    }
  }, [searchParams, constructionEnabled, signalEnabled, router, pathname]);

  const activeMomentumStep = momentumSteps[activeMomentumStepIndex];
  const activeMomentumSubstepIndex = activeSubstepByMomentum[activeMomentumStepIndex] ?? 0;
  const activeMomentumDefinition = momentumDefinitions[activeMomentumStepIndex];

  const activeMomentumDefinitionWithBlocks = useMemo(() => {
    return {
      ...activeMomentumDefinition,
      sections: activeMomentumDefinition.sections.map((section) => ({
        ...section,
        blocks: buildDefinitionBlocks(section.lines),
      })),
    };
  }, [activeMomentumDefinition]);

  const handleMomentumSubstepSelect = (index: number) => {
    setActiveSubstepByMomentum((current) => {
      const isAlreadyActive = current[activeMomentumStepIndex] === index;
      const nextIndex = isAlreadyActive ? -1 : index;

      if (nextIndex !== -1) {
        const substep = activeMomentumStep.substeps[index];
        if (substep) {
          requestAnimationFrame(() => {
            momentumSubstepSectionRefs.current[substep.id]?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          });
        }
      }

      return {
        ...current,
        [activeMomentumStepIndex]: nextIndex,
      };
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

  const activeSignalTrack = signalTracks[activeSignalTrackIndex];
  const activeSignalOverlayIndex = activeSignalOverlayByTrack[activeSignalTrackIndex] ?? 0;
  const activeSignalOverlay = activeSignalTrack.overlays[
    Math.min(
      activeSignalOverlayIndex,
      activeSignalTrack.overlays.length - 1
    )
  ];
  const activeSignalTitle = activeSignalOverlay.text;
  const activeSignalStatus = activeSignalOverlay.status;
  const activeSignalPriority = activeSignalOverlay.priority;


  const stepperItems = useMemo(() => {
    if (constructionEnabled || signalEnabled) {
      const tracks: (ConstructionTrack | SignalTrack)[] = constructionEnabled ? constructionTracks : signalTracks;
      const currentIndex = constructionEnabled ? activeConstructionTrackIndex : activeSignalTrackIndex;
      
      return tracks.map((track, index) => ({
        label: `${track.id}. ${track.label}`,
        active: index === currentIndex,
        onClick: () => {
          if (constructionEnabled) {
            setActiveConstructionTrackIndex(index);
          } else {
            setActiveSignalTrackIndex(index);
          }
          setActiveMomentumStepIndex(Math.max(0, index - 1));
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
    activeSignalTrackIndex,
    activeMomentumStepIndex,
    constructionEnabled,
    signalEnabled,
  ]);

  const currentPrimaryIndex =
    constructionEnabled
      ? activeConstructionOverlayIndex
      : signalEnabled
        ? activeSignalOverlayIndex
        : activeMomentumStepIndex;

  const currentPrimaryLength =
    constructionEnabled
      ? activeConstructionTrack.overlays.length
      : signalEnabled
        ? activeSignalTrack.overlays.length
        : momentumSteps.length;

  const canGoToPreviousOverlay = constructionEnabled
    ? activeConstructionOverlayIndex > 0 || activeConstructionTrackIndex > 0
    : signalEnabled
      ? activeSignalOverlayIndex > 0 || activeSignalTrackIndex > 0
      : currentPrimaryIndex > 0;

  const canGoToNextOverlay = constructionEnabled
    ? activeConstructionOverlayIndex < activeConstructionTrack.overlays.length - 1 || activeConstructionTrackIndex < constructionTracks.length - 1
    : signalEnabled
      ? activeSignalOverlayIndex < activeSignalTrack.overlays.length - 1 || activeSignalTrackIndex < signalTracks.length - 1
      : currentPrimaryIndex < currentPrimaryLength - 1;

  const handlePrev = () => {
    if (constructionEnabled || signalEnabled) {
      const tracks = constructionEnabled ? constructionTracks : signalTracks;
      const activeTrackIndex = constructionEnabled ? activeConstructionTrackIndex : activeSignalTrackIndex;
      const activeOverlayIndex = constructionEnabled ? activeConstructionOverlayIndex : activeSignalOverlayIndex;
      const setOverlayByTrack = constructionEnabled ? setActiveOverlayByTrack : setActiveSignalOverlayByTrack;
      const setTrackIndex = constructionEnabled ? setActiveConstructionTrackIndex : setActiveSignalTrackIndex;

      if (activeOverlayIndex > 0) {
        setOverlayByTrack((current) => ({
          ...current,
          [activeTrackIndex]: activeOverlayIndex - 1,
        }));
        return;
      }

      if (activeTrackIndex > 0) {
        const previousTrackIndex = activeTrackIndex - 1;
        const previousTrack = tracks[previousTrackIndex];

        setTrackIndex(previousTrackIndex);
        if (previousTrackIndex > 0) {
          setActiveMomentumStepIndex(previousTrackIndex - 1);
        }
        setOverlayByTrack((current) => ({
          ...current,
          [previousTrackIndex]: previousTrack.overlays.length - 1,
        }));
      }

      return;
    }

    setActiveMomentumStepIndex((current) => Math.max(current - 1, 0));
  };

  const handleNext = () => {
    if (constructionEnabled || signalEnabled) {
      const tracks = constructionEnabled ? constructionTracks : signalTracks;
      const activeTrackIndex = constructionEnabled ? activeConstructionTrackIndex : activeSignalTrackIndex;
      const activeOverlayIndex = constructionEnabled ? activeConstructionOverlayIndex : activeSignalOverlayIndex;
      const setOverlayByTrack = constructionEnabled ? setActiveOverlayByTrack : setActiveSignalOverlayByTrack;
      const setTrackIndex = constructionEnabled ? setActiveConstructionTrackIndex : setActiveSignalTrackIndex;

      if (activeOverlayIndex < tracks[activeTrackIndex].overlays.length - 1) {
        setOverlayByTrack((current) => ({
          ...current,
          [activeTrackIndex]: activeOverlayIndex + 1,
        }));
        return;
      }

      if (activeTrackIndex < tracks.length - 1) {
        const nextTrackIndex = activeTrackIndex + 1;

        setTrackIndex(nextTrackIndex);
        if (nextTrackIndex > 0) {
          setActiveMomentumStepIndex(nextTrackIndex - 1);
        }
        setOverlayByTrack((current) => ({
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
          constructionEnabled ? activeConstructionTrackIndex : 
          signalEnabled ? activeSignalTrackIndex :
          activeMomentumStepIndex
        ];

        if (active) {
          setTopLine({
            left: first.offsetLeft + 18,
            right: Math.max(
              18,
              topStepsRow.scrollWidth - (last.offsetLeft + last.offsetWidth - 18)
            ),
            linkLeft: active.offsetLeft + active.offsetWidth / 2,
          });
        }
      }

      const allSubButtons = subStepRefs.current.filter(Boolean) as HTMLButtonElement[];
      if ((constructionEnabled || signalEnabled) && allSubButtons.length > 0 && topButtons.length > 0) {
        const activeTrackIndex = constructionEnabled ? activeConstructionTrackIndex : activeSignalTrackIndex;
        const activeOverlayIndex = constructionEnabled ? activeConstructionOverlayIndex : activeSignalOverlayIndex;
        const tracks = constructionEnabled ? constructionTracks : signalTracks;
        
        const activeTop = topStepRefs.current[activeTrackIndex];
        
        // Find indices for the active group of sub-nodes
        let startIndex = 0;
        for (let i = 0; i < activeTrackIndex; i++) {
          startIndex += tracks[i].overlays.length;
        }
        const groupCount = tracks[activeTrackIndex].overlays.length;
        const endIndex = startIndex + groupCount - 1;

        const firstInGroup = allSubButtons[startIndex];
        const lastInGroup = allSubButtons[endIndex];
        const activeSub = allSubButtons[startIndex + activeOverlayIndex];

        if (activeTop && firstInGroup && lastInGroup && activeSub) {
          const topStart = activeTop.offsetLeft;
          const topCenter = topStart + activeTop.offsetWidth / 2;
          const subRelativeCenter = activeSub.offsetLeft + activeSub.offsetWidth / 2;

          let nextOffset = topCenter - subRelativeCenter;
          let subCenter = topCenter;

          if (activeTrackIndex === 0) {
            // First parent (Pre-Contact): point to the start of the sub-node to avoid left cut-off
            nextOffset = topCenter - activeSub.offsetLeft;
            subCenter = topCenter; // Since we align sub start to topCenter
          } else if (activeTrackIndex === tracks.length - 1) {
            // Last parent (Close): point to the end of the sub-node
            nextOffset = topCenter - (activeSub.offsetLeft + activeSub.offsetWidth);
            subCenter = topCenter;
          }

          setSubRowOffset(nextOffset);

          setConnector({
            left: topCenter,
            top: 38,
            width: 0,
            height: 40,
            topCenter,
            subCenter,
          });
        }

        // Sub line spans across all sub-nodes
        const firstSub = allSubButtons[0];
        if (firstSub) {
          setSubLine({
            left: firstSub.offsetLeft + 18,
            right: 18,
          });
        }
      } else {
        setSubRowOffset(0);
        setConnector({ left: 0, top: 0, width: 0, height: 0, topCenter: 0, subCenter: 0 });
      }
    };

    updateRailGeometry();
    
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateRailGeometry, 100);
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [
    activeConstructionTrackIndex,
    activeConstructionOverlayIndex,
    activeSignalTrackIndex,
    activeSignalOverlayIndex,
    activeMomentumStepIndex,
    constructionEnabled,
    signalEnabled,
  ]);

  useEffect(() => {
    const viewport = railViewportRef.current;
    const topStepsRow = topStepsRowRef.current;
    const activeTop = topStepRefs.current[
      constructionEnabled ? activeConstructionTrackIndex : 
      signalEnabled ? activeSignalTrackIndex :
      activeMomentumStepIndex
    ];

    if (!viewport || !topStepsRow || !activeTop) {
      return;
    }

    let targetLeft = activeTop.offsetLeft - viewport.clientWidth / 2 + activeTop.offsetWidth / 2;

    if (constructionEnabled || signalEnabled) {
      // With the new alignment logic, the active sub-node is directly under the parent.
      // Centering the parent will naturally center the sub-node as well.
      targetLeft = activeTop.offsetLeft - viewport.clientWidth / 2 + activeTop.offsetWidth / 2;
    }

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
  }, [
    activeConstructionTrackIndex, 
    activeConstructionOverlayIndex,
    activeSignalTrackIndex, 
    activeSignalOverlayIndex,
    activeMomentumStepIndex, 
    constructionEnabled, 
    signalEnabled,
    subRowOffset
  ]);

  return (
    <main className="min-h-screen bg-white px-0 text-[#1f2333]" style={{ overflowX: "clip" }}>
      <div className="mx-auto max-w-[1400px] bg-white">
        <TopBar />

        <section className="border-b border-[#ece9f6] bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:gap-5">
              {layers.map((layer) => (
                <LayerCard
                  key={layer.id}
                  {...layer}
                  active={
                    layer.id === "momentum"
                      ? true
                      : layer.id === "construction"
                        ? constructionEnabled
                        : layer.id === "signal"
                          ? signalEnabled
                          : psychologyEnabled
                  }
                  onToggle={() => {
                    if (layer.id === "momentum") return;

                    if (layer.id === "construction") {
                      const newState = !constructionEnabled;
                      setConstructionEnabled(newState);
                      setSignalEnabled(false);
                      setPsychologyEnabled(false);
                      if (newState) {
                        setActiveConstructionTrackIndex(activeMomentumStepIndex + 1);
                      }
                    } else if (layer.id === "signal") {
                      const newState = !signalEnabled;
                      setSignalEnabled(newState);
                      setConstructionEnabled(false);
                      setPsychologyEnabled(false);
                      if (newState) {
                        setActiveSignalTrackIndex(activeMomentumStepIndex + 1);
                      }
                    } else if (layer.id === "psychology") {
                      const newState = !psychologyEnabled;
                      setPsychologyEnabled(newState);
                      setConstructionEnabled(false);
                      setSignalEnabled(false);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#ece9f6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-[1400px]">
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
                  {stepperItems.map((step: { label: string; active: boolean; onClick: () => void }, index: number) => (
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
                {constructionEnabled || signalEnabled ? (
                  <div
                    ref={subRailRef}
                    className="relative mt-5 inline-flex min-w-max flex-col sm:mt-7"
                    style={{ 
                      transform: `translateX(${subRowOffset}px)`,
                      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}
                  >
                    <div
                      className="absolute top-[15px] h-px bg-[#cfc7ff] sm:top-[19px]"
                      style={{
                        left: `${subLine.left}px`,
                        right: `${subLine.right}px`,
                      }}
                    />
                    <div className="flex items-center gap-3 sm:gap-4">
                      {(constructionEnabled ? constructionTracks : signalTracks).flatMap((track: ConstructionTrack | SignalTrack, tIdx: number) => 
                        track.overlays.map((overlay: string | { text: string; status: SignalStatus }, oIdx: number) => {
                          const currentTracks: (ConstructionTrack | SignalTrack)[] = constructionEnabled ? constructionTracks : signalTracks;
                          let globalSubIndex = 0;
                          for (let i = 0; i < tIdx; i++) {
                            globalSubIndex += currentTracks[i].overlays.length;
                          }
                          globalSubIndex += oIdx;

                          const isActive = constructionEnabled 
                            ? (tIdx === activeConstructionTrackIndex && oIdx === activeConstructionOverlayIndex)
                            : (tIdx === activeSignalTrackIndex && oIdx === activeSignalOverlayIndex);
                          
                          const isHighlighted = isActive;

                          const label = typeof overlay === 'string' ? `• ${overlay}` : `• ${overlay.text}`;
                          const status = typeof overlay === 'string' ? undefined : overlay.status;

                          return (
                            <StepItem
                              key={`${track.id}-${oIdx}`}
                              ref={(node) => {
                                subStepRefs.current[globalSubIndex] = node;
                              }}
                              label={label}
                              active={isActive}
                              isHighlighted={isHighlighted}
                              status={status}
                              activeStyle="outline"
                              className="relative z-10 px-4"
                              onClick={() => {
                                if (constructionEnabled) {
                                  setActiveConstructionTrackIndex(tIdx);
                                  setActiveOverlayByTrack((current) => ({
                                    ...current,
                                    [tIdx]: oIdx,
                                  }));
                                } else {
                                  setActiveSignalTrackIndex(tIdx);
                                  setActiveSignalOverlayByTrack((current) => ({
                                    ...current,
                                    [tIdx]: oIdx,
                                  }));
                                }
                                setActiveMomentumStepIndex(Math.max(0, tIdx - 1));
                              }}
                            />
                          );
                        })
                      )}
                    </div>
                  </div>
                ) : null}
                {constructionEnabled || signalEnabled ? (
                  <div
                    className="pointer-events-none absolute hidden sm:block"
                    style={{
                      left: `${connector.left}px`,
                      top: `${connector.top}px`,
                      width: `${Math.max(connector.width, 2)}px`,
                      height: `${connector.height}px`,
                    }}
                  >
                    {/* Top vertical line */}
                    <div
                      className="absolute left-0 top-0 h-[24px] border-l-2 border-dashed border-[#8a7cff]"
                      style={{
                        left: `${connector.topCenter - connector.left}px`,
                      }}
                    />
                    {/* Horizontal line */}
                    <div
                      className="absolute top-[24px] h-px border-t-2 border-dashed border-[#8a7cff]"
                      style={{
                        left: `0px`,
                        width: `${connector.width}px`,
                      }}
                    />
                    {/* Bottom vertical line */}
                    <div
                      className="absolute top-[24px] h-[16px] border-l-2 border-dashed border-[#8a7cff]"
                      style={{ 
                        left: `${connector.subCenter - connector.left}px` 
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
              {!constructionEnabled && !signalEnabled ? (
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

              <div className={cn("min-w-0 flex-1 lg:pr-3", !signalEnabled && "flex flex-col items-start gap-10 max-w-[1233px] w-full")}>
                {!signalEnabled && (
                  <div className="flex w-full items-end justify-between gap-6 pb-8 border-b border-[#ece9f6]">
                    <div className="flex min-w-0 flex-1 flex-col items-start gap-3">
                      <div className="flex flex-wrap items-center gap-2 text-[12px] font-normal uppercase tracking-[0.6px] font-mono">
                        <span className="text-[#6E52E0]">{constructionEnabled ? "CONSTRUCTION" : "MOMENTUM"}</span>
                        <span className="text-[#E5E0DC] font-sans">/</span>
                        <span className="text-[#606876]">
                          {String(currentPrimaryIndex + 1).padStart(2, "0")} of{" "}
                          {String(currentPrimaryLength).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2F0ED]">
                          <Search className="h-5 w-5 text-[#131720]" strokeWidth={1.67} />
                        </div>
                        <div className="space-y-1">
                          <h1
                            className="min-w-0 text-[48px] font-semibold leading-none text-[#131720]"
                            style={{ letterSpacing: "-1.44px" }}
                          >
                            {constructionEnabled
                              ? activeConstructionTitle
                              : activeMomentumStep.label}
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        onClick={handlePrev}
                        disabled={!canGoToPreviousOverlay}
                        className="inline-flex h-9 items-center gap-1.5 rounded-[10px] border border-[#E5E0DC] bg-white px-3 text-sm font-medium text-[#131720] transition hover:bg-[#F9F9F9] disabled:opacity-40"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Prev
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={!canGoToNextOverlay}
                        className="inline-flex h-9 items-center gap-1.5 rounded-[10px] bg-[#131720] px-3 text-sm font-medium text-white transition hover:bg-[#1a253b] disabled:opacity-40"
                      >
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                  {signalEnabled ? (
                    <SignalDetailView 
                      signal={getSignalDetail(
                        activeSignalTitle,
                        activeSignalTrack.label,
                        activeSignalOverlayIndex + 1,
                        activeSignalTrack.overlays.length,
                        activeSignalStatus,
                        activeSignalPriority
                      )} 
                      currentIndex={activeSignalOverlayIndex + 1}
                      totalCount={activeSignalTrack.overlays.length}
                      onPrev={handlePrev}
                      onNext={handleNext}
                      canPrev={canGoToPreviousOverlay}
                      canNext={canGoToNextOverlay}
                      priority={activeSignalPriority}
                      status={activeSignalStatus}
                      stepLabel={activeSignalTrack.label}
                      highlight={highlight || undefined}
                    />
                  ) : (
                    <section className="w-full rounded-[12px] border border-[#E5E0DC] bg-[#F0EDFD] p-5 sm:p-7">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#6E52E0] bg-[#F0EDFD] px-3 py-1 text-[13px] font-medium text-[#6E52E0]">
                        <Activity className="h-4 w-4" />
                        Definition
                      </div>
                      <div className="space-y-6">
                        {activeMomentumDefinitionWithBlocks.sections.map((section) => (
                          <div key={section.title} className="space-y-2.5">
                            <h3 className="text-[14px] font-semibold text-[#131720]">
                              {section.title}
                            </h3>
                            <div className="space-y-1.5">
                              {section.blocks.map((block, index) => {
                                if (block.type === "paragraph") {
                                  return (
                                    <p
                                      key={`${section.title}-${index}`}
                                      className="text-[16px] leading-[29px] text-[rgba(19,23,32,0.85)]"
                                    >
                                      {block.text}
                                    </p>
                                  );
                                }

                                if (block.type === "label") {
                                  return (
                                    <p
                                      key={`${section.title}-${index}`}
                                      className="pt-1 font-semibold text-[#131720]"
                                    >
                                      {block.text}
                                    </p>
                                  );
                                }

                                return (
                                  <ul
                                    key={`${section.title}-${index}`}
                                    className="space-y-1.5 pl-5 text-[16px] leading-[29px] text-[rgba(19,23,32,0.85)]"
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
                  )}

                  {!signalEnabled && (
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
                                    const isHighlighted = block.type !== "list" && block.text === highlight;
                                    if (block.type === "paragraph") {
                                      return (
                                        <p 
                                          key={`${substep.id}-${blockIndex}`}
                                          id={encodeURIComponent(block.text)}
                                          className={cn(
                                            "transition-all duration-700 rounded px-1",
                                            isHighlighted ? "bg-[#f5f1ff] text-[#6f5cff] font-medium shadow-[0_0_0_4px_#f5f1ff]" : ""
                                          )}
                                        >
                                          {block.text}
                                        </p>
                                      );
                                    }

                                    if (block.type === "label") {
                                      return (
                                        <p
                                          key={`${substep.id}-${blockIndex}`}
                                          id={encodeURIComponent(block.text)}
                                          className={cn(
                                            "pt-1 font-semibold text-[#2d3345] transition-all duration-700 rounded px-1",
                                            isHighlighted ? "bg-[#f5f1ff] text-[#6f5cff] shadow-[0_0_0_4px_#f5f1ff]" : ""
                                          )}
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
                                        {block.items.map((item) => {
                                          const itemHighlighted = item === highlight;
                                          return (
                                            <li 
                                              key={item} 
                                              id={encodeURIComponent(item)}
                                              className={cn(
                                                "list-disc transition-all duration-700 rounded px-1",
                                                itemHighlighted ? "bg-[#f5f1ff] text-[#6f5cff] font-medium shadow-[0_0_0_4px_#f5f1ff]" : ""
                                              )}
                                            >
                                              {item}
                                            </li>
                                          );
                                        })}
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
                  )}

                  {psychologyEnabled && !signalEnabled && (
                    <section className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7B61FF]/10">
                          <Brain className="h-6 w-6 text-[#7B61FF]" />
                        </div>
                        <h2 className="text-[28px] font-semibold text-[#7B61FF]">
                          Buyer Psychology
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {/* What Buyer Is Thinking */}
                        <div className="rounded-xl border border-[#E5E0DC] bg-[#F3F0FF] p-5">
                          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#7B61FF]">
                            What Buyer Is Thinking
                          </div>
                          <p className="text-[14px] font-medium italic text-[#131720]">
                            &ldquo;Is this person actually going to help me, or just sell to me?&rdquo;
                          </p>
                        </div>

                        {/* What Buyer Is Feeling */}
                        <div className="rounded-xl border border-[#E5E0DC] bg-[#E8F7F1] p-5">
                          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#279B70]">
                            What Buyer Is Feeling
                          </div>
                          <p className="text-[14px] text-[#606876]">
                            Cautious optimism — open to a real conversation, allergic to a pitch.
                          </p>
                        </div>

                        {/* What Buyer Is Avoiding */}
                        <div className="rounded-xl border border-[#E5E0DC] bg-[#FFF5F5] p-5">
                          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#E05429]">
                            What Buyer Is Avoiding
                          </div>
                          <p className="text-[14px] text-[#606876]">
                            Wasting cycles on a vendor who can&rsquo;t articulate their problem back.
                          </p>
                        </div>
                      </div>
                    </section>
                  )}

                  {!signalEnabled && (
                    <>
                      <ContentSection
                        title="Guardrails"
                        titleClassName="text-[#E05429]"
                        icon={
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FEF4E7]">
                            <ShieldAlert className="h-6 w-6 text-[#E05429]" />
                          </div>
                        }
                        items={guardrails}
                        accentClassName="bg-[#E05429]"
                        leftBorderClassName="bg-[rgba(224,84,41,0.4)]"
                        markerType="dot"
                        panelClassName="bg-white border-[#E5E0DC]"
                      />

                      <ContentSection
                        title="Best Practices"
                        titleClassName="text-[#279B70]"
                        icon={
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F7F1]">
                            <Lightbulb className="h-6 w-6 text-[#009966]" />
                          </div>
                        }
                        items={bestPractices}
                        accentClassName="bg-[#279B70]"
                        leftBorderClassName="bg-[#93CDB7]"
                        markerType="dot"
                        panelClassName="bg-white border-[#E5E0DC]"
                      />
                    </>
                  )}

                  {!signalEnabled && (
                    <section className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2F0ED]">
                          <Microscope className="h-6 w-6 text-[#131720]" />
                        </div>
                        <h2 className="text-[28px] font-semibold text-[#131720]">
                          AI mock test
                        </h2>
                      </div>

                      <div className="text-[18px] font-normal leading-[29px] text-[rgba(19,23,32,0.85)]">
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
                  )}
                </div>
              </div>
            </div>

            <NavigationFooter
              handlePrev={handlePrev}
              handleNext={handleNext}
              canGoToPreviousOverlay={canGoToPreviousOverlay}
              canGoToNextOverlay={canGoToNextOverlay}
              currentPrimaryIndex={currentPrimaryIndex}
              constructionEnabled={constructionEnabled}
              signalEnabled={signalEnabled}
              activeConstructionTrack={activeConstructionTrack}
              activeSignalTrack={activeSignalTrack}
              activeMomentumStep={activeMomentumStep}
            />
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

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
