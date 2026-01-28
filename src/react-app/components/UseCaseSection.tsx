import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function UseCaseSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  const panels = [
    {
      title: 'INSTALAÇÃO',
      subtitle: 'Implantação certificada em campo',
      image: 'https://019b9eec-9c5c-7e48-a8a2-c4168d994a18.mochausercontent.com/centauro.jpg',
    },
    {
      title: 'VISTORIA',
      subtitle: 'Verificação e conformidade',
      image: 'https://019b9eec-9c5c-7e48-a8a2-c4168d994a18.mochausercontent.com/vistoria.jpg',
      isPrimary: true,
    },
    {
      title: 'MANUTENÇÃO',
      subtitle: 'Continuidade operacional',
      image: 'https://019b9eec-9c5c-7e48-a8a2-c4168d994a18.mochausercontent.com/arrumando.jpg',
    },
  ];

  return (
    <section ref={ref} className="relative w-full bg-slate-950 py-20 overflow-hidden">
      {/* Section Title */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          Operações Reais. Impacto Real.
        </h2>
        <p className="text-slate-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          Como a MountUp opera em campo em escala empresarial
        </p>
      </motion.div>

      {/* Cinematic Triptych - Three Equal Panels */}
      <div className="relative w-full h-[70vh] md:h-[75vh] grid grid-cols-3">
        {panels.map((panel, i) => {
          const isHovered = hoveredPanel === i;
          const isOtherHovered = hoveredPanel !== null && hoveredPanel !== i;

          return (
            <motion.div
              key={i}
              className="relative cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: i * 0.15,
                duration: 1.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onHoverStart={() => setHoveredPanel(i)}
              onHoverEnd={() => setHoveredPanel(null)}
            >
              {/* Background Image Layer - Full Coverage */}
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${panel.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  filter: isOtherHovered 
                    ? 'grayscale(60%) brightness(0.4) blur(2px)' 
                    : isHovered 
                      ? 'grayscale(0%) brightness(0.6) blur(0px)'
                      : 'grayscale(40%) brightness(0.5) blur(1px)',
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-slate-950/50" />

              {/* Text Content Overlay - Bottom Left, Consistent Across All Panels */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.h3
                  className="text-2xl md:text-3xl font-black text-slate-100 mb-2 tracking-wider"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  animate={{
                    textShadow: isHovered 
                      ? '0 0 20px rgba(217, 119, 6, 0.6), 0 2px 8px rgba(0,0,0,0.8)' 
                      : '0 2px 8px rgba(0,0,0,0.8)',
                    color: isHovered ? '#fffbeb' : '#f1f5f9',
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {panel.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-slate-300 tracking-wide"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  animate={{
                    opacity: isOtherHovered ? 0.4 : 1,
                    color: isHovered ? '#fbbf24' : '#cbd5e1',
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {panel.subtitle}
                </motion.p>
              </div>

              {/* Primary Focus Indicator for Center Panel - Top Edge Only */}
              {panel.isPrimary && (
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"
                  animate={{
                    opacity: isHovered ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.6 }}
                />
              )}

              {/* Panel Separator Lines */}
              {i < panels.length - 1 && (
                <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700/40 to-transparent" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Subtle Atmospheric Background Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[400px] bg-amber-600/5 rounded-full blur-[200px] pointer-events-none -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
