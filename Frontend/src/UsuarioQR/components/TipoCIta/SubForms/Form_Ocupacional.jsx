import React, { useState } from "react";
import { ChevronUp, ChevronDown, CheckSquare, Square } from "lucide-react";
import Modal from "../../Principal/Modal";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../SubmitButton"; // Asegúrate de ajustar la ruta

const Form_Ocupacional = ({ onSubmit, modo = "normal", onSubmitSuccess }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isExpanded, setIsExpanded] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  // Estado para almacenar datos del formulario
  const [formData, setFormData] = useState({
    type: "paciente-ocupacional",
    selectedOptions: []
  });

  // Estado para almacenar los datos formateados con estructura final
  const [formattedData, setFormattedData] = useState(null);

  const options = ["Laboratorio", "Medicina General"];

  // Hook para redireccionar páginas
  const navigate = useNavigate();

  // Actualiza el objeto formateado con estructura final de envío
  // Incluye fecha y hora automáticamente sin mostrar campos en el formulario
  const updateFormattedData = (services) => {
    // Obtener fecha actual en formato YYYY-MM-DD
    const fechaActual = new Date().toISOString().split('T')[0];
    
    // Obtener hora actual en formato HH:MM
    const horaActual = new Date().toTimeString().split(' ')[0].slice(0, 5);
    
    setFormattedData({
      citas: {
        tipoCita: "ocupacional",
        citas: services,
        fecha: fechaActual,  // Agregar fecha actual al JSON
        hora: horaActual     // Agregar hora actual al JSON
      }
    });
  };

  // Al hacer clic en un servicio, lo añade o lo elimina del estado
  const toggleOption = (option) => {
    let updatedOptions;
    if (selectedOptions.includes(option)) {
      // Si ya está seleccionado, lo quitamos de la lista
      updatedOptions = selectedOptions.filter((item) => item !== option);
    } else {
      // Si no está seleccionado, lo añadimos a la lista
      updatedOptions = [...selectedOptions, option];
    }
    
    setSelectedOptions(updatedOptions);
    // Actualizar formData cuando cambian las opciones seleccionadas
    setFormData({
      ...formData,
      selectedOptions: updatedOptions
    });
    // Actualizar el formato JSON estructurado con las opciones y agregando fecha y hora
    updateFormattedData(updatedOptions);
  };

  // Acción del botón "Generar Turno" en el modal
  const handleGenerarTurno = () => {
    // Mostrar en consola los datos que se enviarán
    console.log(JSON.stringify(formattedData, null, 2));
    setShowModal(false);
    if (modo === "op") {
      onSubmitSuccess("mostrarTicket");
    } else {
      navigate("/Turno");
    }
  };

  // Cierre del modal manualmente
  const handleClose = () => {
    setShowModal(false);
  };

  // Acción al hacer clic en "Enviar Solicitud"
  const handleSubmit = () => {
    if (selectedOptions.length > 0) {
      // Obtener fecha y hora actual para incluir en el envío
      const fechaActual = new Date().toISOString().split('T')[0];
      const horaActual = new Date().toTimeString().split(' ')[0].slice(0, 5);
      
      // Si hay callback onSubmit, pasar los datos seleccionados
      if (onSubmit) {
        onSubmit({
          services: selectedOptions,
          fecha: fechaActual,  // Incluir fecha en callback
          hora: horaActual     // Incluir hora en callback
        });
      }
      
      // Preparar datos formateados para mostrar en el modal
      const dataToLog = {
        citas: {
          tipoCita: "ocupacional",
          citas: selectedOptions,
          fecha: fechaActual,  // Incluir fecha en el modal
          hora: horaActual     // Incluir hora en el modal
        }
      };
      setFormattedData(dataToLog);
      setShowModal(true);
    }
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
      
      {/* Modal de confirmación con datos formateados */}
      {showModal && (
        <Modal
          onClose={handleClose}
          onGenerarTurno={handleGenerarTurno}
          variant="generarTurno"
          userData={formData}
          formattedData={formattedData}
        />
      )}
    </div>
  );
};

export default Form_Ocupacional;