import { createContext, useContext, useEffect, useState } from "react";
import { loginApi, registerApi } from "../api/authServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

 
  useEffect(() => {
    try {
      const raw = localStorage.getItem("auth");
      if (raw) {
        const data = JSON.parse(raw);
        setUser(data.user || null);
        setToken(data.token || null);
      }
    } catch (err) {
      localStorage.removeItem("auth");
    }
    setLoading(false);
  }, []);

  
  const saveAuth = (userObj, tokenStr) => {
    setUser(userObj);
    setToken(tokenStr);
    localStorage.setItem(
      "auth",
      JSON.stringify({ user: userObj, token: tokenStr })
    );
  };

 
  const clearAuth = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("auth");
  };


  const register = async (payload) => {
    return registerApi(payload);
  };

 
  const login = async (credentials) => {
    const res = await loginApi(credentials);

    const { user, token } = res.data;

    if (!user || !token) {
      throw new Error("Invalid login response from server");
    }

    saveAuth(user, token);
    return res;
  };

 
  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin";

  
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated,
        isAdmin,
        login,
        register,
        logout: clearAuth,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
