import * as S from 'src/app/components/Form/FormHeader/FormHeader.styles';
import { FC } from 'react';
import { FormHeaderTypes } from 'src/app/components/Form/FormHeader/FormHeader.types';

const FormHeader: FC<FormHeaderTypes> = ({ title, body }) => {
  return (
    <S.FormHeaderContainer>
      <S.FormHeaderTitle>{title}</S.FormHeaderTitle>
      {body && <S.FormHeaderBody>{body}</S.FormHeaderBody>}
    </S.FormHeaderContainer>
  );
};

export default FormHeader;
