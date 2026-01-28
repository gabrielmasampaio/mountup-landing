import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, CheckCircle, Clock, RefreshCw } from 'lucide-react';

export default function DemandanteAuthoritySection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const indicators = [
    {
      icon: MapPin,
      label: 'Capilaridade nacional',
      value: '23 Estados',
      subtitle: '279 Municípios',
      description: 'Atuamos em todo o território nacional',
    },
    {
      icon: CheckCircle,
      label: 'Confiabilidade',
      value: '97,7%',
      subtitle: 'Taxa de sucesso',
      description: '437 serviços com apenas 6 cancelamentos em um ano',
    },
    {
      icon: Clock,
      label: 'Agilidade',
      value: '5 dias',
      subtitle: 'Mediana de execução',
      description: 'Entre a entrega do material e a execução final',
    },
    {
      icon: RefreshCw,
      label: 'Recorrência',
      value: 'Parceiros',
      subtitle: 'de longo prazo',
      description: 'Garantimos continuidade operacional',
    },
  ];

  return (
    <section ref={ref} className="relative w-full bg-slate-950 py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-amber-600/5 rounded-full blur-[200px] pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p 
            className="text-amber-600 text-sm tracking-[0.3em] uppercase font-semibold mb-4"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Números de 2025
          </p>
          <h2 
            className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight leading-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Escala operacional comprovada<br />
            <span className="text-amber-500">em todo o território nacional</span>
          </h2>
        </motion.div>

        {/* Indicators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, i) => {
            const Icon = indicator.icon;
            return (
              <motion.div
                key={i}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-8 hover:border-amber-600/50 hover:bg-slate-900/60 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-amber-600/10 rounded-lg flex items-center justify-center group-hover:bg-amber-600/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-amber-500" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Label */}
                <p 
                  className="text-xs text-amber-600 tracking-wider uppercase font-bold mb-4"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {indicator.label}
                </p>

                {/* Value */}
                <div 
                  className="text-4xl font-black text-slate-100 mb-2"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {indicator.value}
                </div>

                {/* Subtitle */}
                <p 
                  className="text-lg text-amber-500 font-bold mb-4"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {indicator.subtitle}
                </p>

                {/* Description */}
                <p 
                  className="text-sm text-slate-400 leading-relaxed"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {indicator.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
