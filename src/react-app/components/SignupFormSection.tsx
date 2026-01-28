import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function SignupFormSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    state: '',
    specialty: '',
    hasMEI: '',
  });

  const [errors, setErrors] = useState({
    whatsapp: '',
    state: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Real-time validation for WhatsApp
  const validateWhatsApp = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length === 0) return '';
    if (cleaned.length < 10 || cleaned.length > 11) {
      return 'WhatsApp deve ter 10 ou 11 dígitos (com DDD)';
    }
    return '';
  };

  // Real-time validation for state
  const validateState = (value: string): string => {
    if (value.length === 0) return '';
    if (value.length !== 2) {
      return 'Estado deve ter 2 letras';
    }
    if (!/^[A-Z]{2}$/.test(value)) {
      return 'Use apenas letras maiúsculas';
    }
    return '';
  };

  // Format WhatsApp as user types
  const formatWhatsApp = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 7) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    if (cleaned.length <= 11) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    }
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
  };

  const handleWhatsAppChange = (value: string) => {
    const formatted = formatWhatsApp(value);
    setFormData({ ...formData, whatsapp: formatted });
    setErrors({ ...errors, whatsapp: validateWhatsApp(value) });
  };

  const handleStateChange = (value: string) => {
    const uppercase = value.toUpperCase();
    setFormData({ ...formData, state: uppercase });
    setErrors({ ...errors, state: validateState(uppercase) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation
    const whatsappError = validateWhatsApp(formData.whatsapp);
    const stateError = validateState(formData.state);
    
    if (whatsappError || stateError) {
      setErrors({ whatsapp: whatsappError, state: stateError });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section id="signup-form" ref={ref} className="relative w-full bg-slate-950 py-16 px-4 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-amber-600/5 rounded-full blur-[200px] pointer-events-none"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <CheckCircle2 className="w-24 h-24 mx-auto text-amber-500 mb-8" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Cadastro recebido com <span className="text-amber-500">sucesso!</span>
          </motion.h2>

          <motion.p
            className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Obrigado por se cadastrar! Nossa equipe entrará em contato em breve para dar continuidade ao seu cadastro.
          </motion.p>

          <motion.div
            className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h3 
              className="text-2xl font-bold text-slate-100 mb-4"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Próximos passos
            </h3>
            <ul className="text-left text-slate-300 space-y-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3 font-bold">1.</span>
                <span>Aguarde o contato da nossa equipe via WhatsApp</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3 font-bold">2.</span>
                <span>Prepare sua documentação (MEI ou CNPJ, se aplicável)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3 font-bold">3.</span>
                <span>Fique atento às oportunidades de serviço na sua região</span>
              </li>
            </ul>
          </motion.div>

          <motion.p
            className="text-sm text-slate-400"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Enquanto aguarda, siga a MountUp nas redes sociais para ficar por dentro das novidades
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section id="signup-form" ref={ref} className="relative w-full bg-slate-950 py-16 px-4 overflow-hidden">
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-amber-600/5 rounded-full blur-[200px] pointer-events-none"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
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
            Garanta seu lugar na nossa<br />
            <span className="text-amber-500">base de instaladores</span>
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="space-y-6">
            {/* Nome Completo */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-semibold text-slate-300 mb-2"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-600/50 transition-colors"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            {/* WhatsApp with validation */}
            <div>
              <label 
                htmlFor="whatsapp" 
                className="block text-sm font-semibold text-slate-300 mb-2"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                WhatsApp (com DDD)
              </label>
              <input
                type="tel"
                id="whatsapp"
                required
                placeholder="(11) 99999-9999"
                className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                  errors.whatsapp 
                    ? 'border-red-500/50 focus:border-red-600/50' 
                    : 'border-slate-700/50 focus:border-amber-600/50'
                }`}
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
                value={formData.whatsapp}
                onChange={(e) => handleWhatsAppChange(e.target.value)}
                disabled={isSubmitting}
              />
              {errors.whatsapp && (
                <p className="text-red-400 text-sm mt-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {errors.whatsapp}
                </p>
              )}
            </div>

            {/* Cidade e Estado */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label 
                  htmlFor="city" 
                  className="block text-sm font-semibold text-slate-300 mb-2"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Cidade
                </label>
                <input
                  type="text"
                  id="city"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-600/50 transition-colors"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label 
                  htmlFor="state" 
                  className="block text-sm font-semibold text-slate-300 mb-2"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Estado
                </label>
                <input
                  type="text"
                  id="state"
                  required
                  placeholder="SP"
                  maxLength={2}
                  className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none transition-colors uppercase ${
                    errors.state 
                      ? 'border-red-500/50 focus:border-red-600/50' 
                      : 'border-slate-700/50 focus:border-amber-600/50'
                  }`}
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  value={formData.state}
                  onChange={(e) => handleStateChange(e.target.value)}
                  disabled={isSubmitting}
                />
                {errors.state && (
                  <p className="text-red-400 text-sm mt-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {errors.state}
                  </p>
                )}
              </div>
            </div>

            {/* Especialidade */}
            <div>
              <label 
                htmlFor="specialty" 
                className="block text-sm font-semibold text-slate-300 mb-2"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Qual sua principal especialidade?
              </label>
              <select
                id="specialty"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 focus:outline-none focus:border-amber-600/50 transition-colors"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                disabled={isSubmitting}
              >
                <option value="">Selecione uma especialidade</option>
                <option value="adesivo">Adesivo</option>
                <option value="fachada">Fachada</option>
                <option value="eletrica">Elétrica</option>
                <option value="altura">Trabalho em altura</option>
              </select>
            </div>

            {/* MEI */}
            <div>
              <label 
                className="block text-sm font-semibold text-slate-300 mb-3"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                Possui MEI ou Empresa Aberta?
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasMEI"
                    value="sim"
                    required
                    className="w-4 h-4 text-amber-600 focus:ring-amber-600"
                    checked={formData.hasMEI === 'sim'}
                    onChange={(e) => setFormData({ ...formData, hasMEI: e.target.value })}
                    disabled={isSubmitting}
                  />
                  <span className="text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Sim</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasMEI"
                    value="nao"
                    required
                    className="w-4 h-4 text-amber-600 focus:ring-amber-600"
                    checked={formData.hasMEI === 'nao'}
                    onChange={(e) => setFormData({ ...formData, hasMEI: e.target.value })}
                    disabled={isSubmitting}
                  />
                  <span className="text-slate-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Não</span>
                </label>
              </div>
            </div>

            {/* Submit Button with Loading State */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-amber-900/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ENVIANDO...
                </>
              ) : (
                'ENVIAR MEU CADASTRO'
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
