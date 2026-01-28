import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle } from 'lucide-react';

export default function FooterSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // WhatsApp link - Substitua o número pelo número real do WhatsApp da empresa
  const whatsappNumber = '5511999999999'; // Formato: código do país + DDD + número
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre os serviços da MountUp.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section ref={ref} className="relative min-h-screen w-full flex flex-col items-center justify-center py-32 px-4 overflow-hidden">
      {/* Background - Slow Gradient Drift */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0f172a 0%, #000000 100%)',
        }}
      />
      
      {/* Subtle Ambient Motion - Very Slow Moving Gradient */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.8) 0%, transparent 70%)',
        }}
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['-5%', '5%', '-5%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 max-w-6xl w-full text-center flex flex-col items-center justify-center space-y-24">
        {/* Cinematic Headline - Two Distinct Moments - FASTER TIMING */}
        <div className="space-y-4">
          {/* First Line - "Operações em campo." */}
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-100 tracking-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3
            }}
          >
            Sua Operação.
          </motion.h2>

          {/* Second Line - "Sob controle." - Appears After Shorter Delay */}
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-100 tracking-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 1.5
            }}
          >
            Sob controle.
          </motion.h2>
        </div>

        {/* Call to Action - Premium WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
            delay: 3
          }}
        >
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold text-lg rounded-lg tracking-wide overflow-hidden group cursor-pointer"
            style={{ 
              fontFamily: 'Rajdhani, sans-serif',
              boxShadow: '0 10px 40px rgba(217, 119, 6, 0.4), 0 0 60px rgba(217, 119, 6, 0.2)',
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 60px rgba(217, 119, 6, 0.6), 0 0 80px rgba(217, 119, 6, 0.3)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Gradient Background Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.4 }}
            />
            
            {/* Shine Effect on Hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Pulsing Glow Border */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                boxShadow: '0 0 20px rgba(217, 119, 6, 0.5)',
              }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(217, 119, 6, 0.5)',
                  '0 0 30px rgba(217, 119, 6, 0.7)',
                  '0 0 20px rgba(217, 119, 6, 0.5)',
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* WhatsApp Icon */}
            <MessageCircle className="relative z-10 w-6 h-6" strokeWidth={2.5} />
            
            {/* Button Text */}
            <span className="relative z-10 font-black">
              Fale com especialista
            </span>

            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          </motion.a>
        </motion.div>

        {/* Spacer for Footer */}
        <div className="h-32" />

        {/* Subtle Divider Above Footer */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ 
            duration: 2,
            delay: 4
          }}
        />

        {/* Footer - Official Logo + Text */}
        <motion.div
          className="space-y-6 w-full"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ 
            duration: 2,
            delay: 4.5
          }}
        >
          {/* Official Logo + Powered By */}
          <div className="flex items-center justify-center space-x-3">
            <img 
              src="https://019b9eec-9c5c-7e48-a8a2-c4168d994a18.mochausercontent.com/icone_mountup.png"
              alt="MountUp"
              className="w-8 h-8 object-contain opacity-90"
            />
            <p
              className="text-slate-400 text-sm tracking-[0.2em] uppercase"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Desenvolvido pela <span className="text-slate-300 font-semibold">MountUp</span>
            </p>
          </div>

          {/* Legal Links - Subtle But Visible */}
          <div className="flex items-center justify-center space-x-5 text-xs text-slate-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            <a href="#" className="hover:text-slate-400 transition-colors duration-300">
              Privacidade
            </a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-slate-400 transition-colors duration-300">
              Termos
            </a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-slate-400 transition-colors duration-300">
              Contato
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-700" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            © 2026 MountUp
          </p>
        </motion.div>
      </div>

      {/* Very Subtle Atmospheric Glow */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-600/4 rounded-full blur-[250px] pointer-events-none"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}
