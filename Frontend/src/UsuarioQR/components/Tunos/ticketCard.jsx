import React from "react";

const TicketCard = () => {
  // Sample data for demonstration
  const currentPatient = {
    name: "Juan Pérez",
    turn: "A45",
    time: "10:30",
    module: "3"
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md overflow-hidden">
        <div className="p-6 pt-4">
          {/* Header with gradient underline */}
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">
            TURNO GENERADO
          </h1>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
          </div>

          {/* Content container */}
          <div className="bg-white rounded-2xl p-6 mb-4">
            {/* Ticket content */}
            <div className="flex flex-col items-center justify-center space-y-6 py-8">
              {/* Patient Name */}
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Nombre</p>
                <h2 className="text-2xl font-bold text-gray-800">{currentPatient.name}</h2>
              </div>
              
              {/* Time */}
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Hora</p>
                <h3 className="text-xl text-gray-700">{currentPatient.time}</h3>
              </div>
              
              {/* Ticket Number - Highlighted */}
              <div className="text-center bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-xl w-40">
                <p className="text-xs text-white mb-1">NÚMERO</p>
                <h1 className="text-5xl font-bold text-white">{currentPatient.turn}</h1>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center py-3">
            <p className="text-sm font-medium tracking-wide text-gray-700">
              ESPERA AL LLAMADO DEL NÚMERO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;