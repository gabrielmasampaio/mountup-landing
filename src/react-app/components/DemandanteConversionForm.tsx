import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function DemandanteConversionForm() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    volume: '',
    regions: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate all fields are filled
    if (!formData.name || !formData.company || !formData.role || !formData.volume || !formData.regions) {
      return; // Browser will show validation messages
    }
    // WhatsApp integration
    const message = `Olá! Meu nome é ${formData.name}, trabalho como ${formData.role} na empresa ${formData.company}. Temos um volume médio de ${formData.volume} instalações/mês e nossas regiões de maior dificuldade são: ${formData.regions}. Gostaria de conversar sobre como a MountUp pode nos ajudar.`;
    const whatsappLink = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="formulario" ref={ref} className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-amber-600/10 rounded-full blur-[200px] pointer-events-none"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 
            className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight leading-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Pronto para ter mais<br />
            <span className="text-amber-500">previsibilidade em 2026?</span>
          </h2>
          <p 
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Nossa meta para este ano é expandir ainda mais a cobertura estratégica e padronizar 
            a execução com SLAs ajustados. Faça parte dessa expansão.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-slate-800/40 backdrop-blur-sm border border-amber-600/30 rounded-2xl p-10 shadow-2xl shadow-amber-900/20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-bold text-slate-300 mb-2"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-600 transition-colors"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
                placeholder="Seu nome completo"
              />
            </div>

            {/* Company and Role */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="company" 
                  className="block text-sm font-bold text-slate-300 mb-2"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-600 transition-colors"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  placeholder="Nome da empresa"
                />
              </div>

              <div>
                <label 
                  htmlFor="role" 
                  className="block text-sm font-bold text-slate-300 mb-2"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Cargo
                </label>
                <input
                  type="text"
                  id="role"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-600 transition-colors"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  placeholder="Seu cargo"
                />
              </div>
            </div>

            {/* Volume */}
            <div>
              <label 
                htmlFor="volume" 
                className="block text-sm font-bold text-slate-300 mb-2"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Volume médio de instalações/mês
              </label>
              <input
                type="text"
                id="volume"
                required
                value={formData.volume}
                onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                className="w-full bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-600 transition-colors"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
                placeholder="Ex: 50 instalações/mês"
              />
            </div>

            {/* Regions */}
            <div>
              <label 
                htmlFor="regions" 
                className="block text-sm font-bold text-slate-300 mb-2"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Regiões de maior dificuldade
              </label>
              <textarea
                id="regions"
                required
                value={formData.regions}
                onChange={(e) => setFormData({ ...formData, regions: e.target.value })}
                rows={4}
                className="w-full bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-600 transition-colors resize-none"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
                placeholder="Descreva as regiões onde você tem mais dificuldade operacional"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-2xl shadow-amber-900/50 hover:shadow-amber-800/70 hover:scale-105 flex items-center justify-center gap-3"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              <Send className="w-5 h-5" />
              <span>FALAR COM UM CONSULTOR</span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
