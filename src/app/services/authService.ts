import { STORAGE_KEYS } from 'src/localStorage/storageKeys';
import { getData, storeData } from 'src/localStorage/storageActions';
import { removeItem } from 'src/localStorage/localStorage';
import { SignInData } from 'src/app/modules/Authentication/components/UniversalForm/UniversalForm.types';

const { REFRESH_TOKEN } = STORAGE_KEYS;

export const getRefreshToken = (): SignInData | null => getData(REFRESH_TOKEN);

export const storeRefreshToken = (refreshToken: string) =>
  storeData(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);

export const clearRefreshToken = () => removeItem(REFRESH_TOKEN);
