import { motion } from 'framer-motion';
import { Shield, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Experiencia Comprobada',
    description: 'Más de 15 años ayudando a personas a recuperar el control de sus vidas.'
  },
  {
    icon: Award,
    title: 'Equipo Profesional',
    description: 'Especialistas certificados en adicciones, psicología y terapia familiar.'
  },
  {
    icon: Users,
    title: 'Enfoque Integral',
    description: 'Tratamiento personalizado que aborda aspectos físicos, emocionales y sociales.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Nuestra Experiencia Marca la Diferencia
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            En la Comunidad Terapéutica Dr. Sillworth, combinamos años de experiencia
            con las técnicas más avanzadas en el tratamiento de adicciones.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4 mx-auto">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 