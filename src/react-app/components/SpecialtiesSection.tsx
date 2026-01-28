import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Building2, Wrench } from 'lucide-react';

export default function SpecialtiesSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const specialties = [
    {
      title: 'Aplicação de Vinil',
      icon: Palette,
      description: 'Adesivação de veículos, vitrines e comunicação visual',
    },
    {
      title: 'Lonas e Fachadas',
      icon: Building2,
      description: 'Instalação de fachadas, painéis e estruturas de grande porte',
    },
    {
      title: 'Estruturas em ACM e Metálicas',
      icon: Wrench,
      description: 'Montagem de estruturas metálicas e revestimentos em ACM',
    },
  ];

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 px-4 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-amber-950/10 via-transparent to-slate-950"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 
            className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Estamos selecionando os<br />
            <span className="text-amber-500">melhores profissionais do Brasil</span>
          </h2>
          <p 
            className="text-lg text-slate-300 mb-16 max-w-3xl mx-auto"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Para fazer parte da rede MountUp, você precisa garantir qualidade técnica. 
            Buscamos parceiros especialistas em:
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {specialties.map((specialty, i) => {
            const Icon = specialty.icon;
            return (
              <motion.div
                key={i}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-8 hover:border-amber-600/50 hover:bg-slate-900/60 transition-all duration-500 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 20px 40px rgba(217, 119, 6, 0.2)'
                }}
              >
                {/* Animated Background Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Glowing Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.3) 0%, transparent 50%)',
                  }}
                />

                {/* Icon */}
                <motion.div 
                  className="relative z-10 flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-600/20 to-amber-700/10 rounded-2xl flex items-center justify-center border border-amber-600/30 group-hover:border-amber-500/50 group-hover:shadow-lg group-hover:shadow-amber-600/30 transition-all duration-500">
                    <Icon className="w-10 h-10 text-amber-500 group-hover:text-amber-400 transition-colors duration-500" strokeWidth={2} />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 
                  className="relative z-10 text-2xl font-bold text-slate-100 mb-3 group-hover:text-amber-400 transition-colors duration-500"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {specialty.title}
                </h3>

                {/* Description */}
                <p 
                  className="relative z-10 text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-500"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {specialty.description}
                </p>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-amber-600/30 rounded-tr-xl" />
                </div>

                {/* Bottom Highlight Bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-amber-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Optional: Additional Note */}
        <motion.p
          className="text-slate-500 text-sm mt-12 italic"
          style={{ fontFamily: 'Rajdhani, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Possui experiência em outras especialidades? Entre em contato conosco!
        </motion.p>
      </div>
    </section>
  );
}
