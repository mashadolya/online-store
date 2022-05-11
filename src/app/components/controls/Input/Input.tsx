import React from 'react';
import * as S from 'src/app/components/controls/Input/Input.styles';
import { InputProps } from 'src/app/components/controls/Input/Input.types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {
  return (
    <S.InputContainer type={rest.type}>
      <S.InputContent {...rest} ref={ref} />
    </S.InputContainer>
  );
});

Input.displayName = 'Input';
export default Input;
