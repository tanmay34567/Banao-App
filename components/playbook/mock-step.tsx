import { ChevronDown } from "lucide-react";

type MockStepProps = {
  title: string;
  content: string[];
  open: boolean;
};

export function MockStep({ title, content, open }: MockStepProps) {
  return (
    <details
      open={open}
      className="group overflow-hidden rounded-xl border border-[#E5E0DC] bg-[#F0EDFD]"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
        <span className="text-[14px] font-semibold text-[#131720]">{title}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-[#70758a] transition group-open:rotate-180" />
      </summary>
      {content.length ? (
        <div className="px-5 pb-5 pt-0 text-[14px] leading-[23px] text-[#3C424B]">
          <p>{content[0]}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {content.slice(1, -1).map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          {content.length > 1 && (
            <p className="mt-2">{content[content.length - 1]}</p>
          )}
        </div>
      ) : null}
    </details>
  );
}
