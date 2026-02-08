import { X, Check } from "lucide-react";

const normal = [
  "Static plans that never change",
  "Repetitive, ignorable reminders",
  "No adaptation when you fall behind",
  "User must manually fix schedule",
  "No insight into why you failed",
];

const kaza = [
  "Adaptive planning that evolves",
  "Agent reasoning & smart nudges",
  "Automatic rescoping on failure",
  "Recovery built into the system",
  "Behavior-aware scheduling",
];

export default function ComparisonSection() {
  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--bg-alt))]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Why KazaFlow{" "}
          <span className="text-gradient-lime">Works Better</span>
        </h2>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
          {/* Normal */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-5 text-lg font-semibold text-muted-foreground">Normal Apps</h3>
            <ul className="space-y-3">
              {normal.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* KazaFlow */}
          <div className="rounded-xl border border-lime/30 bg-card p-6 glow-lime-sm">
            <h3 className="mb-5 text-lg font-semibold text-lime">KazaFlow</h3>
            <ul className="space-y-3">
              {kaza.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
