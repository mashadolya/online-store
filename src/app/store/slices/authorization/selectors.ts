import { useAppSelector } from 'src/app/store/hooks/useAppSelector';

export const selectIsAuthorized = () => useAppSelector(({ auth }) => auth.isAuthorized);
export const selectUser = () => useAppSelector(({ auth }) => auth.user);
