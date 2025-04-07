// Importación de los módulos necesarios de React y componentes de formularios
import React, { useState } from "react";
import { CheckSquare, Square, ChevronDown, ChevronUp } from "lucide-react";
import Modal from "../../Principal/Modal";
import { useNavigate } from "react-router-dom";

// Componente especializado para Paciente Particular
const PatientParticular = ({ onSubmit }) => {
  // Estado para controlar las opciones seleccionadas
  const [selectedOptions, setSelectedOptions] = useState([]);
  // Estado para controlar la expansión del formulario
  const [isExpanded, setIsExpanded] = useState(true);
  // Estado para controlar la visualización del modal
  const [showModal, setShowModal] = useState(false);

  // Opciones disponibles para seleccionar
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

  // Hook de navegación para redireccionar
  const navigate = useNavigate();

  // Función para manejar la redirección a la página de tipo de cita
  const handleTurno = () => {
    console.log("Redireccionando a página tipo de cita");
    navigate("/turno");
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setShowModal(false);
  };

  // Función para generar turno utilizando la navegación existente
  const handleGenerarTurno = () => {
    handleTurno();
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
      {/* Contenedor principal del formulario */}
      <div className="w-full transition-all duration-500 ease-in-out">
        {/* Encabezado del formulario con opciones */}
        <div
          className="flex items-center justify-between bg-blue-50 p-4 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="text-xl font-medium text-blue-700">
            Seleccione Especialidades
          </h3>
          {isExpanded ? (
            <ChevronUp className="text-blue-700" />
          ) : (
            <ChevronDown className="text-blue-700" />
          )}
        </div>

        {/* Contenido del formulario expandido */}
        {isExpanded && (
          <div className="mt-4 p-4 border border-blue-100 rounded-lg bg-white animate-fadeIn shadow-md">
            <div className="grid grid-cols-2 gap-3">
              {/* Opciones disponibles para seleccionar */}
              {options.map((option) => (
                <div
                  key={option}
                  className="flex items-center p-2 cursor-pointer hover:bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-md transform hover:scale-105"
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

            {/* Botón para enviar la solicitud */}
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
        {/* Modal configurado con la nueva variante "generarTurno" */}
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

// Componente de formulario para pacientes particulares
const Form_Particular = ({ onSubmit }) => {
  // Inicialización del formulario con react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Estado para controlar la visualización del calendario
  const [showCalendar, setShowCalendar] = useState(false);

  // Función que maneja el envío del formulario
  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    // Contenedor del formulario con estilos
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
      {/* Campo de Nombre */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre Completo
        </label>
        <input
          {...register("nombre", { required: "El nombre es requerido" })}
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {/* Mensaje de error para el campo nombre */}
        {errors.nombre && (
          <span className="text-red-500 text-sm">{errors.nombre.message}</span>
        )}
      </div>

      {/* Campo de Cédula */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Cédula
        </label>
        <input
          {...register("cedula", {
            required: "La cédula es requerida",
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo se permiten números",
            },
          })}
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {/* Mensaje de error para el campo cédula */}
        {errors.cedula && (
          <span className="text-red-500 text-sm">{errors.cedula.message}</span>
        )}
      </div>

      {/* Campo de Correo Electrónico */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Correo Electrónico
        </label>
        <input
          {...register("email", {
            required: "El correo es requerido",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Correo electrónico inválido",
            },
          })}
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {/* Mensaje de error para el campo email */}
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      {/* Botón de envío del formulario */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

// Exportación de los componentes
export { PatientParticular, Form_Particular };
