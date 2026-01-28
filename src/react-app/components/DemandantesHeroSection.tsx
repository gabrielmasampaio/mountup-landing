import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function DemandantesHeroSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://019b9eec-9c5c-7e48-a8a2-c4168d994a18.mochausercontent.com/image.png_4093.png)',
        }}
      />
      
      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/85 to-black/90"
        style={{ scale, opacity }}
      />
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-700/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ 
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Logo */}
          <motion.img 
            src="https://019b9eec-9c5c-7e48-a8a2-c4168d994a18.mochausercontent.com/icone_mountup.png"
            alt="MountUp"
            className="w-24 h-24 mx-auto mb-8 object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          />

          {/* Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl font-black text-slate-100 mb-6 tracking-tight leading-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            Material entregue.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              Instalação resolvida.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            Conectamos sua produção ao ponto de venda com <span className="text-amber-500 font-bold">precisão, agilidade e confiabilidade</span>. 
            Nossa rede nacional de prestadores qualificados garante que seus produtos sejam instalados 
            com excelência em todo o Brasil.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <a
              href="#formulario"
              className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-2xl shadow-amber-900/50 hover:shadow-amber-800/70 hover:scale-105"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              QUERO RESOLVER MINHA LOGÍSTICA
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-amber-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
