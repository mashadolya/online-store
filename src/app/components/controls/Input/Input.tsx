import React, { ChangeEventHandler } from 'react';
import Types from 'app/components/controls/Input/types';
import { InputBody } from 'app/components/controls/Input/Input.styles';

interface IInputProps {
    type: Types;
    value: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type, value, placeholder, onChange }: IInputProps) => {
    return <InputBody type={type} value={value} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
