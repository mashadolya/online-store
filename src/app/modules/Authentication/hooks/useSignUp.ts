import { useCallback } from 'react';
import {
  getUserFromStore,
  storeUser,
} from 'src/app/modules/Authentication/services/userLocalStorage';

import { createUser } from 'src/app/store/slices/authorization/authorizationSlice';
import { createSession } from 'src/app/services/sessionService';
import { useAppDispatch } from 'src/app/hooks/useAppDispatch';
import { User } from 'src/app/models/User';

interface SignUpFormTypes extends User {
  confirmPassword: string;
}

export const useSignUp = (doCloseCallback: () => void) => {
  const dispatch = useAppDispatch();

  const signUpUser = useCallback((values: SignUpFormTypes) => {
    const userStored = getUserFromStore(values?.email);
    if (!userStored) {
      const { confirmPassword, ...currentUser } = values;
      storeUser(currentUser);
      dispatch(createUser(currentUser));
      createSession(currentUser);
    }
    doCloseCallback();
  }, []);

  return [signUpUser];
};
