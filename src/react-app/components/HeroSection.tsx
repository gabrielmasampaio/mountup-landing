import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

// Custom X (formerly Twitter) Logo Icon
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { scrollY } = useScroll();
  
  // Cinematic parallax - slow camera drift
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
  const backgroundScale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  
  // Title parallax with depth
  const titleY = useTransform(scrollY, [0, 1000], [0, -100]);
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  // Navigation bar fade on scroll
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  
  // Atmospheric breathing glow
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

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background City with Slow Camera Drift */}
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
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-70" />
      </motion.div>

      {/* AR Logistics Grid Overlay - Lines gradually forming */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0" />
              <stop offset="50%" stopColor="#d97706" stopOpacity="1" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Slow forming logistics lines connecting buildings */}
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
          <motion.path
            d="M 150,600 Q 500,450 900,700"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 2.5, ease: "easeInOut" }}
          />
        </svg>

        {/* AR Interface Nodes - appearing as lines connect */}
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

      {/* Sticky Transparent Navigation Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center"
        style={{ 
          opacity: navOpacity,
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Subtle glass backdrop - only visible on scroll */}
        <motion.div 
          className="absolute inset-0 backdrop-blur-sm bg-black/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollY.get() > 50 ? 1 : 0 }}
        />
        
        {/* Official MountUp Logo */}
        <div className="relative z-10 flex items-center space-x-3">
          <img 
            src="https://019b9eec-9c5c-7e48-a8a2-c4168d994a18.mochausercontent.com/icone_mountup.png"
            alt="MountUp"
            className="w-10 h-10 object-contain"
          />
          <span className="text-white font-bold text-xl tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            MountUp
          </span>
        </div>

        {/* Glass-effect Social Icons */}
        <div className="relative z-10 flex space-x-4">
          {[
            { Icon: Facebook, href: '#' },
            { Icon: XIcon, href: '#' },
            { Icon: Linkedin, href: '#' },
            { Icon: Instagram, href: '#' },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1 }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
            >
              <Icon className="w-5 h-5 text-white" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Main MOUNTUP Typography - Pure Opacity + Transform Only */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <div className="text-center">
          {/* Title - ONLY opacity and transform, no overlays or extras */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.15em]"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 50%, #64748b 100%)',
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
            MOUNTUP
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            className="text-amber-500 text-lg md:text-xl tracking-[0.3em] mt-6 font-light"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.8, duration: 1.5, ease: "easeOut" }}
          >
            SOLUÇÕES DE COMUNICAÇÃO VISUAL
          </motion.p>
        </div>
      </motion.div>

      {/* Atmospheric Glow - Slow Breathing */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/10 rounded-full blur-[150px]"
        animate={{ 
          opacity: [glowIntensity, glowIntensity + 0.1, glowIntensity],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Scroll Indicator - Slow fade in */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
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
