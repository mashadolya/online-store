import { useAppSelector } from 'src/app/store/hooks/useAppSelector';

export const useIsAuthorized = () => {
  const isAuthorized = useAppSelector(({ auth }) => auth.isAuthorized);
  return [isAuthorized];
};
