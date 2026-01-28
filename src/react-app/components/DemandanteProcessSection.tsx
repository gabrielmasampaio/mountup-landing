import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Factory, Users, Zap, CheckCircle } from 'lucide-react';

export default function DemandanteProcessSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: Factory,
      number: '01',
      title: 'Você produz',
      description: 'Foco total na qualidade da impressão e do material.',
    },
    {
      icon: Users,
      number: '02',
      title: 'A MountUp assume',
      description: 'Recebemos a demanda e ativamos nossa rede nacional.',
    },
    {
      icon: Zap,
      number: '03',
      title: 'Execução ágil',
      description: 'O material chega e a execução acontece com uma mediana de 8 dias desde a solicitação.',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Entrega validada',
      description: 'Você recebe a comprovação do serviço, garantindo previsibilidade e controle do início ao fim.',
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
            Processo Simplificado
          </p>
          <h2 
            className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight leading-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Transforme a instalação em<br />
            <span className="text-amber-500">parte estável do seu fluxo</span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              >
                <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-6 hover:border-amber-600/30 transition-all duration-500 h-full">
                  {/* Step Number */}
                  <div 
                    className="text-6xl font-black text-amber-500/20 mb-4"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-amber-600/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-amber-500" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Step Title */}
                  <h3 
                    className="text-xl font-bold text-slate-100 mb-3"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p 
                    className="text-sm text-slate-400 leading-relaxed"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (except for last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-amber-600/30 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
