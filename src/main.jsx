import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { AppProvider } from "./Context";

import Home from "./views/Home";
import SignIn from "./views/Auth/SignIn";
import SignUp from "./views/Auth/SignUp";
import Form from "./views/Form";
import Dashboard from "./views/Dashboard";
import Settings from "./views/Settings";
import Protected from "./routes/Protected"; 
import {
  handleVerificationProtected,
  isAuthenticated,
} from "./services/checkAuthentication"; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Protected />}>
        <Route
          index
          element={<Home />}
          loader={() => handleVerificationProtected()}
        />
        <Route
          path="dashboard"
          element={<Dashboard />}
          loader={() => handleVerificationProtected()}
        />
        <Route
          path="settings"
          element={<Settings />}
          loader={() => handleVerificationProtected()}
        />
        <Route
          path="form/:itemType/:id?"
          element={<Form />}
          loader={() => handleVerificationProtected()}
        />
      </Route>

      <Route
        path="signin"
        element={<SignIn />}
        loader={() => isAuthenticated()}
      />
      <Route
        path="signup"
        element={<SignUp />}
        loader={() => isAuthenticated()}
      />
    </Route>
  )
);

const App = () => {
  return (
    <StrictMode>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<App />);
