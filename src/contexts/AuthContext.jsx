import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
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

  return (
    <AuthContext.Provider value={{ authState, login, register, clearSuccessMessage }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
