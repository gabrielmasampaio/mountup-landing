import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Award, TrendingDown, Zap } from 'lucide-react';

export default function ProblemSolutionSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const solutions = [
    {
      icon: MapPin,
      challenge: 'Logística e Cobertura Geográfica',
      problem: 'Dificuldade em gerenciar equipes em múltiplos locais?',
      solution: 'MountUp oferece cobertura nacional com gestão centralizada em 279 cidades.',
    },
    {
      icon: Award,
      challenge: 'Qualidade e Padronização',
      problem: 'Preocupado com a qualidade e padronização dos serviços?',
      solution: 'Nossos profissionais são certificados e todos os processos são rastreados com evidências.',
    },
    {
      icon: TrendingDown,
      challenge: 'Custos Fixos e Flexibilidade',
      problem: 'Altos custos fixos com equipes internas?',
      solution: 'Pague apenas pelos serviços executados, com agilidade e total flexibilidade.',
    },
    {
      icon: Zap,
      challenge: 'Agilidade e Escalabilidade',
      problem: 'Precisa expandir operações rapidamente sem perder qualidade?',
      solution: 'Escale suas operações instantaneamente com profissionais qualificados disponíveis.',
    },
  ];

  return (
    <section ref={ref} className="relative w-full bg-slate-950 py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-amber-600/5 rounded-full blur-[200px] pointer-events-none"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
            Transformando Desafios em Vantagem Competitiva
          </p>
          <h2 
            className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight leading-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Sua Empresa Focada no Que Importa.<br />
            <span className="text-amber-500">Nós Cuidamos da Execução.</span>
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-8 hover:border-amber-600/50 hover:bg-slate-900/60 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              >
                {/* Subtle Glow on Hover */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-br from-amber-600/0 via-amber-600/5 to-transparent rounded-lg blur-xl -z-10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-amber-600/10 rounded-lg flex items-center justify-center group-hover:bg-amber-600/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-amber-500" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Challenge Label */}
                <div className="mb-4">
                  <span 
                    className="text-xs text-amber-600 tracking-wider uppercase font-bold"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {item.challenge}
                  </span>
                </div>

                {/* The Problem */}
                <div className="mb-4 pb-4 border-b border-slate-700/50">
                  <h3 
                    className="text-xl font-bold text-slate-300 mb-2"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    O Desafio
                  </h3>
                  <p 
                    className="text-base text-slate-400 leading-relaxed"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {item.problem}
                  </p>
                </div>

                {/* The Solution */}
                <div>
                  <h3 
                    className="text-xl font-bold text-amber-500 mb-2"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    A Solução MountUp
                  </h3>
                  <p 
                    className="text-base text-slate-200 leading-relaxed font-medium"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {item.solution}
                  </p>
                </div>

                {/* Accent Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-600/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
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
