import React, { MouseEventHandler, useState } from 'react';
import Input from 'app/components/controls/Input/Input';
import Types from 'app/components/controls/Input/types';

const initialData: { [key: string]: string } = {
    email: '',
    password: '',
};

interface ISignInFormProps {
    handleRegistrationForm: MouseEventHandler<HTMLAnchorElement>;
}

const SignInForm = ({ handleRegistrationForm }: ISignInFormProps) => {
    const [form, setForm] = useState(initialData);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        //  onSubmit(loginData);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, type } = e.target;
        setForm({ ...initialData, [type]: value });
    };

    return (
        <form>
            <Input
                type={Types.Email}
                value={form.email}
                placeholder="Email address"
                onChange={handleInputChange}
            />
            <Input
                type={Types.Password}
                value={form.password}
                placeholder="Password"
                onChange={handleInputChange}
            />
            <button type="submit">SIGN IN</button>
            <div className="action-link">
                Not a member?
                <a onClick={handleRegistrationForm}>Join us.</a>
            </div>
        </form>
    );
};

export default SignInForm;
