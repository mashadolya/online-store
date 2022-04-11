import { storeData } from 'app/store/storeActions';
import { STORAGE_KEYS } from 'app/constants/storageConstants';
import { IRegistrationUser } from 'app/components/Header/components/UserMenu/UserMenu';
import getUserFromStore from 'app/modules/Authentication/services/userStore';

const useCreateUser = (values: IRegistrationUser): boolean => {
    if (getUserFromStore(values.email)) {
        return false;
    } else {
        storeData(STORAGE_KEYS.VALID_USERS, { [values.email]: values });
        return true;
    }
};

export default useCreateUser;
