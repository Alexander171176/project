import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/public/Home/Home";
import { Contacts } from "./pages/public/Contacts/Contacts";
import { Faq } from "./pages/public/Faq/Faq";
import { Agreement } from "./pages/public/Agreement/Agreement";
import { Contract } from "./pages/public/Contract/Contract";
import { Auth } from "./pages/public/Auth/Auth";
import { Register } from "./pages/public/Register/Register";
import { Login } from "./pages/public/Login/Login";
import { Forgot } from "./pages/public/Forgot/Forgot";
import { Profile } from "./pages/public/Profile/Profile";
import { PublicLayout } from "./components/layouts/PublicLayout/PublicLayout";

import "./App.css";

// HOC проверяет аутентификацию пользователя
import { RequireAuth } from "./hoc/RequireAuth"; 
// контекстный компонент, который предоставляет информацию об аутентификации (токен пользователя) через контекст
import { AuthProvider } from "./hoc/AuthProvider"; 

const App = () => {
  return (
    <div className="App dark:bg-gray-900">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="faq" element={<Faq />} />
            <Route path="agreement" element={<Agreement />} />
            <Route path="contract" element={<Contract />} />
            <Route path="auth" element={<Auth />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot" element={<Forgot />} />
            <Route path="profile" element={
              <RequireAuth><Profile /></RequireAuth>
            } />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export { App };
