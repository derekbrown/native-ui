import React from 'react';
import { motion } from 'framer-motion';

interface DisplayPillProps {
  caption: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  key?: string;
}

export function DisplayPill({ caption = 'DisplayPill', className = '', icon, key = '' }: DisplayPillProps) {
  const baseClasses = `px-3 py-1 bg-white/80 backdrop-blur-sm
                 rounded-full text-xs flex items-center justify-center gap-2
                 shadow-sm border border-stone-100 transition-all hover:scale-150 z-0 hover:z-20 hover:-rotate-1`;

  return (
    <div key={key} className={`${baseClasses} ${className}`}>
      {icon}
      <span className="font-medium">{caption}</span>
    </div>
  );
}
