import { getAuth, signOut } from 'firebase/auth';
import { clearSession } from 'src/app/store/slices/authorization/authorizationSlice';
import { useAppDispatch } from 'src/app/store/hooks/useAppDispatch';
import { useCallback } from 'react';

// TODO: Catch error?
export const useLogOut = () => {
  const auth = getAuth();
  const dispatch = useAppDispatch();

  const logOut = useCallback(() => {
    signOut(auth).then(() => {
      dispatch(clearSession());
    });
  }, []);

  return [logOut];
};
