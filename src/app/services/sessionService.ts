import { STORAGE_KEYS } from 'src/app/constants/storageConstants';
import { getData, storeData } from 'src/localStorage/storeActions';
import { removeItem } from 'src/localStorage/localStorage';
import { SignInData } from 'src/app/modules/Authentication/components/SignInForm/SignInForm.types';

const { SESSION_INFO } = STORAGE_KEYS;

export const getSession = (): SignInData | null => getData(SESSION_INFO);

export const createSession = ({ email, userName }: { email: string; userName: string }): void =>
    storeData(SESSION_INFO, { email, userName });

export const clearSession = (): void => removeItem(SESSION_INFO);
