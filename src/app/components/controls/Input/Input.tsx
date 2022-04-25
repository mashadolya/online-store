import React, { FC } from 'react';
import * as S from 'src/app/components/controls/Input/Input.styles';
import { InputProps } from 'src/app/components/controls/Input/Input.types';

const Input: FC<InputProps> = React.forwardRef(({ ...rest }, ref) => {
    return (
        <S.InputContainer className="input-container" type={rest.type}>
            <S.InputContent {...rest} ref={ref} />
        </S.InputContainer>
    );
});

Input.displayName = 'Input';
export default Input;
