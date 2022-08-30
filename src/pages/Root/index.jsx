import { Route, Routes } from "react-router-dom";
import { Home } from "./../Home/index";
import { Login } from "./../Login/index";

export const PagesRoot = () => (
  <Routes>
    <Route exact path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
  </Routes>
);