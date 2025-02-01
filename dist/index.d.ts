import * as react from 'react';

interface ButtonProps {
    caption: React.ReactNode;
    isSelected?: boolean;
    onClick?: () => void;
}
declare function Button({ caption, isSelected, onClick }: ButtonProps): react.JSX.Element;

export { Button };
