import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIJwzszYzCDiTIn8jw8Fk5mxyJJ6UWWWs",
  authDomain: "dorm-test.firebaseapp.com",
  projectId: "dorm-test",
  storageBucket: "dorm-test.appspot.com",
  messagingSenderId: "298112268183",
  appId: "1:298112268183:web:817147035d46f85750b6d2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

export { auth, db };
