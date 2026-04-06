import { motion } from 'framer-motion';
import { siteData } from '../../data/constants';
import { Map, Settings, Weight } from 'lucide-react';

export function Operations() {
  return (
    <section id="operations" className="py-20 md:py-32 bg-betim-dark text-white relative flex items-center min-h-[80vh] overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-betim-accent/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-betim-primary/50 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="container-custom relative z-10 w-full flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* Text Area */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {siteData.structure.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-light mb-8 max-w-lg leading-relaxed">
              {siteData.structure.subtitle}
            </p>
            <div className="h-1 w-20 bg-betim-accent"></div>
          </div>
          
          <p className="text-lg text-gray-400 mb-10">
            {siteData.structure.description}
          </p>
        </motion.div>

        {/* Info Blocks Area */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <Settings size={36} className="text-betim-accent mb-4" />,
              title: "Frota",
              desc: siteData.structure.fleetCount,
            },
            {
              icon: <Weight size={36} className="text-betim-accent mb-4" />,
              title: "Capacidade",
              desc: siteData.structure.payloadCapacity,
            },
            {
              icon: <Map size={36} className="text-betim-accent mb-4" />,
              title: "Cobertura",
              desc: siteData.structure.areasServed,
            }
          ].map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              {block.icon}
              <h4 className="text-xl font-bold text-white mb-2">{block.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{block.desc}</p>
            </motion.div>
          ))}
          
          {/* Decorative Callout Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bg-betim-accent p-8 rounded-2xl flex flex-col justify-center text-white"
          >
            <h4 className="text-xl font-bold mb-2 break-words">100% Cargas</h4>
            <p className="text-sm font-medium leading-relaxed">Nenhuma distração. Todo nosso time focado em movimentar o seu negócio.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
