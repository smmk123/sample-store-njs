'use client';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // useEffect(()=>{
  //   console.log("🚀 ~ file: AuthProvider.js:13 ~ AuthProvider ~ auth:", auth),[auth]
  // });
  const refreshToken =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('refreshToken')
      : false;
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
