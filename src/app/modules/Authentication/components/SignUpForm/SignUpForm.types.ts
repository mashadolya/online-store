import { User } from 'src/app/models/User';

export interface SignUpFormTypes extends User {
    confirmPassword: string;
}
