import { createContext, useContext, useEffect, useState } from "react";
import { loginApi, registerApi } from "../api/authServices";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const raw = localStorage.getItem("auth");
    if (raw) {
      try {
        const data = JSON.parse(raw);
        setUser(data.user || null);
        setToken(data.token || null);
      } catch (error) {
        localStorage.removeItem("auth");
      }
    }
    setLoading(false);
  }, []);

  const saveAuth = (userObj, tokenStr) => {
    setUser(userObj || null);
    setToken(tokenStr || null);
    try {
      localStorage.setItem(
        "auth",
        JSON.stringify({ user: userObj, token: tokenStr })
      );
      console.log({ user: userObj, token: tokenStr });
    } catch (error) {
      console.error("Failde to save localStorage", error);
    }
  };

  const clearAuth = () => {
    setUser(null);
    setToken(null);
    try {
      localStorage.removeItem("auth");
    } catch (error) {
      console.error("Failed to clear auth");
    }
  };

  const register = async (payload) => {
    // caller handles errors
    return registerApi(payload);
  };

  const login = async (credentials) => {
    const res = await loginApi(credentials);
    console.log("LOGIN RESPONSE:", res);

    if (res?.data?.token && res?.data?.user) {
      saveAuth(res.data.user, res.data.token);
      return res;
    }

    if (res?.data?.token) {
      const possibleUser = res?.data?.user || null;
      saveAuth(possibleUser, res.data.token);
      return res;
    }

    if (res?.data?.user && !res?.data?.token) {
      // maybe token in header? try to get it
      const tokenFromHeader =
        res?.headers?.authorization || res?.headers?.Authorization;
      if (tokenFromHeader) {
        const t = tokenFromHeader.replace("Bearer ", "");
        saveAuth(res.data.user, t);
        return res;
      }

      saveAuth(res.data.user, null);
      return res;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, register, login, logout: clearAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
