import React from 'react';
import { motion } from 'framer-motion';

interface IconButtonProps {
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  key?: string;
  type?: 'default' | 'warn' | 'disabled' | 'danger';
  onClick?: () => void;
}

export function IconButton({ className = '', disabled = false, icon, type = 'default', key = '', onClick }: IconButtonProps) {
  const buttonType = disabled ? 'disabled' : type;
  const baseClasses = `px-4 py-2 rounded-xl duration-200 hover:-rotate-1 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:hover:rotate-0 disabled:hover:scale-100`;

  const typeClasses = {
    default: `bg-emerald-600 text-white ${!disabled && 'hover:-rotate-1 hover:scale-110 active:scale-95'}`,
    warn: `bg-amber-600 text-white ${!disabled && 'hover:-rotate-1 hover:scale-110 active:scale-95'}`,
    danger: `bg-rose-600 text-white ${!disabled && 'hover:-rotate-1 hover:scale-110 active:scale-95'}`,
    disabled: 'bg-stone-500 text-stone-200 cursor-not-allowed',
  }[buttonType];

  return (
    <button key={key} disabled={disabled} className={`${baseClasses} ${typeClasses} ${className}`} onClick={onClick}>
      {icon}
    </button>
  );
}
