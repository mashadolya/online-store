import { FC } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import InputWithValidation from 'src/app/components/Form/controls/InputWithValidation';
import { FieldContainer } from 'src/app/modules/Authentication/components/AuthModal/AuthModal.styles';
import { InputProps } from 'src/app/components/controls/Input/Input.types';

// TODO: ???
type FormInputProps<T> = Omit<InputProps, 'value' | 'defaultValue' | 'name' | 'inputRef'> &
    UseControllerProps<T>;

const FormInput = (props: any) => {
    const {
        field: { onChange, onBlur, name, value, ref },
        formState: { errors },
    } = useController(props);

    return (
        <FieldContainer>
            <InputWithValidation
                onChange={onChange}
                onBlur={onBlur}
                value={value ?? ''}
                name={name}
                ref={ref}
                errors={errors}
                placeholder={props.placeholder}
            />
        </FieldContainer>
    );
};

export default FormInput;
