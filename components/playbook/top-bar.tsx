"use client";

import { BookOpen, ChevronDown, Search, Sparkles, Compass, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnalyzeDealModal } from "./analyze-deal-modal";
import { momentumSteps, constructionTracks, signalTracks } from "@/components/playbook/data";

export function TopBar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [privilegeOpen, setPrivilegeOpen] = useState(false);
  const [selectedPrivilege, setSelectedPrivilege] = useState("Enterprise");
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const privilegeRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (privilegeRef.current && !privilegeRef.current.contains(event.target as Node)) {
        setPrivilegeOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getStageKey = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("contact")) return "contact";
    if (l.includes("interest")) return "interest";
    if (l.includes("discovery")) return "discovery";
    if (l.includes("validation")) return "validation";
    if (l.includes("internal")) return "internal";
    if (l.includes("stakeholder")) return "stakeholder";
    if (l.includes("pilot")) return "pilot";
    if (l.includes("budget")) return "budget";
    if (l.includes("procurement")) return "procurement";
    if (l.includes("close")) return "close";
    return l;
  };

  const concepts = [
    // Construction Tracks
    ...constructionTracks[0].overlays.map(o => ({ 
      name: o, 
      description: "Pre-Contact → Deal Construction",
      target: `/?layer=construction&stage=pre-contact&highlight=${encodeURIComponent(o)}` 
    })),
    // Momentum Stages
    ...momentumSteps.map((step, idx) => ({ 
      name: step.label, 
      description: `Stage ${idx + 1}`,
      target: `/?stage=${getStageKey(step.label)}&highlight=${encodeURIComponent(step.label)}` 
    })),
    // Momentum Substeps
    ...momentumSteps.flatMap(step => 
      step.substeps.map(sub => ({
        name: sub.title,
        description: `${step.label} → substep`,
        target: `/?stage=${getStageKey(step.label)}&substep=${sub.id}&highlight=${encodeURIComponent(sub.title)}`
      }))
    ),
    // Momentum Bullets
    ...momentumSteps.flatMap(step => 
      step.substeps.flatMap(sub => 
        sub.bullets.map(bullet => ({
          name: bullet,
          description: `${step.label} → ${sub.title}`,
          target: `/?stage=${getStageKey(step.label)}&substep=${sub.id}&highlight=${encodeURIComponent(bullet)}`
        }))
      )
    ),
    // Signal Tracks
    ...signalTracks.flatMap(track => 
      track.overlays.map((overlay, oIdx) => ({
        name: overlay.text,
        description: `Signal → ${track.label}`,
        target: `/?layer=signal&stage=${getStageKey(track.label)}&overlay=${oIdx}&highlight=${encodeURIComponent(overlay.text)}`
      }))
    )
  ];

  const problemAnalysis = {
    keywords: ["demo", "not responding", "ghosting", "after demo", "mentions"],
    analysis: {
      stage: "Validation",
      issue: "Weak internal buy-in",
      suggested: ["Internal Discussion", "Stakeholder Expansion"],
      ctaTarget: "/?stage=validation"
    }
  };

  const filteredConcepts = searchQuery.length > 0 
    ? concepts.filter(c => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8) // Limit to 8 results
    : [];

  const showDealAnalysis = searchQuery.length > 5 && 
    problemAnalysis.keywords.some(k => searchQuery.toLowerCase().includes(k));

  return (
    <header className="border-b border-[#ece9f6] bg-white">
      <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center gap-3 px-4 md:px-6">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-[#202433] text-[11px] font-semibold text-white">
            B2B
          </span>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-[11px] font-medium text-[#252a3d]">B2B Sales OS</span>
            <span className="text-[10px] text-[#8b90a2]">Operating System</span>
          </div>
        </div>

        <span className="mx-1 hidden h-5 w-px bg-[#ece9f6] sm:block"></span>

        {/* Banao Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 rounded-full border border-[#ece9f6] bg-white px-2.5 py-1.5 text-xs font-medium text-[#252a3d] hover:bg-[#F9FAFB]"
          >
            <BookOpen className="h-3.5 w-3.5 text-[#8b90a2]" />
            <span>Banao</span>
            <ChevronDown className="h-3 w-3 text-[#8b90a2]" />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 z-50 mt-1 min-w-[160px] rounded-lg border border-[#ece9f6] bg-white py-1 shadow-lg">
              <a
                href="/"
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#252a3d] hover:bg-[#F9FAFB]"
              >
                Playbook
              </a>
              <a
                href="/"
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#252a3d] hover:bg-[#F9FAFB]"
              >
                <BookOpen className="h-4 w-4 text-[#8b90a2]" />
                Banao
              </a>
              <a
                href="/"
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#252a3d] hover:bg-[#F9FAFB]"
              >
                <BookOpen className="h-4 w-4 text-[#8b90a2]" />
                InterviewGod
              </a>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-medium transition-none",
              pathname === "/" 
                ? "bg-[#202433] text-white" 
                : "text-[#8b90a2] hover:text-[#252a3d]"
            )}
          >
            Playbook
          </Link>
          <Link
            href="/banao"
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-medium transition-none",
              pathname === "/banao" 
                ? "bg-[#202433] text-white" 
                : "text-[#8b90a2] hover:text-[#252a3d]"
            )}
          >
            Banao
          </Link>
          <Link
            href="/interviewgod"
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-medium transition-none",
              pathname === "/interviewgod" 
                ? "bg-[#202433] text-white" 
                : "text-[#8b90a2] hover:text-[#252a3d]"
            )}
          >
            InterviewGod
          </Link>
          <Link
            href="/vikaas"
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-medium transition-none",
              pathname === "/vikaas" 
                ? "bg-[#202433] text-white" 
                : "text-[#8b90a2] hover:text-[#252a3d]"
            )}
          >
            Vikaas
          </Link>
        </nav>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2">
          {/* Privilege Access Dropdown */}
          <div className="relative" ref={privilegeRef}>
            <button
              onClick={() => setPrivilegeOpen(!privilegeOpen)}
              className="flex items-center gap-1.5 rounded-full bg-[#f1f3fa] px-3 py-1.5 text-xs font-medium text-[#252a3d] hover:bg-[#e2e5f0]"
            >
              <span>{selectedPrivilege}</span>
              <ChevronDown className="h-3 w-3 text-[#8b90a2]" />
            </button>
            {privilegeOpen && (
              <div className="absolute top-full right-0 z-[60] mt-1 min-w-[120px] rounded-lg border border-[#ece9f6] bg-white py-1 shadow-xl">
                {["Small", "Mid", "Large", "Enterprise"].map((level) => (
                  <button
                    key={level}
                    onClick={() => {
                      setSelectedPrivilege(level);
                      setPrivilegeOpen(false);
                    }}
                    className="flex w-full items-center px-3 py-1.5 text-xs text-[#252a3d] hover:bg-[#F9FAFB]"
                  >
                    {level}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative w-[260px] md:w-[360px]" ref={searchRef}>
            <div className="flex w-full items-center gap-2 rounded-full border border-border bg-[#F9FAFB] px-3 py-1.5 text-sm">
              <Search className="h-4 w-4 text-[#8b90a2]" />
              <input
                placeholder="Search concepts or analyze your deal…"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#8b90a2]"
              />
              <kbd className="hidden rounded border border-border bg-white px-1.5 py-0.5 text-[10px] text-[#8b90a2] sm:inline">
                ⌘K
              </kbd>
            </div>

            {/* Search Results Popover */}
            {showResults && (searchQuery.length > 1) && (
              <div className="absolute top-full left-0 z-[100] mt-2 w-full overflow-hidden rounded-xl border border-[#ece9f6] bg-white shadow-2xl">
                {filteredConcepts.length > 0 && (
                  <div className="p-2">
                    <div className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.05em] text-[#8b90a2]">
                      CONCEPTS
                    </div>
                    <div className="flex flex-col gap-1">
                      {filteredConcepts.map((c, idx) => (
                        <Link
                          key={c.name + idx}
                          href={c.target}
                          onClick={() => {
                            setShowResults(false);
                            setSearchQuery("");
                          }}
                          className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all hover:bg-[#f4f4f7]"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f1f0ff] transition-colors group-hover:bg-[#e8e6ff]">
                            <Compass className="h-4 w-4 text-[#6b66f1]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[14px] font-semibold text-[#171d2a] truncate">
                              {c.name}
                            </div>
                            <div className="text-[11px] font-medium text-[#8b90a2] truncate">
                              {c.description}
                            </div>
                          </div>
                          <ArrowUpRight className="h-3.5 w-3.5 text-[#afb5c6] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {showDealAnalysis && (
                  <div className="border-t border-[#ece9f6] bg-[#f8f9ff] p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#6b66f1]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6b66f1]">Deal Analysis Result</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-[11px] text-[#8b90a2]">Detected Stage</div>
                        <div className="text-sm font-semibold text-[#252a3d]">{problemAnalysis.analysis.stage}</div>
                      </div>
                      
                      <div>
                        <div className="text-[11px] text-[#8b90a2]">Possible Issue</div>
                        <div className="text-sm text-[#252a3d]">{problemAnalysis.analysis.issue}</div>
                      </div>

                      <div>
                        <div className="mb-1 text-[11px] text-[#8b90a2]">Suggested Sections</div>
                        <div className="flex flex-wrap gap-1.5">
                          {problemAnalysis.analysis.suggested.map(s => (
                            <span key={s} className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-[#252a3d] border border-[#ece9f6]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link 
                        href={problemAnalysis.analysis.ctaTarget}
                        onClick={() => {
                          setShowResults(false);
                          setSearchQuery("");
                        }}
                        className="mt-2 block w-full rounded-lg bg-[#202433] py-2 text-center text-xs font-semibold text-white hover:opacity-90"
                      >
                        View Playbook for this
                      </Link>
                    </div>
                  </div>
                )}

                {filteredConcepts.length === 0 && !showDealAnalysis && (
                  <div className="p-6 text-center text-sm text-[#8b90a2]">
                    No results found for &quot;{searchQuery}&quot;
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Analyze My Deal Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="hidden items-center gap-1.5 rounded-full bg-[#202433] px-4 py-2 text-xs font-semibold text-white hover:opacity-90 sm:inline-flex"
            type="button"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Analyze My Deal
          </button>

          {/* Avatar */}
          <div className="h-8 w-8 rounded-full bg-[linear-gradient(135deg,#6366f1_0%,#06b6d4_100%)] shadow-sm" aria-label="Account" />
        </div>
      </div>
      <div className="flex items-center gap-1 overflow-x-auto px-4 pb-2 md:hidden">
        <Link
          href="/"
          className={cn(
            "whitespace-nowrap rounded-full px-3 py-1 text-xs transition-none",
            pathname === "/" ? "bg-[#202433] text-white" : "text-[#8b90a2]"
          )}
        >
          Playbook
        </Link>
        <Link
          href="/banao"
          className={cn(
            "whitespace-nowrap rounded-full px-3 py-1 text-xs transition-none",
            pathname === "/banao" ? "bg-[#202433] text-white" : "text-[#8b90a2]"
          )}
        >
          Banao
        </Link>
        <Link
          href="/interviewgod"
          className={cn(
            "whitespace-nowrap rounded-full px-3 py-1 text-xs transition-none",
            pathname === "/interviewgod" ? "bg-[#202433] text-white" : "text-[#8b90a2]"
          )}
        >
          InterviewGod
        </Link>
        <Link
          href="/vikaas"
          className={cn(
            "whitespace-nowrap rounded-full px-3 py-1 text-xs transition-none",
            pathname === "/vikaas" ? "bg-[#202433] text-white" : "text-[#8b90a2]"
          )}
        >
          Vikaas
        </Link>
      </div>
      
      <AnalyzeDealModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onSuccess={() => {
          // Keep modal open to show results
        }}
      />
    </header>
  );
}
