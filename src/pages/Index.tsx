import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import AgentIntelligence from "@/components/landing/AgentIntelligence";
import ComparisonSection from "@/components/landing/ComparisonSection";
import ObservabilitySection from "@/components/landing/ObservabilitySection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <HowItWorks />
      <AgentIntelligence />
      <ComparisonSection />
      <ObservabilitySection />
      <UseCasesSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
