import React, { useState } from "react";
// Importación de íconos necesarios
import { ChevronUp, ChevronDown, CheckSquare, Square } from "lucide-react";
// Importación del componente Modal personalizado
import Modal from "../../Principal/Modal";
import { useNavigate } from "react-router-dom";

// Componente especializado para Paciente Ocupacional que recibe una prop onSubmit
const PatienteOcupacional = ({ onSubmit }) => {
  // Estados para manejar las opciones seleccionadas, expansión del formulario y visibilidad del modal
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isExpanded, setIsExpanded] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Opciones disponibles para seleccionar
  const options = ["Laboratorio", "Medicina General"];

  // Función para alternar la selección de opciones
  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // Hook para la navegación
  const navigate = useNavigate();

  // Función para manejar la redirección al turno
  const handleTurno = () => {
    console.log("Redireccionando a página tipo de cita");
    navigate("/turno");
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setShowModal(false);
  };

  // Función para generar el turno y navegar
  const handleGenerarTurno = () => {
    handleTurno();
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = () => {
    if (selectedOptions.length > 0) {
      setShowModal(true);
      // También podría llamar directamente a onSubmit si es necesario
      // onSubmit(selectedOptions);
    }
  };

  return (
    // Contenedor principal con animación de transición
    <div className="w-full transition-all duration-500 ease-in-out">
      {/* Cabecera expandible/colapsable */}
      <div
        className="flex items-center justify-between bg-blue-50 p-4 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-medium text-blue-700">
          Seleccione Servicios Ocupacionales
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
        <div className="mt-4 p-4 border border-blue-100 rounded-lg bg-white shadow-lg animate-fadeIn">
          {/* Grid de opciones */}
          <div className="grid grid-cols-2 gap-3">
            {options.map((option) => (
              <div
                key={option}
                className="flex items-center p-2 cursor-pointer hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md"
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
            onClick={handleSubmit}
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
  );
};

export default PatienteOcupacional;
