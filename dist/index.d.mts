import React from 'react';

interface ButtonProps {
    caption: React.ReactNode;
    isSelected?: boolean;
    onClick?: () => void;
}
declare function Button({ caption, isSelected, onClick }: ButtonProps): React.JSX.Element;

export { Button };
