import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
}

export const ResponsiveContainer = ({
  children,
  className = ''
}: ResponsiveContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}; 