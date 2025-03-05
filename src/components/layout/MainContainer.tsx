import type { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export const MainContainer = ({ 
  children, 
  fullWidth = false,
  className = ''
}: MainContainerProps) => {
  return (
    <div 
      className={`
        mx-auto 
        ${fullWidth ? 'w-full' : 'w-full md:w-[80%]'} 
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}; 