import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavButtonProps = {
  direction: "prev" | "next";
  disabled?: boolean;
  onClick?: () => void;
};

export function NavButton({ direction, disabled, onClick }: NavButtonProps) {
  const isNext = direction === "next";

  return (
    <Button
      variant={isNext ? "default" : "outline"}
      disabled={disabled}
      onClick={onClick}
      className={[
        "h-12 rounded-[16px] px-5 text-[15px] font-medium shadow-none",
        isNext
          ? "border-[#171d2a] bg-[#171d2a] text-white hover:bg-[#101520] disabled:border-[#d9dde8] disabled:bg-[#999ca5] disabled:text-white"
          : "border-[#ece8f0] bg-white text-[#8b90a0] hover:bg-[#f8f7fb] disabled:border-[#ece8f0] disabled:bg-white disabled:text-[#8b90a0]",
      ].join(" ")}
    >
      {isNext ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
      <span>{isNext ? "Next" : "Prev"}</span>
    </Button>
  );
}

type CircleNavProps = {
  direction: "left" | "right";
  disabled?: boolean;
  onClick?: () => void;
};

export function CircleNav({ direction, disabled, onClick }: CircleNavProps) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;

  return (
    <Button
      variant="outline"
      size="icon"
      disabled={disabled}
      onClick={onClick}
      className="h-10 w-10 rounded-full border-[#ece9f6] bg-white text-[#777d92] shadow-none hover:bg-[#f8f7fb] disabled:border-[#ece9f6] disabled:bg-white disabled:text-[#c4c8d6]"
      aria-label={direction === "left" ? "Previous step" : "Next step"}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}
