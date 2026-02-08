import { AlertTriangle, RefreshCw, ArrowUpDown, Scaling, Brain, Eye } from "lucide-react";

const features = [
  { icon: AlertTriangle, title: "Failure Pattern Detection", desc: "Identifies recurring blockers and procrastination habits to intervene proactively." },
  { icon: RefreshCw, title: "Automatic Plan Adjustment", desc: "Reschedules missed tasks and adjusts timelines without manual intervention." },
  { icon: ArrowUpDown, title: "Priority Reordering", desc: "Dynamically re-ranks tasks based on deadlines, energy, and dependencies." },
  { icon: Scaling, title: "Workload Rescoping", desc: "Reduces scope intelligently when the remaining time can't fit the original plan." },
  { icon: Brain, title: "Behavior Learning Over Time", desc: "Gets smarter about your habits, pace, and productive hours each week." },
  { icon: Eye, title: "Transparent Agent Decisions", desc: "Every adaptation comes with a clear reason — no black-box changes." },
];

export default function AgentIntelligence() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Not a To-Do List.{" "}
          <span className="text-gradient-lime">An AI Agent.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
          KazaFlow goes beyond reminders — it thinks, adapts, and explains.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-lime/40 hover:shadow-lg hover:shadow-lime/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-deep">
                <f.icon className="h-5 w-5 text-lime" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
