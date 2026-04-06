import { motion } from 'framer-motion';
import { siteData } from '../../data/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { Users, ShieldCheck, Clock, Zap, MessageSquare, Lock } from 'lucide-react';

const iconMap: Record<number, React.ReactNode> = {
  0: <Users size={32} />,
  1: <ShieldCheck size={32} />,
  2: <Clock size={32} />,
  3: <Zap size={32} />,
  4: <MessageSquare size={32} />,
  5: <Lock size={32} />
};

export function Differentials() {
  return (
    <section id="differentials" className="py-20 md:py-32 bg-white relative">
      <div className="container-custom">
        <SectionHeading 
          title={siteData.differentials.title} 
          subtitle={siteData.differentials.subtitle} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {siteData.differentials.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-betim-gray border border-slate-200 flex items-center justify-center mb-6 text-betim-primary group-hover:bg-betim-primary group-hover:text-white group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                {iconMap[index] || <Zap size={32} />}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-betim-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
