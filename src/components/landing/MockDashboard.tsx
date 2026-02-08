import { CheckCircle2, Circle, AlertTriangle, RotateCcw, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const tasks = [
  { label: "Draft pitch deck intro", status: "done" },
  { label: "Review competitor analysis", status: "done" },
  { label: "Write executive summary", status: "in-progress" },
  { label: "Design landing page", status: "missed" },
  { label: "Prepare demo script", status: "pending" },
];

const statusIcon = {
  done: <CheckCircle2 className="h-4 w-4 text-lime" />,
  "in-progress": <Circle className="h-4 w-4 text-indigo-mid animate-pulse" />,
  missed: <AlertTriangle className="h-4 w-4 text-red-400" />,
  pending: <Circle className="h-4 w-4 text-muted-foreground" />,
};

export default function MockDashboard() {
  return (
    <div className="w-full max-w-md rounded-xl border border-border bg-card p-4 shadow-2xl">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">Today's Plan</span>
        <Badge className="gap-1 border-lime/30 bg-lime/10 text-lime glow-lime-sm text-xs">
          <Sparkles className="h-3 w-3" /> Agent adapted your plan
        </Badge>
      </div>

      {/* Task list */}
      <ul className="space-y-2.5">
        {tasks.map((t) => (
          <li
            key={t.label}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
              t.status === "missed"
                ? "bg-red-500/10 border border-red-500/20"
                : "bg-muted/40"
            }`}
          >
            {statusIcon[t.status as keyof typeof statusIcon]}
            <span
              className={
                t.status === "done"
                  ? "text-muted-foreground line-through"
                  : t.status === "missed"
                    ? "text-red-300"
                    : "text-foreground"
              }
            >
              {t.label}
            </span>
            {t.status === "missed" && (
              <span className="ml-auto flex items-center gap-1 text-xs text-lime">
                <RotateCcw className="h-3 w-3" /> Rescheduled
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Agent note */}
      <div className="mt-4 rounded-lg border border-indigo-mid/30 bg-indigo-deep/30 px-3 py-2 text-xs text-muted-foreground">
        <span className="font-medium text-lime">Agent note:</span> Moved "Design landing page" to tomorrow and extended deadline by 1 day based on your recent velocity.
      </div>
    </div>
  );
}
