import { Dispatch, SetStateAction, useCallback } from 'react';
import { SignInData } from 'src/app/modules/Authentication/components/UniversalForm/UniversalForm.types';
import {
  INCORRECT_EMAIL_OR_PASSWORD,
  INCORRECT_PASSWORD,
} from 'src/app/modules/Authentication/components/AuthModal/constants/errorMessages';
import { createUser } from 'src/app/store/slices/authorization/authorizationSlice';
import { useAppDispatch } from 'src/app/hooks/useAppDispatch';
import { storeRefreshToken } from 'src/app/services/authService';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { firebaseApp } from 'src/firebase/firebase';
import { ERROR_CODES } from 'src/firebase/constants/errorCodes';

const { WRONG_PASSWORD, USER_NOT_FOUND } = ERROR_CODES.AUTH;

export const useSignIn = (
  doCloseCallback: () => void,
  setLoginErrors: Dispatch<SetStateAction<string>>
) => {
  const dispatch = useAppDispatch();

  const signInUser = useCallback((values: SignInData) => {
    signInWithEmailAndPassword(getAuth(firebaseApp), values.email, values.password)
      .then(response => {
        storeRefreshToken(response.user.refreshToken);
        dispatch(createUser(values));
        doCloseCallback();
      })
      .catch(error => {
        if (error.code === WRONG_PASSWORD) {
          setLoginErrors(INCORRECT_PASSWORD);
        }
        if (error.code === USER_NOT_FOUND) {
          setLoginErrors(INCORRECT_EMAIL_OR_PASSWORD);
        }
      });
  }, []);

  return [signInUser];
};
