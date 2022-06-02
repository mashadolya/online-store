import { Dispatch, SetStateAction, useCallback } from 'react';
import { SignInData } from 'src/app/modules/Authentication/components/UniversalForm/UniversalForm.types';
import { createSession } from 'src/app/store/slices/authorization/authorizationSlice';
import { useAppDispatch } from 'src/app/store/hooks/useAppDispatch';
import { storeRefreshToken } from 'src/app/services/authService';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { firebaseApp } from 'src/firebase/firebase';
import { handleFireBaseError } from 'src/app/services/handleFireBaseError';

export const useSignIn = (
  doCloseCallback: () => void,
  setLoginErrors: Dispatch<SetStateAction<string>>
) => {
  const dispatch = useAppDispatch();

  const signInUser = useCallback((values: SignInData) => {
    signInWithEmailAndPassword(getAuth(firebaseApp), values.email, values.password)
      .then(response => {
        storeRefreshToken(response.user.refreshToken);
        dispatch(createSession(values));
        doCloseCallback();
      })
      .catch(error => {
        const { errorMessage } = handleFireBaseError(error);
        setLoginErrors(errorMessage);
      });
  }, []);

  return [signInUser];
};
