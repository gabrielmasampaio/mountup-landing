import { useEffect } from 'react';
import DemandantesHeroSection from '@/react-app/components/DemandantesHeroSection';
import DemandanteProblemSection from '@/react-app/components/DemandanteProblemSection';
import DemandanteAuthoritySection from '@/react-app/components/DemandanteAuthoritySection';
import DemandanteServicesSection from '@/react-app/components/DemandanteServicesSection';
import DemandanteProcessSection from '@/react-app/components/DemandanteProcessSection';
import DemandanteConversionForm from '@/react-app/components/DemandanteConversionForm';
import SimpleFooter from '@/react-app/components/SimpleFooter';

export default function DemandantesPage() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <DemandantesHeroSection />
      <DemandanteProblemSection />
      <DemandanteAuthoritySection />
      <DemandanteServicesSection />
      <DemandanteProcessSection />
      <DemandanteConversionForm />
      <SimpleFooter />
    </div>
  );
}
