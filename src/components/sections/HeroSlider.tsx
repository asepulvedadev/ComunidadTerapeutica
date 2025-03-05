import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
  {
    url: '/slider/Slide1.jpg',
    alt: 'Centro de rehabilitación',
    caption: 'Instalaciones modernas y confortables'
  },
  {
    url: '/slider/slide2.jpg',
    alt: 'Terapia grupal',
    caption: 'Sesiones terapéuticas personalizadas'
  },
  {
    url: '/slider/slide3.jpg',
    alt: 'Áreas verdes',
    caption: 'Espacios diseñados para tu recuperación'
  }
];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] mt-16">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${images[currentIndex].url})`,
              backgroundPosition: '50% 30%'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50">
              <div className="container mx-auto h-full flex items-center justify-start text-left px-2">
                <div className="text-white max-w-3xl">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                  >
                    {images[currentIndex].caption}
                  </motion.h2>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}; 