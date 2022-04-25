import { getData, storeData } from 'src/localStorage/storeActions';
import { SignInData } from 'src/app/modules/Authentication/components/SignInForm/SignInForm.types';
import { STORAGE_KEYS } from 'src/app/constants/storageConstants';

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
