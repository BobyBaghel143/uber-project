import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import UserSignup from "./pages/UserSingup";
import UserLogin from "./pages/userLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/signup" element={<UserSignup/>} />
        <Route path="/user/login" element={<UserLogin/>}   />
      </Routes>
    </div>
  );
};

export default App;
