import { createContext, useState } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const signin = (userData) => {
    setUser(userData);
    navigate("/");
  }

  const logout = () => {
    setUser(false);
    navigate("/login");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
