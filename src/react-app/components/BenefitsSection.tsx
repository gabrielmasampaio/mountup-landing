import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';

export default function BenefitsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const benefits = [
    {
      title: 'Serviço garantido',
      description: 'Nós fechamos com o cliente grande e passamos a ordem de serviço pronta para você.',
    },
    {
      title: 'Pagamento sem enrolação',
      description: 'Quem te paga é a MountUp. Segurança total de receber pelo seu trabalho.',
    },
    {
      title: 'Trabalho na sua região',
      description: 'Já atendemos em 279 cidades. Tem demanda chegando perto de você.',
    },
  ];

  return (
    <section ref={ref} className="relative w-full bg-slate-950 py-16 px-4 overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-amber-600/5 rounded-full blur-[200px] pointer-events-none"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 
            className="text-4xl md:text-5xl font-black text-slate-100 mb-4 tracking-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Mais segurança e agenda cheia<br />
            <span className="text-amber-500">para o seu negócio</span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-8 hover:border-amber-600/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 + i * 0.2, ease: "easeOut" }}
            >
              <div className="mb-6">
                <CheckCircle2 className="w-12 h-12 text-amber-500" strokeWidth={1.5} />
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
          ))}
        </div>
      </div>
    </section>
  );
}
