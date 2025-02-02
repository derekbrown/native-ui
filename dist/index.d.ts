import React from 'react';

interface ButtonProps {
    caption: React.ReactNode;
    className?: string;
    disabled?: boolean;
    dotColor?: string;
    key?: string;
    isSelected?: boolean;
    onClick?: () => void;
}
declare function Button({ caption, className, disabled, dotColor, isSelected, key, onClick }: ButtonProps): React.JSX.Element;

interface IconButtonProps {
    className?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    key?: string;
    circle?: boolean;
    type?: 'default' | 'warn' | 'disabled' | 'danger';
    onClick?: () => void;
}
declare function IconButton({ className, disabled, icon, type, circle, key, onClick }: IconButtonProps): React.JSX.Element;

interface PillButtonProps {
    caption: React.ReactNode;
    className?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    key?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}
declare function PillButton({ caption, className, disabled, icon, key, style, onClick }: PillButtonProps): React.JSX.Element;

interface SecondaryButtonProps {
    caption: React.ReactNode;
    className?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    key?: string;
    type?: 'default' | 'warn' | 'disabled' | 'danger';
    onClick?: () => void;
}
declare function SecondaryButton({ caption, className, disabled, icon, type, key, onClick }: SecondaryButtonProps): React.JSX.Element;

interface DisplayPillProps {
    caption: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    key?: string;
}
declare function DisplayPill({ caption, className, icon, key }: DisplayPillProps): React.JSX.Element;

export { Button, DisplayPill, IconButton, PillButton, SecondaryButton };
