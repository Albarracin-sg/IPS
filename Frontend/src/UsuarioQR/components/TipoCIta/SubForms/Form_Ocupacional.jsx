import React, { useState } from "react";
import { ChevronUp, ChevronDown, CheckSquare, Square } from "lucide-react";
import Modal from "../../Principal/Modal";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../SubmitButton"; // Asegúrate de ajustar la ruta

const Form_Ocupacional = ({ onSubmit, modo = "normal", onSubmitSuccess }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isExpanded, setIsExpanded] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  // Estado para almacenar datos completos
  const [formData, setFormData] = useState({
    type: "paciente-ocupacional",
    selectedOptions: []
  });

  const options = ["Laboratorio", "Medicina General"];

  const toggleOption = (option) => {
    let updatedOptions;
    if (selectedOptions.includes(option)) {
      updatedOptions = selectedOptions.filter((item) => item !== option);
    } else {
      updatedOptions = [...selectedOptions, option];
    }
    
    setSelectedOptions(updatedOptions);
    // Actualizar formData cuando cambian las opciones seleccionadas
    setFormData({
      ...formData,
      selectedOptions: updatedOptions
    });
  };

  const navigate = useNavigate();

  // Función para manejar la acción del botón en el modal
  const handleTipoDeCita = () => {
    // Log form data as JSON to console
    console.log("Form data submitted:", JSON.stringify(formData, null, 2));
    
    // Cierra el modal
    setShowModal(false);
    
    if (modo === "op") {
      // En modo "op", llama a la función callback en lugar de redireccionar
      if (onSubmitSuccess) {
        onSubmitSuccess("datosRegistro");
      }
    } else {
      // En modo normal, redirige a la página de tipo de cita
      navigate("/TipoCita");
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    if (selectedOptions.length > 0) {
      onSubmit(selectedOptions);
      setShowModal(true);
    }
  };

  const handleTurno = () => {
    console.log("Turno generado");
  };

  return (
    <div className="w-full transition-all duration-500 ease-in-out">
      <div
        className="flex items-center justify-between bg-blue-50 p-4 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-medium text-blue-700">
          Seleccione Servicios Ocupacionales
        </h3>
        {isExpanded ? (
          <ChevronUp className="text-blue-700" />
        ) : (
          <ChevronDown className="text-blue-700" />
        )}
      </div>

      {isExpanded && (
        <div className="mt-4 p-4 border border-blue-100 rounded-lg bg-white shadow-lg animate-fadeIn">
          <div className="grid grid-cols-2 gap-3">
            {options.map((option) => (
              <div
                key={option}
                className="flex items-center p-2 cursor-pointer hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                onClick={() => toggleOption(option)}
              >
                {selectedOptions.includes(option) ? (
                  <CheckSquare className="h-5 w-5 text-blue-600 mr-2" />
                ) : (
                  <Square className="h-5 w-5 text-gray-400 mr-2" />
                )}
                <span>{option}</span>
              </div>
            ))}
          </div>

          <SubmitButton
            onClick={handleSubmit}
            disabled={selectedOptions.length === 0}
            text="Enviar Solicitud"
          />
        </div>
      )}
      
      {/* Modal de confirmación */}
      {showModal && (
        <Modal
          onClose={handleClose}
          onGenerarTurno={() => {
            handleClose();
            if (modo === "op") {
              onSubmitSuccess("mostrarTicket");
            } else {
              handleTurno();
            }
          }}
          variant="generarTurno"
        />
      )}
    </div>
  );
};

export default Form_Ocupacional;