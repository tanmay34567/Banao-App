import { HelpCircle } from "lucide-react";
import type { PlaybookIcon } from "@/components/playbook/icons";

type LayerCardProps = {
  id: string;
  title: string;
  description: string;
  icon: PlaybookIcon;
  active: boolean;
  onToggle: () => void;
};

export function LayerCard({
  title,
  icon: Icon,
  active,
  onToggle,
}: LayerCardProps) {
  return (
    <div
      className={[
        "group relative flex min-w-0 flex-1 items-center justify-between rounded-[16px] border bg-white px-3 py-3 text-left transition sm:rounded-[18px] sm:px-4 sm:py-3.5 md:rounded-[20px] md:px-5 md:py-4",
        active
          ? "border-[#cdc4ff] shadow-[0_10px_25px_rgba(120,106,252,0.08)]"
          : "border-[#e8e2ef] shadow-[0_8px_20px_rgba(31,35,51,0.04)]",
      ].join(" ")}
    >
      <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-[#151b2b] text-white sm:h-10 sm:w-10 sm:rounded-[14px]"
        >
          <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#73788b] sm:text-[10px] sm:tracking-[0.18em]">
            <span className="whitespace-nowrap truncate">Layer {title.split(" ").pop()}</span>
            <div className="relative inline-flex shrink-0">
              <HelpCircle className="peer h-3 w-3 text-[#9ba1b7] transition-colors hover:text-[#7a6cff]" />

              {/* Tooltip - positioned above and constrained within card */}
              <div className="invisible absolute bottom-full right-0 z-30 mb-2 rounded-lg border border-[#e8e2ef] bg-white px-2.5 py-1.5 text-[11px] font-medium text-[#171d2a] shadow-[0_8px_20px_rgba(0,0,0,0.08)] opacity-0 transition-all peer-hover:visible peer-hover:mb-3 peer-hover:opacity-100">
                <span className="whitespace-nowrap">{title}</span>
                <div className="absolute -bottom-1 right-2 h-2 w-2 rotate-45 border-b border-r border-[#e8e2ef] bg-white" />
              </div>
            </div>
          </div>
          <div className="truncate text-[14px] font-semibold leading-tight text-[#171d2a] sm:text-[16px]">
            {title}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onToggle}
        className={[
          "relative h-7 w-[48px] shrink-0 rounded-full transition sm:h-8 sm:w-[54px]",
          active ? "bg-[#8a7cff]" : "bg-[#ecebf1]",
        ].join(" ")}
        aria-label={active ? `Disable ${title}` : `Enable ${title}`}
      >
        <div
          className={[
            "absolute top-1 h-5 w-5 rounded-full bg-white shadow-[0_4px_10px_rgba(23,29,42,0.18)] transition sm:h-6 sm:w-6",
            active ? "left-[23px] sm:left-[26px]" : "left-1",
          ].join(" ")}
        />
      </button>
    </div>
  );
}
