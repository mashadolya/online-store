import { getRefreshToken } from 'src/app/services/authService';

export const useAuth = (): boolean => !!getRefreshToken();
