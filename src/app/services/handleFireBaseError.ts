import { ERROR_MESSAGES } from 'src/app/constants/errorMessages';
import { AuthErrorCodes } from 'firebase/auth';
import { AUTHORIZATION_ERROR_MESSAGES } from 'src/app/modules/Authentication/components/AuthModal/constants/errorMessages';

const { INCORRECT_EMAIL_OR_PASSWORD, INCORRECT_PASSWORD, EMAIL_IN_USE } =
  AUTHORIZATION_ERROR_MESSAGES;

export const handleFireBaseError = (error: any): string => {
  switch (error.code) {
    case AuthErrorCodes.INVALID_PASSWORD:
      return INCORRECT_PASSWORD;
    case AuthErrorCodes.USER_DELETED:
      return INCORRECT_EMAIL_OR_PASSWORD;
    case AuthErrorCodes.EMAIL_EXISTS:
      return EMAIL_IN_USE;
    default:
      return ERROR_MESSAGES.SOMETHING_WENT_WRONG;
  }
};
