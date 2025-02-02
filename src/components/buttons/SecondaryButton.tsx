import React from 'react';
import { motion } from 'framer-motion';

interface SecondaryButtonProps {
  caption: React.ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  key?: string;
  type?: 'default' | 'warn' | 'disabled' | 'danger';
  onClick?: () => void;
}

export function SecondaryButton({ caption = 'Secondary', className = '', disabled = false, icon, type = 'default', key = '', onClick }: SecondaryButtonProps) {
  const buttonType = disabled ? 'disabled' : type;
  const baseClasses = `text-xs uppercase font-mono transition-all flex items-center gap-1 px-3 py-1 rounded-xl duration-200`;

  const typeClasses = {
    default: `text-emerald-600 hover:bg-emerald-600 hover:text-white ${!disabled && 'hover:-rotate-1 hover:scale-110 active:scale-95'}`,
    warn: `text-amber-600 hover:bg-amber-600 hover:text-white ${!disabled && 'hover:-rotate-1 hover:scale-110 active:scale-95'}`,
    danger: `text-rose-600 hover:bg-rose-600 hover:text-white ${!disabled && 'hover:-rotate-1 hover:scale-110 active:scale-95'}`,
    disabled: 'text-stone-500 bg-stone-200 cursor-not-allowed',
  }[buttonType];

  return (
    <button key={key} disabled={disabled} className={`${baseClasses} ${typeClasses} ${className}`} onClick={onClick}>
      {caption}
      {icon}
    </button>
  );
}
