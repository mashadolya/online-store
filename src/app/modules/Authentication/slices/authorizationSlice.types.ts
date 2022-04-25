import { User } from 'src/app/models/User';

export interface AuthState {
    isAuthorized: boolean;
    user: User;
}
