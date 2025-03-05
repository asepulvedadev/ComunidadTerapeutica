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
    { icon: <FacebookIcon />, label: 'Facebook', url: 'https://facebook.com' },
    { icon: <InstagramIcon />, label: 'Instagram', url: 'https://instagram.com' },
    { icon: <YouTubeIcon />, label: 'YouTube', url: 'https://youtube.com' },
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
    <footer className="bg-[#151414] text-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/Logo_Images/Logo_ImgID1.png"
                alt="Logo Dr. Sillworth" 
                className="h-16 md:h-20 w-auto object-contain max-w-[200px] md:max-w-[250px] brightness-0 invert"
              />
            </div>
            <p className="text-sm opacity-80 mb-6">
              Centro especializado en tratamiento y rehabilitación de adicciones,
              comprometidos con tu recuperación y bienestar integral.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-[#2D6BA6] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.url}
                  className="text-white opacity-80 hover:opacity-100 hover:text-[#2D6BA6] transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <div className="p-2 rounded-full bg-[#2D6BA6]/20">{info.icon}</div>
                  <div>
                    <p className="font-medium text-sm">{info.title}</p>
                    <span className="text-sm text-gray-300">{info.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Boletín Informativo</h3>
            <p className="text-sm opacity-80 mb-4">
              Suscríbete para recibir información actualizada sobre tratamientos y
              recursos de apoyo.
            </p>
            <button
              className="w-full bg-[#2D6BA6] hover:bg-[#1f4b74] text-white py-2 px-4 rounded-lg transition-colors"
            >
              Suscribirse
            </button>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Comunidad Terapéutica Dr. Sillworth.
            Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 