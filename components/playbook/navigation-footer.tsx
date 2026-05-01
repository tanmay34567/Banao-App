"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface Track {
  label: string;
}

interface Step {
  label: string;
}

interface NavigationFooterProps {
  handlePrev: () => void;
  handleNext: () => void;
  canGoToPreviousOverlay: boolean;
  canGoToNextOverlay: boolean;
  currentPrimaryIndex: number;
  constructionEnabled: boolean;
  signalEnabled: boolean;
  activeConstructionTrack: Track;
  activeSignalTrack: Track;
  activeMomentumStep: Step;
}

export function NavigationFooter({
  handlePrev,
  handleNext,
  canGoToPreviousOverlay,
  canGoToNextOverlay,
  currentPrimaryIndex,
  constructionEnabled,
  signalEnabled,
  activeConstructionTrack,
  activeSignalTrack,
  activeMomentumStep,
}: NavigationFooterProps) {
  const currentLabel = constructionEnabled
    ? activeConstructionTrack.label
    : signalEnabled
      ? activeSignalTrack.label
      : activeMomentumStep.label;

  return (
    <footer className="mt-8 border-t border-[#ece9f6] py-10">
      <div className="flex items-center justify-between">
        {/* Previous Navigation */}
        <button
          onClick={handlePrev}
          disabled={!canGoToPreviousOverlay}
          className="group flex items-center gap-4 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] shadow-sm transition-all group-hover:bg-[#F9FAFB] group-hover:border-[#D1D5DB]">
            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
          </div>
          <div className="space-y-0.5 text-left">
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#9CA3AF]">
              Previous
            </div>
            <div className="text-[14px] font-semibold text-[#1F2937]">
              {canGoToPreviousOverlay
                ? `Step ${currentPrimaryIndex}`
                : "None"}
            </div>
          </div>
        </button>

        {/* Centered Current Step Label */}
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">
          {currentLabel}
        </div>

        {/* Next Navigation */}
        <button
          onClick={handleNext}
          disabled={!canGoToNextOverlay}
          className="group flex items-center gap-4 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <div className="space-y-0.5 text-right">
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#9CA3AF]">
              Next
            </div>
            <div className="text-[14px] font-semibold text-[#1F2937]">
              {canGoToNextOverlay
                ? `Step ${currentPrimaryIndex + 2}`
                : "End"}
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F1729] text-white shadow-md transition-all group-hover:bg-[#1a253b] group-hover:shadow-lg">
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </button>
      </div>
    </footer>
  );
}
