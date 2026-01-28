import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function PrestadoresHeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
  const backgroundScale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const titleY = useTransform(scrollY, [0, 1000], [0, -100]);
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  const [glowIntensity, setGlowIntensity] = useState(0.3);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => {
        const delta = (Math.random() - 0.5) * 0.05;
        return Math.max(0.2, Math.min(0.4, prev + delta));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('signup-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background with City Image */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(https://019b9eec-9c5c-7e48-a8a2-c4168d994a18.mochausercontent.com/pexels-luisdalvan-1770775.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4) saturate(0.8)',
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-70" />
      </motion.div>

      {/* AR Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0" />
              <stop offset="50%" stopColor="#d97706" stopOpacity="1" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 100,200 Q 400,100 800,300"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M 200,400 Q 600,200 1000,500"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M 300,150 Q 700,400 1200,250"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 2, ease: "easeInOut" }}
          />
        </svg>

        {/* AR Interface Nodes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_20px_rgba(217,119,6,0.8)]"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { 
              scale: [0, 1.2, 1], 
              opacity: 1 
            } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 1 + i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10 px-4"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <div className="text-center max-w-5xl">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              background: 'linear-gradient(135deg, #ffffff 0%, #f59e0b 50%, #d97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 80px rgba(255,255,255,0.3)',
            }}
            initial={{ 
              opacity: 0,
              y: 30,
            }}
            animate={inView ? { 
              opacity: 1,
              y: 0,
            } : {}}
            transition={{ 
              duration: 2, 
              delay: 0.6,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            Seu próximo grande projeto<br />
            <span className="text-amber-500">começa aqui</span>
          </motion.h1>
          
          <motion.p
            className="text-slate-300 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
          >
            Receba serviços, aumente sua agenda e cresça com as maiores empresas do Brasil
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.p
              className="text-amber-400 text-lg font-semibold"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 2.3, duration: 1 }}
            >
              Junte-se à nossa rede de profissionais qualificados hoje mesmo!
            </motion.p>
            
            <motion.button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/50 text-lg"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              QUERO FAZER PARTE
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Atmospheric Glow */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/10 rounded-full blur-[150px]"
        animate={{ 
          opacity: [glowIntensity, glowIntensity + 0.1, glowIntensity],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={scrollToForm}
        >
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
