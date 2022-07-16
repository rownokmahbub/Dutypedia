import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";

let local_token = null;
if (typeof window !== "undefined") {
  local_token = localStorage?.getItem("token");
}

const AuthContext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(local_token ? local_token : null);
  const [user, setUser] = useState(local_token ? jwtDecode(local_token) : null);
  const [authenticating, setAuthenticating] = useState(true);

  const logOut = () => {
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      setUser(jwtDecode(token));
    } else {
      localStorage.removeItem("token");
      setUser(null);
    }
    setAuthenticating(false);
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        authenticating,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
