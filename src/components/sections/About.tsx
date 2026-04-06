import { motion } from 'framer-motion';
import { siteData } from '../../data/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title={siteData.about.title} 
              subtitle={siteData.about.subtitle} 
              centered={false} 
            />
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              {siteData.about.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Especialistas em cargas",
                "Frota 100% dedicada",
                "Segurança operacional",
                "Gestão inteligente"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-betim-accent flex-shrink-0" size={24} />
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Stats Grid Content */}
          <div className="relative">
            {/* Design Element Background */}
            <div className="absolute inset-0 bg-betim-gray rounded-3xl transform rotate-3 scale-105 z-0"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {siteData.about.stats.map((stat, index) => (
                <motion.div 
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center group hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <span className="text-3xl md:text-4xl font-extrabold text-betim-primary mb-2 group-hover:text-betim-accent transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative dot pattern */}
            <div className="absolute -bottom-6 -right-6 -z-10 text-betim-accent/20">
              <svg width="120" height="120" fill="currentColor" viewBox="0 0 100 100">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle fill="currentColor" cx="2" cy="2" r="2"></circle>
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
