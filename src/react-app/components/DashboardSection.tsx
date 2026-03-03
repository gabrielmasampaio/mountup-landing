import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrench, ClipboardCheck, Settings } from 'lucide-react';
import { useState } from 'react';

type Service = {
  icon: typeof Wrench;
  title: string;
  subtitle: string;
  description: string;
  slideFrom: 'left' | 'right';
  delay: number;
};

function ServiceCard({ service, inView }: { service: Service; inView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [sweepPosition, setSweepPosition] = useState(-100);

  return (
    <motion.div
      className="relative"
      initial={{
        opacity: 0,
        x: service.slideFrom === 'left' ? -100 : 100,
        filter: 'blur(8px)',
      }}
      animate={inView ? {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
      } : {}}
      transition={{
        delay: service.delay,
        duration: 1.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onHoverStart={() => {
        setIsHovered(true);
        setSweepPosition(-100);
        const interval = setInterval(() => {
          setSweepPosition((prev) => {
            if (prev >= 200) {
              clearInterval(interval);
              return 200;
            }
            return prev + 8;
          });
        }, 16);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
      }}
    >
      {/* Depth Layer 1 - Deep Shadow Base */}
      <div className="absolute inset-0 bg-black/40 blur-2xl translate-y-4 -z-30" />

      {/* Depth Layer 2 - Mid Shadow */}
      <div className="absolute inset-0 bg-slate-900/60 blur-xl translate-y-2 -z-20" />

      {/* Main Service Panel - Compact Size */}
      <motion.div
        className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-slate-700/50 overflow-hidden cursor-pointer"
        style={{
          borderRadius: '4px',
        }}
        animate={{
          y: isHovered ? -6 : 0,
          borderColor: isHovered ? 'rgba(217, 119, 6, 0.5)' : 'rgba(148, 163, 184, 0.5)',
          boxShadow: isHovered
            ? '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(217, 119, 6, 0.15)'
            : '0 12px 40px rgba(0, 0, 0, 0.4)',
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Multi-Layer Background for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/60 via-slate-850/60 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-transparent" />

        {/* Atmospheric Texture */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMzUiLz48L3N2Zz4=)',
          backgroundSize: '200px 200px',
        }} />

        {/* Muted Gold Border Highlight on Hover */}
        <motion.div
          className="absolute inset-0 border-2 border-amber-600/0 pointer-events-none"
          style={{ borderRadius: '4px' }}
          animate={{
            borderColor: isHovered ? 'rgba(217, 119, 6, 0.4)' : 'rgba(217, 119, 6, 0)',
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Content Grid - Medium Padding */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8">
          {/* Icon Section - Smaller, Left-Aligned */}
          <div className="md:col-span-2 flex items-center justify-center md:justify-start">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-slate-700/90 to-slate-800/90 flex items-center justify-center relative"
              style={{ borderRadius: '4px' }}
              animate={{
                boxShadow: isHovered
                  ? '0 8px 20px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(217, 119, 6, 0.1)'
                  : '0 6px 15px rgba(0, 0, 0, 0.3)',
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent" style={{ borderRadius: '4px' }} />
              <service.icon className="relative z-10 w-8 h-8 text-amber-500" />
            </motion.div>
          </div>

          {/* Text Content - Normal Section Heading Size */}
          <div className="md:col-span-10 flex flex-col justify-center space-y-3">
            {/* Service Name with Light Sweep Effect */}
            <div className="relative overflow-hidden">
              <motion.h3
                className="text-2xl md:text-3xl font-black text-slate-100 tracking-wide"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
                animate={{
                  color: isHovered ? '#fffbeb' : '#f1f5f9',
                  textShadow: isHovered
                    ? '0 0 20px rgba(217, 119, 6, 0.4), 0 2px 8px rgba(0,0,0,0.6)'
                    : '0 2px 8px rgba(0,0,0,0.4)',
                  letterSpacing: isHovered ? '0.05em' : '0.025em',
                }}
                transition={{ duration: 0.5 }}
              >
                {service.title}
              </motion.h3>

              {/* Light Sweep Across Text */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                  style={{
                    left: `${sweepPosition}%`,
                    width: '150px',
                  }}
                />
              )}
            </div>

            {/* Subtitle */}
            <p
              className="text-base md:text-lg text-amber-500 font-bold tracking-wide"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              {service.subtitle}
            </p>

            {/* Description */}
            <p
              className="text-slate-300 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              {service.description}
            </p>
          </div>
        </div>

        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />

        {/* Bottom Accent Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-600/0 to-transparent"
          animate={{
            background: isHovered
              ? 'linear-gradient(to right, transparent, rgba(217, 119, 6, 0.6), transparent)'
              : 'linear-gradient(to right, transparent, rgba(217, 119, 6, 0), transparent)',
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* External Glow Layer */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-br from-amber-600/0 via-amber-600/5 to-transparent blur-2xl -z-10"
        style={{ borderRadius: '8px' }}
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
}

export default function DashboardSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services: Service[] = [
    {
      icon: Wrench,
      title: 'INSTALAÇÃO',
      subtitle: 'Implantação profissional em campo',
      description: 'Instalação com processos padronizados e rastreabilidade completa.',
      slideFrom: 'left',
      delay: 0,
    },
    {
      icon: ClipboardCheck,
      title: 'VISTORIA',
      subtitle: 'Verificação e conformidade',
      description: 'Vistorias no local com evidências documentadas e relatórios em tempo real.',
      slideFrom: 'right',
      delay: 0.3,
    },
    {
      icon: Settings,
      title: 'MANUTENÇÃO',
      subtitle: 'Suporte operacional contínuo',
      description: 'Manutenção preventiva e corretiva para garantir desempenho de longo prazo.',
      slideFrom: 'left',
      delay: 0.6,
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen w-full bg-slate-950 flex items-center justify-center py-24 px-4 md:px-8 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Minimal Grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.2) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative w-full" style={{ maxWidth: '1100px' }}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Nossos Serviços
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Serviços de comunicação visual para empresas
          </p>
        </motion.div>

        {/* Compact Service Panels - Vertically Stacked with Generous Spacing Between */}
        <div className="space-y-16 md:space-y-20">
          {services.map((service, i) => {
            return (
              <ServiceCard key={i} service={service} inView={inView} />
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className="text-slate-500 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Soluções completas de serviços em comunicação visual
          </p>
        </motion.div>
      </div>

      {/* Subtle Background Accent - Breathing */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-600/5 rounded-full blur-[200px]"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
