import React, { createContext, useState, useContext } from "react";
import { useApiContext } from "./ApiContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { apiUrl } = useApiContext();

  const [admin, setAdmin] = useState(false);

  const setUserDataLocalStorage = (user, password) => {
    const data = { user: user, password: password };
    localStorage.setItem("adminData", JSON.stringify(data));
  };

  const getUserDataLocalStorage = () => {
    const storedData = localStorage.getItem("adminData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      return {
        user: userData.user,
        password: userData.password,
      };
    }
  };

  const login = async (userName, password) => {
    const data = {
      user: userName,
      password: password,
    };

    const jsonData = JSON.stringify(data);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };

    try {
      const response = await fetch(apiUrl + "/login/", requestOptions);
      if (response.ok) {
        const responseData = await response.json();
        setAdmin(responseData);
        setUserDataLocalStorage(userName, password);
      } else {
        console.error("Error en la solicitud:", response.status);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const logout = () => {
    setUserDataLocalStorage("", "");
    setAdmin(false);
  };

  const modifyAccount = async (
    userName,
    password,
    newUserName,
    newPassword,
    setResponse
  ) => {
    const data = {
      user: userName,
      password: password,
      newUser: newUserName,
      newPassword: newPassword,
    };

    const jsonData = JSON.stringify(data);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };

    try {
      const response = await fetch(apiUrl + "/modify_account/", requestOptions);
      if (response.ok) {
        const responseData = await response.json();
        setResponse(responseData);
        logout();
      } else {
        console.error("Error en la solicitud:", response.status);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ admin, getUserDataLocalStorage, login, logout, modifyAccount }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
