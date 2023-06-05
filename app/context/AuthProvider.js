'use client';
import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  useEffect(()=>{
    console.log("🚀 ~ file: AuthProvider.js:13 ~ AuthProvider ~ auth:", auth),[auth]
  });
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "")
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
