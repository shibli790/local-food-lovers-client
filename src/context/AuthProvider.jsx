import { createContext, useContext, useEffect, useState } from 'react';
import { auth, googleProvider } from '../firebase/firebase.config';
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';


const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const register = (email, password, name, photoURL) =>
    createUserWithEmailAndPassword(auth, email, password).then(() =>
      updateProfile(auth.currentUser, { displayName: name, photoURL })
    );

  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, loginWithGoogle, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export default AuthProvider;


export { AuthContext };
