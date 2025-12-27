import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { CTASection } from '@/components/home/CTASection';
import { FounderSection } from '@/components/home/FounderSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
        <FounderSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-muted-foreground border-t border-border">
        <p>© 2024 Skill → Role → Link. Built by HAMSINY C. Helping people find their perfect career path.</p>
      </footer>
    </div>
  );
};

export default Index;
