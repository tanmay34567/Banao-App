"use client";

import { Target, Sparkles, X, TriangleAlert, ListChecks, ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface AnalyzeDealModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (stage: string) => void;
}

export function AnalyzeDealModal({ isOpen, onClose, onSuccess }: AnalyzeDealModalProps) {
  const [problemText, setProblemText] = useState("");
  const [dealStage, setDealStage] = useState("contact");
  const [isDiagnosed, setIsDiagnosed] = useState(false);
  const [stageDropdownOpen, setStageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setStageDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleReset = () => {
    setProblemText("");
    setDealStage("contact");
    setIsDiagnosed(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(handleReset, 300);
  };

  if (!isOpen) return null;

  const STAGES = [
    { id: "contact", name: "1. Contact" },
    { id: "interest", name: "2. Interest" },
    { id: "discovery", name: "3. Discovery" },
    { id: "validation", name: "4. Validation" },
    { id: "internal", name: "5. Internal Discussion" },
    { id: "stakeholder", name: "6. Stakeholder Expansion" },
    { id: "pilot", name: "7. Pilot" },
    { id: "budget", name: "8. Budget Discussion" },
    { id: "procurement", name: "9. Procurement" },
    { id: "close", name: "10. Close" },
  ];

  const stageDisplayMap: Record<string, string> = Object.fromEntries(
    STAGES.map((s) => [s.id, s.name])
  );

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/80 transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />
      
      <div
        role="dialog"
        aria-modal="true"
        className="fixed left-[50%] top-[50%] z-[70] flex w-[95%] max-w-lg translate-x-[-50%] translate-y-[-50%] flex-col gap-4 overflow-visible border border-border bg-background p-6 shadow-2xl sm:w-full sm:rounded-2xl"
      >
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#7b66f1]">
            <Target className="h-3.5 w-3.5" /> 
            Mimic deal
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Analyze my deal</h2>
        </div>

        {!isDiagnosed ? (
          <div className="space-y-5">
            <div className="relative z-[80]" ref={dropdownRef}>
              <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Deal stage
              </label>
              <button
                type="button"
                onClick={() => setStageDropdownOpen(!stageDropdownOpen)}
                className="flex w-full items-center justify-between rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-none hover:bg-muted/30"
              >
                <span>{stageDisplayMap[dealStage]}</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${stageDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {stageDropdownOpen && (
                <div className="absolute top-[calc(100%+4px)] left-0 z-[90] w-full max-h-[200px] overflow-y-auto rounded-xl border border-border bg-white py-1.5 shadow-2xl">
                  {STAGES.map((stage) => (
                    <button
                      key={stage.id}
                      onClick={() => {
                        setDealStage(stage.id);
                        setStageDropdownOpen(false);
                      }}
                      className={`flex w-full items-center px-4 py-2 text-sm transition-none ${
                        dealStage === stage.id 
                          ? "bg-[#7b66f1] font-semibold text-white" 
                          : "text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {stage.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative z-0">
              <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Problem / situation
              </label>
              <textarea
                rows={4}
                value={problemText}
                onChange={(e) => setProblemText(e.target.value)}
                placeholder="e.g. Champion is engaged but the economic buyer hasn't seen the business case yet."
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#7b66f1]/20 resize-none shadow-sm transition-none"
              />
            </div>

            <button 
              disabled={!problemText.trim()}
              onClick={() => {
                setIsDiagnosed(true);
                onSuccess?.(dealStage);
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#202433] px-4 py-3 text-sm font-bold text-white shadow-lg transition-none hover:opacity-90 disabled:opacity-30"
            >
              <Sparkles className="h-4 w-4" />
              Diagnose deal
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Identified stage</div>
              <div className="mt-1 text-lg font-bold text-foreground">{stageDisplayMap[dealStage]}</div>
            </div>

            <div className="rounded-2xl bg-warn/10 p-5 border border-warn/20">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-warn">
                <TriangleAlert className="h-3.5 w-3.5" /> 
                Where the deal is stuck
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground font-medium">
                Weak internal buy-in. You likely have a champion but no committed second stakeholder, and the economic buyer hasn&apos;t seen a quantified business case yet.
              </p>
            </div>

            <div className="rounded-2xl bg-success/10 p-5 border border-success/20">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-success">
                <ListChecks className="h-3.5 w-3.5" /> 
                Suggested playbook steps
              </div>
              <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-foreground font-medium">
                <li>Send a 1-page diagnostic recap to your champion.</li>
                <li>Request a working session with the economic buyer.</li>
                <li>Co-author success criteria — don&apos;t propose them unilaterally.</li>
              </ol>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Link 
                href={`/?stage=${dealStage}`}
                onClick={handleClose}
                className="inline-flex items-center gap-2 rounded-full bg-[#202433] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:opacity-90 transition-none"
              >
                Open Playbook
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <button 
                onClick={handleReset}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-xs font-bold text-foreground hover:bg-muted/50 transition-none shadow-sm"
              >
                Analyze another
              </button>
            </div>
          </div>
        )}

        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  );
}
