import React from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom"; 

import "./App.css";

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

import { Users } from "./pages/admin/Users/Users";

import { PrivateRoute } from "./utils/privateRouter";

const App = () => {
  return (
    <div className="App dark:bg-gray-900">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/agreement" element={<Agreement/>}/>
        <Route path="/contract" element={<Contract/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot" element={<Forgot/>}/>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile/>}/>
        </Route>

        <Route path="/admin/users" element={<Users/>}/>

      </Routes>

    </div>
  );
};

export { App }
