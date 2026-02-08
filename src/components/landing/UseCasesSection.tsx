import { Rocket, GraduationCap, Laptop, Focus } from "lucide-react";

const cases = [
  { icon: Rocket, title: "Builders & Founders", desc: "Ship faster by staying accountable to your own sprint plan — even when priorities shift." },
  { icon: GraduationCap, title: "Students", desc: "Balance coursework, exams, and projects with an agent that adapts to your study patterns." },
  { icon: Laptop, title: "Remote Workers", desc: "Maintain focus and structure without a manager looking over your shoulder." },
  { icon: Focus, title: "Deep Work Routines", desc: "Protect your flow state with intelligent scheduling that guards your most productive hours." },
];

export default function UseCasesSection() {
  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--bg-alt))]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Built for <span className="text-gradient-lime">Everyone</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
          Whether you're shipping a startup or studying for exams — KazaFlow keeps you moving.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-lime/30 hover:shadow-lg hover:shadow-lime/5"
            >
              <c.icon className="h-8 w-8 text-lime" />
              <h3 className="mt-4 font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
