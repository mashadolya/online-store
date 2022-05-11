import { forwardRef } from 'react';
import {
  ErrorContainer,
  InputWithError,
} from 'src/app/components/Form/controls/InputWithValidation/InputWithValidation.styles';
import { InputFormTypes } from 'src/app/components/Form/controls/InputWithValidation/InputWithValidation.types';

const InputWithValidation = forwardRef<HTMLInputElement, InputFormTypes>(
  ({ error, ...rest }, ref) => {
    const hasError = !!error;
    return (
      <>
        <InputWithError {...rest} ref={ref} hasError={hasError} />
        {error && <ErrorContainer>{error}</ErrorContainer>}
      </>
    );
  }
);

InputWithValidation.displayName = 'InputWithValidation';
export default InputWithValidation;
