// Importación de React y el hook useState para manejar el estado
import React, { useState } from "react";

// Importación de los componentes de formularios específicos
import Form_Particular from "./SubForms/Form_Particular";
import Form_Tripulante from "./SubForms/Form_Tripulante";
import Form_Ocupacional from "./SubForms/Form_Ocupacional";

// Componente principal para el registro de usuarios
export default function RegistroUsuario() {
  // Estados para manejar la opción seleccionada, datos del formulario y mensaje de confirmación
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Array de opciones disponibles para el tipo de usuario
  const opciones = [
    { id: "paciente-particular", nombre: "Paciente Particular" },
    { id: "tripulante-naviera", nombre: "Tripulante - Naviera" },
    { id: "paciente-ocupacional", nombre: "Paciente Ocupacional" },
  ];

  // Manejador para cuando se selecciona una opción
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowConfirmation(false);
  };

  // Manejador para el envío del formulario
  const handleSubmit = (data) => {
    setFormData({ type: selectedOption, ...data });
    setShowConfirmation(true);
    console.log("Formulario enviado:", { type: selectedOption, ...data });
  };

  // Función que renderiza el formulario específico según la opción seleccionada
  const renderSpecificForm = () => {
    switch (selectedOption) {
      case "paciente-particular":
        return <Form_Particular onSubmit={handleSubmit} />;
      case "tripulante-naviera":
        return <Form_Tripulante onSubmit={handleSubmit} />;
      case "paciente-ocupacional":
        return <Form_Ocupacional onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    // Contenedor principal con estilos de Tailwind CSS
    <div className="flex flex-col items-center w-full max-w-5xl p-6 rounded-lg bg-white shadow-xl">
      {/* Título del formulario */}
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
        Registro de Usuario
      </h2>

      <div className="flex flex-col items-center w-full">
        {/* Sección de selección de tipo de usuario */}
        <div className="mb-6 w-full">
          <label className="block text-center font-medium text-gray-700 mb-4">
            Selecciona una opción
          </label>
          {/* Contenedor de opciones con diseño flexible */}
          <div className="flex justify-center space-x-4">
            {opciones.map((opcion) => (
              // Tarjeta de opción con estilos condicionales
              <div
                key={opcion.id}
                onClick={() => handleOptionClick(opcion.id)}
                className={`
                                    text-center w-40 h-24 flex items-center justify-center p-4
                                    rounded-lg border-2 transition-all duration-500
                                    ${
                                      selectedOption === opcion.id
                                        ? "border-blue-500 bg-blue-100 transform scale-110 shadow-lg"
                                        : "border-gray-300 bg-gray-100 hover:border-blue-300 hover:shadow-md"
                                    }
                                    cursor-pointer
                                `}
              >
                <span className="text-gray-800 font-medium">
                  {opcion.nombre}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sección del formulario dinámico */}
        {selectedOption && (
          <div className="w-full transition-all duration-500 ease-in-out animate-bounceIn">
            {renderSpecificForm()}
          </div>
        )}

        {/* Mensaje de confirmación */}
        {showConfirmation && (
          <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-lg w-full text-center animate-pulse shadow-lg">
            <h3 className="text-green-700 font-medium mb-2">
              ¡Solicitud Enviada Correctamente!
            </h3>
            <p className="text-green-600">
              Nos pondremos en contacto con usted a la brevedad.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
