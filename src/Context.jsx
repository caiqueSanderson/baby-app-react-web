import React, { createContext, useState, useContext } from "react";
import i18n from "./i18n";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const [authState, setAuthState] = useState({
    email: "",
    password: "",
    isAuthenticated: false,
    successMessage: "",
  });

  function login(email, password) {
    const storedEmail = localStorage.getItem("@email");
    const storedPassword = localStorage.getItem("@password");

    if (email === storedEmail && password === storedPassword) {
      setAuthState({
        ...authState,
        email,
        isAuthenticated: true,
        successMessage: "Login bem-sucedido!",
      });
      return true;
    } else {
      return false;
    }
  }

  function register(email, password) {
    localStorage.setItem("@email", email);
    localStorage.setItem("@password", password);

    setAuthState({
      ...authState,
      successMessage: "Cadastro realizado com sucesso!",
    });
  }

  function clearSuccessMessage() {
    setAuthState((prev) => ({ ...prev, successMessage: "" }));
  }

  const globalState = {
    language,
    changeLanguage,
    authState,
    login,
    register,
    clearSuccessMessage,
  };

  return <AppContext.Provider value={globalState}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
