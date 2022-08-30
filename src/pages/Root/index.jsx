import { Route, Routes } from "react-router-dom";
import { Cadastro } from "../Cadastro/index";

import { MainHome } from "../MainHome/index";

export const PagesRoot = () => (
  <Routes>
    <Route exact path="/" element={<Cadastro />} />
    <Route path="/main" element={<MainHome />} />
  </Routes>
);
