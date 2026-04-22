import type { PlaybookIcon } from "@/components/playbook/icons";

type LayerCardProps = {
  id: string;
  title: string;
  icon: PlaybookIcon;
  active: boolean;
  onClick: () => void;
};

export function LayerCard({
  id,
  title,
  icon: Icon,
  active,
  onClick,
}: LayerCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative min-w-[260px] rounded-[18px] border bg-white px-4 py-3 text-left transition hover:-translate-y-0.5 sm:min-w-[320px] sm:rounded-[20px] sm:px-5 sm:py-3.5",
        active
          ? "border-[#ddd8ea] shadow-[0_12px_30px_rgba(98,84,206,0.06)]"
          : "border-[#ece9f6] shadow-[0_8px_24px_rgba(82,66,170,0.03)]",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <div
          className={[
            "flex h-9 w-9 items-center justify-center rounded-[12px] border sm:h-10 sm:w-10 sm:rounded-[14px]",
            active
              ? "border-[#23283a] bg-[#1f2433] text-white"
              : "border-[#edeaf2] bg-[#f4f1ef] text-[#5e6476]",
          ].join(" ")}
        >
          <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6d7385]">
            Layer {id}
          </div>
          <div className="text-[15px] font-semibold leading-tight text-[#1d2230] sm:text-[16px]">
            {title}
          </div>
        </div>
      </div>
      {active ? (
        <div className="absolute bottom-0 left-3 right-3 h-[3px] rounded-full bg-[#6f5cff] sm:left-4 sm:right-4" />
      ) : null}
    </button>
  );
}
