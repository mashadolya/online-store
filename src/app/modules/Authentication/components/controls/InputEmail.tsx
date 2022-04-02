import React, { ChangeEventHandler } from 'react';
import Input from 'app/components/controls/Input/Input';
import Types from 'app/components/controls/Input/types';

interface IInputProps {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputEmail = ({ value, onChange }: IInputProps) => {
    return (
        <Input type={Types.Email} value={value} placeholder="Email address" onChange={onChange} />
    );
};

export default InputEmail;
