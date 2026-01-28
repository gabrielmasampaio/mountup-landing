import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HowItWorksSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const steps = [
    {
      number: '01',
      title: 'Cadastro rápido',
      description: 'Você preenche o formulário abaixo com seus dados e especialidade.',
    },
    {
      number: '02',
      title: 'Validação',
      description: 'Nossa equipe entra em contato para conhecer seu trabalho.',
    },
    {
      number: '03',
      title: 'Mão na massa',
      description: 'Quando pintar serviço na sua cidade, a gente te chama.',
    },
    {
      number: '04',
      title: 'Dinheiro no bolso',
      description: 'Você executa, manda as fotos e recebe.',
    },
  ];

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 px-4 overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-amber-950/10 via-transparent to-slate-950"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            className="text-4xl md:text-5xl font-black text-slate-100 mb-4 tracking-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Como funciona?
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
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

              {/* Connector Line (except for last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-amber-600/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
