import { useState, useEffect } from 'react';
import { HomeIcon, HeartIcon, UsersIcon, ContactIcon } from '../ui/Icons';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: "#inicio", text: "Inicio", icon: HomeIcon },
    { href: "#servicios", text: "Servicios", icon: HeartIcon },
    { href: "#nosotros", text: "Nosotros", icon: UsersIcon },
    { href: "#formulario-contacto", text: "Contacto", icon: ContactIcon },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-white'
      }`}
    >
      <nav className="max-w-[80%] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/Logo_Images/Logo_ImgID1.png"
              alt="Logo Dr. Sillworth" 
              className="h-12 md:h-16 lg:h-20 w-auto object-contain max-w-[250px] md:max-w-[350px] lg:max-w-[400px] mix-blend-multiply"
            />
          </a>

          {/* Botón móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100   hover:text-cyan-600 md:hidden"
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>

          {/* Menú escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="flex items-center gap-2 text-gray-600 hover:text-cyan-600"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}; 