import { Target, Cpu, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Set Your Goal",
    desc: "Define what you want to achieve — a project, habit, or milestone.",
  },
  {
    icon: Cpu,
    title: "AI Builds Your Plan",
    desc: "KazaFlow creates a personalized, time-aware action plan using AI.",
  },
  {
    icon: RefreshCw,
    title: "Agent Adapts When You Slip",
    desc: "Fall behind? The agent reschedules, re-prioritizes, and keeps you on track.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28 bg-[hsl(var(--bg-alt))]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          How It <span className="text-gradient-lime">Works</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
          Three simple steps from goal to adaptive execution.
        </p>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          {/* Connector line (desktop) */}
          <div className="pointer-events-none absolute top-12 left-[16.6%] right-[16.6%] hidden h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent md:block" />

          {steps.map((s, i) => (
            <div key={s.title} className="relative flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card shadow-lg">
                <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-lime text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <s.icon className="h-8 w-8 text-lime" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
