import { FC } from 'react';
import { useFormContext, useFormState } from 'react-hook-form';
import InputWithValidation from 'src/app/components/Form/controls/InputWithValidation';
import { FieldContainer } from 'src/app/modules/Authentication/components/AuthModal/AuthModal.styles';
import { InputProps } from 'src/app/components/controls/Input/Input.types';
import { UseInputPropsReturn } from 'src/app/components/Form/controls/FormInput/FormInput.types';

const FormInput: FC<InputProps> = ({ name, ...restProps }) => {
  const inputProps = useInputProps(name!);

  return (
    <FieldContainer>
      <InputWithValidation {...restProps} {...inputProps} />
    </FieldContainer>
  );
};

export default FormInput;

function useInputProps(fieldName: string): UseInputPropsReturn {
  const { register } = useFormContext();
  const { errors } = useFormState();

  return {
    ...register(fieldName),
    error: errors[fieldName]?.message,
  };
}
