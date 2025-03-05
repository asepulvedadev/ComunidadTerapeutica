import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

const donationOptions = [
  {
    amount: 100,
    description: "Ayuda básica",
    benefits: ["Contribuye a materiales educativos", "Apoya el mantenimiento del centro"]
  },
  {
    amount: 500,
    description: "Ayuda intermedia",
    benefits: ["Contribuye a terapias grupales", "Apoya la capacitación del personal", "Materiales de rehabilitación"]
  },
  {
    amount: 1000,
    description: "Ayuda completa",
    benefits: ["Apoya tratamientos completos", "Contribuye a becas de rehabilitación", "Mejoras en instalaciones", "Programas especiales"]
  }
];

export const DonationSection = () => {
  return (
    <section id="donaciones" className="py-20 scroll-mt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Apoya Nuestra Causa" 
          subtitle="Tu donación hace la diferencia en la vida de quienes más lo necesitan"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {donationOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="text-center mb-4">
                  <p className="text-4xl font-bold text-primary">
                    ${option.amount}
                  </p>
                  <p className="text-gray-600 mt-2">{option.description}</p>
                </div>
                
                <div className="space-y-3">
                  {option.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="w-full mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  onClick={() => alert('Esta es una demostración. Las donaciones no están habilitadas en este momento.')}
                >
                  Donar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-600">
          <p className="max-w-2xl mx-auto">
            Nota: Esta es una sección de muestra. Para realizar donaciones reales, 
            por favor contacta directamente con nuestro centro.
          </p>
        </div>
      </div>
    </section>
  );
}; 