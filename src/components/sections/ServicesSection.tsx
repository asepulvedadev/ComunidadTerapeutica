import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  HomeIcon, 
  UsersIcon, 
  BrainIcon, 
  HandHoldingHeartIcon, 
  MeditationIcon 
} from '../ui/Icons';
import { SectionTitle } from '../ui/SectionTitle';

const services = [
  {
    icon: HomeIcon,
    title: "Internación Residencial",
    description: "Programa de tratamiento intensivo con alojamiento 24/7 en nuestras instalaciones modernas y confortables.",
    features: ["Habitaciones privadas", "Atención médica 24/7", "Alimentación balanceada", "Áreas de recreación"]
  },
  {
    icon: BrainIcon,
    title: "Terapia Psicológica",
    description: "Sesiones individuales y familiares con profesionales especializados en adicciones.",
    features: ["Terapia cognitivo-conductual", "Intervención familiar", "Manejo de trauma", "Prevención de recaídas"]
  },
  {
    icon: UsersIcon,
    title: "Terapia Grupal",
    description: "Grupos de apoyo y terapia grupal para compartir experiencias en un ambiente seguro.",
    features: ["Grupos de apoyo diarios", "Terapia de pares", "Actividades grupales", "Desarrollo de habilidades"]
  },
  {
    icon: MeditationIcon,
    title: "Mindfulness y Meditación",
    description: "Técnicas de atención plena para desarrollar mayor consciencia y control emocional.",
    features: ["Meditación guiada", "Yoga terapéutico", "Técnicas de respiración", "Manejo del estrés"]
  },
  {
    icon: HandHoldingHeartIcon,
    title: "Rehabilitación Integral",
    description: "Programa holístico que aborda todos los aspectos de tu recuperación y bienestar.",
    features: ["Evaluación completa", "Plan personalizado", "Seguimiento continuo", "Apoyo post-tratamiento"]
  },
  {
    icon: HeartIcon,
    title: "Programa Ambulatorio",
    description: "Tratamiento flexible que te permite mantener tus actividades diarias durante la recuperación.",
    features: ["Horarios flexibles", "Terapia individual", "Grupos de apoyo", "Seguimiento personalizado"]
  }
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nuestros Servicios" 
          subtitle="Tratamientos especializados diseñados para tu recuperación integral"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col border border-gray-100 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-500">
                    <svg className="w-4 h-4 mr-2 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 