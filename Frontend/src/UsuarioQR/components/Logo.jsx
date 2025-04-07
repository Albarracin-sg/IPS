// Importación de la imagen del logo desde los assets
import ipsLogo from "../../assets/ips.png";
// Importación del componente Link para la navegación
import { Link } from "react-router-dom";

// Componente funcional que muestra el logo de la IPS con navegación
function LogoInicio() {
  return (
    // Contenedor del logo posicionado en la esquina superior izquierda
    <div className="absolute top-0 left-0 m-4">
      {/* Componente Link que permite la navegación a la página principal al hacer clic */}
      <Link to="/">
        {/* Imagen del logo con estilos responsive */}
        <img
          src={ipsLogo}
          alt="IPS Logo"
          className="w-20 h-10 md:w-30 md:h-15 cursor-pointer" // Tamaños diferentes para móvil y escritorio
        />
      </Link>
    </div>
  );
}

// Exportación del componente para su uso en otras partes de la aplicación
export default LogoInicio;
