import { signUpValidationSchema } from 'src/app/forms/signUpForm/validationScheme';

export default {
  formId: 'SIGN_UP',
  title: 'Become a NT member',
  headerBody:
    'Create your NT Member profile and get first access to the very best of NT products, inspiration and community.',
  fields: [
    {
      name: 'userName',
      placeholder: 'User Name',
    },
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
    {
      name: 'confirmPassword',
      placeholder: 'Confirm Password',
      type: 'password',
    },
  ],
  submitLabel: 'Join Us',
  validationSchema: signUpValidationSchema,
};
