import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, TrendingUp, MapPin, Users, Clock, CheckCircle2 } from 'lucide-react';

export default function DemandanteBenefitsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const benefits = [
    {
      icon: Shield,
      title: 'Qualidade garantida',
      description: 'Profissionais certificados e avaliados. Todos os serviços com garantia e SLA definido.',
    },
    {
      icon: TrendingUp,
      title: 'Redução de custos',
      description: 'Elimine custos fixos de equipes próprias. Pague apenas pelos serviços executados.',
    },
    {
      icon: MapPin,
      title: 'Cobertura nacional',
      description: 'Atendimento em 279 cidades. Expanda suas operações sem barreiras geográficas.',
    },
    {
      icon: Users,
      title: 'Gestão simplificada',
      description: 'Plataforma completa para acompanhar todas as ordens de serviço em tempo real.',
    },
    {
      icon: Clock,
      title: 'Agilidade operacional',
      description: 'Profissionais disponíveis imediatamente. Reduza prazos e aumente produtividade.',
    },
    {
      icon: CheckCircle2,
      title: 'Conformidade assegurada',
      description: 'Documentação completa e compliance garantido em todas as operações.',
    },
  ];

  return (
    <section 
      id="beneficios"
      ref={ref} 
      className="relative w-full bg-slate-950 py-24 px-4 overflow-hidden"
    >
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
          <h2 
            className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Por que escolher a <span className="text-amber-500">MountUp</span>?
          </h2>
          <p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Transformamos a complexidade das operações de campo em processos simples e eficientes
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-8 hover:border-amber-600/50 hover:bg-slate-900/60 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-amber-600/10 rounded-lg flex items-center justify-center group-hover:bg-amber-600/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 
                  className="text-2xl font-bold text-slate-100 mb-4"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {benefit.title}
                </h3>
                <p 
                  className="text-base text-slate-400 leading-relaxed"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
