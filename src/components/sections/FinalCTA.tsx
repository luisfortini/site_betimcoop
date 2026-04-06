import { motion } from 'framer-motion';
import { siteData } from '../../data/constants';
import { Button } from '../ui/Button';

export function FinalCTA() {
  const whatsappUrl = `https://wa.me/${siteData.company.whatsapp}?text=${encodeURIComponent('Olá Betimcoop! Gostaria de uma cotação para transporte de carga.')}`;

  return (
    <section id="contact" className="py-24 bg-betim-accent text-white relative overflow-hidden">
      
      {/* Decorative background vectors */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute w-full h-full opacity-10" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,213.3C672,224,768,192,864,170.7C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container-custom relative z-10text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Pronto para otimizar o transporte da sua empresa?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
            Fale com nossos especialistas corporativos e descubra como a força da nossa cooperativa pode agregar valor e agilidade para sua logística hoje.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-betim-accent hover:bg-gray-100 uppercase tracking-widest text-sm font-bold shadow-2xl">
                Solicitar Cotação
              </Button>
            </a>
            <a href={`mailto:${siteData.company.email}`} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10 uppercase tracking-widest text-sm font-bold">
                Enviar E-mail
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
