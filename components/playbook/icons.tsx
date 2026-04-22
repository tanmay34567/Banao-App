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
