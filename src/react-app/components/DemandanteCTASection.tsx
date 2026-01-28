import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function DemandanteCTASection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // WhatsApp link
  const whatsappNumber = '5511999999999';
  const whatsappMessage = 'Olá! Sou uma empresa e gostaria de agendar uma demonstração da plataforma MountUp.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-32 px-4 overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-amber-600/15 to-amber-500/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Pre-heading */}
          <motion.p 
            className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-6"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Pronto para começar?
          </motion.p>

          {/* Main Heading */}
          <motion.h2 
            className="text-4xl md:text-6xl font-black text-slate-100 mb-8 tracking-tight leading-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Vamos conversar sobre<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              suas necessidades
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            Nossa equipe está pronta para entender seu desafio e apresentar uma solução 
            customizada para as operações de campo da sua empresa.
          </motion.p>

          {/* CTA Box */}
          <motion.div
            className="bg-slate-800/40 backdrop-blur-sm border border-amber-600/30 rounded-2xl p-12 max-w-3xl mx-auto shadow-2xl shadow-amber-900/20"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="space-y-6">
              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
                {[
                  'Demonstração personalizada da plataforma',
                  'Análise de custos e ROI para seu caso',
                  'Proposta comercial sob medida',
                  'Consultoria gratuita de processos'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p 
                      className="text-slate-200 text-sm font-medium"
                      style={{ fontFamily: 'Rajdhani, sans-serif' }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-5 px-12 rounded-lg transition-all duration-300 shadow-2xl shadow-amber-900/50 hover:shadow-amber-800/70 hover:scale-105"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                <MessageCircle className="w-6 h-6" />
                <span>AGENDE UMA DEMONSTRAÇÃO</span>
              </a>

              {/* Footer Note */}
              <p 
                className="text-slate-500 text-sm mt-6"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Sem compromisso. Resposta em até 24 horas.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
