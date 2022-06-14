import { useAppSelector } from 'src/app/store/hooks/useAppSelector';

export const useIsAuthorized = () => {
  return useAppSelector(({ auth }) => auth.isAuthorized);
};
