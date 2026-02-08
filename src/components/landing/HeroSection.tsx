import { Button } from "@/components/ui/button";
import MockDashboard from "./MockDashboard";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-mid/20 blur-[120px]" />
      <div className="pointer-events-none absolute -top-20 left-1/3 h-[300px] w-[300px] rounded-full bg-lime/5 blur-[100px]" />

      <div className="container relative mx-auto flex flex-col items-center gap-12 px-4 lg:flex-row lg:gap-16">
        {/* Copy */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Lock In.{" "}
            <span className="text-gradient-lime">Stay in Flow.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
            KazaFlow is an AI accountability agent that adapts your work plan when you fall behind — so your goals still get done.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button size="lg" className="glow-lime rounded-full bg-lime text-primary-foreground font-semibold hover:bg-lime-dim text-base px-8">
              Start My Plan
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-border text-foreground hover:bg-muted text-base px-8">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Mock dashboard */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <MockDashboard />
        </div>
      </div>
    </section>
  );
}
