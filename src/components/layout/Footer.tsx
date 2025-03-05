import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  LocationIcon,
  PhoneIcon,
  EmailIcon,
  ScheduleIcon,
} from '../ui/FooterIcons';

export const Footer = () => {
  const socialLinks = [
    { icon: <FacebookIcon />, label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100063559665790' },
    { icon: <InstagramIcon />, label: 'Instagram', url: 'https://www.instagram.com/comunidadterapeuticadrsilkworth/' },
    { icon: <YouTubeIcon />, label: 'YouTube', url: 'https://www.youtube.com/@comunidadterapeuticadrsilk4857' },
  ];

  const contactInfo = [
    { icon: <LocationIcon />, title: 'Dirección', text: 'Av. Principal #123, Ciudad' },
    { icon: <PhoneIcon />, title: 'Teléfono', text: '(123) 456-7890' },
    { icon: <EmailIcon />, title: 'Email', text: 'info@drsillworth.com' },
    { icon: <ScheduleIcon />, title: 'Horario', text: 'Lun-Vie: 9:00-18:00, Sáb: 9:00-13:00' },
  ];

  const quickLinks = [
    { text: 'Inicio', url: '#' },
    { text: 'Servicios', url: '#servicios' },
    { text: 'Nosotros', url: '#nosotros' },
    { text: 'Contacto', url: '#contacto' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Columna 1: Logo e información */}
          <div className="space-y-4">
            <img 
              src="/Logo_Images/Logo_ImgID1.png" 
              alt="Logo Dr. Silkworth"
              className="h-12 w-auto brightness-0 invert" 
            />
            <p className="text-sm">
              Centro especializado en el tratamiento y rehabilitación de adicciones, 
              comprometidos con tu recuperación integral.
            </p>
            {/* Redes Sociales */}
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-3">Síguenos en:</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <div className="w-6 h-6">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#donaciones" className="hover:text-white transition-colors">Donaciones</a>
              </li>
              <li>
                <a href="#formulario-contacto" className="hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>Internación Residencial</li>
              <li>Terapia Individual</li>
              <li>Terapia Grupal</li>
              <li>Atención Familiar</li>
              <li>Rehabilitación Integral</li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href="https://maps.google.com/?q=Turquía+5446,+Guadalupe+Centro,+67183+Guadalupe,+N.L."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Turquía #5446, Guadalupe Centro, 67183 Guadalupe, N.L.
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:ct_drsilkworthk@hotmail.com" 
                  className="hover:text-white transition-colors"
                >
                  ct_drsilkworthk@hotmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:+525575473562" 
                  className="hover:text-white transition-colors"
                >
                  55 7547 3562
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Lun-Sab: 9:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Comunidad Terapéutica Dr. Sillworth. Todos los derechos reservados.
            </p>
            {/* Enlaces de redes sociales versión móvil */}
            <div className="flex items-center gap-6 md:hidden">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <div className="w-5 h-5">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 