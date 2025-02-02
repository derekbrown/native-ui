import React from 'react';
import { motion } from 'framer-motion';

interface PillButtonProps {
  caption: React.ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  key?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function PillButton({ caption = 'PillButton', className = '', disabled = false, icon, key = '', style, onClick }: PillButtonProps) {
  const baseClasses = `px-3 py-1 text-xs font-mono uppercase transition-all duration-200 hover:-rotate-1 hover:scale-110 active:scale-95 border border-transparent hover:border-current rounded-xl`;

  return (
    <button key={key} disabled={disabled} className={`${baseClasses} ${className}`} style={style} onClick={onClick}>
      {caption}
    </button>
  );
}
