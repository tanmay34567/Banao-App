import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { forwardRef } from "react";

type StepItemProps = {
  label: string;
  active: boolean;
  isHighlighted?: boolean;
  activeStyle?: "filled" | "outline";
  className?: string;
  status?: "success" | "warning" | "error";
  onClick: () => void;
};

export const StepItem = forwardRef<HTMLButtonElement, StepItemProps>(
  ({ label, active, isHighlighted, activeStyle = "filled", className, status, onClick }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={[
          "relative z-10 flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[13px] font-medium transition sm:px-4 sm:py-2 sm:text-[15px]",
          active
            ? activeStyle === "outline"
              ? "border-[#7a6cff] bg-white text-[#7a6cff]"
              : "border-[#6f5cff] bg-[#6f5cff] text-white shadow-[0_8px_18px_rgba(111,92,255,0.22)]"
            : isHighlighted
              ? "border-[#c7c0ff] bg-white text-[#6f5cff]"
              : "border-[#dcd8e4] bg-white text-[#6e7488] hover:border-[#c9c2d9]",
          className ?? "",
        ].join(" ")}
      >
        <span>{label}</span>
        {status === "success" && <CheckCircle2 className="h-4 w-4 text-green-500" />}
        {status === "warning" && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
        {status === "error" && <XCircle className="h-4 w-4 text-red-500" />}
      </button>
    );
  }
);

StepItem.displayName = "StepItem";
