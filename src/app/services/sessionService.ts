import { STORAGE_KEYS } from 'src/localStorage/storageKeys';
import { getData, storeData } from 'src/localStorage/storageActions';
import { removeItem } from 'src/localStorage/localStorage';
import { SignInData } from 'src/app/modules/Authentication/components/UniversalForm/UniversalForm.types';

const { SESSION_INFO } = STORAGE_KEYS;

export const getSession = (): SignInData | null => getData(SESSION_INFO);

export const createSession = ({ email }: { email: string }) => storeData(SESSION_INFO, { email });

export const clearSession = () => removeItem(SESSION_INFO);
