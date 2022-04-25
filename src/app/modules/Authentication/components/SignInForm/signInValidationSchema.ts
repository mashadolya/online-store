import * as Yup from 'yup';
import { LOGIN_VALIDATION_CONSTANTS } from 'src/app/modules/Authentication/constants/loginValidationConstants';

const {
    PASSWORD: { MIN_LENGTH, MAX_LENGTH },
} = LOGIN_VALIDATION_CONSTANTS;

export const SIGN_IN_VALIDATIONS = {
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(MIN_LENGTH, `Password must be at least ${MIN_LENGTH} characters`)
        .max(MAX_LENGTH, `Password must not exceed ${MAX_LENGTH} characters`),
};

export const signInValidationSchema = Yup.object().shape(SIGN_IN_VALIDATIONS);
