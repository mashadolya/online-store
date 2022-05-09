import React, { FC, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import FormHeader from 'src/app/components/Form/FormHeader/FormHeader';
import Input from 'src/app/components/controls/Input';
import { FieldContainer } from 'src/app/modules/Authentication/components/AuthModal/AuthModal.styles';
import { FormProps } from 'src/app/modules/Authentication/components/Form.types';
import FormInput from 'src/app/components/Form/controls/FormInput/FormInput';

const UniversalForm: FC<FormProps> = ({ onSubmit, config }) => {
  const { formId, title, headerBody, fields, submitLabel, validationSchema } = config;

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });

  const { reset } = methods;

  useEffect(() => {
    reset();
  }, [formId, reset]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormHeader title={title} body={headerBody} />
        {fields.map(field => (
          <FormInput key={field.name} {...field} />
        ))}
        <FieldContainer>
          <Input type="submit" value={submitLabel} />
        </FieldContainer>
      </form>
    </FormProvider>
  );
};

export default UniversalForm;
