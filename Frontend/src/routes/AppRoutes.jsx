import { Routes, Route } from "react-router-dom";
import PrincipaPage from "../pages/PagUsuario/Principal_Pag";
import RegisterForm from "../pages/PagUsuario/Register_Pag";
import FormularioGeneral from "../UsuarioQR/components/Register/FormulariosTicket/Form_General";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrincipaPage />} />
      <Route path="/registro" element={<RegisterForm />} />
      <Route path="/login" element={<FormularioGeneral />} />
    </Routes>
  );
}

export default AppRoutes;
