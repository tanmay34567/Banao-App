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
      className="group overflow-hidden rounded-2xl border border-[#e6dfff] bg-[#efe9ff]"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-[#42475c]">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-[#575d73] transition group-open:rotate-180" />
      </summary>
      {content.length ? (
        <div className="px-5 pb-5 text-sm leading-7 text-[#656a7f]">
          <p>{content[0]}</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">
            {content.slice(1, -1).map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-1">{content[content.length - 1]}</p>
        </div>
      ) : null}
    </details>
  );
}
