import { getJsonItem, setJsonItem } from 'app/store/store';

export const storeData = (key: string, value: any) => setJsonItem(key, value);

export const getData = (key: string) => getJsonItem(key);
