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
    <section id="servicios" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nuestros Servicios" 
          subtitle="Ofrecemos una amplia gama de servicios terapéuticos diseñados para tu recuperación"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Nuestros Servicios
            </motion.h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Ofrecemos servicios especializados para ayudarte en tu proceso de recuperación,
              diseñados por profesionales expertos en adicciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-4 md:p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 md:p-3 rounded-lg bg-primary/10 text-primary">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-2 text-sm md:text-base">
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
      </div>
    </section>
  );
}; 