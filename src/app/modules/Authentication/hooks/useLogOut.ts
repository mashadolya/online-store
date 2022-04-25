import { STORAGE_KEYS } from 'src/app/constants/storageConstants';
import { removeUser } from 'src/app/modules/Authentication/slices/authorizationSlice';
import { useAppDispatch } from 'src/app/hooks/useAppDispatch';

export const useLogOut = () => {
    const dispatch = useAppDispatch();

    const logOut = () => {
        localStorage.removeItem(STORAGE_KEYS.SESSION_INFO);
        dispatch(removeUser());
    };
    return [logOut];
};
