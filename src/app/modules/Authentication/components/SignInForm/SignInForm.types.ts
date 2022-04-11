import { MouseEventHandler, SyntheticEvent } from 'react';

interface SignInFormProps {
    handleRegistrationForm: MouseEventHandler<HTMLButtonElement>;
    onLoginSuccess: any;
}

export default SignInFormProps;
