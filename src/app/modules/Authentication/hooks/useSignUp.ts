import { Dispatch, SetStateAction, useCallback } from 'react';
import { createUser } from 'src/app/store/slices/authorization/authorizationSlice';
import { useAppDispatch } from 'src/app/hooks/useAppDispatch';
import { User } from 'src/app/models/User';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from 'src/firebase/firebase';
import { storeRefreshToken } from 'src/app/services/authService';
import { ERROR_CODES } from 'src/firebase/constants/errorCodes';
import { EMAIL_ALREADY_IN_USE } from 'src/app/modules/Authentication/components/AuthModal/constants/errorMessages';

interface SignUpFormTypes extends User {
  confirmPassword: string;
}

export const useSignUp = (
  doCloseCallback: () => void,
  setLoginErrors: Dispatch<SetStateAction<string>>
) => {
  const dispatch = useAppDispatch();

  const signUpUser = useCallback((values: SignUpFormTypes) => {
    const { confirmPassword, ...currentUser } = values;

    createUserWithEmailAndPassword(getAuth(firebaseApp), values.email, values.password)
      .then(userCredential => {
        storeRefreshToken(userCredential.user.refreshToken);
        dispatch(createUser(currentUser));
        doCloseCallback();
      })
      .catch(error => {
        if (error.code === ERROR_CODES.AUTH.EMAIL_ALREADY_IN_USE) {
          setLoginErrors(EMAIL_ALREADY_IN_USE);
        }
      });
  }, []);

  return [signUpUser];
};
