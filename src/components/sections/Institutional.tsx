import { motion } from 'framer-motion';
import { siteData } from '../../data/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { Building2, Award, Calendar } from 'lucide-react';

export function Institutional() {
  return (
    <section id="institutional" className="py-20 md:py-32 bg-gray-50 relative border-t border-slate-200">
      <div className="container-custom">
        <SectionHeading 
          title="Credibilidade Institucional" 
          subtitle="Anos de história construindo parceiros de sucesso" 
        />

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-16 max-w-5xl mx-auto">
          
          {/* History Info */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-betim-primary/10 flex items-center justify-center text-betim-primary">
                  <Calendar size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Fundação Sólida</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Desde {siteData.company.foundationYear}, mantemos nosso foco estrito em aprimorar a logística rodoviária. A história da Betimcoop se mistura com o desenvolvimento industrial da região.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-betim-primary/10 flex items-center justify-center text-betim-primary">
                  <Building2 size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Sede Própria</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Localizada estrategicamente em {siteData.company.location}, possuímos estrutura completa para gerenciar as rotas mais exigentes do país com segurança reforçada.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-betim-primary/10 flex items-center justify-center text-betim-primary">
                  <Award size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Reconhecimento</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Nossa excelência é validada por anos de relacionamento comercial duradouro com grandes players do mercado logístico e industrial.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Placeholder Frame for Real Photos later */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square bg-slate-200 shadow-2xl group flex items-center justify-center">
              {/* This replaces a real photo, for now acts as a premium placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-betim-dark to-betim-primary opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
              
              <div className="relative z-10 text-center px-6">
                <Building2 size={48} className="text-white/50 mx-auto mb-4" />
                <p className="text-white/80 font-inter text-lg">Espaço reservado para<br/>foto institucional da sede / frota</p>
              </div>

              {/* Decorative Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-white/20"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-white/20"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
