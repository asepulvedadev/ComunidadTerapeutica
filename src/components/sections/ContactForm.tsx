import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { EmailIcon, PhoneIcon, LocationIcon, ScheduleIcon } from '../ui/FooterIcons';

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  telefono: z.string().regex(/^\d{9,10}$/, 'Ingresa un número de teléfono válido'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: <LocationIcon />,
    title: 'Dirección',
    content: 'Turquía #5446, Guadalupe Centro, Mexico, 67183',
  },
  {
    icon: <PhoneIcon />,
    title: 'Teléfono',
    content: '55 7547 3562',
  },
  {
    icon: <EmailIcon />,
    title: 'Email',
    content: 'ct_drsilkworthk@hotmail.com',
  },
  {
    icon: <ScheduleIcon />,
    title: 'Horario',
    content: 'Lun-sab: 9:00-18:00',
  },
];

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Datos del formulario:', data);
      reset();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Contáctanos
        </h2>

        <div className="max-w-lg mx-auto md:max-w-none md:flex md:gap-8 md:items-stretch">
          {/* Formulario */}
          <div className="w-full md:flex-1 mb-8 md:mb-0 md:order-2 flex">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6 w-full flex flex-col">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-1 flex flex-col">
                <div className="flex-1 space-y-4">
                  <Controller
                    name="nombre"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Nombre completo
                        </label>
                        <input
                          {...field}
                          type="text"
                          className={`w-full h-12 px-4 rounded-lg border ${
                            errors.nombre ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                        />
                        {errors.nombre && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.nombre.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email
                        </label>
                        <input
                          {...field}
                          type="email"
                          className={`w-full h-12 px-4 rounded-lg border ${
                            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="telefono"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Teléfono
                        </label>
                        <input
                          {...field}
                          type="tel"
                          className={`w-full h-12 px-4 rounded-lg border ${
                            errors.telefono ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                        />
                        {errors.telefono && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.telefono.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  <Controller
                    name="mensaje"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Mensaje
                        </label>
                        <textarea
                          {...field}
                          rows={4}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.mensaje ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          } bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-primary-500 focus:border-primary-500`}
                        />
                        {errors.mensaje && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.mensaje.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-auto"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Enviar mensaje'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="w-full md:w-[400px] bg-primary-600 text-white rounded-xl shadow-lg p-4 md:p-6 md:order-1 flex flex-col">
            <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
            <div className="space-y-4 flex-1">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-700">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium">{info.title}</p>
                    <p className="text-sm text-gray-100">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-lg mb-4">¿Necesitas ayuda inmediata?</p>
              <a
                href="tel:123456789"
                className="block w-full h-12 text-center leading-[48px] border-2 border-white rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Llámanos ahora
              </a>
            </div>
          </div>
        </div>

        {/* Notificaciones */}
        {showSuccess && (
          <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg text-center">
            Mensaje enviado con éxito
          </div>
        )}
        {showError && (
          <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg text-center">
            Error al enviar el mensaje
          </div>
        )}
      </div>
    </section>
  );
}; 