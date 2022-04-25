import * as S from 'src/app/components/Form/FormHeader/FormHeader.styles';
import { FC } from 'react';
import { FormHeaderTypes } from 'src/app/components/Form/FormHeader/FormHeader.types';

const FormHeader: FC<FormHeaderTypes> = ({ title, body }) => {
    const renderBody = () =>
        body && <S.FormHeaderBody className="header-body">{body}</S.FormHeaderBody>;

    return (
        <S.FormHeaderContainer>
            <S.FormHeaderTitle className="header-title">{title}</S.FormHeaderTitle>
            {renderBody()}
        </S.FormHeaderContainer>
    );
};

export default FormHeader;
