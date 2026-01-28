import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Wrench } from 'lucide-react';

export default function DemandanteServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Search,
      title: 'Vistorias técnicas',
      percentage: '41%',
      total: '181',
      description: 'Validamos o local antes da produção para reduzir o risco de surpresas e erros de medida.',
    },
    {
      icon: Wrench,
      title: 'Instalações e positivação',
      percentage: '59%',
      total: '256',
      description: 'Execução técnica no PDV realizada com padronização e relatório completo de entrega.',
    },
  ];

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-amber-600/5 rounded-full blur-[200px] pointer-events-none"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
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
            Nossos Serviços em 2025
          </p>
          <h2 
            className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight leading-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Controle total:<br />
            <span className="text-amber-500">Do levantamento à positivação</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-10 hover:border-amber-600/50 hover:bg-slate-900/60 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 + i * 0.2, ease: "easeOut" }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-br from-amber-600/0 via-amber-600/5 to-transparent rounded-xl blur-xl -z-10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-amber-600/10 rounded-lg flex items-center justify-center group-hover:bg-amber-600/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-baseline gap-4 mb-6">
                  <div 
                    className="text-5xl font-black text-amber-500"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {service.percentage}
                  </div>
                  <div 
                    className="text-slate-400 text-sm"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    {service.total} serviços
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl font-bold text-slate-100 mb-4"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-base text-slate-300 leading-relaxed"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {service.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
