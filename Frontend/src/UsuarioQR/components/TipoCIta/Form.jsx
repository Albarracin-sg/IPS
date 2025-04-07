import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function RegistroUsuario() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    console.log(`Opción seleccionada: ${option}`);
  };

  // Opciones con iconos y descripciones
  const opciones = [
    { 
      id: "paciente-particular", 
      nombre: "Paciente Particular",
      descripcion: "Para atención médica individual"
    },
    { 
      id: "tripulante-naviera", 
      nombre: "Tripulante - Naviera",
      descripcion: "Para personal de embarcaciones" 
    },
    { 
      id: "paciente-ocupacional", 
      nombre: "Paciente Ocupacional",
      descripcion: "Para servicios de salud laboral"
    },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-4xl p-8 rounded-lg bg-white shadow-lg">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Registro de Usuario</h2>
        <p className="text-gray-600">Selecciona una opción para continuar</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
        {opciones.map((opcion) => (
          <div
            key={opcion.id}
            onClick={() => handleOptionClick(opcion.id)}
            className={`
              flex flex-col items-center justify-center p-6 rounded-xl 
              border-2 transition-all duration-300 cursor-pointer
              hover:shadow-md hover:border-blue-400
              ${selectedOption === opcion.id 
                ? "border-blue-500 bg-blue-50 shadow-md" 
                : "border-gray-200 bg-gray-50"}
            `}
          >
            <div className="text-center">
              <h3 className="font-medium text-gray-800 mb-2">{opcion.nombre}</h3>
              <p className="text-sm text-gray-500">{opcion.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between w-full mt-4">
        <button 
          className="flex items-center justify-center px-6 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          onClick={() => console.log("Volver")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </button>
        
        <button 
          className={`
            flex items-center justify-center px-6 py-3 rounded-lg transition-colors
            ${selectedOption 
              ? "bg-blue-600 text-white hover:bg-blue-700" 
              : "bg-blue-300 text-white cursor-not-allowed"}
          `}
          disabled={!selectedOption}
          onClick={() => selectedOption && console.log("Siguiente con opción: " + selectedOption)}
        >
          Siguiente
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}