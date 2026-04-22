import { CheckCircle2, ChevronDown } from "lucide-react";
import type { AccordionItemData } from "@/components/playbook/data";

type ContentSectionProps = {
  title: string;
  titleClassName: string;
  icon: React.ReactNode;
  items: AccordionItemData[];
  accentClassName: string;
  markerType: "dot" | "check";
  panelClassName: string;
};

export function ContentSection({
  title,
  titleClassName,
  icon,
  items,
  accentClassName,
  markerType,
  panelClassName,
}: ContentSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className={`text-[34px] font-semibold tracking-[-0.04em] ${titleClassName}`}>
          {title}
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.title}
            open={item.open}
            className={`group relative overflow-hidden rounded-2xl border border-[#ece9f6] ${panelClassName}`}
          >
            <div className={`absolute bottom-0 left-0 top-0 w-[3px] ${accentClassName}`} />
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
              <div className="flex items-center gap-3">
                {markerType === "check" ? (
                  <CheckCircle2 className={`h-4 w-4 ${accentClassName.replace("bg-[", "text-[")}`} />
                ) : (
                  <span className={`h-2.5 w-2.5 rounded-full ${accentClassName}`} />
                )}
                <span className="text-sm font-semibold text-[#2c3145]">
                  {item.title}
                </span>
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 text-[#70758a] transition group-open:rotate-180" />
            </summary>
            {item.body ? (
              <div className="px-5 pb-5 pt-0 text-sm leading-7 text-[#8b90a2]">
                {item.body}
              </div>
            ) : null}
          </details>
        ))}
      </div>
    </section>
  );
}
