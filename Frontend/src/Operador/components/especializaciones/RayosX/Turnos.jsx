import React, { useState } from "react";
import { useTurno } from "../../../services/TurnoProvider";

export default function SistemaTurnos() {
  const { currentTurn, setCurrentTurn, nextTurnEnabled, setNextTurnEnabled } = useTurno();
  
  const [patients, setPatients] = useState([
    { nombre: "Juan Pérez", turno: "T001", modulo: "A" },
    { nombre: "María López", turno: "T002", modulo: "B" },
    { nombre: "Carlos Gómez", turno: "T003", modulo: "A" },
    { nombre: "Ana Martínez", turno: "T004", modulo: "C" },
    { nombre: "Luis Rodríguez", turno: "T005", modulo: "B" }
  ]);

  const nextTurn = () => {
    if (patients.length > 0 && nextTurnEnabled) {
      setCurrentTurn(patients[0]);
      setPatients(patients.slice(1));
      setNextTurnEnabled(false);
    }
  };

  const enableNextTurnButton = () => {
    setCurrentTurn(null);
    setNextTurnEnabled(true);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-300 p-6 gap-6">
      {/* Current Turn Card */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full">
        <div className="bg-blue-600 text-white p-5">
          <h3 className="text-xl font-bold tracking-tight">TURNO ACTUAL</h3>
        </div>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <span className="text-md font-medium text-gray-500">1</span>
            <span className="text-md font-semibold text-gray-800">
              {currentTurn ? currentTurn.nombre : "No hay paciente"}
            </span>
          </div>
          <div className="flex items-center text-sm gap-10">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-md font-medium">
              {currentTurn ? currentTurn.turno : "---"}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              currentTurn
                ? currentTurn.modulo === 'A'
                  ? 'bg-green-100 text-green-800'
                  : currentTurn.modulo === 'B'
                  ? 'bg-purple-100 text-purple-800'
                  : 'bg-orange-100 text-orange-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              Módulo {currentTurn ? currentTurn.modulo : "---"}
            </span>
          </div>
          <button 
            onClick={enableNextTurnButton}
            disabled={!currentTurn}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-md font-medium transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Atendido
          </button>
        </div>
      </div>

      {/* Waiting List Card */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <h2 className="text-xl font-bold tracking-tight">Gestión de Turnos Rayos X</h2>
          <p className="text-md opacity-90 mt-1">Sistema de administración de cola de espera</p>
        </div>
        
        {/* Table */}
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
              {patients.map((patient, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4 text-md text-gray-500">{index + 1}</td>
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
        
        {/* Footer */}
        <div className="p-5 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
          <div className="flex gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg text-md font-medium transition-all duration-200 shadow-md hover:shadow-lg">
              Anterior
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg text-md font-medium transition-all duration-200 shadow-md hover:shadow-lg">
              Siguiente
            </button>
          </div>
          
          <button 
            onClick={nextTurn} 
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