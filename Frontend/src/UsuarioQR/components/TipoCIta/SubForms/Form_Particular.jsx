import React, { useState } from "react";
import { CheckSquare, Square, ChevronDown, ChevronUp } from "lucide-react";
import Modal from "../../Principal/Modal";
import { useNavigate } from "react-router-dom";

// Importaciones desde "lucide-react":
// 1. ChevronUp: Es un ícono que representa una flecha apuntando hacia arriba. 
//    Se utiliza para indicar que un elemento (como un panel o sección) está expandido.
// 2. ChevronDown: Es un ícono que representa una flecha apuntando hacia abajo. 
//    Se utiliza para indicar que un elemento está colapsado o puede expandirse.
// 3. CheckSquare: Es un ícono que representa un cuadro con una marca de verificación. 
//    Se usa para mostrar que una opción está seleccionada.
// 4. Square: Es un ícono que representa un cuadro vacío. 
//    Se utiliza para mostrar que una opción no está seleccionada.

// Estos íconos están ubicados en el componente dentro de:
// - La cabecera expandible/colapsable: ChevronUp y ChevronDown se usan dinámicamente para mostrar el estado de expansión del formulario.
// - Las opciones seleccionables: CheckSquare y Square se usan para mostrar visualmente si una opción está seleccionada o no.

// Componente especializado para pacientes particulares que recibe una función onSubmit como prop
const PatientParticular = ({ onSubmit, modo, onSubmitSuccess }) => {
  // Estados para manejar las opciones seleccionadas, expansión del formulario y visibilidad del modal
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isExpanded, setIsExpanded] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  // Lista de especialidades médicas disponibles
  const options = [
    "Odontología",
    "Medicina General",
    "Rayos X",
    "Estética",
    "Laboratorio Clínico",
    "Medicina Alternativa",
    "Sueroterapia",
    "Vacunación",
  ];
  
  // Hook para la navegación
  const navigate = useNavigate();
  
  // Función para cerrar el modal
  const handleClose = () => {
    setShowModal(false);
  };
  
  // Función para manejar la redirección o ejecución según el modo
  const handleRedirect = () => {
    setShowModal(false); // Cierra el modal si estaba abierto
    
    if (modo === "op") {
      // En modo operador, no redirigimos, sino que ejecutamos onSubmitSuccess
      if (onSubmitSuccess) {
        onSubmitSuccess("cargarRegistro", selectedOptions);
      }
    } else {
      // En modo normal, redirigimos a la página de turno
      navigate("/turno");
    }
  };
  
  // Función para alternar la selección de opciones
  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      <div className="w-full transition-all duration-500 ease-in-out">
        {/* Cabecera expandible/colapsable */}
        <div
          className="flex items-center justify-between bg-blue-50 p-4 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="text-xl font-medium text-blue-700">
            Seleccione Especialidades
          </h3>
          {/* Ícono dinámico según el estado de expansión */}
          {isExpanded ? (
            <ChevronUp className="text-blue-700" />
          ) : (
            <ChevronDown className="text-blue-700" />
          )}
        </div>

        {/* Contenido expandible */}
        {isExpanded && (
          <div className="mt-4 p-4 border border-blue-100 rounded-lg bg-white animate-fadeIn shadow-md">
            {/* Grid de opciones */}
            <div className="grid grid-cols-2 gap-3">
              {options.map((option) => (
                <div
                  key={option}
                  className="flex items-center p-2 cursor-pointer hover:bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-md transform hover:scale-105"
                  onClick={() => toggleOption(option)}
                >
                  {/* Checkbox personalizado */}
                  {selectedOptions.includes(option) ? (
                    <CheckSquare className="h-5 w-5 text-blue-600 mr-2" />
                  ) : (
                    <Square className="h-5 w-5 text-gray-400 mr-2" />
                  )}
                  <span>{option}</span>
                </div>
              ))}
            </div>

            {/* Botón de envío */}
            <button
              className="cursor-pointer mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              onClick={() => {
                onSubmit(selectedOptions);
                setShowModal(true); // Muestra el modal después de enviar
              }}
              disabled={selectedOptions.length === 0}
            >
              Enviar Solicitud
            </button>
          </div>
        )}
        {/* Modal para generar turno */}
        {showModal && (
          <Modal
            onClose={handleClose}
            onGenerarTurno={handleGenerarTurno}
            variant="generarTurno"
          />
        )}
      </div>
    </>
  );
};

export default PatientParticular;
