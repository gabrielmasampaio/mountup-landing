import { useEffect } from 'react';
import HeroSection from '@/react-app/components/HeroSection';
import AboutSection from '@/react-app/components/AboutSection';
import SelectorSection from '@/react-app/components/SelectorSection';
import SimpleFooter from '@/react-app/components/SimpleFooter';

export default function HomePage() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SelectorSection />
      <SimpleFooter />
    </div>
  );
}
