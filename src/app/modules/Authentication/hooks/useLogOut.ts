import { STORAGE_KEYS } from 'src/localStorage/storageKeys';
import { removeUser } from 'src/app/store/slices/authorization/authorizationSlice';
import { useAppDispatch } from 'src/app/hooks/useAppDispatch';
import { useCallback } from 'react';

export const useLogOut = () => {
  const dispatch = useAppDispatch();

  const logOut = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.SESSION_INFO);
    dispatch(removeUser());
  }, []);

  return [logOut];
};
