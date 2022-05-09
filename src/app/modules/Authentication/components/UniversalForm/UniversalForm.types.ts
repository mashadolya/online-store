import { User } from 'src/app/models/User';

export type SignInData = Omit<User, 'userName'>;
