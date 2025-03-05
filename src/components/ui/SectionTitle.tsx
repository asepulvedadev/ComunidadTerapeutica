import type { FC } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent relative inline-block">
        {title}
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></div>
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}; 