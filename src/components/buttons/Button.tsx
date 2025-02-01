import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  caption: React.ReactNode;
  className?: string;
  key?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function Button({ caption = 'Button', className = '', isSelected = false, key = '', onClick }: ButtonProps) {
  const baseClasses =
    'relative flex bg-stone-50 text-stone-600 font-mono uppercase text-xs shadow-md rounded-lg items-center justify-center overflow-hidden gap-4 group h-8 px-6 my-2 duration-200';
  const stateClasses = isSelected ? 'scale-90 shadow-inner' : 'hover:scale-90 active:scale-90 active:shadow-inner';

  return (
    <button key={key} className={`${baseClasses} ${stateClasses} ${className}`} onClick={onClick}>
      <motion.div
        className="absolute left-0 flex h-8 rounded-l-lg"
        style={{
          width: `10%`,
          backgroundImage: `radial-gradient(circle, #239821 1px, transparent 1px)`,
          backgroundSize: '4px 4px',
        }}
        initial={{ width: 0 }}
        animate={{ width: `10%` }}
        transition={{ duration: 0.3, ease: 'easeOut' }}></motion.div>
      <div className="flex items-center gap-2">{caption}</div>
    </button>
  );
}
