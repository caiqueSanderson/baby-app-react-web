import React, { createContext, useState, useContext } from "react";
import { supabase } from "./services/database/supabaseClient";
import i18n from "./i18n";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [language, setLanguage] = useState(i18n.language);
  const [babyInfo, setBabyInfo] = useState({
    name: "",
    weight: "",
    height: "",
  });

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

  async function login(email, password) {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setAuthState({
        ...authState,
        email,
        isAuthenticated: true,
        successMessage: "Login bem-sucedido!",
      });
    } catch (error) {
      setAuthState({
        ...authState,
        errorMessage: "E-mail ou senha inválidos.",
      });
    }
  }

  async function register(email, password) {
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        throw error;
      }

      setAuthState({
        ...authState,
        successMessage: "Cadastro realizado com sucesso!",
      });
    } catch (error) {
      setAuthState({ ...authState, errorMessage: error.message });
    }
  }

  function clearSuccessMessage() {
    setAuthState((prev) => ({ ...prev, successMessage: "" }));
  }

  function logout() {
    setAuthState({
      email: "",
      password: "",
      isAuthenticated: false,
      successMessage: "",
    });
    localStorage.removeItem("@email");
    localStorage.removeItem("@password");
  }

  const globalState = {
    language,
    changeLanguage,
    authState,
    login,
    register,
    logout,
    babyInfo,
    setBabyInfo,
    clearSuccessMessage,
    supabase,
  };

  return (
    <AppContext.Provider value={globalState}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
