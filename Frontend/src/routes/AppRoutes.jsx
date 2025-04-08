import { Routes, Route } from "react-router-dom";
import PrincipaPage from "../pages/PagUsuario/Principal_Pag";
import RegisterForm from "../pages/PagUsuario/Register_Pag";
import Ticket from "../pages/PagUsuario/Turnos_Pag";
import TipoCita from "../pages/PagUsuario/TipoCita_Pag";
import Screen from "../Pages/PagScreen/Screen_Pag";
/* Rutas de Operador-Doctor */
import OdontologiaPage from "../Pages/PagOperador/Odontologia/Odontologia_Pag";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrincipaPage />} />
      <Route path="/registro" element={<RegisterForm />} />
      <Route path="/turno" element={<Ticket />} />
      <Route path="/TipoCita" element={<TipoCita />} />
      <Route path="/Screen" element={<Screen />} />
      {/* Rutas de Operador-Doctor */}
      <Route path="/OdontologiaOp" element={<OdontologiaPage />} />
    </Routes>
  );
}

export default AppRoutes;
