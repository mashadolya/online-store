import React from 'react';
import Types from 'app/components/controls/Input/types';
import HeaderText from 'app/components/HeaderText/HeaderText';
import * as S from 'app/components/Form/Form.style';
import { useForm } from 'app/components/Form/hooks/useForm';
import Input from 'app/components/controls/Input/Input';
import Button from 'app/components/controls/Button/Button';
import SignInFormProps from 'app/modules/Authentication/components/SignInForm/SignInForm.types';
import getUserFromStore from 'app/modules/Authentication/services/userStore';

const { Email, Password } = Types;

const HEADER_TITLE = 'Your account for everything toxic';

const initialState = {
    email: '',
    password: '',
};

const SignInForm: React.FC<SignInFormProps> = ({ handleRegistrationForm, onLoginSuccess }) => {
    const { onChange, onSubmit, values } = useForm(onLoginSuccess, initialState);

    function onSignInSuccess() {
        if (getUserFromStore(values.email)) {
            onLoginSuccess();
        } else {
            // TODO: get Error
            alert('User not exists!!');
        }
    }

    return (
        <S.FormWrapper onSubmit={onSubmit}>
            <HeaderText title={HEADER_TITLE} />
            <Input name={Email} placeholder="Email Address" type={Email} onChange={onChange} />
            <Input name={Password} placeholder="Password" type={Password} onChange={onChange} />
            <Button onClick={onSignInSuccess} type="button">
                SIGN IN
            </Button>
            <div className="action-link">
                Not a member?
                <button onClick={handleRegistrationForm} type="button">
                    Join us.
                </button>
            </div>
        </S.FormWrapper>
    );
};

export default SignInForm;
