import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router';
import { ArrowRight, Wrench, Building2 } from 'lucide-react';

export default function SelectorSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const navigate = useNavigate();

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24 px-4 overflow-hidden">
      {/* Single Atmospheric Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-amber-600/8 rounded-full blur-[200px] pointer-events-none"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 
            className="text-4xl md:text-5xl font-black text-slate-100 mb-3 tracking-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Qual é o seu<br />
            <span className="text-amber-500">perfil?</span>
          </h2>
          <p 
            className="text-base text-slate-400"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Escolha a opção que melhor descreve você
          </p>
        </motion.div>

        {/* Selection Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Prestador Card */}
          <motion.button
            onClick={() => navigate('/prestadores')}
            className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-8 hover:border-amber-600/50 transition-all duration-300 text-left overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-amber-600/10 rounded-lg flex items-center justify-center border border-amber-600/20 group-hover:bg-amber-600/15 transition-all duration-300">
                  <Wrench className="w-7 h-7 text-amber-500" strokeWidth={1.5} />
                </div>
              </div>

              <h3 
                className="text-2xl md:text-3xl font-black text-slate-100 mb-3"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Sou Prestador
              </h3>
              <p 
                className="text-sm text-slate-400 mb-6 leading-relaxed"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Receba serviços de grandes empresas na sua região com pagamento garantido
              </p>
              
              {/* Arrow CTA */}
              <div className="flex items-center space-x-2 text-amber-500 group-hover:translate-x-2 transition-transform duration-300">
                <span 
                  className="text-sm font-semibold tracking-wider uppercase"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Saiba mais
                </span>
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </div>
            </div>
          </motion.button>

          {/* Demandante Card */}
          <motion.button
            onClick={() => navigate('/demandantes')}
            className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-8 hover:border-amber-600/50 transition-all duration-300 text-left overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-amber-600/10 rounded-lg flex items-center justify-center border border-amber-600/20 group-hover:bg-amber-600/15 transition-all duration-300">
                  <Building2 className="w-7 h-7 text-amber-500" strokeWidth={1.5} />
                </div>
              </div>

              <h3 
                className="text-2xl md:text-3xl font-black text-slate-100 mb-3"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Sou Demandante
              </h3>
              <p 
                className="text-sm text-slate-400 mb-6 leading-relaxed"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Terceirize suas operações de campo com segurança e visibilidade total
              </p>
              
              {/* Arrow CTA */}
              <div className="flex items-center space-x-2 text-amber-500 group-hover:translate-x-2 transition-transform duration-300">
                <span 
                  className="text-sm font-semibold tracking-wider uppercase"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Saiba mais
                </span>
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </div>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Bottom Divider */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/20 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  );
}
