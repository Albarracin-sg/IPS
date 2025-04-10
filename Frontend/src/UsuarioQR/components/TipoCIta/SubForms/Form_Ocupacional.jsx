import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, CheckSquare, Square } from "lucide-react";
import Modal from "../../Principal/Modal";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../SubmitButton";
import { useFormData } from "../../../context"; // Importar el hook personalizado

const Form_Ocupacional = ({ onSubmit, modo = "normal", onSubmitSuccess }) => {
  // Obtener datos y funciones del contexto
  const { registroData, setCitaData } = useFormData();

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

  // Comprobar si los datos de registro están disponibles
  useEffect(() => {
    if (!registroData && modo === "op") {
      console.warn("No hay datos de registro disponibles en el contexto");
    }
  }, [registroData, modo]);

  // Actualiza el objeto formateado con estructura final de envío
  const updateFormattedData = (services) => {
    // Obtener fecha actual en formato YYYY-MM-DD
    const fechaActual = new Date().toISOString().split('T')[0];
    
    // Obtener hora actual en formato HH:MM
    const horaActual = new Date().toTimeString().split(' ')[0].slice(0, 5);
    
    // Extrae los datos de registro
    const registroInfo = registroData || {};
    
    return {
      // Datos personales del formulario
      primerNombre: registroInfo.primerNombre,
      segundoNombre: registroInfo.segundoNombre,
      primerApellido: registroInfo.primerApellido,
      segundoApellido: registroInfo.segundoApellido,
      fechaNacimiento: registroInfo.fechaNacimiento,
      localidad: registroInfo.localidad,
      numeroTelefono: registroInfo.numeroTelefono,
      tipoDocumento: registroInfo.tipoDocumento,
      numeroDocumento: registroInfo.numeroDocumento,
      email: registroInfo.email,
      
      // Datos de la cita
      citas: {
        tipoCita: "ocupacional",
        citas: services,
        fecha: fechaActual,
        hora: horaActual
      }
    };
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
  };

  // Acción del botón "Generar Turno" en el modal
  const handleGenerarTurno = () => {
    setShowModal(false);
    if (modo === "op") {
      // Solo pasamos los datos ya formateados al callback
      onSubmitSuccess("mostrarTicket", formattedData);
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
      // Generar los datos formateados
      const datosCompletos = updateFormattedData(selectedOptions);
      
      // Enviar datos inmediatamente aquí
      console.log(JSON.stringify(datosCompletos, null, 2));
      
      // Actualiza el estado de la cita en el contexto
      setCitaData({
        tipoCita: "ocupacional",
        citas: selectedOptions,
        fecha: new Date().toISOString().split('T')[0],
        hora: new Date().toTimeString().split(' ')[0].slice(0, 5)
      });
      
      // Si hay callback onSubmit, pasar los datos seleccionados
      if (onSubmit) {
        onSubmit(datosCompletos);
      }
      
      // Guardar los datos formateados para mostrar en el modal
      setFormattedData(datosCompletos);
      
      // Mostrar el modal de confirmación
      setShowModal(true);
    }
  };

  return (
    <div className="w-full transition-all duration-500 ease-in-out">
      {/* Mostrar resumen de datos de registro si están disponibles */}
      {registroData && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Datos de Registro</h3>
          <p className="text-gray-700">
            <strong>Nombre:</strong> {registroData.primerNombre} {registroData.segundoNombre} {registroData.primerApellido} {registroData.segundoApellido}
          </p>
          <p className="text-gray-700">
            <strong>Documento:</strong> {registroData.tipoDocumento} {registroData.numeroDocumento}
          </p>
        </div>
      )}
      
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