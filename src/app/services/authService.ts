import { STORAGE_KEYS } from 'src/localStorage/storageKeys';
import { getData, storeData } from 'src/localStorage/storageActions';
import { removeItem } from 'src/localStorage/localStorage';
import { SignInData } from 'src/app/modules/Authentication/components/UniversalForm/UniversalForm.types';

export const getRefreshToken = (): SignInData | null => getData(STORAGE_KEYS.REFRESH_TOKEN);

export const storeRefreshToken = (refreshToken: string) =>
  storeData(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);

export const clearRefreshToken = () => removeItem(STORAGE_KEYS.REFRESH_TOKEN);
