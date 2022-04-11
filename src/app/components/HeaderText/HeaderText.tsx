import React from 'react';
import * as S from 'app/components/HeaderText/HeaderText.style';

const HeaderText = ({ title, body }: { title: string; body?: string }) => {
    const renderBody = () => (body ? <S.Body className="header-body">{body}</S.Body> : null);

    return (
        <header>
            <S.Title className="header-title">{title}</S.Title>
            {renderBody()}
        </header>
    );
};

export default HeaderText;
