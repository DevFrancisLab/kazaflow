import { Activity, FileText, BarChart3 } from "lucide-react";

const logs = [
  { time: "09:14", event: "Detected 2-day streak miss on 'Deep Work' block" },
  { time: "09:15", event: "Reduced daily target from 4h → 2.5h" },
  { time: "09:15", event: "Moved 'Research' task to Thursday" },
  { time: "11:30", event: "User completed rescheduled task — recovery logged" },
];

const reasons = [
  { title: "Workload Reduced", reason: "Completion rate dropped below 40% this week." },
  { title: "Task Reordered", reason: "Deadline proximity outweighed original priority." },
];

export default function ObservabilitySection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Built with{" "}
          <span className="text-gradient-lime">Agent Observability</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
          Every decision the agent makes is tracked, explained, and measurable.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Intervention log */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
              <FileText className="h-4 w-4 text-lime" /> Intervention Log
            </div>
            <ul className="space-y-2">
              {logs.map((l) => (
                <li key={l.time + l.event} className="flex gap-3 text-xs">
                  <span className="shrink-0 font-mono text-muted-foreground">{l.time}</span>
                  <span className="text-foreground/80">{l.event}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recovery rate */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
              <BarChart3 className="h-4 w-4 text-lime" /> Recovery Rate
            </div>
            <div className="flex items-end gap-2 h-32">
              {[35, 50, 42, 68, 75, 82, 91].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-indigo-mid to-lime/80 transition-all"
                    style={{ height: `${v}%` }}
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              Weekly recovery: <span className="text-lime font-semibold">91%</span>
            </p>
          </div>

          {/* Decision reasons */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
              <Activity className="h-4 w-4 text-lime" /> Decision Reasons
            </div>
            <div className="space-y-3">
              {reasons.map((r) => (
                <div key={r.title} className="rounded-lg border border-indigo-mid/30 bg-indigo-deep/20 p-3">
                  <p className="text-xs font-semibold text-lime">{r.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{r.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
