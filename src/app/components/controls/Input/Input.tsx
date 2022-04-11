import { InputContent, InputWrapper } from 'app/components/controls/Input/Input.styles';
import React from 'react';
import InputType from 'app/components/controls/Input/types';

interface IInputProps {
    name: string;
    type?: InputType;
    placeholder?: string;
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, type, placeholder, className, onChange }: IInputProps) => (
    // TODO: Question
    <InputWrapper margin="10px 0" className={className}>
        <InputContent name={name} placeholder={placeholder} type={type} onChange={onChange} />
    </InputWrapper>
);

export default Input;
