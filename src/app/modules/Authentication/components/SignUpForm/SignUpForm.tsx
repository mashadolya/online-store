import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormHeader from 'src/app/components/Form/FormHeader/FormHeader';
import FormInput from 'src/app/components/Form/controls/FormInput';
import Input from 'src/app/components/controls/Input/Input';
import { FieldContainer } from 'src/app/modules/Authentication/components/AuthModal/AuthModal.styles';
import { FormProps } from 'src/app/modules/Authentication/components/Form.types';

import { signUpValidationSchema } from 'src/app/modules/Authentication/components/SignUpForm/signUpValidationSchema';
import {
    HEADER_BODY,
    HEADER_TITLE,
} from 'src/app/modules/Authentication/components/SignUpForm/constants';
import { SignUpFormTypes } from 'src/app/modules/Authentication/components/SignUpForm/SignUpForm.types';

const SignUpForm: FC<FormProps> = ({ onSubmit }) => {
    const { handleSubmit, control } = useForm<SignUpFormTypes>({
        mode: 'all',
        resolver: yupResolver(signUpValidationSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormHeader title={HEADER_TITLE} body={HEADER_BODY} />

            <FormInput name="userName" placeholder="User Name" control={control} />
            <FormInput name="email" placeholder="Email Address" control={control} type="email" />
            <FormInput name="password" placeholder="Password" control={control} type="password" />
            <FormInput
                name="confirmPassword"
                placeholder="Confirm Password"
                control={control}
                type="password"
            />

            <FieldContainer>
                <Input type="submit" value="Join Us" />
            </FieldContainer>
        </form>
    );
};

export default SignUpForm;
