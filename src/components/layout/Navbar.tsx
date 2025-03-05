import { useState, useEffect } from 'react';
import { HomeIcon, HeartIcon, UsersIcon, ContactIcon, GiftIcon } from '../ui/Icons';

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
    ,
    { href: "#formulario-contacto", text: "Contacto", icon: ContactIcon },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-white'
      }`}
    >
      <nav className="max-w-[85%] mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/Logo_Images/Logo_ImgID1.png"
              alt="Logo Dr. Sillworth" 
              className="h-10 md:h-14 w-auto object-contain max-w-[180px] md:max-w-[220px] mix-blend-multiply"
            />
          </a>

          {/* Botón móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 hover:text-cyan-600 md:hidden"
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-700"
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
                className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 text-sm font-medium transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
              <div className="px-4 py-2 space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 p-2 text-gray-600 hover:text-cyan-600 hover:bg-gray-50 rounded-lg text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}; 