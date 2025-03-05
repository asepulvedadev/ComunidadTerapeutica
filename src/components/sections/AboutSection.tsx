import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { HeartIcon, BrainIcon, UsersIcon, HandHoldingHeartIcon } from '../ui/Icons';

const aboutCards = [
  {
    icon: HeartIcon,
    title: "Experiencia",
    description: "Más de 20 años ayudando a personas a superar sus adicciones con tratamientos efectivos y personalizados."
  },
  {
    icon: BrainIcon,
    title: "Método",
    description: "Enfoque integral que combina terapia individual, grupal y actividades terapéuticas para una recuperación completa."
  },
  {
    icon: UsersIcon,
    title: "Equipo",
    description: "Profesionales especializados incluyendo médicos, psicólogos y terapeutas comprometidos con tu recuperación."
  },
  {
    icon: HandHoldingHeartIcon,
    title: "Apoyo",
    description: "Acompañamiento continuo en un ambiente seguro y acogedor, con atención personalizada 24/7."
  }
];

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Sobre Nosotros" 
          subtitle="Centro especializado en tratamiento y rehabilitación de adicciones"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 