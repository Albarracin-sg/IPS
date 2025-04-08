import { Routes, Route } from "react-router-dom";
import PrincipaPage from "../pages/PagUsuario/Principal_Pag";
import RegisterForm from "../pages/PagUsuario/Register_Pag";
import Ticket from "../pages/PagUsuario/Turnos_Pag";
import TipoCita from "../pages/PagUsuario/TipoCita_Pag";
import Screen from "../Pages/PagScreen/Screen_Pag";
/* Rutas de Operador-Doctor */
import OdontologiaPage from "../pages/PagOperador/Especializaciones/Odontologia_Pag";
import MedicinaAlternativaPage from "../pages/PagOperador/Especializaciones/MedicinaAlternativa_Pag";
import EsteticaPage from "../pages/PagOperador/Especializaciones/Estetica_Pag";
import LaboratorioClinicoPage from "../pages/PagOperador/Especializaciones/LaboratorioClinico_Pag";
import RayosXPage from "../pages/PagOperador/Especializaciones/RayosX_Pag";
import MedicinaGeneralPage from "../pages/PagOperador/Especializaciones/MedicinaGeneral_Pag";
import VacuancionesPage from "../pages/PagOperador/Especializaciones/Vacunacion_Pag";
import SueroterapiaPage from "../pages/PagOperador/Especializaciones/Sueroterapia_Pag";

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
      <Route path="/MedicinaAlternativaOp" element={<MedicinaAlternativaPage />} />
      <Route path="/EsteticaOp" element={<EsteticaPage />} />
      <Route path="/LaboratorioClinicoOp" element={<LaboratorioClinicoPage />} />
      <Route path="/RayosXOp" element={<RayosXPage />} />
      <Route path="/MedicinaGeneralOp" element={<MedicinaGeneralPage />} />
      <Route path="/VacunacionOp" element={<VacuancionesPage />} />
      <Route path="/SueroterapiaOp" element={<SueroterapiaPage />} />
    </Routes>
  );
}

export default AppRoutes;
