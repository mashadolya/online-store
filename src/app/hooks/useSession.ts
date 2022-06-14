import { useAppDispatch } from 'src/app/store/hooks/useAppDispatch';
import { useEffect } from 'react';
import { getRefreshToken } from 'src/app/services/authService';
import { createSession } from 'src/app/store/slices/authorization/authorizationSlice';

export const useSession = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const refreshToken = getRefreshToken();
    if (refreshToken) {
      dispatch(createSession(refreshToken));
    }
  }, []);
};
