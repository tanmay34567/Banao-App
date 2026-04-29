import {
  BookOpen,
  Brain,
  Briefcase,
  FlaskConical,
  Gauge,
  MessageSquare,
  Search,
  ShieldAlert,
  ShieldX,
  Target,
  Users,
} from "lucide-react";

export type PlaybookIcon = React.ComponentType<{ className?: string }>;

export function getStepIcon(label: string): PlaybookIcon {
  const normalized = label.toLowerCase();

  if (normalized.includes("contact")) return MessageSquare;
  if (normalized.includes("interest")) return Target;
  if (normalized.includes("discovery")) return Search;
  if (normalized.includes("validation")) return ShieldAlert;
  if (normalized.includes("stakeholder")) return Users;
  if (normalized.includes("pilot") || normalized.includes("test")) return FlaskConical;
  if (normalized.includes("procurement")) return Briefcase;
  if (normalized.includes("close") || normalized.includes("decision")) return ActivityMark;
  if (normalized.includes("budget") || normalized.includes("roi")) return Gauge;
  if (normalized.includes("psychology") || normalized.includes("risk")) return Brain;
  if (normalized.includes("objection") || normalized.includes("failure")) return ShieldX;
  if (normalized.includes("question")) return MessageSquare;
  if (normalized.includes("proof") || normalized.includes("credibility")) return BookOpen;

  return CircleGlyph;
}

export function ActivityMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12h4l2-5 4 10 2-5h4" />
    </svg>
  );
}

export function CircleGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
export function ConstructionIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.332 2H9.9987C9.63051 2 9.33203 2.29848 9.33203 2.66667V6C9.33203 6.36819 9.63051 6.66667 9.9987 6.66667H13.332C13.7002 6.66667 13.9987 6.36819 13.9987 6V2.66667C13.9987 2.29848 13.7002 2 13.332 2Z" />
      <path d="M6.66667 14V5.33332C6.66667 5.15651 6.59643 4.98694 6.4714 4.86192C6.34638 4.73689 6.17681 4.66666 6 4.66666H2.66667C2.48986 4.66666 2.32029 4.73689 2.19526 4.86192C2.07024 4.98694 2 5.15651 2 5.33332V13.3333C2 13.5101 2.07024 13.6797 2.19526 13.8047C2.32029 13.9298 2.48986 14 2.66667 14H10.6667C10.8435 14 11.013 13.9298 11.1381 13.8047C11.2631 13.6797 11.3333 13.5101 11.3333 13.3333V9.99999C11.3333 9.82318 11.2631 9.65361 11.1381 9.52859C11.013 9.40356 10.8435 9.33332 10.6667 9.33332H2" />
    </svg>
  );
}
