import { getData } from 'app/store/storeActions';
import { STORAGE_KEYS } from 'app/constants/storageConstants';

export const getUserFromStore = (email: string) => {
    const validUsers = getData(STORAGE_KEYS.VALID_USERS);
    return Object.keys(validUsers).find(key => key === email);
};

export default getUserFromStore;
