// Importación de los componentes necesarios
import LogoInicio from "../../UsuarioQR/components/Logo"; // Componente del logo para el encabezado
import RegistroUsuario from "../../UsuarioQR/components/TipoCIta/Form_General"; // Componente del formulario de registro

// Componente principal para la página de selección de tipo de cita
const TipoCita = () => {
  return (
    // Contenedor principal con estilos de Tailwind CSS
    <div className="relative min-h-screen w-screen bg-blue-300 flex flex-col items-center overflow-auto">
      {/* Contenedor del logo con espacio adecuado */}
      <div className="mt-8 mb-6">
        <LogoInicio />
      </div>

      {/* Contenedor para centrar el RegistroUsuario */}
      <div className="flex flex-1 justify-center items-center w-full">
        <RegistroUsuario />
      </div>
    </div>
  );
};

// Exportación del componente para su uso en otras partes de la aplicación
export default TipoCita;