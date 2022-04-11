import React, { useState } from 'react';

interface IFormData<T> {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    values: T;
}

export const useForm = <T>(callback: any, initialState: T): IFormData<T> => {
    const [values, setValues] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback();
    };

    return {
        onChange,
        onSubmit,
        values,
    };
};
