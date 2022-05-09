import { useAppDispatch } from 'src/app/hooks/useAppDispatch';
import { useEffect } from 'react';
import { getSession } from 'src/app/services/sessionService';
import { createUser } from 'src/app/store/slices/authorization/authorizationSlice';

export const useSession = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentUser = getSession();
    if (currentUser) {
      dispatch(createUser(currentUser));
    }
  }, []);
};
