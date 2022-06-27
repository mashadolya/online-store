import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'src/firebase/config';
import { getDatabase, ref, onValue } from 'firebase/database';

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getDatabase(firebaseApp);
