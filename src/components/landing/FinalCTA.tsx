import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-lime/8 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold md:text-5xl">
          Ready to <span className="text-gradient-lime">Kaza?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          Let your AI accountability agent keep you on track.
        </p>
        <Button
          size="lg"
          className="mt-8 glow-lime rounded-full bg-lime text-primary-foreground font-semibold hover:bg-lime-dim text-base px-10 py-6 text-lg"
        >
          Launch My Adaptive Plan
        </Button>
      </div>
    </section>
  );
}
