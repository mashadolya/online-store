import React from 'react';
import * as S from 'app/components/Form/Form.style';
import HeaderText from 'app/components/HeaderText/HeaderText';
import Input from 'app/components/controls/Input/Input';
import Button from 'app/components/controls/Button/Button';
import { useForm } from 'app/components/Form/hooks/useForm';
import InputType from 'app/components/controls/Input/types';
import RegistrationFormProps from 'app/modules/Authentication/components/RegistartionForm/RegistrationForm.types';
import useCreateUser from 'app/modules/Authentication/hooks/useCreateUser';
import { IRegistrationUser } from 'app/components/Header/components/UserMenu/UserMenu';

const { Email, Password, Text } = InputType;

const HEADER_TITLE = 'Become a NT member';
const HEADER_BODY =
    'Create your NT Member profile and get first access to the very best of NT products, inspiration and community.';

// TODO: Upper Case
const initialState: IRegistrationUser = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({
    submitRegistrationForm,
    setSuccessFulRegistration,
}) => {
    const { onChange, onSubmit, values } = useForm(submitRegistrationForm, initialState);

    const submit = () => {
        // TODO: Remove hook (should not be used inside functions)
        const isCreated = useCreateUser(values);
        setSuccessFulRegistration(isCreated);
        submitRegistrationForm();
        // TODO: Delete when completed PR
        console.log('User registered');
    };

    return (
        <S.FormWrapper onSubmit={onSubmit}>
            <HeaderText title={HEADER_TITLE} body={HEADER_BODY} />
            <Input name={'userName'} placeholder="Nick Name" type={Text} onChange={onChange} />
            <Input name={Email} placeholder="Email Address" type={Email} onChange={onChange} />
            <Input name={Password} placeholder="Password" type={Password} onChange={onChange} />
            <Input
                name={'confirmPassword'}
                placeholder="Confirm Password"
                type={Password}
                onChange={onChange}
            />
            <Button onClick={submit} type="submit">
                Join Us
            </Button>
        </S.FormWrapper>
    );
};

export default RegistrationForm;
