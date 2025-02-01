import React from 'react';

interface ButtonProps {
    caption: React.ReactNode;
    className?: string;
    key?: string;
    isSelected?: boolean;
    onClick?: () => void;
}
declare function Button({ caption, className, isSelected, key, onClick }: ButtonProps): React.JSX.Element;

export { Button };
