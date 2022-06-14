import { useCallback } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { clearSession } from 'src/app/store/slices/authorization/authorizationSlice';
import { useAppDispatch } from 'src/app/store/hooks/useAppDispatch';

import { handleFireBaseError } from 'src/app/services/handleFireBaseError';
import { RoutePaths } from 'src/app/routes/routes';
import { useNavigate } from 'react-router-dom';
import { toggleToast } from 'src/app/services/toast/toastService';

export const useLogOut = () => {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  let errorDescription = '';

  const logOut = useCallback(() => {
    signOut(auth)
      .then(() => {
        dispatch(clearSession());
        navigate(RoutePaths.HOME);
      })
      .catch(error => {
        errorDescription = handleFireBaseError(error);
        toggleToast.error(error);
      });
    return errorDescription;
  }, []);

  return logOut;
};
