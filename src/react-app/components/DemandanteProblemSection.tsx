import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertCircle } from 'lucide-react';

export default function DemandanteProblemSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-red-600/5 rounded-full blur-[200px] pointer-events-none"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-20 h-20 bg-red-600/10 rounded-full flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-red-500" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 
            className="text-4xl md:text-5xl font-black text-slate-100 mb-8 tracking-tight leading-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Sua produção é rápida.<br />
            <span className="text-red-500">Mas o pós-entrega vira gargalo?</span>
          </h2>
        </motion.div>

        {/* Problem Description */}
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <p 
            className="text-xl md:text-2xl text-slate-300 leading-relaxed text-center"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Sabemos que encontrar instaladores, agendar visitas e coordenar deslocamentos 
            trava o seu cronograma. Sem processos claros, cada instalação vira uma incerteza, 
            gerando risco de <span className="text-red-400 font-bold">atraso</span>, <span className="text-red-400 font-bold">retrabalho</span> e <span className="text-red-400 font-bold">desperdício de material</span>.
          </p>
        </motion.div>

        {/* Solution Statement */}
        <motion.div
          className="mt-16 bg-slate-900/60 backdrop-blur-sm border border-amber-600/30 rounded-2xl p-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          <p 
            className="text-2xl md:text-3xl text-slate-100 leading-relaxed font-bold"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            A MountUp <span className="text-amber-500">elimina esse atrito</span>.<br />
            Você foca na produção, nós garantimos o campo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
