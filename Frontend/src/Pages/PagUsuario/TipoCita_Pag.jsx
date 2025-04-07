// Importación de los componentes necesarios
import LogoInicio from "../../UsuarioQR/components/Logo"; // Componente del logo para el encabezado
import RegistroUsuario from "../../UsuarioQR/components/TipoCIta/Form_General"; // Componente del formulario de registro

// Componente principal para la página de selección de tipo de cita
const TipoCita = () => {
  return (
    // Contenedor principal con estilos de Tailwind CSS
    // - min-h-screen: asegura altura mínima del 100% de la pantalla
    // - w-screen: ancho completo de la ventana
    // - bg-blue-300: color de fondo azul claro
    // - flex con justify-center y items-center: centra el contenido
    // - overflow-auto: permite desplazamiento si el contenido excede la pantalla
    <div className="relative min-h-screen w-screen bg-blue-300 flex justify-center items-center overflow-auto">
      <LogoInicio /> {/* Renderiza el componente del logo */}
      <RegistroUsuario /> {/* Renderiza el formulario de tipo de cita */}
    </div>
  );
};

// Exportación del componente para su uso en otras partes de la aplicación
export default TipoCita;
