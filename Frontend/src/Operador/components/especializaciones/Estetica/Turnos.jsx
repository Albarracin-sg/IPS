import React, { useState, useEffect } from "react";
import Screen from "../../../../Televisor/components/Screen"; // Importar el componente Screen

export default function SistemaTurnos() {
// Datos de muestra para propósitos de visualización
const [allPatients, setAllPatients] = useState([
  { nombre: "Juan Pérez", turno: "T001", modulo: "A" },
  { nombre: "María López", turno: "T002", modulo: "B" },
  { nombre: "Carlos Gómez", turno: "T003", modulo: "A" },
  { nombre: "Ana Martínez", turno: "T004", modulo: "C" },
  { nombre: "Luis Rodríguez", turno: "T005", modulo: "B" },
  { nombre: "Sofia Torres", turno: "T006", modulo: "A" },
  { nombre: "Ricardo Gómez", turno: "T007", modulo: "C" },
  { nombre: "Elena Fuentes", turno: "T008", modulo: "A" },
  { nombre: "Miguel Sánchez", turno: "T009", modulo: "B" },
  { nombre: "Laura Díaz", turno: "T010", modulo: "C" },
  { nombre: "Jorge Vega", turno: "T011", modulo: "A" },
  { nombre: "Carmen Ruiz", turno: "T012", modulo: "B" },
]);

// Estado para la paginación
const [currentPage, setCurrentPage] = useState(1);
const pacientesPorPagina = 5; // Mostramos 5 pacientes por página
const [pacientesMostrados, setPacientesMostrados] = useState([]);
const totalPaginas = Math.ceil(allPatients.length / pacientesPorPagina);

// Estado para el turno actual
const [currentTurn, setCurrentTurn] = useState(null);

// Estado para controlar si el botón "Siguiente Turno" está habilitado
const [nextTurnEnabled, setNextTurnEnabled] = useState(true);

// Estado para renderizar el componente Screen
const [showScreen, setShowScreen] = useState(false);

// Actualizar los pacientes mostrados cuando cambia la página o la lista completa
useEffect(() => {
  const indiceInicial = (currentPage - 1) * pacientesPorPagina;
  const indiceFinal = indiceInicial + pacientesPorPagina;
  setPacientesMostrados(allPatients.slice(indiceInicial, indiceFinal));
}, [currentPage, allPatients]);

// Función para pasar al siguiente turno (botón verde "Siguiente Turno")
const siguienteTurno = () => {
  if (allPatients.length > 0 && nextTurnEnabled) {
    // Actualizar turno actual con el primer paciente de la lista
    setCurrentTurn(allPatients[0]);
    // Eliminar el primer paciente de la lista
    setAllPatients(allPatients.slice(1));
    // Deshabilitar el botón "Siguiente Turno"
    setNextTurnEnabled(false);
    // Volver a la primera página cuando se toma el siguiente turno
    setCurrentPage(1);
  }
};

// Función para cuando se presiona el botón azul "Atendido" en el turno actual
// Esta función es usada tanto en el componente SistemaTurnos como en Screen
const marcarComoAtendido = () => {
  // Marcar como atendido (simplemente quitamos el turno actual)
  setCurrentTurn(null);
  // Habilitar el botón "Siguiente Turno"
  setNextTurnEnabled(true);
  
  // Si estamos en la vista de pantalla y queremos regresar a la vista de administración
  // podemos añadir este toggle (opcional)
  // setShowScreen(false);
};

// Funciones de paginación
const irSiguientePagina = () => {
  if (currentPage < totalPaginas) {
    setCurrentPage(currentPage + 1);
  }
};

const irPaginaAnterior = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

// Función para alternar la visualización entre el sistema de turnos y la pantalla
const toggleScreen = () => {
  setShowScreen(!showScreen);
};

// Si se muestra la pantalla, renderizamos el componente Screen con los props necesarios
if (showScreen) {
  return (
    <Screen 
      initialPatient={currentTurn}
      remainingPatients={allPatients}
      onReturn={marcarComoAtendido}
    />
  );
}

// De lo contrario, mostramos el sistema de turnos original
return (
  <div className="flex flex-col justify-center items-center min-h-screen bg-blue-300 p-6 gap-6">
    {/* Tarjeta de Turno Actual */}
    <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full">
      <div className="bg-blue-600 text-white p-5 flex justify-between items-center">
        <h3 className="text-xl font-bold tracking-tight">TURNO ACTUAL</h3>
        
        {/* Botón para alternar a la vista de pantalla */}
        <button 
          onClick={toggleScreen}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium"
        >
          Ver Pantalla
        </button>
      </div>
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <span className="text-md font-medium text-gray-500">1</span>
          <span className="text-md font-semibold text-gray-800">
            {currentTurn ? currentTurn.nombre : "Sin paciente asignado"}
          </span>
        </div>
        <div className="flex items-center text-sm gap-10">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-md font-medium">
            {currentTurn ? currentTurn.turno : "--"}
          </span>
          <span className={`px-4 py-2 rounded-full text-sm font-medium 
            ${!currentTurn ? 'bg-gray-100 text-gray-800' :
              currentTurn.modulo === 'A' ? 'bg-green-100 text-green-800' : 
              currentTurn.modulo === 'B' ? 'bg-purple-100 text-purple-800' : 
              'bg-orange-100 text-orange-800'}`}>
            Módulo {currentTurn ? currentTurn.modulo : "--"}
          </span>
        </div>
        <button 
          onClick={marcarComoAtendido} 
          disabled={!currentTurn}
          className={`px-6 py-3 rounded-lg text-md font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 ${
            !currentTurn 
            ? "bg-gray-400 text-white cursor-not-allowed opacity-70" 
            : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}          >
          Atendido
        </button>
      </div>
    </div>

    {/* Tarjeta de Lista de Espera */}
    <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full">
      {/* Encabezado */}
      <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <h2 className="text-xl font-bold tracking-tight">Gestión de Turnos EStetica</h2>
        <p className="text-md opacity-90 mt-1">Sistema de administración de cola de espera</p>
      </div>
      
      {/* Tabla */}
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-50 text-blue-600">
              <th className="px-6 py-4 text-left font-semibold text-md">#</th>
              <th className="px-6 py-4 text-left font-semibold text-md">Nombre</th>
              <th className="px-6 py-4 text-left font-semibold text-md">Turno</th>
              <th className="px-6 py-4 text-left font-semibold text-md">Módulo</th>
            </tr>
          </thead>
          <tbody>
            {pacientesMostrados.map((patient, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 text-md text-gray-500">
                  {(currentPage - 1) * pacientesPorPagina + index + 1}
                </td>
                <td className="px-6 py-4 font-medium text-md text-gray-800">{patient.nombre}</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {patient.turno}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium 
                    ${patient.modulo === 'A' ? 'bg-green-100 text-green-800' : 
                      patient.modulo === 'B' ? 'bg-purple-100 text-purple-800' :      
                      'bg-orange-100 text-orange-800'}`}>
                    Módulo {patient.modulo}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pie de página con botones de navegación */}
      <div className="p-5 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <button 
            onClick={irPaginaAnterior} 
            disabled={currentPage === 1}
            className={`px-5 py-3 rounded-lg text-md font-medium transition-all duration-200 shadow-md ${
              currentPage === 1 
              ? "bg-gray-400 text-white cursor-not-allowed opacity-70" 
              : "bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg"
            }`}
          >
            Anterior
          </button>
          
          <span className="text-gray-700 font-medium mx-2">
            Página {currentPage} de {totalPaginas}
          </span>
          
          <button 
            onClick={irSiguientePagina}
            disabled={currentPage === totalPaginas}
            className={`px-5 py-3 rounded-lg text-md font-medium transition-all duration-200 shadow-md ${
              currentPage === totalPaginas 
              ? "bg-gray-400 text-white cursor-not-allowed opacity-70" 
              : "bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg"
            }`}
          >
            Siguiente
          </button>
        </div>
        
        <button 
          onClick={siguienteTurno} 
          disabled={!nextTurnEnabled}
          className={`text-white px-6 py-3 rounded-lg text-md font-medium transition-all duration-200 flex items-center
            ${nextTurnEnabled 
              ? "bg-green-500 hover:bg-green-600 shadow-md hover:shadow-lg" 
              : "bg-gray-400 cursor-not-allowed opacity-70"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          Siguiente Turno
        </button>
      </div>
    </div>
  </div>
);
}