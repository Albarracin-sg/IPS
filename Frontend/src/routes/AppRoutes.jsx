import { Routes, Route } from "react-router-dom";
import PrincipaPage from "../pages/PagUsuario/Principal_Pag";
import RegisterForm from "../pages/PagUsuario/Register_Pag";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrincipaPage />} />
        <Route path="/registro" element={<RegisterForm />} />
    </Routes>
  );
}

export default AppRoutes;
