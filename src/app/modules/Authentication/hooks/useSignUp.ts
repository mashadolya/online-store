import { Dispatch, SetStateAction, useCallback } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { createSession } from 'src/app/store/slices/authorization/authorizationSlice';
import { useAppDispatch } from 'src/app/store/hooks/useAppDispatch';
import { User } from 'src/app/models/User';
import { firebaseApp } from 'src/firebase/firebase';
import { storeRefreshToken } from 'src/app/services/authService';
import { handleFireBaseError } from 'src/app/services/handleFireBaseError';

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
        dispatch(createSession(currentUser));
        doCloseCallback();
      })
      .catch(error => {
        const { errorMessage } = handleFireBaseError(error);
        setLoginErrors(errorMessage);
      });
  }, []);

  return [signUpUser];
};
