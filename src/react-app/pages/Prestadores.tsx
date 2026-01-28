import { useEffect } from 'react';
import PrestadoresHeroSection from '@/react-app/components/PrestadoresHeroSection';
import BenefitsSection from '@/react-app/components/BenefitsSection';
import SpecialtiesSection from '@/react-app/components/SpecialtiesSection';
import ProofSection from '@/react-app/components/ProofSection';
import HowItWorksSection from '@/react-app/components/HowItWorksSection';
import SignupFormSection from '@/react-app/components/SignupFormSection';
import SimpleFooter from '@/react-app/components/SimpleFooter';

export default function PrestadoresPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <PrestadoresHeroSection />
      <BenefitsSection />
      <SpecialtiesSection />
      <ProofSection />
      <HowItWorksSection />
      <SignupFormSection />
      <SimpleFooter />
    </div>
  );
}
