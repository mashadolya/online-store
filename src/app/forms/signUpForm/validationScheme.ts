import * as Yup from 'yup';
import { LOGIN_VALIDATION_CONSTANTS } from 'src/app/modules/Authentication/constants/loginValidationConstants';
import { SIGN_IN_VALIDATIONS } from 'src/app/forms/signInForm/validationScheme';

const {
  USER_NAME: { MIN_LENGTH, MAX_LENGTH },
} = LOGIN_VALIDATION_CONSTANTS;

const SIGN_UP_VALIDATIONS = {
  ...SIGN_IN_VALIDATIONS,
  userName: Yup.string()
    .required('Username is required')
    .min(MIN_LENGTH, `Username must be at least ${MIN_LENGTH} characters`)
    .max(MAX_LENGTH, `Username must not exceed ${MAX_LENGTH} characters`),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
};
export const signUpValidationSchema = Yup.object().shape(SIGN_UP_VALIDATIONS);
