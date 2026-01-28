import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-32 md:py-40 px-4 overflow-hidden">
      {/* Cinematic Background Atmosphere */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-amber-950/10 via-transparent to-slate-950"
        animate={{ 
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Atmospheric Glow */}
      <motion.div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-amber-600/8 rounded-full blur-[250px] pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          x: ['-50%', '-45%', '-50%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p 
            className="text-amber-600 text-sm tracking-[0.3em] uppercase font-semibold mb-4"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Sobre a MountUp
          </p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 leading-tight tracking-tight mb-12"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Conectando excelência<br />
            <span className="text-amber-500">em todo o Brasil</span>
          </h2>
        </motion.div>

        {/* Main Description */}
        <motion.div
          className="space-y-8 text-slate-300 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.5 }}
        >
          <p 
            className="text-xl md:text-2xl leading-relaxed text-slate-200"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            A MountUp é especializada em 
            <span className="text-amber-500 font-semibold"> vistoria, instalação e manutenção</span> de comunicação visual, 
            conectando gráficas e grandes marcas a 
            <span className="text-amber-500 font-semibold"> profissionais técnicos de excelência</span> em todo o Brasil.
          </p>
          
          <p 
            className="text-base md:text-lg text-slate-400 leading-relaxed"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Operamos como uma plataforma que organiza e gerencia operações de campo em escala nacional, 
            garantindo qualidade, segurança e visibilidade em cada projeto.
          </p>

          <p 
            className="text-base md:text-lg text-slate-400 leading-relaxed"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Em 2025, já geramos mais de 400 serviços em 23 estados brasileiros, consolidando nossa presença 
            como referência no mercado de comunicação visual.
          </p>
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/20 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 2.5, delay: 1.2 }}
      />
    </section>
  );
}
