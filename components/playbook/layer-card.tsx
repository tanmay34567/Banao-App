import type { PlaybookIcon } from "@/components/playbook/icons";

type LayerCardProps = {
  id: string;
  title: string;
  description: string;
  icon: PlaybookIcon;
  active: boolean;
  onClick: () => void;
};

export function LayerCard({
  id,
  title,
  description,
  icon: Icon,
  active,
  onClick,
}: LayerCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex min-w-[280px] items-center justify-between rounded-[18px] border bg-white px-4 py-3.5 text-left transition hover:border-[#cbc0ff] sm:min-w-[340px] sm:px-5 sm:py-4 md:min-w-[420px] md:rounded-[20px] md:px-6 md:py-4.5",
        active
          ? "border-[#cdc4ff] shadow-[0_10px_25px_rgba(120,106,252,0.08)]"
          : "border-[#e8e2ef] shadow-[0_8px_20px_rgba(31,35,51,0.04)]",
      ].join(" ")}
    >
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <div
          className={[
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] sm:h-11 sm:w-11 sm:rounded-[16px]",
            active ? "bg-[#151b2b] text-white" : "bg-[#f5f2f0] text-[#767b8d]",
          ].join(" ")}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#73788b] sm:text-[11px] sm:tracking-[0.22em]">
            Layer {id}
          </div>
          <div className="truncate text-[16px] font-semibold leading-tight text-[#171d2a] sm:text-[18px]">
            {title}
          </div>
          <div className="text-xs text-[#8b90a2] sm:text-sm">{description}</div>
        </div>
      </div>

      <div
        className={[
          "relative h-7 w-[48px] shrink-0 rounded-full transition sm:h-8 sm:w-[54px]",
          active ? "bg-[#8a7cff]" : "bg-[#ecebf1]",
        ].join(" ")}
      >
        <div
          className={[
            "absolute top-1 h-5 w-5 rounded-full bg-white shadow-[0_4px_10px_rgba(23,29,42,0.18)] transition sm:h-6 sm:w-6",
            active ? "left-[23px] sm:left-[26px]" : "left-1",
          ].join(" ")}
        />
      </div>
    </button>
  );
}
