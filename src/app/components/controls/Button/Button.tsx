import React, { SyntheticEvent } from 'react';
import { ButtonContent, ButtonWrapper } from 'app/components/controls/Button/Button.style';

interface IButtonProps {
    onClick?: (event: SyntheticEvent) => void;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({ onClick, children, className, type }: IButtonProps) => (
    <ButtonWrapper>
        <ButtonContent type={type} onClick={onClick} className={className}>
            {children}
        </ButtonContent>
    </ButtonWrapper>
);

export default Button;
