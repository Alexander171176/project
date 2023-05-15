import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("auth_token");
  const [token, setToken] = useState(storedToken);

  const signin = (newToken, cb) => {
    setToken(newToken);
    cb();
  };

  const signout = (cb) => {
    localStorage.removeItem("auth_token");
    setToken(null);
    cb();
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("auth_token", token);
    } else {
      localStorage.removeItem("auth_token");
    }
  }, [token]);

  const value = { token, signin, signout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
