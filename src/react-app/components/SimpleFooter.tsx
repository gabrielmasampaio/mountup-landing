import { MessageCircle } from 'lucide-react';

export default function SimpleFooter() {
  // WhatsApp link
  const whatsappNumber = '5511999999999';
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre os serviços da MountUp.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="relative w-full bg-slate-950 border-t border-slate-800/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://019b9eec-9c5c-7e48-a8a2-c4168d994a18.mochausercontent.com/icone_mountup.png"
                alt="MountUp"
                className="w-10 h-10 object-contain"
              />
              <h3 
                className="text-xl font-bold text-slate-100"
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
              >
                MountUp
              </h3>
            </div>
            <p 
              className="text-slate-400 text-sm leading-relaxed"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Conectando empresas e instaladores para operações eficientes em campo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-slate-100 font-bold mb-4"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/"
                  className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/prestadores"
                  className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Para Prestadores
                </a>
              </li>
              <li>
                <a 
                  href="/demandantes"
                  className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  Para Demandantes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="text-slate-100 font-bold mb-4"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Contato
            </h4>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors text-sm mb-3"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              <MessageCircle className="w-4 h-4" />
              Fale conosco no WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-800/50 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-slate-500 text-sm"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            © 2026 MountUp. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#"
              className="text-slate-500 hover:text-slate-400 transition-colors"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Privacidade
            </a>
            <a 
              href="#"
              className="text-slate-500 hover:text-slate-400 transition-colors"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
