import { Dispatch, SetStateAction, useCallback } from 'react';
import { SignInData } from 'src/app/modules/Authentication/components/UniversalForm/UniversalForm.types';
import { getUserFromStore } from 'src/app/modules/Authentication/services/userLocalStorage';
import {
  INCORRECT_EMAIL_OR_PASSWORD,
  INCORRECT_PASSWORD,
} from 'src/app/modules/Authentication/components/AuthModal/constants/errorMessages';
import { createUser } from 'src/app/store/slices/authorization/authorizationSlice';
import { createSession } from 'src/app/services/sessionService';
import { useAppDispatch } from 'src/app/hooks/useAppDispatch';

export const useSignIn = (
  doCloseCallback: () => void,
  setLoginErrors: Dispatch<SetStateAction<string>>
) => {
  const dispatch = useAppDispatch();

  const signInUser = useCallback((values: SignInData) => {
    const userStored = getUserFromStore(values?.email);
    if (!userStored) {
      setLoginErrors(INCORRECT_EMAIL_OR_PASSWORD);
    }
    if (values.password !== userStored.password) {
      setLoginErrors(INCORRECT_PASSWORD);
      return;
    }
    dispatch(createUser(values));
    createSession(values);
    doCloseCallback();
  }, []);

  return [signInUser];
};
