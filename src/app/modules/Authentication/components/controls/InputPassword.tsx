import React, { ChangeEventHandler } from 'react';
import Input from 'app/components/controls/Input/Input';
import Types from 'app/components/controls/Input/types';

interface IInputProps {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputPassword = ({ value, onChange }: IInputProps) => {
    return <Input type={Types.Password} value={value} placeholder="Password" onChange={onChange} />;
};

export default InputPassword;
