import { getJsonItem, setJsonItem } from 'src/localStorage/localStorage';

export const storeData = (key: string, value: any) => setJsonItem(key, value);

export const getData = (key: string) => getJsonItem(key);
