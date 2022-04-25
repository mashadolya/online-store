import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormHeader from 'src/app/components/Form/FormHeader/FormHeader';
import Input from 'src/app/components/controls/Input/Input';
import { FieldContainer } from 'src/app/modules/Authentication/components/AuthModal/AuthModal.styles';
import { HEADER_TITLE } from 'src/app/modules/Authentication/components/SignUpForm/constants';
import { FormProps } from 'src/app/modules/Authentication/components/Form.types';
import FormInput from 'src/app/components/Form/controls/FormInput';
import { signInValidationSchema } from 'src/app/modules/Authentication/components/SignInForm/signInValidationSchema';
import { SignInData } from 'src/app/modules/Authentication/components/SignInForm/SignInForm.types';

const SignInForm: FC<FormProps> = ({ onSubmit }) => {
    const { handleSubmit, control } = useForm<SignInData>({
        mode: 'all',
        resolver: yupResolver(signInValidationSchema),
    });

    // TODO: type is not working
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormHeader title={HEADER_TITLE} />
            <FormInput name="email" control={control} placeholder="Email Address" />

            <FormInput name="password" placeholder="Password" control={control} type="password" />
            <FieldContainer>
                <Input type="submit" value="Sign In" />
            </FieldContainer>
        </form>
    );
};

export default SignInForm;
