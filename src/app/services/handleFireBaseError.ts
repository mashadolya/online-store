import {
  EMAIL_IN_USE,
  INCORRECT_EMAIL_OR_PASSWORD,
  INCORRECT_PASSWORD,
} from 'src/app/modules/Authentication/components/AuthModal/constants/errorMessages';
import { SOMETHING_WENT_WRONG } from 'src/app/constants/errorMessages';

import { AuthErrorCodes } from 'firebase/auth';

export const handleFireBaseError = (error: any): { errorMessage: string } => {
  const { code } = error;
  let message = '';
  switch (code) {
    case AuthErrorCodes.INVALID_PASSWORD:
      message = INCORRECT_PASSWORD;
      break;
    case AuthErrorCodes.USER_DELETED:
      message = INCORRECT_EMAIL_OR_PASSWORD;
      break;
    case AuthErrorCodes.EMAIL_EXISTS:
      message = EMAIL_IN_USE;
      break;
    default:
      message = SOMETHING_WENT_WRONG;
  }

  return {
    errorMessage: message,
  };
};
