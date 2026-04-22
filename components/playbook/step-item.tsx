import { Check } from "lucide-react";
import type { PlaybookIcon } from "@/components/playbook/icons";

type StepItemProps = {
  id: string;
  label: string;
  icon: PlaybookIcon;
  active: boolean;
  completed: boolean;
  isFirst: boolean;
  isLast: boolean;
  onClick: () => void;
};

export function StepItem({
  id,
  label,
  icon: Icon,
  active,
  completed,
  isFirst,
  isLast,
  onClick,
}: StepItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative min-w-[116px] flex-none text-center sm:min-w-[150px]"
    >
      {!isFirst ? (
        <div
          className={[
            "absolute right-1/2 top-5 h-[2px] w-full sm:top-6",
            completed || active ? "bg-[#786afc]" : "bg-[#dfdeea]",
          ].join(" ")}
        />
      ) : null}
      {!isLast ? (
        <div
          className={[
            "absolute left-1/2 top-5 h-[2px] w-full sm:top-6",
            completed ? "bg-[#786afc]" : "bg-[#dfdeea]",
          ].join(" ")}
        />
      ) : null}
      <div
        className={[
          "relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border-[3px] transition sm:h-12 sm:w-12",
          active || completed
            ? "border-[#786afc] bg-[#786afc] text-white shadow-[0_14px_30px_rgba(120,106,252,0.28)]"
            : "border-[#dbd7e2] bg-white text-[#7e8598]",
        ].join(" ")}
      >
        {completed ? <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
      </div>
      <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a7acba] sm:mt-3 sm:text-[10px]">
        Step {id}
      </div>
      <div
        className={[
          "mt-1 text-[11px] font-semibold leading-tight sm:text-[13px]",
          active || completed ? "text-[#2a3040]" : "text-[#646a7d]",
        ].join(" ")}
      >
        {label}
      </div>
    </button>
  );
}
