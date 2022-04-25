import { getSession } from 'src/app/services/sessionService';

export const useAuth = (): boolean => !!getSession();
