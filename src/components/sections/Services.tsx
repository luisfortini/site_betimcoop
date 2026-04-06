import { motion } from 'framer-motion';
import { siteData } from '../../data/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { Truck, PackageSearch, Shuffle, Briefcase } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "transporte-rodoviario": <Truck size={40} />,
  "apoio-logistico": <PackageSearch size={40} />,
  "sob-demanda": <Shuffle size={40} />,
  "empresas": <Briefcase size={40} />
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-betim-gray relative">
      <div className="container-custom">
        <SectionHeading 
          title={siteData.services.title} 
          subtitle={siteData.services.subtitle} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-16">
          {siteData.services.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group relative overflow-hidden"
            >
              {/* Subtle accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-betim-accent transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              
              <div className="w-16 h-16 rounded-xl bg-betim-primary/5 text-betim-primary flex items-center justify-center mb-6 group-hover:bg-betim-accent group-hover:text-white transition-colors duration-300">
                {iconMap[item.id] || <Truck size={40} />}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {item.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Banner with CTA inside services */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-betim-primary rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
               <defs>
                 <pattern id="diagonal-pattern" patternUnits="userSpaceOnUse" width="40" height="40">
                   <path d="M0,40 l40,-40 M-10,10 l20,-20 M30,50 l20,-20" stroke="white" strokeWidth="2" strokeLinecap="square"/>
                 </pattern>
               </defs>
               <rect width="100%" height="100%" fill="url(#diagonal-pattern)"/>
            </svg>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Exclusividade em Cargas</h3>
              <p className="text-betim-gray/80 text-lg">Nossa expertise é 100% dedicada ao transporte de mercadorias. Confie sua logística a quem respira carga.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
