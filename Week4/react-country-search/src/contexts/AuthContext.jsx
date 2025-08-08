import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuth] = useState(!!localStorage.getItem("token"));

  const login = (token) => {
    localStorage.setItem("token", token);
    setAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
