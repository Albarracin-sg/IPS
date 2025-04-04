import { Routes, Route } from "react-router-dom";
import PrincipaPage from "../pages/PagUsuario/Principal_Pag";
import RegisterForm from "../pages/PagUsuario/Register_Pag";
import Ticket from "../pages/PagUsuario/Turnos_Pag";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrincipaPage />} />
        <Route path="/registro" element={<RegisterForm />} />
        <Route path="/turno" element={<Ticket />} />
    </Routes>
  );
}

export default AppRoutes;
