import React, { useEffect, useState, useMemo } from 'react';
import AuthContext from './AuthContext'; // ✅ Default import
import { auth, googleProvider } from '../firebase/firebase.config';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // Auth methods
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => signOut(auth);

  const updateUserProfile = data => updateProfile(auth.currentUser, data);

  const resetPassword = email => sendPasswordResetEmail(auth, email);

  // useMemo to optimize context value
  const value = useMemo(
    () => ({
      user,
      loading,
      createUser,
      signIn,
      googleLogin,
      signOutUser,
      updateUserProfile,
      resetPassword,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
