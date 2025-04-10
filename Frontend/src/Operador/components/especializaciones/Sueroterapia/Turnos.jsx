import React, { useState, useEffect } from "react";

export default function Turnos() {
  // Datos de muestra para propósitos de visualización
  const [allPatients, setAllPatients] = useState([
    { PrimerNombre: "Juan", PrimerApellido: "Pérez", Turno: "T001", module: "A" },
    { PrimerNombre: "María", PrimerApellido: "López", Turno: "T002", module: "B" },
    { PrimerNombre: "Carlos", PrimerApellido: "Gómez", Turno: "T003", module: "A" },
    { PrimerNombre: "Ana", PrimerApellido: "Martínez", Turno: "T004", module: "C" },
    { PrimerNombre: "Luis", PrimerApellido: "Rodríguez", Turno: "T005", module: "B" },
    { PrimerNombre: "Sofia", PrimerApellido: "Torres", Turno: "T006", module: "A" },
    { PrimerNombre: "Ricardo", PrimerApellido: "Gómez", Turno: "T007", module: "C" },
    { PrimerNombre: "Elena", PrimerApellido: "Fuentes", Turno: "T008", module: "A" },
    { PrimerNombre: "Miguel", PrimerApellido: "Sánchez", Turno: "T009", module: "B" },
    { PrimerNombre: "Laura", PrimerApellido: "Díaz", Turno: "T010", module: "C" },
    { PrimerNombre: "Jorge", PrimerApellido: "Vega", Turno: "T011", module: "A" },
    { PrimerNombre: "Carmen", PrimerApellido: "Ruiz", Turno: "T012", module: "B" },
  ]);

  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const pacientesPorPagina = 5; // Mostramos 5 pacientes por página
  const [pacientesMostrados, setPacientesMostrados] = useState([]);
  const totalPaginas = Math.ceil(allPatients.length / pacientesPorPagina);
  
  // Estado para el turno actual
  const [currentTurn, setCurrentTurn] = useState({
    nombre: "Javier Gomez",
    turno: "T001",
    modulo: "A"
  });

  // Estado para controlar si el botón "Siguiente Turno" está habilitado
  const [nextTurnEnabled, setNextTurnEnabled] = useState(true);

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
      const paciente = allPatients[0];
      setCurrentTurn({
        nombre: `${paciente.PrimerNombre} ${paciente.PrimerApellido}`,
        turno: paciente.Turno,
        modulo: paciente.module
      });
      // Eliminar el primer paciente de la lista
      setAllPatients(allPatients.slice(1));
      // Deshabilitar el botón "Siguiente Turno"
      setNextTurnEnabled(false);
      // Volver a la primera página cuando se toma el siguiente turno
      setCurrentPage(1);
    }
  };

  // Función para cuando se presiona el botón azul "Atendido" en el turno actual
  const habilitarBotonSiguienteTurno = () => {
    // Habilitar el botón "Siguiente Turno"
    setNextTurnEnabled(true);
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

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 to-blue-300 p-4 gap-6">
      {/* Tarjeta de Turno Actual */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full">
        <div className="bg-blue-600 text-white p-5">
          <h3 className="text-xl font-bold tracking-tight">TURNO ACTUAL</h3>
        </div>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <span className="text-md font-medium text-gray-500">1</span>
            <span className="text-md font-semibold text-gray-800">{currentTurn.nombre}</span>
          </div>
          <div className="flex items-center text-sm gap-10">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-md font-medium">
              {currentTurn.turno}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium 
              ${currentTurn.modulo === 'A' ? 'bg-green-100 text-green-800' : 
                currentTurn.modulo === 'B' ? 'bg-purple-100 text-purple-800' : 
                'bg-orange-100 text-orange-800'}`}>
              Módulo {currentTurn.modulo}
            </span>
          </div>
          <button 
            onClick={habilitarBotonSiguienteTurno} 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-md font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Atendido
          </button>
        </div>
      </div>
      
      {/* Tabla de Pacientes */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full transition-all duration-300 hover:shadow-2xl">
        {/* Header with improved gradient */}
        <header className="p-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <h2 className="text-2xl font-bold tracking-tight">Gestión de Turnos Sueroterapia</h2>
          <p className="text-sm opacity-90 mt-1">
            Sistema de administración de cola de espera
          </p>
        </header>
        
        {/* Table with improved styling */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-50 text-blue-600">
                <th className="px-6 py-4 text-left font-medium">#</th>
                <th className="px-6 py-4 text-left font-medium">Nombre</th>
                <th className="px-6 py-4 text-left font-medium">Turno</th>
                <th className="px-6 py-4 text-left font-medium">Módulo</th>
              </tr>
            </thead>
            <tbody>
              {pacientesMostrados.map((patient, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4">
                    {(currentPage - 1) * pacientesPorPagina + index + 1}
                  </td>
                  <td className="px-6 py-4 font-medium">
                    {`${patient.PrimerNombre} ${patient.PrimerApellido}`}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {patient.Turno}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium 
                      ${patient.module === 'A' ? 'bg-green-100 text-green-800' : 
                        patient.module === 'B' ? 'bg-purple-100 text-purple-800' : 
                        'bg-orange-100 text-orange-800'}`}>
                      Módulo {patient.module}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer with improved button styling */}
        <footer className="p-5 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-3 justify-between items-center">
          <div className="flex gap-3 items-center">
            <button 
              onClick={irPaginaAnterior} 
              disabled={currentPage === 1}
              className={`cursor-pointer px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm ${
                currentPage === 1 
                ? "bg-gray-400 text-white cursor-not-allowed opacity-70" 
                : "bg-blue-500 hover:bg-blue-600 text-white"
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
              className={`cursor-pointer px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm ${
                currentPage === totalPaginas 
                ? "bg-gray-400 text-white cursor-not-allowed opacity-70" 
                : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Siguiente
            </button>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={siguienteTurno} 
              disabled={!nextTurnEnabled}
              className={`cursor-pointer px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm flex items-center ${
                nextTurnEnabled 
                ? "bg-green-500 hover:bg-green-600 text-white" 
                : "bg-gray-400 text-white cursor-not-allowed opacity-70"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Siguiente Turno
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}