import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import { siteData } from '../../data/constants';
import { Link } from 'react-scroll';

export function Footer() {
  return (
    <footer className="bg-betim-dark text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-6 tracking-tight">
              Betimcoop
            </h3>
            <p className="text-sm leading-relaxed mb-6 font-light">
              {siteData.company.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-betim-accent hover:text-white transition-colors border border-white/10">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-betim-accent hover:text-white transition-colors border border-white/10">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-betim-accent hover:text-white transition-colors border border-white/10">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="hero" smooth={true} duration={500} className="hover:text-betim-accent cursor-pointer transition-colors">Início</Link>
              </li>
              <li>
                <Link to="about" smooth={true} offset={-80} duration={500} className="hover:text-betim-accent cursor-pointer transition-colors">Quem Somos</Link>
              </li>
              <li>
                <Link to="services" smooth={true} offset={-80} duration={500} className="hover:text-betim-accent cursor-pointer transition-colors">Nossos Serviços</Link>
              </li>
              <li>
                <Link to="operations" smooth={true} offset={-80} duration={500} className="hover:text-betim-accent cursor-pointer transition-colors">Operação e Frota</Link>
              </li>
            </ul>
          </div>

          {/* Core Focus */}
          <div>
            <h4 className="text-white font-semibold mb-6">Atuação</h4>
            <ul className="space-y-3 text-sm">
              <li>Logística Integrada</li>
              <li>Transporte Rodoviário Escalonado</li>
              <li>Operações de Ponto a Ponto</li>
              <li>Cargas Gerais</li>
              <li>Dedicação Exclusiva à Carga</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="text-betim-accent flex-shrink-0 mt-0.5" size={18} />
                <span>{siteData.company.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-betim-accent flex-shrink-0" size={18} />
                <span>{siteData.company.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-betim-accent flex-shrink-0" size={18} />
                <span>{siteData.company.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-500">
          <p>{siteData.footer.copyright}</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</span>
            <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
