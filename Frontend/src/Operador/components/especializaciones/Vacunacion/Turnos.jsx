import React from "react";

export default function Turnos() {
  // Sample data for display purposes
  const samplePatients = [
    { PrimerNombre: "Juan", PrimerApellido: "Pérez", Turno: "T001", module: "A" },
    { PrimerNombre: "María", PrimerApellido: "López", Turno: "T002", module: "B" },
    { PrimerNombre: "Carlos", PrimerApellido: "Gómez", Turno: "T003", module: "A" },
    { PrimerNombre: "Ana", PrimerApellido: "Martínez", Turno: "T004", module: "C" },
    { PrimerNombre: "Luis", PrimerApellido: "Rodríguez", Turno: "T005", module: "B" }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-300 p-4">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full transition-all duration-300 hover:shadow-2xl">
        {/* Header with improved gradient */}
        <header className="p-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <h2 className="text-2xl font-bold tracking-tight">Gestión de Turnos Vacunacion</h2>
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
              {samplePatients.map((patient, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4">{index + 1}</td>
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
          <div className="flex gap-2">
            <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm">
              Anterior
            </button>
            <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm">
              Siguiente
            </button>
          </div>
          
          <div className="flex gap-2">
            <button className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Siguiente Turno
            </button>
            <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Nuevo Turno
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}