import React from 'react';
import {
    ErrorContainer,
    InputWithError,
} from 'src/app/components/Form/controls/InputWithValidation/InputWithValidation.styles';
import { InputProps } from 'src/app/components/controls/Input/Input.types';

interface InputFormTypes extends InputProps {
    name: string;
    errors: any;
}

const InputWithValidation = React.forwardRef<HTMLInputElement, InputFormTypes>(
    ({ name, errors, ...rest }, ref) => {
        const hasError = !!errors[name];
        return (
            <>
                <InputWithError {...rest} ref={ref} hasError={hasError} />
                {errors[name]?.message && <ErrorContainer>{errors[name]?.message}</ErrorContainer>}
            </>
        );
    }
);

InputWithValidation.displayName = 'InputWithValidation';
export default InputWithValidation;
