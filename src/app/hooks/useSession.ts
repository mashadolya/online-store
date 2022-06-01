import { useAppDispatch } from 'src/app/hooks/useAppDispatch';
import { useEffect } from 'react';
import { getRefreshToken } from 'src/app/services/authService';
import { createUser } from 'src/app/store/slices/authorization/authorizationSlice';

export const useSession = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentUser = getRefreshToken();
    if (currentUser) {
      dispatch(createUser(currentUser));
    }
  }, []);
};
