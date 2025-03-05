import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Sobre Nosotros" 
          subtitle="Comprometidos con tu bienestar y recuperación"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Nuestra Misión
            </h3>
            <p className="text-gray-600 mb-6">
              Nos dedicamos a proporcionar un ambiente seguro y acogedor donde cada persona puede encontrar su camino hacia la recuperación. Nuestro equipo de profesionales está comprometido con tu bienestar.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Nuestra Visión
            </h3>
            <p className="text-gray-600">
              Aspiramos a ser líderes en la rehabilitación y el tratamiento de adicciones, transformando vidas y familias a través de nuestro enfoque integral y compasivo.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="/about/about-image.jpg"
              alt="Nuestro centro"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 