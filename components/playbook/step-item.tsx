import { forwardRef } from "react";

type StepItemProps = {
  label: string;
  active: boolean;
  activeStyle?: "filled" | "outline";
  className?: string;
  onClick: () => void;
};

export const StepItem = forwardRef<HTMLButtonElement, StepItemProps>(
  ({ label, active, activeStyle = "filled", className, onClick }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={[
          "relative z-10 whitespace-nowrap rounded-full border px-3 py-1.5 text-[13px] font-medium transition sm:px-4 sm:py-2 sm:text-[15px]",
          active
            ? activeStyle === "outline"
              ? "border-[#7a6cff] bg-white text-[#7a6cff]"
              : "border-[#6f5cff] bg-[#6f5cff] text-white shadow-[0_8px_18px_rgba(111,92,255,0.22)]"
            : "border-[#dcd8e4] bg-white text-[#6e7488] hover:border-[#c9c2d9]",
          className ?? "",
        ].join(" ")}
      >
        {label}
      </button>
    );
  }
);

StepItem.displayName = "StepItem";
