import React from 'react';

interface ButtonProps {
    caption: React.ReactNode;
    className?: string;
    key?: string;
    isSelected?: boolean;
    onClick?: () => void;
}
declare function Button({ caption, className, isSelected, key, onClick }: ButtonProps): React.JSX.Element;

interface SecondaryProps {
    caption: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    key?: string;
    type?: 'default' | 'warn' | 'disabled' | 'danger';
    onClick?: () => void;
}
declare function Secondary({ caption, className, icon, type, key, onClick }: SecondaryProps): React.JSX.Element;

export { Button, Secondary };
