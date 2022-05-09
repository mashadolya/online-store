import { signInValidationSchema } from 'src/app/forms/signInForm/validationScheme';

export default {
  // TODO: constant name
  formId: 'Sign In',
  title: 'Become a NT member',
  fields: [
    {
      name: 'email',
      placeholder: 'Email Address',
      type: 'email',
    },
    {
      name: 'password',
      placeholder: 'Password',
      type: 'password',
    },
  ],
  submitLabel: 'Sign In',
  validationSchema: signInValidationSchema,
};
