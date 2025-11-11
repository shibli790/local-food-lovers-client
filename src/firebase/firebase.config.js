import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: 'AIzaSyAypjlLRZJMyb_aATOMrdPfzn5kEHnfZHI',
//   authDomain: 'fire-base-p-9b66a.firebaseapp.com',
//   projectId: 'fire-base-p-9b66a',
//   storageBucket: 'fire-base-p-9b66a.firebasestorage.app',
//   messagingSenderId: '958792832189',
//   appId: '1:958792832189:web:467a43c89944251ac153d4',
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
