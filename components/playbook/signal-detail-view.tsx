"use client";

import React, { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  Check, 
  X, 
  ArrowRight, 
  AlertTriangle, 
  Info, 
  Lightbulb, 
  Zap, 
  Target, 
  ShieldAlert, 
  Search,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Ban,
  Activity,
  Flame,
  MousePointer2,
  Lock,
  DoorOpen,
  Compass,
  Microscope,
  ChevronLeft,
  ChevronRight,
  Fingerprint,
  TriangleAlert,
  CheckCircle,
  CircleCheck,
  XCircle,
  ClipboardCheck,
  Minus,
  Plus
} from "lucide-react";
import { SignalDetail } from "./signal-details";
import { cn } from "@/lib/utils";

interface SignalDetailViewProps {
  signal: SignalDetail;
  onClose?: () => void;
  currentIndex?: number;
  totalCount?: number;
  onPrev?: () => void;
  onNext?: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  priority?: string;
  status?: "success" | "warning" | "error";
  stepLabel?: string;
  nextSignalTitle?: string;
  nextSignalPriority?: string;
  nextSignalStatus?: "success" | "warning" | "error";
  prevSignalTitle?: string;
}

const statusConfig: Record<string, { label: string; color: string; bg: string; iconColor: string; icon: any }> = {
  success: { label: "Strong Signal", color: "#239F71", bg: "#EDFDF5", iconColor: "#239F71", icon: CircleCheck },
  warning: { label: "Caution Signal", color: "#F57D14", bg: "#FFF7EB", iconColor: "#F57D14", icon: TriangleAlert },
  error: { label: "Negative Signal", color: "#E63737", bg: "#FEF1F1", iconColor: "#E63737", icon: XCircle },
};

/* ─── tiny icon helpers ─── */
function SignalIcon({ status = "success", size = 12 }: { status?: "success" | "warning" | "error"; size?: number }) {
  const Icon = statusConfig[status]?.icon || CheckCircle;
  return <Icon size={size} color={statusConfig[status]?.color} strokeWidth={2.5} />;
}

function SectionIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2F0ED]">
      {children}
    </div>
  );
}

export function SignalDetailView({ 
  signal, 
  onClose,
  currentIndex = 1,
  totalCount = 5,
  onPrev,
  onNext,
  canPrev = true,
  canNext = true,
  priority = "P1",
  status = "success",
  stepLabel = "Contact",
  nextSignalTitle,
  nextSignalPriority = "P1",
  nextSignalStatus = "success",
  prevSignalTitle,
}: SignalDetailViewProps) {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number>(0);
  const cfg = statusConfig[status] || statusConfig.success;

  return (
    <div className="flex flex-col items-start gap-10" style={{ maxWidth: 1233 }}>

      {/* ════════════════ HEADER ════════════════ */}
      <div className="flex w-full items-end justify-between gap-6 border-b border-[#ece9f6] pb-8">
        {/* Left: meta + title — fills available space, never pushes buttons */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-3">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-normal uppercase tracking-wider text-[#6E52E0]">
              SIGNAL
            </span>
            <span
              className="inline-flex shrink-0 items-center gap-1.5 rounded-[10px] px-2 py-0.5 text-xs font-medium"
              style={{ background: cfg.bg, color: cfg.color }}
            >
              <SignalIcon status={status} size={13} />
              {cfg.label}
            </span>
            <span className="text-xs text-[#E5E0DC]">/</span>
            <span className="font-mono text-xs font-normal uppercase tracking-wider text-[#606876]">
              {String(currentIndex).padStart(2, "0")} of {String(totalCount).padStart(2, "0")}
            </span>
          </div>

          {/* Icon + Title */}
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F2F0ED]">
              <Search className="h-5 w-5 text-[#131720]" strokeWidth={1.67} />
            </div>
            <h1
              className="min-w-0 text-5xl font-semibold leading-none text-[#131720]"
              style={{ letterSpacing: "-1.44px" }}
            >
              {signal.title}
            </h1>
          </div>
        </div>

        {/* Right: Prev / Next — always stays in place */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={onPrev}
            disabled={!canPrev}
            className="inline-flex h-9 items-center gap-1.5 rounded-[10px] border border-[#E5E0DC] bg-white px-3 text-sm font-medium text-[#131720] transition hover:bg-[#F9F9F9] disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            Prev
          </button>
          <button
            onClick={onNext}
            disabled={!canNext}
            className="inline-flex h-9 items-center gap-1.5 rounded-[10px] bg-[#131720] px-3 text-sm font-medium text-white transition hover:bg-[#1a253b] disabled:opacity-40"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ════════════════ CONTENT ════════════════ */}
      <div className="flex w-full flex-col items-start gap-10">

        {/* ── Definition Box ── */}
        <div className="w-full rounded-xl border border-[#E5E0DC] bg-[#F0EDFD] p-5">
          <p className="text-lg leading-[29px] text-[#131720]/85">
            {signal.meaning.description}
          </p>
        </div>

        {/* ── Section: What this signal means ── */}
        <SectionBlock
          icon={<Search className="h-5 w-5 text-[#131720]" strokeWidth={1.33} />}
          title="What this signal means"
        >
          <div className="flex w-full flex-wrap gap-4">
            {signal.meaning.subSignals.map((s, i) => (
              <div
                key={i}
                className="flex min-w-[300px] flex-1 flex-col gap-1 rounded-xl border border-[#F2F0FF] bg-white p-4"
                style={{ boxShadow: "inset 3px 0px 0px 1px #7454F2" }}
              >
                <span className="text-sm font-bold text-[#0F1729]">{s.title}</span>
                <span className="text-sm text-[#6B7280]">{s.description}</span>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* ── Section: What counts as personalised ── */}
        <SectionBlock
          icon={<Target className="h-5 w-5 text-[#131720]" strokeWidth={1.33} />}
          title="What counts as personalised"
        >
          <div className="relative flex w-full gap-3" style={{ minHeight: 282 }}>
            {/* Real */}
            <div className="flex flex-1 flex-col gap-3 rounded-xl border border-[#E5E7EB] bg-white p-5">
              <div className="flex items-center gap-2">
                <SignalIcon status="success" size={16} />
                <span className="text-sm font-bold text-[#239F71]">Real Personalisation</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {signal.countsAsPersonalised.real.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-[#6B7280]">• {b}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 pt-1">
                {signal.countsAsPersonalised.real.quotes.map((q, i) => (
                  <div key={i} className="rounded-r-[10px] bg-[#EDFDF5]/50 px-3 py-2">
                    <p className="text-sm italic text-[#0F1729]">{q}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Fake */}
            <div className="flex flex-1 flex-col gap-3 rounded-xl border border-[#E5E7EB] bg-white p-5">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-[#F57D14]" strokeWidth={1.33} />
                <span className="text-sm font-bold text-[#F57D14]">Fake Personalisation</span>
              </div>
              <p className="text-xs text-[#F57D14]/80">Weak signals disguised as strong</p>
              <ul className="flex flex-col gap-1.5">
                {signal.countsAsPersonalised.fake.bullets.slice(1).map((b, i) => (
                  <li key={i} className="text-sm text-[#6B7280]">• {b}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 pt-1">
                {signal.countsAsPersonalised.fake.quotes.map((q, i) => (
                  <div key={i} className="rounded-r-[10px] bg-[#FEF1F1]/50 px-3 py-2">
                    <p className="text-sm italic text-[#0F1729]">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionBlock>

        {/* ── Section: Why this is P1 ── */}
        <SectionBlock
          icon={<Flame className="h-5 w-5 text-[#131720]" strokeWidth={1.33} />}
          title="Why this is P1"
        >
          <div className="flex w-full flex-col gap-4 rounded-xl border border-[#F2F0FF] bg-[#F2F0FF] p-5">
            <p className="text-sm text-[#0F1729]/80">{signal.whyP1.description}</p>
            <div className="flex gap-3">
              <div className="flex flex-1 items-center rounded-xl border border-[#C6ECDA] bg-white px-3 py-2.5">
                <span className="text-sm font-bold text-[#239F71]">
                  Strong read → {signal.whyP1.strongRead}
                </span>
              </div>
              <div className="flex flex-1 items-center rounded-xl border border-[#F7D4D4] bg-white px-3 py-2.5">
                <span className="text-sm font-bold text-[#E63737]">
                  Misread → {signal.whyP1.misread}
                </span>
              </div>
            </div>
          </div>
        </SectionBlock>

        {/* ── Section: What a fresher must understand ── */}
        <SectionBlock
          icon={<Search className="h-5 w-5 text-[#131720]" strokeWidth={1.33} />}
          title="What a fresher must understand"
        >
          <div className="flex w-full flex-wrap gap-4">
            {signal.fresherMustUnderstand.items.map((item, i) => (
              <div
                key={i}
                className="flex min-w-[300px] flex-1 flex-col gap-1 rounded-xl border border-[#F2F0FF] bg-white p-4"
                style={{ boxShadow: "inset 3px 0px 0px 1px #7454F2" }}
              >
                <span className="text-sm font-bold text-[#0F1729]">{item.title}</span>
                <span className="text-sm text-[#6B7280]">{item.description}</span>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* ── Section: Authority & positioning moves ── */}
        <SectionBlock
          icon={<Sparkles className="h-5 w-5 text-[#131720]" strokeWidth={1.33} />}
          title="Authority & positioning moves"
        >
          <div className="flex w-full flex-col gap-[18px]">
            {signal.authorityMoves.items.map((move, i) => {
              const isOpen = openAccordionIndex === i;
              return (
                <div
                  key={i}
                  className="w-full overflow-hidden rounded-xl border border-[#E5E7EB] bg-white"
                >
                  {/* Accordion header */}
                  <button
                    type="button"
                    onClick={() => setOpenAccordionIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between px-4 py-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6B7280]" />
                      <span className="text-sm text-[#0F1729]">{move.title}</span>
                      <span className="rounded-[10px] bg-[#F3F4F6] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">
                        Move
                      </span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-[#6B7280] transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Accordion body */}
                  {isOpen && (
                    <div className="border-t border-[#E5E7EB] p-4">
                      <div className="flex flex-col gap-3">
                        {/* Wrong */}
                        <div className="flex items-start gap-2">
                          <div className="mt-0.5">
                            <X className="h-4 w-4 text-[#E63737]" strokeWidth={1.33} />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#E63737]">
                              Wrong
                            </span>
                            <p className="text-sm text-[#0F1729]/80">{move.wrong}</p>
                          </div>
                        </div>
                        {/* Correct */}
                        <div className="flex items-start gap-2">
                          <div className="mt-0.5">
                            <Check className="h-4 w-4 text-[#239F71]" strokeWidth={1.33} />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#239F71]">
                              Correct
                            </span>
                            <p className="text-sm text-[#0F1729]/80">{move.correct}</p>
                          </div>
                        </div>
                        {/* Outcome */}
                        <div className="flex items-start gap-2 rounded-xl bg-[#F3F4F6]/60 p-2.5">
                          <div className="mt-0.5">
                            <ArrowRight className="h-4 w-4 text-[#0F1729]" strokeWidth={1.33} />
                          </div>
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
                              Outcome
                            </span>
                            <p className="text-sm text-[#0F1729]">{move.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </SectionBlock>

        {/* ── Section: Common mistakes ── */}
        <SectionBlock
          icon={<AlertTriangle className="h-5 w-5 text-[#131720]" strokeWidth={1.67} />}
          title="Common mistakes"
        >
          <div className="relative grid w-full grid-cols-2 gap-3" style={{ minHeight: 226 }}>
            {signal.commonMistakes.items.map((m, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 rounded-xl border border-[#E5E7EB] bg-white p-4"
                style={{ boxShadow: "inset 3px 0px 0px 1px rgba(224, 84, 41, 0.5)" }}
              >
                <div className="flex items-center gap-2">
                  <X className="h-4 w-4 text-[#E05429]" strokeWidth={1.33} />
                  <span className="text-sm font-bold text-[#0F1729]">{m.title}</span>
                </div>
                <p className="pb-1 text-xs text-[#6B7280]">{m.description}</p>
                <div className="border-t border-[#E5E7EB] pt-2">
                  <p className="text-xs text-[#E05429]">→ {m.consequence}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* ── Section: Micro-signals inside the reply ── */}
        <SectionBlock
          icon={<Fingerprint className="h-5 w-5 text-[#131720]" strokeWidth={1.67} />}
          title="Micro-signals inside the reply"
        >
          <div className="grid w-full grid-cols-3 gap-3">
            {/* Strong */}
            <MicroSignalCard
              label="Strong"
              color="#239F71"
              items={signal.microSignals.strong}
            />
            {/* Medium */}
            <MicroSignalCard
              label="Medium"
              color="#F57D14"
              items={signal.microSignals.medium}
            />
            {/* Weak */}
            <MicroSignalCard
              label="Weak"
              color="#E63737"
              items={signal.microSignals.weak}
            />
          </div>
        </SectionBlock>

        {/* ── Section: What happens next ── */}
        <SectionBlock
          icon={<Flame className="h-5 w-5 text-[#131720]" strokeWidth={1.33} />}
          title="What happens next"
        >
          <div className="grid w-full grid-cols-2 gap-3">
            {/* Do */}
            <div
              className="flex flex-col gap-2 rounded-xl border border-[#E5E7EB] bg-[#E8F7F1] p-5"
              style={{ boxShadow: "inset 3px 0px 0px 1px #239F71" }}
            >
              <span className="text-base font-bold uppercase tracking-wider text-[#239F71]">
                Do
              </span>
              <p className="text-sm text-[#0F1729]">{signal.whatHappensNext.doText}</p>
            </div>
            {/* Don't */}
            <div
              className="flex flex-col gap-2 rounded-xl border border-[#E5E7EB] bg-[#FEF4E7] p-5"
              style={{ boxShadow: "inset 3px 0px 0px 1px #E63737" }}
            >
              <span className="text-base font-bold uppercase tracking-wider text-[#E63737]">
                Don&apos;t
              </span>
              <div className="flex flex-wrap gap-1">
                {signal.whatHappensNext.dontItems.map((d, i) => (
                  <span key={i} className="text-sm text-[#0F1729]/80">• {d}</span>
                ))}
              </div>
            </div>
          </div>
        </SectionBlock>

        {/* ── Section: Final mental model ── */}
        <SectionBlock
          icon={<Flame className="h-5 w-5 text-[#131720]" strokeWidth={1.33} />}
          title="Final mental model"
          titleColor="#7454F2"
        >
          <div
            className="flex w-full items-start gap-4 rounded-2xl border border-[#DBD6F5] p-6"
            style={{
              background: "linear-gradient(135deg, #F2F0FF 0%, rgba(242,240,255,0.6) 50%, #FFFFFF 100%)",
            }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7454F2]">
              <Sparkles className="h-5 w-5 text-white" strokeWidth={1.67} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-[#7454F2]">{signal.finalMentalModel.title}</span>
              <p className="text-sm leading-[23px] text-[#0F1729]/80">
                {signal.finalMentalModel.description}
              </p>
            </div>
          </div>
        </SectionBlock>
      </div>

    </div>
  );
}

/* ─────────────── Reusable sub-components ─────────────── */

function SectionBlock({
  icon,
  title,
  titleColor = "#131720",
  children,
}: {
  icon: React.ReactNode;
  title: string;
  titleColor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex items-center gap-4">
        <SectionIcon>{icon}</SectionIcon>
        <h2
          className="text-[28px] font-semibold leading-7"
          style={{ color: titleColor, letterSpacing: "-0.28px" }}
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

function MicroSignalCard({
  label,
  color,
  items,
}: {
  label: string;
  color: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[#E5E7EB] bg-white p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold" style={{ color }}>
          {label}
        </span>
        <span
          className="h-2 w-2 rounded-full"
          style={{ background: color }}
        />
      </div>
      <ul className="flex flex-col gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-[#6B7280]">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
