import React, { FC } from 'react';
import * as S from 'app/components/controls/LinkButton/LinkButton.styles';

interface ILinkButtonProps {
    to: string;
    label?: string;
    className?: string;
}

const LinkButton: FC<ILinkButtonProps> = ({ to, label = '', className = 'link-button' }) => {
    return (
        <S.LinkStyles to={to} className={className}>
            {label}
        </S.LinkStyles>
    );
};

export default LinkButton;
