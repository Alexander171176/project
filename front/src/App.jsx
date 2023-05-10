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

const App = () => {
  return (
    <div className="App dark:bg-gray-900">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contacts" element={<Contacts/>}/>
        <Route exact path="/faq" element={<Faq/>}/>
        <Route exact path="/agreement" element={<Agreement/>}/>
        <Route exact path="/contract" element={<Contract/>}/>
        <Route exact path="/auth" element={<Auth/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/forgot" element={<Forgot/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/users" element={<Users/>}/>
      </Routes>
    </div>
  );
};

export {App}
