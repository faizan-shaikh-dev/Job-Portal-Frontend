import { createContext, useContext, useEffect, useState } from "react";
import { loginApi, registerApi } from "../api/authServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

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
    setUser(userObj);
    setToken(tokenStr);
    localStorage.setItem(
      "auth",
      JSON.stringify({ user: userObj, token: tokenStr })
    );
  };


  const clearAuth = () =>{
    setUser(null);
    setToken(null);
    localStorage.removeItem("auth");
  };

  const register = async (payload)=>{
    const res = await registerApi(payload);
    return res;
  };

  const login= async (credentials) =>{
    const res = await loginApi(credentials);
    const {user: u, token: t} = res.data;
    saveAuth(u, t);
    return res;
  };

  return(
    <AuthContext.Provider value={{user, token, loading, register, login, logOut: clearAuth}}>
        {children}
    </AuthContext.Provider>
  )

};

export const useAuth = () => useContext(AuthContext);
