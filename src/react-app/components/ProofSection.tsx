import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProofSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    { value: '+430', label: 'Serviços realizados' },
    { value: '23', label: 'Estados atendidos' },
    { value: '97%', label: 'Concluídos com sucesso' },
  ];

  return (
    <section ref={ref} className="relative w-full bg-slate-950 py-16 px-4 overflow-hidden">
      {/* Atmospheric Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-amber-600/5 rounded-full blur-[200px] pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 
            className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Quem trabalha com a gente,<br />
            <span className="text-amber-500">não fica parado</span>
          </h2>
          <p 
            className="text-sm text-amber-600 tracking-wider uppercase font-semibold"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Números de 2025
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 + i * 0.2, ease: "easeOut" }}
            >
              <div 
                className="text-6xl md:text-7xl font-black text-amber-500 mb-4"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {stat.value}
              </div>
              <p 
                className="text-lg text-slate-300 tracking-wide"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Supporting Text */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.9 }}
        >
          <p 
            className="text-xl text-slate-300 leading-relaxed"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Nós somos o braço direito das grandes gráficas. Quando você entra para a MountUp, 
            você entra para um time que joga em nível nacional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
