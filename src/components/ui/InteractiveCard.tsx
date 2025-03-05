import { motion } from 'framer-motion';
import { useState } from 'react';
import type { FC } from 'react';

interface InteractiveCardProps {
  title: string;
  description: string;
  icon: FC;
  className?: string;
}

export const InteractiveCard: FC<InteractiveCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`bg-white shadow-lg rounded-lg p-6 cursor-pointer transition-colors hover:bg-gray-50 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center mb-4">
        <div className="text-primary-600">
          <Icon />
        </div>
        <h3 className="ml-4 text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded ? 'auto' : 0, 
          opacity: isExpanded ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </motion.div>
  );
}; 