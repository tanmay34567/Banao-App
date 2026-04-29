import { CheckCircle2, ChevronDown } from "lucide-react";
import type { AccordionItemData } from "@/components/playbook/data";
import { cn } from "@/lib/utils";

type ContentSectionProps = {
  title: string;
  titleClassName: string;
  icon: React.ReactNode;
  items: AccordionItemData[];
  accentClassName: string;
  leftBorderClassName?: string;
  markerType: "dot" | "check";
  panelClassName: string;
};

export function ContentSection({
  title,
  titleClassName,
  icon,
  items,
  accentClassName,
  leftBorderClassName,
  markerType,
  panelClassName,
}: ContentSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className={cn("text-[28px] font-semibold", titleClassName)}>
          {title}
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.title}
            open={item.open}
            className={cn("group relative overflow-hidden rounded-xl border", panelClassName)}
          >
            <div className={cn("absolute bottom-0 left-0 top-0 w-[2px]", leftBorderClassName || accentClassName)} />
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
              <div className="flex items-center gap-3">
                {markerType === "check" ? (
                  <CheckCircle2 className={cn("h-4 w-4", accentClassName.replace("bg-[", "text-["))} />
                ) : (
                  <span className={cn("h-1.5 w-1.5 rounded-full", accentClassName)} />
                )}
                <span className="text-[14px] font-semibold text-[#131720]">
                  {item.title}
                </span>
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 text-[#70758a] transition group-open:rotate-180" />
            </summary>
            {item.body ? (
              <div className="px-5 pb-5 pt-0 text-[14px] leading-[23px] text-[#606876]">
                {item.body}
              </div>
            ) : null}
          </details>
        ))}
      </div>
    </section>
  );
}
