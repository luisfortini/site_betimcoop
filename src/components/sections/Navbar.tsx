import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Quem Somos', to: 'about' },
    { name: 'Serviços', to: 'services' },
    { name: 'Diferenciais', to: 'differentials' },
    { name: 'Operação', to: 'operations' },
    { name: 'Contato', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <img
            src="/assets/logo.jpg"
            alt="Betimcoop"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className={`font-medium cursor-pointer transition-colors hover:text-betim-accent ${isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className={`px-6 py-2 rounded-full font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer ${isScrolled
                ? 'bg-betim-accent text-white hover:bg-betim-secondary'
                : 'bg-white text-betim-primary hover:bg-gray-100'
              }`}
          >
            Falar com Especialista
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? (
            <X size={28} className={isScrolled ? 'text-betim-primary' : 'text-white'} />
          ) : (
            <Menu size={28} className={isScrolled ? 'text-betim-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-slate-700 font-medium text-lg w-full text-center py-2 hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
