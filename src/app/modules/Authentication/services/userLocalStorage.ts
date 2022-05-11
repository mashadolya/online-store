import { getData, storeData } from 'src/localStorage/storageActions';
import { SignInData } from 'src/app/modules/Authentication/components/UniversalForm/UniversalForm.types';
import { STORAGE_KEYS } from 'src/localStorage/storageKeys';

const { VALID_USERS } = STORAGE_KEYS;

const getValidUsers = () => getData(VALID_USERS);

export const getUserFromStore = (email: string) => {
  const users = getValidUsers();
  if (getValidUsers()) {
    return users[email];
  }
  return null;
};

export const storeUser = (values: SignInData) => {
  const users = getValidUsers();
  if (users !== null) {
    storeData(VALID_USERS, { ...users, [values.email]: values });
  } else {
    storeData(VALID_USERS, { [values.email]: values });
  }
};
