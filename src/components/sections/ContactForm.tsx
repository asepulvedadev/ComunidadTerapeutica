import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { EmailIcon, PhoneIcon, LocationIcon, ScheduleIcon } from '../ui/FooterIcons';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  telefono: z.string().regex(/^\d{10}$/, 'Ingresa un número de teléfono válido de 10 dígitos'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Datos del formulario:', data);
      reset();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulario-contacto" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contáctenos" 
          subtitle="Estamos aquí para ayudarte en tu proceso de recuperación"
        />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Columna izquierda: Mapa e información */}
          <div className="h-full flex flex-col">
            {/* Mapa de Google */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex-grow mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1797.7373939855038!2d-100.25412!3d25.676999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c1e6a113e715%3A0x2c4cf3c91c1f7d7d!2sTurqu%C3%ADa%205446%2C%20Guadalupe%20Centro%2C%2067183%20Guadalupe%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1710435063799!5m2!1ses-419!2smx"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[300px]"
              />
            </div>

            {/* Información de contacto */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <LocationIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Dirección</h4>
                    <a 
                      href="https://maps.google.com/?q=Turquía+5446,+Guadalupe+Centro,+67183+Guadalupe,+N.L."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Turquía #5446, Guadalupe Centro, 67183 Guadalupe, N.L.
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <PhoneIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Teléfono</h4>
                    <a 
                      href="tel:+525575473562"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      55 7547 3562
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <EmailIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <a 
                      href="mailto:ct_drsilkworthk@hotmail.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      ct_drsilkworthk@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <ScheduleIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Horario</h4>
                    <p className="text-gray-600">Lun-Sab: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario */}
          <div className="h-full">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-lg space-y-6 h-full">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  {...register('nombre')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Ingresa tu nombre"
                />
                {errors.nombre && (
                  <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  {...register('telefono')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Tu número de teléfono"
                />
                {errors.telefono && (
                  <p className="mt-1 text-sm text-red-600">{errors.telefono.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  {...register('mensaje')}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
                {errors.mensaje && (
                  <p className="mt-1 text-sm text-red-600">{errors.mensaje.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 text-green-700 rounded-lg"
                >
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}; 